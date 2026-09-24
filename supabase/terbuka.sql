-- Hanif Dossier terbuka untuk umum, gratis (24 September 2026).
-- Pemilik: "aku mau Hanif Dossier dibuka aja untuk umum, tidak perlu bayar, dibatasi aja
-- sebagian untuk umum dan tetap ada login, modelnya seperti Token Terminal / DefiLlama."
--
-- Tempel seluruh berkas ini di Supabase -> SQL Editor -> Run (proyek fqpktykrkpqaztnpqgxz).
-- Sesudah ini: daftar akun = langsung aktif, tanpa persetujuan admin dan tanpa pembayaran.
-- Halaman situs (akun.js) sudah menganggap setiap akun yang masuk sebagai anggota; SQL ini
-- menyamakan sisi database (pemicu akun baru dan kebijakan gudang) supaya berkas laporan
-- bisa diunduh oleh akun baru tanpa menunggu.

-- 1. Semua pendaftar yang masih menunggu langsung disetujui.
update public.anggota
   set status = 'disetujui', diputuskan_pada = coalesce(diputuskan_pada, now())
 where status = 'menunggu';

-- 2. Akun baru langsung 'disetujui' (pemicu lama: menunggu kecuali diundang).
create or replace function public.tangani_akun_baru()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if coalesce(new.raw_user_meta_data ->> 'aplikasi', '') = 'markas'
     or lower(new.email) like '%@markasku.my.id' then
    return new;                                   -- urusan Markasku, bukan Dossier
  end if;
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  values (new.id, new.email,
          coalesce(new.raw_user_meta_data ->> 'nama', (select nama from public.undangan where lower(email) = lower(new.email)), ''),
          'disetujui', now())
  on conflict (id) do nothing;
  return new;
end $$;

-- 3. Akun Markasku yang sengaja masuk ke Dossier juga langsung aktif.
create or replace function public.gabung_dossier()
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'belum masuk'; end if;
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  select u.id, u.email, coalesce(u.raw_user_meta_data ->> 'nama', ''), 'disetujui', now()
  from auth.users u where u.id = auth.uid()
  on conflict (id) do nothing;
end $$;

-- 4. "Disetujui" = sudah masuk dan tidak ditolak. Masa langganan tidak dipakai lagi.
create or replace function public.disetujui()
returns boolean language sql stable security definer set search_path = public as $$
  select public.adalah_admin()
      or (auth.uid() is not null
          and not exists (select 1 from public.anggota a where a.id = auth.uid() and a.status = 'ditolak'));
$$;

-- 5. Bucket "publik" (dibuat 24 Sep 2026 lewat API, public = true) menampung berkas yang
--    boleh dibaca tanpa masuk: leaderboard.json. Kalau bucketnya belum ada, buat di
--    Storage -> New bucket -> nama "publik", Public bucket dicentang.
--    Bucket "laporan" tetap privat (briefing, radar, schedule, tokenterminal.json, dossier PDF)
--    karena isinya menyentuh portofolio pemilik; dibaca akun yang sudah masuk (gratis).
