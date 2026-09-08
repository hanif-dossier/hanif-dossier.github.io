# hanif-dossier.github.io — situs Hanif Dossier Crypto

Satu situs untuk semuanya, tanpa build tool: halaman statis + `akun.js`
(Supabase) untuk sesi anggota. Alamat: <https://hanif-dossier.github.io/>.

| Halaman | Siapa | Isi |
|---|---|---|
| `index.html` | publik | Beranda: angka pasar hari ini, apa yang didapat anggota, dossier terbaru, kerangka arsitektur Web3, metode, batas layanan, FAQ |
| `riset.html` | publik | Katalog dossier per lapisan Web3 — daftar isi & kutipan terbuka. **Dibuat skrip**, jangan diedit tangan |
| `langganan.html` | publik | Paket Rp 250.000/bulan (Rp 2.500.000/tahun), dossier pesanan, second opinion, cara bayar |
| `privasi.html` | publik | Kebijakan privasi |
| `masuk.html`, `sandi.html` | semua | Daftar / masuk / lupa sandi, halaman status akun |
| `dasbor.html` | anggota disetujui (tamu boleh lihat pasar) | Cuplikan hidup empat laporan |
| `laporan.html?h=…` | anggota disetujui | Penampil laporan dari gudang privat |
| `pustaka.html` | anggota disetujui | Unduh PDF dossier lewat tautan sementara (2 menit) |
| `admin.html` | admin | Setujui / tolak anggota |

`gaya.css` dipakai semua halaman publik; `dasbor.html` masih memakai CSS-nya
sendiri. `pustaka.json` adalah data katalog (dibaca index, langganan, pustaka).

## Memperbarui katalog dossier

Setiap ada dossier baru di `D:\Ai Agent\laporan\crypto\<TOKEN>\`:

```
node bisnis/perkakas/buat-halaman-riset.mjs   # riset.html + pustaka.json
node bisnis/perkakas/unggah-dossier.mjs        # PDF ke gudang privat Supabase
git add -A && git commit -m "dossier baru" && git push
```

Token baru perlu dipetakan ke lapisan Web3 di daftar `LAPISAN` dalam skrip
penyusun; kalau belum, ia tampil di kelompok "Belum dipetakan".

## Tautan pembayaran

Di `langganan.html`, isi `TAUTAN_BAYAR = { bulanan: '', tahunan: '' }` dengan
tautan Mayar/Lynk.id begitu akunnya jadi. Selama kosong, tombolnya memakai alur
manual: daftar akun → DM Instagram → cara bayar dikirim → admin menyetujui.

## Rahasia

`.supabase.env` (kunci rahasia) dan `desain/` tidak ikut git. Kunci di
`akun.js` adalah kunci publik; yang menjaga data adalah kebijakan RLS di
`supabase/skema.sql`.
