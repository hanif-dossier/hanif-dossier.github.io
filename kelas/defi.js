// kelas/defi.js — data kelas kategori DeFi & Aplikasi Terdesentralisasi. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'defi', urut: 5, nama: 'DeFi & Aplikasi Terdesentralisasi', warna: '#8a6fb0',
  ringkas: 'Cara kerja stablecoin, DEX, lending, liquid staking, oracle, bridge, dan DAO: mesin keuangan yang berjalan tanpa bank, lengkap dengan risikonya.',
  kursus: [

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'stablecoin', judul: 'Stablecoin',
      ringkas: 'Tiga cara membuat token bernilai satu dolar dan bagaimana patokannya dijaga. Anda juga belajar kapan patokan itu bisa lepas dan dari mana penerbitnya mendapat untung.',
      pelajaran: [
        { judul: 'Tiga jenis stablecoin dan cara menjaga patokannya', isi: `
<h3>Konsepnya</h3>
<p>Stablecoin adalah token yang dirancang agar harganya tetap dekat dengan satu aset acuan, hampir selalu 1 dolar AS. Gunanya sederhana. Harga di dunia crypto bisa naik-turun puluhan persen, jadi orang butuh satuan hitung yang tenang untuk menyimpan nilai, membayar, dan menjadi pasangan dagang di bursa.</p>
<p>Janji "1 token = 1 dolar" hanya berarti sesuatu kalau ada yang menopangnya. Pertanyaan terpenting tentang stablecoin mana pun selalu sama: <b>kalau semua orang ingin keluar sekaligus, apa yang menjamin mereka mendapat 1 dolar?</b> Jawabannya membagi stablecoin menjadi tiga jenis.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Berjamin fiat.</b> Perusahaan penerbit menyimpan cadangan berupa kas dan surat utang pemerintah AS jangka pendek. Setiap token yang beredar diklaim didukung satu dolar cadangan. Contohnya USDT dari Tether (2014) dan USDC dari Circle (2018). Kepercayaannya bertumpu pada perusahaan, bank penyimpan, dan akuntan pemeriksanya.</li>
<li><b>Berjamin crypto, overcollateralized.</b> Pengguna mengunci aset crypto yang nilainya lebih besar dari stablecoin yang ia cetak. Overcollateralized artinya jaminannya berlebih, misalnya ETH senilai $150 untuk mencetak 100 DAI. Kelebihan itu menjadi bantalan kalau harga ETH turun. Kalau bantalannya menipis, protokol menjual jaminan (likuidasi) sebelum nilainya lebih kecil dari utang. Contoh utamanya DAI dari MakerDAO (2017). Sejak 2024 proyek ini berganti nama menjadi Sky dan menerbitkan USDS sebagai penerus DAI. Belakangan porsi besar jaminannya berupa USDC dan obligasi pemerintah AS yang ditokenisasi, jadi tidak lagi murni crypto.</li>
<li><b>Algoritmik dan sintetis.</b> Tidak ada cadangan dolar penuh. Stablecoin algoritmik menjaga patokan dengan mencetak dan membakar token pasangannya. Contoh paling terkenal adalah UST dari Terra, yang dirancang agar bisa ditukar dengan LUNA senilai 1 dolar (dengan batas jumlah penukaran per hari). Mekanisme ini bekerja selama orang mau memegang LUNA. Pada Mei 2022 penarikan besar membuat UST lepas patokan. LUNA dicetak dalam jumlah raksasa untuk menebusnya, harganya runtuh, dan UST ikut hancur. Versi sintetis yang lebih baru, USDe dari Ethena, memegang aset crypto seperti ETH sambil membuka posisi short perpetual dengan ukuran sama. Naik-turun harga ETH saling meniadakan (delta-netral), sehingga nilai total posisi tetap sekitar 1 dolar.</li>
</ol>
<p>Ketiganya menjaga patokan dengan mesin yang sama: <b>mint/redeem dan arbitrase</b>. Pihak yang berhak bisa mencetak (mint) token baru dengan menyerahkan aset senilai 1 dolar (dolar tunai, stablecoin lain, jaminan crypto, atau untuk UST: LUNA), dan menebus (redeem) token menjadi aset senilai 1 dolar. Saat harga pasar menyimpang, selisihnya menjadi peluang untung. Para pemburu untung itulah yang mendorong harga kembali ke patokan.</p>

<h3>Contoh</h3>
<pre>
Harga USDC di bursa turun ke $0,99.
  Beli 100.000 USDC di bursa    = $99.000
  Tebus ke penerbit             = $100.000
  Untung kotor                  = $1.000
  Pembelian ini mendorong harga kembali ke dekat $1.

Harga USDC naik ke $1,01.
  Setor $100.000, mint 100.000 USDC
  Jual di bursa                 = $101.000
  Penjualan ini menekan harga kembali ke $1.
</pre>
<p>Mekanisme ini hanya sekuat jaminan di belakangnya. Arbitrase UST berjalan lancar selama LUNA bernilai. Begitu LUNA anjlok, janji "1 dolar dalam bentuk LUNA" tidak lagi berarti apa-apa.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Hak mint dan redeem langsung biasanya hanya untuk nasabah besar yang lolos verifikasi, jadi pengguna biasa bergantung pada harga bursa. Stablecoin berjamin fiat membawa risiko perusahaan dan bank. Stablecoin berjamin crypto membawa risiko likuidasi saat pasar jatuh cepat. USDe bisa tertekan kalau funding rate lama negatif atau bursa tempat posisi short dibuka bermasalah. "Stabil" berarti dirancang stabil, bukan dijamin stabil.</div>` },

        { judul: 'Risiko dan bisnis stablecoin', isi: `
<h3>Konsepnya</h3>
<p>Stablecoin berjamin fiat pada dasarnya mirip rekening titipan. Anda menyerahkan dolar, penerbit memberi token, dan penerbit memegang uangnya. Risikonya pun mirip risiko menitip uang: apakah cadangannya benar ada, apakah mudah dicairkan, dan apakah tempat penyimpanannya aman. Di situ pula letak bisnisnya. Cadangan itu menghasilkan bunga, dan bunganya menjadi milik penerbit.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>Depeg.</b> Depeg adalah saat harga stablecoin lepas dari patokannya. Contoh paling jelas terjadi pada Maret 2023, ketika Silicon Valley Bank (SVB) ditutup. Circle mengumumkan sekitar $3,3 miliar cadangan USDC tertahan di bank itu. Selama akhir pekan, USDC sempat diperdagangkan sekitar $0,88. Harganya pulih setelah regulator AS menjamin seluruh simpanan SVB. DAI ikut goyah karena sebagian jaminannya adalah USDC. Risiko menular lewat jaminan.</li>
<li><b>Cadangan dan atestasi.</b> Penerbit menerbitkan laporan cadangan, kebanyakan berupa <i>atestasi</i>: akuntan memeriksa isi cadangan pada satu tanggal tertentu. Atestasi lebih ringan dari <i>audit</i> penuh, yang memeriksa laporan keuangan dan pengendalian perusahaan. Ada riwayat yang perlu diingat. Pada 2021 regulator komoditas AS (CFTC) mendenda Tether $41 juta karena klaim bahwa USDT selalu didukung penuh ternyata tidak benar untuk periode 2016–2019.</li>
<li><b>Model bisnis.</b> Cadangan ditaruh di T-bills, surat utang pemerintah AS jangka pendek yang berbunga. Pemegang token tidak menerima bunga itu; penerbit yang menerimanya. Tether melaporkan laba sekitar $13 miliar untuk tahun 2024. Circle, yang melantai di bursa saham New York pada Juni 2025, menurut dokumen IPO-nya menyerahkan lebih dari separuh pendapatan 2024 kepada mitra distribusi, terutama Coinbase.</li>
<li><b>Regulasi.</b> Di Uni Eropa, aturan MiCA untuk stablecoin berlaku sejak Juni 2024. Penerbit wajib berlisensi dan cadangan dijaga ketat. Akibatnya bursa besar menghentikan USDT untuk pengguna Eropa, sementara USDC memenuhi syarat. Di AS, GENIUS Act ditandatangani pada Juli 2025. Stablecoin pembayaran wajib didukung 1:1 oleh aset likuid seperti kas dan T-bills jangka pendek. Penerbit wajib berlisensi, mengumumkan komposisi cadangan setiap bulan, dan dilarang membayar bunga langsung kepada pemegang.</li>
</ul>

<h3>Contoh</h3>
<pre>
Stablecoin beredar            : $100 miliar
Cadangan di T-bills           : $100 miliar
Bunga T-bills (misalnya)      : 4% per tahun
Pendapatan bunga penerbit     : $4 miliar per tahun
Bunga yang diterima pemegang  : $0

Kalau suku bunga AS turun ke 2%:
Pendapatan bunga penerbit     : $2 miliar per tahun
</pre>
<p>Hitungan ini menjelaskan dua hal. Pertama, bisnis stablecoin sangat menguntungkan saat suku bunga tinggi. Kedua, pendapatannya bergantung pada dua hal: suku bunga yang ditetapkan bank sentral AS dan jumlah token beredar, yang ikut naik-turun bersama permintaan pasar crypto. Karena bunga itu besar, banyak ekosistem kini ingin menerbitkan stablecoin sendiri agar hasilnya kembali ke komunitasnya, bukan mengalir ke penerbit luar.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Penerbit stablecoin berjamin fiat bisa membekukan token di alamat tertentu, biasanya atas permintaan penegak hukum. Fitur ini melindungi dari pencurian, tetapi juga berarti token itu tidak sepenuhnya di bawah kendali Anda. Laporan cadangan hanya potret satu hari. Pelaksanaan penuh GENIUS Act berjalan bertahap dan bergantung pada aturan turunan dari regulator. Angka laba dan suku bunga di atas berlaku untuk periode yang disebut dan akan berubah.</div>` },
      ],
      kuis: [
        { tanya: 'USDC diperdagangkan di $0,98. Seorang pelaku arbitrase yang punya hak redeem membeli 50.000 USDC di bursa lalu menebusnya ke penerbit. Berapa untung kotornya?',
          pilihan: ['$1.000', '$980', '$49.000', '$2.000'],
          jelas: 'Ia membayar 50.000 × $0,98 = $49.000 dan menerima $50.000 saat menebus, jadi untung kotornya $1.000 sebelum biaya. Pembelian besar seperti ini ikut mendorong harga kembali ke $1.' },
        { tanya: 'DAI (kini diteruskan oleh USDS) termasuk jenis stablecoin apa?',
          pilihan: ['Berjamin crypto dengan jaminan berlebih (overcollateralized)', 'Berjamin kas yang disimpan di satu bank', 'Algoritmik murni tanpa jaminan apa pun', 'Dijamin langsung oleh pemerintah AS'],
          jelas: 'Pengguna mengunci jaminan yang nilainya lebih besar dari DAI yang dicetak. Kalau jaminan menipis, protokol melikuidasinya. Belakangan porsi besar jaminannya berupa USDC dan obligasi yang ditokenisasi.' },
        { tanya: 'USDe dari Ethena menjaga nilainya dekat 1 dolar dengan cara…',
          pilihan: ['Memegang aset crypto sekaligus membuka short perpetual berukuran sama, sehingga perubahan harga saling meniadakan', 'Menyimpan dolar tunai di bank sebesar jumlah token yang beredar', 'Mencetak token pasangan setiap kali harganya turun, seperti UST dan LUNA', 'Meminta pemerintah AS menjamin setiap token'],
          jelas: 'Posisi delta-netral: kenaikan nilai ETH diimbangi kerugian posisi short, dan sebaliknya. Risikonya berbeda dari stablecoin berjamin kas, misalnya funding rate yang lama negatif.' },
        { tanya: 'Kenapa USDC sempat turun ke sekitar $0,88 pada Maret 2023?',
          pilihan: ['Sekitar $3,3 miliar cadangannya tertahan di Silicon Valley Bank yang ditutup', 'Kontrak USDC diretas dan token dicetak tanpa jaminan', 'Circle menghentikan penebusan secara permanen', 'USDC dilarang di Uni Eropa'],
          jelas: 'Harga pulih setelah regulator AS menjamin seluruh simpanan SVB. Pelajarannya: stablecoin berjamin kas tetap bergantung pada bank tempat kasnya disimpan.' },
        { tanya: 'Sebuah stablecoin beredar $50 miliar dengan seluruh cadangan di T-bills berbunga 4% per tahun. Berapa kira-kira pendapatan bunga penerbit per tahun?',
          pilihan: ['$2 miliar', '$200 juta', '$20 miliar', '$0, karena bunganya milik pemegang token'],
          jelas: '$50 miliar × 4% = $2 miliar. Pemegang token biasanya tidak menerima bunga itu, dan GENIUS Act melarang penerbit stablecoin pembayaran membayar bunga langsung kepada pemegang.' },
        { tanya: 'Menurut GENIUS Act (AS, 2025), penerbit stablecoin pembayaran…',
          pilihan: ['Wajib memegang cadangan likuid 1:1 dan dilarang membayar bunga langsung kepada pemegang', 'Boleh menaruh cadangan di saham perusahaan teknologi', 'Wajib membayar bunga minimal 4% kepada pemegang', 'Tidak perlu mengumumkan komposisi cadangannya'],
          jelas: 'Cadangan harus berupa aset likuid seperti kas dan T-bills jangka pendek, dan komposisinya diumumkan setiap bulan. Di Uni Eropa, aturan serupa datang lewat MiCA sejak Juni 2024.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'dex', judul: 'DeFi: DEX',
      ringkas: 'Bagaimana bursa tanpa perantara menentukan harga dan kenapa order besar jadi mahal. Anda juga menghitung apa yang sebenarnya dipertaruhkan penyedia likuiditas.',
      pelajaran: [
        { judul: 'Order book, AMM, dan rumus x · y = k', isi: `
<h3>Konsepnya</h3>
<p>DEX (decentralized exchange) adalah bursa yang berjalan sebagai smart contract. Anda menukar token langsung dari dompet sendiri, tanpa perusahaan yang memegang dana Anda. Tanpa perusahaan, siapa yang menentukan harga, dan siapa lawan transaksi Anda?</p>
<p>Ada dua jawaban. <b>Order book</b> adalah cara bursa tradisional. Pembeli memasang harga beli, penjual memasang harga jual, dan mesin mencocokkan keduanya. Cara ini butuh market maker yang terus memperbarui pesanan. Di blockchain yang lambat dan berbiaya gas, setiap pembaruan pesanan memakan biaya. Karena itu order book on-chain baru praktis di chain yang sangat cepat, misalnya Hyperliquid. <b>AMM</b> (automated market maker) mengganti market maker dengan rumus. Orang menyetor dua token ke sebuah <i>pool</i>, dan harga ditentukan oleh perbandingan jumlah kedua token di pool itu.</p>

<h3>Cara kerjanya</h3>
<p>AMM paling sederhana, yang dipopulerkan Uniswap sejak 2018, memakai rumus <b>x · y = k</b>. x adalah jumlah token A di pool, y jumlah token B, dan k hasil kali keduanya. Nilai k harus tetap sama setelah setiap swap (di luar fee). Kalau Anda mengambil sebagian token A, Anda harus memasukkan cukup token B supaya hasil kalinya tetap k. Harga saat ini adalah y ÷ x.</p>
<p>Akibat penting rumus ini: makin besar porsi pool yang Anda ambil, makin mahal harga rata-rata Anda. Kenaikan harga akibat order Anda sendiri disebut <b>price impact</b>. <b>Slippage</b> adalah selisih antara harga yang Anda lihat saat menekan tombol dan harga yang benar-benar Anda dapat. Slippage mencakup price impact ditambah pergerakan harga dari transaksi orang lain yang masuk lebih dulu. Di aplikasi DEX Anda mengatur <i>toleransi slippage</i>, yaitu batas terburuk yang masih Anda terima. Lewat dari batas itu, transaksi dibatalkan.</p>

<h3>Contoh</h3>
<pre>
Pool: 100 ETH dan 300.000 USDC
k = 100 × 300.000 = 30.000.000
Harga awal = 300.000 ÷ 100 = 3.000 USDC per ETH

Order kecil: Anda masukkan 3.000 USDC
  USDC di pool = 303.000
  ETH di pool  = 30.000.000 ÷ 303.000 = 99,01
  ETH diterima = 0,99 → rata-rata ±3.030 (lebih mahal ±1%)

Order besar: Anda masukkan 30.000 USDC
  USDC di pool = 330.000
  ETH di pool  = 30.000.000 ÷ 330.000 = 90,91
  ETH diterima = 9,09 → rata-rata ±3.300 (lebih mahal ±10%)
  Harga pool sesudahnya = 330.000 ÷ 90,91 = ±3.630

(fee swap diabaikan agar sederhana)
</pre>
<p>Order sebesar sepersepuluh sisi USDC di pool membuat Anda membayar sekitar 10% di atas harga awal. Aturan kasarnya, price impact kira-kira sebanding dengan ukuran order dibanding kedalaman pool. Harga pool yang kini 3.630 juga lebih tinggi dari harga di bursa lain. Arbitrase akan menjual ETH ke pool itu sampai harganya kembali selaras.</p>
<p>Likuiditas tersebar di banyak pool dan banyak DEX, maka muncul <b>agregator</b> seperti 1inch, CoW Swap, dan Jupiter di Solana. Agregator memecah order Anda ke beberapa rute sekaligus, sehingga price impact di tiap pool lebih kecil.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Di DEX siapa pun bisa membuat pool untuk token apa pun, termasuk token palsu dengan nama mirip. Periksa alamat kontraknya. Pool yang tipis membuat order kecil pun menggeser harga tajam. Toleransi slippage yang terlalu longgar mengundang bot yang menyelipkan transaksi di depan Anda (dibahas di pelajaran berikutnya). Rumus x · y = k hanya satu desain; DEX lain memakai kurva berbeda, misalnya untuk pasangan sesama stablecoin.</div>` },

        { judul: 'Menjadi penyedia likuiditas: fee, impermanent loss, dan MEV', isi: `
<h3>Konsepnya</h3>
<p>Pool AMM diisi oleh penyedia likuiditas (<i>liquidity provider</i>, LP). LP menyetor dua token dengan nilai seimbang dan mendapat bagian dari fee setiap swap, misalnya 0,3% dari nilai transaksi. Sebagai gantinya, LP menjadi lawan transaksi semua trader. Saat orang memborong ETH, pool kehilangan ETH dan menerima USDC. Isi posisi LP terus bergeser mengikuti harga, dan pergeseran itulah sumber risikonya.</p>

<h3>Cara kerjanya</h3>
<p><b>Impermanent loss</b> adalah selisih nilai antara menyetor ke pool dan sekadar memegang kedua token. Saat harga ETH naik, pool menjual ETH milik LP sedikit demi sedikit kepada pembeli. LP berakhir dengan lebih sedikit ETH tepat saat ETH makin mahal. Saat harga turun, terjadi sebaliknya: LP menampung lebih banyak ETH yang makin murah. Disebut "impermanent" karena selisih itu hilang kalau harga kembali ke titik awal. Begitu LP menarik dana di harga yang berbeda, kerugiannya menjadi nyata.</p>
<p><b>Concentrated liquidity</b> (Uniswap v3, 2021) membolehkan LP memilih rentang harga, misalnya ETH 2.800–3.200. Modal yang sama menghasilkan fee jauh lebih banyak selama harga berada di dalam rentang. Tetapi impermanent loss di dalam rentang juga ikut membesar. Kalau harga keluar rentang, posisi berubah menjadi 100% satu token dan berhenti menerima fee. Dalam praktik, LP v3 adalah pengelola posisi aktif, bukan penabung pasif.</p>

<h3>Contoh</h3>
<pre>
Setor: 1 ETH + 3.000 USDC saat ETH = 3.000   (total $6.000)
Harga ETH naik menjadi 6.000 (2 kali lipat)

Isi posisi LP sekarang (mengikuti x · y = k):
  ETH   = 0,707
  USDC  = 4.243
  Nilai = 0,707 × 6.000 + 4.243 = ±$8.485

Kalau hanya dipegang:
  1 × 6.000 + 3.000 = $9.000

Impermanent loss = 9.000 − 8.485 = ±$515 (±5,7%)

Patokan: harga 2× → ±5,7%   harga 4× → ±20%
         harga turun separuh → juga ±5,7%
</pre>
<p>LP untung dibanding memegang kalau fee yang terkumpul lebih besar dari angka itu. Pool dengan volume tinggi dan harga yang bergerak menyamping cocok untuk LP. Pool token yang melonjak atau ambruk biasanya tidak.</p>
<p>Ada lawan tersembunyi lain, yaitu <b>MEV</b> (maximal extractable value): keuntungan yang bisa diambil pihak yang mengatur urutan transaksi dalam blok. Bentuk yang paling merugikan trader adalah <b>sandwich</b>. Bot melihat swap Anda di antrean publik (mempool) dan membeli tepat sebelum Anda. Anda lalu membeli di harga yang sudah dinaikkan hingga batas toleransi slippage Anda, dan bot menjual tepat sesudahnya. Pertahanannya: toleransi slippage yang ketat, RPC privat yang tidak menyiarkan transaksi ke mempool publik, atau DEX berbasis lelang seperti CoW Swap. LP sendiri juga dirugikan oleh arbitrase yang memanfaatkan harga pool yang tertinggal dari harga bursa besar.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> APR pool yang ditampilkan biasanya menghitung fee masa lalu dan belum dikurangi impermanent loss. Sebagian APR tinggi berasal dari emisi token insentif yang nilainya bisa turun. LP juga menanggung risiko kontrak pool diretas dan salah satu token kehilangan nilai. Angka impermanent loss di atas berlaku untuk pool 50:50 dengan rumus x · y = k. Di posisi rentang terkonsentrasi, angkanya bisa jauh lebih besar.</div>` },
      ],
      kuis: [
        { tanya: 'Pool berisi 10 ETH dan 20.000 USDC dengan rumus x · y = k. Anda memasukkan 5.000 USDC (abaikan fee). Berapa ETH yang Anda terima?',
          pilihan: ['2 ETH', '2,5 ETH', '5 ETH', '1,5 ETH'],
          jelas: 'k = 10 × 20.000 = 200.000. USDC di pool menjadi 25.000, jadi ETH tersisa 200.000 ÷ 25.000 = 8. Anda menerima 2 ETH, rata-rata 2.500 USDC per ETH padahal harga awalnya 2.000.' },
        { tanya: 'Apa beda price impact dan slippage?',
          pilihan: ['Price impact adalah pergeseran harga akibat order Anda sendiri; slippage adalah selisih total antara harga yang dilihat dan harga yang didapat, termasuk dampak transaksi orang lain', 'Keduanya nama lain untuk fee swap', 'Price impact hanya ada di bursa terpusat', 'Slippage hanya terjadi kalau jaringan sedang macet'],
          jelas: 'Price impact bisa dihitung sebelum transaksi dari kedalaman pool. Slippage baru diketahui setelah eksekusi, dan toleransi slippage membatasi seberapa buruk yang masih Anda terima.' },
        { tanya: 'Kenapa DEX generasi awal di Ethereum memakai AMM, bukan order book?',
          pilihan: ['Setiap pemasangan dan pembaruan pesanan on-chain memakan gas, sedangkan AMM cukup memakai pool dan rumus', 'Order book dilarang di blockchain', 'AMM selalu memberi harga lebih baik untuk semua ukuran order', 'Ethereum tidak bisa menyimpan angka harga'],
          jelas: 'Market maker di order book memperbarui pesanan terus-menerus. Di chain lambat dan mahal, itu tidak praktis. Order book on-chain baru masuk akal di chain yang sangat cepat.' },
        { tanya: 'Anda menjadi LP 50:50 di pool x · y = k. Harga salah satu token naik 4 kali lipat dibanding saat Anda menyetor. Kira-kira berapa impermanent loss dibanding sekadar memegang?',
          pilihan: ['±20%', '±5,7%', '±75%', '0%, karena fee menutup semuanya'],
          jelas: 'Rumusnya 2√r ÷ (1 + r) − 1. Untuk r = 4: 2 × 2 ÷ 5 − 1 = −20%. Fee bisa menutup sebagian atau seluruhnya, tetapi tidak otomatis.' },
        { tanya: 'Posisi Anda di Uniswap v3 punya rentang ETH 2.800–3.200. Harga ETH naik ke 3.500. Apa yang terjadi?',
          pilihan: ['Posisi berubah menjadi seluruhnya USDC dan berhenti menerima fee sampai harga kembali ke rentang', 'Posisi otomatis pindah ke rentang baru', 'Anda menerima fee dua kali lipat', 'Posisi Anda dilikuidasi dan hilang'],
          jelas: 'Saat harga naik melewati rentang, seluruh ETH di posisi Anda sudah terjual ke pembeli. Anda memegang 100% USDC dan tidak mendapat fee sampai Anda memindahkan rentang atau harga kembali.' },
        { tanya: 'Cara paling masuk akal mengurangi risiko terkena sandwich attack adalah…',
          pilihan: ['Memperketat toleransi slippage dan memakai RPC privat atau DEX berbasis lelang', 'Menaikkan toleransi slippage ke 20% agar transaksi pasti lolos', 'Selalu bertransaksi dalam jumlah sebesar mungkin', 'Membagikan transaksi Anda di media sosial lebih dulu'],
          jelas: 'Bot sandwich mengambil selisih sampai batas slippage yang Anda izinkan. Makin sempit batasnya dan makin tersembunyi transaksi Anda dari mempool publik, makin sedikit ruang bagi bot.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'lending', judul: 'DeFi: Lending & Borrowing',
      ringkas: 'Cara protokol meminjamkan uang tanpa mengenal peminjamnya: bunga yang bergerak sendiri, jaminan berlebih, health factor, dan likuidasi. Anda menghitung sendiri kapan sebuah posisi terlikuidasi.',
      pelajaran: [
        { judul: 'Pool pinjaman, suku bunga, dan health factor', isi: `
<h3>Konsepnya</h3>
<p>Protokol lending seperti Aave dan Compound adalah pasar uang yang dijalankan smart contract. Penyetor menaruh aset ke sebuah pool dan menerima bunga. Peminjam mengambil dari pool yang sama dengan menyerahkan jaminan. Tidak ada pencocokan satu lawan satu, tidak ada pemeriksaan identitas, dan tidak ada penagih utang. Protokol tidak tahu siapa Anda dan tidak bisa menagih kalau Anda menghilang. Karena itu pengaman utamanya adalah jaminan yang nilainya lebih besar dari pinjaman, disebut <b>overcollateralization</b>.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>Utilisasi.</b> Utilisasi adalah porsi dana pool yang sedang dipinjam. Suku bunga ditentukan rumus berdasarkan utilisasi, bukan oleh manusia. Di bawah titik tertentu (misalnya 80–90%), bunga naik pelan. Di atasnya, bunga naik tajam. Tujuannya menjaga agar selalu ada dana tersisa untuk penyetor yang ingin menarik. Bunga tinggi mengundang penyetor baru dan mendorong peminjam melunasi.</li>
<li><b>Tanda bukti setoran.</b> Di Aave, penyetor menerima <i>aToken</i> (misalnya aUSDC) yang jumlahnya terus bertambah mengikuti bunga. Di Compound versi 2, penyetor menerima <i>cToken</i> yang jumlahnya tetap, tetapi nilai tukarnya terhadap aset asal naik. Hasil ekonominya sama, hanya cara mencatatnya berbeda. Di Aave, utang peminjam juga dicatat lewat token utang; Compound versi 2 mencatatnya di dalam kontrak cToken.</li>
<li><b>LTV dan ambang likuidasi.</b> LTV (loan-to-value) maksimum adalah batas pinjaman terhadap nilai jaminan saat meminjam, misalnya 80%. Ambang likuidasi sedikit di atasnya, misalnya 82,5%. Setiap aset punya angka sendiri, dan angkanya diatur lewat governance protokol.</li>
<li><b>Health factor.</b> Health factor = (nilai jaminan × ambang likuidasi) ÷ utang. Di atas 1 berarti aman. Di bawah 1, posisi boleh dilikuidasi.</li>
</ul>

<h3>Contoh</h3>
<pre>
Bunga untuk penyetor:
  Pool USDC: disetor 100 juta, dipinjam 80 juta → utilisasi 80%
  Bunga pinjam 5% → peminjam membayar 4 juta per tahun
  Reserve factor 10% → 0,4 juta masuk kas protokol
  Sisa 3,6 juta ke penyetor → bunga setor 3,6%

Health factor (angka ilustrasi):
  Jaminan 10 ETH × $3.000 = $30.000, ambang likuidasi 82,5%
  Pinjam $15.000 USDC
  HF = 30.000 × 0,825 ÷ 15.000 = 1,65
  Likuidasi saat 10 × harga × 0,825 = 15.000
  → harga ETH ±$1.818 (turun ±39%)

  Kalau meminjam maksimal $24.000 (LTV 80%):
  HF = 24.750 ÷ 24.000 = 1,03
  → ETH turun ±3% saja sudah cukup untuk likuidasi
</pre>
<p>Perhatikan kenapa bunga setor selalu lebih kecil dari bunga pinjam. Tidak semua dana sedang dipinjam, dan protokol mengambil bagiannya. Perhatikan juga bahwa "boleh meminjam 80%" tidak sama dengan "aman meminjam 80%". Batas maksimum hampir tidak menyisakan ruang untuk gejolak harga crypto, yang tidak jarang bergerak 5–10% dalam sehari.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Bunga pinjam bisa melonjak tanpa pemberitahuan saat utilisasi mendekati 100%. Pada saat itu penyetor mungkin tidak dapat menarik dananya sampai ada pelunasan atau setoran baru. Parameter LTV dan ambang likuidasi berbeda per aset dan per chain, dan bisa diubah lewat governance. Angka di atas hanya ilustrasi; periksa angka asli di antarmuka protokol sebelum meminjam.</div>` },

        { judul: 'Likuidasi, oracle, flash loan, dan jebakan looping', isi: `
<h3>Konsepnya</h3>
<p>Tidak ada penagih utang di protokol lending, jadi penegakannya diserahkan kepada pasar. Saat health factor jatuh di bawah 1, siapa pun boleh melunasi sebagian utang peminjam. Sebagai imbalan, ia mengambil jaminan peminjam dengan potongan harga. Pelakunya kebanyakan bot yang disebut <i>liquidator</i>. Sistem ini hanya bekerja kalau dua hal terpenuhi: protokol tahu harga yang benar, dan jaminan bisa dijual cukup cepat.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>Oracle harga.</b> Smart contract tidak bisa melihat harga di bursa terpusat atau di chain lain, dan harga satu pool DEX di chain yang sama mudah digeser. Harga dibawa masuk oleh oracle, misalnya Chainlink. Kalau oracle keliru atau bisa dimanipulasi, protokol akan melikuidasi orang yang sebenarnya aman, atau membiarkan orang meminjam melebihi nilai jaminannya.</li>
<li><b>Flash loan.</b> Pinjaman tanpa jaminan yang harus dilunasi dalam transaksi yang sama. Kalau tidak lunas di akhir transaksi, seluruh transaksi dibatalkan seolah tidak pernah terjadi, jadi pemberi pinjaman tidak menanggung risiko gagal bayar. Kegunaannya sah: arbitrase, likuidasi, dan menukar jaminan. Tetapi flash loan juga memberi siapa pun modal raksasa selama satu transaksi, cukup untuk mengguncang harga di pool tipis yang dipakai sebagai oracle.</li>
<li><b>Bad debt.</b> Kalau harga jatuh terlalu cepat atau jaminan terlalu sulit dijual, likuidasi datang terlambat. Nilai jaminan sudah lebih kecil dari utang, dan selisihnya menjadi utang macet yang ditanggung protokol atau penyetor. Contohnya pada November 2022: upaya short besar-besaran atas token CRV meninggalkan sekitar $1,6 juta bad debt di Aave.</li>
<li><b>Looping.</b> Setor aset, pinjam, beli aset yang sama, lalu setor lagi, berulang-ulang. Hasilnya posisi berleverage. Versi yang populer: setor token staking ETH, pinjam ETH, stake lagi, dengan harapan imbal hasil staking lebih besar dari bunga pinjam.</li>
</ul>

<h3>Contoh</h3>
<pre>
Likuidasi (lanjutan pelajaran 1):
  Jaminan 10 ETH, utang $15.000, ETH jatuh ke $1.800
  HF = 18.000 × 0,825 ÷ 15.000 = 0,99 → boleh dilikuidasi
  Liquidator melunasi $7.500 dan mengambil ETH senilai
  $7.500 + bonus 5% = $7.875 (4,375 ETH)
  Sisa: 5,625 ETH ($10.125), utang $7.500, HF ±1,11
  Biaya bagi peminjam: bonus $375 yang hilang

Looping (ilustrasi, leverage 5×):
  Modal 10 ETH → posisi 50 ETH, utang 40 ETH
  Imbal staking 3%, bunga pinjam 2,5%
  Hasil = 50 × 3% − 40 × 2,5% = 1,5 − 1,0 = 0,5 ETH per tahun
        = 5% dari modal
  Kalau bunga pinjam naik ke 4%:
  Hasil = 1,5 − 1,6 = −0,1 ETH (rugi 1% per tahun)
</pre>
<p>Looping melipatgandakan selisih bunga, dan selisih itu bisa berbalik arah. Bahayanya bukan hanya bunga. Kalau token staking yang dijaminkan diperdagangkan sedikit di bawah nilai wajarnya, posisi berleverage tinggi bisa langsung terlikuidasi walaupun harga ETH sendiri tidak berubah.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Jarak dari health factor 1,1 ke likuidasi hanya sekitar 9% penurunan nilai jaminan. Saat pasar jatuh serentak, biaya gas naik dan likuidasi menumpuk, sehingga harga jaminan makin tertekan. Besar bonus likuidasi dan porsi utang yang boleh dilunasi sekaligus berbeda di tiap protokol dan aset. Kontrak lending juga bisa diretas; audit mengurangi risiko itu, tetapi tidak menghapusnya.</div>` },
      ],
      kuis: [
        { tanya: 'Jaminan Anda bernilai $20.000 dengan ambang likuidasi 80%, dan utang Anda $10.000. Berapa health factor-nya?',
          pilihan: ['1,6', '2,0', '0,5', '0,8'],
          jelas: 'Health factor = 20.000 × 0,80 ÷ 10.000 = 1,6. Posisi aman selama angka ini di atas 1; nilai jaminan harus turun 37,5% untuk menyentuh likuidasi.' },
        { tanya: 'Utilisasi sebuah pool USDC naik dari 70% ke 97%. Apa yang biasanya terjadi pada suku bunga?',
          pilihan: ['Bunga naik tajam untuk menarik setoran baru dan mendorong peminjam melunasi', 'Bunga turun karena pool sedang ramai', 'Bunga dibekukan sampai governance memutuskan', 'Tidak ada perubahan karena bunga ditetapkan manusia setiap bulan'],
          jelas: 'Di atas titik utilisasi tertentu, kurva bunga menanjak curam. Tujuannya menjaga agar selalu ada dana tersisa untuk penyetor yang ingin menarik.' },
        { tanya: 'Apa beda aToken di Aave dan cToken di Compound versi 2?',
          pilihan: ['Jumlah aToken bertambah mengikuti bunga; jumlah cToken tetap tetapi nilai tukarnya terhadap aset asal naik', 'aToken untuk peminjam, cToken untuk penyetor', 'aToken tidak memberi bunga sama sekali', 'cToken hanya bisa dipakai di Bitcoin'],
          jelas: 'Keduanya tanda bukti setoran yang mencerminkan bunga. Yang berbeda hanya cara mencatatnya: saldo yang naik atau kurs yang naik.' },
        { tanya: 'Seseorang mengambil flash loan tetapi gagal melunasinya sebelum transaksi selesai. Apa yang terjadi?',
          pilihan: ['Seluruh transaksi dibatalkan seolah tidak pernah terjadi', 'Ia berutang dan dikejar penagih', 'Protokol kehilangan dana yang dipinjamkan', 'Pinjaman otomatis diperpanjang sebulan'],
          jelas: 'Karena pinjam dan lunas terjadi dalam satu transaksi, kegagalan melunasi membuat semuanya batal. Itu sebabnya flash loan tidak butuh jaminan.' },
        { tanya: 'Bad debt di protokol lending muncul ketika…',
          pilihan: ['Likuidasi datang terlambat sehingga nilai jaminan sudah lebih kecil dari utang', 'Peminjam membayar bunga lebih awal', 'Utilisasi pool terlalu rendah', 'Penyetor menarik dana saat bunga turun'],
          jelas: 'Harga yang jatuh terlalu cepat atau jaminan yang sulit dijual bisa membuat likuidasi tidak menutup utang. Selisihnya ditanggung protokol atau penyetor, seperti kasus CRV di Aave pada November 2022.' },
        { tanya: 'Dengan modal 10 ETH, Anda looping sampai posisi 40 ETH dengan utang 30 ETH. Imbal staking 3%, bunga pinjam 3,5% per tahun. Berapa hasil bersihnya per tahun?',
          pilihan: ['+0,15 ETH', '+1,2 ETH', '−0,15 ETH', '+0,3 ETH'],
          jelas: '40 × 3% = 1,2 ETH dikurangi 30 × 3,5% = 1,05 ETH, hasilnya +0,15 ETH (1,5% dari modal). Kalau bunga pinjam naik sedikit saja di atas 4%, hasilnya berubah negatif.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'liquid-staking', judul: 'Liquid Staking & Liquid Restaking',
      ringkas: 'Dari staking biasa ke token staking yang bisa dipakai di DeFi, lalu ke restaking. Setiap lapisan tambahan menaikkan imbal hasil sekaligus menumpuk risiko baru.',
      pelajaran: [
        { judul: 'Staking biasa vs liquid staking token', isi: `
<h3>Konsepnya</h3>
<p>Di blockchain proof of stake, validator mengunci koin sebagai jaminan kejujuran. Kalau berbuat curang, sebagian jaminannya dipotong. Pemotongan ini disebut <i>slashing</i>. Sebagai imbalan kerja jujur, validator mendapat hadiah. Di Ethereum, satu validator butuh minimal 32 ETH dan harus menjalankan server sepanjang waktu. Pada Agustus 2026 imbal hasil staking ETH sekitar 2,6% per tahun, menurut data Messari, turun dari sekitar 5,8% pada September 2022, karena makin banyak ETH yang ikut stake dan hadiahnya dibagi ke lebih banyak pihak.</p>
<p>Staking biasa punya dua kekurangan. Pertama, dana terkunci: keluar dari antrean validator bisa memakan beberapa hari sampai berminggu-minggu saat ramai. Kedua, dana itu menganggur. ETH yang di-stake tidak bisa sekaligus dipakai sebagai jaminan pinjaman atau disetor ke pool. <b>Liquid staking</b> menjawab keduanya. Anda menyetor ETH ke protokol, protokol men-stake-nya lewat operator validator, dan Anda menerima token tanda bukti yang disebut <b>liquid staking token (LST)</b>. Token itu bisa diperdagangkan dan dipakai di DeFi.</p>

<h3>Cara kerjanya</h3>
<p>LST harus mencerminkan hadiah staking yang terus bertambah. Ada dua cara mencatatnya:</p>
<ul>
<li><b>Rebasing: jumlah token bertambah.</b> stETH dari Lido selalu bernilai sekitar 1 ETH per token, dan saldo di dompet Anda naik sedikit setiap hari. Kekurangannya, banyak aplikasi DeFi tidak siap menangani saldo yang berubah sendiri. Karena itu Lido juga menyediakan wstETH, versi terbungkus yang jumlahnya tetap.</li>
<li><b>Nilai naik: jumlah tetap, kurs naik.</b> rETH dari Rocket Pool dan jitoSOL dari Jito di Solana memakai cara ini. Jumlah token di dompet tidak berubah, tetapi setiap token bisa ditukar dengan ETH atau SOL yang makin banyak. jitoSOL juga menyalurkan sebagian tip MEV yang diterima validator Solana.</li>
</ul>
<p>Protokol memotong komisi dari hadiah. Lido, misalnya, mengambil 10% hadiah staking untuk operator node dan kas DAO-nya.</p>

<h3>Contoh</h3>
<pre>
Imbal hasil staking bersih: 2,6% per tahun (ilustrasi)

Rebasing (stETH):
  Hari ini : 10 stETH      (±10 ETH)
  Setahun  : ±10,26 stETH  (±10,26 ETH)

Nilai naik (rETH):
  Hari ini : 10 rETH × kurs 1,10 ETH    = 11 ETH
  Setahun  : 10 rETH × kurs ±1,1286 ETH = ±11,29 ETH
</pre>
<p>Hasil ekonominya sama. Yang berbeda hanya apa yang naik: jumlah token atau harga token. Pembedaan ini penting saat Anda memakai LST di aplikasi lain. Di beberapa negara, cara pencatatan ini juga bisa memengaruhi perlakuan pajaknya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Harga LST di pasar bisa berbeda dari nilai ETH di belakangnya. Pada Juni 2022, sebelum penarikan staking Ethereum dibuka, stETH sempat diperdagangkan sekitar 0,93–0,95 ETH karena penjualan besar dari pihak yang butuh likuiditas. Sejak April 2023 penarikan staking Ethereum sudah dibuka (untuk stETH lewat Lido sejak Mei 2023), sehingga selisih semacam itu lebih mudah ditutup lewat arbitrase. Tetapi selisih tetap bisa muncul saat antrean keluar panjang. Anda juga menanggung risiko kontrak protokol, pilihan operator validatornya, dan slashing. Satu penyedia yang menguasai porsi besar staking juga menimbulkan risiko pemusatan bagi jaringan.</div>` },

        { judul: 'Restaking: EigenLayer, AVS, dan slashing tambahan', isi: `
<h3>Konsepnya</h3>
<p>ETH yang di-stake mengamankan Ethereum karena kecurangan membuat jaminan itu hilang. <b>Restaking</b> mengajukan pertanyaan lanjutan: bagaimana kalau jaminan yang sama juga dipakai untuk mengamankan layanan lain? Layanan seperti oracle, bridge, atau lapisan data availability butuh sekelompok operator yang jujur. Membangun jaringan validator sendiri dengan token baru itu mahal, dan keamanannya lemah di awal. Menyewa keamanan dari ETH yang sudah di-stake jauh lebih cepat.</p>
<p>EigenLayer adalah protokol restaking terbesar di Ethereum. Protokol ini diluncurkan bertahap sejak 2023, dan sejak 2025 menjadi bagian dari platform yang dinamai EigenCloud. Layanan yang menumpang keamanan itu disebut <b>AVS</b> (actively validated services). Contohnya EigenDA, layanan data availability dari tim yang sama.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Restaker</b> menyetor ETH yang sudah di-stake. Bisa secara native, yaitu validator mengarahkan hak penarikannya ke kontrak EigenLayer, atau dalam bentuk LST seperti stETH.</li>
<li>Restaker mendelegasikan dananya kepada <b>operator</b>, pihak yang benar-benar menjalankan perangkat lunak AVS.</li>
<li>Operator memilih AVS mana yang ia layani dan berapa porsi jaminan yang ia pertaruhkan untuk tiap AVS.</li>
<li>AVS membayar imbalan, sering dalam bentuk token milik AVS itu sendiri. Kalau operator melanggar aturan sebuah AVS, AVS itu dapat memotong jaminan yang dialokasikan kepadanya. Fitur slashing ini baru aktif di mainnet EigenLayer pada April 2025. Sebelumnya restaking praktis berjalan tanpa hukuman.</li>
</ol>
<p>Intinya, restaker menjual jasa "jaminan" kepada banyak pembeli sekaligus. Imbalannya bertambah, tetapi jaminan yang sama kini bisa dipotong oleh lebih dari satu aturan.</p>

<h3>Contoh</h3>
<pre>
Validator 32 ETH, imbal staking dasar 2,6%   = ±0,83 ETH per tahun
Tambahan imbalan dari AVS, misalnya 1%       = 0,32 ETH per tahun

Risiko: satu AVS memotong 5% jaminan yang dialokasikan
  5% × 32 ETH = 1,6 ETH
  → setara imbalan AVS selama 5 tahun
</pre>
<p>Hitungan ini menunjukkan asimetri restaking. Imbalannya kecil dan datang bertahap, sedangkan kerugiannya bisa besar dan mendadak. Karena itu yang perlu dinilai bukan hanya persentase imbal hasil. Periksa AVS mana yang dilayani, siapa operatornya, dan seberapa jelas aturan slashing di tiap AVS.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Aturan slashing ditulis oleh tiap AVS, dan bug di kodenya bisa memotong jaminan operator yang jujur. Kalau banyak operator melayani AVS yang sama, satu kesalahan bisa memotong banyak restaker sekaligus. Sebagian besar imbalan awal restaking berupa poin dan token baru yang nilainya belum pasti. Komunitas Ethereum juga pernah memperingatkan risiko sistemik: kalau terlalu banyak layanan bergantung pada jaminan ETH, masalahnya bisa merembet ke Ethereum sendiri. Protokol restaking lain, seperti Symbiotic, memakai desain berbeda; pelajari aturannya masing-masing.</div>` },

        { judul: 'Liquid restaking token dan risiko yang bertumpuk', isi: `
<h3>Konsepnya</h3>
<p>Restaking langsung lewat EigenLayer mengunci dana dan menuntut Anda memilih operator sendiri. <b>Liquid restaking token (LRT)</b> melakukan untuk restaking apa yang dilakukan LST untuk staking. Protokol mengurus semuanya, dan Anda menerima token yang bisa diperdagangkan. Contohnya eETH dari ether.fi (dengan versi terbungkus weETH), ezETH dari Renzo, dan rsETH dari Kelp.</p>
<p>Kedengarannya efisien: satu ETH menghasilkan imbal staking, imbalan restaking, dan masih bisa dipakai di DeFi. Tetapi setiap lapisan menambah pihak yang harus dipercaya dan cara baru untuk gagal.</p>

<h3>Cara kerjanya</h3>
<p>Coba urutkan apa saja yang harus berjalan benar agar satu ezETH yang Anda pakai sebagai jaminan tetap bernilai:</p>
<ol>
<li>Validator Ethereum di baliknya tidak terkena slashing.</li>
<li>Kontrak LST tidak bermasalah, kalau jaminannya berupa LST.</li>
<li>Kontrak EigenLayer aman, dan AVS yang dipilih tidak memotong jaminan.</li>
<li>Kontrak dan tata kelola protokol LRT aman, termasuk para pemegang kunci admin.</li>
<li>Ada likuiditas pasar yang cukup, atau jalur penarikan yang berfungsi, untuk menukar LRT kembali ke ETH.</li>
<li>Kalau Anda looping di protokol lending, oracle dan parameter likuidasinya wajar.</li>
</ol>
<p>Kalau satu mata rantai putus, semua lapisan di atasnya ikut terkena. Pada masa puncaknya di 2024, sebagian besar permintaan LRT didorong program poin dan harapan airdrop, bukan imbal hasil nyata dari AVS.</p>

<h3>Contoh</h3>
<p>Kasus ezETH, 24 April 2024. Saat itu penarikan dari Renzo ke ETH belum dibuka, jadi satu-satunya jalan keluar adalah menjual ezETH di DEX. Ketika rincian pembagian token REZ diumumkan dan banyak pemegang kecewa, penjualan membanjiri pool yang tidak dirancang untuk arus keluar sebesar itu. Harga ezETH sempat jatuh jauh di bawah 1 ETH. Banyak pemegang telah looping ezETH di protokol lending dengan leverage tinggi, dan posisi senilai lebih dari $60 juta terlikuidasi. ETH di balik ezETH sebenarnya utuh. Yang runtuh adalah jalan keluarnya.</p>
<pre>
Looping ezETH, leverage 5× (angka ilustrasi):
  Modal 10 ETH → jaminan 50 ezETH, utang 40 ETH
  Ambang likuidasi 95% (umum untuk aset yang dianggap setara)
  Syarat aman: nilai jaminan × 0,95 ≥ 40 ETH
  → nilai jaminan minimal ±42,1 ETH

  Oracle memakai harga pasar, ezETH turun 18%:
  50 × 0,82 = 41 ETH → di bawah batas, terlikuidasi
  padahal ETH di baliknya tidak hilang
</pre>
<p>Pelajarannya: menumpuk imbal hasil berarti menumpuk risiko. Penarikan native ezETH baru aktif beberapa pekan setelah kejadian itu. Sekarang protokol LRT umumnya sudah membuka jalur penarikan, tetapi masa tunggunya tetap berhari-hari. Pada saat panik, harga pasar tetap bisa lepas dari nilai wajarnya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Imbal hasil LRT yang ditampilkan sering menggabungkan staking, restaking, poin, dan insentif token yang nilainya tidak pasti. Oracle yang memakai harga pasar membuat depeg sesaat bisa memicu likuidasi. Oracle yang memakai kurs dari protokol lebih tenang, tetapi bisa terlambat bereaksi kalau masalahnya nyata. Sebelum menjadikan LRT jaminan, periksa siapa pemegang kunci admin-nya, berapa lama penarikan, dan seberapa dalam likuiditas pasarnya.</div>` },
      ],
      kuis: [
        { tanya: 'Apa beda stETH (Lido) dan rETH (Rocket Pool) dalam mencerminkan hadiah staking?',
          pilihan: ['Saldo stETH bertambah setiap hari; jumlah rETH tetap tetapi kursnya terhadap ETH naik', 'stETH tidak memberi hadiah, rETH memberi hadiah', 'rETH bertambah jumlahnya, stETH naik harganya', 'Keduanya sama sekali tidak mencerminkan hadiah staking'],
          jelas: 'stETH memakai rebasing, rETH memakai kurs yang naik. Hasil ekonominya sama. Karena rebasing merepotkan sebagian aplikasi DeFi, Lido juga menyediakan wstETH yang jumlahnya tetap.' },
        { tanya: 'Anda memegang 20 rETH dengan kurs 1,05 ETH per rETH. Setahun kemudian kursnya naik 3%. Berapa nilai kepemilikan Anda dalam ETH?',
          pilihan: ['±21,63 ETH', '20,6 ETH', '21 ETH', '±20,39 ETH'],
          jelas: 'Kurs baru 1,05 × 1,03 = 1,0815. Nilainya 20 × 1,0815 = ±21,63 ETH. Jumlah rETH tetap 20; yang naik adalah kursnya.' },
        { tanya: 'Dalam restaking, AVS (actively validated services) adalah…',
          pilihan: ['Layanan seperti oracle, bridge, atau data availability yang menumpang keamanan ETH yang di-restake', 'Nama lain untuk validator Ethereum', 'Jenis dompet khusus untuk staking', 'Bursa tempat memperdagangkan LST'],
          jelas: 'AVS membayar imbalan kepada operator dan restaker, dan boleh memotong jaminan kalau operator melanggar aturannya. Contohnya EigenDA.' },
        { tanya: 'Operator restaking mengalokasikan 32 ETH ke sebuah AVS yang membayar imbalan 0,5% per tahun. AVS itu lalu memotong 4% jaminan karena pelanggaran. Kerugian itu setara imbalan berapa tahun?',
          pilihan: ['8 tahun', '4 tahun', '2 tahun', '16 tahun'],
          jelas: 'Imbalan per tahun 32 × 0,5% = 0,16 ETH. Potongan 32 × 4% = 1,28 ETH. 1,28 ÷ 0,16 = 8 tahun. Imbalan restaking kecil dan bertahap, sedangkan slashing besar dan mendadak.' },
        { tanya: 'Kenapa ezETH lepas patokan pada April 2024?',
          pilihan: ['Penarikan ke ETH belum dibuka, sehingga penjualan massal setelah pengumuman token REZ hanya bisa lewat DEX yang likuiditasnya tidak cukup', 'ETH di balik ezETH dicuri peretas', 'EigenLayer memotong seluruh jaminan Renzo', 'Harga ETH jatuh 80% dalam sehari'],
          jelas: 'Nilai di balik ezETH tetap utuh; yang runtuh adalah jalan keluarnya. Posisi looping berjaminan ezETH senilai lebih dari $60 juta terlikuidasi karena oracle membaca harga pasar.' },
        { tanya: 'Mana urutan lapisan risiko yang paling tepat untuk seseorang yang looping LRT di protokol lending?',
          pilihan: ['Validator Ethereum → kontrak restaking dan AVS → protokol LRT → likuiditas pasar → oracle dan likuidasi di protokol lending', 'Hanya risiko harga ETH', 'Hanya risiko kontrak protokol lending', 'Tidak ada risiko karena semua lapisan saling menjamin'],
          jelas: 'Setiap lapisan menambah imbal hasil sekaligus titik gagal baru. Kalau satu mata rantai putus, semua lapisan di atasnya ikut terkena.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'oracle', judul: 'Oracle Blockchain',
      ringkas: 'Bagaimana data dari luar masuk ke blockchain dan kenapa jalur itu menjadi titik serang favorit. Anda juga melihat cara oracle modern mengurangi risikonya.',
      pelajaran: [
        { judul: 'Masalah oracle dan cara data harga masuk', isi: `
<h3>Konsepnya</h3>
<p>Setiap node blockchain harus mendapat hasil yang persis sama saat menjalankan transaksi. Karena itu smart contract tidak boleh memanggil situs web. Dua node yang memanggil pada detik berbeda bisa mendapat jawaban berbeda, dan konsensus pun pecah. Akibatnya blockchain buta terhadap dunia luar. Ia tidak tahu harga ETH di bursa, skor pertandingan, atau cuaca hari ini.</p>
<p><b>Oracle</b> adalah layanan yang menulis data luar ke blockchain supaya kontrak bisa memakainya. Dari sini lahir <b>masalah oracle</b>. Blockchain bisa berjalan tanpa perlu memercayai siapa pun, tetapi begitu kontrak bergantung pada data luar, keamanannya hanya setara dengan pihak yang membawa data itu. Protokol lending senilai miliaran dolar bisa punya kode yang aman dan tetap runtuh karena satu harga yang salah.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>Oracle terpusat.</b> Satu server milik satu pihak menandatangani dan mengirim harga. Murah dan cepat, tetapi kalau server itu diretas, keliru, atau berniat jahat, tidak ada yang mengoreksi.</li>
<li><b>Jaringan oracle.</b> Banyak node independen mengambil data dari banyak sumber, lalu hasilnya digabung, misalnya dengan mengambil nilai tengah (median), sehingga satu sumber yang ngawur tidak menggeser hasil. Chainlink adalah jaringan oracle terbesar di DeFi. Pyth mengambil pendekatan berbeda: datanya datang langsung dari bursa, market maker, dan perusahaan trading yang menjadi penerbit, disertai rentang keyakinan (confidence interval).</li>
<li><b>Push vs pull.</b> Model <i>push</i> menulis harga ke chain secara berkala. Harga diperbarui saat bergerak melewati batas tertentu (misalnya 0,5%), atau setelah jangka waktu tertentu (misalnya satu jam) walau harga diam. Model <i>pull</i> memperbarui harga sangat sering di luar chain. Aplikasi atau pengguna yang membutuhkan menariknya ke chain tepat saat bertransaksi, beserta tanda tangan yang bisa diverifikasi. Pyth dikenal dengan model pull, sedangkan Chainlink menyediakan keduanya.</li>
<li><b>TWAP.</b> Time-weighted average price adalah rata-rata harga sebuah pool DEX sepanjang jangka waktu tertentu. Protokol bisa membacanya langsung dari pool tanpa pihak luar.</li>
</ul>

<h3>Contoh</h3>
<pre>
Harga di pool DEX selama 30 menit:
  29 menit pertama : 3.000
  1 menit terakhir : 6.000 (dimanipulasi)

Harga spot sesaat : 6.000
TWAP 30 menit     : (29 × 3.000 + 1 × 6.000) ÷ 30 = 3.100
</pre>
<p>TWAP membuat manipulasi mahal. Penyerang harus menahan harga palsu selama banyak blok, sementara arbitrase terus menarik harga kembali dan menggerus modalnya. Kelemahannya adalah kebalikan dari kelebihannya. Saat harga benar-benar jatuh cepat, TWAP tertinggal, sehingga protokol bisa melikuidasi terlambat.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Oracle push bisa memberi harga basi di antara dua pembaruan. Oracle pull memindahkan tanggung jawab memperbarui kepada aplikasi, dan kesalahan integrasi di sana sering menjadi celah. TWAP dari pool yang tipis tetap bisa dimanipulasi oleh penyerang bermodal cukup. Batas deviasi dan jeda pembaruan berbeda di tiap feed dan tiap chain; angka di atas hanya contoh.</div>` },

        { judul: 'VRF, CCIP, dan pelajaran dari eksploitasi oracle', isi: `
<h3>Konsepnya</h3>
<p>Oracle tidak hanya membawa harga. Dua layanan lain yang sering dipakai adalah angka acak dan pesan lintas chain. Keduanya berangkat dari masalah yang sama: blockchain tidak bisa menghasilkan sendiri sesuatu yang harus datang dari luar dirinya.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>VRF (verifiable random function).</b> Blockchain bersifat deterministik, jadi angka "acak" di dalamnya mudah ditebak atau dipengaruhi. Memakai data blok sebagai sumber acak itu berbahaya. Pembuat blok bisa melihat hasilnya lebih dulu dan memilih tidak menerbitkan blok yang merugikannya. Dengan VRF, kontrak meminta angka acak. Node oracle menghitung angka itu dari kunci rahasianya dan data permintaan, lalu mengirim angka beserta bukti kriptografis. Kontrak memeriksa bukti itu di chain. Node tidak bisa mengubah hasil, dan pihak lain tidak bisa menebaknya sebelum angka dan buktinya dikirim. Pilihan node hanyalah tidak menjawab, jadi kontrak yang baik tidak mengizinkan permintaan diulang demi hasil lain. VRF dipakai untuk undian, game, dan pembagian NFT.</li>
<li><b>CCIP (Cross-Chain Interoperability Protocol).</b> Layanan Chainlink untuk mengirim token dan pesan antar-blockchain. Selain jaringan oracle yang meneruskan pesan, CCIP memakai jaringan terpisah yang mengawasi risiko dan bisa menghentikan transfer yang mencurigakan. Kelas Teknologi Lintas Chain menempatkan CCIP di antara protokol pesan lintas chain lainnya.</li>
</ul>
<p>Risiko oracle harga paling sering muncul dalam tiga bentuk: harga basi saat pasar bergerak cepat, sumber data yang keliru, dan yang paling mahal, <b>manipulasi pasar sumbernya</b>. Kalau protokol membaca harga dari pasar yang tipis, penyerang cukup mengguncang pasar tipis itu.</p>

<h3>Contoh</h3>
<ul>
<li><b>Mango Markets, Oktober 2022.</b> Penyerang membuka posisi besar pada token MNGO, lalu memborong MNGO di pasar spot yang tipis sehingga harganya melonjak berlipat-lipat dalam waktu singkat. Oracle melaporkan harga baru itu dengan setia. Nilai posisinya di atas kertas membengkak, lalu ia memakainya sebagai jaminan untuk meminjam hampir seluruh aset protokol, lebih dari $100 juta. Oracle-nya tidak rusak; pasarnya yang dimanipulasi.</li>
<li><b>Cream Finance, Oktober 2021.</b> Dengan flash loan, penyerang memanipulasi nilai tukar sebuah token yang dipakai sebagai jaminan, lalu meminjam sekitar $130 juta.</li>
<li><b>Inverse Finance, April 2022.</b> Protokol memakai TWAP dari pool DEX yang tipis. Penyerang menggeser harga pool itu dan menahannya cukup lama agar TWAP ikut naik, lalu meminjam sekitar $15,6 juta. TWAP pun tidak kebal kalau pool-nya dangkal.</li>
</ul>
<pre>
Pola umum serangan manipulasi harga:
  1. Kumpulkan modal besar (sering lewat flash loan)
  2. Guncang harga di pasar tipis yang dibaca oracle
  3. Pakai harga palsu: pinjam berlebih atau likuidasi orang lain
  4. Kembalikan modal, bawa selisihnya
</pre>

<div class="batas-berlaku"><b>Batas & risiko.</b> Jaringan oracle yang terdesentralisasi mengurangi risiko satu sumber yang ngawur, tetapi tidak melindungi dari aset yang pasarnya memang tipis. Saat menilai protokol, tanyakan tiga hal: dari mana harganya, seberapa dalam pasar sumbernya, dan apa yang terjadi kalau oracle berhenti memperbarui. VRF menjamin angka tidak bisa dimanipulasi node, tetapi aplikasi masih bisa salah memakainya, misalnya membiarkan pengguna membatalkan taruhan setelah melihat hasilnya.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa smart contract tidak bisa langsung mengambil harga dari situs web bursa?',
          pilihan: ['Semua node harus mendapat hasil identik, sedangkan data dari luar bisa berbeda antar-node dan antar-waktu', 'Situs bursa melarang akses dari blockchain', 'Smart contract tidak bisa menyimpan angka', 'Karena harga crypto rahasia'],
          jelas: 'Konsensus menuntut setiap node menghitung hasil yang sama. Oracle menjembatani ini dengan menulis data luar ke chain, sehingga semua node membaca angka yang sama.' },
        { tanya: 'Harga sebuah pool selama 60 menit: 50 menit di 2.000, lalu 10 menit di 4.000. Berapa TWAP 60 menitnya?',
          pilihan: ['±2.333', '3.000', '4.000', '2.000'],
          jelas: '(50 × 2.000 + 10 × 4.000) ÷ 60 = 140.000 ÷ 60 = ±2.333. TWAP meredam lonjakan singkat, tetapi juga tertinggal saat harga berubah sungguhan.' },
        { tanya: 'Dalam model oracle pull, harga masuk ke chain dengan cara…',
          pilihan: ['Aplikasi atau pengguna menarik harga terbaru ke chain saat dibutuhkan, disertai tanda tangan yang bisa diverifikasi', 'Oracle menulis harga setiap jam walau tidak ada yang memakai', 'Validator menebak harga', 'Harga diketik manual oleh admin protokol'],
          jelas: 'Model push menulis harga secara berkala atau saat harga bergerak melewati batas. Model pull, yang dipakai Pyth, memindahkan pembaruan ke saat transaksi terjadi.' },
        { tanya: 'Apa ciri khas sumber data Pyth?',
          pilihan: ['Data datang langsung dari bursa, market maker, dan perusahaan trading sebagai penerbit, disertai rentang keyakinan', 'Data diambil dari satu server milik yayasan', 'Harga ditentukan lewat voting pemegang token setiap hari', 'Hanya memakai harga dari satu DEX'],
          jelas: 'Pihak yang memang memperdagangkan aset menerbitkan harganya sendiri. Rentang keyakinan memberi tahu aplikasi seberapa pasti harga itu.' },
        { tanya: 'Kenapa angka acak untuk undian on-chain sebaiknya memakai VRF, bukan data blok?',
          pilihan: ['Pembuat blok bisa melihat hasil dari data blok lebih dulu dan memengaruhinya, sedangkan VRF disertai bukti yang diperiksa kontrak', 'Data blok tidak mengandung angka', 'VRF lebih murah dari transaksi biasa', 'Data blok hanya ada di Bitcoin'],
          jelas: 'VRF menghasilkan angka beserta bukti kriptografis. Node tidak bisa mengubah hasil, dan pihak lain tidak bisa menebaknya sebelum angka dan buktinya dikirim.' },
        { tanya: 'Apa pelajaran utama dari kasus Mango Markets (Oktober 2022)?',
          pilihan: ['Oracle melaporkan harga dengan benar, tetapi pasar sumbernya tipis sehingga harga bisa dimanipulasi', 'Kunci admin oracle dicuri', 'Oracle berhenti bekerja selama seminggu', 'Harga dimasukkan manual dengan salah ketik'],
          jelas: 'Penyerang memompa harga MNGO di pasar tipis, memakai nilai posisinya yang membengkak sebagai jaminan, lalu meminjam lebih dari $100 juta. Oracle hanya sekuat pasar yang dibacanya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'lintas-chain', judul: 'Teknologi Lintas Chain',
      ringkas: 'Kenapa setiap blockchain berdiri seperti pulau dan bagaimana jembatan menyeberangkan aset. Anda juga belajar kenapa jembatan menjadi lokasi beberapa peretasan terbesar dalam sejarah crypto.',
      pelajaran: [
        { judul: 'Kenapa chain terisolasi dan jenis-jenis bridge', isi: `
<h3>Konsepnya</h3>
<p>Setiap blockchain punya validator, aturan, dan catatan sendiri. Ethereum tidak bisa membaca saldo di Solana, dan Solana tidak tahu apa yang terjadi di Arbitrum. Penyebabnya bukan teknologi yang kurang. Memeriksa kejadian di chain lain berarti harus memercayai konsensus chain lain itu. Maka token tidak pernah benar-benar "pindah". Yang terjadi selalu begini: sesuatu dikunci atau dibakar di satu chain, lalu sesuatu dicetak atau dilepas di chain lain. <b>Bridge</b> adalah sistem yang memutuskan kapan langkah kedua boleh terjadi.</p>
<p>Pertanyaan kunci untuk bridge mana pun: <b>siapa yang memastikan kejadian di chain asal benar-benar terjadi?</b></p>

<h3>Cara kerjanya</h3>
<table>
<tr><th>Jenis</th><th>Cara kerja</th><th>Yang dipercaya</th></tr>
<tr><td>Lock-and-mint</td><td>Token asli dikunci di kontrak chain asal, lalu versi wrapped dicetak di chain tujuan. Untuk kembali, wrapped dibakar dan token asli dilepas.</td><td>Pihak yang mengesahkan penguncian, sering sekelompok penandatangan</td></tr>
<tr><td>Burn-and-mint</td><td>Token dibakar di chain asal lewat kontrak resmi penerbit, penerbit mengesahkannya, lalu versi asli dicetak di chain tujuan. Contohnya CCTP milik Circle untuk USDC.</td><td>Penerbit token itu sendiri</td></tr>
<tr><td>Liquidity network</td><td>Anda menyetor di chain asal. Penyedia likuiditas yang sudah punya token di chain tujuan langsung membayar Anda, lalu diganti belakangan. Contohnya Across.</td><td>Mekanisme penyelesaian dan kecukupan likuiditas</td></tr>
<tr><td>Native / light client</td><td>Chain tujuan memverifikasi sendiri bukti dari konsensus chain asal. Contohnya IBC di Cosmos dan bridge resmi rollup ke Ethereum.</td><td>Keamanan kedua chain dan kode verifikasinya</td></tr>
</table>
<p>Di atas jenis-jenis itu ada <b>protokol pesan umum</b>. Protokol ini bukan hanya memindahkan token, tetapi mengirim perintah apa pun dari kontrak di satu chain ke kontrak di chain lain. LayerZero memakai verifier yang dipilih sendiri oleh aplikasi (DVN). Wormhole memakai 19 penjaga (Guardian) dan butuh tanda tangan 13 di antaranya. CCIP milik Chainlink memakai jaringan oracle ditambah jaringan pengawas risiko.</p>

<h3>Contoh</h3>
<pre>
Memindahkan 1.000 USDC dari Arbitrum ke Base:

Burn-and-mint (CCTP):
  1.000 USDC dibakar di Arbitrum → Circle mengesahkan
  → 1.000 USDC asli dicetak di Base. Tidak ada versi tiruan.

Liquidity network:
  Setor 1.000 USDC di Arbitrum
  Penyedia likuiditas membayar ±999 USDC di Base dalam hitungan detik
  Selisih ±1 USDC = imbalan penyedia likuiditas (angka ilustrasi)

Bridge resmi optimistic rollup ke Ethereum:
  Masuk cepat, tetapi keluar ke Ethereum menunggu ±7 hari
  (masa sanggah untuk membuktikan kecurangan, bila ada)
</pre>
<p>Tidak ada pilihan yang unggul di semua hal. Makin sedikit pihak yang harus dipercaya, biasanya makin lambat atau makin mahal. Makin cepat dan murah, biasanya makin banyak kepercayaan yang Anda serahkan kepada pihak lain.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Token wrapped hanya bernilai selama token asli di kontrak penguncinya aman. Kalau kontrak itu dikuras, token wrapped di chain tujuan kehilangan jaminannya. Satu aset bisa punya beberapa versi wrapped dari bridge berbeda yang tidak bisa saling ditukar 1:1, jadi selalu periksa versi token mana yang Anda terima. Jumlah penjaga dan ambang tanda tangan bisa berubah; angka di atas mengikuti desain yang diumumkan hingga 2025.</div>` },

        { judul: 'Risiko bridge, aset wrapped, dan era intents', isi: `
<h3>Konsepnya</h3>
<p>Bridge lock-and-mint menumpuk aset dalam jumlah raksasa di satu kontrak. Keamanannya sering bergantung pada segelintir kunci atau satu potong kode verifikasi. Kombinasi "hadiah besar, pintu sedikit" inilah yang membuat bridge menjadi sasaran beberapa peretasan terbesar dalam sejarah crypto. Pada 2022 saja, tiga kasus di bawah menghilangkan lebih dari $1 miliar.</p>

<h3>Cara kerjanya</h3>
<p>Hampir semua kegagalan bridge masuk ke salah satu dari tiga pola:</p>
<ol>
<li><b>Kunci penandatangan dibobol.</b> Kalau cukup banyak kunci jatuh ke tangan satu penyerang, ia bisa mengesahkan penarikan palsu.</li>
<li><b>Bug di kode verifikasi.</b> Kontrak mengira sebuah pesan sudah diperiksa padahal belum, sehingga token wrapped dicetak tanpa jaminan.</li>
<li><b>Kesalahan konfigurasi saat pembaruan.</b> Satu nilai yang salah diisi bisa membuat semua pesan dianggap sah.</li>
</ol>
<p>Karena bridge tetap berisiko, arah industri bergeser ke <b>chain abstraction</b> dan <b>intents</b>. Intent adalah pernyataan hasil yang Anda inginkan, bukan langkah-langkahnya. Contohnya: "Saya punya ETH di Arbitrum, saya ingin 1.000 USDC di Base." Pihak yang disebut <i>solver</i> atau <i>filler</i> bersaing memenuhinya dengan modal mereka sendiri di chain tujuan, lalu menagih ganti dari dana Anda di chain asal belakangan. Anda tidak perlu tahu bridge mana yang dipakai, karena risiko penyeberangan ditanggung solver yang dibayar untuk itu. Chain abstraction membawa ide ini ke dompet: pengguna melihat satu saldo, dan dompet yang mengurus chain mana yang dipakai. Pada 2024, Uniswap Labs dan Across mengusulkan ERC-7683 sebagai standar bersama untuk intent lintas chain.</p>

<h3>Contoh</h3>
<table>
<tr><th>Kasus</th><th>Nilai hilang</th><th>Penyebab</th></tr>
<tr><td>Ronin (bridge Axie Infinity), Maret 2022</td><td>±$625 juta (173.600 ETH dan 25,5 juta USDC)</td><td>Penyerang menguasai 5 dari 9 kunci validator. FBI mengaitkannya dengan kelompok Lazarus dari Korea Utara. Pencurian baru diketahui sekitar enam hari kemudian.</td></tr>
<tr><td>Wormhole, Februari 2022</td><td>±$320 juta (120.000 wETH)</td><td>Bug verifikasi tanda tangan di sisi Solana membuat penyerang bisa mencetak wETH tanpa menyetor ETH. Jump Crypto menutup kekurangannya.</td></tr>
<tr><td>Nomad, Agustus 2022</td><td>±$190 juta</td><td>Sebuah pembaruan kontrak membuat pesan palsu dianggap sah. Setelah satu orang berhasil, ratusan alamat meniru transaksinya.</td></tr>
</table>
<pre>
Intent sederhana (angka ilustrasi):
  Anda: "Kirim 1.000 USDC ke saya di Base; saya bayar dari Arbitrum."
  Solver A menawar: Anda terima 998,5 USDC
  Solver B menawar: Anda terima 999,2 USDC  ← dipilih
  Solver B membayar dari saldonya di Base dalam hitungan detik,
  lalu mengambil 1.000 USDC Anda di Arbitrum setelah terbukti lunas.
  Selisih 0,8 USDC = imbalan solver untuk modal dan risikonya.
</pre>

<div class="batas-berlaku"><b>Batas & risiko.</b> Intents tidak menghapus kepercayaan, hanya memindahkannya: ke sistem penyelesaian yang memastikan solver dibayar dengan benar, dan ke pasar solver yang bisa dikuasai segelintir pemain besar. Bagi pemegang aset, aturan praktisnya tetap sama. Kurangi waktu aset berada dalam bentuk wrapped, pilih versi token asli bila tersedia, dan jangan menyimpan dana besar di chain yang hanya terhubung lewat satu bridge yang dijaga sedikit kunci.</div>` },
      ],
      kuis: [
        { tanya: 'Saat Anda "memindahkan" token ke chain lain lewat bridge, yang sebenarnya terjadi adalah…',
          pilihan: ['Token dikunci atau dibakar di chain asal, lalu dicetak atau dilepas di chain tujuan', 'Token benar-benar berpindah dari satu blockchain ke blockchain lain', 'Token disalin sehingga Anda punya dua kali lipat', 'Token dikirim lewat email ke bursa'],
          jelas: 'Chain tidak bisa saling membaca. Bridge memutuskan kapan cetakan di chain tujuan boleh terjadi, berdasarkan bukti bahwa sesuatu sudah dikunci atau dibakar di chain asal.' },
        { tanya: 'CCTP milik Circle memindahkan USDC antar-chain dengan cara…',
          pilihan: ['Membakar USDC di chain asal lalu mencetak USDC asli di chain tujuan, sehingga tidak ada versi wrapped', 'Mengunci USDC lalu mencetak USDC wrapped buatan pihak ketiga', 'Menukar USDC ke Bitcoin lebih dulu', 'Mengirim dolar tunai lewat bank'],
          jelas: 'Karena penerbitnya sendiri yang membakar dan mencetak, tidak ada tumpukan jaminan di kontrak bridge yang bisa dikuras. Yang dipercaya adalah Circle.' },
        { tanya: 'Apa penyebab utama peretasan bridge Ronin pada Maret 2022?',
          pilihan: ['Penyerang menguasai 5 dari 9 kunci validator yang mengesahkan penarikan', 'Harga ETH jatuh tajam', 'Pengguna salah mengetik alamat', 'Blockchain Ethereum berhenti bekerja'],
          jelas: 'Sekitar $625 juta hilang. Bridge yang keamanannya bergantung pada sedikit kunci hanya sekuat penjagaan kunci-kunci itu.' },
        { tanya: 'Kontrak pengunci sebuah bridge lock-and-mint dikuras peretas. Apa yang terjadi pada token wrapped di chain tujuan?',
          pilihan: ['Kehilangan jaminannya, sehingga nilainya bisa jatuh jauh di bawah aset asli', 'Otomatis berubah menjadi token asli', 'Nilainya naik karena makin langka', 'Tidak terpengaruh sama sekali'],
          jelas: 'Token wrapped hanyalah klaim atas aset yang dikunci. Kalau asetnya hilang, klaim itu tidak lagi ditopang apa pun.' },
        { tanya: 'Dalam model intents lintas chain, peran solver adalah…',
          pilihan: ['Memenuhi permintaan pengguna di chain tujuan dengan modal sendiri, lalu menagih ganti dari dana pengguna di chain asal', 'Menambang blok di kedua chain', 'Menyimpan kunci privat pengguna', 'Menulis ulang smart contract bridge'],
          jelas: 'Pengguna cukup menyatakan hasil yang diinginkan. Solver bersaing menawarkan harga terbaik dan menanggung risiko penyeberangan, sebagai ganti selisih kecil.' },
        { tanya: 'Anda ingin memindahkan 2.000 USDC. Solver A menawarkan Anda menerima 1.996 USDC, sedangkan Solver B memungut biaya 0,1%. Mana yang lebih menguntungkan bagi Anda?',
          pilihan: ['Solver B: Anda menerima 1.998 USDC', 'Solver A: Anda menerima 1.996 USDC', 'Sama saja, keduanya 1.996 USDC', 'Solver B: Anda menerima 1.980 USDC'],
          jelas: 'Biaya 0,1% × 2.000 = 2 USDC, jadi Anda menerima 1.998. Solver A setara biaya 4 USDC (0,2%).' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'dao', judul: 'DAO: Organisasi Terdesentralisasi',
      ringkas: 'Cara komunitas pemegang token memutuskan nasib sebuah protokol. Anda juga melihat kenapa "terdesentralisasi" di atas kertas belum tentu terdesentralisasi dalam praktik.',
      pelajaran: [
        { judul: 'Cara DAO mengambil keputusan', isi: `
<h3>Konsepnya</h3>
<p>DAO (decentralized autonomous organization) adalah organisasi yang aturan dan kasnya dikelola lewat smart contract, dan keputusannya diambil lewat pemungutan suara para anggota. Di DeFi, "anggota" biasanya berarti pemegang <b>token governance</b>, misalnya UNI untuk Uniswap atau AAVE untuk Aave. Satu token, satu suara.</p>
<p>Kenapa perlu DAO? Protokol DeFi tidak diam. Suku bunga, aset yang boleh dijadikan jaminan, pembagian fee, dan penggunaan dana kas harus terus disesuaikan. DAO memindahkan hak mengubah semua itu dari tim pendiri ke komunitas, sehingga protokol tidak bergantung pada satu perusahaan. Nama "DAO" sendiri punya sejarah pahit. The DAO diretas pada 2016 dan sekitar 3,6 juta ETH terkuras, yang berujung pada hard fork Ethereum dan lahirnya Ethereum Classic.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Diskusi di forum.</b> Usulan dibahas terbuka lebih dulu. Ini tahap paling murah untuk menemukan kesalahan.</li>
<li><b>Voting Snapshot (off-chain).</b> Snapshot adalah alat voting tanpa biaya gas. Pemilih menandatangani pesan dengan dompetnya, dan hasilnya disimpan di luar blockchain. Cara ini cocok untuk mengukur dukungan, tetapi hasilnya tidak mengeksekusi apa pun. Seseorang, biasanya pemegang multisig, harus melaksanakannya, dan Anda percaya ia melakukannya.</li>
<li><b>Voting on-chain.</b> Proposal berupa kode yang akan dijalankan, diajukan ke kontrak governance. Pengusul harus memegang atau didelegasikan jumlah token minimal tertentu. Proposal hanya sah bila suara yang ikut melewati <i>kuorum</i>, yaitu batas minimal partisipasi. Kekuatan suara dihitung dari saldo pada blok tertentu sebelum voting dimulai, supaya token yang dibeli atau dipinjam sesudah titik itu, termasuk lewat flash loan, tidak ikut dihitung. Di banyak DAO titik itu baru jatuh saat voting dimulai, beberapa hari setelah proposal diumumkan, jadi suara masih bisa dikumpulkan dalam jeda itu.</li>
<li><b>Timelock.</b> Proposal yang lolos masuk antrean beberapa hari sebelum bisa dijalankan. Jeda ini memberi kesempatan kepada pengguna yang tidak setuju untuk keluar, dan memberi waktu untuk mendeteksi proposal jahat.</li>
<li><b>Kas dan multisig.</b> Dana DAO sering disimpan di dompet multisig, yaitu dompet yang butuh tanda tangan beberapa pemegang kunci, misalnya 4 dari 7. Banyak DAO juga punya dewan keamanan untuk keadaan darurat. Dewan keamanan Arbitrum, misalnya, beranggotakan 12 orang, dan tindakan darurat butuh 9 tanda tangan.</li>
</ol>

<h3>Contoh</h3>
<pre>
Suplai token governance        : 1.000.000.000
Kuorum (misalnya 4% suplai
  harus memilih "setuju")      : 40.000.000
Suara masuk                    : 52.000.000 (5,2% suplai)
  Setuju 41.000.000 | Tolak 11.000.000
→ Lolos: mayoritas setuju DAN kuorum terpenuhi
→ Masuk timelock 2 hari → dieksekusi otomatis
</pre>
<p>Perhatikan: keputusan yang mengikat seluruh protokol diambil oleh pemegang sekitar 5% suplai. Ini hal biasa di DAO, dan menjadi pintu masuk masalah yang dibahas di pelajaran berikutnya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Voting Snapshot bergantung pada kejujuran pelaksananya. Voting on-chain bergantung pada keamanan kontrak governance-nya. Token governance biasanya tidak memberi hak hukum seperti saham, dan status hukum DAO berbeda di tiap negara. Angka kuorum dan lamanya timelock di atas hanya ilustrasi; setiap DAO menetapkan angkanya sendiri.</div>` },

        { judul: 'Masalah DAO: partisipasi, whale, dan serangan governance', isi: `
<h3>Konsepnya</h3>
<p>Satu token satu suara terdengar adil, tetapi artinya suara mengikuti kekayaan. Di banyak DAO, porsi besar token dipegang tim, investor awal, dan bursa. Ribuan pemegang kecil tidak ikut memilih, karena merasa suaranya tidak berarti atau karena tidak punya waktu memahami proposal teknis. Hasilnya, desentralisasi di atas kertas bisa berarti kendali segelintir dompet dalam praktik.</p>

<h3>Cara kerjanya</h3>
<ul>
<li><b>Partisipasi rendah.</b> Kalau hanya sebagian kecil suplai yang memilih, kuorum mudah dipenuhi oleh kelompok yang terorganisasi. Menurunkan kuorum mempermudah pengambilan keputusan, tetapi juga mempermudah pembajakan.</li>
<li><b>Konsentrasi whale.</b> Satu pemegang besar bisa menentukan hasil sendirian. Suara juga bisa "disewa". Di sistem ve-token, proyek membayar <i>bribe</i> kepada pemegang suara agar emisi token diarahkan ke pool mereka.</li>
<li><b>Serangan governance.</b> Penyerang mengumpulkan suara yang cukup, dengan membeli, meminjam, atau mengoordinasi pemegang lain, untuk meloloskan proposal yang memindahkan kas ke dirinya. Pada Juli 2024, sekelompok pemegang besar berhasil meloloskan proposal di Compound untuk mengalihkan sekitar 499.000 COMP dari kas ke wadah yang mereka kendalikan. Proposal itu kemudian dibatalkan setelah negosiasi.</li>
<li><b>Delegasi.</b> Pemegang token bisa menitipkan hak suaranya kepada delegasi, yaitu orang atau lembaga yang aktif mengikuti proposal, tanpa menyerahkan tokennya. Partisipasi naik, tetapi kuasa berpindah ke sedikit delegasi yang juga bisa punya kepentingan sendiri.</li>
</ul>

<h3>Contoh</h3>
<p><b>Beanstalk, 17 April 2022.</b> Beanstalk adalah protokol stablecoin dengan governance on-chain. Protokol ini punya jalur "emergency commit": proposal bisa dieksekusi setelah sekitar satu hari kalau didukung dua pertiga suara. Kekuatan suara dihitung dari saldo saat itu juga, bukan dari saldo di masa lalu. Penyerang mengajukan proposal yang menyelipkan pengiriman dana kas ke alamatnya. Sehari kemudian, dalam satu transaksi, ia melakukan langkah berikut:</p>
<pre>
1. Meminjam aset sekitar $1 miliar lewat flash loan
2. Menyetornya ke Beanstalk → menguasai lebih dari 2/3 suara
3. Memakai emergency commit untuk meloloskan proposalnya
4. Menguras kas protokol (sekitar $180 juta aset)
5. Melunasi flash loan
Keuntungan bersih pelaku dilaporkan sekitar $76–80 juta.
</pre>
<p>Kodenya bekerja persis seperti yang ditulis. Kelemahannya ada pada desain: suara dihitung dari saldo sesaat, dan jalur darurat tidak memberi jeda yang cukup. Dua pertahanan dari pelajaran sebelumnya menutup celah itu. Pertama, menghitung suara dari saldo pada blok di masa lalu, bukan saldo saat itu juga. Kedua, timelock yang memberi waktu untuk bereaksi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Sebelum memercayai sebuah DAO, periksa berapa persen suplai yang biasanya ikut memilih, siapa sepuluh pemilih terbesar, siapa pemegang kunci multisig, dan apakah ada timelock. Beberapa DAO mencoba desain baru. Lido, misalnya, pada 2025 menambahkan "dual governance" agar pemegang stETH bisa menunda keputusan DAO yang merugikan mereka. Tidak ada desain yang sepenuhnya kebal; yang ada hanya desain yang membuat serangan lebih mahal dan lebih lambat.</div>` },
      ],
      kuis: [
        { tanya: 'Apa kelemahan utama voting Snapshot dibanding voting on-chain?',
          pilihan: ['Hasil Snapshot tidak mengeksekusi apa pun sendiri; harus dijalankan pihak lain, biasanya pemegang multisig', 'Snapshot memungut gas yang sangat mahal', 'Snapshot hanya bisa dipakai pemilik Bitcoin', 'Hasil Snapshot tidak bisa dilihat publik'],
          jelas: 'Snapshot gratis karena suara berupa tanda tangan yang disimpan di luar chain. Imbalannya, Anda harus percaya pelaksananya benar-benar menjalankan hasil voting.' },
        { tanya: 'Apa fungsi timelock dalam governance on-chain?',
          pilihan: ['Memberi jeda antara proposal lolos dan dieksekusi, supaya pengguna bisa keluar dan proposal jahat bisa dideteksi', 'Mengunci token pemilih selamanya', 'Mempercepat eksekusi proposal', 'Menentukan siapa pemenang voting'],
          jelas: 'Tanpa jeda, proposal jahat bisa langsung dijalankan. Beanstalk menunjukkan bahayanya jalur darurat yang tidak memberi waktu bereaksi.' },
        { tanya: 'Suplai token 500 juta. Aturan DAO: proposal lolos kalau suara "setuju" minimal 4% suplai dan lebih banyak dari suara "tolak". Hasil voting: setuju 18 juta, tolak 2 juta. Bagaimana nasib proposal?',
          pilihan: ['Gagal: suara setuju 18 juta belum mencapai kuorum 20 juta', 'Lolos karena 90% pemilih setuju', 'Lolos karena total suara masuk 20 juta', 'Gagal karena ada suara tolak'],
          jelas: 'Kuorum = 4% × 500 juta = 20 juta suara setuju. Mayoritas besar tidak cukup kalau partisipasinya di bawah kuorum.' },
        { tanya: 'Celah desain apa yang membuat serangan Beanstalk (April 2022) berhasil?',
          pilihan: ['Suara dihitung dari saldo sesaat, sehingga token pinjaman flash loan langsung bisa dipakai memilih lewat jalur darurat', 'Kunci privat pendiri dicuri', 'Oracle harga melaporkan angka yang salah', 'Validator Ethereum berkonspirasi'],
          jelas: 'Penyerang meminjam sekitar $1 miliar, menguasai lebih dari dua pertiga suara, dan meloloskan proposalnya dalam satu transaksi. Menghitung suara dari saldo pada blok di masa lalu dan menambah timelock menutup celah ini.' },
        { tanya: 'Mendelegasikan suara di sebuah DAO berarti…',
          pilihan: ['Menitipkan hak suara kepada orang lain tanpa menyerahkan kepemilikan token', 'Menjual token kepada delegasi', 'Mengunci token selama empat tahun', 'Membakar token agar suara orang lain lebih besar'],
          jelas: 'Token tetap di dompet Anda dan hak suara bisa ditarik kembali. Delegasi menaikkan partisipasi, tetapi juga bisa memusatkan kuasa pada sedikit delegasi.' },
        { tanya: 'Kas sebuah DAO disimpan di multisig 4 dari 7. Artinya…',
          pilihan: ['Setiap transaksi butuh tanda tangan minimal 4 dari 7 pemegang kunci', 'Hanya 4 orang yang boleh melihat saldo', 'Kas dibagi rata ke 7 dompet', 'Transaksi butuh 7 tanda tangan dan 4 hari'],
          jelas: 'Satu kunci yang bocor tidak cukup untuk menguras kas. Tetapi kalau 4 pemegang kunci bersekongkol atau diretas, dana tetap bisa dipindahkan. Karena itu identitas dan independensi para penandatangan penting.' },
      ] },
  ],
});
