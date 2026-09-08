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

-- 2. Siapa admin: pemilik situs. Ganti email di sini kalau berpindah akun.
create or replace function public.adalah_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((auth.jwt() ->> 'email') = 'abdullahhanif033@gmail.com', false);
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
    case when new.email = 'abdullahhanif033@gmail.com' then 'disetujui' else 'menunggu' end,
    case when new.email = 'abdullahhanif033@gmail.com' then now() else null end
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
