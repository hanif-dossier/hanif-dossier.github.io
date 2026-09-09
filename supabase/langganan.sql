-- Langganan lewat bot Telegram — pelengkap skema.sql. Aman dijalankan ulang.
-- Jalankan di Supabase SQL Editor (atau lewat Management API oleh Claude).

-- 10. Kolom langganan di tabel anggota.
alter table public.anggota
  add column if not exists telegram_chat_id bigint,
  add column if not exists langganan_sampai date,
  add column if not exists paket text;
create index if not exists anggota_telegram_idx on public.anggota (telegram_chat_id);

-- 11. Catatan pembayaran: satu baris per bukti transfer yang dikirim ke bot.
create table if not exists public.pembayaran (
  id bigserial primary key,
  anggota_id uuid not null references public.anggota (id) on delete cascade,
  paket text not null default 'bulanan' check (paket in ('bulanan', 'tahunan')),
  bukti_file_id text,
  status text not null default 'menunggu' check (status in ('menunggu', 'disetujui', 'ditolak')),
  pesan_admin jsonb,
  dibuat_pada timestamptz not null default now(),
  diputuskan_pada timestamptz,
  diputuskan_oleh text
);
alter table public.pembayaran enable row level security;
drop policy if exists "lihat pembayaran sendiri" on public.pembayaran;
create policy "lihat pembayaran sendiri" on public.pembayaran
  for select to authenticated using (anggota_id = auth.uid() or public.adalah_admin());
drop policy if exists "admin ubah pembayaran" on public.pembayaran;
create policy "admin ubah pembayaran" on public.pembayaran
  for all to authenticated using (public.adalah_admin()) with check (public.adalah_admin());

-- 12. "Disetujui" kini juga memeriksa masa langganan. Undangan pemilik dan admin
--     tidak punya tanggal habis (langganan_sampai kosong) = akses tanpa batas.
create or replace function public.disetujui()
returns boolean language sql stable security definer set search_path = public as $$
  select public.adalah_admin()
      or exists (
        select 1 from public.anggota a
        where a.id = auth.uid() and a.status = 'disetujui'
          and (a.langganan_sampai is null or a.langganan_sampai >= current_date)
      );
$$;

-- 13. Pengingat otomatis (dipanggil tiap jam lewat ?tugas=pengingat).
alter table public.pembayaran
  add column if not exists pengingat_pada timestamptz,
  add column if not exists pengingat_pengirim_pada timestamptz;
alter table public.anggota add column if not exists pengingat_pada timestamptz;
