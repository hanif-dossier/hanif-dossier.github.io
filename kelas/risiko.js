// kelas/risiko.js, data kelas kategori Risiko, Portofolio & Psikologi. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'risiko', urut: 8, nama: 'Risiko, Portofolio & Psikologi', warna: '#9a5f7a',
  ringkas: 'Bagian yang menentukan apakah Anda masih ada di pasar lima tahun lagi: cara mengukur risiko dengan angka, menyusun portofolio yang tidak bergantung pada satu tebakan, dan mengenali bias yang membuat orang pintar mengambil keputusan bodoh.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1, MENGUKUR RISIKO DENGAN ANGKA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'ukur-risiko', judul: 'Mengukur Risiko dengan Angka',
      ringkas: 'Volatilitas, penurunan terdalam, dan peluang kehabisan modal. Tiga angka yang lebih menentukan nasib Anda daripada tebakan arah harga.',
      pelajaran: [
        { judul: 'Volatilitas, drawdown, dan peluang kehabisan modal', isi: `
<h3>Konsepnya</h3>
<p>Kebanyakan orang mengukur hasil investasi dengan satu angka: untung berapa persen. Angka itu setengah cerita. Setengah lainnya adalah seberapa liar jalannya, dan seberapa dalam Anda sempat jatuh di tengah jalan.</p>
<p>Dua portofolio bisa sama-sama menghasilkan 40 persen setahun. Yang pertama naik pelan-pelan. Yang kedua sempat turun 70 persen di bulan ketujuh. Secara angka akhir keduanya sama. Dalam kenyataan, hampir semua orang yang memegang portofolio kedua sudah menjual di titik terendah dan tidak pernah merasakan 40 persen itu.</p>

<h3>Istilah dan alat yang dipakai</h3>
<ul>
<li><b>Volatilitas</b>: ukuran seberapa jauh harga biasanya bergerak naik turun. Bitcoin jauh lebih bergejolak daripada emas, dan altcoin kecil jauh lebih bergejolak daripada Bitcoin.</li>
<li><b>Drawdown</b>: penurunan dari titik tertinggi ke titik terendah sesudahnya. <b>Max drawdown</b> adalah yang terdalam dalam satu periode.</li>
<li><b>Waktu pemulihan</b>: lama waktu dari dasar sampai kembali ke puncak lama. Ini sering lebih menyakitkan daripada kedalamannya.</li>
<li><b>Risk of ruin</b>: peluang modal Anda habis atau mengecil sampai tidak bisa dipakai lagi.</li>
</ul>

<h3>Matematika yang tidak simetris</h3>
<p>Ada kenyataan aritmetika yang wajib dihafal siapa pun yang menaruh uang di pasar: <b>rugi dan untung tidak setara</b>.</p>
<table>
<tr><th>Kalau rugi</th><th>Butuh untung berapa untuk balik?</th></tr>
<tr><td>10%</td><td>11%</td></tr>
<tr><td>25%</td><td>33%</td></tr>
<tr><td>50%</td><td>100%</td></tr>
<tr><td>75%</td><td>300%</td></tr>
<tr><td>90%</td><td>900%</td></tr>
</table>
<p>Rugi 50 persen butuh untung 100 persen hanya untuk kembali ke titik awal. Karena itu menjaga agar kerugian tetap kecil jauh lebih berharga daripada mengejar keuntungan besar. Ini bukan nasihat hati-hati. Ini aritmetika.</p>

<h3>Contoh</h3>
<p>Seseorang menaruh 100 juta di aset yang turun 80 persen. Sisanya 20 juta. Supaya kembali 100 juta, aset itu harus naik 400 persen. Kalau ia justru memotong rugi di 25 persen, sisanya 75 juta, dan butuh 33 persen untuk pulih. Selisih keputusannya cuma satu: kapan mengaku salah.</p>
<p>Lihat juga sisi waktu. Bitcoin pernah turun sekitar 84 persen dari puncak akhir 2017 ke dasar akhir 2018, dan butuh sekitar tiga tahun untuk kembali ke puncak lama. Orang yang membeli di puncak bukan cuma kehilangan uang, tetapi juga kehilangan tiga tahun. Biaya kesempatan itu tidak pernah muncul di grafik.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Volatilitas masa lalu bukan ukuran risiko yang lengkap. Aset bisa terlihat tenang bertahun-tahun lalu jatuh 100 persen dalam sehari karena diretas, ditipu, atau dilarang. Risiko terbesar biasanya yang tidak muncul di data historis. Angka drawdown juga dihitung dari data yang ada; token yang sudah mati tidak masuk hitungan siapa pun.</div>` },

        { judul: 'Leverage: kenapa matematikanya melawan Anda', isi: `
<h3>Konsepnya</h3>
<p><b>Leverage</b> berarti berdagang dengan uang pinjaman. Dengan leverage 10 kali, modal 10 juta mengendalikan posisi 100 juta. Keuntungan dikali sepuluh, dan begitu juga kerugian. Itu penjelasan yang biasa Anda dengar, dan penjelasan itu terlalu ramah.</p>
<p>Yang jarang dijelaskan: dengan leverage 10 kali, penurunan harga 10 persen menghabiskan seluruh modal Anda. Bukan mengurangi, tetapi <b>menghabiskan</b>. Di pasar yang rutin bergerak 10 persen dalam sehari, itu bukan kemungkinan kecil melainkan kejadian yang pasti datang.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Likuidasi</b>: bursa menutup paksa posisi Anda ketika jaminan tidak lagi cukup. Anda tidak ditanya dulu.</li>
<li><b>Harga likuidasi</b>: harga yang memicu penutupan paksa. Makin besar leverage, makin dekat ke harga sekarang.</li>
<li><b>Funding rate</b>: biaya berkala yang dibayar antar pemegang posisi di kontrak perpetual. Kalau banyak orang memegang posisi beli, pemegang posisi beli yang membayar.</li>
<li><b>Margin terisolasi vs silang</b>: terisolasi membatasi kerugian pada jaminan satu posisi; silang memakai seluruh saldo Anda sebagai jaminan, jadi satu posisi bisa menghabiskan semuanya.</li>
</ul>

<h3>Tiga hal yang membuatnya lebih buruk dari kelihatannya</h3>
<ol>
<li><b>Biaya berjalan.</b> Funding rate dibayar setiap beberapa jam. Posisi yang benar arahnya tetapi butuh waktu lama bisa habis dimakan biaya.</li>
<li><b>Likuidasi berantai.</b> Ketika banyak posisi punya harga likuidasi berdekatan, satu penurunan memicu penutupan paksa, penutupan paksa itu menekan harga, dan tekanan itu memicu likuidasi berikutnya. Anda bisa terlikuidasi oleh gerakan yang tidak akan pernah terjadi tanpa keberadaan leverage itu sendiri.</li>
<li><b>Wick.</b> Likuidasi dihitung dari harga sesaat, bukan harga penutupan candle. Lonjakan satu detik di bursa yang dipakai sebagai acuan sudah cukup untuk menutup posisi Anda, walaupun semenit kemudian harga kembali normal.</li>
</ol>

<h3>Contoh</h3>
<p>Dua orang sama-sama yakin harga akan naik dari 100 ke 130, dan keduanya benar pada akhirnya. Orang pertama membeli langsung dengan modal 10 juta tanpa pinjaman. Harga sempat turun ke 88 sebelum naik ke 130; ia sempat rugi di kertas lalu untung 30 persen. Orang kedua memakai leverage 10 kali. Harga likuidasinya sekitar 91. Ketika harga menyentuh 88, posisinya habis. Ia benar soal arah dan tetap kehilangan semua modalnya.</p>
<p>Inilah sebabnya leverage bukan pengali keuntungan, melainkan <b>pengali kebutuhan akan ketepatan waktu</b>. Dan waktu adalah hal yang paling sulit ditebak di pasar mana pun.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Sebagian besar akun berleverage tinggi habis dalam hitungan bulan. Bursa mendapat pemasukan dari biaya perdagangan dan biaya pendanaan, jadi kepentingan mereka adalah Anda sering bertransaksi, bukan Anda untung. Di sebagian yurisdiksi, produk berleverage untuk ritel dibatasi justru karena alasan ini. Kalau Anda belum pernah menjalankan rencana tanpa leverage secara konsisten selama setahun, leverage hampir pasti akan mempercepat kerugian, bukan keuntungan.</div>` },
      ],
      kuis: [
        { tanya: 'Setelah rugi 50 persen, berapa keuntungan yang dibutuhkan untuk kembali ke modal awal?',
          pilihan: ['100 persen', '50 persen', '75 persen', '150 persen'],
          jelas: 'Modal 100 yang tinggal 50 butuh naik dua kali lipat untuk kembali ke 100. Rugi dan untung tidak setara, dan itu aritmetika, bukan nasihat.' },
        { tanya: 'Max drawdown berarti…',
          pilihan: ['Penurunan terdalam dari titik tertinggi ke titik terendah sesudahnya', 'Kerugian terbesar dalam satu transaksi', 'Selisih harga beli dan harga jual', 'Biaya maksimum yang dipungut bursa'],
          jelas: 'Drawdown mengukur seberapa dalam Anda sempat jatuh di tengah jalan. Angka ini menentukan apakah Anda sanggup bertahan sampai akhir.' },
        { tanya: 'Selain kedalamannya, hal yang sering lebih menyakitkan dari sebuah drawdown adalah…',
          pilihan: ['Lama waktu yang dibutuhkan untuk kembali ke puncak lama', 'Warna grafiknya', 'Jumlah transaksi yang terjadi', 'Biaya transaksi selama periode itu'],
          jelas: 'Bitcoin butuh sekitar tiga tahun untuk pulih dari dasar 2018 ke puncak lama. Orang yang membeli di puncak kehilangan uang sekaligus waktu.' },
        { tanya: 'Dengan leverage 10 kali, penurunan harga 10 persen akan…',
          pilihan: ['Menghabiskan seluruh modal yang dipertaruhkan', 'Mengurangi modal sekitar 10 persen', 'Memicu peringatan tanpa menutup posisi', 'Menambah biaya funding saja'],
          jelas: 'Leverage 10 kali membuat harga likuidasi hanya sekitar 10 persen dari harga masuk. Di pasar yang rutin bergerak sebesar itu, kejadiannya bukan kemungkinan kecil.' },
        { tanya: 'Likuidasi berantai terjadi karena…',
          pilihan: ['Penutupan paksa menekan harga, dan tekanan itu memicu likuidasi berikutnya', 'Bursa sengaja menutup posisi pengguna kecil', 'Funding rate berubah setiap jam', 'Order book selalu kosong saat pasar turun'],
          jelas: 'Anda bisa terlikuidasi oleh gerakan yang tidak akan pernah terjadi tanpa keberadaan leverage itu sendiri.' },
        { tanya: 'Dua orang benar menebak arah harga, tetapi yang memakai leverage tinggi tetap kehilangan semuanya. Pelajarannya…',
          pilihan: ['Leverage memperbesar kebutuhan akan ketepatan waktu, bukan sekadar memperbesar keuntungan', 'Menebak arah tidak ada gunanya', 'Bursa memanipulasi harga', 'Leverage hanya cocok untuk posisi jual'],
          jelas: 'Harga sempat turun melewati harga likuidasi sebelum akhirnya naik. Benar arah tetapi salah waktu sama saja dengan salah, kalau posisinya dipinjam.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2, MENYUSUN PORTOFOLIO
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'portofolio', judul: 'Menyusun Portofolio',
      ringkas: 'Alokasi inti dan satelit, kenapa sepuluh altcoin bukan diversifikasi, dan cara menyeimbangkan ulang tanpa menebak apa pun.',
      pelajaran: [
        { judul: 'Alokasi: inti, satelit, dan uang yang tidak boleh masuk', isi: `
<h3>Konsepnya</h3>
<p>Pertanyaan "koin apa yang bagus" jauh kurang penting daripada "berapa persen dari kekayaan saya yang ada di crypto". Yang kedua menentukan apakah Anda tidur nyenyak, dan orang yang tidur nyenyak mengambil keputusan lebih baik.</p>
<p>Susunan yang dipakai banyak pengelola dana bisa dipinjam apa adanya untuk portofolio pribadi:</p>
<ul>
<li><b>Inti (core)</b>: bagian terbesar, ditaruh di aset yang paling mungkin masih ada sepuluh tahun lagi. Dipegang lama, jarang disentuh.</li>
<li><b>Satelit</b>: bagian kecil untuk taruhan yang lebih berisiko dan lebih menarik. Boleh habis tanpa merusak keseluruhan.</li>
<li><b>Peluru cadangan</b>: stablecoin atau kas yang sengaja tidak dipakai, supaya Anda punya tenaga membeli ketika harga jatuh.</li>
</ul>
<p>Yang menentukan bukan nama asetnya, melainkan disiplin porsinya. Portofolio dengan 70 persen di aset besar dan 30 persen tersebar di taruhan kecil punya sifat yang sangat berbeda dari portofolio dengan porsi terbalik, walaupun isinya token yang sama persis.</p>

<h3>Langkah menentukan porsinya</h3>
<ol>
<li><b>Hitung total kekayaan bersih Anda</b>, bukan cuma uang yang ada di bursa. Rumah, tabungan, usaha, semuanya.</li>
<li><b>Tentukan berapa persen yang boleh ada di aset berisiko tinggi.</b> Pertanyaan pemandunya sederhana: kalau bagian ini turun 80 persen, apakah hidup saya berubah? Kalau jawabannya ya, porsinya terlalu besar.</li>
<li><b>Bagi porsi itu menjadi inti dan satelit.</b> Perbandingan 70 banding 30 atau 80 banding 20 umum dipakai orang yang tidak mau mengurus portofolio setiap hari.</li>
<li><b>Tulis batasnya</b>, lalu perlakukan sebagai aturan, bukan saran. Batas yang tidak tertulis akan selalu bergeser ke atas saat pasar sedang naik.</li>
</ol>

<h3>Uang yang tidak boleh masuk</h3>
<p>Tiga jenis uang yang seharusnya tidak pernah masuk ke aset bergejolak, dan alasannya bukan moral melainkan teknis: ketiganya punya tenggat waktu, sedangkan pasar tidak peduli tenggat waktu Anda.</p>
<ul>
<li><b>Dana darurat.</b> Justru dibutuhkan saat keadaan buruk, dan keadaan buruk sering bersamaan dengan pasar jatuh.</li>
<li><b>Uang yang dipakai dalam dua tahun ke depan.</b> Uang kuliah, uang nikah, modal usaha yang sudah dijadwalkan.</li>
<li><b>Uang pinjaman.</b> Bunga berjalan terus, sementara harga bisa diam bertahun-tahun.</li>
</ul>

<h3>Contoh</h3>
<p>Seseorang punya kekayaan bersih 200 juta. Ia menetapkan maksimal 15 persen di crypto, jadi 30 juta. Dari 30 juta itu, 21 juta di aset inti dan 9 juta tersebar di enam taruhan kecil masing-masing 1,5 juta. Kalau seluruh bagian satelit jadi nol, ia kehilangan 4,5 persen kekayaannya. Itu menyakitkan tetapi tidak mengubah hidupnya. Kalau salah satu satelit naik sepuluh kali, ia mendapat tambahan 13,5 juta.</p>
<p>Perhatikan bahwa ia tidak perlu menebak dengan benar. Susunannya sudah membuat kerugian terbatas dan keuntungan tidak terbatas.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka 15 persen, 70 banding 30, dan seterusnya adalah contoh, bukan rekomendasi. Porsi yang tepat bergantung pada umur, penghasilan, tanggungan, dan seberapa stabil pemasukan Anda. Halaman ini bukan nasihat keuangan yang dipersonalisasi. Aset "inti" pun bisa turun sangat dalam; besar bukan berarti aman.</div>` },

        { judul: 'Korelasi: kenapa sepuluh altcoin bukan diversifikasi', isi: `
<h3>Konsepnya</h3>
<p>Diversifikasi bekerja kalau aset-aset Anda <b>tidak bergerak bersamaan</b>. Membeli sepuluh aset yang naik dan turun serempak sama saja dengan membeli satu aset dengan sepuluh nama. Yang bertambah cuma jumlah tab di aplikasi Anda.</p>
<p>Di pasar crypto, kenyataan ini keras: hampir semua altcoin bergerak mengikuti Bitcoin, dan ketika pasar panik, korelasi justru <b>naik</b>. Persis pada hari Anda paling butuh perlindungan, semua aset jatuh bersama-sama.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Korelasi</b>: ukuran seberapa sering dua aset bergerak searah. Nilainya dari −1 (selalu berlawanan) sampai +1 (selalu searah).</li>
<li><b>Beta</b>: seberapa besar sebuah aset bergerak dibanding acuannya. Altcoin dengan beta 2 terhadap Bitcoin cenderung naik dan turun dua kali lebih tajam.</li>
<li><b>Risiko sistematis</b>: risiko yang menimpa seluruh pasar dan tidak bisa dihilangkan dengan menambah aset sejenis.</li>
<li><b>Risiko spesifik</b>: risiko satu proyek, timnya bubar, kontraknya diretas, tokennya dibuang pendiri. Inilah yang bisa dikurangi dengan menyebar.</li>
</ul>

<h3>Cara menyebar yang benar-benar menyebar</h3>
<p>Tiga sumbu yang benar-benar berbeda, bukan sepuluh token di sumbu yang sama:</p>
<ol>
<li><b>Jenis aset.</b> Crypto, kas atau deposito, emas, properti, usaha sendiri. Inilah lapisan yang paling menentukan.</li>
<li><b>Tempat penyimpanan.</b> Sebagian di dompet sendiri, sebagian di bursa berbeda. Melindungi dari satu bursa bermasalah, bukan dari harga turun.</li>
<li><b>Sumber pemasukan.</b> Gaji, usaha, hasil investasi. Orang yang penghasilannya juga bergantung pada crypto sebenarnya punya portofolio yang jauh lebih terkonsentrasi daripada yang ia kira.</li>
</ol>
<p>Di dalam crypto sendiri, menyebar tetap berguna untuk mengurangi risiko spesifik. Kalau satu proyek diretas, Anda tidak kehilangan semuanya. Tetapi jangan berharap itu melindungi Anda saat seluruh pasar turun, karena tidak akan.</p>

<h3>Contoh</h3>
<p>Selama penurunan besar di pertengahan 2022, aset yang tampaknya sangat berbeda ternyata jatuh bersamaan: token layer 1, token DeFi, token game, bahkan sebagian proyek yang sama sekali tidak terkait satu sama lain. Alasannya bukan karena proyeknya mendadak semua jelek. Alasannya, pemilik yang sama menjual semuanya untuk menutup kebutuhan uang tunai, dan pemberi pinjaman menutup paksa posisi yang dijaminkan beramai-ramai.</p>
<p>Pelajarannya: saat tekanan datang, yang menentukan bukan isi proyek melainkan siapa pemegangnya dan seberapa terdesak mereka.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Korelasi berubah-ubah dan dihitung dari masa lalu. Dua aset bisa tidak berkorelasi selama tiga tahun lalu bergerak serempak persis di bulan yang salah. Menyimpan aset di beberapa bursa mengurangi risiko satu bursa tetapi menambah luas serangan untuk peretasan akun; kursus Keamanan Web3 membahas imbangan ini.</div>` },

        { judul: 'Menyeimbangkan ulang tanpa menebak apa pun', isi: `
<h3>Konsepnya</h3>
<p><b>Rebalancing</b> adalah mengembalikan porsi portofolio ke rencana semula. Kalau rencana Anda 70 persen inti dan 30 persen satelit, lalu satelit naik tajam sampai porsinya jadi 45 persen, Anda menjual sebagian satelit dan menambah inti sampai kembali 70 banding 30.</p>
<p>Yang menarik: tindakan ini memaksa Anda menjual yang sedang naik dan membeli yang sedang tertinggal, tanpa perlu meramal apa pun. Rencana porsinya yang mengambil keputusan, bukan perasaan Anda hari itu.</p>

<h3>Langkah menjalankannya</h3>
<ol>
<li><b>Pilih pemicunya.</b> Dua cara umum: berdasarkan waktu (misalnya tiap tiga bulan) atau berdasarkan simpangan (misalnya kalau ada porsi yang meleset lebih dari 10 poin persen dari rencana).</li>
<li><b>Tulis tanggalnya di kalender</b> kalau memakai pemicu waktu. Rebalancing yang bergantung pada "nanti kalau sempat" tidak pernah terjadi.</li>
<li><b>Hitung selisihnya</b>, lalu jual dan beli secukupnya untuk kembali ke porsi rencana.</li>
<li><b>Catat biayanya.</b> Setiap penyeimbangan menimbulkan biaya transaksi dan kemungkinan pajak. Terlalu sering justru merugikan.</li>
</ol>

<h3>Kapan ini justru merugikan</h3>
<p>Rebalancing bukan sihir. Dalam tren naik yang panjang dan mulus, menjual pemenang berarti mengurangi hasil akhir Anda. Yang ditukar adalah sebagian keuntungan puncak dengan pengurangan gejolak dan pengurangan kemungkinan satu aset menguasai seluruh portofolio tanpa Anda sadari.</p>
<p>Penting juga membedakan rebalancing dari <b>menambah posisi yang rugi</b>. Rebalancing mengembalikan porsi ke rencana yang sudah ada. Menambah posisi rugi karena "sudah murah" adalah keputusan baru yang butuh alasan baru, dan sering hanya cara memperhalus pengakuan bahwa Anda salah.</p>

<h3>Contoh</h3>
<p>Rencana: 70 inti, 30 satelit. Setelah enam bulan, satelit naik dan porsinya jadi 48 persen. Anda menjual bagian satelit senilai 18 persen portofolio dan memindahkannya ke inti. Tiga bulan kemudian satelit turun 60 persen. Karena porsinya sudah dikecilkan, kerugiannya jauh lebih ringan daripada kalau dibiarkan. Anda tidak meramal penurunan itu. Anda hanya menjalankan aturan porsi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Rebalancing yang terlalu sering dimakan biaya transaksi. Di Indonesia, penjualan aset kripto di pedagang terdaftar dikenai pajak final yang dipungut saat transaksi, jadi setiap penyeimbangan punya biaya pajak nyata; periksa ketentuan terbaru sebelum menyusun jadwal. Rebalancing juga tidak menyelamatkan portofolio yang isinya salah sejak awal; ia hanya menjaga porsi.</div>` },
      ],
      kuis: [
        { tanya: 'Pertanyaan yang lebih menentukan daripada "koin apa yang bagus" adalah…',
          pilihan: ['Berapa persen dari total kekayaan saya yang ada di crypto', 'Bursa mana yang biayanya paling murah', 'Kapan waktu terbaik membeli dalam sehari', 'Indikator apa yang paling akurat'],
          jelas: 'Porsi menentukan apakah Anda bisa tidur nyenyak, dan orang yang tidur nyenyak mengambil keputusan lebih baik.' },
        { tanya: 'Pertanyaan pemandu untuk menguji apakah porsi crypto Anda terlalu besar adalah…',
          pilihan: ['Kalau bagian ini turun 80 persen, apakah hidup saya berubah', 'Apakah saya yakin harganya naik', 'Apakah teman saya juga membeli', 'Apakah analis terkenal merekomendasikannya'],
          jelas: 'Kalau jawabannya ya, porsinya terlalu besar. Ujiannya tentang daya tahan Anda, bukan tentang keyakinan pada asetnya.' },
        { tanya: 'Membeli sepuluh altcoin yang naik turun serempak…',
          pilihan: ['Bukan diversifikasi, karena yang bertambah hanya jumlah nama', 'Mengurangi risiko sepuluh kali lipat', 'Menghilangkan risiko pasar', 'Selalu lebih aman daripada memegang satu aset'],
          jelas: 'Diversifikasi bekerja kalau aset tidak bergerak bersamaan. Menyebar di dalam satu kelompok yang berkorelasi tinggi hanya menyamarkan konsentrasi.' },
        { tanya: 'Saat pasar panik, korelasi antar aset crypto biasanya…',
          pilihan: ['Naik, sehingga semuanya jatuh bersamaan persis saat perlindungan paling dibutuhkan', 'Turun, sehingga diversifikasi bekerja lebih baik', 'Tidak berubah', 'Menjadi negatif'],
          jelas: 'Pemilik yang sama menjual semuanya untuk menutup kebutuhan tunai, dan pemberi pinjaman menutup paksa posisi beramai-ramai.' },
        { tanya: 'Kelebihan utama rebalancing berkala adalah…',
          pilihan: ['Memaksa menjual yang sedang naik dan menambah yang tertinggal, tanpa perlu meramal', 'Menjamin hasil lebih tinggi daripada membiarkan portofolio', 'Menghilangkan biaya transaksi', 'Melindungi dari pilihan aset yang buruk'],
          jelas: 'Rencana porsinya yang mengambil keputusan, bukan perasaan Anda hari itu. Dalam tren naik panjang, rebalancing justru mengurangi hasil akhir.' },
        { tanya: 'Beda rebalancing dengan menambah posisi yang sedang rugi adalah…',
          pilihan: ['Rebalancing mengembalikan porsi ke rencana yang sudah ada; menambah posisi rugi adalah keputusan baru yang butuh alasan baru', 'Keduanya sama saja', 'Rebalancing hanya boleh dilakukan saat pasar naik', 'Menambah posisi rugi selalu lebih menguntungkan'],
          jelas: 'Menambah karena "sudah murah" sering hanya cara memperhalus pengakuan bahwa Anda salah.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3, BIAS YANG MENGURAS REKENING
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'bias', judul: 'Bias yang Menguras Rekening',
      ringkas: 'Kesalahan berpikir yang bukan soal kurang pintar, melainkan cara kerja bawaan otak manusia. Mengenalinya tidak menghilangkannya, tetapi membuat Anda bisa memasang pagar.',
      pelajaran: [
        { judul: 'Terlalu percaya diri dan ilusi kendali', isi: `
<h3>Konsepnya</h3>
<p><b>Overconfidence</b> adalah kecenderungan menilai kemampuan sendiri lebih tinggi daripada kenyataannya. Ini bukan sifat orang sombong saja. Penelitian di berbagai bidang menemukan sebagian besar orang menilai dirinya di atas rata-rata, yang secara matematis mustahil.</p>
<p>Di pasar, bias ini punya bentuk khas. Setelah beberapa transaksi berhasil, orang menyimpulkan keberhasilan itu berasal dari kemampuannya. Setelah beberapa transaksi gagal, ia menyalahkan pasar, bandar, atau berita. Cara berpikir yang timpang ini membuat pelajaran tidak pernah masuk.</p>
<p>Saudara dekatnya adalah <b>ilusi kendali</b>: perasaan bahwa Anda memengaruhi hasil yang sebenarnya acak. Menatap grafik lebih lama, menambah indikator, memperbanyak grup sinyal. Semua itu menambah rasa terkendali tanpa menambah kendali.</p>

<h3>Tanda-tandanya pada diri sendiri</h3>
<ul>
<li>Anda menaikkan ukuran posisi setelah beberapa kali menang.</li>
<li>Anda merasa perlu memantau harga sepanjang hari, padahal rencana Anda berjangka bulanan.</li>
<li>Anda bisa menjelaskan panjang lebar kenapa transaksi yang untung itu berhasil, tetapi menjelaskan yang rugi dengan satu kalimat pendek tentang keadaan pasar.</li>
<li>Anda jarang atau tidak pernah menulis alasan sebelum masuk.</li>
</ul>

<h3>Langkah memagarinya</h3>
<ol>
<li><b>Tulis alasan sebelum masuk.</b> Ini satu-satunya cara memeriksa kualitas pikiran Anda setelah hasilnya keluar. Ingatan akan menulis ulang sejarah kalau tidak ada catatan.</li>
<li><b>Tetapkan ukuran posisi sebagai aturan, bukan perasaan.</b> Kalau ukurannya dihitung dari jarak stop, keyakinan tidak punya tempat untuk menyelinap masuk.</li>
<li><b>Pisahkan keputusan dari hasil.</b> Keputusan bagus bisa berakhir rugi, dan keputusan buruk bisa berakhir untung. Nilai prosesnya, bukan hasil satu transaksi.</li>
<li><b>Catat juga yang tidak Anda beli.</b> Daftar aset yang Anda lewatkan dan ternyata naik akan mengejutkan, tetapi begitu pula daftar yang Anda lewatkan dan ternyata hancur.</li>
</ol>

<h3>Contoh</h3>
<p>Seseorang membeli sebuah token karena melihatnya ramai dibicarakan, lalu naik 3 kali lipat. Ia menyimpulkan dirinya pandai membaca narasi awal. Transaksi berikutnya ia memasukkan modal empat kali lebih besar dengan alasan yang sama persis. Kali ini turun 70 persen. Secara keseluruhan ia rugi, padahal "tingkat keberhasilannya" 50 persen.</p>
<p>Yang membunuh bukan tebakannya. Yang membunuh adalah ukuran posisi yang naik mengikuti rasa percaya diri, dan rasa percaya diri itu naik karena hasil, bukan karena metodenya membaik.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Mengetahui sebuah bias tidak membuat Anda kebal. Penelitian psikologi berulang kali menemukan orang yang paham suatu bias tetap melakukannya. Karena itu yang berguna bukan pengetahuannya, melainkan pagar mekanis: aturan tertulis, ukuran posisi yang dihitung, dan catatan. Pagar bekerja walaupun kesadaran Anda sedang lengah.</div>` },

        { judul: 'Ikut-ikutan, dan sejarah gelembung yang selalu mirip', isi: `
<h3>Konsepnya</h3>
<p><b>Herding</b> adalah kecenderungan mengikuti apa yang dilakukan orang banyak. Secara evolusi ini masuk akal: kalau seluruh kampung lari, ikut lari lebih aman daripada bertanya kenapa. Di pasar, naluri yang sama membuat orang membeli paling banyak tepat ketika harga paling mahal, karena saat itulah paling banyak orang membicarakannya.</p>
<p>Gelembung keuangan punya bentuk yang sangat mirip sepanjang sejarah, dari tulip di Belanda abad ke-17, saham perusahaan internet pada 1999, sampai berbagai gelombang di crypto. Urutannya berulang: sebuah teknologi atau gagasan baru yang memang nyata, lalu cerita yang membesar melampaui kenyataannya, lalu masuknya orang yang tidak paham apa yang dibelinya, lalu pinjaman untuk membeli lebih banyak, lalu kehabisan pembeli baru.</p>

<h3>Tanda yang berulang di setiap gelembung</h3>
<ul>
<li>Alasan membeli berubah dari "saya paham nilainya" menjadi "harganya naik terus".</li>
<li>Orang yang tidak pernah tertarik tiba-tiba ikut, dan cerita sukses beredar di keluarga dan tempat kerja.</li>
<li>Muncul pembenaran bahwa "kali ini berbeda" dan ukuran penilaian lama dianggap tidak berlaku lagi.</li>
<li>Pinjaman mudah didapat untuk membeli aset itu.</li>
<li>Yang skeptis dianggap tidak mengerti, bukan diajak berdebat dengan angka.</li>
</ul>
<p>Tidak satu pun tanda ini meramal waktu. Gelembung bisa berlanjut jauh lebih lama daripada dugaan siapa pun, dan bertaruh melawannya terlalu cepat sama menghancurkannya dengan ikut terlalu lama. Yang bisa Anda lakukan bukan menebak puncak, melainkan mengecilkan porsi saat tanda-tanda ini menumpuk.</p>

<h3>Contoh</h3>
<p>Perhatikan apa yang terjadi pada alasan orang membeli. Di awal siklus, pembicaraan berisi hal teknis: apa yang dibangun, siapa yang memakainya, berapa biayanya. Menjelang puncak, pembicaraan berubah jadi soal harga dan target harga. Pergeseran bahasa ini terjadi sebelum harga berbalik, dan bisa Anda amati tanpa alat apa pun, cukup dengan membaca percakapan di sekitar Anda.</p>
<p>Pergeseran sebaliknya juga berlaku. Ketika pembicaraan kembali membosankan dan teknis, dan tidak ada yang menyebut target harga, biasanya Anda sedang berada di fase yang jauh lebih murah.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tanda-tanda di atas sering terlihat jelas setelah kejadian dan jauh lebih kabur saat sedang berlangsung. Banyak teknologi yang melewati gelembung ternyata memang penting sesudahnya; internet tidak mati setelah 2000. Jadi tanda gelembung bukan alasan menganggap sebuah teknologi palsu, melainkan alasan mengecilkan porsi. Jangan pula memakai kerangka ini untuk merasa lebih pintar dari orang lain; itu hanya menukar satu bias dengan bias lain.</div>` },

        { judul: 'Enggan rugi, biaya hangus, dan efek kepemilikan', isi: `
<h3>Konsepnya</h3>
<p>Tiga bias berikut bekerja bersama-sama dan hampir selalu muncul dalam urutan yang sama ketika sebuah posisi merugi.</p>
<ul>
<li><b>Loss aversion</b>: rasa sakit kehilangan terasa jauh lebih besar daripada nikmat mendapat jumlah yang sama. Akibatnya orang menahan posisi rugi terlalu lama, karena menjual berarti mengubah kerugian di kertas menjadi kerugian yang diakui.</li>
<li><b>Sunk cost</b>: menganggap uang yang sudah keluar sebagai alasan untuk bertahan. "Saya sudah rugi 40 persen, sayang kalau dijual sekarang." Uang itu sudah hilang apa pun keputusan Anda; yang tersisa cuma pertanyaan ke mana sisa modal sebaiknya ditaruh.</li>
<li><b>Efek kepemilikan (endowment)</b>: menilai barang yang sudah Anda miliki lebih tinggi daripada barang yang sama kalau belum Anda miliki.</li>
</ul>

<h3>Satu pertanyaan yang membongkar ketiganya</h3>
<p>Ada satu pertanyaan sederhana yang memotong semuanya sekaligus:</p>
<p><b>"Kalau hari ini saya memegang uang tunai sebesar nilai posisi ini, apakah saya akan membelinya di harga sekarang?"</b></p>
<p>Kalau jawabannya tidak, berarti Anda sedang memegangnya hanya karena sudah terlanjur memegangnya. Itu bukan keputusan investasi, itu sisa dari keputusan lama. Pertanyaan ini bekerja karena mengubah posisi Anda dari pemilik menjadi calon pembeli, dan calon pembeli tidak punya sunk cost.</p>

<h3>Langkah memagarinya</h3>
<ol>
<li><b>Tentukan titik keluar sebelum masuk.</b> Keputusan yang dibuat saat tidak sedang rugi jauh lebih jernih.</li>
<li><b>Jadwalkan peninjauan berkala.</b> Sekali sebulan, tanyakan pertanyaan di atas untuk setiap posisi. Ini memaksa keputusan aktif, bukan mendiamkan.</li>
<li><b>Pisahkan catatan harga beli dari layar Anda.</b> Harga beli Anda tidak diketahui pasar dan tidak memengaruhi apa pun, tetapi keberadaannya di layar membuat otak terus menghitung untung rugi alih-alih menilai prospek.</li>
<li><b>Akui bahwa menjual rugi itu memang sakit</b>, lalu tetap lakukan kalau alasannya sudah batal. Menunggu sampai rasanya enak berarti menunggu selamanya.</li>
</ol>

<h3>Contoh</h3>
<p>Seseorang memegang token yang turun 65 persen. Proyeknya sudah berhenti diperbarui setahun dan pengembangnya pindah. Ia tetap menahan karena "tinggal tunggu balik modal". Uang yang sama, kalau dipindahkan ke aset yang masih hidup, hanya butuh naik jauh lebih kecil untuk mencapai jumlah rupiah yang sama. Ia menukar peluang nyata dengan harapan pada angka di layar yang kebetulan pernah ia bayar.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Pertanyaan "apakah saya akan membelinya hari ini" bisa disalahgunakan jadi alasan sering berganti aset, dan terlalu sering berganti punya biayanya sendiri berupa transaksi, pajak, dan kesalahan waktu. Pakai pertanyaan itu pada jadwal tetap, bukan setiap kali harga bergerak. Perlu juga dibedakan antara tesis yang batal dan harga yang sekadar turun; keduanya terasa sama tetapi maknanya berbeda.</div>` },
      ],
      kuis: [
        { tanya: 'Tanda paling umum dari terlalu percaya diri dalam berinvestasi adalah…',
          pilihan: ['Menaikkan ukuran posisi setelah beberapa kali menang', 'Memasang stop loss di setiap posisi', 'Menulis alasan sebelum membeli', 'Memakai timeframe besar'],
          jelas: 'Rasa percaya diri naik karena hasil, bukan karena metodenya membaik. Ukuran posisi yang ikut naik itulah yang biasanya membunuh.' },
        { tanya: 'Kenapa mengetahui sebuah bias tidak cukup untuk menghindarinya?',
          pilihan: ['Penelitian menemukan orang yang paham suatu bias tetap melakukannya, jadi yang berguna adalah pagar mekanis', 'Karena biasnya berubah-ubah setiap tahun', 'Karena bias hanya menimpa pemula', 'Karena bias tidak nyata di pasar crypto'],
          jelas: 'Aturan tertulis, ukuran posisi yang dihitung, dan catatan bekerja walaupun kesadaran Anda sedang lengah.' },
        { tanya: 'Pergeseran yang biasanya terjadi pada alasan orang membeli menjelang puncak gelembung adalah…',
          pilihan: ['Dari "saya paham nilainya" menjadi "harganya naik terus"', 'Dari spekulasi menjadi analisis fundamental', 'Dari jangka pendek menjadi jangka panjang', 'Dari ramai menjadi sepi'],
          jelas: 'Pembicaraan berubah dari hal teknis ke target harga. Pergeseran bahasa ini bisa diamati tanpa alat apa pun.' },
        { tanya: 'Kegunaan mengenali tanda-tanda gelembung adalah…',
          pilihan: ['Mengecilkan porsi, bukan menebak kapan puncaknya', 'Menentukan tanggal jual yang tepat', 'Membuktikan bahwa teknologinya palsu', 'Menjadi alasan bertaruh melawan pasar'],
          jelas: 'Gelembung bisa berlanjut jauh lebih lama dari dugaan siapa pun. Bertaruh melawan terlalu cepat sama menghancurkannya dengan ikut terlalu lama.' },
        { tanya: '"Saya sudah rugi 40 persen, sayang kalau dijual sekarang" adalah contoh…',
          pilihan: ['Sunk cost: uang yang sudah keluar dipakai sebagai alasan bertahan', 'Herding', 'Ilusi kendali', 'Efek kepemilikan'],
          jelas: 'Uang itu sudah hilang apa pun keputusan Anda. Yang tersisa hanya pertanyaan ke mana sisa modal sebaiknya ditaruh.' },
        { tanya: 'Pertanyaan yang paling ampuh membongkar keengganan menjual posisi rugi adalah…',
          pilihan: ['"Kalau hari ini saya pegang uang tunai sebesar ini, apakah saya akan membelinya di harga sekarang?"', '"Berapa lama lagi sampai balik modal?"', '"Apakah harganya sudah cukup murah?"', '"Apa kata analis tentang aset ini?"'],
          jelas: 'Pertanyaan itu mengubah posisi Anda dari pemilik menjadi calon pembeli, dan calon pembeli tidak punya sunk cost.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4, RENCANA KALAU SEMUANYA SALAH
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'skenario', judul: 'Rencana Kalau Semuanya Salah',
      ringkas: 'Kerugian terbesar di crypto jarang datang dari harga turun. Kebanyakan datang dari bursa bangkrut, kunci hilang, atau proyek berhenti. Ini cara menyiapkan jawabannya lebih dulu.',
      pelajaran: [
        { judul: 'Empat cara kehilangan uang selain harga turun', isi: `
<h3>Konsepnya</h3>
<p>Orang menghabiskan hampir seluruh perhatiannya pada pertanyaan "harganya naik atau turun", padahal sebagian besar kehilangan permanen di crypto datang dari jalur lain. Harga turun bisa pulih. Empat hal berikut tidak.</p>
<ol>
<li><b>Tempat penyimpanan gagal.</b> Bursa atau pemberi pinjaman berhenti melayani penarikan, lalu bangkrut. Sudah terjadi berkali-kali, termasuk pada perusahaan yang saat itu terlihat besar dan tepercaya. Aturan lamanya tetap berlaku: kalau bukan kunci Anda, bukan koin Anda.</li>
<li><b>Akses hilang.</b> Seed phrase hilang, terbakar, atau tidak bisa ditemukan ahli waris. Koinnya tetap ada di blockchain selamanya dan tidak bisa diambil siapa pun.</li>
<li><b>Ditipu atau diretas.</b> Satu tanda tangan pada kontrak berbahaya bisa mengosongkan dompet dalam hitungan detik. Kursus Keamanan Web3 membahas bentuk-bentuknya.</li>
<li><b>Proyek berhenti.</b> Tim bubar, dana habis, kode tidak diperbarui. Harganya mungkin tidak langsung nol, tetapi likuiditasnya menghilang dan Anda tidak bisa keluar dalam jumlah berarti.</li>
</ol>

<h3>Langkah menyiapkan jawabannya</h3>
<ul>
<li><b>Batasi saldo di bursa</b> pada jumlah yang memang sedang dipakai bertransaksi. Sisanya pindahkan ke dompet sendiri.</li>
<li><b>Sebar tempat penyimpanan.</b> Jangan semua di satu bursa, dan jangan semua di satu dompet perangkat keras.</li>
<li><b>Uji pemulihan sebelum butuh.</b> Hapus dompet dari ponsel, lalu pulihkan dengan seed phrase Anda. Kalau gagal, Anda baru saja menemukan masalah pada saat yang tepat.</li>
<li><b>Siapkan warisan.</b> Tulis petunjuk yang cukup jelas untuk dipakai orang yang tidak paham crypto, simpan terpisah dari seed phrase-nya.</li>
<li><b>Tetapkan aturan keluar untuk proyek mati.</b> Misalnya, kalau tidak ada pembaruan kode selama enam bulan dan pengembang utamanya pergi, jual apa pun harganya.</li>
</ul>

<h3>Contoh</h3>
<p>Hitung dengan jujur berapa bagian kekayaan Anda yang bergantung pada satu perusahaan tetap beroperasi. Kalau 80 persen aset Anda ada di satu bursa, maka sebetulnya Anda tidak sedang berinvestasi pada crypto, melainkan bertaruh pada kelangsungan satu perusahaan sambil menanggung gejolak harga sekaligus. Keduanya risiko terpisah, dan Anda memikul dua-duanya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Memindahkan aset ke dompet sendiri menghilangkan risiko kustodian tetapi memindahkan seluruh tanggung jawab keamanan ke Anda, termasuk risiko kehilangan akses yang tidak bisa dipulihkan siapa pun. Tidak ada pilihan yang bebas risiko; yang ada hanya pertukaran. Pilih yang risikonya paling Anda pahami dan paling bisa Anda kelola.</div>` },

        { judul: 'Dana darurat, batas alokasi, dan pertanyaan tidur nyenyak', isi: `
<h3>Konsepnya</h3>
<p>Pertahanan terbaik terhadap keputusan buruk bukan disiplin, melainkan <b>keadaan yang membuat Anda tidak terdesak</b>. Orang yang punya dana darurat tidak terpaksa menjual di harga terendah ketika motornya rusak. Orang yang porsinya wajar tidak panik ketika pasar turun 40 persen.</p>
<p>Urutannya jelas dan sebaiknya tidak dilompati: dana darurat dulu, lalu hutang berbunga tinggi dilunasi, baru investasi berisiko. Kursus Keuangan Pribadi & Bisnis membahas urutan ini lebih rinci.</p>

<h3>Ukuran yang masuk akal</h3>
<table>
<tr><th>Keadaan</th><th>Dana darurat</th><th>Alasannya</th></tr>
<tr><td>Penghasilan tetap, tanpa tanggungan</td><td>3 sampai 6 bulan pengeluaran</td><td>Risiko kehilangan pemasukan relatif rendah</td></tr>
<tr><td>Punya tanggungan</td><td>6 sampai 12 bulan</td><td>Pengeluaran wajib lebih sulit dikurangi</td></tr>
<tr><td>Penghasilan tidak tetap atau wiraswasta</td><td>9 sampai 12 bulan</td><td>Pemasukan bisa kosong beberapa bulan berturut-turut</td></tr>
</table>
<p>Dana darurat disimpan di tempat yang bisa diambil cepat dan nilainya tidak bergejolak: rekening tabungan atau deposito yang bisa dicairkan. Bukan stablecoin di bursa, karena itu tetap menanggung risiko tempat penyimpanan yang baru saja dibahas.</p>

<h3>Pertanyaan tidur nyenyak</h3>
<p>Satu ujian sederhana untuk mengetahui apakah porsi Anda sudah benar. Bayangkan besok pagi Anda membuka aplikasi dan seluruh portofolio crypto Anda turun 50 persen dalam semalam.</p>
<ul>
<li>Kalau reaksinya "menyakitkan, tapi saya akan menjalankan rencana", porsinya pas.</li>
<li>Kalau reaksinya "saya harus segera menjual apa pun yang tersisa", porsinya terlalu besar.</li>
<li>Kalau reaksinya "saya tidak akan bisa membayar sesuatu bulan depan", Anda sedang memakai uang yang tidak boleh dipakai.</li>
</ul>
<p>Ujian ini murah karena dilakukan di kepala, dan jauh lebih jujur daripada bertanya pada diri sendiri saat pasar sedang naik.</p>

<h3>Contoh</h3>
<p>Dua orang mengalami penurunan pasar yang sama persis. Yang pertama punya dana darurat enam bulan dan menaruh 10 persen kekayaannya di crypto; ia tidak melakukan apa-apa dan tetap bekerja seperti biasa. Yang kedua tidak punya dana darurat dan menaruh 70 persen kekayaannya di crypto; ketika mesin cuci rumahnya rusak, ia terpaksa menjual di titik terdekat dengan dasar.</p>
<p>Keduanya membaca berita yang sama dan memegang aset yang sama. Yang membedakan hasilnya bukan analisis, melainkan susunan keuangan di belakangnya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka bulan pada tabel di atas adalah pedoman umum, bukan hitungan yang cocok untuk semua orang. Halaman ini bukan nasihat keuangan yang dipersonalisasi; keadaan tiap rumah tangga berbeda. Dana darurat juga tergerus inflasi kalau disimpan terlalu besar dalam bentuk tunai, jadi ukurannya perlu ditinjau ulang sesekali, bukan ditetapkan sekali seumur hidup.</div>` },
      ],
      kuis: [
        { tanya: 'Sebagian besar kehilangan permanen di crypto datang dari…',
          pilihan: ['Tempat penyimpanan gagal, akses hilang, penipuan, dan proyek berhenti', 'Harga yang turun tajam', 'Biaya transaksi yang tinggi', 'Kesalahan membaca indikator'],
          jelas: 'Harga turun bisa pulih. Empat jalur itu tidak, karena asetnya benar-benar tidak bisa diambil kembali.' },
        { tanya: 'Cara menguji apakah pemulihan dompet Anda benar-benar bekerja adalah…',
          pilihan: ['Hapus dompet dari perangkat lalu pulihkan dengan seed phrase, sebelum Anda benar-benar membutuhkannya', 'Menyimpan seed phrase di dua tempat', 'Memotret seed phrase dengan ponsel', 'Menghafalkan alamat dompet'],
          jelas: 'Kalau pemulihannya gagal, Anda menemukan masalahnya pada saat yang tepat, bukan saat perangkat sudah hilang.' },
        { tanya: 'Kalau 80 persen aset Anda ada di satu bursa, sebenarnya Anda sedang…',
          pilihan: ['Memikul dua risiko terpisah sekaligus: gejolak harga dan kelangsungan satu perusahaan', 'Berinvestasi dengan cara paling aman', 'Melakukan diversifikasi yang baik', 'Mengurangi risiko kustodian'],
          jelas: 'Risiko harga dan risiko kustodian adalah dua hal berbeda. Menaruh semuanya di satu tempat berarti menanggung keduanya sekaligus.' },
        { tanya: 'Urutan yang benar sebelum masuk ke investasi berisiko adalah…',
          pilihan: ['Dana darurat, lalu melunasi hutang berbunga tinggi, baru investasi berisiko', 'Investasi dulu supaya modalnya cepat besar, dana darurat menyusul', 'Hutang dulu untuk menambah modal, baru investasi', 'Dana darurat dan investasi berisiko dijalankan bersamaan dengan porsi sama'],
          jelas: 'Pertahanan terbaik terhadap keputusan buruk bukan disiplin, melainkan keadaan yang membuat Anda tidak terdesak menjual.' },
        { tanya: 'Dana darurat sebaiknya TIDAK disimpan dalam bentuk…',
          pilihan: ['Stablecoin di bursa, karena tetap menanggung risiko tempat penyimpanan', 'Rekening tabungan', 'Deposito yang bisa dicairkan', 'Uang tunai secukupnya'],
          jelas: 'Dana darurat dibutuhkan justru saat keadaan buruk, dan keadaan buruk sering bersamaan dengan bursa bermasalah.' },
        { tanya: 'Dalam ujian "portofolio turun 50 persen semalam", reaksi yang menandakan porsi Anda terlalu besar adalah…',
          pilihan: ['"Saya harus segera menjual apa pun yang tersisa"', '"Menyakitkan, tapi saya akan menjalankan rencana"', '"Saya akan meninjau ulang bulan depan sesuai jadwal"', '"Saya akan mencatatnya di jurnal"'],
          jelas: 'Ujian ini murah karena dilakukan di kepala, dan jauh lebih jujur daripada bertanya pada diri sendiri saat pasar sedang naik.' },
      ] },
  ],
});
