// kelas/uang.js — data kelas kategori Keuangan Pribadi & Bisnis. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'uang', urut: 10, nama: 'Keuangan Pribadi & Bisnis', warna: '#a8794a',
  ringkas: 'Fondasi yang menentukan apakah investasi Anda bisa bertahan: urutan membangun keuangan, cara menangani hutang, dan cara membaca laporan keuangan usaha sendiri maupun perusahaan yang sahamnya Anda beli. Ditutup dengan pajak dan pencatatan di Indonesia.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1 — URUTAN MEMBANGUN KEUANGAN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'urutan', judul: 'Urutan Membangun Keuangan',
      ringkas: 'Lima anak tangga yang urutannya tidak boleh dibalik, dan dua angka yang harus Anda tahu tentang diri sendiri sebelum bicara investasi.',
      pelajaran: [
        { judul: 'Lima anak tangga, dan kenapa urutannya tidak boleh dibalik', isi: `
<h3>Konsepnya</h3>
<p>Kebanyakan orang masuk ke investasi dari anak tangga paling atas, karena itu bagian yang paling banyak dibicarakan. Urutan yang benar justru membosankan, dan justru itu yang membuatnya jarang dijalankan.</p>
<ol>
<li><b>Pengeluaran lebih kecil daripada pemasukan.</b> Tanpa selisih, tidak ada yang bisa diinvestasikan. Ini bukan pernyataan moral, ini syarat aritmetika.</li>
<li><b>Dana darurat.</b> Tiga sampai dua belas bulan pengeluaran, tergantung tanggungan dan kestabilan pemasukan. Rinciannya ada di kursus Rencana Kalau Semuanya Salah.</li>
<li><b>Melunasi hutang berbunga tinggi.</b> Melunasi hutang berbunga 24 persen setahun setara dengan investasi yang memberi hasil pasti 24 persen, dan tidak ada investasi yang memberi kepastian seperti itu.</li>
<li><b>Perlindungan dasar.</b> Asuransi kesehatan, dan asuransi jiwa kalau ada yang bergantung pada penghasilan Anda. Satu kejadian besar bisa menghapus sepuluh tahun tabungan.</li>
<li><b>Investasi.</b> Baru di sini, dengan uang yang memang boleh diam bertahun-tahun.</li>
</ol>

<h3>Kenapa urutannya tidak boleh dibalik</h3>
<p>Setiap anak tangga bawah melindungi anak tangga di atasnya. Orang yang berinvestasi tanpa dana darurat akan terpaksa menjual asetnya pada saat terburuk, karena keadaan darurat tidak menunggu pasar sedang bagus. Orang yang berinvestasi sambil punya hutang berbunga tinggi sedang membayar bunga lebih besar daripada hasil yang kemungkinan besar ia dapat.</p>
<p>Yang sering membuat orang membalik urutannya adalah rasa takut ketinggalan. Perasaan itu nyata, tetapi keputusannya tetap salah secara hitungan.</p>

<h3>Langkah memulainya minggu ini</h3>
<ol>
<li>Catat seluruh pengeluaran selama satu bulan penuh, tanpa mengubah kebiasaan apa pun. Tujuannya mengukur, bukan menghemat.</li>
<li>Kelompokkan jadi tiga: wajib (sewa, makan, transport), berulang (langganan, cicilan), dan bisa dikurangi.</li>
<li>Hitung pengeluaran bulanan rata-rata. Angka itu jadi satuan dana darurat Anda.</li>
<li>Pisahkan rekening. Satu untuk pengeluaran harian, satu untuk dana darurat yang tidak disentuh.</li>
</ol>

<h3>Contoh</h3>
<p>Dua orang berpenghasilan sama, 8 juta sebulan. Yang pertama menyisihkan 1,5 juta setiap bulan sebelum membelanjakan sisanya. Yang kedua berniat menabung dari sisa akhir bulan. Setelah setahun, yang pertama punya 18 juta, yang kedua punya sekitar nol, karena sisa akhir bulan selalu habis.</p>
<p>Perbedaannya bukan pendapatan dan bukan disiplin. Perbedaannya urutan: menyisihkan di awal atau di akhir. Ini contoh paling sederhana dari prinsip yang sama yang berlaku di seluruh kelas ini, yaitu bahwa susunan mengalahkan niat.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Halaman ini bukan nasihat keuangan yang dipersonalisasi. Angka bulan dan persentase di sini pedoman umum; keadaan tiap rumah tangga berbeda, terutama kalau ada tanggungan, penyakit menahun, atau penghasilan musiman. Untuk keputusan besar seperti membeli rumah atau mengambil pinjaman usaha, hitung dengan angka Anda sendiri, bukan dengan contoh di halaman mana pun.</div>` },

        { judul: 'Dua angka yang harus Anda tahu: arus kas dan kekayaan bersih', isi: `
<h3>Konsepnya</h3>
<p>Orang bisa menghabiskan bertahun-tahun mengurus investasi tanpa pernah tahu dua angka paling dasar tentang keuangannya sendiri. Keduanya mudah dihitung dan langsung mengubah cara Anda mengambil keputusan.</p>
<ul>
<li><b>Arus kas bulanan</b> — pemasukan dikurangi pengeluaran. Menjawab "berapa yang bisa saya sisihkan tiap bulan".</li>
<li><b>Kekayaan bersih</b> — seluruh aset dikurangi seluruh hutang. Menjawab "berapa sebenarnya yang saya punya".</li>
</ul>
<p>Perhatikan bahwa keduanya persis sama dengan dua laporan yang dipakai perusahaan: arus kas adalah versi pribadi dari laporan laba rugi, dan kekayaan bersih adalah versi pribadi dari neraca. Kursus berikutnya membahas bentuk perusahaannya.</p>

<h3>Cara menghitung kekayaan bersih</h3>
<table>
<tr><th>Aset (yang Anda punya)</th><th>Kewajiban (yang Anda hutang)</th></tr>
<tr><td>Uang tunai dan tabungan</td><td>Sisa cicilan rumah</td></tr>
<tr><td>Deposito</td><td>Sisa cicilan kendaraan</td></tr>
<tr><td>Nilai investasi (saham, crypto, reksa dana)</td><td>Saldo kartu kredit</td></tr>
<tr><td>Nilai rumah dan kendaraan</td><td>Pinjaman daring dan pinjaman pribadi</td></tr>
<tr><td>Modal dan stok usaha</td><td>Hutang usaha kepada pemasok</td></tr>
</table>
<p><b>Kekayaan bersih = total aset − total kewajiban.</b> Hitung sekali setiap tiga bulan dan catat tanggalnya. Yang penting bukan angkanya hari ini, melainkan arahnya selama beberapa periode.</p>

<h3>Kenapa arah lebih penting daripada angkanya</h3>
<p>Kekayaan bersih yang naik pelan-pelan setiap kuartal menandakan sistem keuangan Anda bekerja, walaupun angkanya masih kecil. Kekayaan bersih yang besar tetapi menurun setiap kuartal menandakan masalah yang belum terlihat, biasanya berupa pengeluaran yang tumbuh lebih cepat daripada pemasukan.</p>
<p>Angka ini juga menyelamatkan Anda dari ilusi yang umum: merasa maju karena nilai investasi naik, padahal hutang naik lebih cepat. Kekayaan bersih menghitung keduanya sekaligus, jadi tidak bisa ditipu oleh satu sisi saja.</p>

<h3>Contoh</h3>
<p>Seseorang punya investasi 120 juta dan merasa keadaannya baik. Setelah dihitung lengkap: tabungan 8 juta, kendaraan 60 juta, investasi 120 juta, total aset 188 juta. Kewajibannya: sisa cicilan kendaraan 45 juta, kartu kredit 12 juta, pinjaman pribadi 30 juta, total 87 juta. Kekayaan bersihnya 101 juta.</p>
<p>Yang lebih penting muncul pada perhitungan berikutnya tiga bulan kemudian. Investasinya naik jadi 135 juta, tetapi kartu kreditnya naik jadi 25 juta. Kekayaan bersihnya hampir tidak bergerak. Kenaikan investasi yang terasa menyenangkan itu ternyata dibiayai hutang berbunga tinggi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Menilai aset yang tidak likuid seperti rumah, kendaraan, dan stok usaha selalu perkiraan, dan orang cenderung menilainya terlalu tinggi. Pakai angka yang konservatif, yaitu harga yang realistis kalau harus dijual cepat. Kendaraan juga menyusut nilainya tiap tahun, jadi jangan dicatat dengan harga beli.</div>` },
      ],
      kuis: [
        { tanya: 'Urutan yang benar sebelum masuk ke investasi adalah arus kas positif, dana darurat, lalu…',
          pilihan: ['Melunasi hutang berbunga tinggi, lalu perlindungan dasar, baru investasi', 'Langsung investasi supaya modalnya cepat besar', 'Membeli kendaraan dulu', 'Mengambil pinjaman untuk menambah modal'],
          jelas: 'Setiap anak tangga bawah melindungi anak tangga di atasnya. Urutan ini membosankan, dan justru itu yang membuatnya jarang dijalankan.' },
        { tanya: 'Melunasi hutang berbunga 24 persen setahun setara dengan…',
          pilihan: ['Investasi yang memberi hasil pasti 24 persen, dan tidak ada investasi yang sepasti itu', 'Menabung dengan bunga 24 persen yang berisiko', 'Kehilangan kesempatan berinvestasi', 'Investasi berisiko tinggi'],
          jelas: 'Berinvestasi sambil memegang hutang berbunga tinggi berarti membayar bunga lebih besar daripada hasil yang kemungkinan besar didapat.' },
        { tanya: 'Kekayaan bersih dihitung dengan cara…',
          pilihan: ['Seluruh aset dikurangi seluruh kewajiban', 'Pemasukan dikurangi pengeluaran', 'Nilai investasi ditambah tabungan', 'Penghasilan setahun dikali umur kerja tersisa'],
          jelas: 'Arus kas adalah versi pribadi laporan laba rugi; kekayaan bersih adalah versi pribadi neraca.' },
        { tanya: 'Kenapa arah kekayaan bersih lebih penting daripada angkanya hari ini?',
          pilihan: ['Kenaikan pelan tiap kuartal menandakan sistemnya bekerja, sedangkan angka besar yang menurun menandakan masalah tersembunyi', 'Karena angkanya selalu salah dihitung', 'Karena angkanya berubah tiap hari', 'Karena hanya arah yang dipakai bank'],
          jelas: 'Kekayaan bersih menghitung aset dan hutang sekaligus, jadi tidak bisa ditipu oleh kenaikan satu sisi saja.' },
        { tanya: 'Investasi naik 15 juta tetapi saldo kartu kredit naik 13 juta dalam periode yang sama. Artinya…',
          pilihan: ['Kenaikan investasinya sebagian besar dibiayai hutang berbunga tinggi', 'Kekayaan bersihnya naik 15 juta', 'Keadaannya membaik pesat', 'Kartu kredit tidak perlu dihitung sebagai kewajiban'],
          jelas: 'Ini ilusi yang umum: merasa maju karena nilai investasi naik, padahal hutang naik hampir secepat itu.' },
        { tanya: 'Saat menilai aset tidak likuid seperti kendaraan untuk perhitungan kekayaan bersih, sebaiknya dipakai…',
          pilihan: ['Harga realistis kalau harus dijual cepat, bukan harga beli', 'Harga beli asli', 'Harga tertinggi yang pernah ditawarkan orang', 'Harga baru di dealer'],
          jelas: 'Orang cenderung menilai aset tidak likuid terlalu tinggi, dan kendaraan menyusut nilainya tiap tahun.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2 — HUTANG
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'hutang', judul: 'Hutang',
      ringkas: 'Membedakan hutang yang bekerja untuk Anda dari hutang yang memakan Anda, urutan pelunasan yang masuk akal, dan dua rasio yang dipakai bank untuk menilai Anda.',
      pelajaran: [
        { judul: 'Jenis hutang dan mana yang dilunasi lebih dulu', isi: `
<h3>Konsepnya</h3>
<p>Hutang bukan satu hal. Perbedaan antara pinjaman modal usaha yang menghasilkan dan pinjaman daring berbunga harian sama besarnya dengan perbedaan antara alat kerja dan penyakit. Yang membedakannya dua hal: <b>bunganya</b> dan <b>apa yang dibeli dengan uang itu</b>.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Hutang produktif</b> — dipakai membeli sesuatu yang menghasilkan pemasukan atau naik nilainya: modal usaha, kendaraan operasional, pendidikan yang menaikkan penghasilan.</li>
<li><b>Hutang konsumtif</b> — dipakai membeli sesuatu yang habis atau menyusut: liburan, barang elektronik, kendaraan pribadi untuk gaya hidup.</li>
<li><b>Bunga efektif</b> — bunga sebenarnya yang Anda bayar, dihitung dari sisa pokok. Berbeda dari bunga flat yang terlihat lebih kecil padahal lebih mahal.</li>
<li><b>Bunga berbunga</b> — bunga yang dihitung di atas bunga yang belum dibayar. Inilah yang membuat sebagian hutang tumbuh jauh lebih cepat daripada dugaan.</li>
</ul>
<p>Perhatikan jebakan bunga flat. Pinjaman 12 juta dengan "bunga 1 persen per bulan flat" selama 12 bulan terdengar seperti 12 persen setahun. Karena pokoknya berkurang tiap bulan tetapi bunganya tetap dihitung dari 12 juta, bunga efektifnya mendekati dua kali lipat angka itu.</p>

<h3>Dua cara mengurutkan pelunasan</h3>
<table>
<tr><th></th><th>Cara bunga tertinggi</th><th>Cara saldo terkecil</th></tr>
<tr><td>Urutan</td><td>Lunasi yang bunganya paling besar dulu</td><td>Lunasi yang nominalnya paling kecil dulu</td></tr>
<tr><td>Kelebihan</td><td>Paling hemat secara hitungan</td><td>Cepat terasa berhasil, menjaga semangat</td></tr>
<tr><td>Kekurangan</td><td>Kemajuannya lambat terasa</td><td>Total bunga yang dibayar lebih besar</td></tr>
<tr><td>Cocok untuk</td><td>Orang yang tahan menjalankan rencana panjang</td><td>Orang yang pernah gagal beberapa kali dan butuh kemenangan awal</td></tr>
</table>
<p>Secara angka, cara bunga tertinggi selalu menang. Secara kenyataan, rencana yang dijalankan sampai selesai mengalahkan rencana optimal yang ditinggalkan di bulan ketiga. Pilih yang benar-benar akan Anda jalankan.</p>

<h3>Contoh</h3>
<p>Seseorang punya tiga hutang: kartu kredit 8 juta dengan bunga sekitar 2 persen sebulan, pinjaman daring 3 juta dengan bunga jauh lebih tinggi, dan cicilan kendaraan 40 juta dengan bunga jauh lebih rendah. Uang lebihnya 2 juta sebulan.</p>
<p>Urutan yang masuk akal: bayar minimum semuanya, lalu seluruh kelebihan diarahkan ke pinjaman daring sampai habis, lanjut ke kartu kredit, baru kendaraan. Menambah cicilan kendaraan lebih dulu, walaupun terasa seperti kemajuan besar karena nominalnya paling besar, justru yang paling merugikan.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Menggabungkan beberapa hutang menjadi satu pinjaman baru kadang menurunkan bunga, tetapi sering juga memperpanjang tenor sehingga total yang dibayar justru lebih besar. Baca total pembayaran, bukan cuma angka cicilan bulanannya. Hati-hati pula dengan pinjaman yang menawarkan pelunasan hutang lain; sebagian mengenakan biaya administrasi besar di muka.</div>` },

        { judul: 'Dua rasio yang dipakai bank untuk menilai Anda', isi: `
<h3>Konsepnya</h3>
<p>Bank tidak menilai Anda dari perasaan mampu atau tidak. Mereka memakai rasio, dan Anda bisa memakai rasio yang sama untuk menilai diri sendiri sebelum mengajukan apa pun.</p>

<h3>Cara menghitungnya</h3>
<ul>
<li><b>DSR (debt service ratio)</b> = total cicilan bulanan ÷ penghasilan bulanan. Menjawab berapa bagian penghasilan yang sudah terikat. Banyak lembaga keuangan memakai batas sekitar 30 sampai 40 persen, dan di atas itu pengajuan biasanya ditolak.</li>
<li><b>Rasio hutang terhadap aset</b> = total kewajiban ÷ total aset. Menjawab seberapa besar bagian dari yang Anda punya sebenarnya milik pemberi pinjaman. Di bawah 50 persen umumnya dianggap sehat untuk perorangan.</li>
</ul>
<p>Keduanya menjawab pertanyaan berbeda. DSR bicara soal <b>arus kas</b>, yaitu apakah Anda sanggup membayar bulan ini. Rasio hutang terhadap aset bicara soal <b>ketahanan</b>, yaitu apakah Anda selamat kalau nilai aset turun atau penghasilan berhenti.</p>

<h3>Contoh perhitungan</h3>
<p>Penghasilan 10 juta sebulan. Cicilan: rumah 2,5 juta, kendaraan 1,2 juta, kartu kredit minimum 400 ribu. Totalnya 4,1 juta, jadi DSR-nya 41 persen. Sudah di atas batas yang umum dipakai, sehingga pengajuan pinjaman baru kemungkinan besar ditolak, dan lebih penting lagi, ruang geraknya sempit kalau ada pengeluaran tak terduga.</p>
<p>Sisi kedua: total aset 400 juta, total kewajiban 260 juta. Rasionya 65 persen. Artinya sebagian besar dari yang ia sebut miliknya sebenarnya masih milik bank. Kalau nilai rumahnya turun 20 persen, kekayaan bersihnya hampir habis.</p>
<p>Orang ini tidak sedang bangkrut dan cicilannya lancar. Tetapi kedua rasionya memberi tahu bahwa ia tidak punya ruang untuk satu kejutan pun, dan itu informasi yang tidak muncul di rekening korannya.</p>

<h3>Langkah memperbaikinya</h3>
<ol>
<li>Turunkan DSR dengan melunasi hutang bunga tertinggi lebih dulu, karena cicilannya paling mahal per rupiah pokok.</li>
<li>Jangan menambah tenor hanya untuk menurunkan cicilan; itu memperbaiki DSR di kertas sambil memperburuk total yang dibayar.</li>
<li>Tinjau kedua rasio setiap tiga bulan bersamaan dengan perhitungan kekayaan bersih.</li>
<li>Sebelum mengambil pinjaman baru, hitung DSR setelah pinjaman itu masuk, bukan sebelumnya.</li>
</ol>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka batas 30 sampai 40 persen dan 50 persen adalah kebiasaan umum, bukan aturan resmi, dan tiap lembaga memakai ukuran sendiri yang bisa berubah. Penghasilan yang tidak tetap membuat DSR terlihat lebih baik daripada kenyataannya pada bulan ramai; hitung dengan penghasilan bulan terburuk Anda, bukan bulan terbaik.</div>` },
      ],
      kuis: [
        { tanya: 'Dua hal yang membedakan hutang produktif dari hutang konsumtif adalah…',
          pilihan: ['Bunganya dan apa yang dibeli dengan uang itu', 'Nama lembaga pemberi pinjaman dan jangka waktunya', 'Besar cicilan dan jumlah tenor', 'Apakah ada jaminan atau tidak'],
          jelas: 'Hutang produktif membeli sesuatu yang menghasilkan atau naik nilainya. Hutang konsumtif membeli sesuatu yang habis atau menyusut.' },
        { tanya: 'Pinjaman dengan "bunga 1 persen per bulan flat" selama 12 bulan sebenarnya punya bunga efektif…',
          pilihan: ['Mendekati dua kali lipat angka itu, karena bunganya tetap dihitung dari pokok awal', 'Persis 12 persen setahun', 'Lebih kecil dari 12 persen', 'Tidak bisa dihitung'],
          jelas: 'Pokoknya berkurang tiap bulan tetapi bunganya tetap dihitung dari jumlah awal. Bunga flat selalu terlihat lebih murah daripada kenyataannya.' },
        { tanya: 'Cara pelunasan dengan saldo terkecil lebih dulu dipilih ketika…',
          pilihan: ['Anda butuh kemenangan awal supaya rencananya benar-benar dijalankan sampai selesai', 'Anda ingin membayar total bunga paling kecil', 'Bunga semua hutang sama besar', 'Bank mewajibkannya'],
          jelas: 'Secara angka, cara bunga tertinggi selalu menang. Tetapi rencana yang dijalankan sampai selesai mengalahkan rencana optimal yang ditinggalkan di bulan ketiga.' },
        { tanya: 'DSR dihitung dengan cara…',
          pilihan: ['Total cicilan bulanan dibagi penghasilan bulanan', 'Total kewajiban dibagi total aset', 'Penghasilan dikurangi pengeluaran', 'Total hutang dibagi penghasilan setahun'],
          jelas: 'DSR bicara soal arus kas: berapa bagian penghasilan yang sudah terikat cicilan bulan ini.' },
        { tanya: 'Rasio hutang terhadap aset sebesar 65 persen berarti…',
          pilihan: ['Sebagian besar dari yang disebut miliknya sebenarnya masih milik pemberi pinjaman', 'Cicilannya menghabiskan 65 persen penghasilan', 'Ia sedang bangkrut', 'Ia punya ruang besar untuk pinjaman baru'],
          jelas: 'DSR bicara soal kesanggupan membayar bulan ini; rasio hutang terhadap aset bicara soal ketahanan kalau nilai aset turun atau penghasilan berhenti.' },
        { tanya: 'Menambah tenor pinjaman hanya untuk menurunkan cicilan bulanan…',
          pilihan: ['Memperbaiki DSR di kertas sambil memperburuk total yang dibayar', 'Selalu merupakan langkah terbaik', 'Menurunkan bunga efektif', 'Tidak berpengaruh pada apa pun'],
          jelas: 'Baca total pembayaran, bukan cuma angka cicilan bulanannya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3 — MEMBACA LAPORAN KEUANGAN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'laporan', judul: 'Membaca Laporan Keuangan',
      ringkas: 'Tiga laporan yang dipakai setiap usaha, dari warung sampai perusahaan terbuka. Laba rugi, neraca, dan arus kas, dijelaskan dengan bahasa sehari-hari tanpa mengorbankan istilah bakunya.',
      pelajaran: [
        { judul: 'Laba rugi: dari omzet sampai laba bersih', isi: `
<h3>Konsepnya</h3>
<p><b>Laporan laba rugi</b> menjawab satu pertanyaan: selama satu periode, usaha ini untung atau rugi? Bentuknya seperti tangga menurun. Di atas ada uang masuk, lalu dikurangi berlapis-lapis, dan yang tersisa di bawah adalah milik pemilik.</p>
<p>Kesalahan paling mahal dalam membaca laporan ini adalah menyebut angka di tengah tangga sebagai "untung". Ada beberapa lapis laba, dan artinya sangat berbeda.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Omzet (penjualan, revenue)</b> — total nilai barang atau jasa yang terjual. Ini uang masuk, bukan untung. Banyak usaha beromzet besar yang rugi.</li>
<li><b>HPP (harga pokok penjualan, COGS)</b> — biaya langsung barang yang terjual. Untuk pedagang, ini harga kulakan barang yang laku. Barang yang masih di gudang belum masuk HPP.</li>
<li><b>Laba kotor (gross profit)</b> — omzet dikurangi HPP. Menunjukkan untung dari barangnya saja, sebelum biaya menjalankan usaha.</li>
<li><b>Beban operasional (opex)</b> — biaya menjalankan usaha: gaji, sewa, listrik, bensin, perawatan kendaraan.</li>
<li><b>Laba bersih (net profit)</b> — laba kotor dikurangi seluruh beban, termasuk bunga dan pajak. Inilah uang yang benar-benar tersisa untuk pemilik.</li>
<li><b>Margin</b> — laba dinyatakan sebagai persen dari omzet. Margin kotor dan margin bersih dihitung terpisah.</li>
</ul>

<h3>Contoh sebuah usaha dagang</h3>
<table>
<tr><th>Baris</th><th>Sebulan</th><th>% dari omzet</th></tr>
<tr><td>Omzet</td><td>Rp 1.200.000.000</td><td>100%</td></tr>
<tr><td>HPP (modal barang yang terjual)</td><td>Rp 1.104.000.000</td><td>92,0%</td></tr>
<tr><td><b>Laba kotor</b></td><td><b>Rp 96.000.000</b></td><td><b>8,0%</b></td></tr>
<tr><td>Gaji karyawan</td><td>Rp 20.000.000</td><td>1,7%</td></tr>
<tr><td>Bensin, perawatan, operasional</td><td>Rp 13.000.000</td><td>1,1%</td></tr>
<tr><td>Sewa dan listrik</td><td>Rp 5.000.000</td><td>0,4%</td></tr>
<tr><td><b>Laba bersih</b></td><td><b>Rp 58.000.000</b></td><td><b>4,8%</b></td></tr>
</table>
<p>Perhatikan apa yang diceritakan angka ini. Omzetnya 1,2 miliar sebulan, angka yang terdengar besar. Margin kotornya cuma 8 persen, khas usaha dagang bervolume tinggi. Setelah semua beban, yang benar-benar jadi milik pemilik 4,8 persen dari omzet.</p>
<p>Konsekuensinya penting: pada usaha bermargin tipis seperti ini, <b>kenaikan modal barang sedikit saja langsung memakan laba</b>. Kalau HPP naik dari 92 menjadi 94 persen sementara harga jual tetap, laba kotor turun dari 8 ke 6 persen, dan laba bersih turun dari 4,8 ke 2,8 persen. Omzetnya tidak berubah sama sekali, tetapi untungnya berkurang lebih dari sepertiga.</p>

<h3>Langkah membacanya dengan cepat</h3>
<ol>
<li>Lihat margin kotor lebih dulu. Itu menunjukkan apakah barang atau jasanya memang menguntungkan.</li>
<li>Lihat margin bersih. Selisih besar antara keduanya berarti beban operasionalnya berat.</li>
<li>Bandingkan dengan periode sebelumnya, bukan dengan usaha lain yang jenisnya berbeda. Margin 8 persen wajar untuk pedagang grosir dan sangat buruk untuk penjual perangkat lunak.</li>
<li>Cari baris yang berubah paling besar dibanding periode lalu, lalu tanyakan kenapa.</li>
</ol>

<div class="batas-berlaku"><b>Batas & risiko.</b> Laporan laba rugi memakai prinsip akrual: penjualan dicatat saat terjadi, bukan saat uangnya diterima. Jadi usaha bisa mencatat laba besar sambil kehabisan uang tunai karena pelanggannya belum membayar. Itu dibahas di pelajaran arus kas. Laporan ini juga bisa dipercantik dengan mengubah cara mencatat penyusutan atau menunda pencatatan beban, jadi bandingkan beberapa periode, jangan hanya satu.</div>` },

        { judul: 'Neraca: aset, kewajiban, dan modal', isi: `
<h3>Konsepnya</h3>
<p><b>Neraca</b> menjawab pertanyaan yang berbeda dari laba rugi. Kalau laba rugi bercerita tentang <i>satu periode</i>, neraca adalah foto pada <i>satu tanggal</i>: apa yang dimiliki usaha ini, apa yang dihutangnya, dan berapa sisanya milik pemilik.</p>
<p>Rumusnya satu dan selalu berimbang:</p>
<p><b>Aset = Kewajiban + Modal</b></p>
<p>Artinya setiap barang yang dimiliki usaha pasti dibiayai salah satu dari dua sumber: uang pinjaman atau uang pemilik. Karena itu namanya neraca, dan karena itu kedua sisinya selalu sama.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Aset lancar</b> — yang bisa jadi uang dalam setahun: kas, piutang pelanggan, stok barang.</li>
<li><b>Aset tetap</b> — yang dipakai bertahun-tahun: kendaraan, bangunan, mesin. Dicatat setelah dikurangi penyusutan.</li>
<li><b>Piutang</b> — uang yang belum dibayar pelanggan. Ini aset, tetapi aset yang belum bisa dipakai.</li>
<li><b>Kewajiban lancar</b> — yang harus dibayar dalam setahun: hutang ke pemasok, cicilan tahun berjalan, gaji terhutang.</li>
<li><b>Modal (ekuitas)</b> — bagian pemilik. Terdiri dari setoran awal ditambah laba yang ditahan selama usaha berjalan.</li>
</ul>
<p>Hubungan antara dua laporan ini sering membingungkan, padahal sederhana: <b>laba bersih dari laporan laba rugi masuk ke bagian modal di neraca</b>. Untung menambah modal, rugi menguranginya. Itulah jembatan antara keduanya.</p>

<h3>Contoh</h3>
<table>
<tr><th>Aset</th><th>Nilai</th><th>Kewajiban & Modal</th><th>Nilai</th></tr>
<tr><td>Kas</td><td>Rp 45.000.000</td><td>Hutang ke pemasok</td><td>Rp 180.000.000</td></tr>
<tr><td>Piutang pelanggan</td><td>Rp 210.000.000</td><td>Cicilan kendaraan</td><td>Rp 60.000.000</td></tr>
<tr><td>Stok barang</td><td>Rp 150.000.000</td><td><b>Total kewajiban</b></td><td><b>Rp 240.000.000</b></td></tr>
<tr><td>Kendaraan (setelah susut)</td><td>Rp 185.000.000</td><td>Modal pemilik</td><td>Rp 350.000.000</td></tr>
<tr><td><b>Total aset</b></td><td><b>Rp 590.000.000</b></td><td><b>Total</b></td><td><b>Rp 590.000.000</b></td></tr>
</table>
<p>Yang menarik dari neraca ini: kasnya cuma 45 juta, sementara piutang 210 juta. Usaha ini sehat di atas kertas, tetapi uang tunainya tipis karena sebagian besar hasil penjualannya masih nyangkut di tangan pelanggan. Kalau ada pemasok yang menagih lebih cepat, ia bisa kesulitan membayar walaupun labanya bagus.</p>
<p>Inilah gunanya neraca. Laporan laba rugi tidak akan pernah menunjukkan masalah ini.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Neraca adalah foto satu tanggal dan bisa terlihat jauh lebih baik atau lebih buruk kalau tanggalnya digeser sedikit. Nilai aset tetap adalah nilai buku setelah penyusutan, bukan harga jual sebenarnya. Piutang juga belum tentu tertagih semua; usaha yang sehat mencadangkan sebagian sebagai piutang yang mungkin macet. Neraca berbeda dengan laporan laba rugi, dan menyebut keduanya "laporan keuangan" tanpa membedakan adalah sumber kebingungan yang sangat umum.</div>` },

        { judul: 'Arus kas: kenapa untung di kertas bisa bangkrut', isi: `
<h3>Konsepnya</h3>
<p>Ada kalimat yang sering diulang orang keuangan dan memang benar: <b>usaha bangkrut bukan karena rugi, tetapi karena kehabisan uang tunai</b>. Keduanya berbeda, dan laporan arus kas adalah yang menunjukkan bedanya.</p>
<p>Laporan laba rugi memakai prinsip akrual. Kalau Anda menjual barang 100 juta hari ini dan pembeli membayar tiga bulan lagi, penjualan itu tetap dicatat hari ini sebagai omzet dan ikut membentuk laba. Uangnya belum ada, tetapi labanya sudah tercatat.</p>

<h3>Tiga bagian laporan arus kas</h3>
<ul>
<li><b>Arus kas operasi</b> — uang yang benar-benar masuk dan keluar dari kegiatan utama usaha. Ini yang paling penting. Usaha sehat menghasilkan kas dari sini secara konsisten.</li>
<li><b>Arus kas investasi</b> — pembelian atau penjualan aset jangka panjang: kendaraan, mesin, bangunan. Biasanya negatif pada usaha yang sedang tumbuh.</li>
<li><b>Arus kas pendanaan</b> — uang dari atau ke pemberi pinjaman dan pemilik: menerima pinjaman, membayar pokok, menarik keuntungan.</li>
</ul>

<h3>Pola yang perlu dikenali</h3>
<table>
<tr><th>Operasi</th><th>Investasi</th><th>Pendanaan</th><th>Biasanya berarti</th></tr>
<tr><td>Positif</td><td>Negatif</td><td>Negatif</td><td>Usaha matang dan sehat: kas dari operasi membiayai pertumbuhan dan melunasi hutang</td></tr>
<tr><td>Negatif</td><td>Negatif</td><td>Positif</td><td>Usaha muda yang tumbuh dengan uang pinjaman atau setoran investor</td></tr>
<tr><td>Negatif</td><td>Positif</td><td>Negatif</td><td>Tanda bahaya: menjual aset untuk menutup operasi dan hutang</td></tr>
</table>

<h3>Contoh</h3>
<p>Sebuah usaha mencatat laba bersih 58 juta sebulan, angka yang bagus. Tetapi pada bulan yang sama, piutang pelanggannya naik 90 juta karena ia memberi tempo lebih longgar untuk mengejar penjualan, dan stok barangnya naik 40 juta. Arus kas operasinya justru minus 72 juta.</p>
<p>Ia untung dan kehabisan uang pada bulan yang sama. Untuk membayar gaji, ia terpaksa menambah hutang ke pemasok atau mengambil pinjaman. Kalau pola ini berlanjut beberapa bulan, usahanya bisa berhenti walaupun setiap laporan laba ruginya menunjukkan untung.</p>
<p>Ujian paling cepat untuk usaha kecil: bandingkan laba bersih dengan perubahan saldo kas selama periode yang sama. Kalau labanya naik terus sementara kasnya tidak pernah bertambah, uangnya pasti tersangkut di suatu tempat, hampir selalu di piutang atau di stok.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Arus kas operasi yang positif tidak otomatis berarti sehat; bisa saja berasal dari menunda pembayaran ke pemasok, yang hanya memindahkan masalah ke bulan depan. Sebaliknya, arus kas negatif pada usaha yang sedang menumpuk stok menjelang musim ramai bisa sepenuhnya wajar. Bacalah ketiga laporan bersama-sama; tidak ada satu pun yang bisa berdiri sendiri.</div>` },
      ],
      kuis: [
        { tanya: 'Laba kotor dihitung dengan cara…',
          pilihan: ['Omzet dikurangi harga pokok penjualan', 'Omzet dikurangi seluruh beban usaha', 'Laba bersih ditambah pajak', 'Total aset dikurangi total kewajiban'],
          jelas: 'Laba kotor menunjukkan untung dari barangnya saja, sebelum biaya menjalankan usaha. Jangan pernah menyebutnya "untung" tanpa keterangan.' },
        { tanya: 'Pada usaha bermargin kotor 8 persen, kenaikan HPP dari 92 ke 94 persen menyebabkan…',
          pilihan: ['Laba bersih turun lebih dari sepertiga walaupun omzetnya tidak berubah', 'Laba bersih turun 2 persen saja', 'Omzet ikut turun 2 persen', 'Tidak ada pengaruh berarti'],
          jelas: 'Pada usaha bermargin tipis, kenaikan modal barang sedikit saja langsung memakan sebagian besar laba.' },
        { tanya: 'Rumus dasar neraca adalah…',
          pilihan: ['Aset = Kewajiban + Modal', 'Aset = Omzet − Beban', 'Modal = Aset + Kewajiban', 'Laba bersih = Aset − Kewajiban'],
          jelas: 'Setiap barang yang dimiliki usaha pasti dibiayai uang pinjaman atau uang pemilik. Karena itu kedua sisinya selalu berimbang.' },
        { tanya: 'Jembatan antara laporan laba rugi dan neraca adalah…',
          pilihan: ['Laba bersih masuk ke bagian modal di neraca', 'Omzet masuk ke bagian aset di neraca', 'HPP masuk ke bagian kewajiban', 'Keduanya tidak berhubungan'],
          jelas: 'Untung menambah modal pemilik, rugi menguranginya. Laba rugi bercerita tentang satu periode, neraca adalah foto pada satu tanggal.' },
        { tanya: 'Usaha mencatat laba 58 juta tetapi arus kas operasinya minus 72 juta. Penyebab paling mungkin…',
          pilihan: ['Uangnya tersangkut di piutang pelanggan dan stok barang yang bertambah', 'Pencatatannya pasti salah', 'Usaha itu sebenarnya rugi', 'Pajaknya terlalu besar'],
          jelas: 'Prinsip akrual mencatat penjualan saat terjadi, bukan saat uangnya diterima. Usaha bangkrut bukan karena rugi, melainkan karena kehabisan uang tunai.' },
        { tanya: 'Pola arus kas operasi negatif, investasi positif, pendanaan negatif biasanya berarti…',
          pilihan: ['Tanda bahaya: usaha menjual aset untuk menutup operasi dan hutang', 'Usaha matang yang sehat', 'Usaha muda yang sedang tumbuh dengan pinjaman', 'Usaha sedang menumpuk stok menjelang musim ramai'],
          jelas: 'Arus kas investasi yang positif berarti aset dijual. Kalau itu dipakai menambal operasi yang merugi, pola ini tidak bisa berlanjut lama.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4 — PAJAK DAN PENCATATAN DI INDONESIA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'pajak', judul: 'Pajak dan Pencatatan di Indonesia',
      ringkas: 'Bagaimana pajak aset kripto bekerja di Indonesia, apa bedanya dengan pajak penghasilan biasa, dan pencatatan sederhana yang menyelamatkan Anda saat ditanya.',
      pelajaran: [
        { judul: 'Cara kerja pajak aset kripto di Indonesia', isi: `
<h3>Konsepnya</h3>
<p>Aset kripto di Indonesia diakui sebagai <b>komoditas yang boleh diperdagangkan</b>, bukan sebagai alat pembayaran. Memakainya untuk membayar barang tidak diperbolehkan, tetapi memperjualbelikannya lewat pedagang terdaftar diperbolehkan dan dikenai pajak.</p>
<p>Hal yang paling membedakannya dari pajak penghasilan biasa: pajaknya bersifat <b>final dan dipungut saat transaksi</b>. Anda tidak menghitung untung rugi setahun lalu membayar pajak atas labanya. Pedagang tempat Anda bertransaksi memotongnya langsung dari setiap transaksi, baik Anda untung maupun rugi.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Pajak final</b> — dipungut sekali saat transaksi dan selesai. Tidak digabung lagi dengan penghasilan lain untuk dihitung ulang.</li>
<li><b>Pedagang terdaftar</b> — penyelenggara perdagangan aset kripto yang memegang izin resmi di Indonesia. Bertransaksi di tempat tidak terdaftar biasanya dikenai tarif lebih tinggi dan tidak punya perlindungan hukum yang sama.</li>
<li><b>Bukti potong</b> — keterangan bahwa pajak Anda sudah dipungut. Pedagang terdaftar menyediakannya, biasanya bisa diunduh dari aplikasi.</li>
<li><b>SPT Tahunan</b> — laporan pajak tahunan. Penghasilan yang sudah dikenai pajak final tetap perlu dilaporkan di bagian yang sesuai, dan aset kripto yang Anda miliki dilaporkan di daftar harta.</li>
</ul>

<h3>Yang perlu Anda lakukan</h3>
<ol>
<li><b>Pakai pedagang terdaftar.</b> Selain tarifnya lebih rendah, pemotongan pajaknya sudah otomatis sehingga Anda tidak perlu menghitung sendiri per transaksi.</li>
<li><b>Simpan rekap tahunan dari setiap bursa yang Anda pakai.</b> Unduh sekali setahun; sebagian bursa menghapus riwayat lama atau menyulitkan ekspornya kemudian.</li>
<li><b>Laporkan kepemilikan aset kripto di daftar harta pada SPT Tahunan</b>, dengan nilai pada akhir tahun pajak.</li>
<li><b>Untuk penghasilan lain dari crypto</b> seperti staking, hadiah, atau pembayaran jasa yang diterima dalam bentuk kripto, perlakuannya berbeda dari jual beli biasa. Tanyakan ke konsultan pajak kalau jumlahnya berarti.</li>
</ol>

<h3>Contoh cara berpikirnya</h3>
<p>Karena pajaknya dipungut per transaksi dan bukan atas keuntungan, <b>jumlah transaksi Anda ikut menentukan biaya pajak</b>. Dua orang yang sama-sama berakhir dengan keuntungan yang sama bisa membayar pajak yang sangat berbeda: yang satu bertransaksi 12 kali setahun, yang satu lagi 400 kali.</p>
<p>Ini alasan tambahan, di luar biaya bursa dan kesalahan waktu, kenapa strategi yang sering bertransaksi punya beban yang tidak terlihat di backtest. Kursus Menguji Strategi dengan Data membahas bagaimana biaya seperti ini mengubah strategi dari untung menjadi rugi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tarif dan aturan pajak aset kripto di Indonesia sudah berubah sejak pertama kali ditetapkan pada 2022, dan pengawasan sektornya dipindahkan ke Otoritas Jasa Keuangan. Karena itu halaman ini sengaja tidak menyebut angka tarif: angka apa pun yang ditulis hari ini bisa tidak berlaku beberapa bulan lagi. Periksa ketentuan terbaru di situs Direktorat Jenderal Pajak atau tanyakan ke konsultan pajak sebelum mengambil keputusan yang nilainya besar. Halaman ini penjelasan umum, bukan nasihat pajak.</div>` },

        { judul: 'Pencatatan sederhana yang menyelamatkan Anda', isi: `
<h3>Konsepnya</h3>
<p>Pencatatan terasa membosankan sampai saat Anda membutuhkannya, dan saat itu biasanya datang tanpa peringatan: ditanya petugas pajak, mengajukan pinjaman usaha, membagi hasil dengan mitra, atau sekadar ingin tahu kenapa uang terasa selalu kurang padahal penjualan naik.</p>
<p>Kabar baiknya, pencatatan yang berguna tidak harus rumit. Untuk perorangan dan usaha kecil, satu berkas spreadsheet sudah cukup, asal dijalankan secara konsisten.</p>

<h3>Yang dicatat untuk aset kripto</h3>
<ul>
<li>Tanggal, jenis transaksi (beli, jual, tukar, terima), dan bursa atau dompetnya</li>
<li>Jumlah aset dan harganya dalam rupiah pada saat itu</li>
<li>Biaya transaksi dan pajak yang dipotong</li>
<li>Alamat tujuan untuk setiap penarikan ke dompet sendiri</li>
</ul>

<h3>Yang dicatat untuk usaha kecil</h3>
<ul>
<li><b>Buku kas</b>: tanggal, keterangan, uang masuk, uang keluar, saldo. Ini yang paling penting dan paling sering dilewatkan.</li>
<li><b>Buku piutang</b>: siapa berhutang berapa, sejak kapan, dan sudah dibayar berapa.</li>
<li><b>Buku hutang</b>: ke pemasok mana, berapa, jatuh tempo kapan.</li>
<li><b>Catatan stok</b>: jumlah masuk, keluar, dan sisa. Untuk usaha dagang, ini yang menentukan ketepatan HPP dan karena itu menentukan ketepatan seluruh laporan laba rugi.</li>
</ul>
<p>Satu aturan yang berlaku untuk semuanya: <b>pisahkan rekening usaha dari rekening pribadi</b>. Tanpa pemisahan, semua pencatatan lain jadi pekerjaan menebak, dan menebak di akhir bulan selalu lebih lama daripada mencatat setiap hari.</p>

<h3>Contoh kesalahan yang sering terjadi</h3>
<p>Seorang pedagang mencatat pemasukan dan pengeluaran dengan rapi tetapi tidak pernah menghitung stok. Setiap bulan labanya terlihat bagus. Setelah setahun, stok opname pertama menunjukkan barang di gudang jauh lebih sedikit daripada yang seharusnya, entah karena rusak, hilang, atau tercatat salah. Selisih itu sebenarnya biaya yang belum pernah masuk laporan, dan artinya laba yang ia laporkan selama dua belas bulan terlalu tinggi.</p>
<p>Ini alasan kenapa stok opname berkala bukan formalitas. Tanpa itu, laporan laba rugi usaha dagang hanya perkiraan yang kesalahannya menumpuk diam-diam.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Kewajiban pembukuan dan pencatatan berbeda-beda tergantung bentuk usaha dan besarnya peredaran bruto, dan aturannya berubah dari waktu ke waktu. Untuk usaha yang sudah berbadan hukum atau peredarannya besar, konsultasikan ke konsultan pajak atau akuntan. Catatan pribadi yang rapi tetap bukan pengganti pembukuan resmi kalau aturan mewajibkannya.</div>` },
      ],
      kuis: [
        { tanya: 'Pajak transaksi aset kripto di Indonesia bersifat final dan dipungut saat transaksi. Artinya…',
          pilihan: ['Dipotong langsung setiap transaksi, baik Anda untung maupun rugi', 'Dihitung dari total keuntungan setahun', 'Hanya dibayar kalau Anda untung', 'Dibayar sendiri setahun sekali lewat SPT'],
          jelas: 'Pajak final dipungut sekali saat transaksi dan tidak digabung lagi dengan penghasilan lain untuk dihitung ulang.' },
        { tanya: 'Karena pajaknya dipungut per transaksi, maka…',
          pilihan: ['Jumlah transaksi ikut menentukan beban pajak, sehingga strategi yang sering bertransaksi lebih mahal', 'Semua orang membayar jumlah yang sama', 'Pajaknya lebih ringan bagi yang sering bertransaksi', 'Kerugian bisa dipakai mengurangi pajak'],
          jelas: 'Dua orang dengan keuntungan akhir yang sama bisa membayar pajak sangat berbeda kalau jumlah transaksinya berbeda jauh.' },
        { tanya: 'Kepemilikan aset kripto pada akhir tahun pajak dilaporkan di SPT Tahunan pada bagian…',
          pilihan: ['Daftar harta', 'Daftar penghasilan tidak final', 'Daftar tanggungan', 'Tidak perlu dilaporkan sama sekali'],
          jelas: 'Penghasilan yang sudah dikenai pajak final tetap dilaporkan di bagian yang sesuai, dan asetnya masuk daftar harta.' },
        { tanya: 'Aturan dasar yang membuat semua pencatatan usaha lain jadi mungkin adalah…',
          pilihan: ['Memisahkan rekening usaha dari rekening pribadi', 'Memakai perangkat lunak akuntansi berbayar', 'Mencatat setiap transaksi dalam dua bahasa', 'Menyimpan semua struk secara fisik'],
          jelas: 'Tanpa pemisahan, semua pencatatan lain jadi pekerjaan menebak, dan menebak di akhir bulan selalu lebih lama daripada mencatat tiap hari.' },
        { tanya: 'Untuk usaha dagang, catatan yang menentukan ketepatan HPP dan karena itu seluruh laporan laba rugi adalah…',
          pilihan: ['Catatan stok masuk, keluar, dan sisa', 'Catatan jumlah pelanggan', 'Catatan jam kerja karyawan', 'Catatan biaya listrik'],
          jelas: 'Tanpa stok opname berkala, laporan laba rugi usaha dagang hanya perkiraan yang kesalahannya menumpuk diam-diam.' },
        { tanya: 'Kenapa halaman ini tidak menyebut angka tarif pajak kripto?',
          pilihan: ['Karena tarif dan aturannya sudah berubah sejak 2022, sehingga angka hari ini bisa tidak berlaku beberapa bulan lagi', 'Karena tarifnya rahasia', 'Karena tidak ada pajak untuk aset kripto', 'Karena tarifnya berbeda di tiap bursa'],
          jelas: 'Pengawasan sektornya juga sudah dipindahkan ke Otoritas Jasa Keuangan. Periksa ketentuan terbaru sebelum mengambil keputusan besar.' },
      ] },
  ],
});
