-- Memisahkan pendaftar Markasku dari daftar anggota Hanif Dossier (17 Sep 2026).
-- Kedua aplikasi berbagi satu proyek Supabase (satu tabel auth.users). Sebelumnya pemicu `akun_baru`
-- membuat baris public.anggota untuk SETIAP akun baru, jadi pendaftar Markasku muncul sebagai
-- "menunggu" di halaman Anggota Dossier. Markasku menandai pendaftarnya dengan metadata aplikasi='markas'.

-- 1. Pemicu: akun yang lahir dari Markasku tidak dibuatkan baris anggota Dossier.
create or replace function public.tangani_akun_baru()
returns trigger language plpgsql security definer set search_path = public as $$
declare diundang boolean;
begin
  if coalesce(new.raw_user_meta_data ->> 'aplikasi', '') = 'markas'
     or lower(new.email) like '%@markasku.my.id' then
    return new;                                   -- urusan Markasku, bukan Dossier
  end if;
  diundang := public.cek_undangan(new.email);
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  values (new.id, new.email,
          coalesce(new.raw_user_meta_data ->> 'nama', (select nama from public.undangan where lower(email) = lower(new.email)), ''),
          case when diundang then 'disetujui' else 'menunggu' end,
          case when diundang then now() else null end)
  on conflict (id) do nothing;
  return new;
end $$;

-- 2. Pintu resmi: pemilik akun Markasku yang SENGAJA masuk ke situs Dossier baru dicatat sebagai pendaftar Dossier.
--    Dipanggil masuk.html ketika akun yang masuk belum punya baris anggota.
create or replace function public.gabung_dossier()
returns void language plpgsql security definer set search_path = public as $$
declare diundang boolean;
begin
  if auth.uid() is null then raise exception 'belum masuk'; end if;
  select public.cek_undangan(u.email) into diundang from auth.users u where u.id = auth.uid();
  insert into public.anggota (id, email, nama, status, diputuskan_pada)
  select u.id, u.email, coalesce(u.raw_user_meta_data ->> 'nama', ''),
         case when diundang then 'disetujui' else 'menunggu' end,
         case when diundang then now() else null end
  from auth.users u where u.id = auth.uid()
  on conflict (id) do nothing;
end $$;
revoke all on function public.gabung_dossier() from public;
grant execute on function public.gabung_dossier() to authenticated;

-- 3. Bersihkan yang sudah telanjur: hanya baris "menunggu" milik akun Markasku yang belum pernah
--    menyentuh Dossier (tanpa Telegram, tanpa langganan, tanpa pembayaran). Akun Markasku-nya TIDAK dihapus.
delete from public.anggota a
using auth.users u
where u.id = a.id
  and a.status = 'menunggu'
  and (u.raw_user_meta_data ->> 'aplikasi' = 'markas' or lower(u.email) like '%@markasku.my.id')
  and a.telegram_chat_id is null
  and a.langganan_sampai is null
  and not exists (select 1 from public.pembayaran p where p.anggota_id = a.id);

select count(*) as sisa_menunggu from public.anggota where status = 'menunggu';
