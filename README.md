# hanif-dossier.github.io — situs Hanif Dossier Crypto

Satu situs untuk semuanya, tanpa build tool: halaman statis + `akun.js`
(Supabase) untuk sesi anggota. Alamat: <https://hanif-dossier.github.io/>.

| Halaman | Siapa | Isi |
|---|---|---|
| `index.html` | publik | Beranda: angka pasar hari ini, apa yang didapat anggota, dossier terbaru, kerangka arsitektur Web3, metode, batas layanan, FAQ |
| `pasar.html` | publik | Data pasar harian: kapitalisasi RWA (jenis, protokol, riwayat 36 bulan), stablecoin, papan peringkat fee/pendapatan/TVL/DEX, ekosistem per koin dossier. Membaca `data/pasar.json` yang dibuat `scripts/data-pasar.mjs` lewat Actions `data-pasar.yml` tiap 06:40 WIB (secret `COINGECKO_API_KEY`) |
| `riset.html` | publik | Katalog dossier per lapisan Web3 — daftar isi & kutipan terbuka. **Dibuat skrip**, jangan diedit tangan |
| `langganan.html` | publik | Paket Rp 500.000/bulan (Rp 5.000.000/tahun), dossier pesanan, second opinion, cara bayar |
| `privasi.html` | publik | Kebijakan privasi |
| `masuk.html`, `sandi.html` | semua | Daftar / masuk / lupa sandi, halaman status akun |
| `dasbor.html` | anggota disetujui (tamu boleh lihat pasar) | Cuplikan hidup empat laporan |
| `laporan.html?h=…` | anggota disetujui | Penampil laporan dari gudang privat |
| `modul.html` | publik (modul 1–2), anggota (3–8) | Delapan modul edukasi format kelas; isinya di dalam berkas (larik `MODUL`) |
| `pustaka.html` | anggota berlangganan | Katalog gaya aplikasi riset: riset terbaru bersampul logo koin + daftar semua riset, penyaring lapisan Web3; dossier dibuka langsung di `baca.html` |
| `baca.html?b=…` | anggota berlangganan | Pembaca PDF di dalam halaman (pdf.js dari cdnjs) — dossier terbuka tanpa unduh; tautan sementara 5 menit |
| `admin.html` | admin | Setujui / tolak anggota |

`gaya.css` dipakai semua halaman publik; `dasbor.html` masih memakai CSS-nya
sendiri. `pustaka.json` adalah data katalog (dibaca index, langganan, pustaka, baca),
termasuk URL logo koin dari CoinGecko yang diambil saat katalog disusun.

## Menguji halaman anggota tanpa masuk

`_uji-pustaka.html` dan `_uji-baca.html` (tidak ikut git) adalah salinan pustaka/baca
dengan `akun` tiruan; PDF contohnya di `_uji/`. Dibuat ulang oleh skrip kecil di
catatan sesi 8 September 2026. Buka lewat `preview_start beranda`.

## Memperbarui katalog dossier

Setiap ada dossier baru di `D:\Ai Agent\laporan\crypto\<TOKEN>\`:

```
node bisnis/perkakas/buat-halaman-riset.mjs   # riset.html + pustaka.json
node bisnis/perkakas/unggah-dossier.mjs        # PDF ke gudang privat Supabase
git add -A && git commit -m "dossier baru" && git push
```

Token baru perlu dipetakan ke lapisan Web3 di daftar `LAPISAN` dalam skrip
penyusun; kalau belum, ia tampil di kelompok "Belum dipetakan".

## Alur langganan (sejak 9 September 2026)

Daftar akun → email konfirmasi → halaman status akun menampilkan harga dan tombol
**Lanjutkan ke Telegram** (`https://t.me/<BOT>?start=<id akun>`) → bot memberi cara
bayar, menerima foto bukti transfer, meneruskannya ke owner/admin dengan tombol
Setujui/Tolak → disetujui: `anggota.status = disetujui`, `langganan_sampai` diisi
(30/365 hari), email "Akun Anda sudah dikonfirmasi" terkirim (Magic Link) → anggota
membaca dossier langsung di `riset.html`/`pustaka.html`/`baca.html`.
Undangan dari owner (admin.html) tetap langsung disetujui tanpa batas waktu.
DM Instagram hanya petunjuk awal.

Komponen: `supabase/langganan.sql` (kolom `telegram_chat_id`, `langganan_sampai`,
`paket`; tabel `pembayaran`; `disetujui()` memeriksa masa langganan),
`supabase/functions/telegram-langganan/index.ts` (Edge Function webhook bot),
`akun.js` (`BOT_TELEGRAM`, `tautanLangganan()`). Nama bot diisi di `akun.js`;
selama kosong, tombol memakai DM Instagram.

## Tautan pembayaran

Di `langganan.html`, isi `TAUTAN_BAYAR = { bulanan: '', tahunan: '' }` dengan
tautan Mayar/Lynk.id begitu akunnya jadi. Selama kosong, tombolnya memakai alur
manual: daftar akun → DM Instagram → cara bayar dikirim → admin menyetujui.

## Rahasia

`.supabase.env` (kunci rahasia) dan `desain/` tidak ikut git. Kunci di
`akun.js` adalah kunci publik; yang menjaga data adalah kebijakan RLS di
`supabase/skema.sql`.
