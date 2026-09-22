// kelas/riset.js — data kelas kategori Riset Fundamental Crypto. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'riset', urut: 9, nama: 'Riset Fundamental Crypto', warna: '#7d8a4f',
  ringkas: 'Cara menilai sebuah aset crypto dengan angka, bukan dengan cerita: pasokan dan jadwal unlock, pendapatan protokol yang nyata, data on-chain, dan delapan sumber data yang dipakai di laporan Hanif Dossier. Setiap tesis ditutup dengan bear case.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1 — KERANGKA RISET
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'kerangka', judul: 'Kerangka Riset',
      ringkas: 'Tiga pertanyaan yang harus dijawab sebelum menilai token apa pun, dan kebiasaan yang membuat riset Hanif Dossier berbeda: mencari alasan tesis sendiri salah.',
      pelajaran: [
        { judul: 'Tiga pertanyaan sebelum menilai token apa pun', isi: `
<h3>Konsepnya</h3>
<p>Riset crypto mudah melebar tanpa arah. Ada ribuan token, masing-masing dengan situs mengilap, dokumen panjang, dan komunitas yang meyakinkan. Tanpa kerangka, Anda akan menghabiskan berjam-jam lalu keluar dengan perasaan, bukan kesimpulan.</p>
<p>Tiga pertanyaan berikut memotong sebagian besar kandidat dalam waktu singkat. Kalau salah satunya tidak terjawab dengan angka, selesai, lanjut ke kandidat berikutnya.</p>
<ol>
<li><b>Siapa membayar, untuk apa, dan berapa?</b> Cari pemasukan nyata. Protokol yang memungut biaya dari pengguna punya jawaban. Protokol yang hanya membagikan tokennya sendiri tidak punya pemasukan, ia punya pengeluaran.</li>
<li><b>Ke mana uang itu pergi?</b> Ke pemegang token, ke tim, ke penyedia likuiditas, atau habis untuk subsidi. Banyak token dengan pemasukan besar tidak memberi apa pun kepada pemegangnya, dan itu sah asal Anda tahu.</li>
<li><b>Berapa banyak token yang akan ada, dan kapan?</b> Harga per token ditentukan pembagi, bukan cuma pembilang. Pasokan yang bertambah 40 persen setahun membuat pertumbuhan 30 persen tetap berakhir merugi.</li>
</ol>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Fundamental</b> — hal yang menentukan nilai di luar harga: pengguna, pemasukan, biaya, pasokan, dan siapa mengendalikan apa.</li>
<li><b>Tesis</b> — kalimat yang merangkum kenapa Anda membeli, lengkap dengan apa yang harus terjadi supaya Anda benar.</li>
<li><b>Katalis</b> — peristiwa yang bisa membuat pasar menilai ulang: peluncuran produk, unlock besar, keputusan regulasi.</li>
<li><b>Moat</b> — alasan pengguna tetap bertahan walaupun ada pesaing yang lebih murah.</li>
</ul>

<h3>Bentuk tesis yang layak</h3>
<p>Tesis yang baik selalu bisa ditulis dalam satu paragraf dan selalu bisa salah. Bentuknya kira-kira begini:</p>
<p><i>"Protokol X memungut biaya sekitar sekian per bulan dari sekian pengguna aktif. Pemasukan itu tumbuh sekian persen dalam enam bulan terakhir. Pasokan beredarnya sekian persen dari total, dengan unlock besar pada bulan sekian. Saya membelinya karena memperkirakan pemasukannya terus tumbuh sementara pasar masih menilainya seperti protokol tanpa pemasukan. Saya salah kalau pemasukannya berhenti tumbuh dua kuartal berturut-turut, atau kalau unlock bulan sekian menambah pasokan lebih cepat daripada permintaannya."</i></p>
<p>Perhatikan bahwa kalimat terakhir menyebut kondisi yang bisa diperiksa. Tanpa itu, yang Anda punya bukan tesis melainkan harapan.</p>

<h3>Contoh</h3>
<p>Dua token sama-sama naik 5 kali lipat. Yang pertama naik karena pemasukan protokolnya tumbuh dari kecil menjadi besar dan pasar menyesuaikan penilaiannya. Yang kedua naik karena sebuah tokoh terkenal menyebutnya dan pasokan beredarnya sangat kecil sehingga sedikit pembelian menggerakkan harga jauh.</p>
<p>Grafiknya mirip. Yang pertama punya alasan yang bisa diperiksa ulang bulan depan. Yang kedua tidak punya apa pun untuk diperiksa, jadi tidak ada cara mengetahui kapan alasannya batal. Perbedaan itu baru terasa saat harga mulai turun.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Fundamental yang kuat tidak menjamin harga naik, dan fundamental lemah tidak menjamin harga turun, setidaknya tidak dalam waktu yang bisa Anda tunggu. Pasar bisa mengabaikan angka selama bertahun-tahun. Riset mengurangi kemungkinan Anda memegang sesuatu yang kosong, bukan menjamin hasil. Halaman ini bukan rekomendasi membeli aset apa pun.</div>` },

        { judul: 'Bear case wajib: cara membuktikan tesis sendiri salah', isi: `
<h3>Konsepnya</h3>
<p>Kebiasaan paling berharga dalam riset juga yang paling tidak menyenangkan: setelah menyusun alasan membeli, susun alasan yang membuat Anda salah, dengan kesungguhan yang sama.</p>
<p>Alasannya bukan sikap pesimis. Alasannya teknis. Otak manusia mencari bukti yang mendukung apa yang sudah dipercayainya (<b>confirmation bias</b>), dan setelah membeli sesuatu, Anda otomatis jadi pihak yang berkepentingan. Bear case yang ditulis lebih dulu adalah satu-satunya cara mengalahkan kecenderungan itu, karena ditulis sebelum Anda punya kepentingan.</p>

<h3>Langkah menyusunnya</h3>
<ol>
<li><b>Cari argumen terkuat dari pihak yang tidak setuju</b>, bukan yang paling lemah. Kalau Anda hanya bisa menemukan bantahan yang gampang dipatahkan, berarti Anda belum mencari dengan sungguh-sungguh.</li>
<li><b>Tulis tiga hal yang akan membuat tesis Anda batal</b>, masing-masing dengan angka atau peristiwa yang bisa diperiksa.</li>
<li><b>Cari tahu apa yang sudah pernah gagal di kategori yang sama.</b> Hampir setiap ide di crypto sudah pernah dicoba; cari tahu kenapa yang sebelumnya berhenti.</li>
<li><b>Tanyakan siapa yang rugi kalau ini berhasil.</b> Kalau sebuah protokol mengancam pemasukan pihak yang jauh lebih besar dan lebih bermodal, perlawanan itu bagian dari risiko.</li>
<li><b>Tinjau ulang pada jadwal tetap.</b> Bear case yang ditulis sekali lalu dilupakan tidak ada gunanya.</li>
</ol>

<h3>Pertanyaan yang biasanya paling tajam</h3>
<ul>
<li>Kalau protokol ini berhenti membagikan insentif token besok, berapa banyak penggunanya yang tetap tinggal?</li>
<li>Apakah pemasukannya berasal dari pengguna nyata, atau dari pihak yang sedang mengejar imbalan token?</li>
<li>Siapa yang bisa mengubah aturan sistem ini sendirian, dan apakah ada kunci admin?</li>
<li>Berapa lama dana tim cukup untuk membiayai pengembangan, dan dari mana dana berikutnya datang?</li>
<li>Kalau semua nilai jual utamanya disalin pesaing bulan depan, apa yang tersisa?</li>
</ul>

<h3>Contoh</h3>
<p>Sebuah protokol menunjukkan pertumbuhan pengguna yang mengesankan. Bear case yang jujur akan menanyakan dari mana pertumbuhan itu. Kalau ternyata protokol membagikan token kepada siapa pun yang bertransaksi, maka yang diukur bukan permintaan melainkan efektivitas hadiah. Ujiannya sederhana dan tersedia di data: lihat apa yang terjadi pada aktivitas setelah program hadiah dikurangi. Banyak protokol kehilangan sebagian besar penggunanya dalam hitungan minggu.</p>
<p>Ini jenis pemeriksaan yang jarang muncul di materi promosi mana pun, dan justru karena itu berharga.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Bear case bisa berubah jadi alasan tidak pernah memutuskan apa-apa. Setiap aset punya risiko, dan menunggu sampai semua risiko hilang berarti tidak pernah membeli apa pun. Gunanya bukan mencari kepastian, melainkan memastikan Anda tahu apa yang Anda tanggung dan berapa ukurannya. Tetapkan porsi sesuai risikonya, lalu jalankan.</div>` },
      ],
      kuis: [
        { tanya: 'Tiga pertanyaan pembuka dalam kerangka riset ini adalah siapa membayar, ke mana uangnya pergi, dan…',
          pilihan: ['Berapa banyak token yang akan ada dan kapan', 'Siapa pendiri proyeknya', 'Di bursa mana token itu tercatat', 'Berapa jumlah pengikut media sosialnya'],
          jelas: 'Harga per token ditentukan pembagi, bukan cuma pembilang. Pasokan yang bertambah cepat bisa membuat pertumbuhan tetap berakhir merugi.' },
        { tanya: 'Protokol yang hanya membagikan tokennya sendiri kepada pengguna sebenarnya punya…',
          pilihan: ['Pengeluaran, bukan pemasukan', 'Pemasukan yang tumbuh cepat', 'Moat yang kuat', 'Penilaian yang murah'],
          jelas: 'Pemasukan berarti ada pihak luar yang membayar untuk sesuatu. Membagikan token adalah biaya yang dibayar dengan mendilusi pemegang lama.' },
        { tanya: 'Ciri tesis yang layak adalah…',
          pilihan: ['Menyebut kondisi yang bisa diperiksa dan membuat tesis itu batal', 'Ditulis sepanjang mungkin agar lengkap', 'Didukung banyak analis terkenal', 'Menargetkan harga tertentu dengan tanggal pasti'],
          jelas: 'Tanpa syarat batal yang bisa diperiksa, yang Anda punya bukan tesis melainkan harapan.' },
        { tanya: 'Bear case ditulis sebelum membeli karena…',
          pilihan: ['Setelah membeli Anda jadi pihak berkepentingan, dan otak mencari bukti yang mendukung keyakinan sendiri', 'Setelah membeli datanya tidak tersedia lagi', 'Aturan bursa mewajibkannya', 'Supaya bisa dipamerkan ke orang lain'],
          jelas: 'Confirmation bias membuat Anda menyaring informasi setelah punya posisi. Bear case yang ditulis lebih dulu adalah cara mengalahkannya.' },
        { tanya: 'Cara menguji apakah pertumbuhan pengguna sebuah protokol nyata adalah…',
          pilihan: ['Lihat apa yang terjadi pada aktivitas setelah program hadiah token dikurangi', 'Hitung jumlah pengikut di media sosial', 'Periksa berapa bursa yang mencatatkan tokennya', 'Baca dokumen resminya sampai habis'],
          jelas: 'Kalau pertumbuhan berasal dari bagi-bagi token, yang diukur bukan permintaan melainkan efektivitas hadiah. Banyak protokol kehilangan sebagian besar penggunanya dalam hitungan minggu.' },
        { tanya: 'Risiko dari terlalu menekankan bear case adalah…',
          pilihan: ['Menjadi alasan tidak pernah memutuskan apa-apa, padahal setiap aset punya risiko', 'Data jadi tidak akurat', 'Tesis jadi terlalu pendek', 'Pasar jadi lebih sulit dibaca'],
          jelas: 'Gunanya bukan mencari kepastian, melainkan memastikan Anda tahu apa yang ditanggung dan berapa ukurannya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2 — TOKENOMICS
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'tokenomics', judul: 'Tokenomics',
      ringkas: 'Pasokan beredar dan terdilusi penuh, jadwal emisi dan unlock, serta siapa memegang berapa. Bagian riset yang paling sering dilewati dan paling sering jadi penyebab kerugian.',
      pelajaran: [
        { judul: 'Pasokan: beredar, total, dan terdilusi penuh', isi: `
<h3>Konsepnya</h3>
<p>Harga sebuah token tidak berarti apa-apa tanpa jumlahnya. Token seharga 0,001 dolar bisa jauh lebih mahal daripada token seharga 1.000 dolar, tergantung berapa banyak yang ada. Yang dibandingkan antar aset selalu <b>nilai keseluruhan</b>, bukan harga per keping.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Pasokan beredar (circulating supply)</b> — token yang sudah berada di tangan publik dan bisa diperdagangkan.</li>
<li><b>Pasokan total (total supply)</b> — yang sudah dibuat, termasuk yang masih terkunci.</li>
<li><b>Pasokan maksimum (max supply)</b> — batas tertinggi yang akan pernah ada. Sebagian token tidak punya batas.</li>
<li><b>Kapitalisasi pasar (market cap)</b> — harga dikali pasokan beredar.</li>
<li><b>FDV (fully diluted valuation)</b> — harga dikali pasokan maksimum. Inilah nilai proyek seandainya semua token sudah beredar hari ini.</li>
</ul>

<h3>Kenapa selisih market cap dan FDV penting</h3>
<p>Kalau market cap 100 juta dolar tetapi FDV 1 miliar dolar, artinya baru 10 persen token yang beredar. Sembilan puluh persen sisanya akan masuk ke pasar pada suatu waktu, dan setiap token baru yang masuk butuh pembeli baru supaya harga tidak turun.</p>
<p>Selisih besar bukan otomatis buruk, tetapi ia memberi tahu Anda satu hal penting: <b>sebagian besar risiko Anda ada di masa depan, bukan di hari ini</b>. Banyak orang membandingkan market cap sebuah proyek baru dengan proyek mapan lalu menyimpulkan "masih murah", padahal kalau dibandingkan dengan FDV, harganya justru lebih mahal.</p>

<h3>Contoh</h3>
<table>
<tr><th></th><th>Token A</th><th>Token B</th></tr>
<tr><td>Harga</td><td>$2</td><td>$0,50</td></tr>
<tr><td>Beredar</td><td>50 juta</td><td>800 juta</td></tr>
<tr><td>Market cap</td><td>$100 juta</td><td>$400 juta</td></tr>
<tr><td>Maksimum</td><td>1 miliar</td><td>1 miliar</td></tr>
<tr><td>FDV</td><td>$2 miliar</td><td>$500 juta</td></tr>
<tr><td>Sudah beredar</td><td>5%</td><td>80%</td></tr>
</table>
<p>Sekilas Token A terlihat lebih murah karena market cap-nya seperempat Token B. Kenyataannya, pasar sedang menilai Token A empat kali lebih mahal daripada Token B kalau dihitung seluruh tokennya. Token A juga menghadapi 95 persen pasokan yang belum masuk, sedangkan Token B sudah hampir selesai.</p>
<p>Angka ini tersedia gratis di CoinGecko dan CoinMarketCap, dan memeriksanya butuh kurang dari satu menit. Sebagian besar orang tidak melakukannya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka pasokan beredar yang dilaporkan tidak selalu akurat, terutama untuk proyek baru; sebagian menghitung token milik tim atau yayasan sebagai "beredar" padahal tidak pernah dijual. Sebagian proyek juga bisa mengubah pasokan maksimum lewat pemungutan suara. Periksa sumber angkanya, dan kalau dua layanan memberi angka berbeda, cari tahu mana yang memakai definisi lebih ketat.</div>` },

        { judul: 'Emisi, unlock, dan vesting: jadwal yang menentukan', isi: `
<h3>Konsepnya</h3>
<p>Kalau pasokan menjawab "berapa banyak", jadwal menjawab "kapan". Dan "kapan" sering lebih menentukan harga dalam setahun ke depan daripada apa pun yang dibangun proyeknya.</p>
<ul>
<li><b>Emisi</b> — token baru yang dicetak terus-menerus, biasanya sebagai hadiah untuk penambang, validator, atau penyedia likuiditas. Sifatnya mengalir.</li>
<li><b>Unlock</b> — token yang sudah ada tetapi terkunci, lalu dilepas pada tanggal tertentu. Sifatnya melonjak.</li>
<li><b>Vesting</b> — jadwal pelepasan bertahap untuk tim dan investor awal. Biasanya ada <b>cliff</b> (masa tunggu penuh, sering 12 bulan) lalu pelepasan bulanan selama beberapa tahun.</li>
</ul>

<h3>Kenapa unlock besar berbahaya</h3>
<p>Investor awal sering membeli di harga jauh lebih rendah daripada harga pasar sekarang. Ketika token mereka terbuka, sebagian akan menjual, dan keuntungan mereka tetap besar walaupun dijual jauh di bawah harga pasar. Anda sedang bersaing dengan penjual yang tidak keberatan menerima harga rendah.</p>
<p>Yang menarik, pasar sering bergerak sebelum tanggalnya. Harga bisa melemah berminggu-minggu menjelang unlock besar karena pelaku yang tahu jadwalnya mengurangi posisi lebih dulu. Karena itu memeriksa jadwal unlock bukan cuma soal menghindari tanggalnya, tetapi soal memahami kenapa harga bergerak aneh tanpa berita.</p>

<h3>Langkah memeriksanya</h3>
<ol>
<li>Cari jadwal unlock dan vesting di dokumen resmi proyek, atau di layanan yang mengumpulkannya. Messari dan CoinGecko sering memuat ringkasannya.</li>
<li>Hitung <b>berapa persen pasokan beredar</b> yang akan ditambahkan oleh unlock berikutnya. Unlock sebesar 2 persen berbeda jauh dari 25 persen.</li>
<li>Bandingkan dengan <b>volume perdagangan harian</b>. Unlock senilai sepuluh kali volume harian sulit diserap pasar; unlock senilai seperlima volume harian biasanya tidak terasa.</li>
<li>Catat tanggalnya di kalender riset Anda, bukan di ingatan.</li>
</ol>

<h3>Contoh</h3>
<p>Sebuah token punya pasokan beredar 100 juta dan volume harian 5 juta dolar. Pada bulan depan ada unlock 30 juta token untuk investor awal. Itu menambah 30 persen pasokan beredar sekaligus. Walaupun hanya sepertiga penerimanya yang menjual, jumlah yang dijual tetap berkali lipat dari volume harian normal. Tidak ada analisis teknikal yang bisa menutupi ketidakseimbangan sebesar itu.</p>
<p>Sebaliknya, proyek yang emisinya kecil dan vesting-nya sudah hampir selesai punya tekanan jual struktural yang jauh lebih ringan. Ini salah satu alasan sebagian investor lebih menyukai aset yang pasokannya sudah hampir sepenuhnya beredar.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Jadwal unlock bisa diubah, dipercepat, atau diperpanjang lewat pemungutan suara. Tidak semua penerima unlock menjual, dan sebagian sudah melindungi posisinya lebih dulu di pasar derivatif sehingga dampaknya sudah terserap sebelum tanggalnya. Data unlock dari pihak ketiga juga sering tidak lengkap untuk proyek kecil. Pakai sebagai peringatan, bukan sebagai jadwal jual otomatis.</div>` },

        { judul: 'Siapa memegang apa, dan siapa bisa mengubah aturan', isi: `
<h3>Konsepnya</h3>
<p>Dua proyek dengan pasokan identik bisa punya risiko yang sama sekali berbeda tergantung <b>sebaran kepemilikan</b>. Token yang 60 persennya dipegang sepuluh dompet bukan aset publik, melainkan aset milik sepuluh orang yang kebetulan diperdagangkan di depan umum.</p>

<h3>Yang perlu diperiksa</h3>
<ul>
<li><b>Alokasi awal.</b> Berapa persen untuk tim, investor, yayasan, dan publik. Alokasi tim dan investor di atas separuh pasokan adalah tanda peringatan yang layak diperhatikan.</li>
<li><b>Konsentrasi dompet.</b> Penjelajah blockchain menampilkan daftar pemegang terbesar. Kecualikan dompet bursa dan kontrak, lalu lihat sisanya.</li>
<li><b>Kunci admin.</b> Apakah ada pihak yang bisa mencetak token baru, membekukan saldo, atau mengubah kontrak sendirian. Ini pertanyaan keamanan sekaligus pertanyaan ekonomi.</li>
<li><b>Kekuatan suara.</b> Di proyek yang memakai pemungutan suara, periksa apakah beberapa dompet besar cukup untuk meloloskan usulan apa pun.</li>
<li><b>Likuiditas yang dikunci.</b> Untuk token kecil, periksa apakah kolam likuiditasnya terkunci dan sampai kapan. Kolam yang bisa ditarik sewaktu-waktu adalah risiko langsung.</li>
</ul>

<h3>Contoh</h3>
<p>Sebuah token baru terlihat menjanjikan: produknya jalan, penggunanya bertambah. Pemeriksaan daftar pemegang menunjukkan satu dompet non-bursa memegang 22 persen pasokan beredar, dan dompet itu menerima token langsung dari kontrak penerbitan pada hari pertama. Angka itu tidak membuktikan niat buruk, tetapi mengubah ukuran risiko: harga aset ini bergantung pada keputusan satu pihak yang bisa menjual kapan saja.</p>
<p>Tindakan yang masuk akal bukan otomatis membatalkan, melainkan memperkecil porsi dan memantau pergerakan dompet itu. Kalau ia mulai memindahkan token ke bursa, Anda punya peringatan lebih awal daripada orang yang tidak pernah memeriksa.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Satu dompet besar bisa milik kustodian yang menyimpan aset banyak orang, dan satu pihak bisa memecah kepemilikannya ke banyak dompet sehingga terlihat tersebar. Jadi angka konsentrasi adalah batas bawah kecurigaan, bukan kesimpulan. Label dompet dari layanan analitik juga dugaan, bukan kepastian.</div>` },
      ],
      kuis: [
        { tanya: 'Yang dibandingkan antar aset crypto adalah…',
          pilihan: ['Nilai keseluruhan seperti market cap atau FDV, bukan harga per keping', 'Harga per token', 'Jumlah desimal tokennya', 'Harga tertinggi yang pernah dicapai'],
          jelas: 'Token seharga 0,001 dolar bisa jauh lebih mahal daripada token seharga 1.000 dolar, tergantung berapa banyak yang ada.' },
        { tanya: 'FDV adalah…',
          pilihan: ['Harga dikali pasokan maksimum: nilai proyek seandainya semua token sudah beredar', 'Harga dikali pasokan beredar', 'Total dana yang dikumpulkan proyek', 'Nilai seluruh transaksi harian'],
          jelas: 'Market cap memakai pasokan beredar, FDV memakai pasokan maksimum. Selisih besar berarti sebagian besar risiko ada di masa depan.' },
        { tanya: 'Token A: market cap 100 juta, FDV 2 miliar. Token B: market cap 400 juta, FDV 500 juta. Kesimpulannya…',
          pilihan: ['Pasar menilai Token A jauh lebih mahal kalau seluruh tokennya dihitung', 'Token A lebih murah karena market cap-nya lebih kecil', 'Keduanya dinilai sama', 'Token B punya tekanan pasokan lebih besar'],
          jelas: 'Token A baru 5 persen beredar dan menghadapi 95 persen pasokan yang belum masuk. Token B sudah 80 persen beredar.' },
        { tanya: 'Beda emisi dengan unlock adalah…',
          pilihan: ['Emisi mengalir terus-menerus, unlock melonjak pada tanggal tertentu', 'Emisi hanya untuk tim, unlock untuk publik', 'Emisi mengurangi pasokan, unlock menambahnya', 'Keduanya sama, hanya beda istilah'],
          jelas: 'Emisi adalah token baru yang dicetak sebagai hadiah. Unlock adalah token yang sudah ada dan dilepas dari kunci pada tanggal tertentu.' },
        { tanya: 'Cara menilai apakah sebuah unlock akan terasa di harga adalah…',
          pilihan: ['Bandingkan nilainya dengan volume perdagangan harian dan dengan persentase pasokan beredar', 'Lihat apakah beritanya sudah ramai', 'Periksa harga tertinggi tahun lalu', 'Hitung jumlah pemegang token'],
          jelas: 'Unlock senilai sepuluh kali volume harian sulit diserap. Unlock senilai seperlima volume harian biasanya tidak terasa.' },
        { tanya: 'Token yang 60 persennya dipegang sepuluh dompet sebaiknya diperlakukan sebagai…',
          pilihan: ['Aset yang harganya bergantung pada keputusan sedikit pihak, sehingga porsinya perlu dikecilkan', 'Aset yang pasti penipuan', 'Aset yang lebih stabil karena pemegangnya kuat', 'Aset tanpa risiko konsentrasi'],
          jelas: 'Angka konsentrasi tidak membuktikan niat buruk, tetapi mengubah ukuran risiko. Tindakan yang masuk akal adalah memperkecil porsi dan memantau dompet itu.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3 — MEMBACA PENDAPATAN PROTOKOL
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'pendapatan', judul: 'Membaca Pendapatan Protokol',
      ringkas: 'Biaya, pendapatan, dan laba sebuah protokol: siapa yang sebenarnya dibayar, dan bagaimana membandingkannya dengan penilaian pasar tanpa tertipu rasio yang terlihat murah.',
      pelajaran: [
        { judul: 'Fee, revenue, dan earnings: siapa yang sebenarnya dibayar', isi: `
<h3>Konsepnya</h3>
<p>Ini bagian yang membuat riset crypto mendekati analisis bisnis biasa, dan bagian yang paling sering dijelaskan secara keliru. Tiga angka berikut sering disebut bergantian padahal artinya sangat berbeda.</p>
<ul>
<li><b>Fee (biaya)</b> — total yang dibayar pengguna untuk memakai protokol. Ini seperti omzet kotor: uang yang masuk ke sistem secara keseluruhan.</li>
<li><b>Revenue (pendapatan protokol)</b> — bagian dari biaya itu yang masuk ke kas protokol atau ke pemegang token. Sisanya pergi ke pihak lain, misalnya penyedia likuiditas atau validator.</li>
<li><b>Earnings (laba)</b> — pendapatan dikurangi pengeluaran, terutama insentif token yang dibagikan protokol untuk menarik pengguna.</li>
</ul>
<p>Perhatikan bahwa susunannya persis sama dengan laporan laba rugi usaha biasa: omzet, lalu bagian yang benar-benar jadi milik perusahaan, lalu sisa setelah semua beban. Kursus Keuangan Pribadi & Bisnis membahas bentuk aslinya.</p>

<h3>Kenapa perbedaan ini menentukan</h3>
<p>Sebuah bursa terdesentralisasi bisa memungut biaya 100 juta dolar setahun tetapi menyerahkan 95 juta kepada penyedia likuiditas. Pendapatan protokolnya cuma 5 juta. Kalau ada yang menyebut "protokol ini menghasilkan 100 juta dolar", itu keliru dua puluh kali lipat.</p>
<p>Lebih jauh lagi, protokol yang sama bisa membagikan token senilai 30 juta dolar setahun sebagai insentif. Maka earnings-nya minus 25 juta. Ia terlihat sibuk dan ramai sambil sebenarnya merugi, dan kerugian itu dibayar oleh pemegang token dalam bentuk dilusi.</p>

<h3>Langkah memeriksanya</h3>
<ol>
<li>Buka Token Terminal untuk melihat fee, revenue, dan earnings sebuah protokol dalam satu tampilan dengan riwayat harian.</li>
<li>Lihat tren 90 hari dan 365 hari, bukan angka satu hari. Satu hari ramai bisa berasal dari satu peristiwa.</li>
<li>Periksa berapa besar insentif token dibanding pendapatannya. Kalau insentif jauh lebih besar, pertumbuhannya sedang dibeli.</li>
<li>Bandingkan dengan DefiLlama untuk melihat TVL dan pangsa pasarnya di kategori yang sama.</li>
</ol>

<h3>Contoh</h3>
<table>
<tr><th></th><th>Protokol X</th><th>Protokol Y</th></tr>
<tr><td>Fee setahun</td><td>$120 juta</td><td>$40 juta</td></tr>
<tr><td>Bagian ke protokol</td><td>$6 juta</td><td>$28 juta</td></tr>
<tr><td>Insentif token dibagikan</td><td>$45 juta</td><td>$3 juta</td></tr>
<tr><td>Earnings</td><td>−$39 juta</td><td>+$25 juta</td></tr>
</table>
<p>Protokol X terlihat tiga kali lebih besar kalau yang dilihat hanya angka fee, dan itu angka yang paling sering dipamerkan di media sosial. Setelah dibaca sampai baris terakhir, Protokol Y adalah yang benar-benar menghasilkan uang, sementara Protokol X membiayai keramaiannya dengan mencetak token.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Definisi fee dan revenue berbeda antar penyedia data, dan kadang berbeda antar protokol di penyedia yang sama. Selalu baca keterangan metodologinya sebelum membandingkan dua angka. Protokol yang sedang merugi tidak otomatis buruk; perusahaan muda memang sering membakar uang untuk tumbuh. Yang penting adalah apakah pembakaran itu menghasilkan pengguna yang bertahan setelah insentifnya berhenti.</div>` },

        { judul: 'Rasio penilaian dan kenapa "murah" sering menipu', isi: `
<h3>Konsepnya</h3>
<p>Setelah tahu pendapatannya, pertanyaan berikutnya adalah apakah pasar menilainya mahal atau murah. Alatnya dipinjam dari analisis saham, dengan penyesuaian.</p>
<ul>
<li><b>P/S (price to sales)</b> — kapitalisasi pasar dibagi pendapatan setahun. Berapa tahun pendapatan yang sedang dibayar pasar.</li>
<li><b>P/F (price to fees)</b> — kapitalisasi pasar dibagi total biaya yang dibayar pengguna. Lebih longgar, karena tidak semua biaya jadi milik protokol.</li>
<li><b>P/E</b> — dipakai kalau protokol punya laba nyata. Masih jarang di crypto.</li>
</ul>
<p>Rasio ini berguna untuk <b>membandingkan protokol sejenis</b>, bukan untuk menentukan harga wajar. Membandingkan P/S bursa terdesentralisasi dengan P/S protokol pinjaman sama tidak berartinya dengan membandingkan P/E restoran dengan P/E perusahaan tambang.</p>

<h3>Tiga cara rasio membuat sesuatu terlihat murah padahal tidak</h3>
<ol>
<li><b>Memakai market cap, bukan FDV.</b> Protokol dengan 10 persen pasokan beredar akan terlihat sepuluh kali lebih murah daripada kenyataannya. Hitung kedua versinya.</li>
<li><b>Memakai pendapatan puncak.</b> Pendapatan yang melonjak karena satu bulan gila membuat rasio terlihat rendah. Pakai rata-rata beberapa bulan, atau angka tahunan yang disetahunkan dari periode normal.</li>
<li><b>Mengabaikan arah.</b> P/S rendah pada protokol yang pendapatannya menyusut tiap kuartal bukan murah, melainkan peringatan. P/S tinggi pada protokol yang pendapatannya berlipat tiap kuartal bisa jadi justru masuk akal.</li>
</ol>

<h3>Contoh perhitungan</h3>
<p>Protokol Y dari pelajaran sebelumnya berpendapatan 28 juta dolar setahun. Kapitalisasi pasarnya 280 juta dolar, jadi P/S-nya 10. Tetapi pasokan beredarnya baru 40 persen, sehingga FDV-nya 700 juta dolar dan P/S berbasis FDV menjadi 25.</p>
<p>Angka 10 dan 25 menceritakan dua hal berbeda. Yang pertama menggambarkan hari ini, yang kedua menggambarkan keadaan setelah semua token beredar. Investor yang berencana memegang beberapa tahun sebaiknya memakai angka kedua, karena selama masa itulah sisa tokennya akan masuk.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Sebagian besar token tidak memberi pemegangnya hak atas pendapatan protokol sama sekali. Kalau tidak ada mekanisme yang mengalirkan pendapatan ke pemegang token, entah lewat pembelian kembali, pembakaran, atau pembagian, maka rasio penilaian hanya perbandingan angka tanpa klaim ekonomi di belakangnya. Periksa dulu apakah tokennya benar-benar berhak atas sesuatu sebelum memakai rasio apa pun.</div>` },

        { judul: 'Studi kasus PONS: pendapatan yang dipakai membeli kembali token', isi: `
<h3>Konsepnya</h3>
<p>Pada 5 September 2026 sebuah akun crypto Indonesia di Instagram mengunggah PONS dengan klaim "naik ribuan persen dalam 2 bulan". Rahasia yang disebutnya satu: pendapatan platform tidak dibagikan ke tim, tapi dipakai untuk <b>membeli kembali lalu membakar tokennya</b> (<i>buyback and burn</i>).</p>
<p>Klaimnya sebagian besar benar, dan justru karena itu kasus ini bagus untuk belajar. Pelajaran sebelumnya berakhir dengan satu syarat: rasio apa pun baru berarti kalau pemegang token benar-benar berhak atas pendapatan protokol. PONS adalah contoh token yang memenuhi syarat itu, sekaligus contoh betapa cepatnya syarat itu bisa goyah.</p>

<h3>Cara kerjanya</h3>
<p>Pons adalah <i>launchpad</i> di Robinhood Chain, jaringan Layer 2 milik Robinhood yang aktif sejak 1 Juli 2026. Siapa pun bisa membuat koin baru di sana dengan nama, simbol, dan gambar sendiri, mirip Pump.fun di Solana. Pons dibuat tim independen, bukan oleh Robinhood.</p>
<ol>
<li>Setiap transaksi jual beli koin buatan pengguna dikenai biaya perdagangan.</li>
<li>Menurut penjelasan yang beredar, biaya itu dibagi: sebagian besar ke pembuat koinnya, sisanya ke protokol Pons.</li>
<li>Sekitar 80% pendapatan protokol dipakai membeli PONS di pasar, lalu token yang dibeli dimusnahkan.</li>
<li>Makin ramai orang membuat dan memperdagangkan koin, makin besar pembelian PONS, dan makin sedikit PONS yang tersisa.</li>
</ol>
<p>Jadi harga PONS terikat langsung ke satu angka: seberapa ramai orang bermain memecoin di Robinhood Chain.</p>

<h3>Empat bahan yang membuatnya naik</h3>
<ol>
<li><b>Pendapatan nyata, bukan janji.</b> Biaya $5,95 juta dalam 24 jam pada 2 September, peringkat 4 di DefiLlama, di atas Pump ($4,64 juta).<br><i>Cek sendiri:</i> DefiLlama, menu Fees, cari nama protokolnya, lalu lihat grafik 30 hari.</li>
<li><b>Pendapatan mengalir ke pemegang token.</b> Sekitar 80% pendapatan dipakai untuk buyback dan burn.<br><i>Cek sendiri:</i> dokumentasi resmi proyek, lalu cocokkan dengan transaksi pembakaran di penjelajah blok.</li>
<li><b>Suplai menyusut.</b> Sekitar 29% dari 1 miliar token sudah dibakar pada awal September. CoinGecko mencatat 685 juta tersisa pada 22 September.<br><i>Cek sendiri:</i> CoinGecko atau CoinMarketCap, bandingkan total supply dengan max supply.</li>
<li><b>Jaringan baru, pemain pertama.</b> Pons aktif beberapa hari setelah Robinhood Chain dibuka, dan hampir 25.000 koin dibuat dalam sehari pada 2 September.<br><i>Cek sendiri:</i> berita peluncuran jaringannya dan data aktivitas harian di DefiLlama.</li>
</ol>
<p>Kalau salah satu bahan hilang, rumusnya tidak jalan. Pendapatan besar tanpa buyback tidak menyentuh harga token. Buyback tanpa pendapatan cuma membakar kas. Dan tanpa jaringan baru yang sedang ramai, pendapatannya tidak akan pernah sebesar itu.</p>

<h3>Contoh: perjalanan harganya</h3>
<table>
<tr><th>Tanggal</th><th>Harga PONS</th><th>Yang terjadi</th></tr>
<tr><td>17 Jul 2026</td><td>$0,0033</td><td>Titik terendah, beberapa hari setelah mulai diperdagangkan</td></tr>
<tr><td>Agustus 2026</td><td>sekitar $0,016</td><td>Uniswap membuka launchpad pesaing tanpa biaya dan sempat merebut separuh volume</td></tr>
<tr><td>3 Sep 2026</td><td>$0,5978</td><td>Setelah biaya harian memuncak; sekitar 180 kali lipat dari titik terendah</td></tr>
<tr><td>5 Sep 2026</td><td>$0,971 (puncak)</td><td>Hari yang sama dengan unggahan Instagram tadi</td></tr>
<tr><td>22 Sep 2026</td><td>$0,593</td><td>Sekitar 39% di bawah puncak</td></tr>
</table>
<p>Perhatikan baris keempat. Konten "naik ribuan persen" biasanya muncul saat kenaikannya sudah terjadi. Orang yang membeli karena unggahan itu masuk di harga tertinggi.</p>

<h3>Cara memakai pola ini untuk memilih koin</h3>
<ol>
<li>Cari protokol yang pendapatannya bisa dilihat di DefiLlama atau Token Terminal, bukan yang cuma berjanji.</li>
<li>Pastikan ada mekanisme tertulis yang mengalirkan pendapatan itu ke pemegang token: buyback, burn, atau pembagian.</li>
<li>Cek apakah suplainya benar-benar turun dari waktu ke waktu, bukan sekadar diumumkan.</li>
<li>Tanyakan dari mana pendapatannya datang dan seberapa mudah pesaing menirunya. Biaya yang bisa dipotong jadi nol oleh pesaing adalah pendapatan yang rapuh.</li>
<li>Bandingkan kapitalisasi pasar dengan pendapatan rata-rata beberapa bulan, bukan dengan hari tersibuknya. Aturan ini sama dengan pelajaran rasio penilaian sebelumnya.</li>
</ol>

<div class="batas-berlaku"><b>Batas & risiko.</b> Pendapatan PONS datang dari satu sumber: mania memecoin di satu jaringan. Kalau keramaian itu reda, pembelian kembali ikut mengecil, dan penopang harga yang tadi bekerja ke atas akan bekerja ke bawah. Agustus sudah memberi contohnya: satu pesaing tanpa biaya cukup untuk menjatuhkan harga ke kisaran $0,016. Rincian pembagian biaya di atas berasal dari artikel pihak ketiga, dan tim di balik Pons tidak diungkap. Studi kasus ini untuk memahami polanya, bukan ajakan membeli PONS.</div>
<div class="sumber">Sumber: <a href="https://www.instagram.com/p/Dc57j3nDyFx/" target="_blank" rel="noopener">unggahan Instagram @cryptolyfe.xyz, 5 Sep 2026</a>; <a href="https://www.coindesk.com/tech/2026/09/03/a-memecoin-making-app-becomes-crypto-s-top-fee-generators-as-robinhood-chain-activity-explodes" target="_blank" rel="noopener">CoinDesk, 3 Sep 2026</a>; <a href="https://finance.yahoo.com/markets/crypto/articles/pons-robinhood-chain-meme-coin-204604745.html" target="_blank" rel="noopener">Yahoo Finance</a>; <a href="https://www.kucoin.com/blog/why-pons-on-robinhood-chain-is-emerging-as-the-most-cost-effective-high-revenue-token" target="_blank" rel="noopener">KuCoin Blog</a>; <a href="https://www.coingecko.com/en/coins/pons" target="_blank" rel="noopener">CoinGecko, data 22 Sep 2026</a>; <a href="https://ponsfamily.com/" target="_blank" rel="noopener">situs Pons</a>.</div>` },
      ],
      kuis: [
        { tanya: 'Urutan yang benar dari yang terbesar ke terkecil biasanya…',
          pilihan: ['Fee, lalu revenue protokol, lalu earnings', 'Earnings, lalu revenue, lalu fee', 'Revenue, lalu fee, lalu earnings', 'Ketiganya selalu bernilai sama'],
          jelas: 'Fee adalah total yang dibayar pengguna, revenue adalah bagian yang jadi milik protokol, earnings adalah sisa setelah insentif token dikurangi.' },
        { tanya: 'Sebuah bursa terdesentralisasi memungut fee 100 juta dolar dan menyerahkan 95 juta ke penyedia likuiditas. Pendapatan protokolnya…',
          pilihan: ['5 juta dolar', '100 juta dolar', '95 juta dolar', '195 juta dolar'],
          jelas: 'Menyebut "protokol ini menghasilkan 100 juta dolar" dalam kasus ini keliru dua puluh kali lipat.' },
        { tanya: 'Protokol dengan earnings negatif karena insentif token besar artinya…',
          pilihan: ['Kerugiannya dibayar pemegang token dalam bentuk dilusi', 'Protokol itu pasti penipuan', 'Pendapatannya lebih besar dari biayanya', 'Tokennya pasti akan naik'],
          jelas: 'Ia terlihat sibuk dan ramai sambil sebenarnya merugi. Membakar uang untuk tumbuh tidak otomatis buruk, asal penggunanya bertahan setelah insentif berhenti.' },
        { tanya: 'Rasio P/S paling berguna untuk…',
          pilihan: ['Membandingkan protokol sejenis satu sama lain', 'Menentukan harga wajar sebuah token', 'Meramalkan harga bulan depan', 'Membandingkan protokol dari kategori yang berbeda'],
          jelas: 'Membandingkan P/S bursa terdesentralisasi dengan P/S protokol pinjaman sama tidak berartinya dengan membandingkan P/E restoran dengan P/E perusahaan tambang.' },
        { tanya: 'Rasio penilaian yang dihitung dengan market cap, bukan FDV, akan membuat protokol dengan pasokan beredar kecil terlihat…',
          pilihan: ['Jauh lebih murah daripada kenyataannya', 'Lebih mahal daripada kenyataannya', 'Sama saja', 'Tidak bisa dihitung'],
          jelas: 'Protokol dengan 10 persen pasokan beredar akan terlihat sepuluh kali lebih murah. Hitung kedua versinya.' },
        { tanya: 'Sebelum memakai rasio penilaian apa pun, hal yang wajib diperiksa lebih dulu adalah…',
          pilihan: ['Apakah pemegang token benar-benar berhak atas pendapatan protokol', 'Berapa harga tertinggi token itu tahun lalu', 'Bursa mana saja yang mencatatkannya', 'Siapa investor awalnya'],
          jelas: 'Tanpa mekanisme yang mengalirkan pendapatan ke pemegang token, rasio penilaian hanya perbandingan angka tanpa klaim ekonomi di belakangnya.' },
        { tanya: 'Dalam kasus PONS, apa yang membuat pendapatan platform berpengaruh langsung ke harga token?',
          pilihan: ['Sebagian besar pendapatan dipakai membeli PONS di pasar lalu membakarnya', 'Robinhood menjamin harga PONS', 'Tim membagikan pendapatan sebagai gaji', 'Jumlah PONS bertambah setiap hari'],
          jelas: 'Sekitar 80% pendapatan protokol dipakai untuk buyback dan burn, sehingga makin ramai platformnya, makin banyak PONS yang dibeli dan dimusnahkan. Pons juga bukan produk resmi Robinhood.' },
        { tanya: 'Risiko terbesar dari pola buyback seperti PONS adalah…',
          pilihan: ['Pendapatannya bergantung pada keramaian yang bisa reda atau direbut pesaing', 'Suplainya terus bertambah', 'Tidak bisa dicek di mana pun', 'Harganya pasti naik terus'],
          jelas: 'Pada Agustus 2026 satu launchpad pesaing tanpa biaya sempat merebut separuh volume, dan PONS jatuh ke kisaran $0,016. Penopang yang bekerja ke atas juga bekerja ke bawah.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4 — ANALISIS ON-CHAIN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'onchain', judul: 'Analisis On-chain',
      ringkas: 'Keunggulan yang tidak dimiliki pasar saham: seluruh buku besarnya terbuka. Metrik pasokan dan dompet, metrik derivatif, dan cara membedakan aktivitas nyata dari aktivitas yang dibuat-buat.',
      pelajaran: [
        { judul: 'Metrik pasokan dan dompet', isi: `
<h3>Konsepnya</h3>
<p>Di pasar saham, Anda baru tahu siapa memegang apa dari laporan berkala yang terlambat berminggu-minggu. Di blockchain publik, seluruh perpindahan terlihat saat itu juga. Ini keunggulan nyata, asal dibaca dengan hati-hati.</p>

<h3>Istilah dan alat yang dipakai</h3>
<ul>
<li><b>Alamat aktif</b> — jumlah alamat yang bertransaksi dalam periode tertentu. Ukuran kasar pemakaian, mudah digelembungkan.</li>
<li><b>Arus bursa (exchange flow)</b> — berapa banyak koin masuk ke atau keluar dari dompet bursa. Arus masuk besar sering mendahului penjualan, arus keluar sering menandakan pemindahan ke simpanan jangka panjang.</li>
<li><b>Pasokan menurut umur (HODL waves)</b> — berapa porsi koin yang tidak bergerak selama 1 tahun, 2 tahun, dan seterusnya. Porsi yang naik menandakan pemegang bertahan.</li>
<li><b>Realized cap dan MVRV</b> — perbandingan harga pasar dengan harga rata-rata saat koin terakhir berpindah. Memberi gambaran apakah pemegang rata-rata sedang untung atau rugi.</li>
<li><b>Pasokan di dompet besar</b> — porsi yang dipegang alamat dengan saldo di atas ambang tertentu.</li>
</ul>
<p>Glassnode dan CryptoQuant adalah dua sumber utama untuk metrik ini, dan keduanya punya tampilan gratis yang sudah cukup untuk sebagian besar pertanyaan.</p>

<h3>Cara membacanya tanpa salah tafsir</h3>
<ol>
<li><b>Perhatikan arah, bukan angka mutlak.</b> Nilai satu hari hampir tidak berarti. Yang berguna adalah perubahan selama beberapa minggu.</li>
<li><b>Ingat bahwa perpindahan bukan niat.</b> Koin keluar dari bursa bisa berarti disimpan jangka panjang, dipindahkan ke kustodian lain, atau dipakai sebagai jaminan pinjaman.</li>
<li><b>Satu orang bisa punya ribuan alamat.</b> Jumlah alamat aktif bisa dinaikkan dengan murah, terutama di jaringan berbiaya rendah.</li>
<li><b>Gabungkan dengan konteks harga.</b> Metrik yang sama punya arti berbeda saat harga di puncak dan saat harga di dasar.</li>
</ol>

<h3>Contoh</h3>
<p>Selama fase akumulasi yang dibahas di kursus Analisis Pasar, pola yang berulang adalah: harga bergerak menyamping, arus keluar bursa positif selama berminggu-minggu, dan porsi pasokan yang tidak bergerak lebih dari setahun terus naik. Ketiganya bercerita hal yang sama, yaitu koin berpindah dari pihak yang berdagang ke pihak yang menyimpan.</p>
<p>Menjelang puncak, ketiganya berbalik: arus masuk bursa naik, porsi koin tua mulai turun karena pemegang lama mulai menjual, dan alamat baru bertambah cepat. Tidak satu pun memberi tanggal, tetapi bersama-sama mereka memberi tahu di bagian mana siklus Anda berada.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Metrik on-chain paling dapat diandalkan untuk Bitcoin dan Ethereum, karena datanya panjang dan pola dompetnya sudah banyak dipelajari. Untuk aset baru, sejarahnya terlalu pendek untuk pembanding yang berarti. Label dompet bursa juga hasil dugaan pihak ketiga dan sering tertinggal ketika bursa membuat alamat baru. Sebagian besar aktivitas kini juga terjadi di Layer 2 dan di dalam bursa, yang tidak terlihat di rantai utama.</div>` },

        { judul: 'Metrik derivatif: open interest, funding, dan likuidasi', isi: `
<h3>Konsepnya</h3>
<p>Sebagian besar volume perdagangan crypto terjadi di pasar derivatif, bukan di pasar spot. Karena itu memahami posisi di pasar derivatif sering lebih menjelaskan gerakan harga jangka pendek daripada apa pun yang terjadi di blockchain.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Open interest</b> — total nilai posisi yang sedang terbuka. Naik berarti uang baru masuk ke posisi berjangka; turun berarti posisi ditutup atau dilikuidasi.</li>
<li><b>Funding rate</b> — biaya berkala antar pemegang posisi di kontrak perpetual. Positif berarti pemegang posisi beli membayar penjual, yang menandakan permintaan beli dengan pinjaman sedang tinggi.</li>
<li><b>Long/short ratio</b> — perbandingan posisi beli dan jual. Berguna sebagai tanda keramaian, bukan sebagai arah.</li>
<li><b>Peta likuidasi</b> — perkiraan di harga berapa banyak posisi akan tertutup paksa. Menunjukkan daerah yang rawan gerakan cepat.</li>
</ul>
<p>Coinglass adalah sumber yang paling lengkap untuk kelompok metrik ini, dan sebagian besar tampilannya gratis.</p>

<h3>Cara memakainya</h3>
<p>Kegunaan utamanya bukan meramal arah, melainkan <b>menilai kerapuhan</b>. Tiga keadaan yang layak diperhatikan:</p>
<ol>
<li><b>Open interest naik tajam sementara harga naik pelan.</b> Kenaikan sedang dibiayai pinjaman, bukan pembelian tunai. Rawan berbalik cepat.</li>
<li><b>Funding rate sangat tinggi dan bertahan berhari-hari.</b> Banyak pihak membayar mahal untuk tetap memegang posisi beli. Penurunan kecil bisa memicu rantai likuidasi.</li>
<li><b>Likuidasi besar sudah terjadi.</b> Setelah pembersihan besar, posisi berleverage sudah banyak hilang, dan pasar biasanya lebih stabil untuk sementara.</li>
</ol>

<h3>Contoh</h3>
<p>Harga naik 6 persen dalam tiga hari. Pada periode yang sama, open interest naik 40 persen dan funding rate positif tinggi. Artinya kenaikan itu sebagian besar dibeli dengan pinjaman. Struktur seperti ini sering diikuti penurunan tajam yang terlihat tidak masuk akal kalau hanya melihat berita, padahal penjelasannya ada di posisi, bukan di fundamental.</p>
<p>Bandingkan dengan kenaikan 6 persen yang disertai open interest datar. Kenaikan itu dibeli dengan uang tunai dan biasanya jauh lebih tahan.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Data derivatif hanya mencakup bursa yang melaporkannya, dan definisi tiap bursa berbeda. Perdagangan di luar bursa dan posisi lindung nilai institusi tidak terlihat, sehingga posisi yang tampak sangat memihak satu arah bisa jadi sudah dilindungi di tempat lain. Metrik ini berguna untuk jangka pendek dan hampir tidak berguna untuk keputusan bertahun-tahun.</div>` },

        { judul: 'TVL, stablecoin, dan membedakan aktivitas nyata dari yang dibuat-buat', isi: `
<h3>Konsepnya</h3>
<p>Setiap angka yang bisa dipamerkan akan dimanipulasi oleh sebagian orang. Karena itu keterampilan terpenting dalam analisis on-chain bukan menemukan metrik baru, melainkan mengetahui bagaimana tiap metrik bisa dipalsukan.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>TVL (total value locked)</b> — nilai aset yang disimpan di dalam sebuah protokol. Sumber utamanya DefiLlama.</li>
<li><b>Pasokan stablecoin</b> — total stablecoin yang beredar di sebuah jaringan. Sering dipakai sebagai ukuran kasar berapa banyak uang siap pakai di ekosistem itu.</li>
<li><b>Double counting</b> — aset yang sama dihitung di beberapa protokol sekaligus karena dipakai berlapis.</li>
<li><b>Wash trading</b> — transaksi bolak-balik antar dompet sendiri untuk menggelembungkan volume atau jumlah pengguna.</li>
</ul>

<h3>Bagaimana tiap metrik bisa menipu</h3>
<table>
<tr><th>Metrik</th><th>Cara ia menipu</th><th>Pemeriksaan tandingan</th></tr>
<tr><td>TVL</td><td>Naik karena harga aset di dalamnya naik, bukan karena ada uang masuk</td><td>Lihat TVL dalam satuan aset, bukan dolar</td></tr>
<tr><td>TVL</td><td>Aset yang sama dihitung berlapis di beberapa protokol</td><td>DefiLlama punya saringan untuk ini; bandingkan angkanya</td></tr>
<tr><td>Alamat aktif</td><td>Satu pihak membuat ribuan alamat untuk mengejar airdrop</td><td>Lihat nilai transaksi rata-rata dan pola waktunya</td></tr>
<tr><td>Volume</td><td>Wash trading di bursa tanpa biaya</td><td>Bandingkan sebaran volume antar bursa di CoinGecko</td></tr>
<tr><td>Pengguna</td><td>Dibayar dengan insentif token</td><td>Lihat retensi setelah insentif dikurangi</td></tr>
</table>

<h3>Contoh</h3>
<p>Sebuah jaringan baru mengumumkan TVL naik dari 200 juta menjadi 900 juta dolar dalam dua bulan. Pemeriksaan di DefiLlama menunjukkan sebagian besar kenaikan berasal dari kenaikan harga token aslinya, yang memang jadi aset utama yang disimpan di sana. Dalam satuan token, jumlah yang disimpan hampir tidak berubah.</p>
<p>Pemeriksaan kedua yang lebih menentukan: berapa pasokan stablecoin di jaringan itu. Stablecoin tidak bisa digelembungkan oleh kenaikan harga, jadi pertumbuhannya menunjukkan uang nyata yang benar-benar masuk. Kalau TVL naik tajam sementara pasokan stablecoin diam, kemungkinan besar yang Anda lihat adalah pantulan harga, bukan adopsi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> TVL tinggi tidak berarti protokol itu sehat atau aman; sebagian peretasan terbesar justru menimpa protokol dengan TVL besar. Pasokan stablecoin juga bisa naik karena satu pihak besar memindahkan dana untuk sementara. Tidak ada satu metrik yang cukup sendirian; yang berguna adalah beberapa metrik dari jenis berbeda yang menceritakan hal yang sama.</div>` },
      ],
      kuis: [
        { tanya: 'Arus keluar koin dari dompet bursa dalam jumlah besar berarti…',
          pilihan: ['Koin berpindah keluar bursa, yang bisa berarti disimpan lama, pindah kustodian, atau jadi jaminan pinjaman', 'Pemilik pasti akan memegangnya jangka panjang', 'Harga pasti akan naik', 'Bursa itu sedang bermasalah'],
          jelas: 'Data on-chain menunjukkan perpindahan, bukan niat. Selalu ada beberapa tafsiran untuk satu pergerakan.' },
        { tanya: 'Metrik on-chain paling dapat diandalkan untuk…',
          pilihan: ['Bitcoin dan Ethereum, karena datanya panjang dan pola dompetnya sudah banyak dipelajari', 'Token yang baru diluncurkan', 'Semua aset secara sama', 'Aset dengan kapitalisasi pasar terkecil'],
          jelas: 'Untuk aset baru, sejarahnya terlalu pendek untuk pembanding yang berarti.' },
        { tanya: 'Open interest yang naik tajam sementara harga naik pelan menandakan…',
          pilihan: ['Kenaikan sedang dibiayai pinjaman, sehingga rawan berbalik cepat', 'Pembelian dilakukan dengan uang tunai', 'Pasar sedang sangat stabil', 'Likuidasi besar sudah selesai'],
          jelas: 'Kegunaan utama metrik derivatif bukan meramal arah, melainkan menilai kerapuhan struktur posisi.' },
        { tanya: 'TVL sebuah protokol naik dua kali lipat dalam dolar, tetapi jumlah aset yang disimpan hampir tidak berubah. Penjelasan paling mungkin…',
          pilihan: ['Harga aset di dalamnya yang naik, bukan uang baru yang masuk', 'Banyak pengguna baru bergabung', 'Protokol itu menggandakan pendapatannya', 'Ada peretasan'],
          jelas: 'Lihat TVL dalam satuan aset, bukan dolar. Ini pemeriksaan tandingan paling cepat untuk lonjakan TVL.' },
        { tanya: 'Pasokan stablecoin di sebuah jaringan berguna sebagai pembanding karena…',
          pilihan: ['Nilainya tidak bisa digelembungkan oleh kenaikan harga, jadi pertumbuhannya menunjukkan uang nyata yang masuk', 'Selalu tumbuh mengikuti harga token jaringan itu', 'Dilaporkan langsung oleh pengembang jaringan', 'Tidak bisa dipindahkan antar jaringan'],
          jelas: 'Kalau TVL naik tajam sementara pasokan stablecoin diam, kemungkinan besar yang terlihat adalah pantulan harga, bukan adopsi.' },
        { tanya: 'Lonjakan jumlah alamat aktif paling mungkin dipalsukan dengan cara…',
          pilihan: ['Satu pihak membuat ribuan alamat, terutama di jaringan berbiaya rendah', 'Mengubah harga token', 'Menambah jumlah bursa yang mencatatkan token', 'Memperbesar TVL'],
          jelas: 'Satu orang bisa punya ribuan alamat. Periksa nilai transaksi rata-rata dan pola waktunya untuk melihat apakah polanya wajar.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 5 — DELAPAN SUMBER DATA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'sumber', judul: 'Delapan Sumber Data dan Cara Memakainya',
      ringkas: 'Sumber mana untuk pertanyaan mana, dan apa yang dilakukan ketika dua sumber memberi angka yang berbeda untuk hal yang sama.',
      pelajaran: [
        { judul: 'Sumber mana untuk pertanyaan mana', isi: `
<h3>Konsepnya</h3>
<p>Kesalahan umum dalam riset crypto adalah memakai satu sumber untuk semua pertanyaan, lalu menyimpulkan dari angka yang sebenarnya tidak dirancang untuk menjawabnya. Tiap layanan punya keunggulan yang berbeda, dan mengetahui pembagian tugasnya menghemat banyak waktu.</p>
<p>Delapan sumber berikut yang dipakai sebagai pemeriksaan wajib di laporan Hanif Dossier.</p>

<h3>Istilah dan alat yang dipakai</h3>
<table>
<tr><th>Sumber</th><th>Paling kuat untuk</th><th>Pertanyaan khasnya</th></tr>
<tr><td>Token Terminal</td><td>Laporan keuangan protokol</td><td>Berapa fee, revenue, dan earnings-nya? Tumbuh atau menyusut?</td></tr>
<tr><td>DefiLlama</td><td>TVL, pangsa pasar, likuiditas kolam</td><td>Seberapa besar dibanding pesaing sekategori?</td></tr>
<tr><td>Glassnode</td><td>Metrik pasokan dan umur koin</td><td>Pemegang lama sedang menyimpan atau menjual?</td></tr>
<tr><td>CryptoQuant</td><td>Arus bursa dan data penambang</td><td>Koin sedang masuk atau keluar bursa?</td></tr>
<tr><td>Coinglass</td><td>Pasar derivatif</td><td>Seberapa rapuh posisi berleverage saat ini?</td></tr>
<tr><td>CoinGecko</td><td>Harga, pasokan, sebaran volume antar bursa</td><td>Volumenya nyata atau menumpuk di satu bursa?</td></tr>
<tr><td>CoinMarketCap</td><td>Pembanding kedua untuk harga dan pasokan</td><td>Apakah angka pasokannya sama dengan sumber lain?</td></tr>
<tr><td>Messari</td><td>Profil proyek, tokenomics, jadwal unlock</td><td>Siapa memegang apa, dan kapan tokennya terbuka?</td></tr>
</table>

<h3>Langkah memakainya berurutan</h3>
<ol>
<li><b>Mulai dari CoinGecko atau CoinMarketCap</b> untuk gambaran dasar: harga, pasokan beredar, FDV, sebaran volume. Ini menyaring kandidat yang jelas bermasalah dalam dua menit.</li>
<li><b>Lanjut ke Messari</b> untuk tokenomics dan jadwal unlock. Kalau ada unlock besar dalam waktu dekat, catat sebelum melanjutkan.</li>
<li><b>Buka Token Terminal</b> untuk melihat apakah ada pemasukan nyata dan ke mana perginya.</li>
<li><b>Bandingkan di DefiLlama</b> dengan pesaing sekategori.</li>
<li><b>Periksa Glassnode dan CryptoQuant</b> untuk gambaran pemegang, terutama kalau asetnya Bitcoin atau Ethereum.</li>
<li><b>Terakhir Coinglass</b>, kalau Anda berencana masuk dalam waktu dekat dan ingin tahu seberapa rapuh posisi pasar saat ini.</li>
</ol>
<p>Urutan ini dibuat supaya kandidat yang lemah tersaring sedini mungkin, sebelum Anda menghabiskan waktu pada analisis yang rumit.</p>

<h3>Contoh</h3>
<p>Sebuah token direkomendasikan seseorang di media sosial. Pemeriksaan langkah pertama di CoinGecko menunjukkan pasokan beredarnya 6 persen dari maksimum dan 80 persen volumenya berasal dari satu bursa kecil. Riset selesai dalam dua menit, tanpa perlu membaca dokumen resminya sama sekali.</p>
<p>Token lain lolos langkah pertama. Di Messari terlihat unlock 18 persen pasokan beredar bulan depan. Itu tidak membatalkan, tetapi mengubah rencana: kalau tetap tertarik, tunggu setelah tanggal itu, atau masuk dengan porsi lebih kecil.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Sebagian fitur di layanan ini berbayar, dan cakupan versi gratisnya berubah-ubah. Cakupan tiap sumber juga tidak merata: protokol kecil dan jaringan baru sering belum terdata di Token Terminal atau Glassnode. Tidak adanya data bukan bukti bahwa proyeknya buruk, tetapi berarti Anda punya lebih sedikit dasar, dan porsi sebaiknya menyesuaikan.</div>` },

        { judul: 'Ketika dua sumber berbeda angkanya', isi: `
<h3>Konsepnya</h3>
<p>Cepat atau lambat Anda akan menemukan dua layanan yang memberi angka berbeda untuk hal yang sama: pasokan beredar, TVL, volume, bahkan harga. Ini normal dan bukan tanda salah satunya berbohong. Hampir selalu penyebabnya <b>definisi</b>, bukan kesalahan.</p>

<h3>Penyebab yang paling sering</h3>
<ul>
<li><b>Definisi berbeda.</b> Satu layanan menghitung token milik yayasan sebagai beredar, yang lain tidak.</li>
<li><b>Cakupan berbeda.</b> Satu layanan memasukkan jaringan Layer 2, yang lain hanya rantai utama.</li>
<li><b>Waktu pengambilan berbeda.</b> Angka harian dihitung pada jam berbeda, dan di pasar 24 jam itu cukup untuk membuat selisih besar.</li>
<li><b>Penyaringan berbeda.</b> Satu layanan membuang bursa yang dicurigai melakukan wash trading, yang lain memasukkannya.</li>
<li><b>Perlakuan aset berlapis.</b> Satu layanan menghitung ganda aset yang dipakai di beberapa protokol, yang lain menyaringnya.</li>
</ul>

<h3>Langkah menyelesaikannya</h3>
<ol>
<li><b>Baca metodologinya.</b> Semua layanan besar menerbitkan keterangan cara menghitung. Sepuluh menit membacanya menghemat kesalahan berulang.</li>
<li><b>Pilih satu sumber sebagai acuan tetap</b> untuk tiap jenis angka, lalu konsisten. Membandingkan dua periode dengan sumber berbeda menghasilkan kesimpulan palsu.</li>
<li><b>Kalau selisihnya besar, cari angka mentahnya di blockchain.</b> Untuk pasokan, kontrak token adalah sumber paling akhir dan paling benar.</li>
<li><b>Tulis sumber dan tanggalnya di catatan riset Anda.</b> Tanpa itu, angka yang Anda kutip tiga bulan lagi tidak bisa diperiksa ulang.</li>
</ol>

<h3>Contoh</h3>
<p>Dua layanan melaporkan pasokan beredar sebuah token: 420 juta dan 610 juta. Selisihnya 190 juta, hampir separuh. Penelusuran menunjukkan yang pertama mengecualikan token yayasan yang masih terkunci, sedangkan yang kedua memasukkannya. Keduanya tidak salah, tetapi menghasilkan market cap yang berbeda 45 persen.</p>
<p>Untuk keputusan investasi, angka yang lebih ketat biasanya lebih berguna, karena menggambarkan berapa banyak token yang benar-benar bisa dijual hari ini. Tetapi apa pun pilihannya, catat mana yang Anda pakai, dan pakai yang sama setiap kali Anda meninjau ulang aset itu.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Semua layanan ini bisa salah, dan sebagian data untuk proyek kecil dikirim sendiri oleh tim proyeknya. Untuk angka yang menentukan keputusan besar, periksa langsung ke blockchain atau ke kontraknya. Perlu diingat juga bahwa halaman ini menyebut nama layanan sebagai alat kerja, bukan sebagai dukungan atau rekomendasi terhadap layanan itu.</div>` },
      ],
      kuis: [
        { tanya: 'Sumber yang paling kuat untuk melihat fee, revenue, dan earnings sebuah protokol adalah…',
          pilihan: ['Token Terminal', 'Coinglass', 'Glassnode', 'CoinMarketCap'],
          jelas: 'Token Terminal menyusun angka protokol seperti laporan keuangan, lengkap dengan riwayat harian.' },
        { tanya: 'Untuk mengetahui seberapa rapuh posisi berleverage di pasar saat ini, sumber yang dipakai adalah…',
          pilihan: ['Coinglass', 'DefiLlama', 'Messari', 'CoinGecko'],
          jelas: 'Coinglass paling lengkap untuk open interest, funding rate, dan peta likuidasi.' },
        { tanya: 'Kenapa riset dimulai dari CoinGecko atau CoinMarketCap?',
          pilihan: ['Karena pasokan, FDV, dan sebaran volume bisa menyaring kandidat bermasalah dalam dua menit', 'Karena datanya paling akurat di antara semua sumber', 'Karena keduanya gratis sepenuhnya', 'Karena keduanya memuat jadwal unlock terlengkap'],
          jelas: 'Urutannya dibuat supaya kandidat lemah tersaring sedini mungkin, sebelum waktu habis untuk analisis rumit.' },
        { tanya: 'Dua layanan memberi angka pasokan beredar yang berbeda jauh. Penyebab paling mungkin…',
          pilihan: ['Definisi yang berbeda, misalnya apakah token yayasan yang terkunci ikut dihitung', 'Salah satunya sengaja berbohong', 'Salah satu datanya belum diperbarui sejak peluncuran', 'Blockchain-nya mengalami gangguan'],
          jelas: 'Hampir selalu penyebabnya definisi, bukan kesalahan. Keduanya bisa sama-sama benar menurut ukurannya sendiri.' },
        { tanya: 'Aturan yang penting saat membandingkan dua periode adalah…',
          pilihan: ['Pakai sumber yang sama untuk keduanya, karena sumber berbeda menghasilkan kesimpulan palsu', 'Pakai sumber yang angkanya paling besar', 'Rata-ratakan angka dari semua sumber', 'Pakai sumber yang paling baru diluncurkan'],
          jelas: 'Pilih satu acuan tetap untuk tiap jenis angka lalu konsisten, dan catat sumber beserta tanggalnya.' },
        { tanya: 'Sebuah protokol kecil belum terdata di Token Terminal maupun Glassnode. Artinya…',
          pilihan: ['Anda punya lebih sedikit dasar untuk menilai, jadi porsinya sebaiknya menyesuaikan', 'Proyek itu pasti buruk', 'Proyek itu pasti masih murah', 'Datanya bisa diambil dari media sosial proyek tersebut'],
          jelas: 'Tidak adanya data bukan bukti kualitas, tetapi mengurangi dasar penilaian. Risiko yang lebih besar dijawab dengan porsi yang lebih kecil.' },
      ] },
  ],
});
