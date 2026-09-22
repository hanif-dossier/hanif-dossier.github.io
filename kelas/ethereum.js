// kelas/ethereum.js, data kelas kategori Ethereum & Smart Contract. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'ethereum', urut: 3, nama: 'Ethereum & Smart Contract', warna: '#6b7fb5',
  ringkas: 'Cara Ethereum menjalankan program bersama: gas dan staking, smart contract, jenis akun, rollup, sampai standar token yang dipakai hampir semua aplikasi crypto.',
  kursus: [

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'ethereum-uang-program', judul: 'Ethereum: Uang yang Bisa Diprogram',
      ringkas: 'Ethereum adalah satu komputer bersama yang dijalankan ribuan node. Anda belajar cara kerjanya, kenapa setiap langkah dibayar dengan gas, dan bagaimana Ethereum berpindah ke Proof of Stake.',
      pelajaran: [
        { judul: 'Gagasan Ethereum dan EVM: satu komputer untuk semua', isi: `
<h3>Konsepnya</h3>
<p>Bitcoin membuktikan satu hal penting: orang asing di seluruh dunia bisa menyepakati satu buku besar tanpa bank di tengahnya. Tapi buku besar Bitcoin sengaja dibuat sederhana. Isinya hampir hanya satu jenis catatan: siapa mengirim berapa ke siapa.</p>
<p>Pada akhir 2013, Vitalik Buterin menulis whitepaper yang mengajukan pertanyaan lanjutan. Kalau ribuan komputer bisa sepakat soal saldo, kenapa tidak sekalian sepakat soal hasil sebuah program? Dari gagasan itu lahir Ethereum, yang jaringan utamanya berjalan sejak Juli 2015.</p>
<p>Cara paling mudah membayangkannya: Ethereum adalah <b>satu komputer bersama</b>. Siapa pun boleh memasang program di sana, dan siapa pun boleh memakainya. Tidak ada yang bisa mematikannya sendirian, karena komputer itu tidak berdiri di satu tempat. Ia adalah hasil kesepakatan ribuan node yang menjalankan perhitungan yang sama.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Node</b>: komputer yang menjalankan perangkat lunak Ethereum dan menyimpan salinan datanya. Setiap node memeriksa sendiri setiap transaksi.</li>
<li><b>EVM (Ethereum Virtual Machine)</b>: "mesin" aturan yang sama persis di setiap node. EVM menerima instruksi program, menjalankannya langkah demi langkah, lalu menghasilkan keadaan baru.</li>
<li><b>State (keadaan)</b>: potret seluruh data Ethereum pada satu saat. Isinya saldo setiap akun, kode setiap program, dan data yang disimpan program itu.</li>
<li><b>Smart contract</b>: program yang tinggal di dalam state dan dijalankan oleh EVM. Kelas berikutnya membahasnya lebih dalam.</li>
<li><b>ETH</b>: aset asli jaringan. Fungsinya membayar biaya komputasi dan menjadi jaminan para validator (di-stake sejak Beacon Chain, Desember 2020; mengamankan jaringan utama sejak The Merge, 2022).</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Setiap transaksi adalah perintah untuk mengubah state. Misalnya "pindahkan 1 ETH dari A ke B", atau "jalankan fungsi tukar di program X". EVM di setiap node menjalankan perintah itu. Karena EVM di semua node identik dan programnya harus deterministik, hasilnya pasti sama di mana pun. Kalau ada node yang melaporkan hasil berbeda, node lain langsung tahu ada yang salah.</p>
<p>Kenapa semua node harus menghitung ulang? Di situlah letak kepercayaannya. Anda tidak perlu percaya pada satu server. Anda cukup percaya bahwa aturan EVM dijalankan banyak pihak yang saling memeriksa. Bayarannya: komputer bersama ini lambat dan mahal dibanding server biasa, karena satu perhitungan diulang ribuan kali.</p>
<p>EVM kemudian menjadi standar de facto. Banyak jaringan lain, seperti BNB Chain, Avalanche C-Chain, Arbitrum, dan Base, menjalankan EVM yang kompatibel. Akibatnya, program dan dompet yang sama bisa dipakai di banyak jaringan sekaligus.</p>

<h3>Contoh</h3>
<p>Bayangkan buku kas arisan yang disalin ke 1.000 orang. Setiap ada setoran, semua orang mencatat dan menghitung ulang saldonya. Kalau satu orang menulis angka palsu, catatannya tidak cocok dengan 999 salinan lain dan langsung ditolak.</p>
<p>Ethereum memperluas cara ini. Yang disalin bukan hanya saldo, tetapi juga aturan main arisannya. Contohnya: "yang terlambat setor didenda", atau "giliran penerima berjalan otomatis sesuai urutan". Aturan itu dijalankan semua salinan secara bersamaan, dan tidak ada bendahara yang bisa mengubahnya diam-diam.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> "Komputer dunia" adalah kiasan, bukan komputer yang kuat. Kapasitas Ethereum sengaja dibatasi supaya node tetap bisa dijalankan dengan perangkat biasa, sehingga biaya bisa naik tajam saat ramai. Selain itu, "terdesentralisasi" bukan keadaan hitam-putih. Seberapa tersebar node, validator, dan pengembangnya selalu layak Anda periksa sendiri, bukan diterima begitu saja.</div>
` },

        { judul: 'Gas, gwei, dan EIP-1559: kenapa setiap langkah ada harganya', isi: `
<h3>Konsepnya</h3>
<p>Di komputer bersama, setiap langkah perhitungan dikerjakan ribuan node. Kalau langkah itu gratis, satu orang iseng bisa mengirim program yang berputar tanpa henti dan membuat seluruh jaringan macet. Ethereum mencegahnya dengan satu aturan sederhana: <b>setiap langkah komputasi ada harganya</b>. Satuan harganya disebut <b>gas</b>.</p>
<p>Gas bukan koin. Gas adalah ukuran kerja, mirip kilometer pada argo taksi. Transfer ETH biasa ke akun biasa (EOA) memakai 21.000 gas; kalau penerimanya kontrak atau dompet pintar, gasnya bisa lebih besar. Menukar token di DEX bisa memakai lebih dari seratus ribu gas, karena programnya lebih rumit. Anda membayar gas itu dengan ETH.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Gwei</b>: pecahan ETH untuk menyebut harga gas. 1 gwei = 0,000000001 ETH (satu per satu miliar).</li>
<li><b>Gas limit transaksi</b>: batas gas yang Anda izinkan untuk satu transaksi. Kalau habis di tengah jalan, transaksi gagal dan perubahannya dibatalkan, tapi gas yang sudah terpakai tetap dibayar.</li>
<li><b>Base fee</b>: harga dasar per gas yang ditetapkan otomatis oleh protokol di setiap blok. Base fee <b>dibakar</b>, artinya ETH itu dihapus dari peredaran.</li>
<li><b>Priority fee (tip)</b>: tambahan per gas untuk pembuat blok, supaya transaksi Anda didahulukan.</li>
<li><b>Gas limit blok</b>: batas total gas dalam satu blok, yang nilainya disepakati para pembuat blok.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Sejak pembaruan London pada Agustus 2021, Ethereum memakai mekanisme <b>EIP-1559</b>. Rumus biayanya:</p>
<pre>biaya = gas terpakai × (base fee + priority fee)</pre>
<p>Base fee bergerak sendiri. Setiap blok punya target pemakaian, yaitu separuh gas limit blok. Kalau blok sebelumnya lebih penuh dari target, base fee naik, paling banyak 12,5% per blok. Kalau lebih sepi, base fee turun. Jadi harga menyesuaikan diri dengan permintaan, blok demi blok.</p>
<p>Kenapa base fee dibakar, bukan diberikan ke pembuat blok? Kalau diberikan, pembuat blok punya insentif mengisi blok dengan transaksi palsu supaya harga naik. Dengan dibakar, tidak ada yang untung dari harga yang dibuat-buat. Efek sampingnya, saat jaringan ramai, ETH yang dibakar bisa melebihi ETH baru yang diterbitkan, sehingga suplai bersih menyusut. Saat sepi, yang terjadi sebaliknya.</p>
<p>Kenapa ada batas gas per blok? Karena setiap node harus sanggup memproses dan meneruskan setiap blok tepat waktu. Blok yang terlalu besar hanya sanggup diurus pusat data mahal, dan jaringan pelan-pelan menjadi terpusat. Gas limit blok bertahan di 30 juta dari 2021 sampai awal 2025, lalu dinaikkan bertahap sepanjang 2025 setelah perangkat lunak node dinilai sanggup.</p>

<h3>Contoh</h3>
<p>Anda mengirim ETH saat base fee 10 gwei dan memberi tip 1 gwei. Biayanya 21.000 × 11 gwei = 231.000 gwei, atau 0,000231 ETH. Dari jumlah itu, 210.000 gwei dibakar dan 21.000 gwei menjadi milik pembuat blok.</p>
<p>Di dompet, Anda biasanya juga menetapkan "max fee", yaitu batas atas harga per gas. Kalau base fee ternyata lebih rendah dari perkiraan, selisihnya tidak ditagih.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> EIP-1559 membuat biaya lebih mudah ditebak, bukan lebih murah. Saat permintaan melonjak, base fee tetap bisa naik berkali lipat dalam hitungan menit. Transaksi yang gagal tetap memakan biaya. Dan "ETH deflasi" bukan jaminan: arah suplai bergantung pada ramai-tidaknya jaringan, yang bisa berubah dari tahun ke tahun.</div>
` },

        { judul: 'The Merge, validator, dan staking: dari penambang ke penjamin', isi: `
<h3>Konsepnya</h3>
<p>Komputer bersama butuh cara memutuskan siapa yang boleh menambahkan blok berikutnya. Sampai 2022, Ethereum memakai Proof of Work seperti Bitcoin: penambang berlomba menghabiskan listrik untuk memecahkan teka-teki. Pada 15 September 2022, lewat peristiwa yang disebut <b>The Merge</b>, Ethereum pindah ke <b>Proof of Stake</b>. Penambang diganti <b>validator</b> yang menaruh ETH sebagai jaminan.</p>
<p>Logikanya berubah dari "buktikan kamu sudah mengeluarkan biaya listrik" menjadi "taruh modalmu sebagai taruhan". Validator yang jujur mendapat imbalan. Validator yang curang kehilangan sebagian jaminannya. Konsumsi energi Ethereum turun lebih dari 99,9%, karena yang dibutuhkan kini hanya komputer biasa yang terus menyala.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Beacon Chain</b>: rantai Proof of Stake yang sudah berjalan terpisah sejak Desember 2020. The Merge menyatukan rantai lama dengan Beacon Chain, sehingga riwayat transaksi tetap utuh.</li>
<li><b>Validator</b>: peserta yang men-stake minimal <b>32 ETH</b> untuk mengusulkan blok dan memberi suara atas blok.</li>
<li><b>Slot dan epoch</b>: satu slot berlangsung 12 detik, dan di setiap slot satu validator terpilih untuk mengusulkan blok. Satu epoch berisi 32 slot.</li>
<li><b>Finalitas</b>: titik ketika blok tidak bisa dibatalkan kecuali validator dengan total setidaknya sepertiga seluruh ETH yang di-stake melanggar aturan dan terkena slashing. Dalam kondisi normal tercapai sekitar 13 menit.</li>
<li><b>Slashing</b>: pemotongan jaminan untuk pelanggaran yang bisa dibuktikan, misalnya menandatangani dua blok berbeda untuk slot yang sama.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Imbalan validator datang dari tiga sumber: ETH baru yang diterbitkan protokol, tip dari pengguna, dan MEV, yaitu nilai tambahan dari cara mengurutkan transaksi. Ada tiga cara umum untuk ikut staking:</p>
<ol>
<li><b>Solo staking</b>: menjalankan validator sendiri dengan 32 ETH. Paling mandiri, tetapi Anda harus menjaga komputer tetap menyala dan perangkat lunaknya terbarui.</li>
<li><b>Liquid staking</b>: menitipkan ETH ke protokol seperti Lido dan menerima token pengganti (misalnya stETH) yang bisa dipakai di DeFi.</li>
<li><b>Staking di bursa</b>: paling mudah, tetapi ETH Anda dipegang pihak ketiga.</li>
</ol>

<h3>Contoh: peta jalan setelah The Merge</h3>
<table>
<tr><th>Pembaruan</th><th>Waktu</th><th>Isi utama</th></tr>
<tr><td>Shapella</td><td>April 2023</td><td>Penarikan ETH yang di-stake dibuka</td></tr>
<tr><td>Dencun</td><td>Maret 2024</td><td>EIP-4844 memperkenalkan <b>blob</b>, ruang data murah untuk layer 2</td></tr>
<tr><td>Pectra</td><td>Mei 2025</td><td>Saldo efektif satu validator bisa sampai 2.048 ETH, kapasitas blob ditambah, dan EIP-7702 untuk dompet pintar</td></tr>
<tr><td>Fusaka</td><td>Desember 2025</td><td>PeerDAS: node cukup memeriksa sampel data blob, sehingga kapasitas blob bisa dinaikkan lagi</td></tr>
</table>
<p>Polanya konsisten. Sejak 2020, Ethereum memilih menambah kapasitas terutama lewat layer 2, dan layer 1 menyediakan keamanan serta ruang data murah untuk mereka. Sejak 2025, kapasitas layer 1 sendiri juga dinaikkan bertahap, misalnya lewat kenaikan gas limit blok. Syarat minimal validator tetap 32 ETH setelah Pectra. Yang berubah hanya batas atasnya, supaya operator besar tidak perlu menjalankan ribuan validator terpisah.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Staking bukan tabungan tanpa risiko. Validator bisa terkena slashing, token liquid staking bisa diperdagangkan di bawah harga ETH saat pasar panik, dan titipan di bursa bergantung pada kejujuran bursa itu. Imbal hasilnya juga berubah-ubah: makin banyak ETH yang di-stake, makin kecil bagian tiap staker. Peta jalan pun bisa bergeser. Periksa ethereum.org untuk status pembaruan terbaru.</div>
` },
      ],
      kuis: [
        { tanya: 'Kenapa setiap node Ethereum menjalankan ulang setiap transaksi, padahal cara ini lambat?',
          pilihan: ['Supaya hasilnya bisa diperiksa banyak pihak tanpa perlu memercayai satu server', 'Karena perangkat lunaknya belum sempat dioptimalkan', 'Supaya biaya gas selalu gratis', 'Karena setiap node menyimpan blockchain yang berbeda'],
          jelas: 'Kepercayaan di Ethereum datang dari banyak pihak yang menghitung hal yang sama dan saling memeriksa. Harga yang dibayar adalah kecepatan dan biaya.' },
        { tanya: 'Transfer ETH biasa memakai 21.000 gas. Jika base fee 20 gwei dan tip 2 gwei, berapa biayanya?',
          pilihan: ['462.000 gwei (0,000462 ETH)', '420.000 gwei (0,00042 ETH)', '42.000 gwei (0,000042 ETH)', '22 gwei'],
          jelas: 'Biaya = gas terpakai × (base fee + tip) = 21.000 × 22 gwei. Dari jumlah itu, 420.000 gwei dibakar dan 42.000 gwei menjadi tip untuk pembuat blok.' },
        { tanya: 'Kenapa EIP-1559 membakar base fee, bukan memberikannya ke pembuat blok?',
          pilihan: ['Supaya pembuat blok tidak punya insentif menaikkan harga dengan transaksi palsu', 'Supaya transaksi menjadi gratis', 'Karena pembuat blok dilarang menerima imbalan apa pun', 'Supaya ETH baru bisa dicetak lebih banyak'],
          jelas: 'Kalau base fee masuk ke kantong pembuat blok, ia bisa mengisi blok dengan transaksinya sendiri agar harga naik. Pembuat blok tetap mendapat tip dan imbalan staking.' },
        { tanya: 'Apa alasan utama Ethereum membatasi total gas per blok?',
          pilihan: ['Supaya node dengan perangkat biasa tetap sanggup memproses setiap blok, sehingga jaringan tidak terpusat', 'Supaya harga ETH naik', 'Karena blok Ethereum hanya boleh berisi satu transaksi', 'Supaya penambang Bitcoin bisa ikut memvalidasi'],
          jelas: 'Blok yang terlalu berat hanya sanggup diurus pusat data mahal. Batas gas menjaga agar banyak orang tetap bisa menjalankan node sendiri.' },
        { tanya: '"The Merge" pada September 2022 mengganti penambang dengan…',
          pilihan: ['Validator yang men-stake ETH sebagai jaminan', 'Bank sentral', 'Satu server milik Ethereum Foundation', 'Penambang berkartu grafis yang lebih hemat listrik'],
          jelas: 'Sejak The Merge, blok diusulkan validator yang menaruh minimal 32 ETH. Yang curang bisa kehilangan sebagian jaminannya lewat slashing.' },
        { tanya: 'Pembaruan Dencun (Maret 2024) membawa EIP-4844. Apa yang ditambahkannya?',
          pilihan: ['Blob, yaitu ruang data sementara yang murah untuk layer 2', 'Penarikan ETH yang di-stake', 'Peralihan dari Proof of Work ke Proof of Stake', 'Saldo validator hingga 2.048 ETH'],
          jelas: 'Penarikan staking dibuka Shapella (April 2023), peralihan ke Proof of Stake terjadi lewat The Merge (2022), dan batas 2.048 ETH datang bersama Pectra (Mei 2025).' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'smart-contract', judul: 'Apa Itu Smart Contract',
      ringkas: 'Program yang hidup di blockchain dan berjalan persis sesuai kodenya. Anda belajar sifatnya, cara membuat dan memakainya, serta batas-batas yang sering dilupakan.',
      pelajaran: [
        { judul: 'Definisi smart contract: mesin penjual otomatis di blockchain', isi: `
<h3>Konsepnya</h3>
<p><b>Smart contract</b> adalah program yang disimpan di blockchain dan dijalankan oleh jaringan, bukan oleh satu perusahaan. Istilahnya dipopulerkan ilmuwan komputer Nick Szabo pada 1990-an, jauh sebelum Ethereum ada. Namanya sedikit menyesatkan. Smart contract tidak "pintar", dan tidak selalu berupa kontrak hukum. Lebih tepat disebut <b>aturan yang menjalankan dirinya sendiri</b>.</p>
<p>Szabo memakai analogi mesin penjual otomatis. Masukkan uang pas, tekan tombol, minuman keluar. Anda tidak perlu mengenal pemilik mesin atau memercayai penjaga toko, karena aturannya sudah tertanam di mesin. Smart contract bekerja dengan cara serupa. Bedanya, "mesinnya" dijalankan ribuan node. Tidak ada pemilik yang bisa diam-diam mengubah aturan atau mengambil uang dari laci.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Deterministik</b>: masukan yang sama dan keadaan awal yang sama selalu menghasilkan keluaran yang sama, di node mana pun. Ini syarat mutlak. Kalau hasilnya bisa berbeda antar-node, jaringan tidak akan pernah sepakat.</li>
<li><b>Immutable (tidak bisa diubah)</b>: setelah dipasang, kode di sebuah alamat kontrak tidak bisa diedit. Tidak ada tombol "perbarui" seperti di aplikasi HP.</li>
<li><b>Upgradeable</b>: kontrak yang sejak awal <i>dirancang</i> agar logikanya bisa diganti, biasanya dengan pola proxy.</li>
<li><b>Proxy</b>: kontrak perantara yang menyimpan data dan meneruskan setiap panggilan ke kontrak logika. Admin bisa mengarahkan proxy ke kontrak logika baru. Alamatnya tetap sama, tetapi perilakunya berubah.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Kenapa sifat deterministik begitu penting? Karena sifat itulah yang membuat smart contract bisa dipercaya tanpa perlu percaya pada orang. Siapa pun bisa membaca kodenya dan menghitung sendiri apa yang akan terjadi. Konsekuensinya, smart contract tidak boleh melakukan hal yang hasilnya bisa berbeda di tiap komputer. Ia tidak bisa membuka situs web, membaca jam komputer lokal, atau membuat angka acak sungguhan dengan cara biasa.</p>
<p>Sifat tidak bisa diubah juga pedang bermata dua. Pengguna terlindungi dari pengembang yang tiba-tiba mengubah aturan. Tapi bug juga tidak bisa ditambal. Pola proxy lahir untuk menjembatani dua kebutuhan itu. Begitu kontrak bisa di-upgrade, janji "tidak bisa diubah" bergeser menjadi "tidak bisa diubah, kecuali oleh pemegang kunci admin". Pertanyaannya pindah ke: siapa pemegang kunci itu, dan berapa lama jeda sebelum perubahan berlaku?</p>

<h3>Contoh</h3>
<p>Berikut kontrak penjual minuman yang disederhanakan, ditulis dalam bahasa Solidity:</p>
<pre>contract MesinMinuman {
    uint256 public harga = 0.01 ether;
    mapping(address =&gt; uint256) public minumanMilik;

    function beli() external payable {
        require(msg.value == harga, "Uang harus pas");
        minumanMilik[msg.sender] += 1;
    }
}</pre>
<p>Siapa pun yang mengirim tepat 0,01 ETH ke fungsi <b>beli</b> mendapat satu minuman yang tercatat atas alamatnya. Kalau jumlahnya tidak pas, perintah <b>require</b> membatalkan seluruh transaksi dan ETH tidak berpindah. Perhatikan juga: kontrak ini tidak punya fungsi penarikan. ETH yang masuk akan terkunci selamanya, bahkan bagi pembuatnya. Kode berjalan persis sesuai tulisannya, termasuk kekurangannya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> "Tidak bisa diubah" hanya berlaku untuk kontrak yang memang tidak memakai proxy, dan banyak protokol DeFi besar bisa di-upgrade. Sebelum menaruh dana, periksa di penjelajah blok seperti Etherscan: apakah kontraknya proxy, siapa adminnya, dan apakah ada timelock, yaitu jeda wajib sebelum perubahan berlaku.</div>
` },

        { judul: 'Siklus hidup smart contract: dari kode sampai event', isi: `
<h3>Konsepnya</h3>
<p>Smart contract melewati beberapa tahap sebelum bisa Anda pakai lewat dompet. Memahami tahap-tahap ini membantu Anda membaca apa yang sebenarnya terjadi saat sebuah aplikasi meminta tanda tangan. Pemahaman ini juga membantu Anda menilai apakah sebuah proyek transparan atau tidak.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Menulis.</b> Pengembang menulis kode dalam bahasa tingkat tinggi. Yang paling banyak dipakai di Ethereum adalah <b>Solidity</b>, yang tampilannya mirip JavaScript. Alternatifnya <b>Vyper</b>, yang mirip Python dan sengaja dibuat lebih sederhana supaya lebih mudah diperiksa.</li>
<li><b>Kompilasi.</b> Compiler menerjemahkan kode menjadi <b>bytecode</b>, deretan instruksi mesin yang dimengerti EVM. Compiler juga menghasilkan <b>ABI</b> (Application Binary Interface), semacam daftar menu. ABI memberi tahu dompet dan aplikasi fungsi apa saja yang tersedia dan parameter apa yang dibutuhkan.</li>
<li><b>Deploy.</b> Bytecode dikirim lewat transaksi khusus tanpa alamat tujuan. Jaringan menjalankannya, menyimpan kodenya, dan memberi kontrak itu alamat sendiri. Alamat ini dihitung dari alamat pengirim dan nomor urut transaksinya, atau, bila dibuat kontrak lain lewat CREATE2, dari alamat kontrak pembuat itu, sebuah "salt", dan hash kode inisialisasinya. Sejak saat itu kodenya tidak bisa diedit.</li>
<li><b>Memanggil fungsi.</b> Ada dua jenis panggilan. Fungsi <i>baca</i> (view) hanya melihat data, tidak mengubah state, dan bisa dipanggil gratis lewat node. Fungsi <i>tulis</i> mengubah state, sehingga butuh transaksi bertanda tangan dan membayar gas.</li>
<li><b>Event dan log.</b> Saat sesuatu terjadi, kontrak bisa memancarkan <b>event</b>, misalnya "Transfer dari A ke B sebanyak X". Event disimpan sebagai <b>log</b> di tanda terima transaksi.</li>
</ol>
<pre>event Terjual(address indexed pembeli, uint256 jumlah);

emit Terjual(msg.sender, 1);   // dipanggil di dalam fungsi beli</pre>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Verifikasi kode</b>: pengembang mengunggah kode sumber ke penjelajah blok seperti Etherscan. Penjelajah mengompilasi ulang kode itu dan mencocokkannya dengan bytecode di chain. Kalau cocok, siapa pun bisa membaca kodenya dalam bentuk yang manusiawi.</li>
<li><b>Log</b>: catatan murah yang bisa dibaca aplikasi di luar chain, tetapi <i>tidak bisa</i> dibaca kontrak lain. Karena itu log cocok untuk riwayat dan notifikasi, bukan untuk data yang dipakai logika kontrak.</li>
<li><b>Revert</b>: pembatalan transaksi. Semua perubahan dikembalikan seperti semula, tetapi gas yang terpakai tetap dibayar.</li>
</ul>

<h3>Contoh</h3>
<p>Anda menukar USDC ke ETH di sebuah DEX. Situs DEX memakai ABI untuk menyusun perintah, lalu dompet Anda menandatanganinya. Transaksi masuk ke blok. EVM menjalankan bytecode kontrak DEX, memindahkan token, lalu memancarkan event "Swap". Situs DEX dan penjelajah blok membaca event itu untuk menampilkan riwayat Anda.</p>
<p>Sekarang andaikan harga bergerak melampaui batas slippage yang Anda tetapkan. Kontrak memanggil revert. Saldo token Anda tidak berubah, tapi biaya gas tetap terpotong. Itu sebabnya transaksi gagal di penjelajah blok tetap tercatat dengan biaya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Kontrak yang kodenya belum diverifikasi ibarat kotak hitam. Anda hanya melihat bytecode yang nyaris mustahil dibaca manusia. Itu tanda bahaya, bukan kekurangan kecil. Ingat juga batas verifikasi: ia hanya membuktikan bahwa kode yang Anda baca sama dengan kode yang berjalan. Verifikasi tidak membuktikan kode itu aman atau jujur.</div>
` },

        { judul: 'Batasan smart contract: oracle, biaya, dan kode yang bisa salah', isi: `
<h3>Konsepnya</h3>
<p>Smart contract kuat karena ia tertutup dan bisa ditebak. Sifat yang sama itulah sumber keterbatasannya. Ada tiga batasan yang perlu Anda pahami sebelum memercayakan uang pada sebuah kontrak.</p>

<h3>Cara kerjanya</h3>
<p><b>1. Tidak bisa melihat dunia luar.</b> Kontrak hanya tahu data yang ada di dalam blockchain. Ia tidak tahu harga Bitcoin di bursa, hasil pertandingan, atau cuaca besok. Kalau setiap node mengambil harga dari internet sendiri-sendiri, hasilnya bisa berbeda dan jaringan tidak akan sepakat. Solusinya adalah <b>oracle</b>: layanan yang membawa data dari luar ke dalam chain lewat transaksi, sehingga semua node membaca angka yang sama. Chainlink adalah contoh oracle yang banyak dipakai. Konsekuensinya, kontrak DeFi hanya sejujur oracle yang dipakainya.</p>
<p><b>2. Setiap langkah berbiaya.</b> Setiap operasi memakan gas. Yang paling mahal adalah menyimpan data baru secara permanen, karena data itu harus disimpan semua node. Karena itu pengembang berhemat: menyimpan seminimal mungkin, memindahkan perhitungan berat ke luar chain, dan hanya membuktikan hasilnya di dalam chain. Kontrak juga tidak bisa "bangun sendiri" sesuai jadwal. Harus ada yang mengirim transaksi untuk memicunya, dan orang itu membayar gas.</p>
<p><b>3. Kode adalah hukum, tapi kode bisa salah.</b> Semboyan "code is law" berarti kontrak berjalan persis sesuai tulisannya, tanpa hakim yang bisa membatalkan. Masalahnya, kode ditulis manusia, dan manusia keliru. Di mata EVM, celah dalam kode bukan pelanggaran aturan. Celah itu <i>adalah</i> aturannya.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Oracle</b>: penghubung data dunia luar ke blockchain.</li>
<li><b>Manipulasi oracle</b>: serangan dengan menggeser harga yang dibaca kontrak, misalnya lewat pool yang likuiditasnya tipis, lalu meminjam atau menukar dengan harga palsu itu.</li>
<li><b>Reentrancy</b>: celah ketika kontrak mengirim dana sebelum memperbarui catatan saldo, sehingga penyerang bisa memanggil ulang fungsi berkali-kali sebelum saldonya terpotong.</li>
<li><b>Audit</b>: pemeriksaan kode oleh pihak ketiga. Audit mengurangi risiko, tapi tidak menghapusnya.</li>
</ul>

<h3>Contoh</h3>
<p>Pada Juni 2016, proyek The DAO menampung dana investasi bersama dalam jumlah besar. Penyerang memanfaatkan celah reentrancy dan menguras sekitar 3,6 juta ETH. Komunitas terbelah. Sebagian memilih hard fork untuk mengembalikan dana, dan rantai itulah Ethereum yang Anda kenal sekarang. Sebagian lain menolak dengan alasan "kode adalah hukum", lalu melanjutkan rantai lama sebagai Ethereum Classic.</p>
<p>Pada November 2017, sebuah pustaka yang dipakai dompet multisig Parity tidak sengaja dimatikan oleh seorang pengguna. Akibatnya lebih dari 500 ribu ETH (sekitar 514 ribu) di ratusan dompet yang bergantung pada pustaka itu terkunci sampai sekarang. Tidak ada yang mencuri. Kodenya hanya berjalan sesuai tulisannya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak ada kontrak yang terbukti bebas bug. Audit, rekam jejak panjang tanpa insiden, program bug bounty, dan batas maksimum dana adalah tanda baik, bukan jaminan. Perhatikan juga ketergantungannya: kontrak yang kodenya aman tetap bisa rugi kalau oracle, bridge, atau token yang dipakainya bermasalah.</div>
` },
      ],
      kuis: [
        { tanya: 'Kenapa smart contract harus deterministik?',
          pilihan: ['Supaya semua node mendapat hasil yang sama dan bisa sepakat', 'Supaya kodenya bisa diubah kapan saja', 'Supaya biaya gasnya selalu tetap', 'Supaya kontrak bisa membaca harga langsung dari internet'],
          jelas: 'Setiap node menjalankan kontrak yang sama. Kalau hasilnya bisa berbeda antar-node, jaringan tidak akan pernah menyepakati state yang baru.' },
        { tanya: 'Sebuah protokol mengklaim kontraknya "tidak bisa diubah", tapi kontraknya memakai pola proxy. Apa artinya?',
          pilihan: ['Logikanya bisa diganti pemegang kunci admin, jadi perlu dicek siapa adminnya dan adakah timelock', 'Kontraknya pasti bebas bug', 'Proxy membuat kontrak gratis dipakai', 'Tidak ada bedanya dengan kontrak biasa'],
          jelas: 'Proxy meneruskan panggilan ke kontrak logika yang bisa diganti. Janji "tidak bisa diubah" hanya sekuat kendali atas kunci admin itu.' },
        { tanya: 'Setelah kode Solidity dikompilasi, apa yang sebenarnya dipasang (deploy) ke Ethereum?',
          pilihan: ['Bytecode; ABI dipakai aplikasi untuk tahu cara memanggil fungsinya', 'Kode Solidity asli apa adanya', 'Berkas PDF perjanjian hukum', 'Gambar tampilan aplikasi'],
          jelas: 'EVM hanya memahami bytecode. Kode sumber yang bisa dibaca manusia baru terlihat kalau pengembang memverifikasinya di penjelajah blok.' },
        { tanya: 'Event dan log pada smart contract paling cocok dipakai untuk…',
          pilihan: ['Memberi tahu aplikasi di luar chain tentang apa yang terjadi, misalnya riwayat transfer', 'Menyimpan data yang harus dibaca kontrak lain', 'Membayar gas transaksi', 'Menyimpan kunci privat pengguna'],
          jelas: 'Log murah dan mudah dibaca aplikasi di luar chain, tetapi kontrak lain tidak bisa membacanya. Data yang dipakai logika kontrak harus disimpan di storage.' },
        { tanya: 'Kenapa smart contract butuh oracle untuk mengetahui harga ETH di bursa?',
          pilihan: ['Kontrak tidak bisa mengakses internet; kalau setiap node mengambil data sendiri, hasilnya bisa berbeda', 'Karena harga ETH dirahasiakan bursa', 'Karena oracle membuat transaksi gratis', 'Karena hukum melarang blockchain membaca harga'],
          jelas: 'Oracle memasukkan data dari luar lewat transaksi, sehingga semua node membaca angka yang sama. Akibatnya, keamanan kontrak ikut bergantung pada oracle itu.' },
        { tanya: 'Peretasan The DAO (2016) paling tepat disimpulkan sebagai…',
          pilihan: ['Bukti bahwa kode berjalan persis sesuai tulisannya, termasuk celahnya', 'Bukti bahwa smart contract mustahil diretas', 'Bukti bahwa audit selalu menjamin keamanan', 'Kejadian yang membuat Ethereum pindah ke Proof of Stake'],
          jelas: 'Penyerang memakai celah reentrancy untuk menguras sekitar 3,6 juta ETH. Hard fork untuk mengembalikan dana memecah komunitas dan melahirkan Ethereum Classic.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'jenis-akun', judul: 'Jenis Akun: EOA, Kontrak & Account Abstraction',
      ringkas: 'Ethereum mengenal akun yang dikendalikan kunci privat dan akun yang dikendalikan kode. Account abstraction mulai menyatukan keduanya dan mengubah cara Anda memakai dompet.',
      pelajaran: [
        { judul: 'EOA vs contract account: siapa yang bisa memulai transaksi', isi: `
<h3>Konsepnya</h3>
<p>Setiap alamat di Ethereum adalah sebuah <b>akun</b>. Ada dua jenis, dan bedanya menentukan siapa yang memegang kendali.</p>
<ul>
<li><b>EOA (Externally Owned Account)</b>: akun yang dikendalikan <b>kunci privat</b>. Dompet seperti MetaMask atau Rabby membuat akun jenis ini. Siapa pun yang memegang kunci privat atau seed phrase-nya memegang seluruh isi akun.</li>
<li><b>Contract account</b>: akun yang dikendalikan <b>kode</b>. Tidak ada kunci privat di baliknya. Yang ada hanya smart contract yang menentukan apa yang boleh dan tidak boleh terjadi.</li>
</ul>
<p>Keduanya bisa menyimpan ETH dan token. Alamat keduanya berformat sama: 0x diikuti 40 karakter heksadesimal. Dari luar tampak mirip. Perbedaan mendasarnya satu: <b>hanya EOA yang bisa memulai transaksi</b>.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Nonce</b>: nomor urut di setiap akun. Pada EOA, nonce menghitung berapa transaksi yang sudah dikirim. Transaksi pertama bernonce 0, berikutnya 1, dan seterusnya. Pada contract account, nonce menghitung berapa kontrak yang sudah dibuatnya.</li>
<li><b>Tanda tangan digital</b>: bukti matematis bahwa transaksi disetujui pemegang kunci privat, tanpa membuka kunci itu.</li>
<li><b>Chain ID</b>: nomor pengenal jaringan yang ikut ditandatangani, supaya transaksi untuk Ethereum tidak bisa diputar ulang di jaringan lain.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Kontrak itu pasif. Ia seperti mesin penjual yang diam sampai ada orang memasukkan koin. Kontrak tidak bisa bangun sendiri lalu mengirim transaksi. Tapi begitu dipanggil, kontrak boleh memanggil kontrak lain, yang memanggil kontrak lain lagi, semuanya dalam satu transaksi. Rantai panggilan itu selalu berawal dari satu EOA yang menandatangani dan membayar gas.</p>
<p>Nonce punya dua tugas. Pertama, mencegah <b>replay</b>: transaksi bertanda tangan yang sama tidak bisa dikirim dua kali, karena nonce-nya sudah terpakai. Kedua, menjaga urutan: transaksi bernonce 5 tidak akan diproses sebelum nonce 4 selesai.</p>

<h3>Contoh</h3>
<p>Anda mengirim transaksi bernonce 12 dengan biaya terlalu rendah, sehingga tidak kunjung masuk blok. Lalu Anda mengirim transaksi lain, dan dompet memberinya nonce 13. Transaksi kedua ikut macet, karena harus menunggu nonce 12. Tombol "Speed up" atau "Cancel" di dompet sebenarnya mengirim transaksi baru dengan <i>nonce yang sama</i> dan biaya lebih tinggi. Mana pun yang masuk blok duluan, yang lain otomatis tidak sah.</p>
<p>Contoh lain: dompet multisig seperti Safe adalah contract account. Aturannya, misalnya, "dana baru bisa keluar kalau 2 dari 3 pemilik setuju". Para pemilik menandatangani persetujuan dengan EOA masing-masing. Salah satu dari mereka lalu mengirim transaksi ke kontrak Safe, dan kontrak itulah yang memeriksa apakah syaratnya terpenuhi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> EOA punya satu titik gagal, yaitu kunci privat. Hilang berarti akses hilang selamanya. Bocor berarti isinya bisa dikuras, dan tidak ada tombol "lupa kata sandi". Contract account lebih fleksibel, tetapi keamanannya bergantung pada kode kontraknya. Sejak pembaruan Pectra (Mei 2025), EOA juga bisa menempelkan kode, sehingga garis pemisah dua jenis akun ini mulai kabur. Pelajaran berikutnya membahasnya.</div>
` },

        { judul: 'Account abstraction: ERC-4337, EIP-7702, dan dompet pintar', isi: `
<h3>Konsepnya</h3>
<p>Aturan EOA itu kaku. Satu kunci mengendalikan segalanya. Gas harus dibayar dengan ETH. Setiap aksi butuh satu transaksi terpisah. Bagi pengguna baru, ini tiga penghalang besar: menjaga seed phrase dengan sempurna, membeli ETH dulu sebelum bisa memindahkan USDC, dan menandatangani berkali-kali untuk satu urusan.</p>
<p><b>Account abstraction</b> adalah gagasan agar aturan akun ditentukan kode, bukan dipatok protokol. Kalau akun Anda berupa smart contract, Anda bisa menulis aturannya sendiri. Siapa yang boleh menandatangani, bagaimana memulihkan akses, siapa yang membayar gas: semuanya bisa diatur.</p>

<h3>Cara kerjanya</h3>
<p><b>ERC-4337</b> (aktif di jaringan utama sejak Maret 2023) mewujudkan gagasan ini tanpa mengubah aturan inti Ethereum. Alurnya:</p>
<ol>
<li>Anda tidak mengirim transaksi biasa, melainkan <b>UserOperation</b>: pesan berisi niat Anda, ditandatangani dengan cara apa pun yang diterima dompet pintar Anda.</li>
<li><b>Bundler</b> mengumpulkan banyak UserOperation dan mengirimkannya sebagai satu transaksi ke kontrak <b>EntryPoint</b>. Bundler inilah EOA yang memulai transaksi.</li>
<li>EntryPoint meminta dompet pintar Anda memeriksa tanda tangan, lalu menjalankan perintahnya.</li>
<li>Kalau ada <b>paymaster</b>, kontrak inilah yang menanggung gas. Paymaster bisa menagih Anda dalam USDC, atau menggratiskannya karena disponsori aplikasi.</li>
</ol>
<p><b>EIP-7702</b> (bagian dari pembaruan Pectra, Mei 2025) menempuh jalan lain. EOA yang sudah ada bisa menandatangani "delegasi" ke sebuah kontrak. Setelah itu, alamat EOA tersebut berperilaku seperti dompet pintar, tanpa pindah alamat dan tanpa memindahkan aset. Delegasi berlaku sampai diganti atau dicabut.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Smart wallet</b>: dompet yang berupa smart contract.</li>
<li><b>Gasless</b>: pengguna tidak membayar gas sendiri. Gasnya tetap ada, hanya dibayar pihak lain.</li>
<li><b>Batch</b>: beberapa aksi dalam satu transaksi, misalnya approve lalu swap sekaligus.</li>
<li><b>Social recovery</b>: akses dipulihkan oleh "wali" yang Anda tunjuk sendiri, misalnya perangkat kedua atau orang tepercaya. Biasanya butuh persetujuan beberapa wali dan ada masa tunggu.</li>
<li><b>Session key</b>: kunci sementara dengan izin terbatas, misalnya hanya untuk satu game selama satu jam.</li>
</ul>

<h3>Contoh</h3>
<p>Seorang pengguna baru mendaftar ke sebuah game dengan passkey di HP-nya. Aplikasi membuatkan dompet pintar, dan paymaster milik aplikasi menanggung gas transaksi pertamanya. Pengguna itu tidak pernah melihat seed phrase dan tidak perlu membeli ETH. Kalau HP-nya hilang, dua dari tiga wali yang ia tunjuk bisa menyetujui kunci baru setelah masa tunggu beberapa hari. Selama masa tunggu, pemilik asli masih bisa membatalkan pemulihan kalau ternyata itu upaya penipuan.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Dompet pintar menambah kode, dan kode bisa bercelah. Paymaster yang menggratiskan gas bisa berhenti kapan saja. Untuk EIP-7702 ada dua jebakan penting. Pertama, kunci privat asli EOA tetap berkuasa penuh, jadi social recovery tidak menyelamatkan Anda kalau kunci itu bocor. Kedua, menandatangani delegasi ke kontrak jahat sama dengan menyerahkan seluruh akun, dan penipu sudah memakai cara ini sejak 2025. Jangan pernah menyetujui permintaan "upgrade akun" dari situs yang tidak Anda kenal.</div>
` },
      ],
      kuis: [
        { tanya: 'Tanpa account abstraction, siapa yang bisa memulai sebuah transaksi di Ethereum?',
          pilihan: ['Hanya EOA, yaitu akun yang dikendalikan kunci privat', 'Kontrak apa pun, kapan saja ia mau', 'Hanya Ethereum Foundation', 'Siapa pun, tanpa perlu tanda tangan'],
          jelas: 'Kontrak itu pasif dan hanya bergerak saat dipanggil. Setiap rantai panggilan berawal dari satu EOA yang menandatangani dan membayar gas.' },
        { tanya: 'Transaksi bernonce 7 Anda macet karena biayanya terlalu rendah. Apa yang terjadi pada transaksi bernonce 8 yang Anda kirim sesudahnya?',
          pilihan: ['Ikut menunggu sampai nonce 7 masuk blok atau diganti', 'Langsung diproses lebih dulu', 'Otomatis membatalkan transaksi nonce 7', 'Dikembalikan ke dompet dengan biaya dua kali lipat'],
          jelas: 'Nonce menjaga urutan. Transaksi dari satu akun diproses berurutan, jadi nonce 8 tidak bisa masuk sebelum nonce 7 selesai.' },
        { tanya: 'Tombol "Speed up" di dompet sebenarnya melakukan apa?',
          pilihan: ['Mengirim transaksi baru dengan nonce yang sama dan biaya lebih tinggi', 'Meminta validator bekerja lebih cepat', 'Membeli ETH tambahan secara otomatis', 'Memindahkan transaksi ke layer 2'],
          jelas: 'Karena satu nonce hanya bisa dipakai sekali, versi berbiaya lebih tinggi akan dipilih pembuat blok dan versi lama otomatis tidak sah.' },
        { tanya: 'Di ERC-4337, apa tugas paymaster?',
          pilihan: ['Menanggung biaya gas untuk pengguna, misalnya ditagih dalam USDC atau disponsori aplikasi', 'Menyimpan seed phrase pengguna', 'Mengurutkan blok di Ethereum', 'Mencetak ETH baru untuk pengguna baru'],
          jelas: 'Paymaster membuat pengalaman "gasless". Gasnya tetap dibayar, hanya oleh pihak lain atau dengan token lain.' },
        { tanya: 'Apa yang dimungkinkan EIP-7702 (bagian dari Pectra, Mei 2025)?',
          pilihan: ['EOA yang sudah ada bisa mendelegasikan perilakunya ke kode kontrak tanpa pindah alamat', 'Kunci privat dihapus dari semua akun', 'Syarat validator naik menjadi 64 ETH', 'ERC-20 diganti standar token baru'],
          jelas: 'Dengan EIP-7702, alamat lama bisa mendapat fitur dompet pintar seperti batch dan sponsor gas, tanpa memindahkan aset ke alamat baru.' },
        { tanya: 'Dompet Anda memakai EIP-7702 dan fitur social recovery. Kenapa fitur itu tidak menyelamatkan Anda jika kunci privat asli bocor?',
          pilihan: ['Kunci privat asli EOA tetap berkuasa penuh atas akun', 'Social recovery hanya berlaku di Bitcoin', 'Wali tidak boleh lebih dari satu orang', 'EIP-7702 mematikan semua tanda tangan'],
          jelas: 'Delegasi menambah kemampuan, tetapi tidak mencabut kuasa kunci privat asli. Siapa pun yang memegangnya tetap bisa menguras akun atau mengganti delegasinya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'utxo-vs-akun', judul: 'Model UTXO vs Model Akun',
      ringkas: 'Bitcoin dan Ethereum mencatat saldo dengan cara berbeda. Pilihan desain ini memengaruhi privasi, kecepatan, dan jenis aplikasi yang bisa dibangun.',
      pelajaran: [
        { judul: 'Dua cara mencatat saldo: uang kertas vs rekening bank', isi: `
<h3>Konsepnya</h3>
<p>Setiap blockchain harus menjawab satu pertanyaan dasar: bagaimana mencatat siapa punya berapa? Ada dua jawaban besar.</p>
<p><b>Model UTXO</b> (Unspent Transaction Output, atau "keluaran transaksi yang belum dibelanjakan") dipakai Bitcoin. Model ini mirip <b>uang kertas di dompet</b>. Blockchain tidak menyimpan angka "saldo Anda". Yang disimpan adalah potongan-potongan uang yang belum dibelanjakan, masing-masing terkunci untuk pemiliknya. Saldo Anda hanyalah jumlah semua potongan yang bisa Anda buka. Angka itu dihitung dompet, bukan dicatat jaringan.</p>
<p><b>Model akun</b> dipakai Ethereum dan mirip <b>rekening bank</b>. Jaringan menyimpan satu daftar besar: alamat ini saldonya sekian. Transaksi mengurangi angka di satu baris dan menambah angka di baris lain.</p>

<h3>Cara kerjanya</h3>
<p>Di model UTXO, setiap transaksi <b>menghabiskan</b> satu atau lebih potongan lama secara utuh, lalu <b>menciptakan</b> potongan baru. Sama seperti uang kertas: Anda tidak bisa merobek lembaran seratus ribu untuk membayar tujuh puluh ribu. Anda menyerahkan lembaran utuh, lalu menerima kembalian. Di Bitcoin, kembalian itu adalah output baru yang dikirim ke alamat Anda sendiri. Biaya transaksi pun tidak ditulis terang-terangan. Biayanya adalah selisih antara total input dan total output, dan selisih itu diambil penambang.</p>
<p>Di model akun, transaksi cukup berbunyi "kurangi saldo A sebanyak X, tambahkan ke B". Tidak ada kembalian. Agar transaksi yang sama tidak diproses dua kali, setiap akun punya <b>nonce</b>, yaitu nomor urut transaksi.</p>

<h3>Contoh</h3>
<p>Andi memegang dua UTXO: 0,5 BTC dan 0,3 BTC. Ia ingin mengirim 0,6 BTC ke Budi. Dompetnya memakai kedua UTXO sebagai input (total 0,8 BTC), lalu membuat dua output: 0,6 BTC untuk Budi dan 0,1998 BTC kembalian untuk Andi. Selisih 0,0002 BTC menjadi biaya untuk penambang. Kedua UTXO lama kini habis terpakai. Yang tersisa hanyalah dua UTXO baru.</p>
<p>Di Ethereum, kalau Andi punya 0,8 ETH dan mengirim 0,6 ETH ke Budi, catatannya langsung berubah. Saldo Andi menjadi 0,2 ETH dikurangi biaya gas, saldo Budi bertambah 0,6 ETH, dan nonce Andi naik satu.</p>

<table>
<tr><th>Aspek</th><th>UTXO (Bitcoin)</th><th>Akun (Ethereum)</th></tr>
<tr><td>Yang dicatat</td><td>Potongan uang yang belum dibelanjakan</td><td>Saldo per alamat</td></tr>
<tr><td>Saldo</td><td>Dihitung dompet dari banyak UTXO</td><td>Tersimpan langsung di state</td></tr>
<tr><td>Kembalian</td><td>Ada, sebagai output baru</td><td>Tidak ada</td></tr>
<tr><td>Cegah belanja ganda</td><td>Setiap UTXO hanya bisa dipakai sekali</td><td>Nonce dan pengecekan saldo</td></tr>
<tr><td>Biaya</td><td>Selisih input dan output</td><td>Gas × harga gas</td></tr>
<tr><td>Paling cocok untuk</td><td>Transfer nilai yang sederhana dan mudah diverifikasi</td><td>Program rumit yang berbagi data</td></tr>
</table>

<div class="batas-berlaku"><b>Batas & risiko.</b> Analogi uang kertas dan rekening menyederhanakan banyak hal. Bitcoin juga punya bahasa skrip untuk syarat pembayaran, misalnya multisig dan penguncian waktu. Ethereum juga menyimpan data yang jauh lebih kaya daripada saldo. Satu hal praktis perlu diingat: di Bitcoin, transaksi yang lupa menyertakan output kembalian akan menyerahkan seluruh sisa uang sebagai biaya. Karena itu, pakailah dompet yang mapan dan jangan menyusun transaksi Bitcoin secara manual tanpa paham betul.</div>
` },

        { judul: 'Konsekuensi desain: paralelisme, privasi, dan chain lain', isi: `
<h3>Konsepnya</h3>
<p>Pilihan model pencatatan tidak netral. Ia menentukan seberapa mudah transaksi diproses bersamaan, seberapa mudah jejak Anda dilacak, dan seberapa rumit aplikasi yang bisa dibangun. Tidak ada model yang menang di semua aspek. Setiap chain memilih kompromi sesuai tujuannya.</p>

<h3>Cara kerjanya</h3>
<p><b>Paralelisme.</b> Dua transaksi UTXO yang memakai potongan berbeda tidak saling bergantung, jadi bisa diperiksa bersamaan. Di model akun gaya Ethereum, dua transaksi bisa menyentuh data yang sama, misalnya pool DEX yang sama. EVM tidak tahu hal itu sebelum menjalankannya, sehingga transaksi diproses satu per satu secara berurutan. Aman, tetapi membatasi kecepatan.</p>
<p><b>Privasi.</b> Dompet Bitcoin yang baik membuat alamat baru untuk setiap penerimaan dan kembalian, sehingga jejaknya lebih tersebar. Di Ethereum, orang cenderung memakai satu alamat untuk semuanya: saldo, token, NFT, dan riwayat DeFi. Siapa pun yang tahu alamat Anda bisa melihat semua itu. Tapi jangan salah paham, UTXO pun tidak anonim. Perusahaan analisis on-chain rutin mengelompokkan alamat, misalnya dengan menganggap input yang dipakai bersama dalam satu transaksi dimiliki orang yang sama.</p>
<p><b>Replay protection.</b> UTXO yang sudah dipakai lenyap, jadi transaksi yang sama otomatis tidak bisa diputar ulang. Model akun butuh mekanisme tambahan: nonce di setiap akun, ditambah chain ID agar transaksi tidak bisa diputar ulang di jaringan lain.</p>
<p><b>Kompleksitas state.</b> Model UTXO membuat verifikasi sederhana, tetapi menyulitkan program yang perlu berbagi data, seperti pool likuiditas yang dipakai ribuan orang. Model akun memudahkan aplikasi seperti itu, dengan harga state yang terus membengkak. Setiap node harus menyimpan dan menelusuri state itu.</p>

<h3>Contoh: chain lain mengambil jalan tengah</h3>
<ul>
<li><b>Cardano</b> memakai <b>eUTXO</b> (extended UTXO). Setiap UTXO bisa membawa data tambahan (datum) dan dijaga skrip validator. Karena hasil transaksi hanya bergantung pada UTXO yang dipakainya, Anda bisa memeriksa sebelum mengirim apakah transaksi akan lolos dan berapa biayanya. Tantangannya: satu UTXO hanya bisa dihabiskan satu transaksi. Kalau ribuan orang ingin memakai UTXO pool yang sama pada saat bersamaan, hanya satu yang berhasil. Karena itu DEX di Cardano harus merancang cara khusus, misalnya antrean pesanan yang diproses pihak perantara.</li>
<li><b>Solana</b> memakai model akun, tetapi berbeda dari Ethereum. Program dan datanya disimpan di akun terpisah. Setiap transaksi wajib menyebutkan di awal akun mana yang akan dibaca dan diubahnya. Dengan daftar itu, runtime Solana (Sealevel) bisa menjalankan transaksi yang tidak bersinggungan secara paralel.</li>
<li><b>Sui</b> memakai model berbasis objek. Objek yang dimiliki satu orang bisa diproses tanpa menunggu antrean bersama, sementara objek yang dipakai banyak orang tetap diurutkan.</li>
</ul>

<div class="batas-berlaku"><b>Batas & risiko.</b> Klaim "paralel" dan "lebih cepat" di materi pemasaran perlu dibaca hati-hati. Paralelisme hanya membantu kalau transaksinya memang tidak berebut data yang sama. Saat semua orang memburu satu token baru di satu pool, transaksi tetap mengantre. Ethereum dan chain EVM lain juga sedang meneliti cara eksekusi paralel, jadi perbandingan ini bisa bergeser dalam beberapa tahun ke depan.</div>
` },
      ],
      kuis: [
        { tanya: 'Di model UTXO Bitcoin, "saldo" Anda sebenarnya adalah…',
          pilihan: ['Jumlah semua output belum terpakai yang bisa dibuka kunci Anda, dihitung oleh dompet', 'Satu angka yang disimpan jaringan untuk setiap alamat', 'Angka yang dicatat bursa tempat Anda membeli', 'Jumlah blok yang pernah Anda tambang'],
          jelas: 'Jaringan Bitcoin tidak menyimpan angka saldo per alamat. Ia hanya menyimpan daftar UTXO; dompet menjumlahkan yang bisa Anda buka.' },
        { tanya: 'Andi memakai satu UTXO senilai 1 BTC untuk mengirim 0,3 BTC ke Budi, dengan output kembalian 0,6999 BTC. Berapa biaya transaksinya?',
          pilihan: ['0,0001 BTC', '0,7 BTC', '0,3 BTC', 'Nol, karena biaya Bitcoin ditanggung penerima'],
          jelas: 'Biaya Bitcoin adalah selisih total input dan total output: 1 − (0,3 + 0,6999) = 0,0001 BTC. Selisih itu diambil penambang.' },
        { tanya: 'Bagaimana model akun Ethereum mencegah transaksi bertanda tangan yang sama diproses dua kali?',
          pilihan: ['Dengan nonce, yaitu nomor urut transaksi di setiap akun', 'Dengan menghapus akun setelah bertransaksi', 'Dengan output kembalian', 'Dengan membakar base fee'],
          jelas: 'Setiap nonce hanya bisa dipakai sekali. Chain ID menambah perlindungan agar transaksi tidak bisa diputar ulang di jaringan lain.' },
        { tanya: 'Kenapa transaksi di model UTXO lebih mudah diperiksa secara paralel?',
          pilihan: ['Transaksi yang memakai UTXO berbeda tidak saling bergantung', 'Karena Bitcoin punya lebih banyak node daripada Ethereum', 'Karena transaksi UTXO tidak memakai tanda tangan', 'Karena blok Bitcoin selalu kosong'],
          jelas: 'Setiap transaksi hanya menyentuh UTXO yang disebutnya. Di model akun gaya EVM, transaksi bisa menyentuh data yang sama sehingga diproses berurutan.' },
        { tanya: 'Apa yang membuat Solana bisa menjalankan transaksi secara paralel meski memakai model akun?',
          pilihan: ['Setiap transaksi wajib menyebutkan di awal akun mana yang dibaca dan diubahnya', 'Solana memakai UTXO murni seperti Bitcoin', 'Solana tidak menyimpan saldo sama sekali', 'Semua transaksi Solana diproses satu validator pusat'],
          jelas: 'Dengan daftar akun itu, runtime Sealevel tahu transaksi mana yang tidak bersinggungan dan bisa menjalankannya bersamaan.' },
        { tanya: 'Apa yang ditambahkan eUTXO di Cardano pada model UTXO biasa?',
          pilihan: ['Data (datum) dan skrip validator pada UTXO, sehingga bisa menjalankan logika kontrak', 'Nonce di setiap akun', 'Saldo yang disimpan per alamat seperti Ethereum', 'Penambangan Proof of Work'],
          jelas: 'eUTXO mempertahankan sifat UTXO yang mudah ditebak sambil menambah kemampuan kontrak. Tantangannya, satu UTXO hanya bisa dipakai satu transaksi, sehingga aplikasi harus mengatur perebutan.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'rollup', judul: 'Layer 2: Rollup',
      ringkas: 'Rollup menjalankan transaksi di luar Ethereum lalu menitipkan hasil dan datanya ke Ethereum. Anda belajar jenis-jenisnya, cara membuktikan kejujurannya, dan risiko yang masih tersisa.',
      pelajaran: [
        { judul: 'Kenapa Layer 2: eksekusi di luar, penyelesaian di Ethereum', isi: `
<h3>Konsepnya</h3>
<p>Ethereum sengaja membatasi kapasitasnya supaya node tetap bisa dijalankan dengan perangkat biasa. Akibatnya, saat permintaan melonjak, biaya ikut melonjak. Pada puncak keramaian 2021, satu transaksi di Ethereum, misalnya menukar token, bisa berbiaya puluhan dolar. Menaikkan kapasitas layer 1 secara drastis bukan jawaban, karena node akan menjadi mahal dan jaringan terpusat.</p>
<p>Jalan keluar yang dipilih komunitas Ethereum sejak 2020 adalah <b>rollup</b>. Rollup adalah jaringan <b>layer 2 (L2)</b> yang menjalankan transaksi di luar Ethereum, lalu menitipkan dua hal ke Ethereum: ringkasan hasilnya dan data transaksinya. Ethereum tidak lagi menghitung setiap transaksi. Ia cukup menjadi hakim dan arsip.</p>

<h3>Cara kerjanya</h3>
<ol>
<li>Anda menyetor aset ke <b>kontrak bridge</b> rollup di Ethereum. Aset terkunci di sana, dan saldo yang sama muncul di L2.</li>
<li>Di L2, <b>sequencer</b> menerima transaksi, mengurutkannya, dan memberi konfirmasi cepat, biasanya dalam hitungan detik atau kurang.</li>
<li>Secara berkala, ribuan transaksi dikemas dan dipadatkan. Datanya dikirim ke Ethereum bersama <b>state root</b>, yaitu sidik jari dari seluruh saldo di L2 setelah transaksi-transaksi itu.</li>
<li>Ethereum memastikan state root itu benar, dengan cara yang berbeda di tiap jenis rollup. Dua pelajaran berikutnya membahasnya.</li>
<li>Saat Anda menarik dana, kontrak bridge di Ethereum melepaskan aset berdasarkan state root yang sudah diakui.</li>
</ol>
<p>Kenapa jadi murah? Biaya menulis data ke Ethereum dibagi ke ribuan transaksi dalam satu kemasan. Komputasinya pun dikerjakan di luar, oleh mesin yang hasilnya tidak perlu diulang ribuan node.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Eksekusi</b>: menjalankan transaksi dan menghitung hasilnya. Pada rollup, ini terjadi di L2.</li>
<li><b>Settlement (penyelesaian)</b>: tempat hasil diakui final dan sengketa diputus. Untuk rollup Ethereum, tempatnya di L1.</li>
<li><b>Sequencer</b>: pengurut transaksi di L2. Pada sebagian besar rollup saat ini, sequencer dijalankan satu operator.</li>
<li><b>Soft confirmation</b>: janji sequencer bahwa transaksi Anda akan masuk. Belum final sampai datanya tercatat di Ethereum.</li>
<li><b>Forced inclusion</b>: jalur darurat untuk memasukkan transaksi lewat Ethereum langsung kalau sequencer menolak atau mati. Tidak semua rollup menyediakannya dengan baik.</li>
</ul>

<h3>Contoh</h3>
<p>Bayangkan pengadilan yang sangat sibuk. Daripada setiap urusan kecil disidangkan, warga menyelesaikannya di balai desa, lalu mengirim notulen lengkap ke pengadilan. Pengadilan tidak memeriksa setiap urusan. Tapi karena notulennya tersimpan dan bisa dibaca siapa saja, pihak yang dirugikan selalu bisa menggugat dengan bukti. Rollup bekerja seperti balai desa itu. Keamanannya bersumber dari fakta bahwa Ethereum menyimpan notulen dan bisa memutus sengketa.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak semua jaringan yang menyebut dirinya "L2" adalah rollup. Kalau datanya tidak disimpan di Ethereum, atau tidak ada cara membuktikan state root, keamanannya jauh lebih lemah daripada Ethereum. Selain itu, dana Anda di L2 hanya seaman kontrak bridge-nya, dan kontrak itu sering bisa di-upgrade oleh pemegang kunci tertentu.</div>
` },

        { judul: 'Optimistic rollup: dianggap benar sampai terbukti salah', isi: `
<h3>Konsepnya</h3>
<p><b>Optimistic rollup</b> memakai prinsip yang mirip asas praduga tak bersalah. Operator mengirim state root ke Ethereum, dan state root itu <b>dianggap benar</b>, kecuali ada yang membuktikan sebaliknya dalam <b>masa sanggah</b>. Pada rollup besar, masa sanggahnya sekitar tujuh hari.</p>
<p>Kenapa "optimis"? Karena membuktikan setiap transaksi itu mahal, sementara sebagian besar waktu operator memang jujur. Jadi pembuktian hanya dilakukan kalau ada sengketa. Keamanannya bergantung pada satu asumsi: <b>minimal ada satu pihak jujur</b> yang mengawasi dan siap menggugat bila ada kecurangan.</p>

<h3>Cara kerjanya</h3>
<ol>
<li>Operator mengirim data transaksi dan klaim state root ke Ethereum.</li>
<li>Pengawas menjalankan ulang transaksi dari data itu. Kalau hasilnya berbeda dari klaim, mereka mengajukan <b>fraud proof</b> (bukti kecurangan).</li>
<li>Sengketa diselesaikan secara interaktif. Kedua pihak mempersempit perselisihan, dibelah dua berulang kali, sampai tersisa <i>satu langkah</i> komputasi. Ethereum cukup menjalankan satu langkah itu untuk memutuskan siapa yang benar.</li>
<li>Klaim yang terbukti salah dibatalkan, dan pihak yang curang kehilangan jaminannya.</li>
<li>Kalau masa sanggah lewat tanpa gugatan, klaim menjadi final dan penarikan ke Ethereum bisa dicairkan.</li>
</ol>
<p>Kenapa masa sanggah perlu selama itu? Pengawas butuh waktu untuk mendeteksi kecurangan dan mengirim gugatan, bahkan kalau penyerang mencoba menghalangi transaksi mereka di Ethereum selama beberapa hari. Tujuh hari memberi ruang aman untuk skenario terburuk itu.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Fraud proof / fault proof</b>: bukti bahwa sebuah klaim state root salah. Dua istilah ini dipakai bergantian.</li>
<li><b>Permissionless proof</b>: siapa pun boleh menjadi pengawas dan menggugat, bukan hanya daftar pihak yang disetujui operator.</li>
<li><b>Fast withdrawal</b>: layanan pihak ketiga yang mencairkan dana Anda lebih dulu di Ethereum dengan imbalan biaya. Merekalah yang menanggung penantian tujuh hari.</li>
</ul>

<h3>Contoh</h3>
<p>Optimistic rollup yang banyak dipakai antara lain <b>Arbitrum One</b> (dikembangkan Offchain Labs), <b>OP Mainnet</b> (Optimism), dan <b>Arbitrum One</b> (dikembangkan Offchain Labs) dan <b>OP Mainnet</b> (Optimism). OP Stack, perangkat lunak terbuka milik Optimism, dipakai banyak chain lain, dan kumpulan chain itu disebut Superchain. <b>Base</b> (Coinbase) awalnya dibangun dengan OP Stack, tetapi keluar dari Superchain pada 2026 dan sejak Mei 2026 memakai sistem bukti ganda (TEE dan ZK), sehingga penarikannya kini lebih cepat dari tujuh hari.</p>
<p>Contoh sehari-hari: Anda memindahkan ETH dari OP Mainnet ke Ethereum lewat bridge resmi. Transaksi di OP Mainnet selesai dalam hitungan detik. Tapi dana baru bisa diklaim di Ethereum setelah masa sanggah sekitar tujuh hari lewat. Kalau tidak mau menunggu, Anda bisa memakai bridge pihak ketiga yang mencairkan lebih cepat dengan biaya tambahan, dan dengan risiko kontrak bridge itu sendiri.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Jaminan "satu pihak jujur" hanya berlaku kalau sistem fraud proof benar-benar aktif dan terbuka untuk siapa pun. Selama beberapa tahun pertama, sejumlah rollup besar belum punya sistem bukti yang aktif atau hanya mengizinkan pengawas tertentu. Sistem bukti tanpa izin baru aktif di beberapa rollup besar pada 2024–2025. Periksa status terbarunya di L2BEAT sebelum menganggap sebuah rollup "seaman Ethereum".</div>
` },

        { judul: 'ZK rollup, data availability, dan risiko L2', isi: `
<h3>Konsepnya</h3>
<p><b>ZK rollup</b> menempuh jalan sebaliknya dari optimistic rollup. Alih-alih dianggap benar sampai digugat, setiap kemasan transaksi disertai <b>validity proof</b>, yaitu bukti kriptografis bahwa perhitungannya benar. Kontrak di Ethereum memeriksa bukti itu. Kalau bukti tidak valid, state root ditolak. Masa sanggah panjang tidak diperlukan, karena kebenarannya sudah dibuktikan secara matematis.</p>
<p>Huruf "ZK" berasal dari zero-knowledge. Pada rollup, yang paling dimanfaatkan sebenarnya sifat <i>ringkas</i> bukti itu, bukan kerahasiaannya. Satu bukti kecil bisa memverifikasi ribuan transaksi, dan memeriksanya jauh lebih murah daripada menjalankan ulang semuanya. Kebanyakan ZK rollup tidak menyembunyikan transaksi Anda.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Prover</b>: mesin yang menghasilkan bukti. Pekerjaannya berat dan butuh perangkat keras kuat.</li>
<li><b>SNARK dan STARK</b>: dua keluarga sistem bukti. Starknet memakai STARK, sementara banyak ZK rollup lain memakai SNARK atau gabungan keduanya.</li>
<li><b>Data availability (DA)</b>: jaminan bahwa data transaksi benar-benar diterbitkan, sehingga siapa pun bisa menyusun ulang saldo L2 dan keluar sendiri kalau operator menghilang.</li>
<li><b>Blob</b>: ruang data sementara yang diperkenalkan EIP-4844 (Maret 2024). Satu blob berukuran sekitar 128 KB, tersedia di jaringan selama kira-kira 18 hari (sejak Fusaka, tiap node cukup menyimpan sebagian potongannya), dan punya pasar biaya sendiri yang terpisah dari gas biasa.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Tanpa data availability, bukti apa pun tidak cukup. Bukti ZK menjamin perhitungannya benar. Tapi kalau datanya disembunyikan, Anda tidak bisa mengetahui saldo Anda sendiri untuk menariknya. Karena itu rollup wajib menerbitkan datanya di Ethereum. Sebelum 2024, data ini ditulis sebagai calldata biasa yang mahal. Blob menyediakan jalur khusus yang lebih murah, dan biaya transaksi di banyak L2 turun tajam setelah Dencun. Blob boleh dihapus setelah sekitar 18 hari, karena tugasnya memastikan data sempat tersedia untuk diperiksa, bukan menyimpannya selamanya.</p>
<p>Contoh ZK rollup: <b>zkSync Era</b> (Matter Labs), <b>Starknet</b> (StarkWare, memakai bahasa Cairo, bukan EVM), <b>Scroll</b>, dan <b>Linea</b> (Consensys). Karena pembuktian butuh waktu, penarikan ke Ethereum biasanya selesai dalam hitungan jam hingga sekitar sehari, bukan tujuh hari.</p>

<h3>Contoh: membaca risiko sebuah L2</h3>
<ul>
<li><b>Sequencer terpusat.</b> Kalau satu operator mati, jaringan berhenti. Operator juga bisa menolak transaksi Anda, kecuali ada jalur forced inclusion yang berfungsi.</li>
<li><b>Kunci upgrade.</b> Kalau kontrak bridge bisa diganti seketika oleh multisig kecil, pemegang kunci itu secara teori bisa memindahkan semua dana. Rollup yang lebih matang memberi jeda waktu sebelum upgrade berlaku.</li>
<li><b>Tahap desentralisasi (stages).</b> Situs L2BEAT memberi peringkat. <b>Stage 0</b> berarti keamanan masih bergantung pada operator dan pemegang kunci. <b>Stage 1</b> berarti sistem bukti sudah berjalan, tetapi Dewan Keamanan (Security Council) masih bisa turun tangan. <b>Stage 2</b> berarti sistem bukti terbuka untuk siapa pun, campur tangan manusia dibatasi pada bug yang terbukti di chain, dan pengguna punya waktu cukup untuk keluar sebelum upgrade berlaku.</li>
</ul>

<div class="batas-berlaku"><b>Batas & risiko.</b> Label "ZK" tidak otomatis berarti aman. Sistem bukti yang sangat rumit bisa mengandung bug, dan di banyak ZK rollup, prover dan sequencer masih dijalankan satu pihak. Jaringan yang menaruh data di luar Ethereum (disebut validium atau optimium) lebih murah, tetapi menambah asumsi kepercayaan. Status stage setiap L2 berubah dari waktu ke waktu. Periksa l2beat.com, bukan klaim pemasaran proyeknya.</div>
` },
      ],
      kuis: [
        { tanya: 'Apa yang dititipkan sebuah rollup ke Ethereum?',
          pilihan: ['Data transaksi dan ringkasan hasil (state root), sehingga Ethereum bisa menjadi hakim dan arsip', 'Hanya nama dan logo jaringannya', 'Kunci privat semua penggunanya', 'Tidak ada; rollup sepenuhnya terpisah dari Ethereum'],
          jelas: 'Eksekusi terjadi di L2, tetapi data dan klaim hasilnya disimpan di Ethereum. Dari situlah rollup mewarisi keamanan L1.' },
        { tanya: 'Kenapa penarikan lewat bridge resmi optimistic rollup ke Ethereum butuh sekitar tujuh hari?',
          pilihan: ['Ada masa sanggah agar pengawas sempat mengajukan fraud proof', 'Karena Ethereum hanya membuka bridge seminggu sekali', 'Karena sequencer libur di akhir pekan', 'Karena bukti ZK butuh seminggu untuk dihitung'],
          jelas: 'State root dianggap benar kecuali digugat. Tujuh hari memberi pengawas waktu mendeteksi kecurangan, bahkan jika penyerang mencoba menghalangi gugatan.' },
        { tanya: 'ZK rollup tidak memerlukan masa sanggah panjang karena…',
          pilihan: ['Setiap kemasan transaksi disertai bukti kriptografis yang diperiksa kontrak di Ethereum', 'Operatornya dijamin jujur oleh pemerintah', 'Semua transaksinya selalu dirahasiakan', 'Tidak memakai Ethereum sama sekali'],
          jelas: 'Validity proof membuktikan kebenaran di muka. Huruf "ZK" pada rollup lebih soal bukti yang ringkas, bukan soal kerahasiaan.' },
        { tanya: 'Kenapa data availability tetap penting walau sudah ada validity proof?',
          pilihan: ['Tanpa data yang diterbitkan, pengguna tidak bisa menyusun ulang saldonya untuk keluar sendiri', 'Supaya NFT punya gambar', 'Supaya biaya gas menjadi nol', 'Supaya sequencer bisa menyensor transaksi'],
          jelas: 'Bukti menjamin perhitungan benar, tetapi data diperlukan untuk mengetahui isi state. Itulah kenapa blob diciptakan sebagai ruang data murah untuk rollup.' },
        { tanya: 'Apa risiko utama jika sequencer sebuah rollup dijalankan satu operator?',
          pilihan: ['Jaringan bisa berhenti atau transaksi ditolak kalau operator itu bermasalah', 'Transaksi menjadi terlalu murah', 'Ethereum ikut berhenti', 'Semua token otomatis terkunci selamanya'],
          jelas: 'Sequencer tunggal adalah titik gagal dan titik sensor. Jalur forced inclusion lewat Ethereum, kalau tersedia, menjadi jalan keluarnya.' },
        { tanya: 'Dalam kerangka "stages" dari L2BEAT, rollup yang masih berada di Stage 0 berarti…',
          pilihan: ['Keamanannya masih bergantung pada operator dan pemegang kunci', 'Rollup sudah sepenuhnya terdesentralisasi', 'Rollup belum punya pengguna sama sekali', 'Rollup memakai Proof of Work'],
          jelas: 'Stage 0 adalah tahap paling awal. Stage 1 menandakan sistem bukti sudah berjalan, dan Stage 2 membatasi campur tangan manusia pada bug yang terbukti di chain.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    { kode: 'standar-token', judul: 'Token: ERC-20, ERC-721, ERC-1155',
      ringkas: 'Standar token membuat ribuan token bisa dikenali dompet dan bursa yang sama. Anda belajar ERC-20, NFT ERC-721, ERC-1155, dan jebakan izin approve.',
      pelajaran: [
        { judul: 'ERC-20: token yang bisa dipertukarkan, dan bahaya approve tak terbatas', isi: `
<h3>Konsepnya</h3>
<p>Hampir semua token di Ethereum dan chain EVM, dari stablecoin sampai token tata kelola, mengikuti standar <b>ERC-20</b>. Standar yang diusulkan pada 2015 ini sederhana: daftar fungsi yang wajib dimiliki kontrak token, dengan nama dan perilaku yang disepakati.</p>
<p>Kenapa perlu standar? Kalau setiap token punya cara transfer sendiri, setiap dompet dan bursa harus menulis kode khusus untuk setiap token baru. Dengan ERC-20, cukup satu integrasi, dan ribuan token langsung bisa dipakai. Token ERC-20 bersifat <b>fungible</b>, artinya bisa saling dipertukarkan. Satu USDC Anda sama nilainya dengan satu USDC milik orang lain.</p>
<p>Satu hal yang sering tidak disadari: token tidak benar-benar "ada di dompet Anda". Saldo token adalah catatan di dalam kontrak token itu. Dompet Anda hanya memegang kunci untuk memerintah kontrak memindahkan catatan tersebut.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>balanceOf</b>: menanyakan saldo sebuah alamat.</li>
<li><b>transfer</b>: memindahkan token milik Anda ke alamat lain.</li>
<li><b>approve</b>: memberi izin kepada alamat lain, biasanya kontrak aplikasi, untuk memindahkan token Anda sampai jumlah tertentu.</li>
<li><b>allowance</b>: sisa izin yang masih berlaku.</li>
<li><b>transferFrom</b>: fungsi yang dipakai kontrak yang sudah diberi izin untuk menarik token Anda.</li>
<li><b>decimals</b>: jumlah angka di belakang koma. Kontrak tidak mengenal pecahan, jadi semua disimpan sebagai bilangan bulat dalam satuan terkecil.</li>
</ul>

<h3>Cara kerjanya</h3>
<p>Kebanyakan token memakai 18 desimal, sehingga 1 token disimpan sebagai angka 1 diikuti 18 nol. Di Ethereum, USDC dan USDT memakai 6 desimal, jadi 1 USDC tersimpan sebagai 1.000.000 unit. Di chain lain desimalnya bisa berbeda (di BNB Chain 18), jadi selalu periksa fungsi decimals. Dompet menerjemahkan angka ini untuk Anda. Tapi kalau Anda berinteraksi langsung dengan kontrak, salah desimal bisa membuat Anda mengirim jauh lebih banyak dari yang dimaksud.</p>
<p>Alur approve ada karena kontrak tidak bisa sekadar "melihat" token yang Anda kirim lalu bereaksi. Untuk menukar token di DEX, ada dua langkah. Pertama, <b>approve</b>: izinkan kontrak DEX memindahkan token Anda. Kedua, <b>swap</b>: kontrak DEX memanggil transferFrom untuk mengambil token Anda, lalu mengirimkan token tukarannya.</p>
<pre>function approve(address spender, uint256 amount) external returns (bool);
function allowance(address owner, address spender) external view returns (uint256);</pre>

<h3>Contoh: kenapa approve tak terbatas berbahaya</h3>
<p>Supaya Anda tidak perlu approve setiap kali, banyak aplikasi meminta izin <b>tak terbatas</b>. Nyaman, tapi berisiko. Izin itu tetap berlaku bertahun-tahun setelah Anda berhenti memakai aplikasinya. Kalau kontrak itu kelak diretas, atau sejak awal memang jahat, penyerang bisa menguras seluruh token jenis itu dari dompet Anda tanpa tanda tangan baru. Banyak pencurian terjadi lewat izin lama yang terlupa, bukan lewat bocornya seed phrase.</p>
<p>Kebiasaan yang lebih aman: setujui hanya sejumlah yang akan dipakai, lalu periksa dan cabut izin lama secara berkala lewat alat seperti revoke.cash. Waspadai juga permintaan tanda tangan bernama "Permit". Tanda tangan ini memberi izin tanpa transaksi on-chain, jadi terasa gratis dan tidak berbahaya, padahal efeknya sama.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> ERC-20 hanya mengatur antarmuka, bukan kejujuran. Kontrak token bisa berisi fungsi tambahan: mencetak token tanpa batas, membekukan alamat, atau memotong pajak saat dijual. Stablecoin terpusat seperti USDC dan USDT memang punya fitur pembekuan. Mengirim token ke alamat kontrak yang tidak dirancang menerimanya juga bisa membuat token itu terkunci selamanya.</div>
` },

        { judul: 'ERC-721 dan ERC-1155: NFT, metadata, dan item game', isi: `
<h3>Konsepnya</h3>
<p>Tidak semua aset bisa dipertukarkan. Tiket konser kursi A1 tidak sama dengan kursi Z40, meski formatnya serupa. Untuk aset seperti ini, Ethereum punya <b>ERC-721</b>, standar <b>NFT (non-fungible token)</b>. Setiap token punya nomor unik (tokenId), dan kontrak mencatat pemilik setiap nomor. Standar ini lahir dari pengalaman proyek seperti CryptoKitties (akhir 2017) dan disepakati pada 2018.</p>
<p>Lalu muncul kebutuhan campuran. Sebuah game mungkin punya ribuan ramuan yang identik, sekaligus satu pedang legendaris yang hanya ada satu. Membuat satu kontrak terpisah untuk setiap jenis barang itu boros. <b>ERC-1155</b> menjawabnya: satu kontrak bisa mengelola banyak jenis token sekaligus, baik fungible maupun tidak.</p>

<h3>Cara kerjanya</h3>
<p><b>ERC-721.</b> Fungsi utamanya: <b>ownerOf(tokenId)</b> untuk mengetahui pemilik, <b>transferFrom</b> dan <b>safeTransferFrom</b> untuk memindahkan, serta <b>tokenURI(tokenId)</b> yang mengembalikan alamat berkas <b>metadata</b>. Metadata adalah berkas JSON berisi nama, deskripsi, atribut, dan tautan gambar. Gambar dan metadata jarang disimpan langsung di blockchain, karena menyimpan data di sana sangat mahal.</p>
<p><b>ERC-1155.</b> Saldo dicatat per pasangan alamat dan jenis token: <b>balanceOf(alamat, id)</b>. Jenis token dengan suplai 1 berperilaku seperti NFT. Jenis dengan suplai ribuan berperilaku seperti token biasa. Fitur pentingnya adalah transfer massal (batch). Sepuluh jenis item bisa dipindahkan dalam satu transaksi, jauh lebih hemat gas daripada sepuluh transaksi terpisah.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>IPFS</b>: jaringan penyimpanan yang mengalamatkan berkas berdasarkan isinya. Kalau isi berkas diubah, alamatnya ikut berubah, sehingga tautan IPFS tidak bisa diam-diam diganti isinya. Tapi berkas hanya tetap tersedia selama ada pihak yang menyimpannya (pinning).</li>
<li><b>Arweave</b>: jaringan penyimpanan yang dirancang permanen, dengan biaya dibayar sekali di muka.</li>
<li><b>On-chain art</b>: karya yang gambarnya disimpan atau dibangkitkan langsung oleh kontrak. Paling tahan lama, tapi mahal dan terbatas.</li>
<li><b>Royalti</b>: bagian penjualan untuk kreator. Standar ERC-2981 hanya memberi tahu besaran royaltinya. Pembayarannya bergantung pada kebijakan marketplace, bukan dipaksakan kontrak.</li>
</ul>

<h3>Contoh</h3>
<p>Anda membeli NFT nomor 4521. Di chain tercatat: kontrak X, token 4521, pemilik alamat Anda. Saat marketplace menampilkannya, ia memanggil tokenURI(4521), mendapat tautan ipfs://…, mengambil JSON-nya, lalu mengambil gambar dari tautan di dalam JSON itu. Kalau tautannya mengarah ke server biasa milik tim proyek, tim bisa mengganti gambarnya, atau gambar lenyap saat server dimatikan. Token Anda tetap ada, tapi isinya kosong.</p>
<p>Dalam game berbasis ERC-1155, satu kontrak bisa memuat id 1 untuk koin emas (suplai sejuta), id 2 untuk ramuan (suplai sepuluh ribu), dan id 3 untuk pedang legendaris (suplai satu). Pemain bisa menjual 50 koin emas dan 3 ramuan dalam satu transaksi batch.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Memiliki NFT berarti memiliki catatan di sebuah kontrak, bukan otomatis memiliki hak cipta atas gambarnya. Hak itu diatur lisensi masing-masing proyek. Periksa ke mana tokenURI mengarah dan apakah metadata bisa diubah pemilik kontrak. Waspadai juga izin "setApprovalForAll". Izin ini bekerja seperti approve tak terbatas: satu tanda tangan memberi akses ke seluruh koleksi Anda di kontrak itu.</div>
` },
      ],
      kuis: [
        { tanya: 'Di Ethereum, token USDC memakai 6 desimal. Bagaimana kontrak menyimpan saldo 2,5 USDC?',
          pilihan: ['2.500.000 unit terkecil', '2,5 unit', '25 unit', '2.500.000.000.000.000.000 unit'],
          jelas: 'Kontrak tidak mengenal pecahan. Dengan 6 desimal, 1 USDC = 1.000.000 unit, jadi 2,5 USDC = 2.500.000 unit. Angka 2.500.000.000.000.000.000 adalah hitungan untuk token 18 desimal.' },
        { tanya: 'Apa fungsi approve pada token ERC-20?',
          pilihan: ['Mengizinkan alamat lain, biasanya kontrak aplikasi, memindahkan token Anda sampai jumlah tertentu', 'Mengirim token langsung ke teman', 'Mencetak token baru', 'Mengunci token supaya tidak bisa dijual'],
          jelas: 'Approve mengisi allowance. Kontrak yang diberi izin lalu memakai transferFrom untuk menarik token sesuai batas itu.' },
        { tanya: 'Kenapa approve tak terbatas ke kontrak yang sudah lama tidak Anda pakai berbahaya?',
          pilihan: ['Kalau kontrak itu diretas atau jahat, token Anda bisa dikuras tanpa tanda tangan baru', 'Karena approve memotong gas setiap hari', 'Karena token berubah menjadi NFT', 'Karena dompet Anda otomatis terhapus'],
          jelas: 'Izin tidak kedaluwarsa sendiri. Cabut izin lama lewat alat seperti revoke.cash dan setujui hanya sejumlah yang dibutuhkan.' },
        { tanya: 'Apa yang dikembalikan fungsi tokenURI pada NFT ERC-721?',
          pilihan: ['Alamat berkas metadata (JSON) berisi nama, atribut, dan tautan gambar', 'Gambar NFT dalam bentuk utuh', 'Kunci privat pemiliknya', 'Harga lantai koleksi saat ini'],
          jelas: 'Token hanya menyimpan ID, pemilik, dan tautan. Gambar biasanya ada di luar chain, misalnya di IPFS, Arweave, atau server biasa.' },
        { tanya: 'Kenapa metadata di IPFS lebih sulit diganti diam-diam daripada di server biasa?',
          pilihan: ['Alamat IPFS dihitung dari isi berkas, jadi isi yang berubah menghasilkan alamat berbeda', 'IPFS dimiliki Ethereum Foundation', 'IPFS menyimpan data di dalam blok Ethereum', 'IPFS dijaga bursa terpusat'],
          jelas: 'Tautan IPFS terikat pada isinya. Namun berkas tetap bisa hilang kalau tidak ada lagi yang menyimpannya (pinning).' },
        { tanya: 'Kenapa ERC-1155 banyak dipakai untuk game?',
          pilihan: ['Satu kontrak bisa mengelola banyak jenis item, fungible maupun unik, dan memindahkannya secara massal', 'Karena hanya bisa membuat satu token', 'Karena transfernya tidak membutuhkan gas', 'Karena item game wajib disimpan di Bitcoin'],
          jelas: 'Koin emas, ramuan, dan pedang langka bisa hidup di satu kontrak. Transfer batch menghemat gas dibanding banyak transaksi terpisah.' },
      ] },
  ],
});
