-- Skema keanggotaan Hanif Dossier Crypto.
-- Jalankan sekali di Supabase: SQL Editor -> tempel -> Run.
-- Aman dijalankan ulang: semua "create" memakai "if not exists" / "or replace",
-- dan kebijakan lama dibuang dulu sebelum dibuat lagi.

-- 1. Tabel anggota: satu baris per akun. Status mengikuti alur Akademi Crypto:
--    daftar -> menunggu -> (admin) disetujui / ditolak.
create table if not exists public.anggota (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  nama text,
  status text not null default 'menunggu' check (status in ('menunggu', 'disetujui', 'ditolak')),
  dibuat_pada timestamptz not null default now(),
  diputuskan_pada timestamptz,
  catatan text
);
alter table public.anggota enable row level security;

-- 2. Siapa admin: dua email pemilik situs. Tambah/ganti di daftar ini (dan di akun.js).
create or replace function public.adalah_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(lower(auth.jwt() ->> 'email') in ('abdullahhanif033@gmail.com', 'abdhanif033@gmail.com'), false);
$$;

-- 3. Apakah orang yang sedang masuk sudah disetujui (admin selalu boleh).
create or replace function public.disetujui()
returns boolean language sql stable security definer set search_path = public as $$
  select public.adalah_admin()
      or exists (select 1 from public.anggota a where a.id = auth.uid() and a.status = 'disetujui');
$$;

-- 4. Kebijakan tabel anggota: tiap orang hanya melihat barisnya sendiri,
--    admin melihat dan mengubah semua.
drop policy if exists "lihat sendiri" on public.anggota;
create policy "lihat sendiri" on public.anggota
  for select to authenticated using (id = auth.uid() or public.adalah_admin());
drop policy if exists "admin ubah" on public.anggota;
create policy "admin ubah" on public.anggota
  for update to authenticated using (public.adalah_admin()) with check (public.adalah_admin());

-- 5. Setiap akun baru otomatis masuk daftar tunggu. Admin langsung disetujui.
create or replace function public.tangani_akun_baru()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'nama', ''),
    case when lower(new.email) in ('abdullahhanif033@gmail.com', 'abdhanif033@gmail.com') then 'disetujui' else 'menunggu' end,
    case when lower(new.email) in ('abdullahhanif033@gmail.com', 'abdhanif033@gmail.com') then now() else null end
  )
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists akun_baru on auth.users;
create trigger akun_baru after insert on auth.users for each row execute function public.tangani_akun_baru();

-- 6. Gudang laporan (bucket "laporan", privat): hanya anggota yang disetujui
--    boleh mengunduh. Mengunggah hanya lewat kunci rahasia di GitHub Actions.
drop policy if exists "anggota disetujui boleh baca laporan" on storage.objects;
create policy "anggota disetujui boleh baca laporan" on storage.objects
  for select to authenticated using (bucket_id = 'laporan' and public.disetujui());

-- 7. Tampilan ringkas untuk halaman admin (jumlah per status).
create or replace view public.ringkasan_anggota as
  select status, count(*)::int as jumlah from public.anggota group by status;

-- 8. Hapus akun sepenuhnya (dari auth.users; baris anggota ikut terhapus).
--    Hanya admin yang boleh memanggil; dipakai tombol tempat sampah di admin.html.
create or replace function public.hapus_akun(target uuid)
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if not public.adalah_admin() then
    raise exception 'hanya admin yang boleh menghapus akun';
  end if;
  if lower((select email from auth.users where id = target)) in ('abdullahhanif033@gmail.com', 'abdhanif033@gmail.com') then
    raise exception 'akun admin tidak boleh dihapus dari sini';
  end if;
  delete from auth.users where id = target;
end $$;
revoke all on function public.hapus_akun(uuid) from public;
grant execute on function public.hapus_akun(uuid) to authenticated;

-- 9. UNDANGAN (opsional): email yang dimasukkan admin di sini langsung disetujui
--    saat mendaftar. Email lain tetap boleh mendaftar, tapi menunggu persetujuan.
create table if not exists public.undangan (
  email text primary key,
  nama text,
  dibuat_pada timestamptz not null default now()
);
alter table public.undangan enable row level security;
drop policy if exists "admin kelola undangan" on public.undangan;
create policy "admin kelola undangan" on public.undangan
  for all to authenticated using (public.adalah_admin()) with check (public.adalah_admin());

-- Dipanggil halaman daftar sebelum membuat akun (boleh oleh siapa pun, hanya menjawab ya/tidak).
create or replace function public.cek_undangan(e text)
returns boolean language sql stable security definer set search_path = public as $$
  select lower(e) in ('abdullahhanif033@gmail.com', 'abdhanif033@gmail.com')
      or exists (select 1 from public.undangan u where lower(u.email) = lower(e));
$$;
grant execute on function public.cek_undangan(text) to anon, authenticated;

-- Trigger akun baru: diundang -> disetujui, lainnya -> menunggu persetujuan admin.
create or replace function public.tangani_akun_baru()
returns trigger language plpgsql security definer set search_path = public as $$
declare diundang boolean;
begin
  -- Email yang diundang admin (atau admin sendiri) langsung disetujui;
  -- pendaftar lain diterima dulu sebagai "menunggu" sampai admin menyetujui.
  diundang := public.cek_undangan(new.email);
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  values (new.id, new.email,
          coalesce(new.raw_user_meta_data ->> 'nama', (select nama from public.undangan where lower(email) = lower(new.email)), ''),
          case when diundang then 'disetujui' else 'menunggu' end,
          case when diundang then now() else null end)
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists akun_baru on auth.users;
create trigger akun_baru after insert on auth.users for each row execute function public.tangani_akun_baru();
