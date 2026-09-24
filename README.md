# hanif-dossier.github.io — situs Hanif Dossier Crypto

Satu situs untuk semuanya, tanpa build tool: halaman statis + `akun.js`
(Supabase) untuk sesi anggota. Alamat: <https://hanif-dossier.github.io/>.

| Halaman | Siapa | Isi |
|---|---|---|
| `index.html` | publik | **Gerbang**: pengalihan ke `masuk.html` (query/hash ikut). Situs dibuka langsung ke layar masuk, seperti aplikasi Akademi Crypto |
| `tentang.html` | publik | Beranda lama: angka pasar, apa yang didapat anggota, kerangka Web3, metode, FAQ — untuk yang baru kenal; semua tombol riset mengarah ke masuk/daftar |
| `pasar.html` | punya akun (tamu boleh) | Data pasar harian: kapitalisasi RWA (jenis, protokol, riwayat 36 bulan), stablecoin, papan peringkat fee/pendapatan/TVL/DEX, ekosistem per koin dossier. Membaca `data/pasar.json` yang dibuat `scripts/data-pasar.mjs` lewat Actions `data-pasar.yml` tiap 06:40 WIB (secret `COINGECKO_API_KEY`) |
| `riset.html` | punya akun (tamu boleh pratinjau) | Katalog dossier per lapisan Web3 — daftar isi & kutipan; "Baca dossier" untuk yang sudah masuk (akun gratis). **Dibuat skrip**, jangan diedit tangan |
| `langganan.html` | publik | Pengalih ke `masuk.html` (tidak ada lagi paket berbayar sejak 24 Sep 2026) |
| `privasi.html` | publik | Kebijakan privasi |
| `masuk.html`, `sandi.html` | semua | Daftar / masuk / lupa sandi, halaman status akun |
| `dasbor.html` | anggota disetujui (tamu boleh lihat pasar) | Cuplikan hidup empat laporan |
| `laporan.html?h=…` | anggota disetujui | Penampil laporan dari gudang privat |
| `modul.html` | punya akun: modul 1–2 untuk tamu, 3–8 untuk anggota | Delapan modul edukasi format kelas; isinya di dalam berkas (larik `MODUL`) |
| `kelas.html` + `kelas/*.js` | **katalog publik**; kategori `dasar` & `bitcoin` terbuka tanpa akun, lainnya butuh akun gratis (`PENGATURAN.kategoriTerbuka`) | Kelas teknologi blockchain gaya katalog kursus: 6 kategori (Dasar Blockchain, Bitcoin, Ethereum & Smart Contract, Keamanan Web3, DeFi & DApp, Teknologi Lanjutan), 37 kelas, 87 pelajaran, 204 soal kuis. Satu berkas data per kategori di `kelas/`; logika (katalog → daftar pelajaran → pembaca → kuis kelas) di `kelas.html`. Kemajuan ("Selesai", % per kelas) di localStorage `kelas-kemajuan`. Tautan: `kelas.html#kelas/utxo`, `#kelas/utxo/2`, `#kelas/utxo/kuis`, `#kategori/defi`. Materi orisinal (tidak menyalin Akademi Crypto), sudah diperiksa agen pemeriksa |
| `kuis.html` + `kuis-soal.js` | **publik, tanpa daftar** | Jalur belajar 11 level berurutan (blockchain → Bitcoin → Ethereum → koin L1 → koin infrastruktur → keamanan → stablecoin & bursa → DeFi → membaca token → siklus → mental & alokasi) + ujian akhir 20 soal acak. Bank soal (174) di `kuis-soal.js`, logika di `kuis.html` (`PENGATURAN`: batas lulus 70%, jumlah ujian). Penjelasan + sumber + tautan modul tiap jawaban, kemajuan di localStorage (`kuis-kemajuan`), tombol bagikan skor. Tautan langsung: `kuis.html#level-3`, `kuis.html#ujian`. Bahan Discord Akademi Crypto: `riset\catatan-akademi-crypto-lanjutan.md` |
| `pustaka.html` | akun gratis | Katalog gaya aplikasi riset: riset terbaru bersampul logo koin + daftar semua riset, penyaring lapisan Web3; dossier dibuka langsung di `baca.html` |
| `baca.html?b=…` | akun gratis | Pembaca PDF di dalam halaman (pdf.js dari cdnjs) — dossier terbuka tanpa unduh; tautan sementara 5 menit |
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

## Akses gratis (sejak 24 September 2026)

Situs terbuka untuk umum tanpa bayar, model Token Terminal / DefiLlama. Tanpa akun:
tentang, pasar (leaderboard dari bucket publik `publik`), bitcoin, metrik, kelas, kuis,
riset (daftar isi dossier). Dengan akun gratis: dasbor, laporan (briefing, schedule,
screening), pustaka dan baca (dossier penuh), tab Koinmu di pasar, nilai kuis, notifikasi.
Daftar akun = langsung aktif (`supabase/terbuka.sql`: pemicu akun baru 'disetujui',
`disetujui()` = sudah masuk dan tidak ditolak). Daftar aksesnya ada di kepala `akun.js`.

Sisa alur lama (tidak dipakai lagi, disimpan sebagai arsip): `supabase/langganan.sql`,
Edge Function `supabase/functions/telegram-langganan/index.ts` (pesannya sudah diganti
"gratis", perlu `supabase functions deploy` bila bot masih hidup), kolom `langganan_sampai`
dan `paket`, tabel `pembayaran`, halaman `admin.html` bagian persetujuan.

## Rahasia

`.supabase.env` (kunci rahasia) dan `desain/` tidak ikut git. Kunci di
`akun.js` adalah kunci publik; yang menjaga data adalah kebijakan RLS di
`supabase/skema.sql`.

## Aplikasi (PWA) dan menu pil

Situs bisa dipasang di layar utama HP/desktop: `manifest.webmanifest` + `sw.js` (jaringan
dulu, cache hanya cadangan offline; Supabase dan API luar tidak pernah di-cache) + `ikon-*.png`.
`aplikasi.js` memberi ikon pada tiap tautan `nav.menu`, mendaftarkan service worker di alamat
terbit, dan menawarkan pil "Pasang aplikasi"; `aplikasi.css` menjadikan menu pil bergaris
(aktif terisi sage, bisa digeser di layar sempit). Tiap halaman memuat keduanya sebelum `</head>`.
Kalau mengubah `sw.js`, naikkan nama `CACHE` supaya pembaruan terpasang di semua perangkat.
