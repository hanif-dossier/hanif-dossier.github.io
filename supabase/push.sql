-- Notifikasi briefing pagi (Web Push) untuk Hanif Dossier. Dijalankan 17 Sep 2026 lewat Management API.
-- Satu baris per perangkat/browser; hanya pemiliknya yang bisa membaca/mengubah (RLS).
create table if not exists public.dossier_push (
  endpoint   text primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  langganan  jsonb not null,                       -- PushSubscription.toJSON()
  aktif      boolean not null default true,
  perangkat  text,                                 -- potongan user-agent, untuk membedakan HP dan laptop
  dibuat     timestamptz not null default now(),
  diperbarui timestamptz not null default now()
);
alter table public.dossier_push enable row level security;
drop policy if exists "push milik sendiri" on public.dossier_push;
create policy "push milik sendiri" on public.dossier_push
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Catatan kiriman per hari: mencegah notifikasi ganda saat workflow jalan lebih dari sekali.
-- Tidak ada kebijakan RLS = hanya kunci service (GitHub Actions) yang bisa menyentuhnya.
create table if not exists public.dossier_push_log (
  tanggal   date primary key,
  judul     text,
  jumlah    integer not null default 0,
  gagal     integer not null default 0,
  dihapus   integer not null default 0,
  dikirim   timestamptz not null default now()
);
alter table public.dossier_push_log enable row level security;
