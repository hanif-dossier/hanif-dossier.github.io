// kelas/bitcoin.js — data kelas kategori Bitcoin. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'bitcoin', urut: 2, nama: 'Bitcoin', warna: '#c9a961',
  ringkas: 'Cara Bitcoin bekerja dari dalam: koin sebagai UTXO, transaksi dan Script, penambangan, Lightning, sampai batas privasinya.',
  kursus: [
    { kode: 'utxo', judul: 'Model UTXO', ringkas: 'Bitcoin tidak menyimpan saldo per rekening, melainkan kepingan koin yang belum dibelanjakan. Kursus ini menjelaskan cara kerjanya dan kenapa desain ini dipilih.',
      pelajaran: [
        { judul: 'Apa itu UTXO: uang kertas dan kembalian', isi: `
<h3>Konsepnya</h3>
<p>Saat Anda membuka dompet Bitcoin dan melihat angka "0,05 BTC", angka itu sebenarnya tidak tersimpan di mana pun sebagai satu saldo. Jaringan Bitcoin tidak mengenal rekening. Yang dicatat setiap node adalah daftar kepingan koin yang belum dibelanjakan, disebut <b>UTXO</b> (<i>Unspent Transaction Output</i>, keluaran transaksi yang belum terpakai). Dompet Anda hanya menjumlahkan semua UTXO yang bisa dibuka oleh kunci Anda, lalu menampilkan totalnya.</p>
<p>Cara paling mudah memahaminya: bayangkan dompet kulit berisi uang kertas. Anda punya selembar Rp50.000 dan selembar Rp20.000. Totalnya Rp70.000, tapi yang ada di dompet adalah dua lembar terpisah, bukan angka 70.000. Kalau Anda membeli barang seharga Rp30.000, Anda tidak bisa menyobek lembar Rp50.000. Anda menyerahkan lembar itu utuh, lalu menerima kembalian Rp20.000.</p>
<p>Bitcoin bekerja persis begitu. Sebuah UTXO harus dibelanjakan utuh. Bedanya, di Bitcoin Anda sendiri yang menulis kembaliannya ke dalam transaksi.</p>
<h3>Cara kerjanya</h3>
<p>Setiap transaksi punya dua sisi:</p>
<ul>
<li><b>Input</b>: UTXO lama yang dihabiskan. Setiap input menunjuk ke output transaksi sebelumnya dan menyertakan bukti, biasanya tanda tangan, bahwa Anda berhak membukanya.</li>
<li><b>Output</b>: UTXO baru yang diciptakan. Setiap output berisi jumlah satoshi dan syarat penguncian, yaitu siapa yang boleh membelanjakannya nanti.</li>
</ul>
<p>Begitu transaksi masuk ke blok, input-inputnya hilang dari daftar UTXO dan output-outputnya masuk ke daftar itu. Daftar lengkapnya disebut <b>UTXO set</b>. Untuk memeriksa apakah transaksi baru sah, pemeriksaan utama node ada dua: apakah input-inputnya masih ada di UTXO set, dan apakah buktinya benar.</p>
<p>Ada satu aturan penting: total output tidak boleh melebihi total input. Selisihnya tidak hilang. Selisih itu adalah <b>biaya transaksi (fee)</b> yang diambil penambang yang memasukkan transaksi Anda ke blok.</p>
<pre>fee = total input − total output</pre>
<p>Tidak ada kolom "fee" di dalam transaksi. Fee hanyalah sisa yang tidak Anda alokasikan ke output mana pun.</p>
<h3>Contoh</h3>
<p>Anda memegang satu UTXO senilai 0,01 BTC, atau 1.000.000 satoshi (1 BTC = 100 juta satoshi). Anda ingin membayar 0,003 BTC ke sebuah toko. Transaksinya:</p>
<table>
<tr><th>Sisi</th><th>Isi</th><th>Nilai (satoshi)</th></tr>
<tr><td>Input</td><td>UTXO milik Anda</td><td>1.000.000</td></tr>
<tr><td>Output 1</td><td>Ke alamat toko</td><td>300.000</td></tr>
<tr><td>Output 2</td><td>Kembalian ke alamat baru milik Anda</td><td>698.500</td></tr>
<tr><td>Fee</td><td>Selisih, untuk penambang</td><td>1.500</td></tr>
</table>
<p>Kalau Anda lupa menulis output kembalian, seluruh 700.000 satoshi sisa akan menjadi fee. Ini pernah terjadi pada orang yang merakit transaksi secara manual. Dompet modern menambahkan output kembalian secara otomatis, jadi kesalahan ini jarang terjadi selama Anda memakai perangkat lunak yang wajar.</p>
<p>Perhatikan juga bahwa kembalian dikirim ke alamat baru, bukan ke alamat lama. Alasannya menyangkut privasi, dan dibahas di pelajaran berikutnya.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Analogi uang kertas berhenti di satu titik: uang kertas bisa berpindah tangan tanpa jejak, sedangkan setiap UTXO tercatat publik beserta asal-usulnya. Selain itu, "saldo" di dompet adalah hasil hitungan perangkat lunak. Kalau dompet salah menyinkronkan data, angka tampilannya bisa keliru walaupun UTXO Anda di blockchain tetap aman.</div>` },
        { judul: 'Kenapa Bitcoin memakai model UTXO', isi: `
<h3>Konsepnya</h3>
<p>Ada dua cara umum mencatat kepemilikan di blockchain. Model <b>akun</b>, yang dipakai Ethereum, menyimpan saldo per alamat seperti rekening bank: mengirim 1 ETH berarti saldo pengirim dikurangi dan saldo penerima ditambah. Model <b>UTXO</b>, yang dipakai Bitcoin, mencatat kepingan koin terpisah yang dihabiskan lalu diciptakan ulang. Keduanya bisa bekerja. Bitcoin memilih UTXO karena beberapa sifat yang sulit didapat dari model akun, dan menerima beberapa kerepotan sebagai gantinya.</p>
<h3>Cara kerjanya</h3>
<p><b>1. Verifikasi yang bisa dikerjakan paralel.</b> Setiap UTXO hanya bisa dibelanjakan sekali, dan setiap transaksi menyebut persis UTXO mana yang dipakainya. Jadi node bisa memeriksa banyak transaksi sekaligus tanpa khawatir urutannya saling mempengaruhi, selama tidak ada dua transaksi yang memakai UTXO yang sama. Dalam model akun, dua transaksi dari alamat yang sama mengubah saldo yang sama, sehingga urutan eksekusinya penting.</p>
<p><b>2. Deteksi belanja ganda yang sederhana.</b> Pertanyaan "apakah koin ini sudah dipakai?" cukup dijawab dengan "apakah UTXO ini masih ada di UTXO set?". Tidak perlu menelusuri riwayat saldo.</p>
<p><b>3. Ruang untuk privasi.</b> Karena tidak ada rekening, Anda bebas menerima setiap pembayaran di alamat baru, dan kembalian juga bisa dikirim ke alamat baru. Pengamat luar tidak otomatis melihat satu saldo besar yang tumbuh di satu tempat. Ini bukan jaminan anonimitas (dibahas di kursus Anonimitas Bitcoin), tapi model akun bahkan tidak memberi ruang ini secara alami.</p>
<p><b>4. Harga yang harus dibayar: dust dan coin selection.</b></p>
<ul>
<li><b>Dust</b> (debu) adalah UTXO yang nilainya lebih kecil dari biaya untuk membelanjakannya. Setiap input menambah ukuran transaksi, dan fee dihitung per ukuran, dalam satoshi per vbyte (sat/vB). Kalau fee sedang 20 sat/vB dan satu input SegWit berukuran sekitar 68 vbyte, membelanjakannya butuh sekitar 1.360 satoshi. UTXO senilai 1.000 satoshi pada kondisi itu secara ekonomi tidak berguna. Bitcoin Core juga menolak meneruskan transaksi yang membuat output di bawah ambang dust (kecuali kasus khusus "ephemeral dust" sejak Bitcoin Core 29), secara bawaan sekitar 294 satoshi untuk alamat P2WPKH dan 546 satoshi untuk P2PKH.</li>
<li><b>Coin selection</b> adalah keputusan dompet memilih UTXO mana yang dipakai. Memakai banyak UTXO kecil membuat fee mahal sekarang. Memakai satu UTXO besar menghasilkan kembalian dan hanya menunda masalah. Bitcoin Core memakai beberapa algoritma, antara lain <i>Branch and Bound</i> yang mencari kombinasi input yang pas sehingga tidak perlu output kembalian.</li>
</ul>
<h3>Contoh</h3>
<p>Anda rutin menerima pembayaran kecil, masing-masing 5.000 satoshi, sebanyak 200 kali. Totalnya 1.000.000 satoshi, tapi tersebar di 200 UTXO. Saat fee pasar naik ke 50 sat/vB, menggabungkan semuanya dalam satu transaksi butuh kira-kira 200 × 68 = 13.600 vbyte, atau sekitar 680.000 satoshi fee. Dua pertiga nilai habis untuk biaya.</p>
<p>Kalau penggabungan (<i>konsolidasi</i>) dilakukan saat fee 2 sat/vB, biayanya hanya sekitar 27.000 satoshi. Karena itu banyak pengguna menggabungkan UTXO kecil ketika mempool, yaitu antrean transaksi yang belum masuk blok, sedang sepi.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Ukuran input dan ambang dust di atas adalah perkiraan untuk jenis alamat tertentu dan kebijakan bawaan Bitcoin Core per 2024–2025. Operator node bisa mengubah kebijakan itu. Konsolidasi juga punya harga privasi: menggabungkan banyak UTXO dalam satu transaksi memberi tahu pengamat bahwa semuanya kemungkinan milik orang yang sama.</div>` },
      ],
      kuis: [
        { tanya: 'Anda memakai satu UTXO senilai 0,02 BTC, membayar 0,015 BTC ke toko, dan menulis output kembalian 0,0049 BTC. Berapa fee-nya?', pilihan: ['0,0001 BTC', '0,005 BTC', '0,0049 BTC', 'Nol, karena fee ditulis di kolom terpisah'], jelas: 'Fee adalah total input dikurangi total output: 0,02 − (0,015 + 0,0049) = 0,0001 BTC. Transaksi Bitcoin tidak punya kolom fee.' },
        { tanya: 'Apa yang terjadi pada sebuah UTXO saat dipakai sebagai input?', pilihan: ['Habis dipakai seluruhnya; sisa nilainya harus dikembalikan lewat output baru', 'Nilainya dikurangi sebesar pembayaran dan sisanya tetap di UTXO yang sama', 'Dipecah otomatis oleh penambang sesuai kebutuhan', 'Tetap ada dan bisa dipakai lagi setelah 100 blok'], jelas: 'UTXO selalu dibelanjakan utuh, seperti uang kertas. Sisa nilainya kembali kepada Anda hanya kalau Anda menulis output kembalian.' },
        { tanya: 'Kenapa model UTXO memudahkan verifikasi transaksi secara paralel?', pilihan: ['Setiap transaksi menyebut UTXO yang dipakainya, sehingga transaksi yang tidak berbagi UTXO bisa diperiksa terpisah', 'Karena semua transaksi Bitcoin diperiksa oleh satu server pusat', 'Karena saldo setiap alamat disimpan di satu kolom yang mudah dibaca', 'Karena UTXO tidak memerlukan tanda tangan'], jelas: 'Transaksi yang memakai UTXO berbeda tidak saling mempengaruhi. Dalam model akun, dua transaksi dari alamat yang sama mengubah saldo yang sama sehingga urutannya penting.' },
        { tanya: 'Apa yang dimaksud dengan dust?', pilihan: ['UTXO yang nilainya lebih kecil dari biaya untuk membelanjakannya', 'Satoshi yang hilang karena pembulatan saat halving', 'Transaksi yang gagal masuk blok', 'Fee minimum yang dibayar kepada node'], jelas: 'Setiap input menambah ukuran transaksi dan fee dihitung per ukuran. UTXO yang lebih kecil dari biaya itu tidak menguntungkan untuk dibelanjakan.' },
        { tanya: 'Kapan konsolidasi banyak UTXO kecil paling masuk akal dari segi biaya?', pilihan: ['Saat mempool sepi dan fee per vbyte rendah', 'Saat fee sedang tinggi, supaya cepat selesai', 'Tepat setelah halving', 'Kapan saja, karena biayanya selalu sama'], jelas: 'Biaya konsolidasi sebanding dengan fee per vbyte saat itu. Menggabungkan 200 input pada 2 sat/vB jauh lebih murah daripada pada 50 sat/vB.' },
      ] },
    { kode: 'transaksi-bitcoin', judul: 'Transaksi Bitcoin Secara Mendalam', ringkas: 'Bongkar isi sebuah transaksi, bahasa Script yang menguncinya, jenis-jenis alamat, dan kunci waktu yang menjadi dasar Lightning.',
      pelajaran: [
        { judul: 'Anatomi sebuah transaksi', isi: `
<h3>Konsepnya</h3>
<p>Transaksi Bitcoin adalah deretan byte dengan susunan yang tetap. Dompet Anda merakitnya, menandatanganinya, lalu menyiarkannya ke jaringan. Setiap node membongkar byte itu dengan urutan yang sama, sehingga semua node sepakat tentang isinya. Memahami susunannya membantu Anda membaca penjelajah blok (<i>block explorer</i>) dengan benar, dan mengerti dari mana fee, kembalian, dan kunci waktu berasal.</p>
<h3>Istilah yang dipakai</h3>
<p>Secara berurutan, sebuah transaksi berisi:</p>
<ol>
<li><b>version</b> (4 byte). Nomor versi aturan. Versi 1 adalah bentuk awal. Versi 2 diperlukan agar kunci waktu relatif (BIP68) berlaku. Sejak Bitcoin Core 28 (2024) ada juga kebijakan versi 3 (TRUC) untuk kasus khusus seperti Lightning.</li>
<li><b>Daftar input</b>. Setiap input berisi:
<ul>
<li><b>txid:vout</b>. Txid adalah hash 32 byte dari transaksi sebelumnya; vout adalah nomor urut output di transaksi itu, dimulai dari 0. Pasangan ini menunjuk tepat satu UTXO.</li>
<li><b>scriptSig</b>. Data pembuka kunci, misalnya tanda tangan dan kunci publik. Pada input SegWit native bagian ini kosong (pada SegWit yang dibungkus P2SH isinya hanya redeem script) dan datanya dipindah ke <b>witness</b>.</li>
<li><b>sequence</b> (4 byte). Awalnya dirancang untuk mengganti transaksi, kini dipakai untuk kunci waktu relatif dan sinyal RBF (<i>Replace-By-Fee</i>, mengganti transaksi yang belum terkonfirmasi dengan versi ber-fee lebih tinggi).</li>
</ul></li>
<li><b>Daftar output</b>. Setiap output berisi <b>value</b> (8 byte, dalam satoshi) dan <b>scriptPubKey</b>, yaitu syarat penguncian yang harus dipenuhi pembelanja berikutnya.</li>
<li><b>witness</b> (hanya pada transaksi SegWit). Tanda tangan dan data pembuka lain, satu tumpukan per input. Transaksi SegWit juga membawa penanda <i>marker</i> 0x00 dan <i>flag</i> 0x01 tepat setelah version.</li>
<li><b>locktime</b> (4 byte). Batas paling awal transaksi boleh masuk blok. Nilai di bawah 500.000.000 dibaca sebagai tinggi blok; nilai di atasnya dibaca sebagai waktu Unix. Nilai 0 berarti tanpa batas. Locktime hanya ditegakkan kalau setidaknya satu input memiliki sequence di bawah 0xffffffff.</li>
</ol>
<h3>Contoh</h3>
<p>Misalkan Anda membuka sebuah transaksi di penjelajah blok dan melihat ringkasan berikut:</p>
<pre>version: 2
input 0: a1b2...9f:1   sequence 0xfffffffd
  witness: [tanda tangan] [kunci publik]
output 0: 250.000 sat   OP_0 [hash 20 byte]
output 1: 740.000 sat   OP_1 [kunci 32 byte]
locktime: 850000</pre>
<p>Cara membacanya: transaksi ini membelanjakan output nomor 1 dari transaksi a1b2...9f. Inputnya SegWit karena datanya ada di witness. Sequence 0xfffffffd, yang lebih kecil dari 0xfffffffe, adalah sinyal RBF (BIP125). Sejak Bitcoin Core 28 (2024), node bawaan menerima penggantian transaksi belum terkonfirmasi (full-RBF) walau tanpa sinyal ini, jadi sinyal itu kini lebih berupa penanda daripada izin. Ada dua output: satu ke alamat SegWit versi 0 dan satu ke alamat Taproot. Locktime 850000 berarti transaksi ini baru boleh masuk blok setelah tinggi 850.000. Banyak dompet mengisi locktime dengan tinggi blok saat ini untuk mempersulit penambang menulis ulang blok terakhir demi merebut fee (<i>fee sniping</i>).</p>
<p>Satu hal lagi: txid dihitung tanpa witness. Karena itu, untuk input SegWit, pihak lain tidak bisa mengubah txid dengan mengutak-atik tanda tangan. Masalah ini dulu disebut <i>transaction malleability</i> dan diperbaiki oleh SegWit pada 2017.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Penjelajah blok menampilkan hasil tafsiran, bukan byte mentah. Label seperti "kembalian" atau nama pemilik alamat adalah tebakan penjelajah itu, bukan data transaksi. Kebijakan relay seperti RBF dan versi 3 juga bisa berubah antarversi Bitcoin Core; aturan konsensus tentang version, input, output, dan locktime jauh lebih stabil.</div>` },
        { judul: 'Bitcoin Script: bahasa kecil berbasis stack', isi: `
<h3>Konsepnya</h3>
<p>Setiap UTXO dikunci oleh sebuah program pendek, bukan oleh nama pemilik. Program itu ditulis dalam <b>Bitcoin Script</b>, bahasa sederhana yang dijalankan setiap node saat memeriksa transaksi. Pembelanja menyediakan data pembuka (di scriptSig atau witness), lalu node menjalankan data itu bersama script pengunci (scriptPubKey). Kalau di akhir eksekusi hasilnya "benar", UTXO boleh dibelanjakan.</p>
<p>Jadi "memiliki bitcoin" berarti mampu menyediakan data yang membuat script penguncinya bernilai benar. Biasanya data itu adalah tanda tangan dari kunci privat Anda.</p>
<h3>Cara kerjanya</h3>
<p>Script bekerja dengan <b>stack</b> (tumpukan): struktur data tempat item terakhir yang dimasukkan menjadi item pertama yang diambil, seperti tumpukan piring. Script dibaca dari kiri ke kanan. Data didorong ke atas tumpukan. Perintah, yang disebut <b>opcode</b>, mengambil item dari atas tumpukan, mengolahnya, lalu menaruh hasilnya kembali.</p>
<p>Beberapa opcode yang sering muncul:</p>
<ul>
<li><b>OP_DUP</b>: menyalin item teratas.</li>
<li><b>OP_HASH160</b>: mengganti item teratas dengan hash-nya (SHA-256 lalu RIPEMD-160, hasil 20 byte).</li>
<li><b>OP_EQUALVERIFY</b>: membandingkan dua item teratas; kalau tidak sama, script langsung gagal.</li>
<li><b>OP_CHECKSIG</b>: memeriksa tanda tangan terhadap kunci publik dan isi transaksi, lalu menaruh hasil benar atau salah.</li>
</ul>
<h3>Contoh</h3>
<p>Script pengunci P2PKH yang lazim adalah:</p>
<pre>OP_DUP OP_HASH160 [hash kunci publik] OP_EQUALVERIFY OP_CHECKSIG</pre>
<p>Pembelanja menyediakan [tanda tangan] [kunci publik]. Jalannya eksekusi:</p>
<ol>
<li>Tanda tangan lalu kunci publik didorong ke tumpukan. Isi dari bawah: tanda tangan, kunci publik.</li>
<li>OP_DUP menyalin kunci publik. Isi: tanda tangan, kunci publik, kunci publik.</li>
<li>OP_HASH160 mengubah salinan teratas menjadi hash-nya.</li>
<li>[hash kunci publik] dari script pengunci didorong ke tumpukan.</li>
<li>OP_EQUALVERIFY membandingkan dua hash teratas. Kalau cocok, keduanya dibuang; kalau tidak, script gagal.</li>
<li>OP_CHECKSIG memeriksa tanda tangan dengan kunci publik yang tersisa. Hasil benar berarti pembelanjaan sah.</li>
</ol>
<p>Kenapa Script sengaja <b>tidak Turing-complete</b>, artinya tidak bisa menjalankan sembarang program? Script tidak punya perulangan (<i>loop</i>) dan tidak bisa melompat mundur. Setiap script selesai dalam jumlah langkah yang terbatas oleh panjangnya sendiri. Ini penting karena setiap node di dunia harus menjalankan setiap script. Kalau ada program yang bisa berputar tanpa henti, penyerang bisa membuat semua node macet. Ethereum mengatasi masalah yang sama dengan sistem biaya gas; Bitcoin memilih membatasi bahasanya.</p>
<p>Pembatasan ini juga mengurangi celah serangan. Beberapa opcode, seperti OP_CAT, bahkan dinonaktifkan pada 2010 setelah ditemukan bug. Usulan untuk mengaktifkan kembali OP_CAT atau menambah opcode baru seperti OP_CHECKTEMPLATEVERIFY masih diperdebatkan komunitas per 2025.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Script hanya bisa memeriksa data di dalam transaksi. Script tidak bisa membaca harga, saldo lain, atau data dari luar blockchain. Kontrak yang rumit di Bitcoin biasanya dibangun dari beberapa transaksi yang disiapkan bersama, bukan dari satu script panjang. Script buatan sendiri juga berisiko: satu kesalahan logika bisa membuat koin terkunci selamanya.</div>` },
        { judul: 'Jenis penguncian: dari P2PK sampai Taproot', isi: `
<h3>Konsepnya</h3>
<p>Script pengunci bisa ditulis bebas, tapi dalam praktik hampir semua output memakai beberapa pola baku. Pola baku memudahkan dompet mengenali output miliknya, menghitung ukuran transaksi, dan membuat alamat. Setiap pola baru muncul untuk memperbaiki kelemahan pola sebelumnya: ukuran, privasi, atau fleksibilitas.</p>
<h3>Cara kerjanya</h3>
<table>
<tr><th>Pola</th><th>Script pengunci (ringkas)</th><th>Alamat</th><th>Mulai berlaku</th></tr>
<tr><td>P2PK</td><td>[kunci publik] OP_CHECKSIG</td><td>tidak ada format baku</td><td>2009</td></tr>
<tr><td>P2PKH</td><td>OP_DUP OP_HASH160 [hash 20 byte] OP_EQUALVERIFY OP_CHECKSIG</td><td>awalan 1</td><td>2009</td></tr>
<tr><td>P2SH</td><td>OP_HASH160 [hash script 20 byte] OP_EQUAL</td><td>awalan 3</td><td>2012 (BIP16)</td></tr>
<tr><td>P2WPKH</td><td>OP_0 [hash 20 byte]</td><td>awalan bc1q</td><td>2017 (SegWit)</td></tr>
<tr><td>P2WSH</td><td>OP_0 [hash script 32 byte]</td><td>awalan bc1q, lebih panjang</td><td>2017 (SegWit)</td></tr>
<tr><td>P2TR</td><td>OP_1 [kunci publik 32 byte]</td><td>awalan bc1p</td><td>2021 (Taproot)</td></tr>
</table>
<ul>
<li><b>P2PK</b> (<i>Pay to Public Key</i>) mengunci langsung ke kunci publik. Banyak imbalan blok era awal, termasuk yang diduga milik Satoshi, memakai pola ini. Kekurangannya, kunci publik terlihat sejak awal dan ukurannya besar.</li>
<li><b>P2PKH</b> (<i>Pay to Public Key Hash</i>) hanya menaruh hash kunci publik. Kunci publiknya baru terungkap saat koin dibelanjakan.</li>
<li><b>P2SH</b> (<i>Pay to Script Hash</i>) memindahkan beban script yang rumit ke pembelanja. Pengirim cukup membayar ke hash sebuah script; pembelanja nanti mengungkap script lengkapnya (<i>redeem script</i>) beserta data pembukanya. Pola ini membuat <b>multisig</b> praktis, misalnya 2-dari-3: OP_2 [kunci A] [kunci B] [kunci C] OP_3 OP_CHECKMULTISIG.</li>
<li><b>SegWit versi 0</b> (P2WPKH dan P2WSH) memindahkan tanda tangan ke witness yang dihitung lebih ringan: satu byte witness bernilai seperempat vbyte. Hasilnya fee lebih murah dan txid tidak bisa diubah pihak ketiga.</li>
<li><b>Taproot</b> (P2TR) memakai tanda tangan Schnorr (BIP340). Satu output bisa dibelanjakan lewat dua jalur: jalur kunci (<i>key path</i>), cukup satu tanda tangan; atau jalur script (<i>script path</i>), dengan membuka salah satu cabang script yang disimpan dalam pohon Merkle. Hanya cabang yang dipakai yang terungkap; cabang lain tetap tersembunyi.</li>
</ul>
<h3>Contoh</h3>
<p>Sebuah perusahaan menyimpan dana dengan aturan "dua dari tiga direktur harus setuju". Dengan P2SH, setiap pembelanjaan mengungkap bahwa ini multisig 2-dari-3, lengkap dengan ketiga kunci publiknya.</p>
<p>Dengan Taproot, kunci dua direktur yang paling sering menandatangani bisa digabung menjadi satu kunci lewat protokol MuSig2, sementara kombinasi lainnya disimpan sebagai cabang script. Saat pasangan utama sepakat, transaksi terlihat seperti pembayaran biasa dari satu kunci. Cabang lain hanya dibuka kalau salah satu dari mereka berhalangan. Pengamat luar tidak tahu ada aturan multisig, dan fee-nya lebih kecil.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Output P2PK, alamat yang sudah pernah dipakai membelanjakan tetapi masih menyimpan atau menerima dana, dan output Taproot (yang menaruh kunci publik hasil penyesuaian langsung di script pengunci) membuat kunci publik terlihat. Hal ini sering muncul dalam diskusi tentang ancaman komputer kuantum di masa depan. Tahun di tabel adalah tahun aturan mulai berlaku; adopsi di dompet dan bursa berjalan bertahap selama bertahun-tahun.</div>` },
        { judul: 'Format alamat dan pentingnya checksum', isi: `
<h3>Konsepnya</h3>
<p>Alamat Bitcoin tidak disimpan di blockchain. Blockchain hanya menyimpan script pengunci. Alamat adalah cara menuliskan script pengunci itu sebagai teks pendek yang aman diketik, disalin, dan dijadikan kode QR. Dompet pengirim menerjemahkan alamat kembali menjadi script pengunci saat membuat transaksi.</p>
<p>Karena salah satu karakter bisa mengirim uang ke tempat yang salah untuk selamanya, setiap format alamat membawa <b>checksum</b>: beberapa karakter tambahan yang dihitung dari isi alamat. Kalau ada karakter yang salah ketik, checksum tidak cocok dan dompet menolak alamat itu sebelum uang terkirim.</p>
<h3>Istilah yang dipakai</h3>
<p><b>Base58Check</b> adalah format lama. Isinya satu byte versi, 20 byte hash, dan 4 byte checksum dari double SHA-256, lalu ditulis dengan 58 karakter. Karakter yang mudah tertukar sengaja dibuang: angka 0, huruf O besar, huruf I besar, dan huruf l kecil. Byte versi menentukan awalan:</p>
<ul>
<li>Versi 0x00 menghasilkan awalan <b>1</b>, untuk P2PKH.</li>
<li>Versi 0x05 menghasilkan awalan <b>3</b>, untuk P2SH, termasuk SegWit yang dibungkus P2SH.</li>
</ul>
<p>Base58Check membedakan huruf besar dan kecil, sehingga sulit dibacakan dan kode QR-nya kurang efisien.</p>
<p><b>Bech32</b> (BIP173, 2017) dibuat untuk alamat SegWit. Susunannya: bagian yang mudah dibaca manusia, yaitu "bc" untuk jaringan utama atau "tb" untuk testnet; pemisah "1"; lalu data dan 6 karakter checksum. Karakter pertama setelah "bc1" menunjukkan versi witness: <b>q</b> berarti versi 0. Bech32 tidak membedakan huruf besar dan kecil, dan bagian datanya tidak memakai karakter 1, b, i, dan o.</p>
<p><b>Bech32m</b> (BIP350, 2021) adalah perbaikan untuk witness versi 1 ke atas. Awalan <b>bc1p</b> berarti witness versi 1, yaitu Taproot. Perbaikan ini diperlukan karena Bech32 punya kelemahan: kalau alamat berakhiran huruf p, menambah atau menghapus huruf q tepat sebelum p bisa lolos dari checksum. Bech32m mengganti konstanta checksum untuk menutup celah itu.</p>
<h3>Contoh</h3>
<table>
<tr><th>Awalan</th><th>Format</th><th>Jenis</th></tr>
<tr><td>1...</td><td>Base58Check</td><td>P2PKH</td></tr>
<tr><td>3...</td><td>Base58Check</td><td>P2SH, misalnya multisig</td></tr>
<tr><td>bc1q... (42 karakter)</td><td>Bech32</td><td>P2WPKH</td></tr>
<tr><td>bc1q... (62 karakter)</td><td>Bech32</td><td>P2WSH</td></tr>
<tr><td>bc1p... (62 karakter)</td><td>Bech32m</td><td>P2TR (Taproot)</td></tr>
</table>
<p>Di mana keunggulan checksum Bech32? Bukan pada peluang lolos kesalahan acak. Checksum 4 byte Base58Check justru sedikit lebih kecil peluang lolosnya, sekitar satu banding 4 miliar, dibanding Bech32 yang kurang dari satu banding semiliar. Keunggulan Bech32 adalah <b>jaminan</b>: setiap kesalahan yang mengenai sampai 4 karakter pasti terdeteksi. Salah ketik manusia biasanya hanya satu atau dua karakter, jadi jaminan inilah yang paling berguna dalam praktik.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Checksum hanya melindungi dari salah ketik, bukan dari alamat yang salah tapi sah. Malware pengganti clipboard menukar alamat yang Anda salin dengan alamat penyerang yang checksum-nya benar. Cocokkan alamat di layar perangkat yang tepercaya, jangan hanya beberapa karakter awal. Pastikan juga dompet atau bursa pengirim sudah mendukung format bc1p sebelum Anda memberikan alamat Taproot.</div>` },
        { judul: 'Kunci waktu, kunci hash, dan HTLC', isi: `
<h3>Konsepnya</h3>
<p>Selain tanda tangan, Bitcoin bisa mengunci koin dengan dua syarat lain: <b>waktu</b> ("belum boleh dibelanjakan sebelum titik X") dan <b>rahasia</b> ("siapa pun yang bisa menunjukkan data dengan hash H boleh membelanjakan"). Dua syarat sederhana ini, digabung dengan tanda tangan, menjadi bahan dasar Lightning Network, atomic swap, dan banyak skema warisan atau cadangan dana.</p>
<h3>Cara kerjanya</h3>
<p>Ada empat alat kunci waktu. Keempatnya dibedakan menurut dua hal: mutlak atau relatif, dan berlaku di level transaksi atau di level script.</p>
<table>
<tr><th></th><th>Level transaksi</th><th>Level script (opcode)</th></tr>
<tr><td><b>Mutlak</b>: tinggi blok atau waktu tertentu</td><td>nLockTime</td><td>OP_CHECKLOCKTIMEVERIFY (CLTV, BIP65, 2015)</td></tr>
<tr><td><b>Relatif</b>: sekian blok setelah UTXO terkonfirmasi</td><td>nSequence (BIP68, 2016)</td><td>OP_CHECKSEQUENCEVERIFY (CSV, BIP112, 2016)</td></tr>
</table>
<p>Perbedaan level itu penting. <b>nLockTime</b> hanya membatasi satu transaksi yang sudah Anda tanda tangani; pemilik kunci tetap bisa membuat transaksi lain tanpa kunci waktu dan membelanjakan koin lebih dulu. <b>CLTV</b> ditulis di script pengunci output, sehingga koin itu sendiri yang terkunci: tidak ada transaksi apa pun yang bisa membelanjakannya sebelum waktunya.</p>
<p>Kunci waktu relatif memakai kolom sequence di input, dan transaksinya harus versi 2 ke atas. Nilainya bisa berupa jumlah blok atau kelipatan 512 detik, dihitung sejak UTXO yang dibelanjakan masuk blok. CSV adalah versi opcode-nya. Kunci relatif berguna ketika Anda tidak tahu kapan sebuah transaksi akan terkonfirmasi, tapi ingin memberi jeda tetap sesudahnya.</p>
<p><b>Kunci hash</b> memakai opcode seperti OP_SHA256 lalu OP_EQUALVERIFY. Pembelanja harus menyerahkan <i>preimage</i>, yaitu data asli yang hash-nya cocok dengan H. Hash tidak bisa dibalik, jadi hanya orang yang tahu rahasianya yang bisa membuka.</p>
<h3>Contoh</h3>
<p>Gabungan kunci hash dan kunci waktu disebut <b>HTLC</b> (<i>Hash Time-Locked Contract</i>). Bentuk sederhananya:</p>
<pre>OP_IF
  OP_SHA256 [H] OP_EQUALVERIFY [kunci Budi]
OP_ELSE
  [tinggi blok T] OP_CHECKLOCKTIMEVERIFY OP_DROP [kunci Ani]
OP_ENDIF
OP_CHECKSIG</pre>
<p>Artinya: Budi boleh mengambil koin kalau ia menunjukkan rahasia dengan hash H dan menandatangani. Kalau sampai blok T Budi tidak melakukannya, Ani boleh menarik kembali koinnya.</p>
<p>Pada <b>atomic swap</b>, Ani dan Budi menukar BTC dengan koin di blockchain lain. Keduanya membuat HTLC dengan hash H yang sama. Ani, yang memegang rahasia, memberi batas waktu lebih panjang pada HTLC buatannya. Saat Ani mengambil koin Budi, rahasianya terungkap di blockchain, dan Budi memakai rahasia yang sama untuk mengambil koin Ani. Pertukaran terjadi utuh atau tidak sama sekali, tanpa perantara. <b>Lightning</b> memakai prinsip yang sama untuk meneruskan pembayaran lewat beberapa perantara, dibahas di kursus Lightning Network.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Kunci waktu berbasis tanggal memakai median waktu 11 blok terakhir, bukan jam dinding, sehingga bisa tertinggal sekitar satu jam. Kalau batas waktu HTLC terlalu pendek, atau jaringan sedang macet dengan fee tinggi, pihak yang berhak bisa gagal mengklaim tepat waktu. Koin yang dikunci CLTV juga tidak bisa ditarik lebih awal dalam keadaan darurat, jadi pikirkan matang-matang sebelum mengunci jangka panjang.</div>` },
      ],
      kuis: [
        { tanya: 'Apa arti pasangan txid:vout di sebuah input?', pilihan: ['Penunjuk ke satu output tertentu dari transaksi sebelumnya', 'Alamat penerima dan jumlah yang dikirim', 'Nomor blok dan urutan transaksi di blok itu', 'Tanda tangan dan kunci publik pembelanja'], jelas: 'Txid adalah hash transaksi sebelumnya dan vout adalah nomor urut output di dalamnya. Pasangan ini menunjuk tepat satu UTXO yang akan dibelanjakan.' },
        { tanya: 'Kenapa Bitcoin Script sengaja tidak memiliki perulangan (loop)?', pilihan: ['Agar setiap script pasti selesai dalam langkah terbatas sehingga node tidak bisa dibuat macet', 'Karena komputer tahun 2009 belum mampu menjalankan perulangan', 'Supaya script bisa membaca harga dari luar blockchain', 'Karena perulangan sudah digantikan oleh sistem gas'], jelas: 'Setiap node harus menjalankan setiap script. Tanpa perulangan, lama eksekusi terbatas oleh panjang script, sehingga tidak ada program yang bisa berputar tanpa henti.' },
        { tanya: 'Alamat berawalan bc1p memakai format dan jenis penguncian apa?', pilihan: ['Bech32m, Taproot (witness versi 1)', 'Bech32, P2WPKH (witness versi 0)', 'Base58Check, P2SH', 'Base58Check, P2PKH'], jelas: 'Huruf p setelah bc1 menandakan witness versi 1, yaitu Taproot, yang ditulis dengan Bech32m. Awalan bc1q adalah witness versi 0 dengan Bech32.' },
        { tanya: 'Apa perbedaan penting antara nLockTime dan OP_CHECKLOCKTIMEVERIFY?', pilihan: ['nLockTime hanya membatasi satu transaksi yang ditandatangani, CLTV mengunci output itu sendiri di script', 'nLockTime bersifat relatif, sedangkan CLTV bersifat mutlak', 'CLTV hanya berlaku di testnet', 'Keduanya sama persis, hanya beda nama'], jelas: 'Dengan nLockTime, pemilik kunci masih bisa membuat transaksi lain yang membelanjakan koin lebih dulu. CLTV ada di script pengunci, jadi tidak ada transaksi yang bisa membelanjakan output itu sebelum waktunya.' },
        { tanya: 'Dalam sebuah HTLC, apa yang terjadi kalau penerima tidak menunjukkan preimage sampai batas waktu?', pilihan: ['Pengirim bisa menarik kembali koinnya lewat jalur kunci waktu', 'Koin otomatis dibakar', 'Penambang mengambil koinnya sebagai fee', 'Penerima tetap bisa mengambil kapan saja tanpa preimage'], jelas: 'HTLC punya dua jalur: jalur rahasia untuk penerima dan jalur kunci waktu untuk pengirim. Setelah batas waktu lewat, jalur pengembalian terbuka.' },
      ] },
    { kode: 'penambangan', judul: 'Penambangan, Halving & Keamanan Bitcoin', ringkas: 'Bagaimana blok dibuat, kenapa suplai berhenti sedikit di bawah 21 juta, dan berapa mahal menyerang jaringan Bitcoin.',
      pelajaran: [
        { judul: 'Blok, header, dan difficulty', isi: `
<h3>Konsepnya</h3>
<p>Transaksi yang sudah disiarkan belum final. Transaksi itu menunggu di <b>mempool</b>, antrean transaksi yang belum masuk blok di setiap node, sampai seorang penambang memasukkannya ke dalam <b>blok</b>. Blok adalah paket transaksi yang ditambahkan ke rantai rata-rata setiap 10 menit. Untuk berhak menambahkan blok, penambang harus membuktikan bahwa ia sudah mengeluarkan kerja komputasi yang besar. Bukti ini disebut <b>proof of work</b>.</p>
<p>Kenapa harus ada kerja? Karena jaringan tanpa pemimpin butuh cara memutuskan versi sejarah mana yang benar. Bitcoin memilih rantai dengan akumulasi kerja terbanyak. Memalsukan sejarah berarti mengulang kerja itu, dan kerja itu mahal.</p>
<h3>Cara kerjanya</h3>
<p>Setiap blok diawali <b>header</b> berukuran 80 byte:</p>
<table>
<tr><th>Kolom</th><th>Ukuran</th><th>Isi</th></tr>
<tr><td>version</td><td>4 byte</td><td>versi blok dan sinyal peningkatan aturan</td></tr>
<tr><td>hash blok sebelumnya</td><td>32 byte</td><td>pengikat ke blok induk</td></tr>
<tr><td>merkle root</td><td>32 byte</td><td>ringkasan hash semua transaksi di blok</td></tr>
<tr><td>timestamp</td><td>4 byte</td><td>waktu menurut penambang</td></tr>
<tr><td>bits</td><td>4 byte</td><td>target dalam bentuk ringkas</td></tr>
<tr><td>nonce</td><td>4 byte</td><td>angka yang diubah-ubah penambang</td></tr>
</table>
<p>Penambang menghitung double SHA-256 dari header. Hasilnya angka 256-bit yang tampak acak. Blok sah kalau angka itu <b>tidak melebihi target</b>. Karena hasil hash tidak bisa ditebak, satu-satunya cara adalah mencoba: ubah nonce, hitung, cek, ulangi. Kalau semua nilai nonce habis, penambang mengubah data lain, misalnya bagian transaksi <b>coinbase</b> (transaksi pertama di blok yang berisi imbalan untuk penambang). Merkle root pun berubah dan ruang coba baru terbuka.</p>
<p>Hash blok sebelumnya membuat rantai saling mengunci. Mengubah satu transaksi lama mengubah merkle root blok itu, mengubah hash blok itu, dan membatalkan semua blok sesudahnya.</p>
<p><b>Difficulty</b> adalah ukuran seberapa sulit target saat ini dibanding target paling mudah. Setiap <b>2.016 blok</b>, semua node menghitung ulang target dengan rumus yang sama. Kalau 2.016 blok terakhir selesai lebih cepat dari dua minggu (2.016 × 10 menit), target diturunkan sehingga lebih sulit. Kalau lebih lambat, target dinaikkan. Perubahan per periode dibatasi: difficulty paling banyak naik menjadi empat kali lipat atau turun menjadi seperempatnya.</p>
<h3>Contoh</h3>
<p>Andaikan banyak mesin baru menyala dan 2.016 blok selesai dalam 12 hari, bukan 14. Pada penyesuaian berikutnya, difficulty naik sekitar 14/12, kira-kira 16,7 persen, sehingga rata-rata waktu blok kembali mendekati 10 menit.</p>
<p>Arah sebaliknya juga terjadi. Saat Tiongkok melarang penambangan pada 2021, banyak mesin mati mendadak. Difficulty turun sekitar 28 persen dalam satu penyesuaian pada Juli 2021, penurunan persentase terbesar dalam sejarah Bitcoin. Jaringan tetap berjalan; bloknya hanya lebih lambat sampai penyesuaian itu tiba.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Sepuluh menit adalah rata-rata, bukan jadwal. Karena menemukan blok bersifat peluang, jarak antarblok bisa satu menit atau lebih dari satu jam. Penyesuaian difficulty juga tertinggal: kalau hashrate turun tajam, blok akan lambat sampai periode 2.016 blok itu selesai. Ini salah satu alasan konfirmasi transaksi kadang terasa lama walau fee Anda wajar.</div>` },
        { judul: 'Imbalan blok, halving, dan batas 21 juta', isi: `
<h3>Konsepnya</h3>
<p>Penambang mengeluarkan uang untuk listrik dan mesin. Imbalannya ada dua: <b>subsidi blok</b>, yaitu bitcoin baru yang dicetak di transaksi coinbase, dan <b>fee</b> dari semua transaksi di blok itu. Subsidi adalah satu-satunya cara bitcoin baru tercipta. Jumlahnya ditetapkan kode, bukan oleh orang atau lembaga, dan dipotong setengah setiap <b>210.000 blok</b>, kira-kira empat tahun sekali. Peristiwa ini disebut <b>halving</b>.</p>
<h3>Cara kerjanya</h3>
<table>
<tr><th>Peristiwa</th><th>Tinggi blok</th><th>Waktu</th><th>Subsidi per blok</th></tr>
<tr><td>Awal</td><td>0</td><td>Januari 2009</td><td>50 BTC</td></tr>
<tr><td>Halving pertama</td><td>210.000</td><td>November 2012</td><td>25 BTC</td></tr>
<tr><td>Halving kedua</td><td>420.000</td><td>Juli 2016</td><td>12,5 BTC</td></tr>
<tr><td>Halving ketiga</td><td>630.000</td><td>Mei 2020</td><td>6,25 BTC</td></tr>
<tr><td>Halving keempat</td><td>840.000</td><td>April 2024</td><td>3,125 BTC</td></tr>
<tr><td>Halving kelima</td><td>1.050.000</td><td>diperkirakan 2028</td><td>1,5625 BTC</td></tr>
</table>
<p>Kenapa totalnya 21 juta? Karena deretnya terus mengecil. Era pertama (210.000 blok × 50 BTC) menghasilkan 10,5 juta BTC. Era kedua menambah 5,25 juta, era ketiga 2,625 juta, dan seterusnya, masing-masing separuh era sebelumnya. Jumlah deret ini mendekati 21 juta tapi tidak pernah mencapainya. Karena subsidi dihitung dalam satoshi bulat dan pecahan di bawah satu satoshi dibuang, total akhirnya sedikit di bawah 21 juta, sekitar 20.999.999,98 BTC. Subsidi terakhir diperkirakan terjadi sekitar tahun 2140.</p>
<p>Setiap node memeriksa aturan ini. Kalau penambang menulis subsidi lebih besar dari yang diizinkan, bloknya ditolak semua node, dan ia kehilangan seluruh biaya yang sudah dikeluarkan untuk blok itu. Inilah yang membuat jadwal suplai dipatuhi tanpa perlu ada pengawas.</p>
<h3>Contoh</h3>
<p>Setelah halving April 2024, jaringan mencetak sekitar 450 BTC per hari (144 blok × 3,125 BTC), turun dari sekitar 900 BTC per hari sebelumnya. Pada 2026, sekitar 20 juta BTC, atau lebih dari 95 persen suplai akhir, sudah tertambang. Sisa sekitar satu juta BTC akan dicetak pelan-pelan selama lebih dari seratus tahun.</p>
<p>Di sinilah pertanyaan jangka panjang muncul. Subsidi terus mengecil, jadi keamanan jaringan kelak harus dibayar terutama oleh <b>fee</b>. Pada kebanyakan hari di 2024–2025, fee hanya menyumbang sebagian kecil pendapatan penambang. Ada lonjakan sesaat, misalnya di blok halving 840.000 yang fee-nya melebihi subsidinya karena ramainya peluncuran token Runes. Apakah permintaan ruang blok akan cukup tinggi untuk membiayai keamanan setelah beberapa halving lagi masih menjadi perdebatan terbuka, bukan hal yang sudah terjawab.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Tanggal halving di masa depan hanya perkiraan karena waktu blok bergantung pada hashrate. Batas 21 juta adalah aturan konsensus yang secara teknis bisa diubah kalau hampir semua pengguna menjalankan perangkat lunak baru; hal itu sangat kecil kemungkinannya karena bertentangan dengan kepentingan para pemegang. Halving juga tidak menjamin harga naik. Baru ada empat kali halving, terlalu sedikit untuk dijadikan pola yang bisa diandalkan.</div>` },
        { judul: 'Pool, ASIC, energi, dan biaya menyerang', isi: `
<h3>Konsepnya</h3>
<p>Keamanan Bitcoin tidak bergantung pada kejujuran penambang, melainkan pada <b>biaya</b>. Untuk menulis ulang sejarah transaksi, penyerang harus membuat rantai dengan kerja lebih banyak daripada rantai jujur. Agar serangan hampir pasti berhasil, bukan untung-untungan, ia perlu menguasai lebih dari separuh daya hash jaringan dan membayar listriknya. Semua bagian penambangan, dari mesin sampai pool, pada akhirnya adalah soal siapa yang membayar biaya itu dan berapa besarnya.</p>
<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Hashrate</b>: jumlah percobaan hash per detik di seluruh jaringan. Sepanjang 2025 angkanya naik dari sekitar 800 exahash per detik hingga melewati 1 zetahash per detik (seribu exahash per detik) sejak sekitar September 2025 (1 EH/s sama dengan satu miliar miliar hash per detik).</li>
<li><b>ASIC</b> (<i>Application-Specific Integrated Circuit</i>): chip yang dirancang hanya untuk menghitung SHA-256. Sejak sekitar 2013, ASIC menggantikan CPU dan GPU karena jauh lebih efisien. Akibatnya, menambang Bitcoin dengan laptop sudah tidak masuk akal secara ekonomi.</li>
<li><b>Pool tambang</b>: gabungan banyak penambang yang berbagi imbalan. Satu mesin mungkin baru menemukan blok setelah bertahun-tahun; lewat pool, pemiliknya menerima bagian kecil secara rutin sesuai kontribusi kerjanya. Operator pool biasanya yang menyusun isi blok.</li>
<li><b>Serangan 51 persen</b>: penguasaan mayoritas hashrate untuk membatalkan transaksi yang sudah terkonfirmasi (belanja ganda) atau menolak memasukkan transaksi tertentu (sensor).</li>
</ul>
<h3>Cara kerjanya</h3>
<p>Apa yang bisa dan tidak bisa dilakukan penyerang mayoritas? Ia bisa membatalkan transaksinya sendiri yang sudah terkonfirmasi, misalnya setelah menerima uang tunai dari bursa, lalu menambang rantai alternatif tempat setorannya tidak pernah terjadi. Ia juga bisa menyensor transaksi. Tetapi ia <b>tidak bisa</b> mencuri koin dari kunci orang lain, mencetak bitcoin di luar jadwal, atau mengubah aturan. Blok yang melanggar aturan tetap ditolak semua node, sebesar apa pun hashrate di baliknya.</p>
<p>Biaya menyerang sulit dicapai karena hashrate sebesar itu tidak tersedia untuk disewa. Penyerang harus membeli ASIC dalam jumlah setara seluruh industri, lalu membayar listriknya. Serangan yang berhasil juga cenderung merusak nilai bitcoin, sehingga mesin mahal milik penyerang ikut kehilangan nilai. Inilah argumen utama keamanan proof of work: menyerang lebih mahal daripada ikut menambang dengan jujur.</p>
<h3>Contoh</h3>
<p>Soal energi: estimasi Cambridge Bitcoin Electricity Consumption Index untuk 2024–2025 menempatkan konsumsi listrik tahunan Bitcoin (estimasi terbaiknya) di kisaran sekitar 150 sampai 240 terawatt-jam, sebanding dengan konsumsi listrik sebuah negara berukuran menengah. Pendukung berargumen bahwa penambang mengejar listrik termurah, yang sering berasal dari energi terbuang atau terbarukan, dan bahwa pengeluaran energi itulah yang membuat serangan mahal. Pengkritik menunjuk jejak karbon dan mempertanyakan apakah biaya sebesar itu sepadan.</p>
<p>Soal pool: pada 2024–2025, dua pool terbesar, Foundry USA dan AntPool, bersama-sama menemukan sekitar separuh blok. Pemilik mesin bisa berpindah pool dalam hitungan menit kalau operator berbuat curang, dan protokol seperti Stratum V2 berusaha mengembalikan hak menyusun isi blok kepada penambang. Meski begitu, konsentrasi ini adalah titik lemah yang nyata.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Angka hashrate, konsumsi listrik, dan pangsa pool di atas adalah estimasi pihak ketiga dan cepat berubah; periksa sumber terbaru sebelum mengutipnya. Belanja ganda lebih mudah dilakukan pada transaksi yang baru mendapat sedikit konfirmasi, jadi penerima pembayaran bernilai besar sebaiknya menunggu beberapa blok. Enam konfirmasi adalah kebiasaan umum, bukan aturan protokol.</div>` },
      ],
      kuis: [
        { tanya: 'Setiap berapa blok difficulty Bitcoin disesuaikan?', pilihan: ['2.016 blok, sekitar dua minggu', '210.000 blok, sekitar empat tahun', 'Setiap blok', '144 blok, sekitar satu hari'], jelas: 'Setiap 2.016 blok, node membandingkan waktu yang sebenarnya dengan target dua minggu, lalu menyesuaikan target agar rata-rata waktu blok kembali ke sekitar 10 menit.' },
        { tanya: 'Berapa subsidi blok setelah halving April 2024?', pilihan: ['3,125 BTC', '6,25 BTC', '1,5625 BTC', '12,5 BTC'], jelas: 'Halving keempat di blok 840.000 memotong subsidi dari 6,25 menjadi 3,125 BTC. Angka 1,5625 BTC baru berlaku setelah halving kelima, diperkirakan pada 2028.' },
        { tanya: 'Kenapa total suplai Bitcoin akhirnya sedikit di bawah 21 juta?', pilihan: ['Karena subsidi dihitung dalam satoshi bulat dan pecahan di bawah satu satoshi dibuang', 'Karena sebagian koin dibakar setiap halving', 'Karena Satoshi menyimpan sisanya di alamat khusus', 'Karena fee dikurangkan dari total suplai'], jelas: 'Deret 50, 25, 12,5, dan seterusnya mendekati 21 juta. Karena subsidi dibulatkan ke bawah dalam satoshi, jumlah akhirnya sedikit kurang dari 21 juta.' },
        { tanya: 'Mana yang TIDAK bisa dilakukan penyerang yang menguasai lebih dari separuh hashrate?', pilihan: ['Mencuri koin dari alamat orang lain tanpa kunci privatnya', 'Membatalkan transaksinya sendiri yang sudah terkonfirmasi', 'Menolak memasukkan transaksi tertentu ke blok', 'Membuat rantai alternatif dengan kerja lebih banyak'], jelas: 'Hashrate tidak bisa memalsukan tanda tangan. Blok yang membelanjakan koin tanpa tanda tangan sah akan ditolak semua node, sebesar apa pun hashrate penyerang.' },
        { tanya: 'Bagaimana penambang mencari hash header yang memenuhi target?', pilihan: ['Mengubah nonce dan data lain, lalu mengulang perhitungan hash sampai hasilnya tidak melebihi target', 'Menyelesaikan persamaan matematika rumit dengan rumus khusus', 'Memilih transaksi dengan fee tertinggi saja', 'Meminta persetujuan dari mayoritas node'], jelas: 'Hasil SHA-256 tidak bisa ditebak, jadi satu-satunya cara adalah mencoba berulang kali. Karena itu kerja yang dibuktikan setara dengan jumlah percobaan hash.' },
      ] },
    { kode: 'lightning', judul: 'Lightning Network', ringkas: 'Pembayaran bitcoin cepat dan murah lewat kanal di luar blockchain, beserta syarat dan keterbatasannya.',
      pelajaran: [
        { judul: 'Kanal pembayaran, commitment, dan routing', isi: `
<h3>Konsepnya</h3>
<p>Blockchain Bitcoin hanya menampung beberapa ribu transaksi per blok, dan setiap transaksi butuh fee serta menunggu konfirmasi. Untuk pembayaran kecil yang sering, seperti membeli kopi atau memberi tip, cara ini lambat dan mahal. <b>Lightning Network</b> memindahkan sebagian besar pembayaran keluar dari blockchain, tanpa mengharuskan Anda mempercayai perantara. Blockchain hanya dipakai untuk membuka dan menutup kanal, serta sebagai pengadil kalau ada kecurangan.</p>
<h3>Cara kerjanya</h3>
<p><b>1. Membuka kanal.</b> Ani (atau keduanya, pada kanal dual-funded) menyetor bitcoin ke satu output yang hanya bisa dibelanjakan dengan tanda tangan keduanya (2-dari-2). Transaksi ini disebut <b>funding transaction</b> dan tercatat di blockchain. Misalnya Ani menyetor 1.000.000 satoshi.</p>
<p><b>2. Memperbarui saldo.</b> Sebelum funding disiarkan, keduanya sudah menandatangani <b>commitment transaction</b>: transaksi yang membelanjakan output funding dan membagi isinya sesuai saldo terakhir. Transaksi ini tidak disiarkan, hanya disimpan masing-masing. Setiap kali Ani membayar Budi, mereka menandatangani commitment baru dengan pembagian baru, misalnya 990.000 untuk Ani dan 10.000 untuk Budi. Proses ini hanya pertukaran pesan antara dua node, jadi selesai dalam hitungan detik tanpa fee blockchain.</p>
<p><b>3. Mencegah curang.</b> Apa yang menghalangi Ani menyiarkan commitment lama yang lebih menguntungkannya? Setiap kali saldo diperbarui, masing-masing pihak menyerahkan <b>kunci pencabutan</b> (<i>revocation key</i>) untuk commitment sebelumnya. Bagian milik pihak yang menyiarkan juga dikunci dengan jeda relatif (CSV). Kalau Ani menyiarkan versi lama, Budi punya waktu selama jeda itu untuk memakai kunci pencabutan dan mengambil <b>seluruh</b> dana kanal sebagai hukuman.</p>
<p><b>4. Routing.</b> Anda tidak perlu membuka kanal dengan semua orang. Kalau Ani punya kanal dengan Budi, dan Budi punya kanal dengan Citra, Ani bisa membayar Citra lewat Budi memakai <b>HTLC</b> yang dijelaskan di kursus Transaksi Bitcoin Secara Mendalam.</p>
<h3>Contoh</h3>
<ol>
<li>Citra membuat rahasia R, menghitung hash H, lalu mengirim tagihan (<i>invoice</i>) berisi H kepada Ani.</li>
<li>Ani mengunci 10.010 satoshi di kanalnya dengan Budi: "Budi boleh mengambil kalau menunjukkan R dalam 40 blok."</li>
<li>Budi mengunci 10.000 satoshi di kanalnya dengan Citra: "Citra boleh mengambil kalau menunjukkan R dalam 20 blok." Selisih 10 satoshi adalah fee untuk Budi.</li>
<li>Citra menunjukkan R kepada Budi untuk mengambil 10.000 satoshi. Budi kini tahu R dan memakainya untuk mengambil 10.010 satoshi dari Ani.</li>
</ol>
<p>Batas waktu sengaja dibuat makin pendek ke arah penerima. Tujuannya, Budi selalu punya sisa waktu untuk menagih Ani setelah membayar Citra. Rahasia R sekaligus menjadi bukti bayar bagi Ani. Rute juga dibungkus dengan <b>onion routing</b>: setiap perantara hanya tahu langkah sebelum dan sesudahnya, bukan pengirim dan penerima akhir.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Penjelasan di atas adalah skema penalti yang dipakai Lightning saat ini. Mekanisme alternatif seperti eltoo membutuhkan perubahan aturan Bitcoin yang belum berlaku per 2025. Hukuman juga hanya bekerja kalau korban, atau pihak yang mewakilinya, sedang memantau blockchain selama jeda waktu itu. Soal ini dibahas di pelajaran berikutnya.</div>` },
        { judul: 'Kelebihan dan keterbatasan Lightning', isi: `
<h3>Konsepnya</h3>
<p>Lightning memberi pembayaran bitcoin yang hampir instan dan murah, tapi dengan cara kerja yang berbeda dari transaksi on-chain (transaksi yang langsung tercatat di blockchain). Kelebihan dan keterbatasannya berasal dari satu sumber: dana Anda berada di kanal yang harus dijaga, bukan di output yang cukup diam di blockchain.</p>
<h3>Cara kerjanya</h3>
<p><b>Kelebihan:</b></p>
<ul>
<li><b>Cepat.</b> Pembayaran selesai dalam hitungan detik, tanpa menunggu konfirmasi blok.</li>
<li><b>Murah untuk nilai kecil.</b> Fee routing terdiri dari fee dasar (misalnya 1 satoshi) plus persentase kecil yang dinyatakan dalam ppm (<i>parts per million</i>, per sejuta). Pembayaran puluhan ribu satoshi sering hanya ber-fee beberapa satoshi.</li>
<li><b>Pecahan sangat kecil.</b> Di dalam kanal, Lightning menghitung dalam milisatoshi, sehingga pembayaran mikro, misalnya per menit mendengarkan podcast, menjadi mungkin.</li>
<li><b>Lebih privat dibanding on-chain.</b> Pembayaran tidak tercatat di blockchain publik, dan rutenya dibungkus onion routing.</li>
</ul>
<p><b>Keterbatasan:</b></p>
<ul>
<li><b>Likuiditas kanal.</b> Anda hanya bisa mengirim sebesar saldo di sisi Anda, dan menerima sebesar saldo di sisi rekan kanal (<i>inbound liquidity</i>). Node baru yang membuka kanal sendiri awalnya bisa mengirim tapi tidak bisa menerima. Pembayaran besar juga bisa gagal kalau tidak ada rute yang semua kanalnya cukup likuid.</li>
<li><b>Harus online atau diwakili.</b> Untuk menerima, node Anda harus online. Untuk berjaga dari commitment lama yang disiarkan rekan, Anda harus memantau blockchain, atau memakai <b>watchtower</b>: layanan yang memantau atas nama Anda dan menyiarkan transaksi hukuman bila perlu.</li>
<li><b>Fee on-chain tetap ada.</b> Membuka dan menutup kanal adalah transaksi biasa. Saat fee on-chain tinggi, membuka kanal kecil bisa tidak sepadan.</li>
<li><b>Kerumitan dan kustodi.</b> Menjalankan node sendiri butuh keterampilan. Banyak pengguna memilih dompet kustodian, yaitu penyedia yang memegang kunci Anda, demi kemudahan. Artinya Anda kembali mempercayai pihak ketiga.</li>
</ul>
<h3>Contoh</h3>
<p>Pemakaian umum per 2025: tip untuk pembuat konten di jaringan sosial Nostr (disebut <i>zap</i>), pembayaran di merchant yang menerima bitcoin, kiriman uang lintas negara lewat aplikasi yang mengonversi ke mata uang lokal, dan penarikan dari bursa yang mendukung Lightning agar tidak membayar fee on-chain.</p>
<p>Bayangkan Anda ingin mulai menerima pembayaran Lightning. Ada tiga pilihan. Dompet non-kustodian dengan pengelolaan otomatis, seperti Phoenix, mengurus pembukaan kanal dan likuiditas masuk dengan imbalan fee layanan. Dompet kustodian lebih sederhana lagi, tapi saldo Anda sebenarnya adalah utang penyedia kepada Anda. Menjalankan node sendiri memberi kendali penuh, tapi Anda harus mengelola kanal, cadangan, dan likuiditas.</p>
<p>Kapasitas publik Lightning pada 2024–2025 berfluktuasi di kisaran sekitar 3.700 sampai 5.800 BTC menurut penjelajah seperti mempool.space dan 1ML, belum termasuk kanal privat yang tidak diumumkan. Angka ini kecil dibanding total suplai Bitcoin, jadi Lightning saat ini lebih cocok untuk pembayaran harian daripada memindahkan nilai besar.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Kehilangan data cadangan kanal bisa berarti kehilangan dana, dan memulihkan node dari cadangan lama bisa terbaca sebagai kecurangan sehingga memicu hukuman. Jangan menyimpan nilai besar di dompet Lightning yang selalu terhubung internet. Nama aplikasi dan angka kapasitas di atas berubah cepat; periksa kondisi terbaru sebelum memilih layanan.</div>` },
      ],
      kuis: [
        { tanya: 'Transaksi apa yang tercatat di blockchain saat membuka kanal Lightning?', pilihan: ['Funding transaction yang mengunci dana ke output 2-dari-2', 'Setiap commitment transaction baru', 'Setiap pembayaran yang lewat kanal', 'Tidak ada, kanal dibuka sepenuhnya di luar blockchain'], jelas: 'Funding transaction adalah transaksi on-chain yang menaruh dana di output yang butuh tanda tangan kedua pihak. Commitment transaction hanya disimpan dan tidak disiarkan selama kanal berjalan normal.' },
        { tanya: 'Apa yang terjadi kalau satu pihak menyiarkan commitment transaction lama?', pilihan: ['Pihak lain bisa memakai kunci pencabutan untuk mengambil seluruh dana kanal selama jeda waktu', 'Transaksi itu otomatis ditolak oleh semua node', 'Kanal dibekukan oleh operator Lightning', 'Saldo kedua pihak dikembalikan ke kondisi awal'], jelas: 'Commitment lama tetap sah secara aturan Bitcoin, jadi node tidak menolaknya. Pencegahnya adalah hukuman: pihak yang dirugikan memakai kunci pencabutan sebelum jeda CSV habis.' },
        { tanya: 'Kenapa batas waktu HTLC dibuat makin pendek ke arah penerima?', pilihan: ['Agar perantara selalu punya sisa waktu menagih pihak sebelumnya setelah membayar pihak berikutnya', 'Agar fee routing menjadi lebih murah', 'Karena penerima selalu lebih cepat online', 'Supaya penambang memprioritaskan transaksinya'], jelas: 'Perantara baru tahu rahasia setelah membayar ke arah penerima. Batas waktu yang lebih panjang di sisi pengirim memberinya waktu untuk menagih kembali.' },
        { tanya: 'Sebuah node Lightning baru membuka kanal sendiri dengan 500.000 satoshi. Kendala apa yang biasanya muncul?', pilihan: ['Belum bisa menerima pembayaran karena belum punya likuiditas masuk', 'Belum bisa mengirim pembayaran sama sekali', 'Harus menunggu 2.016 blok sebelum kanal bisa dipakai', 'Tidak bisa membayar ke node di negara lain'], jelas: 'Semua saldo ada di sisi pembuka kanal, jadi ia bisa mengirim. Untuk menerima, rekan kanal harus punya saldo di sisinya.' },
        { tanya: 'Apa fungsi watchtower di Lightning?', pilihan: ['Memantau blockchain atas nama Anda dan menyiarkan transaksi hukuman bila rekan kanal curang', 'Menyimpan kunci privat Anda sebagai cadangan', 'Mencari rute termurah untuk setiap pembayaran', 'Menambang blok khusus untuk transaksi Lightning'], jelas: 'Hukuman hanya bisa dijalankan selama jeda waktu setelah commitment lama disiarkan. Watchtower berjaga ketika node Anda sedang offline.' },
      ] },
    { kode: 'anonimitas-bitcoin', judul: 'Anonimitas Bitcoin', ringkas: 'Kenapa transaksi Bitcoin bisa dilacak, dan praktik privasi apa yang masuk akal tanpa melanggar hukum.',
      pelajaran: [
        { judul: 'Pseudonim, bukan anonim', isi: `
<h3>Konsepnya</h3>
<p>Bitcoin sering disebut anonim. Itu keliru. Bitcoin bersifat <b>pseudonim</b>: transaksi tidak memuat nama, tapi setiap transaksi, alamat, dan jumlahnya tercatat terbuka dan permanen untuk siapa pun. Begitu satu alamat dikaitkan dengan identitas Anda, riwayat yang terhubung dengan alamat itu bisa ditelusuri mundur dan maju, termasuk transaksi bertahun-tahun sebelumnya.</p>
<p>Perbandingan yang lebih tepat: Bitcoin seperti rekening bank yang mutasinya dipajang di internet, dengan nomor rekening sebagai pengganti nama. Selama tidak ada yang tahu nomor itu milik Anda, riwayat Anda tidak terhubung ke nama Anda. Masalahnya, ada banyak cara nomor itu diketahui.</p>
<h3>Cara kerjanya</h3>
<p>Perusahaan analisis blockchain seperti Chainalysis, Elliptic, dan TRM Labs mengelompokkan alamat menjadi dugaan "entitas" memakai beberapa aturan praktis, yang disebut <i>heuristik</i>:</p>
<ul>
<li><b>Kepemilikan input bersama</b> (<i>common input ownership</i>). Kalau satu transaksi memakai beberapa input, diasumsikan semua input itu milik orang yang sama, karena biasanya hanya satu dompet yang bisa menandatangani semuanya. Satoshi sendiri sudah menyebut kebocoran ini di bagian privasi whitepaper Bitcoin.</li>
<li><b>Deteksi kembalian</b> (<i>change detection</i>). Dari dua output, mana pembayaran dan mana kembalian? Petunjuknya: pembayaran sering berupa angka bulat, misalnya tepat 0,01 BTC, sedangkan kembalian angka acak; kembalian biasanya berjenis alamat sama dengan input; alamat yang belum pernah terlihat lebih mungkin kembalian.</li>
<li><b>Pemakaian ulang alamat.</b> Menerima banyak pembayaran di satu alamat langsung menyatukan semuanya dalam satu kelompok.</li>
<li><b>Data dari luar blockchain.</b> Ini yang paling kuat. Bursa terpusat mewajibkan <b>KYC</b> (<i>Know Your Customer</i>, verifikasi identitas dengan KTP dan swafoto). Setiap penarikan dari bursa ke dompet Anda menghubungkan alamat itu dengan nama Anda. Data ini bisa diminta aparat, dan kebocoran data bursa pernah terjadi.</li>
</ul>
<p>Selain itu, node yang pertama kali menyiarkan transaksi bisa mengungkap alamat IP pengirim, kecuali Anda memakai Tor atau node sendiri yang terlindungi.</p>
<h3>Contoh</h3>
<p>Anda membeli 0,05 BTC di bursa ber-KYC dan menariknya ke alamat A. Kemudian Anda menggabungkannya dengan 0,02 BTC dari alamat B, yang dulu Anda pakai untuk menerima bayaran dari seorang teman. Anda membayar 0,06 BTC ke toko daring dan menerima kembalian ke alamat C.</p>
<p>Seorang analis bisa menyimpulkan: A milik Anda (data bursa); B juga milik Anda (menjadi input bersama A); C kemungkinan kembalian Anda (angkanya tidak bulat); dan toko itu menerima 0,06 BTC dari Anda. Teman yang dulu membayar ke B ikut terhubung. Semua itu tanpa meretas apa pun, hanya dengan membaca data publik.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Heuristik adalah tebakan statistik, bukan bukti pasti. Heuristik bisa salah, misalnya pada CoinJoin atau PayJoin yang sengaja mematahkan asumsinya, dan kesalahan itu bisa merugikan orang yang tidak bersalah ketika dijadikan dasar pemblokiran akun. Sebaliknya, jangan menganggap diri Anda tak terlacak hanya karena tidak ada nama di transaksi.</div>` },
        { judul: 'Praktik privasi dan batas hukumnya', isi: `
<h3>Konsepnya</h3>
<p>Privasi keuangan tidak sama dengan menyembunyikan kejahatan. Wajar kalau Anda tidak ingin gaji, tabungan, dan belanja Anda dilihat orang asing, tetangga, atau penipu yang mengincar pemilik aset besar. Di Bitcoin, privasi harus diusahakan karena bawaannya transparan. Pelajaran ini membahas praktik yang lazim, dari yang paling sederhana sampai yang paling berisiko secara hukum, beserta batasnya.</p>
<h3>Cara kerjanya</h3>
<p><b>1. Alamat baru untuk setiap penerimaan.</b> Dompet modern (dompet HD, BIP32) bisa menurunkan alamat tanpa batas dari satu cadangan frasa pemulihan (<i>seed</i>). Pakai alamat baru untuk setiap pembayaran masuk. Ini langkah paling murah dan salah satu yang paling efektif, karena mencegah semua penerimaan terkumpul di satu alamat.</p>
<p><b>2. Kontrol koin.</b> Beri label pada UTXO sesuai asalnya, misalnya "dari bursa" dan "dari klien", dan jangan gabungkan UTXO dari sumber berbeda dalam satu transaksi tanpa alasan. Ingat heuristik kepemilikan input bersama.</p>
<p><b>3. Node sendiri dan Tor.</b> Dompet yang bertanya ke server pihak ketiga memberi tahu server itu semua alamat Anda. Menghubungkan dompet ke node sendiri, idealnya lewat Tor, menutup kebocoran ini.</p>
<p><b>4. PayJoin.</b> Saat Anda membayar, penerima ikut menyumbang satu input ke transaksi. Hasilnya tampak seperti transaksi biasa, tapi heuristik kepemilikan input bersama menjadi salah, dan jumlah pembayaran sebenarnya tersamar. Standarnya BIP78, dengan versi asinkron BIP77 yang sedang dikembangkan. Keterbatasannya: penerima harus mendukungnya, dan adopsinya masih kecil per 2025.</p>
<p><b>5. CoinJoin.</b> Banyak orang menggabungkan input mereka dalam satu transaksi besar, dan output-nya dibuat dalam nilai seragam (denominasi standar), sehingga banyak output bernilai persis sama. Pengamat tidak bisa memastikan output mana milik input mana. Tidak ada yang menyerahkan kunci kepada orang lain; setiap peserta menandatangani inputnya sendiri.</p>
<h3>Contoh</h3>
<p>Seorang pekerja lepas menerima bayaran bitcoin dari beberapa klien. Dengan alamat baru untuk setiap tagihan, klien A tidak bisa melihat berapa yang dibayarkan klien B. Saat membelanjakan, ia memilih UTXO dari satu klien saja agar riwayat klien lain tidak ikut terbuka. Langkah seperti ini tidak menimbulkan persoalan hukum dan tetap sejalan dengan kewajiban pajaknya.</p>
<p>CoinJoin berbeda posisinya. Pada April 2024, dua pendiri dompet Samourai didakwa jaksa federal Amerika Serikat; satu ditangkap di AS dan satu lagi di Portugal lalu diekstradisi. Mereka didakwa bersekongkol mencuci uang dan menjalankan usaha pengiriman uang tanpa izin, lalu mengaku bersalah atas dakwaan usaha tanpa izin dan divonis penjara pada akhir 2025. Pada Juni 2024, zkSNACKs menghentikan layanan koordinator CoinJoin untuk dompet Wasabi. Banyak bursa juga menolak atau membekukan setoran koin yang terdeteksi baru keluar dari CoinJoin.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak ada teknik yang memberi anonimitas sempurna. Satu kesalahan, misalnya menggabungkan output CoinJoin dengan koin ber-KYC, bisa membatalkan semuanya. Di Indonesia, perdagangan aset kripto diawasi OJK sejak Januari 2025, pedagang terdaftar wajib menjalankan KYC dan melaporkan transaksi mencurigakan, dan menyamarkan asal dana hasil kejahatan adalah tindak pidana pencucian uang. Materi ini bertujuan melindungi privasi yang sah, bukan membantu menghindari hukum. Kalau ragu, tanyakan kepada penasihat hukum sebelum memakai layanan pencampur.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa Bitcoin lebih tepat disebut pseudonim daripada anonim?', pilihan: ['Transaksi tidak memuat nama, tapi semua alamat dan jumlahnya tercatat publik dan bisa dikaitkan dengan identitas', 'Karena semua transaksi dienkripsi dan hanya bisa dibaca penambang', 'Karena alamat Bitcoin berganti otomatis setiap blok', 'Karena bursa tidak pernah menyimpan data pengguna'], jelas: 'Alamat berfungsi seperti nama samaran. Begitu satu alamat terhubung dengan identitas, misalnya lewat data KYC bursa, riwayat yang terkait bisa ditelusuri.' },
        { tanya: 'Apa asumsi heuristik kepemilikan input bersama?', pilihan: ['Semua input dalam satu transaksi dimiliki orang yang sama', 'Output bernilai bulat selalu merupakan kembalian', 'Alamat yang dipakai ulang pasti milik bursa', 'Transaksi dengan banyak output selalu CoinJoin'], jelas: 'Biasanya hanya satu dompet yang bisa menandatangani semua input sebuah transaksi. CoinJoin dan PayJoin sengaja membuat asumsi ini salah.' },
        { tanya: 'Mana praktik privasi yang paling sederhana dan tidak berisiko hukum?', pilihan: ['Memakai alamat baru untuk setiap penerimaan', 'Mengirim semua koin lewat layanan pencampur kustodian', 'Membeli bitcoin memakai identitas orang lain', 'Memakai satu alamat untuk semua pembayaran agar mudah dicatat'], jelas: 'Alamat baru mencegah semua penerimaan terkumpul di satu tempat, dan didukung otomatis oleh dompet modern. Memakai identitas orang lain justru melanggar hukum.' },
        { tanya: 'Bagaimana PayJoin mengacaukan analisis blockchain?', pilihan: ['Penerima ikut menyumbang input, sehingga asumsi semua input milik pengirim menjadi salah', 'Transaksinya disembunyikan dari blockchain', 'Jumlah transaksinya dienkripsi', 'Pengirim meminjam alamat milik bursa'], jelas: 'Transaksi PayJoin tampak seperti pembayaran biasa, padahal salah satu input milik penerima. Analis yang memakai heuristik input bersama akan salah menyimpulkan kepemilikan dan jumlah pembayaran.' },
        { tanya: 'Kenapa output CoinJoin bisa bermasalah saat disetor ke bursa?', pilihan: ['Banyak bursa menolak atau membekukan koin yang terdeteksi baru keluar dari CoinJoin', 'Karena output CoinJoin tidak sah menurut aturan konsensus', 'Karena CoinJoin mengurangi nilai satoshi di dalamnya', 'Karena bursa tidak bisa membaca alamat bc1q'], jelas: 'Secara aturan Bitcoin, output CoinJoin sah seperti output lain. Masalahnya ada pada kebijakan kepatuhan bursa yang menganggap koin tersebut berisiko.' },
      ] },
  ],
});
