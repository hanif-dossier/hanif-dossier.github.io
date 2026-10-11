// kelas/bank.js, data kelas kategori Membaca Bank. Hanya data; logika ada di kelas.html.
// Ditulis sendiri oleh Hanif Dossier (11 Okt 2026). Aturan OJK dan Bank Indonesia disebut nomor aturannya.
(window.KELAS = window.KELAS || []).push({
  kode: 'bank', urut: 12, nama: 'Membaca Bank', warna: '#2f5d73',
  ringkas: 'Bank menjual uang, jadi cara menilainya berbeda dari perusahaan biasa. Lima hal yang menentukan sehat tidaknya sebuah bank, cara membaca laporan publikasinya, dan cara menakar harga sahamnya dari ROE.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1, BAGAIMANA BANK MENGHASILKAN UANG
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'dasar-bank', judul: 'Bagaimana Bank Menghasilkan Uang',
      ringkas: 'Uang orang lain sebagai bahan baku, selisih bunga sebagai laba, dan kenapa ukuran yang biasa dipakai untuk pabrik menyesatkan kalau dipakai untuk bank.',
      pelajaran: [
        { judul: 'Bahan bakunya uang orang lain', isi: `
<h3>Konsepnya</h3>
<p>Pabrik membeli bahan, mengolahnya, lalu menjual barang jadi. Bank melakukan hal yang mirip, hanya bahan bakunya uang. Bank menerima simpanan dari masyarakat, yang disebut <b>dana pihak ketiga (DPK)</b>, lalu meminjamkannya lagi sebagai <b>kredit</b> dengan bunga yang lebih tinggi.</p>
<p>Selisih bunga itulah dapur utama bank. Bunga yang diterima dari kredit dikurangi bunga yang dibayar ke penabung disebut <b>pendapatan bunga bersih (NII)</b>. Dari situ dikurangi biaya kantor dan karyawan, lalu dikurangi kredit yang diperkirakan tidak kembali. Sisanya laba.</p>
<p>Karena itu ada tiga pertanyaan yang selalu diajukan ke bank mana pun: seberapa murah ia mendapat dana, seberapa pintar ia memilih peminjam, dan seberapa hemat ia menjalankan semuanya.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>DPK</b>: giro, tabungan, dan deposito milik nasabah.</li>
<li><b>CASA</b>: giro dan tabungan (current account dan saving account). Bunganya rendah, jadi ini dana murah.</li>
<li><b>Deposito</b>: simpanan berjangka dengan bunga lebih tinggi. Dana mahal.</li>
<li><b>NII</b>: pendapatan bunga dikurangi beban bunga.</li>
<li><b>Fee based income</b>: pendapatan dari komisi, biaya transfer, administrasi, dan jasa lain di luar bunga.</li>
</ul>

<h3>Contoh</h3>
<p>Bank A menghimpun Rp100 triliun. Sebanyak 80 triliun berupa tabungan dan giro dengan bunga rata-rata 1%, sisanya deposito dengan bunga 5%. Beban bunganya setahun sekitar Rp1,8 triliun. Kalau Rp85 triliun disalurkan sebagai kredit dengan bunga rata-rata 10%, pendapatan bunganya Rp8,5 triliun. Selisihnya Rp6,7 triliun.</p>
<p>Bank B menyalurkan kredit yang sama dengan bunga yang sama, tetapi dananya separuh deposito. Beban bunganya sekitar Rp3 triliun. Selisihnya tinggal Rp5,5 triliun, padahal kreditnya sama persis. Perbedaan itu datang dari satu hal: kebiasaan nasabah menaruh uang di tabungan dan giro.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka di contoh dibuat sederhana untuk menunjukkan cara kerjanya. Bank sungguhan juga memegang obligasi pemerintah, menempatkan dana di Bank Indonesia, dan punya pendapatan komisi, jadi hitungannya lebih rumit. Inti gagasannya tetap sama.</div>` },
        { judul: 'Kenapa ukuran perusahaan biasa menyesatkan untuk bank', isi: `
<h3>Konsepnya</h3>
<p>Banyak ukuran yang lazim dipakai untuk menilai perusahaan menjadi salah arti kalau dipakai untuk bank.</p>
<ul>
<li><b>Utang besar itu normal.</b> Simpanan nasabah tercatat sebagai liabilitas. Bank sehat memang punya liabilitas enam sampai sepuluh kali modalnya. Rasio utang terhadap modal tidak bisa dipakai untuk menyebut bank berbahaya.</li>
<li><b>Arus kas operasi bisa negatif walau bank sehat.</b> Kredit baru dicatat sebagai uang keluar di arus kas operasi. Bank yang kreditnya tumbuh cepat terlihat seperti "membakar kas", padahal sedang berkembang.</li>
<li><b>Laba hari ini belum cerita lengkap.</b> Kredit yang buruk biasanya baru ketahuan 12 sampai 18 bulan setelah disalurkan. Bank yang tumbuh sangat cepat bisa terlihat untung besar sebelum tagihan macetnya datang.</li>
</ul>
<p>Yang dinilai pada bank adalah <b>neraca</b>: seberapa tebal modalnya, seberapa sehat kreditnya, dan seberapa stabil dananya. Laba adalah hasil dari ketiganya.</p>

<h3>Contoh</h3>
<p>Dua bank sama-sama membukukan laba naik 20%. Bank pertama tumbuh karena NII naik dan biaya hemat. Bank kedua tumbuh karena mengurangi pencadangan kredit macet, padahal kredit bermasalahnya naik. Laporan laba ruginya mirip. Neracanya bercerita berbeda.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Pengecualian di atas berlaku untuk bank dan lembaga keuangan sejenis. Untuk perusahaan biasa, utang besar dan arus kas negatif tetap tanda yang perlu diperiksa.</div>` },
      ],
      kuis: [
        { tanya: 'Laba utama bank berasal dari…',
          pilihan: ['Selisih bunga kredit dengan bunga yang dibayar ke penabung', 'Penjualan produk tabungan', 'Kenaikan harga sahamnya sendiri', 'Biaya administrasi bulanan saja'],
          jelas: 'Pendapatan bunga bersih (NII) adalah dapur utama. Komisi dan jasa menambah, tetapi bukan sumber utama.' },
        { tanya: 'Kenapa CASA disebut dana murah?',
          pilihan: ['Bunga giro dan tabungan jauh lebih rendah daripada deposito', 'Karena tidak perlu dicatat di neraca', 'Karena dijamin pemerintah', 'Karena jumlahnya selalu kecil'],
          jelas: 'Makin besar porsi giro dan tabungan, makin kecil beban bunga bank, sehingga selisih bunganya lebih lebar.' },
        { tanya: 'Liabilitas bank enam kali modalnya. Bagaimana menilainya?',
          pilihan: ['Normal, karena simpanan nasabah tercatat sebagai liabilitas', 'Bank itu hampir bangkrut', 'Bank itu terlalu banyak meminjam ke bank lain', 'Harus segera dijual'],
          jelas: 'Pada bank, utang adalah bahan dagangan. Yang diperiksa adalah kecukupan modal dan kualitas kredit, bukan rasio utang biasa.' },
        { tanya: 'Arus kas operasi bank yang kreditnya tumbuh cepat sering negatif karena…',
          pilihan: ['Kredit baru dicatat sebagai uang keluar di arus kas operasi', 'Bank sedang merugi', 'Nasabah menarik semua simpanannya', 'Bank tidak membayar pajak'],
          jelas: 'Itulah sebabnya ukuran arus kas bebas (FCF) tidak dipakai untuk menilai bank.' },
        { tanya: 'Kenapa laba bank yang tumbuh sangat cepat perlu dicurigai?',
          pilihan: ['Kredit buruk biasanya baru muncul 12 sampai 18 bulan setelah disalurkan', 'Laba bank tidak boleh naik', 'Karena pajaknya pasti naik', 'Karena harga sahamnya pasti turun'],
          jelas: 'Pertumbuhan agresif bisa menyembunyikan kualitas kredit yang buruk sampai tagihannya jatuh tempo.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2, LIMA HAL YANG MENENTUKAN SEHATNYA BANK
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'pilar-bank', judul: 'Lima Hal yang Menentukan Sehatnya Bank',
      ringkas: 'Modal, kualitas kredit, dana dan efisiensi, kemampuan menghasilkan laba, serta likuiditas. Diperiksa berurutan, karena bank yang gagal di awal tidak perlu dinilai harganya.',
      pelajaran: [
        { judul: 'Modal: bantalan saat kredit tidak kembali', isi: `
<h3>Konsepnya</h3>
<p>Modal bank adalah bantalan. Kalau sebagian kredit tidak kembali, kerugiannya ditanggung modal dulu, baru kemudian simpanan nasabah. Karena itu modal diukur terhadap risiko asetnya, bukan terhadap total aset.</p>
<p>Ukurannya <b>CAR</b> atau dalam aturan Indonesia disebut <b>KPMM</b>: modal dibagi aset tertimbang menurut risiko (ATMR). Kredit ke usaha kecil diberi bobot risiko lebih besar daripada obligasi pemerintah, jadi bank yang banyak memberi kredit butuh modal lebih banyak.</p>
<p>OJK mewajibkan CAR minimum 8% sampai 14% sesuai profil risiko bank (POJK 11/POJK.03/2016), ditambah penyangga: 2,5% capital conservation buffer, 0 sampai 2,5% countercyclical buffer, dan tambahan 1 sampai 2,5% untuk bank yang dianggap sistemik.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>CET1</b>: modal inti utama (saham dan laba ditahan). Minimum 4,5% dari ATMR.</li>
<li><b>Tier 1</b>: modal inti. Minimum 6%.</li>
<li><b>Excess capital</b>: modal di atas kebutuhan. Aman, tetapi kalau terlalu banyak menekan ROE.</li>
</ul>

<h3>Contoh</h3>
<p>Bank dengan CAR 25% punya ruang menyalurkan kredit jauh lebih banyak tanpa menambah modal, dan bisa membagi dividen besar. Bank dengan CAR 13% yang ingin tumbuh cepat kemungkinan harus menahan dividen atau menerbitkan saham baru, yang membuat kepemilikan pemegang saham lama menyusut.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> CAR tinggi tidak otomatis bagus. Modal yang menganggur menurunkan ROE. Yang dicari adalah modal cukup tebal untuk menahan guncangan, sisanya dikembalikan ke pemegang saham.</div>` },
        { judul: 'Kualitas kredit: NPL, LAR, dan pencadangan', isi: `
<h3>Konsepnya</h3>
<p>Di Indonesia kredit dibagi lima tingkat: lancar, dalam perhatian khusus (terlambat sampai 90 hari), kurang lancar, diragukan, dan macet. Tiga tingkat terakhir disebut <b>kredit bermasalah</b> atau <b>NPL</b>.</p>
<p><b>NPL gross</b> adalah kredit bermasalah dibagi total kredit. <b>NPL net</b> adalah NPL setelah dikurangi cadangan yang sudah disiapkan. OJK membatasi NPL net paling tinggi 5%.</p>
<p>NPL saja bisa menipu, karena kredit yang bermasalah bisa direstrukturisasi (diberi keringanan) sehingga kembali tercatat lancar, atau dihapus buku. Karena itu dipakai juga <b>loan at risk (LAR)</b>: kredit dalam perhatian khusus, kredit restrukturisasi yang masih lancar, dan NPL, digabung jadi satu.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>CKPN</b>: cadangan kerugian penurunan nilai, uang yang disisihkan dari laba untuk menutup kredit yang mungkin tidak kembali.</li>
<li><b>Coverage NPL</b>: CKPN dibagi NPL. Di atas 200% berarti cadangannya dua kali lipat kredit bermasalah.</li>
<li><b>Cost of credit</b>: beban CKPN setahun dibagi rata-rata kredit. Menunjukkan berapa persen kredit "hilang" tiap tahun.</li>
</ul>

<h3>Contoh</h3>
<p>Bank X melaporkan NPL turun dari 2,5% ke 2,1%. Kedengarannya membaik. Tetapi LAR-nya naik dari 9% ke 12%, dan kredit yang dihapus buku setahun naik dua kali lipat. Yang terjadi: kredit bermasalah tidak berkurang, hanya dipindahkan ke tempat yang tidak masuk hitungan NPL.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Bank kredit mikro wajar punya NPL dan cost of credit lebih tinggi karena bunga kreditnya juga jauh lebih tinggi. Bandingkan cost of credit dengan imbal hasil kreditnya, jangan dengan bank korporasi.</div>` },
        { judul: 'Dana, efisiensi, laba, dan likuiditas', isi: `
<h3>Konsepnya</h3>
<p><b>Dana dan efisiensi.</b> Rasio CASA menunjukkan porsi dana murah. <b>NIM</b> (net interest margin) adalah pendapatan bunga bersih dibagi aset produktif. Bank yang dananya murah biasanya punya NIM lebar. <b>BOPO</b> adalah beban operasional dibagi pendapatan operasional; makin kecil makin hemat. BOPO ikut memasukkan beban pencadangan, jadi BOPO naik bisa berarti boros atau kredit memburuk. <b>Cost to income ratio</b> memisahkan keduanya karena tidak memasukkan pencadangan.</p>
<p><b>Laba.</b> <b>ROA</b> adalah laba dibagi total aset. <b>ROE</b> adalah laba dibagi modal. ROE dapat dipecah: ROE = ROA × (aset ÷ modal). ROE tinggi karena ROA besar lebih kuat daripada ROE tinggi karena leverage besar.</p>
<p><b>Likuiditas.</b> <b>LDR</b> adalah kredit dibagi DPK. Bank Indonesia memakai rentang rasio intermediasi makroprudensial 84% sampai 94%. LDR terlalu tinggi berarti bank harus berebut deposito mahal untuk tumbuh. LDR terlalu rendah berarti dana menganggur. Selain itu OJK mewajibkan <b>LCR</b> dan <b>NSFR</b> minimal 100%, yaitu ketersediaan aset likuid untuk menghadapi penarikan mendadak.</p>

<h3>Contoh</h3>
<p>Dua bank sama-sama punya ROE 18%. Bank pertama ROA 3% dengan aset enam kali modal. Bank kedua ROA 1,5% dengan aset dua belas kali modal. Kalau terjadi guncangan, bank kedua jauh lebih cepat kehabisan bantalan, walau ROE-nya terlihat sama.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka panduan seperti "BOPO di bawah 60% itu efisien" adalah patokan Hanif Dossier untuk bank besar Indonesia, bukan aturan resmi. Bank dengan model bisnis berbeda wajar punya angka berbeda.</div>` },
      ],
      kuis: [
        { tanya: 'CAR atau KPMM mengukur…',
          pilihan: ['Modal dibandingkan aset tertimbang menurut risiko', 'Laba dibandingkan modal', 'Kredit dibandingkan simpanan', 'Kredit macet dibandingkan total kredit'],
          jelas: 'Modal diukur terhadap risiko aset, karena kredit yang lebih berisiko butuh bantalan lebih besar.' },
        { tanya: 'Kenapa loan at risk (LAR) lebih jujur daripada NPL?',
          pilihan: ['LAR ikut menghitung kredit restrukturisasi dan kredit dalam perhatian khusus', 'LAR dihitung oleh OJK, NPL oleh bank', 'LAR selalu lebih kecil', 'LAR tidak bisa berubah'],
          jelas: 'Kredit bermasalah bisa "dirapikan" lewat restrukturisasi sehingga keluar dari hitungan NPL. LAR tetap menangkapnya.' },
        { tanya: 'Coverage NPL 250% artinya…',
          pilihan: ['Cadangan kerugian 2,5 kali besar kredit bermasalahnya', 'Kredit bermasalah 250% dari modal', 'Bank rugi 2,5 kali', 'NPL naik 250%'],
          jelas: 'Makin besar coverage, makin tebal bantalan sebelum kredit macet menggerus laba.' },
        { tanya: 'BOPO naik dari 60% ke 75%. Apa yang perlu dicek lebih dulu?',
          pilihan: ['Apakah kenaikannya karena biaya kantor atau karena beban pencadangan kredit', 'Harga saham bank', 'Jumlah cabang yang dibuka', 'Tidak perlu dicek, BOPO selalu naik'],
          jelas: 'BOPO memasukkan beban CKPN. Cost to income ratio membantu memisahkan boros biaya dari memburuknya kredit.' },
        { tanya: 'Dua bank ROE-nya sama 18%. Yang lebih kokoh adalah yang…',
          pilihan: ['ROA-nya lebih tinggi dengan leverage lebih kecil', 'Asetnya paling besar', 'Leverage-nya paling besar', 'Jumlah nasabahnya paling banyak'],
          jelas: 'ROE = ROA × leverage. ROE dari leverage besar lebih rapuh saat terjadi guncangan.' },
        { tanya: 'LDR 98% pada bank yang menargetkan kredit tumbuh 15% berarti…',
          pilihan: ['Bank harus menarik dana baru, kemungkinan deposito mahal, sehingga NIM bisa tertekan', 'Bank pasti sehat', 'Bank kelebihan dana', 'Bank tidak boleh memberi kredit lagi'],
          jelas: 'Dengan dana yang hampir habis tersalurkan, pertumbuhan kredit harus dibiayai dana baru yang biasanya lebih mahal.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3, MENAKAR HARGA SAHAM BANK
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'valuasi-bank', judul: 'Menakar Harga Saham Bank',
      ringkas: 'Kenapa bank dinilai dengan PBV, cara menghitung PBV yang pantas dari ROE, dan cara membandingkan bank yang sekelompok tanpa terkecoh model bisnis yang berbeda.',
      pelajaran: [
        { judul: 'PBV yang pantas datang dari ROE', isi: `
<h3>Konsepnya</h3>
<p>Aset bank hampir semuanya aset keuangan: kredit, obligasi, dan kas. Nilainya di buku cukup dekat dengan nilai sebenarnya. Karena itu harga saham bank biasa dibandingkan dengan nilai bukunya, yaitu <b>PBV</b> (price to book value).</p>
<p>PBV berapa yang pantas? Bank yang bisa memutar modalnya dengan imbal hasil tinggi pantas dihargai di atas nilai bukunya. Rumus sederhananya:</p>
<p><b>PBV wajar = (ROE − g) ÷ (COE − g)</b></p>
<ul>
<li><b>ROE</b>: imbal hasil modal yang bisa dipertahankan bertahun-tahun, bukan satu kuartal terbaik.</li>
<li><b>g</b>: pertumbuhan laba jangka panjang, biasanya 5% sampai 8% untuk bank besar Indonesia.</li>
<li><b>COE</b>: biaya modal, yaitu imbal hasil yang diminta investor. Biasanya imbal hasil SBN 10 tahun ditambah premi risiko saham, sekitar 11% sampai 13%.</li>
</ul>

<h3>Contoh</h3>
<p>Bank dengan ROE 20%, pertumbuhan 6%, dan biaya modal 12%: PBV wajarnya (20 − 6) ÷ (12 − 6) = 2,3 kali. Bank dengan ROE 12% dan angka lain sama: (12 − 6) ÷ (12 − 6) = 1 kali. ROE di bawah biaya modal berarti bank merusak nilai, dan PBV di bawah 1 kali memang pantas.</p>
<p>Kalau harga pasar bank pertama hanya 1,8 kali nilai buku, harganya di bawah nilai wajar menurut asumsi ini. Kalau 3,5 kali, pasar sudah menghargai ROE yang lebih tinggi dari yang bisa dipertahankan.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Hasil rumus ini sangat peka terhadap COE dan g. Selisih 1% saja bisa mengubah PBV wajar puluhan persen. Selalu hitung tiga skenario (hati-hati, dasar, optimis) dan perlakukan hasilnya sebagai rentang, bukan harga target.</div>` },
        { judul: 'Membandingkan bank sekelompok dan tanda bahaya', isi: `
<h3>Konsepnya</h3>
<p>Sejak POJK 12/POJK.03/2021, bank dikelompokkan menurut modal intinya ke dalam KBMI: KBMI 1 sampai Rp6 triliun, KBMI 2 sampai Rp14 triliun, KBMI 3 sampai Rp70 triliun, dan KBMI 4 di atas Rp70 triliun. Sebutan lama BUKU I sampai IV sudah tidak dipakai. Bandingkan bank dalam kelompok yang sama, pada periode laporan yang sama.</p>
<p>Bank besar pun punya model berbeda. Bank yang kuat di kredit mikro punya NIM dan NPL lebih tinggi. Bank yang kuat di transaksi punya CASA sangat tinggi dan NIM lebih rendah. Jangan menyimpulkan satu lebih baik hanya dari satu rasio. Yang dibandingkan adalah hasil akhirnya: berapa ROE yang bisa dijaga, dengan risiko kredit berapa.</p>

<h3>Tanda bahaya yang paling sering muncul</h3>
<ul>
<li>CASA turun sementara kredit tumbuh cepat.</li>
<li>NPL turun tetapi LAR, restrukturisasi, atau hapus buku naik.</li>
<li>Coverage turun tajam padahal NPL naik.</li>
<li>Manajemen menaikkan perkiraan cost of credit di tengah tahun.</li>
<li>Pendapatan bunga bersih turun padahal kredit naik.</li>
<li>CAR menipis mendekati batas, bersamaan dengan rencana dividen besar.</li>
</ul>

<div class="batas-berlaku"><b>Batas & risiko.</b> Daftar ini adalah titik awal pemeriksaan, bukan vonis. Satu tanda bisa punya penjelasan wajar. Dua atau tiga tanda bersamaan layak dibaca lebih dalam di laporan dan materi paparan kinerja bank.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa saham bank biasanya dinilai dengan PBV?',
          pilihan: ['Aset bank kebanyakan aset keuangan yang nilai bukunya dekat dengan nilai sebenarnya', 'Karena bank tidak punya laba', 'Karena diwajibkan OJK', 'Karena harga saham bank selalu rendah'],
          jelas: 'Kredit, obligasi, dan kas tercatat dekat dengan nilainya, sehingga nilai buku menjadi patokan yang masuk akal.' },
        { tanya: 'ROE 18%, pertumbuhan 6%, biaya modal 12%. PBV wajarnya kira-kira…',
          pilihan: ['2 kali', '1 kali', '3 kali', '0,5 kali'],
          jelas: '(18 − 6) ÷ (12 − 6) = 12 ÷ 6 = 2 kali nilai buku.' },
        { tanya: 'Bank dengan ROE di bawah biaya modalnya…',
          pilihan: ['Wajar dihargai di bawah nilai bukunya', 'Pasti murah dan layak dibeli', 'Pantas dihargai tinggi karena asetnya besar', 'Tidak boleh membagi dividen'],
          jelas: 'Kalau modal hanya menghasilkan kurang dari yang diminta investor, setiap rupiah modal bernilai kurang dari satu rupiah.' },
        { tanya: 'Pengelompokan bank yang berlaku sekarang berdasarkan modal inti disebut…',
          pilihan: ['KBMI', 'BUKU', 'LCR', 'RIM'],
          jelas: 'KBMI menggantikan BUKU sejak POJK 12/POJK.03/2021.' },
        { tanya: 'NPL sebuah bank turun, tetapi hapus bukunya naik dua kali lipat. Kesimpulan yang tepat…',
          pilihan: ['Perlu diperiksa, karena kredit bermasalah mungkin hanya dipindahkan keluar dari hitungan NPL', 'Kualitas kredit pasti membaik', 'Bank pasti rugi', 'Tidak ada hubungannya'],
          jelas: 'NPL bisa diperkecil dengan menghapus buku. Lihat LAR, hapus buku, dan coverage bersama-sama.' },
      ] },
  ],
});
