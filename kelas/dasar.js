// kelas/dasar.js, data kelas kategori Dasar Blockchain. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'dasar', urut: 1, nama: 'Dasar Blockchain', warna: '#4f7a68',
  ringkas: 'Fondasi sebelum membahas koin apa pun: kenapa uang digital butuh blockchain, cara kerja kunci dan dompet, konsensus, trilema, dan sejarah singkat crypto.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1, UANG DIGITAL & DOUBLE SPENDING
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'uang-digital', judul: 'Uang Digital & Masalah Double Spending',
      ringkas: 'Kenapa uang digital sulit berjalan tanpa bank, apa itu double spending, dan bagaimana blockchain memecahkannya dengan buku besar bersama.',
      pelajaran: [
        { judul: 'Kenapa uang digital sulit tanpa perantara', isi: `
<h3>Konsepnya</h3>
<p>Uang kertas punya satu sifat yang jarang kita pikirkan. Kalau Anda menyerahkan selembar Rp50.000 kepada teman, lembaran itu pindah tangan. Anda tidak memegangnya lagi. Tidak perlu pihak ketiga yang mencatat, karena bendanya sendiri adalah bukti.</p>
<p>Data digital tidak begitu. Foto, lagu, atau dokumen bisa disalin tanpa batas, dan salinannya sama persis dengan aslinya. Kalau "uang" hanyalah sebuah berkas, apa yang mencegah Anda mengirim berkas yang sama ke dua orang sekaligus? Inilah yang disebut <b>double spending</b>: membelanjakan uang yang sama dua kali.</p>
<p>Selama puluhan tahun, jawabannya adalah perantara. Saat Anda mentransfer lewat bank atau dompet digital, yang berpindah bukan berkas uang. Yang berubah adalah angka di buku besar milik bank. Bank memeriksa saldo Anda, menguranginya, lalu menambah saldo penerima. Karena hanya ada satu buku besar dan satu pihak yang memegangnya, uang yang sama tidak bisa dipakai dua kali.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Buku besar (ledger)</b>: catatan siapa memiliki berapa. Saldo rekening Anda hanyalah satu baris di buku besar bank.</li>
<li><b>Perantara tepercaya (trusted third party)</b>: pihak yang dipercaya semua orang untuk memegang buku besar dengan jujur: bank, penyedia e-wallet, lembaga kliring.</li>
<li><b>Double spending</b>: memakai satuan uang yang sama untuk dua pembayaran berbeda.</li>
</ul>

<h3>Kenapa perantara menjadi masalah</h3>
<p>Perantara bekerja cukup baik untuk kebanyakan orang, tetapi ada harganya. Pertama, Anda harus <b>meminta izin</b>. Rekening bisa dibekukan, transfer ke negara tertentu bisa ditolak, dan orang tanpa dokumen lengkap sulit membuka rekening. Kedua, perantara adalah <b>satu titik kegagalan</b>. Kalau ia bangkrut, diretas, atau ditutup, seluruh sistemnya ikut berhenti. Ketiga, ada <b>biaya dan waktu</b>. Transfer lintas negara bisa makan beberapa hari karena melewati beberapa bank.</p>
<p>Whitepaper Bitcoin (2008) merumuskan masalahnya dengan jelas: pembayaran digital antarindividu kehilangan manfaat utamanya kalau tetap butuh pihak tepercaya untuk mencegah double spending. Jadi tantangannya bukan sekadar membuat uang digital. Tantangannya adalah membuat uang digital yang tidak bisa dipakai dua kali, <b>tanpa</b> satu pihak yang memegang kendali.</p>

<h3>Contoh</h3>
<p>Bayangkan Budi punya satu "koin digital" berupa berkas. Pukul 10.00 ia mengirimnya ke Sari untuk membayar sepatu. Pukul 10.01 ia mengirim salinan berkas yang sama ke Joko untuk membayar ponsel. Sari dan Joko sama-sama menerima berkas yang tampak sah. Siapa pemilik koin yang asli?</p>
<p>Tanpa catatan bersama, keduanya tidak bisa tahu. Mereka baru bisa memutuskan kalau tahu <b>transaksi mana yang terjadi lebih dulu</b>. Di sinilah inti masalahnya: double spending pada dasarnya adalah masalah <b>urutan</b>. Kalau semua orang sepakat soal urutan transaksi, transaksi kedua otomatis ditolak karena koinnya sudah terpakai.</p>
<p>Eksperimen sebelum Bitcoin, seperti eCash milik perusahaan DigiCash pada 1990-an, sudah memecahkan soal privasi dengan kriptografi yang cerdas. Tetapi pencegahan double spending tetap bergantung pada server pusat. Ketika perusahaannya bangkrut pada 1998, sistemnya ikut berhenti. Kisahnya ada di kursus Sejarah.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Perantara tidak selalu buruk. Bank memberi hal yang tidak diberikan blockchain: pembatalan transfer yang salah kirim, perlindungan konsumen, dan penjaminan simpanan (di Indonesia oleh LPS, dengan batas nilai tertentu). Menghapus perantara berarti memindahkan tanggung jawab itu ke tangan Anda sendiri. Pelajaran ini menjelaskan masalah yang ingin dipecahkan, bukan klaim bahwa blockchain lebih baik untuk semua keperluan.</div>` },

        { judul: 'Bagaimana blockchain menyelesaikannya: buku besar bersama, urutan, konfirmasi', isi: `
<h3>Konsepnya</h3>
<p>Blockchain membalik cara lama. Alih-alih satu buku besar di satu bank, <b>setiap peserta memegang salinan buku besar yang sama</b>. Setiap transaksi baru disiarkan ke seluruh jaringan. Setiap peserta memeriksanya sendiri: apakah pengirim benar-benar punya saldonya, dan apakah tanda tangannya sah. Transaksi yang lolos dikumpulkan ke dalam <b>blok</b>, dan blok-blok itu disusun berurutan.</p>
<p>Ingat kesimpulan pelajaran sebelumnya: double spending adalah masalah urutan. Blockchain menjawabnya dengan menyepakati <b>satu urutan transaksi yang sama untuk semua orang</b>. Kalau Budi mencoba membelanjakan koinnya dua kali, hanya transaksi yang masuk urutan lebih dulu yang berlaku. Yang kedua ditolak semua peserta, karena menurut buku besar mereka koin itu sudah pindah tangan.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Siaran.</b> Budi menandatangani transaksi dengan kunci privatnya lalu mengirimnya ke jaringan. Transaksi menunggu di <b>mempool</b>, ruang tunggu bagi transaksi yang belum masuk blok.</li>
<li><b>Pemeriksaan.</b> Setiap <b>node</b> (komputer peserta jaringan) memeriksa aturan: tanda tangan sah, saldo cukup, koin belum terpakai.</li>
<li><b>Pengemasan.</b> Penambang (di Bitcoin) atau validator (di jaringan Proof of Stake) memilih transaksi dari mempool dan mengemasnya menjadi blok baru.</li>
<li><b>Penyambungan.</b> Setiap blok memuat <b>hash</b> blok sebelumnya. Hash adalah sidik jari digital: ubah satu huruf saja, hasilnya berubah total. Karena itu mengubah blok lama berarti memutus sambungan ke semua blok sesudahnya.</li>
<li><b>Kesepakatan.</b> Jaringan memakai aturan <b>konsensus</b> untuk memutuskan blok siapa yang diterima. Kursus Konsensus membahasnya lebih dalam.</li>
</ol>
<p>Whitepaper Bitcoin menyebut jaringan ini sebagai <b>server penanda waktu</b> yang terdistribusi. Tidak ada jam pusat. Urutan dibuktikan oleh rantai blok itu sendiri.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Konfirmasi</b>: jumlah blok, dihitung dari blok yang memuat transaksi Anda sampai blok terbaru. Transaksi yang baru masuk blok punya 1 konfirmasi. Setelah satu blok lagi, 2 konfirmasi, dan seterusnya.</li>
<li><b>Reorganisasi (reorg)</b>: jaringan beralih ke cabang rantai lain, sehingga beberapa blok terakhir diganti. Transaksi di blok yang diganti bisa batal.</li>
<li><b>Finality</b>: titik ketika transaksi praktis tidak bisa dibatalkan lagi.</li>
</ul>

<h3>Contoh</h3>
<p>Kenapa bursa meminta Anda menunggu beberapa konfirmasi sebelum setoran bisa dipakai? Karena di blok paling baru masih ada kemungkinan kecil terjadi reorg. Setiap blok tambahan membuat pembatalan makin mahal, sebab penyerang harus membuat ulang semua blok itu lebih cepat daripada seluruh jaringan jujur. Whitepaper Bitcoin menghitung bahwa peluang penyerang mengejar ketertinggalan turun secara eksponensial setiap blok bertambah.</p>
<p>Di Bitcoin, satu blok rata-rata tercipta sekitar 10 menit. Kebiasaan lama menunggu 6 konfirmasi untuk nilai besar berarti menunggu sekitar satu jam. Jaringan Proof of Stake seperti Ethereum memakai mekanisme finality sendiri; sejak 2022 transaksi Ethereum dianggap final setelah kira-kira 13 menit.</p>
<table>
<tr><th>Pertanyaan</th><th>Cara lama</th><th>Cara blockchain</th></tr>
<tr><td>Siapa memegang buku besar</td><td>Satu bank</td><td>Semua node, salinan identik</td></tr>
<tr><td>Siapa memeriksa saldo</td><td>Bank</td><td>Setiap node, sendiri-sendiri</td></tr>
<tr><td>Siapa menentukan urutan</td><td>Server bank</td><td>Aturan konsensus dan rantai blok</td></tr>
<tr><td>Siapa boleh ikut</td><td>Nasabah yang disetujui</td><td>Siapa pun (di jaringan publik)</td></tr>
</table>

<div class="batas-berlaku"><b>Batas & risiko.</b> Blockchain hanya menjamin urutan dan keabsahan catatan <b>di dalam</b> jaringannya. Ia tidak tahu apakah sepatu yang Anda bayar benar-benar dikirim. Transaksi yang sudah final juga tidak bisa ditarik kembali, termasuk kalau Anda salah alamat atau tertipu. Jumlah konfirmasi di atas adalah kebiasaan umum, bukan aturan resmi; setiap bursa menetapkannya sendiri dan bisa berubah.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa uang digital rawan double spending kalau tidak ada perantara?',
          pilihan: ['Data digital bisa disalin sempurna, sehingga "uang" yang sama bisa dikirim ke dua orang', 'Karena jaringan internet sering putus', 'Karena uang digital tidak punya nilai', 'Karena nominal transaksinya terlalu kecil'],
          jelas: 'Uang fisik berpindah tangan, sedangkan berkas digital bisa diduplikasi. Tanpa catatan bersama, penerima tidak bisa tahu apakah "koin" itu sudah dibelanjakan ke orang lain.' },
        { tanya: 'Sebelum blockchain, cara umum mencegah double spending dalam pembayaran digital adalah…',
          pilihan: ['Satu perantara tepercaya, misalnya bank, memegang buku besar dan memeriksa saldo', 'Mengirim uang sebagai lampiran email', 'Membatasi transaksi hanya pada jam kerja', 'Mencetak ulang uang kertas untuk setiap transfer'],
          jelas: 'Karena hanya ada satu buku besar yang dipegang satu pihak, saldo yang sama tidak bisa dipakai dua kali. Harganya: izin, biaya, dan satu titik kegagalan.' },
        { tanya: 'Double spending pada dasarnya adalah masalah…',
          pilihan: ['Urutan: jaringan harus sepakat transaksi mana yang terjadi lebih dulu', 'Kecepatan internet peserta', 'Nilai tukar antarmata uang', 'Tampilan aplikasi dompet'],
          jelas: 'Kalau semua peserta menyepakati satu urutan, transaksi kedua yang memakai koin yang sama otomatis ditolak karena koinnya sudah terpakai.' },
        { tanya: 'Transaksi Anda sudah punya 3 konfirmasi. Artinya…',
          pilihan: ['Blok berisi transaksi Anda sudah ditumpuk dua blok lagi, sehingga makin mahal untuk dibatalkan', 'Tiga orang sudah menyetujui transaksi Anda', 'Transaksi Anda terkirim tiga kali', 'Biaya transaksi dibayar tiga kali lipat'],
          jelas: 'Konfirmasi dihitung dari blok yang memuat transaksi sampai blok terbaru. Setiap blok tambahan membuat penyerang harus menulis ulang lebih banyak blok.' },
        { tanya: 'Kenapa mengubah isi blok lama hampir mustahil?',
          pilihan: ['Setiap blok memuat hash blok sebelumnya, jadi semua blok sesudahnya harus dibuat ulang lebih cepat dari jaringan jujur', 'Karena blok lama otomatis dihapus', 'Karena dikunci kata sandi para pengembang', 'Karena disimpan di server pemerintah'],
          jelas: 'Mengubah satu huruf mengubah hash blok itu, sehingga sambungannya ke blok berikutnya putus. Makin dalam blok tertimbun, makin mahal pemalsuannya.' },
        { tanya: 'Mana yang TIDAK dijamin oleh blockchain?',
          pilihan: ['Bahwa barang yang Anda bayar benar-benar dikirim penjual', 'Bahwa saldo pengirim cukup', 'Bahwa tanda tangan transaksi sah', 'Bahwa koin yang sama tidak dibelanjakan dua kali'],
          jelas: 'Blockchain hanya tahu apa yang terjadi di dalam jaringannya. Kejadian di dunia nyata, seperti pengiriman barang, tetap butuh kepercayaan atau mekanisme lain.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2, KUNCI, DOMPET & CARA KERJANYA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'kunci-dompet', judul: 'Kunci, Dompet & Cara Kerjanya',
      ringkas: 'Apa yang sebenarnya Anda pegang saat "punya crypto": kunci privat, tanda tangan digital, seed phrase, dan berbagai jenis dompet beserta risikonya.',
      pelajaran: [
        { judul: 'Kunci publik, kunci privat & tanda tangan digital', isi: `
<h3>Konsepnya</h3>
<p>Di blockchain tidak ada nama akun dan kata sandi. Yang ada adalah pasangan kunci. <b>Kunci privat</b> adalah angka rahasia yang sangat besar. Dari angka itu dihitung <b>kunci publik</b>. Perhitungannya satu arah. Dari kunci privat ke kunci publik mudah. Dari kunci publik kembali ke kunci privat praktis mustahil dengan komputer yang ada sekarang.</p>
<p>Ide ini disebut <b>kriptografi kunci publik</b>. Whitfield Diffie dan Martin Hellman memperkenalkannya ke publik pada 1976. Sebelumnya, dua pihak yang ingin berkomunikasi rahasia harus bertukar kunci yang sama lebih dulu. Dengan pasangan kunci, Anda bisa membagikan satu bagian secara terbuka tanpa membahayakan bagian lainnya.</p>

<h3>Cara kerjanya</h3>
<p>Blockchain memakai pasangan kunci terutama untuk <b>tanda tangan digital</b>, bukan untuk menyembunyikan isi pesan. Alurnya:</p>
<ol>
<li>Anda menyusun transaksi: "kirim 0,1 koin dari alamat saya ke alamat Sari".</li>
<li>Dompet menghitung tanda tangan dari dua bahan: isi transaksi itu dan kunci privat Anda.</li>
<li>Transaksi dan tanda tangannya disiarkan. Kunci privatnya <b>tidak ikut dikirim</b>.</li>
<li>Setiap node memeriksa tanda tangan memakai kunci publik Anda. Hasilnya hanya "cocok" atau "tidak cocok".</li>
</ol>
<p>Dua sifat membuat cara ini kuat. Pertama, hanya pemegang kunci privat yang bisa membuat tanda tangan yang cocok. Kedua, tanda tangan terikat pada isi transaksi. Kalau seseorang mengubah jumlah atau alamat tujuan, tanda tangannya tidak cocok lagi. Jadi tanda tangan lama tidak bisa ditempel ke transaksi lain.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>ECDSA dan secp256k1</b>: skema tanda tangan dan jenis kurva eliptik yang dipakai Bitcoin dan Ethereum. Kunci privatnya berupa angka 256 bit.</li>
<li><b>Schnorr</b>: skema tanda tangan yang ditambahkan ke Bitcoin lewat pembaruan Taproot pada November 2021.</li>
<li><b>Ed25519</b>: skema lain yang dipakai antara lain oleh Solana.</li>
</ul>
<p>Anda tidak perlu menghafal nama-nama ini. Semuanya mengikuti pola yang sama: tanda tangan dibuat dengan kunci privat dan diperiksa dengan kunci publik.</p>

<h3>Contoh</h3>
<p>Bayangkan stempel pribadi. Bekas stempelnya bisa dicocokkan siapa pun dengan contoh resmi yang Anda umumkan. Tetapi stempelnya sendiri tidak pernah keluar dari laci Anda. Contoh resmi itu adalah kunci publik. Stempelnya adalah kunci privat. Bedanya dengan stempel sungguhan: tanda tangan digital tidak bisa dijiplak, karena bentuknya berubah untuk setiap isi transaksi.</p>
<p>Seberapa sulit menebak kunci privat? Jumlah kemungkinan kunci 256 bit kira-kira 10 pangkat 77. Sebagai pembanding, perkiraan jumlah atom di alam semesta teramati berkisar 10 pangkat 78 sampai 10 pangkat 82. Karena itu pencurian hampir tidak pernah terjadi lewat tebakan. Yang terjadi adalah kunci <b>bocor</b>: difoto, diketik di situs palsu, atau dicuri aplikasi berbahaya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Kriptografinya kuat, tetapi manusianya sering lemah. Siapa pun yang memegang kunci privat Anda bisa memindahkan dana Anda, dan tidak ada tombol "lupa kata sandi". Untuk jangka panjang ada ancaman komputer kuantum: algoritma Shor secara teori bisa menghitung kunci privat dari kunci publik yang sudah terlihat di blockchain. Sampai materi ini ditulis (September 2026), belum ada laporan terbuka tentang komputer kuantum yang sanggup melakukannya pada kunci sungguhan. Riset migrasi ke kriptografi pasca-kuantum sudah berjalan.</div>` },

        { judul: 'Alamat, seed phrase (BIP39) & dompet HD (BIP32/BIP44)', isi: `
<h3>Konsepnya</h3>
<p>Kalau setiap alamat butuh satu kunci privat, orang yang punya puluhan alamat di beberapa jaringan harus mencadangkan puluhan angka rahasia. Itu merepotkan dan rawan salah. Solusi yang kini dipakai hampir semua dompet: <b>satu rahasia induk</b> berupa daftar kata, lalu semua kunci diturunkan darinya secara matematis. Rahasia induk itu disebut <b>seed phrase</b>.</p>

<h3>Cara kerjanya</h3>
<p><b>1. Alamat.</b> Alamat bukan kunci publik mentah, melainkan hasil olahan darinya, biasanya lewat fungsi hash. Di Ethereum, alamat adalah 20 byte terakhir dari hash Keccak-256 kunci publik, ditulis sebagai 0x diikuti 40 karakter heksadesimal. Bitcoin punya beberapa format: alamat lama diawali 1 atau 3, alamat SegWit diawali bc1q, dan alamat Taproot diawali bc1p. Alamat aman dibagikan, seperti nomor rekening.</p>
<p><b>2. Seed phrase (BIP39).</b> BIP39 adalah standar yang mengubah angka acak menjadi 12 sampai 24 kata (yang paling umum 12 atau 24) dari daftar baku berisi 2.048 kata. Dua belas kata mewakili 128 bit acak; dua puluh empat kata mewakili 256 bit. Kata terakhir sebagian berisi <b>checksum</b>, semacam angka pemeriksa, sehingga salah ketik satu kata biasanya langsung ketahuan. BIP39 juga mengizinkan <b>passphrase</b> opsional, sering disebut "kata ke-25". Seed yang sama dengan passphrase berbeda menghasilkan dompet yang sama sekali berbeda.</p>
<p><b>3. Dompet HD (BIP32).</b> HD singkatan dari hierarchical deterministic. Dari seed dibuat satu kunci induk. Dari kunci induk diturunkan kunci anak, cucu, dan seterusnya, seperti pohon keluarga. "Deterministic" berarti hasilnya selalu sama: seed yang sama selalu menghasilkan urutan kunci yang sama. Karena itu mencadangkan seed saja sudah cukup untuk memulihkan semua alamat.</p>
<p><b>4. Jalur turunan (BIP44).</b> BIP44 mengatur "alamat rumah" setiap kunci di pohon itu dengan format <i>m / tujuan' / jenis koin' / akun' / kembalian / indeks</i>. Setiap jaringan punya nomor jenis koin sendiri: Bitcoin 0, Ethereum 60, Solana 501.</p>
<pre>m/44'/60'/0'/0/0   → alamat Ethereum pertama (pola umum dompet EVM)
m/84'/0'/0'/0/0    → alamat Bitcoin SegWit pertama (BIP84, turunan pola BIP44)</pre>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>BIP</b>: Bitcoin Improvement Proposal, dokumen usulan standar di komunitas Bitcoin. BIP39, BIP32, dan BIP44 lahir di Bitcoin, tetapi kini dipakai dompet untuk banyak jaringan lain.</li>
<li><b>xpub (extended public key)</b>: kunci publik tingkat akun yang bisa menurunkan semua alamat penerima tanpa bisa membelanjakan. Berguna untuk dompet "pantau saja". Tetapi membagikannya berarti membuka seluruh riwayat alamat Anda.</li>
</ul>

<h3>Contoh</h3>
<p>Anda memulihkan seed phrase lama di aplikasi dompet baru, dan saldonya tampak nol. Jangan panik dulu. Penyebab yang sering terjadi adalah jalur turunan yang berbeda: dompet lama memakai satu jalur, dompet baru mencari di jalur lain. Dananya masih ada di blockchain. Anda perlu memilih jalur yang sama di pengaturan dompet. Kasus serupa terjadi kalau dulu Anda memakai passphrase dan lupa memasukkannya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Seed phrase adalah kunci segala kunci. Siapa pun yang melihatnya menguasai semua alamat Anda di semua jaringan yang diturunkan darinya. Jangan difoto, jangan disimpan di cloud atau catatan HP, dan jangan diketik di situs mana pun. Tulis di kertas atau pelat logam, lalu simpan offline. Pihak yang sah tidak pernah meminta seed phrase. Passphrase menambah perlindungan, tetapi kalau lupa, tidak ada siapa pun yang bisa memulihkannya.</div>` },

        { judul: 'Jenis dompet: hot, cold, hardware, kustodian & multisig', isi: `
<h3>Konsepnya</h3>
<p>Satu salah kaprah perlu diluruskan dulu: dompet crypto <b>tidak menyimpan koin</b>. Koin tercatat di blockchain. Yang disimpan dompet adalah <b>kunci</b> untuk membelanjakannya. Karena itu ada dua pertanyaan terpenting tentang dompet mana pun: <b>siapa yang memegang kuncinya</b>, dan <b>seberapa dekat kunci itu dengan internet</b>.</p>

<h3>Istilah yang dipakai</h3>
<table>
<tr><th>Jenis</th><th>Kunci ada di mana</th><th>Kelebihan</th><th>Kelemahan</th></tr>
<tr><td>Hot wallet</td><td>Perangkat yang tersambung internet (aplikasi HP, ekstensi browser)</td><td>Praktis untuk transaksi harian</td><td>Rawan malware, situs palsu, dan HP hilang</td></tr>
<tr><td>Cold wallet</td><td>Media yang tidak pernah tersambung internet</td><td>Sulit dicuri dari jarak jauh</td><td>Kurang praktis; bisa hilang atau rusak fisik</td></tr>
<tr><td>Hardware wallet</td><td>Chip khusus di alat kecil; tanda tangan dibuat di dalam alat</td><td>Kunci tidak pernah keluar ke komputer</td><td>Tetap bisa tertipu kalau Anda menyetujui transaksi jahat</td></tr>
<tr><td>Kustodian</td><td>Dipegang pihak lain (bursa, aplikasi)</td><td>Mudah; ada layanan pelanggan dan reset kata sandi</td><td>Dana bergantung pada kejujuran dan kesehatan pihak itu</td></tr>
<tr><td>Non-kustodian</td><td>Dipegang Anda sendiri</td><td>Tidak ada yang bisa membekukan dana</td><td>Kunci hilang berarti dana hilang, tanpa bantuan</td></tr>
</table>
<p>Pembagian ini bisa digabung. Hardware wallet adalah bentuk penyimpanan dingin yang non-kustodian. Akun di aplikasi bursa adalah kustodian: kuncinya dipegang bursa, yang biasanya menyimpan sebagian kecil dana di hot wallet dan sisanya di cold wallet miliknya.</p>

<h3>Multisig dan variasinya</h3>
<p><b>Multisig</b> (multi-signature) adalah dompet yang butuh beberapa tanda tangan dari kunci berbeda sebelum dana bisa dipindahkan, misalnya 2 dari 3. Kalau satu kunci bocor, pencuri belum bisa apa-apa. Kalau satu kunci hilang, dua sisanya masih cukup. Di Bitcoin, multisig didukung langsung oleh bahasa skripnya. Di Ethereum, multisig dibuat dengan smart contract; yang paling dikenal adalah Safe (dulu Gnosis Safe), yang banyak dipakai treasury proyek dan DAO.</p>
<p>Ada juga dompet <b>MPC</b> (multi-party computation). Kunci dipecah menjadi beberapa bagian di perangkat berbeda, dan tanda tangan dibuat bersama tanpa kunci utuh pernah dirakit di satu tempat. Hasilnya mirip multisig, tetapi di blockchain terlihat seperti tanda tangan biasa.</p>

<h3>Contoh</h3>
<ul>
<li><b>Mt. Gox (2014)</b> dan <b>FTX (November 2022)</b> adalah contoh risiko kustodian. Nasabah melihat saldo di layar, tetapi saldo itu hanya janji bursa. Ketika bursa bangkrut, penarikan berhenti.</li>
<li><b>Bybit (Februari 2025)</b> menunjukkan bahwa cold wallet multisig pun bisa jebol. Sekitar US$1,5 miliar dalam ETH dicuri setelah para penanda tangan menyetujui transaksi yang tampilannya sudah dimanipulasi. FBI mengaitkan peretasan ini dengan peretas Korea Utara. Kuncinya tidak bocor; yang dikelabui adalah manusianya.</li>
</ul>
<p>Pola yang masuk akal bagi banyak orang: dana kecil untuk kebutuhan harian di hot wallet, simpanan jangka panjang di hardware wallet, dan hanya dana yang sedang dipakai trading yang ditaruh di bursa.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak ada jenis dompet yang aman mutlak. Non-kustodian memindahkan seluruh risiko ke kebiasaan Anda: cadangan seed, kewaspadaan terhadap phishing, dan ketelitian membaca apa yang Anda tanda tangani. Jangan menyetujui transaksi yang isinya tidak Anda pahami (blind signing). Beli hardware wallet hanya dari produsen atau distributor resmi, karena alat bekas atau palsu bisa sudah dimanipulasi.</div>` },
      ],
      kuis: [
        { tanya: 'Saat Anda mengirim transaksi, apa yang disiarkan ke jaringan?',
          pilihan: ['Transaksi beserta tanda tangannya; kunci privat tetap di dompet Anda', 'Transaksi beserta kunci privat Anda', 'Seed phrase yang sudah dienkripsi', 'Kata sandi aplikasi dompet'],
          jelas: 'Tanda tangan membuktikan Anda memegang kunci privat tanpa membukanya. Node cukup memakai kunci publik untuk memeriksa kecocokannya.' },
        { tanya: 'Seseorang mengubah jumlah pada transaksi yang sudah Anda tanda tangani. Apa yang terjadi?',
          pilihan: ['Tanda tangannya tidak cocok lagi, sehingga node menolak transaksi itu', 'Transaksi tetap sah dengan jumlah yang baru', 'Jaringan meminta Anda menandatangani ulang lewat email', 'Selisihnya dikembalikan otomatis ke dompet Anda'],
          jelas: 'Tanda tangan digital terikat pada isi transaksi. Perubahan sekecil apa pun membuat pemeriksaan dengan kunci publik gagal.' },
        { tanya: 'Kenapa satu seed phrase cukup untuk memulihkan puluhan alamat?',
          pilihan: ['Dompet HD (BIP32) menurunkan semua kunci dari seed secara deterministik, jadi hasilnya selalu sama', 'Karena seed phrase menyimpan salinan semua saldo', 'Karena bursa menyimpan cadangan semua alamat', 'Karena semua alamat memakai kunci privat yang sama'],
          jelas: 'Setiap kunci punya jalur turunan tetap dari seed. Selama seed dan jalurnya sama, kunci yang dihasilkan pun sama, di aplikasi mana pun.' },
        { tanya: 'Anda memulihkan seed lama di aplikasi dompet baru dan saldonya nol. Penjelasan paling mungkin, tanpa dana hilang, adalah…',
          pilihan: ['Aplikasi baru memakai jalur turunan (derivation path) berbeda, atau passphrase belum dimasukkan', 'Koin otomatis hangus setelah setahun tidak dipakai', 'Seed phrase punya masa kedaluwarsa', 'Blockchain menghapus alamat yang lama tidak aktif'],
          jelas: 'Dananya tetap tercatat di blockchain. Aplikasi hanya mencari di cabang pohon kunci yang lain; pilih jalur yang sama atau masukkan passphrase yang dulu dipakai.' },
        { tanya: 'Apa beda dompet kustodian dan non-kustodian?',
          pilihan: ['Di kustodian kunci dipegang pihak lain; di non-kustodian Anda sendiri yang memegangnya', 'Kustodian hanya bisa menyimpan Bitcoin', 'Non-kustodian selalu berupa alat fisik', 'Dompet kustodian tidak bisa dipakai bertransaksi'],
          jelas: 'Pertanyaan kuncinya adalah siapa memegang kunci. Kustodian lebih mudah tetapi bergantung pada pihak lain; non-kustodian memberi kendali penuh sekaligus tanggung jawab penuh.' },
        { tanya: 'Peretasan Bybit (Februari 2025) mengajarkan bahwa…',
          pilihan: ['Cold wallet multisig pun bisa jebol kalau para penanda tangan dikelabui menyetujui transaksi jahat', 'Dompet multisig tidak pernah bisa dibobol', 'Hot wallet selalu lebih aman daripada cold wallet', 'Kunci privat bisa ditebak dengan komputer biasa'],
          jelas: 'Kuncinya tidak bocor. Tampilan transaksi yang dimanipulasi membuat penanda tangan menyetujui hal yang berbeda dari yang mereka kira. Membaca apa yang ditandatangani adalah bagian dari keamanan.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3, KONSENSUS
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'konsensus', judul: 'Konsensus: Proof of … & Asumsi Keamanan',
      ringkas: 'Bagaimana ribuan komputer yang tidak saling percaya bisa sepakat pada satu sejarah transaksi, apa beda Proof of Work dan Proof of Stake, dan asumsi keamanan di balik keduanya.',
      pelajaran: [
        { judul: 'Kenapa butuh konsensus: masalah Jenderal Bizantium', isi: `
<h3>Konsepnya</h3>
<p>Di kursus pertama Anda belajar bahwa setiap node memegang salinan buku besar. Tetapi salinan hanya berguna kalau isinya sama. Jaringan tersebar di seluruh dunia. Pesan datang terlambat atau tidak sampai. Sebagian node mati, dan sebagian lagi mungkin sengaja berbohong. Aturan yang membuat semua node jujur tetap sampai pada kesimpulan yang sama disebut <b>mekanisme konsensus</b>.</p>

<h3>Masalah Jenderal Bizantium</h3>
<p>Pada 1982, Leslie Lamport, Robert Shostak, dan Marshall Pease menerbitkan makalah yang merumuskan masalah ini lewat sebuah cerita. Beberapa jenderal mengepung sebuah kota dan hanya bisa berkomunikasi lewat kurir. Mereka harus sepakat: serang bersama atau mundur bersama. Serangan setengah-setengah berarti kalah. Masalahnya, sebagian jenderal mungkin pengkhianat yang mengirim pesan berbeda ke rekan yang berbeda.</p>
<p>Temuan penting makalah itu: kalau pesan tidak ditandatangani, sehingga bisa dipalsukan saat diteruskan, kesepakatan hanya bisa dijamin bila pengkhianat <b>kurang dari sepertiga</b> peserta. Dengan tanda tangan digital, batas teoretisnya lebih longgar. Namun sistem nyata yang harus tahan terhadap jaringan lambat umumnya tetap memakai ambang yang sama. Angka "dua pertiga jujur" ini akan sering Anda temui di jaringan Proof of Stake.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Byzantine fault</b>: kegagalan terburuk, node tidak sekadar mati, tetapi berbohong atau bertindak tidak konsisten.</li>
<li><b>Byzantine Fault Tolerance (BFT)</b>: kemampuan sistem tetap bekerja benar walau sebagian peserta curang.</li>
<li><b>Safety</b>: node jujur tidak pernah menyetujui dua sejarah yang bertentangan.</li>
<li><b>Liveness</b>: jaringan terus menghasilkan blok baru dan tidak macet.</li>
<li><b>Sybil attack</b>: satu pihak membuat banyak identitas palsu untuk menguasai suara.</li>
</ul>

<h3>Kenapa ini sulit di jaringan terbuka</h3>
<p>Algoritma BFT klasik seperti PBFT (1999) bekerja baik kalau pesertanya diketahui dan jumlahnya terbatas, misalnya beberapa server milik satu konsorsium. Di jaringan publik, siapa pun boleh bergabung. Kalau suara dihitung per komputer, penyerang cukup menyalakan sejuta komputer virtual. Itulah sybil attack.</p>
<p>Terobosan Bitcoin adalah membuat suara <b>mahal</b>. Bobot suara tidak dihitung dari jumlah identitas, tetapi dari sumber daya yang sulit dipalsukan: daya komputasi di Proof of Work, atau modal yang dikunci di Proof of Stake. Membuat seribu akun itu gratis. Menguasai seribu kali daya komputasi itu mahal.</p>

<h3>Contoh</h3>
<p>Bayangkan grup arisan berisi dua puluh anggota yang ingin memilih pemegang kas tanpa ketua. Kalau satu orang bisa membuat sepuluh akun palsu di grup, hasil voting tidak ada artinya. Kalau hak suara bergantung pada setoran yang hangus bila curang, akun palsu tidak lagi menguntungkan. Blockchain memakai logika yang sama dalam skala global.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Setiap mekanisme konsensus membawa <b>asumsi</b>, misalnya "mayoritas daya komputasi jujur" atau "kurang dari sepertiga stake curang". Keamanan jaringan hanya sekuat asumsi itu. Kalau asumsinya dilanggar, kriptografi pun tidak bisa menyelamatkan. Saat menilai sebuah chain, tanyakan: berapa pihak yang harus bersekongkol untuk merusaknya, dan berapa biayanya?</div>` },

        { judul: 'Proof of Work', isi: `
<h3>Konsepnya</h3>
<p>Proof of Work (PoW) meminta setiap calon pembuat blok membuktikan bahwa ia sudah mengeluarkan kerja komputasi yang nyata. Idenya berasal dari Hashcash, sistem anti-spam yang diusulkan Adam Back pada 1997. Pengirim email harus menghitung teka-teki kecil: murah untuk satu email, mahal untuk jutaan email spam. Bitcoin memakai prinsip yang sama untuk hak menulis blok.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Tebak-tebakan hash.</b> Penambang menyusun calon blok, lalu mengganti-ganti satu angka bernama <b>nonce</b> dan menghitung hash SHA-256 ganda dari header blok itu berulang kali. Tujuannya menemukan hash yang nilainya di bawah <b>target</b>. Tidak ada jalan pintas. Satu-satunya cara adalah terus mencoba; seluruh jaringan Bitcoin kini menghitung lebih dari 10 pangkat 20 (seratus juta triliun) hash per detik.</li>
<li><b>Mudah diperiksa.</b> Menemukan hash yang cocok butuh kerja besar, tetapi memeriksanya cukup satu kali hitung. Node lain langsung tahu apakah blok itu sah.</li>
<li><b>Imbalan.</b> Penambang yang berhasil mendapat koin baru (subsidi blok) ditambah biaya transaksi. Subsidi Bitcoin dimulai 50 BTC per blok pada 2009 dan dipotong setengah setiap 210.000 blok. Sejak halving April 2024 besarnya 3,125 BTC.</li>
<li><b>Penyesuaian kesulitan.</b> Setiap 2.016 blok (sekitar dua minggu), target disesuaikan supaya waktu blok rata-rata tetap sekitar 10 menit, berapa pun jumlah penambangnya.</li>
<li><b>Rantai terberat.</b> Kalau muncul dua cabang, node mengikuti cabang dengan <b>akumulasi kerja terbanyak</b>. Aturan ini sering disebut "rantai terpanjang", walau yang dihitung sebenarnya total kerja, bukan jumlah blok.</li>
</ol>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Hashrate</b>: jumlah tebakan hash per detik di seluruh jaringan; ukuran kasar keamanan PoW.</li>
<li><b>ASIC</b>: mesin yang dirancang khusus untuk satu algoritma hash. Penambangan Bitcoin kini didominasi ASIC.</li>
<li><b>Mining pool</b>: gabungan penambang yang berbagi imbalan supaya pendapatannya lebih stabil.</li>
<li><b>Finality probabilistik</b>: transaksi tidak pernah final 100%, tetapi peluang dibatalkan turun cepat setiap ada blok baru.</li>
</ul>

<h3>Contoh</h3>
<p>Bayangkan ribuan orang melempar dadu bersamaan. Yang pertama mendapat angka di bawah batas tertentu berhak menulis halaman berikutnya di buku besar. Makin banyak dadu yang Anda lempar per detik, makin besar peluang Anda. Tetapi dadu itu mahal: listrik dan mesin sungguhan. Untuk memalsukan sejarah, penyerang harus melempar lebih banyak dadu daripada semua peserta jujur digabung, terus-menerus.</p>
<p>Keunggulan PoW adalah asumsinya yang sederhana. Siapa pun bisa memeriksa rantai mana yang punya kerja terbanyak tanpa bertanya kepada siapa pun, bahkan node yang baru bergabung setelah bertahun-tahun offline.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> PoW memakai listrik dalam jumlah besar. Perdebatan soal dampak lingkungannya masih berlangsung, dan angkanya berubah mengikuti hashrate serta sumber energi. Penambangan juga cenderung terkonsentrasi di beberapa mining pool besar, sehingga kuasa mengurutkan transaksi tidak tersebar sempurna. Chain PoW kecil lebih rawan karena daya komputasinya bisa disewa penyerang; Ethereum Classic mengalami beberapa serangan 51% pada 2019 dan 2020. Terakhir, anggaran keamanan Bitcoin makin bergantung pada biaya transaksi karena subsidi blok terus mengecil.</div>` },

        { judul: 'Proof of Stake, slashing & finality', isi: `
<h3>Konsepnya</h3>
<p>Proof of Stake (PoS) mengganti listrik dengan <b>modal yang dikunci</b>. Calon pembuat blok, disebut <b>validator</b>, mengunci (stake) koin jaringan sebagai jaminan. Protokol memilih validator secara acak untuk mengusulkan blok, dengan peluang sebanding besar stake. Validator lain memberi suara bahwa blok itu sah. Kalau jujur, validator mendapat imbalan. Kalau curang, sebagian jaminannya dipotong.</p>
<p>Logika keamanannya berbeda dari PoW. Di PoW, penyerang membakar biaya di luar sistem: listrik dan mesin. Di PoS, penyerang mempertaruhkan aset <b>di dalam</b> sistem, dan protokol bisa menyitanya.</p>

<h3>Cara kerjanya: contoh Ethereum</h3>
<ul>
<li>Ethereum pindah dari PoW ke PoS lewat peristiwa <b>The Merge</b> pada 15 September 2022. Rantai PoS-nya (Beacon Chain) sudah berjalan sejak Desember 2020.</li>
<li>Waktu dibagi menjadi <b>slot</b> 12 detik. Setiap slot, satu validator mengusulkan blok. Tiga puluh dua slot membentuk satu <b>epoch</b> (6,4 menit).</li>
<li>Menjadi validator butuh minimal 32 ETH. Sejak pembaruan Pectra (Mei 2025), satu validator boleh memegang saldo efektif sampai 2.048 ETH.</li>
<li>Menurut estimasi Ethereum Foundation, konsumsi energi Ethereum turun sekitar 99,95% dibanding sebelum The Merge.</li>
</ul>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Slashing</b>: hukuman bagi validator yang terbukti melanggar, misalnya menandatangani dua blok berbeda untuk slot yang sama atau memberi suara yang saling bertentangan. Di Ethereum, potongan awalnya kecil. Tetapi potongan bisa membesar sampai seluruh stake kalau banyak validator melanggar pada waktu berdekatan. Tujuannya: serangan terkoordinasi dihukum jauh lebih berat daripada kesalahan satu validator. Validator yang terkena slashing juga dikeluarkan dari jaringan.</li>
<li><b>Hukuman tidak aktif</b>: validator yang sering offline kehilangan imbalan dan sedikit saldo. Ini bukan slashing, dan jauh lebih ringan.</li>
<li><b>Finality</b>: di Ethereum, sebuah checkpoint menjadi final setelah didukung validator dengan total minimal dua pertiga stake selama dua epoch berturut-turut, kira-kira 13 menit. Membatalkan blok yang sudah final mengharuskan setidaknya sepertiga seluruh stake melanggar aturan dan terkena slashing. Inilah <b>finality ekonomis</b>: bukan mustahil, tetapi biayanya bisa dihitung dan sangat besar.</li>
</ul>

<h3>Contoh</h3>
<p>Bandingkan dengan uang jaminan sewa rumah. Pemilik rumah tidak perlu memercayai Anda secara pribadi. Ia memegang deposit yang akan dipotong kalau Anda merusak rumah. Validator PoS menaruh deposit semacam itu kepada protokol, dan protokol memotongnya secara otomatis tanpa hakim.</p>
<p>Tidak semua jaringan PoS memakai slashing. Cardano, misalnya, tidak memotong stake; operator yang buruk hanya kehilangan imbalan dan delegator. Artinya desain hukuman adalah pilihan, dan setiap pilihan membawa kompromi.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> PoS cenderung memusatkan kekuatan pada pemilik modal besar dan penyedia staking besar, seperti bursa dan protokol liquid staking. Kalau segelintir penyedia menguasai sebagian besar stake, asumsi "kurang dari sepertiga curang" menjadi rapuh. Jika Anda menitipkan koin untuk di-stake, dana Anda ikut menanggung risiko slashing validator yang dipilih, dan biasanya ada masa tunggu untuk menariknya kembali. Angka Ethereum di atas berlaku per 2025–2026 dan bisa berubah lewat pembaruan jaringan.</div>` },

        { judul: 'Varian lain & asumsi keamanan', isi: `
<h3>Konsepnya</h3>
<p>PoW dan PoS adalah dua keluarga besar, tetapi di dalamnya ada banyak variasi. Setiap variasi menggeser kompromi yang sama: berapa banyak peserta yang ikut memutuskan, seberapa cepat keputusan menjadi final, dan apa yang terjadi kalau sebagian peserta curang atau offline.</p>

<h3>Varian yang sering Anda temui</h3>
<table>
<tr><th>Varian</th><th>Cara kerja singkat</th><th>Kompromi</th></tr>
<tr><td>Delegated PoS (DPoS)</td><td>Pemegang token memilih sedikit produsen blok. EOS, misalnya, memakai 21 produsen blok aktif.</td><td>Cepat, tetapi kendali ada di sedikit pihak; rawan saling dukung dan jual-beli suara.</td></tr>
<tr><td>BFT klasik (Tendermint, kini CometBFT)</td><td>Validator bergiliran mengusulkan blok. Blok final begitu disetujui lebih dari dua pertiga kekuatan suara. Dipakai banyak chain di ekosistem Cosmos.</td><td>Finality instan, tetapi jumlah validator terbatas. Kalau lebih dari sepertiga offline, chain berhenti, bukan bercabang.</td></tr>
<tr><td>Proof of History (Solana)</td><td>Rangkaian hash berurutan yang berfungsi sebagai jam bersama, sehingga validator tidak perlu banyak bertukar pesan soal urutan waktu. Keputusan akhir tetap lewat voting berbasis stake (Tower BFT).</td><td>PoH bukan konsensus yang berdiri sendiri. Kecepatannya dibayar dengan kebutuhan perangkat validator yang tinggi.</td></tr>
<tr><td>Proof of Authority (PoA)</td><td>Validator sedikit, identitasnya diketahui dan disetujui. Umum di jaringan uji dan jaringan konsorsium.</td><td>Efisien, tetapi kepercayaan bertumpu pada reputasi segelintir pihak.</td></tr>
</table>
<p>Catatan: pada 2025 komunitas validator Solana menyetujui konsensus baru bernama Alpenglow, yang akan menggantikan Tower BFT sekaligus Proof of History. Per September 2026 Alpenglow belum aktif di jaringan utama; aktivasinya dijadwalkan Oktober 2026. Periksa statusnya saat Anda membaca ini.</p>

<h3>Asumsi keamanan dan cara menyerangnya</h3>
<ul>
<li><b>Serangan 51%.</b> Pihak yang menguasai mayoritas hashrate (PoW) atau cukup banyak stake (PoS) bisa menulis ulang blok terbaru untuk membatalkan transaksinya sendiri (double spend) dan menyensor transaksi orang lain. Ia <b>tidak</b> bisa memalsukan tanda tangan, mencuri dari dompet orang lain, atau mencetak koin di luar aturan, karena node jujur menolak blok yang melanggar aturan. Di PoS gaya BFT ambangnya lain: sepertiga stake cukup untuk menghentikan finality, dua pertiga cukup untuk memfinalkan sejarah palsu.</li>
<li><b>Sybil.</b> Dilawan dengan membuat suara mahal, bukan dengan menghitung identitas. Ancaman ini tetap nyata untuk voting DAO dan airdrop yang menghitung per akun.</li>
<li><b>Long-range attack.</b> Khusus PoS. Kunci validator lama yang stake-nya sudah ditarik tidak bisa lagi dihukum, sehingga secara teori bisa dipakai membuat sejarah alternatif dari masa lalu. Pertahanannya: masa tunggu penarikan stake, dan <b>weak subjectivity</b>, yaitu node baru memulai dari checkpoint terbaru yang ia percaya, bukan dari blok pertama.</li>
<li><b>Biaya serangan.</b> Di PoW: berapa biaya menyewa atau membeli hashrate mayoritas? Di PoS: berapa biaya membeli sepertiga atau dua pertiga stake, padahal pembelian besar mendorong harga naik dan stake itu akan di-slash? Jaringan cukup aman kalau biaya serangan jauh di atas keuntungan yang bisa diraih.</li>
</ul>

<h3>Contoh</h3>
<p>Bitcoin sulit diserang 51% karena hashrate-nya sangat besar dan mesinnya khusus; tidak ada pasar sewa yang cukup besar untuk menandinginya. Chain PoW kecil dengan algoritma umum justru rawan, karena daya komputasinya bisa disewa per jam. Itu sebabnya bursa menuntut konfirmasi jauh lebih banyak untuk koin kecil.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Ambang di atas mengasumsikan penyerang adalah satu pihak rasional. Di dunia nyata, risiko sering datang dari arah lain: bug perangkat lunak, satu aplikasi klien yang dipakai hampir semua validator, atau penyedia staking yang diperintah regulator untuk menyensor. Klaim "chain kami aman" selalu perlu diterjemahkan menjadi pertanyaan: siapa yang harus bersekongkol, dan berapa biayanya?</div>` },
      ],
      kuis: [
        { tanya: 'Menurut makalah Jenderal Bizantium (1982), dengan pesan tanpa tanda tangan, kesepakatan hanya bisa dijamin kalau pengkhianat…',
          pilihan: ['Kurang dari sepertiga jumlah peserta', 'Kurang dari setengah jumlah peserta', 'Kurang dari 90% jumlah peserta', 'Tidak lebih dari satu orang, berapa pun jumlah pesertanya'],
          jelas: 'Batas kurang dari sepertiga inilah asal ambang "dua pertiga jujur" yang dipakai banyak jaringan Proof of Stake gaya BFT.' },
        { tanya: 'Dalam Proof of Work Bitcoin, kalau muncul dua cabang rantai, node mengikuti…',
          pilihan: ['Cabang dengan akumulasi kerja komputasi terbanyak', 'Cabang yang dibuat mining pool terbesar', 'Cabang yang blok terakhirnya bertanda waktu paling baru', 'Cabang yang dipilih para pengembang inti'],
          jelas: 'Aturan "rantai terberat" membuat pemalsuan sejarah mengharuskan penyerang mengalahkan kerja seluruh jaringan jujur. Setiap node bisa memeriksanya sendiri tanpa bertanya kepada siapa pun.' },
        { tanya: 'Di Ethereum, kenapa hukuman slashing bisa membesar kalau banyak validator melanggar pada waktu berdekatan?',
          pilihan: ['Supaya serangan terkoordinasi dihukum jauh lebih berat daripada kesalahan satu validator', 'Supaya harga ETH ikut naik', 'Karena validator besar wajib membayar pajak tambahan', 'Karena jaringan butuh dana untuk biaya server'],
          jelas: 'Satu validator yang salah konfigurasi hanya kena potongan kecil. Pelanggaran massal adalah ciri serangan, jadi potongannya bisa mencapai seluruh stake.' },
        { tanya: 'Apa peran Proof of History di Solana?',
          pilihan: ['Jam bersama yang membuktikan urutan waktu; keputusan akhir tetap lewat voting berbasis stake', 'Pengganti tanda tangan digital pengguna', 'Mekanisme penambangan dengan kartu grafis', 'Arsip riwayat harga SOL'],
          jelas: 'PoH hanya menjawab "apa yang terjadi lebih dulu". Siapa yang berhak memutuskan tetap ditentukan stake validator lewat Tower BFT (sampai Alpenglow aktif).' },
        { tanya: 'Penyerang menguasai 51% hashrate sebuah chain PoW. Apa yang BISA ia lakukan?',
          pilihan: ['Membatalkan transaksinya sendiri yang baru terjadi dan menyensor transaksi orang lain', 'Memindahkan koin dari dompet siapa pun', 'Mencetak koin melebihi batas suplai', 'Mengetahui kunci privat semua pengguna'],
          jelas: 'Node jujur tetap menolak blok yang melanggar aturan, termasuk tanda tangan palsu dan pencetakan liar. Bahayanya ada pada penulisan ulang transaksi terbaru.' },
        { tanya: 'Weak subjectivity di jaringan Proof of Stake berarti…',
          pilihan: ['Node baru memulai dari checkpoint terbaru yang dipercaya, bukan dari blok pertama, untuk menangkal sejarah palsu dari kunci lama', 'Validator boleh memilih aturan jaringan sesuka hati', 'Transaksi di jaringan itu tidak pernah bisa final', 'Hanya validator dengan stake besar yang boleh menyinkronkan data'],
          jelas: 'Ini pertahanan terhadap long-range attack: kunci validator yang sudah keluar bisa dipakai menyusun sejarah alternatif, tetapi node yang berpegang pada checkpoint terbaru tidak akan tertipu.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4, TRILEMA BLOCKCHAIN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'trilema', judul: 'Trilema Blockchain',
      ringkas: 'Kenapa sebuah blockchain sulit sekaligus terdesentralisasi, aman, dan cepat, serta cara industri melonggarkan batas itu lewat rollup, sharding, dan desain modular.',
      pelajaran: [
        { judul: 'Desentralisasi, keamanan, skalabilitas', isi: `
<h3>Konsepnya</h3>
<p>Istilah <b>trilema blockchain</b> dipopulerkan Vitalik Buterin, salah satu pendiri Ethereum, sekitar 2017. Isinya: blockchain yang sederhana sulit memaksimalkan tiga sifat sekaligus. Menguatkan dua biasanya melemahkan yang ketiga.</p>
<ul>
<li><b>Desentralisasi</b>: berapa banyak pihak independen yang bisa ikut memeriksa dan menjalankan jaringan. Ukuran praktisnya: bisakah orang biasa menjalankan node dengan perangkat dan internet yang wajar?</li>
<li><b>Keamanan</b>: berapa biaya untuk menyerang atau menulis ulang sejarah jaringan.</li>
<li><b>Skalabilitas</b>: berapa banyak transaksi yang bisa diproses, dan seberapa murah.</li>
</ul>

<h3>Kenapa ketiganya saling tarik</h3>
<p>Cara paling mudah menambah kapasitas adalah memperbesar blok atau mempercepat waktu blok. Tetapi setiap node harus mengunduh, memeriksa, dan menyimpan semua transaksi. Blok yang lebih besar dan lebih sering berarti node butuh komputer lebih kuat, penyimpanan lebih besar, dan internet lebih cepat. Orang biasa berhenti menjalankan node, dan pemeriksaan jatuh ke tangan segelintir pusat data. Kapasitas naik, desentralisasi turun.</p>
<p>Cara lain adalah mengurangi jumlah validator supaya kesepakatan lebih cepat tercapai. Ini juga mengorbankan desentralisasi, dan kadang keamanan. Makin sedikit pihak, makin mudah mereka bersekongkol atau ditekan.</p>

<h3>Contoh</h3>
<table>
<tr><th>Jaringan</th><th>Yang diutamakan</th><th>Yang dikorbankan</th></tr>
<tr><td>Bitcoin</td><td>Desentralisasi dan keamanan. Node bisa dijalankan dengan perangkat rumahan.</td><td>Kapasitas: hanya beberapa transaksi per detik di lapisan utama.</td></tr>
<tr><td>Ethereum (lapisan utama)</td><td>Desentralisasi dan keamanan, dengan kemampuan program yang luas.</td><td>Kapasitas lapisan utama terbatas; sebagian besar aktivitas didorong ke layer 2.</td></tr>
<tr><td>Solana</td><td>Kecepatan dan biaya murah dalam satu rantai.</td><td>Validator butuh perangkat kelas server dan internet sangat cepat, sehingga lebih sedikit orang yang sanggup ikut.</td></tr>
<tr><td>Chain dengan validator sedikit (misalnya DPoS)</td><td>Kecepatan.</td><td>Kendali terpusat pada puluhan pihak atau kurang.</td></tr>
</table>
<p>Perdebatan ini pernah memecah komunitas Bitcoin. Pada 2015–2017 terjadi "perang ukuran blok". Satu kubu ingin blok lebih besar supaya transaksi murah. Kubu lain menolak demi menjaga node tetap ringan. Kubu blok besar akhirnya membuat hard fork bernama Bitcoin Cash pada 1 Agustus 2017, sedangkan Bitcoin mengaktifkan SegWit beberapa minggu kemudian.</p>

<h3>Cara membacanya</h3>
<p>Trilema bukan hukum fisika. Ia kerangka berpikir. Gunanya membuat Anda bertanya saat sebuah proyek mengklaim sangat cepat dan murah: <b>apa yang dikorbankan?</b> Berapa validatornya? Berapa biaya menjalankan node? Siapa yang bisa menghentikan jaringan? Klaim transaksi per detik (TPS) juga sering berupa kapasitas teoretis. Yang lebih penting adalah pemakaian nyata dan apa yang terjadi saat jaringan sedang ramai.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Desentralisasi sulit diukur dengan satu angka. Jumlah validator bisa terlihat banyak, padahal sebagian besar dijalankan beberapa perusahaan atau di satu penyedia cloud. Kapasitas dan spesifikasi node juga terus berubah seiring pembaruan perangkat lunak dan perangkat keras. Tabel di atas adalah gambaran umum per 2026, bukan peringkat tetap.</div>` },

        { judul: 'Cara industri melonggarkannya: rollup, sharding & modular', isi: `
<h3>Konsepnya</h3>
<p>Kalau satu rantai tidak sanggup mengerjakan semuanya, bagi pekerjaannya. Hampir semua solusi skalabilitas modern mengikuti ide ini. Lapisan dasar dibiarkan tetap terdesentralisasi dan aman. Sebagian besar pekerjaan dipindah ke tempat lain, dengan cara yang tetap bisa diperiksa lapisan dasar.</p>

<h3>Cara kerjanya</h3>
<p><b>1. Rollup (layer 2).</b> Rollup memproses transaksi di luar lapisan utama (layer 1), mengumpulkannya dalam kelompok besar, lalu mengirim ringkasan beserta datanya ke layer 1. Ada dua jenis utama:</p>
<ul>
<li><b>Optimistic rollup</b> (misalnya Arbitrum dan OP Mainnet) menganggap transaksi sah kecuali ada yang membuktikan sebaliknya lewat <b>fraud proof</b> dalam masa sanggah. Karena itu penarikan ke Ethereum lewat jembatan resmi biasanya menunggu sekitar tujuh hari.</li>
<li><b>ZK rollup</b> (misalnya zkSync, Starknet, Scroll) mengirim <b>bukti validitas</b> matematis bahwa semua transaksi dihitung dengan benar. Tidak perlu masa sanggah, tetapi pembuatan buktinya rumit dan mahal secara komputasi.</li>
</ul>
<p>Ethereum menyesuaikan diri untuk rollup. Pembaruan Dencun (Maret 2024) memperkenalkan <b>blob</b> lewat EIP-4844: ruang data murah khusus rollup yang dihapus setelah sekitar 18 hari. Pembaruan Fusaka (akhir 2025) menambah PeerDAS, cara agar node cukup mengambil sampel data tanpa mengunduh semuanya.</p>
<p><b>2. Sharding.</b> Jaringan dibelah menjadi beberapa bagian (shard) yang memproses transaksi secara paralel, masing-masing dijaga sebagian validator. NEAR dan TON memakai varian sharding. Ethereum sempat merencanakan sharding eksekusi, lalu sejak sekitar 2020 beralih ke peta jalan yang berpusat pada rollup.</p>
<p><b>3. Desain modular.</b> Pekerjaan blockchain dipecah menjadi beberapa fungsi yang bisa ditangani lapisan berbeda:</p>
<ul>
<li><b>Eksekusi</b>: menjalankan transaksi dan menghitung saldo baru.</li>
<li><b>Settlement</b>: tempat hasil akhir dan sengketa diputuskan.</li>
<li><b>Data availability (DA)</b>: menjamin data transaksi benar-benar dipublikasikan, sehingga siapa pun bisa memeriksa ulang.</li>
</ul>
<p>Rollup di Ethereum mengerjakan eksekusi sendiri dan menyerahkan settlement serta DA ke Ethereum. Celestia (mainnet Oktober 2023) adalah contoh chain yang khusus menyediakan DA. Kebalikannya adalah desain <b>monolitik</b> seperti Solana, yang mengerjakan semua fungsi di satu rantai.</p>

<h3>Contoh: kompromi masing-masing</h3>
<table>
<tr><th>Pendekatan</th><th>Yang didapat</th><th>Yang dikorbankan</th></tr>
<tr><td>Rollup</td><td>Transaksi murah dengan jaminan dari layer 1</td><td>Banyak sequencer (pengurut transaksi) masih dijalankan satu perusahaan; kontrak bisa diubah dewan multisig; likuiditas terpecah antar-L2</td></tr>
<tr><td>Sharding</td><td>Kapasitas naik seiring jumlah shard</td><td>Komunikasi antar-shard rumit; tiap shard dijaga lebih sedikit validator</td></tr>
<tr><td>DA terpisah</td><td>Ruang data lebih murah</td><td>Keamanan data bergantung pada jaringan DA itu, bukan pada Ethereum</td></tr>
<tr><td>Monolitik</td><td>Sederhana; semua aplikasi di satu tempat</td><td>Kebutuhan perangkat validator tinggi</td></tr>
</table>

<div class="batas-berlaku"><b>Batas & risiko.</b> Label "layer 2" bukan jaminan keamanan setara layer 1. Periksa apakah fraud proof atau bukti validitasnya sudah aktif, siapa yang bisa mengubah kontraknya, dan apakah Anda tetap bisa keluar ke layer 1 kalau sequencer berhenti. Situs pemantau independen seperti L2BEAT menilai hal-hal ini secara berkala. Jembatan antar-chain juga termasuk sasaran peretasan terbesar dalam sejarah crypto. Detail pembaruan Ethereum di atas berlaku per 2025; peta jalannya masih berjalan.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa memperbesar ukuran blok bisa mengurangi desentralisasi?',
          pilihan: ['Node butuh perangkat, penyimpanan, dan internet lebih kuat, sehingga makin sedikit orang sanggup menjalankannya', 'Karena blok besar lebih mudah dicuri', 'Karena blok besar otomatis menaikkan biaya transaksi', 'Karena penambang dilarang membuat blok besar'],
          jelas: 'Setiap node harus memeriksa semua transaksi. Kalau bebannya naik, pemeriksaan pindah ke segelintir pusat data, dan jaringan makin mudah dikendalikan sedikit pihak.' },
        { tanya: 'Bitcoin Cash lahir pada Agustus 2017 dari perdebatan tentang…',
          pilihan: ['Ukuran blok: kapasitas lebih besar lawan node yang tetap ringan', 'Rencana pindah ke Proof of Stake', 'Penambahan batas suplai di atas 21 juta', 'Pergantian nama jaringan'],
          jelas: 'Perang ukuran blok 2015–2017 adalah contoh nyata trilema: satu kubu memilih skalabilitas di lapisan utama, kubu lain memilih desentralisasi.' },
        { tanya: 'Kenapa penarikan dari optimistic rollup ke Ethereum lewat jembatan resmi biasanya menunggu sekitar seminggu?',
          pilihan: ['Ada masa sanggah agar siapa pun bisa mengajukan fraud proof bila ada transaksi curang', 'Karena Ethereum hanya memproses penarikan seminggu sekali', 'Karena harus menunggu biaya gas turun', 'Karena harus menunggu halving berikutnya'],
          jelas: 'Optimistic rollup menganggap semua transaksi sah sampai terbukti sebaliknya. Masa tunggu memberi waktu untuk membuktikannya.' },
        { tanya: 'Dalam desain modular, lapisan data availability (DA) bertugas…',
          pilihan: ['Menjamin data transaksi benar-benar dipublikasikan sehingga siapa pun bisa memeriksa ulang', 'Menentukan harga token di pasar', 'Menyimpan kunci privat pengguna', 'Menampilkan antarmuka aplikasi'],
          jelas: 'Tanpa data yang terbuka, tidak ada yang bisa membuktikan kecurangan atau merekonstruksi saldo. Karena itu DA menentukan seberapa aman sebuah rollup.' },
        { tanya: 'Apa fungsi blob yang diperkenalkan EIP-4844 (Maret 2024)?',
          pilihan: ['Ruang data murah khusus rollup yang disimpan sementara, sehingga biaya layer 2 turun', 'Jenis NFT baru di Ethereum', 'Token tata kelola Ethereum', 'Dompet khusus untuk validator'],
          jelas: 'Rollup butuh tempat menaruh data transaksinya di Ethereum. Blob menyediakan ruang itu lebih murah karena hanya disimpan sekitar 18 hari.' },
        { tanya: 'Sebuah L2 memakai satu sequencer milik perusahaan dan kontraknya bisa diubah dewan multisig. Artinya…',
          pilihan: ['Transaksinya bisa murah, tetapi ada pihak yang bisa menyensor atau mengubah aturan, jadi keamanannya belum setara layer 1', 'L2 itu pasti penipuan', 'Keamanannya sama persis dengan Ethereum', 'Transaksi di L2 itu tidak bisa diproses'],
          jelas: 'Banyak L2 masih dalam tahap awal desentralisasi. Itu bukan otomatis buruk, tetapi risikonya perlu Anda ketahui sebelum menaruh dana besar.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 5, SEJARAH CRYPTO
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'sejarah', judul: 'Sejarah Crypto: Dari Cypherpunk ke ETF',
      ringkas: 'Perjalanan ide uang digital dari para kriptografer 1980-an sampai ETF dan undang-undang stablecoin, supaya Anda mengenali pola naik-turun industri ini.',
      pelajaran: [
        { judul: 'Prasejarah: eCash, cypherpunk, Hashcash, b-money & Bit Gold', isi: `
<h3>Konsepnya</h3>
<p>Bitcoin tidak muncul dari ruang hampa. Hampir semua komponennya sudah ada sebelum 2008: tanda tangan digital, fungsi hash, rantai data bertanda waktu, dan proof of work. Sumbangan terbesar Satoshi Nakamoto adalah <b>merangkai potongan-potongan itu</b> sehingga double spending bisa dicegah tanpa server pusat. Mengenal usaha-usaha sebelumnya membantu Anda melihat masalah apa yang sebenarnya dipecahkan.</p>

<h3>Tokoh dan gagasan</h3>
<ul>
<li><b>David Chaum dan eCash.</b> Pada 1982 Chaum menulis makalah tentang <i>blind signature</i>. Dengan cara ini bank bisa mengesahkan "koin digital" tanpa melihat nomornya, sehingga pembayaran bisa privat seperti uang tunai. Perusahaannya, DigiCash (berdiri 1989), menjalankan eCash bersama beberapa bank pada 1990-an. Tetapi sistemnya tetap bergantung pada server bank untuk mencatat koin yang sudah terpakai. DigiCash bangkrut pada 1998.</li>
<li><b>Cypherpunk.</b> Sekitar 1992, sekelompok kriptografer dan aktivis membentuk milis cypherpunk. Mereka percaya privasi harus dilindungi dengan kode, bukan hanya dengan undang-undang. "A Cypherpunk's Manifesto" karya Eric Hughes (1993) menyatakan bahwa privasi diperlukan bagi masyarakat terbuka di era elektronik. Banyak nama di bawah ini aktif di lingkaran itu.</li>
<li><b>Hashcash (1997).</b> Adam Back mengusulkan proof of work untuk melawan spam. Konsep ini kelak menjadi mesin penambangan Bitcoin, dan whitepaper Bitcoin mengutipnya.</li>
<li><b>b-money (1998).</b> Wei Dai menggambarkan uang elektronik anonim yang dicatat bersama oleh para peserta, dengan uang baru diciptakan lewat kerja komputasi. Whitepaper Bitcoin juga mengutipnya.</li>
<li><b>Bit Gold (dirancang 1998, dipublikasikan luas 2005).</b> Nick Szabo, yang juga memperkenalkan istilah <i>smart contract</i> pada 1990-an, merancang "emas digital". Hasil proof of work dirangkai berurutan dan diberi tanda waktu, sehingga kelangkaannya berasal dari biaya produksi. Bit Gold tidak pernah diluncurkan.</li>
<li><b>RPOW (2004).</b> Hal Finney membuat token proof of work yang bisa dipakai ulang. Finney kemudian menjadi penerima transaksi Bitcoin pertama dari Satoshi pada Januari 2009.</li>
</ul>

<h3>Contoh: kenapa mereka belum berhasil</h3>
<p>Setiap proyek memecahkan sebagian teka-teki. eCash memecahkan privasi, tetapi tetap butuh pusat. Hashcash memecahkan cara membuat sesuatu yang mahal diproduksi, tetapi ia bukan uang. b-money dan Bit Gold mendekati jawabannya, tetapi belum punya cara meyakinkan agar peserta yang tidak saling kenal sepakat soal urutan catatan tanpa dicurangi lewat identitas palsu.</p>
<p>Ada juga pelajaran dari arah lain. Layanan emas digital terpusat seperti e-gold (berdiri 1996) tumbuh besar, lalu terjerat kasus hukum di Amerika Serikat pada 2007–2008. Titik pusat selalu bisa dihentikan. Bitcoin dirancang supaya tidak punya titik seperti itu.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Identitas Satoshi Nakamoto tidak pernah terbukti. Banyak tebakan mengarah ke tokoh-tokoh di atas, tetapi semuanya spekulasi. Perlakukan klaim "Satoshi adalah si A" dengan skeptis. Tahun untuk beberapa gagasan, terutama Bit Gold, berbeda-beda di berbagai sumber karena konsepnya beredar di milis sebelum ditulis resmi. Yang dipakai di sini adalah tahun yang paling umum dirujuk.</div>` },

        { judul: 'Bitcoin 2008–2016: whitepaper, genesis block, pizza & Mt. Gox', isi: `
<h3>Konsepnya</h3>
<p>Delapan tahun pertama Bitcoin adalah masa ketika eksperimen dari sebuah milis kriptografi berubah menjadi aset yang diperdagangkan di seluruh dunia. Periode ini juga mengajarkan pelajaran yang terus berulang: protokolnya bisa bertahan, sementara perusahaan di sekitarnya bisa runtuh.</p>

<h3>Garis waktu</h3>
<table>
<tr><th>Waktu</th><th>Peristiwa</th><th>Kenapa penting</th></tr>
<tr><td>31 Oktober 2008</td><td>Satoshi Nakamoto mengirim whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System" ke milis kriptografi.</td><td>Menunjukkan cara mencegah double spending tanpa pihak tepercaya.</td></tr>
<tr><td>3 Januari 2009</td><td>Blok pertama (genesis block) ditambang. Di dalamnya tertulis judul berita surat kabar The Times hari itu tentang rencana dana talangan kedua untuk bank di Inggris.</td><td>Penanda tanggal sekaligus pesan: Bitcoin lahir di tengah krisis keuangan 2008.</td></tr>
<tr><td>Januari 2009</td><td>Perangkat lunak Bitcoin versi pertama dirilis. Hal Finney menerima transaksi pertama dari Satoshi.</td><td>Jaringan mulai dipakai orang selain penciptanya.</td></tr>
<tr><td>22 Mei 2010</td><td>Laszlo Hanyecz membayar 10.000 BTC untuk dua loyang pizza. Tanggal ini kini dirayakan sebagai Bitcoin Pizza Day.</td><td>Salah satu pembelian barang nyata pertama dengan Bitcoin yang tercatat.</td></tr>
<tr><td>Agustus 2010</td><td>Bug "value overflow" menciptakan lebih dari 184 miliar BTC dalam satu transaksi. Dalam hitungan jam dirilis perbaikan, dan jaringan meninggalkan blok berisi bug itu.</td><td>Aturan jaringan ditegakkan oleh perangkat lunak node dan komunitasnya. Bug bisa fatal kalau tidak cepat ditangani.</td></tr>
<tr><td>2010–2011</td><td>Satoshi berhenti muncul di publik dan menyerahkan pengembangan kepada orang lain.</td><td>Bitcoin berjalan tanpa pendiri, hal yang jarang terjadi pada proyek teknologi.</td></tr>
<tr><td>2011–2013</td><td>Pasar gelap Silk Road memakai Bitcoin sampai ditutup FBI pada Oktober 2013.</td><td>Membentuk citra awal Bitcoin sebagai uang kriminal, sekaligus menunjukkan bahwa transaksinya bisa dilacak.</td></tr>
<tr><td>28 November 2012</td><td>Halving pertama: imbalan blok turun dari 50 ke 25 BTC.</td><td>Jadwal suplai berjalan persis seperti yang tertulis di kode.</td></tr>
<tr><td>Februari 2014</td><td>Mt. Gox, bursa yang pernah menangani sebagian besar perdagangan Bitcoin dunia, menghentikan penarikan lalu bangkrut. Sekitar 850.000 BTC dilaporkan hilang; sekitar 200.000 di antaranya kemudian ditemukan kembali.</td><td>Pelajaran besar pertama tentang risiko menitipkan aset di bursa.</td></tr>
<tr><td>2015–2016</td><td>Perdebatan ukuran blok memanas. Pada 9 Juli 2016 terjadi halving kedua (25 ke 12,5 BTC).</td><td>Awal "perang ukuran blok" yang berujung pada SegWit dan Bitcoin Cash pada 2017.</td></tr>
</table>

<h3>Contoh</h3>
<p>Kisah pizza sering dijadikan lelucon soal "pizza termahal di dunia". Pelajaran yang lebih berguna justru kebalikannya. Pada 2010 Bitcoin hampir tidak punya harga pasar, dan orang harus benar-benar memakainya agar ia bernilai. Harga Bitcoin baru pertama kali menembus US$1.000 pada akhir 2013, lalu jatuh tajam setelah Mt. Gox runtuh. Pola naik tajam, keruntuhan institusi, lalu pemulihan akan Anda lihat lagi di pelajaran berikutnya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Bagi kreditur Mt. Gox, proses hukumnya berjalan lebih dari satu dekade; pembayaran kembali baru mulai dicairkan pada 2024. Jumlah BTC yang hilang di atas adalah angka yang dilaporkan saat itu. Motivasi Satoshi hanya bisa ditebak dari tulisannya. Pesan di genesis block sering ditafsirkan sebagai kritik terhadap sistem perbankan, tetapi Satoshi tidak pernah menjelaskannya secara resmi.</div>` },

        { judul: '2015–sekarang: Ethereum, ICO, DeFi, NFT, keruntuhan 2022, ETF & regulasi', isi: `
<h3>Konsepnya</h3>
<p>Kalau 2009–2016 adalah era Bitcoin sebagai eksperimen uang, periode sesudahnya adalah era <b>blockchain yang bisa diprogram</b>. Ada satu pola yang perlu Anda tangkap. Setiap gelombang dimulai dari inovasi nyata, lalu dibanjiri spekulasi, lalu runtuh, dan menyisakan infrastruktur yang dipakai gelombang berikutnya.</p>

<h3>Garis waktu</h3>
<ul>
<li><b>2015, Ethereum.</b> Diusulkan Vitalik Buterin pada akhir 2013 dan diluncurkan 30 Juli 2015. Ethereum menambahkan <b>smart contract</b>, yaitu program yang berjalan di blockchain. Pada 2016 proyek The DAO diretas. Komunitas memutuskan hard fork untuk mengembalikan dana, dan pihak yang menolak melanjutkan rantai lama sebagai Ethereum Classic.</li>
<li><b>2017, ledakan ICO.</b> Standar token ERC-20 membuat siapa pun bisa menerbitkan token dan menjualnya langsung ke publik lewat Initial Coin Offering. Miliaran dolar terkumpul, banyak untuk proyek yang tidak pernah jadi. Pada Juli 2017 SEC, regulator pasar modal AS, menyatakan token tertentu bisa tergolong sekuritas. Pada September 2017 Tiongkok melarang ICO. Bitcoin mendekati US$20.000 pada Desember 2017, lalu turun lebih dari 80% sepanjang 2018.</li>
<li><b>2020, DeFi summer.</b> Pada pertengahan 2020, Compound mulai membagikan token COMP kepada pengguna protokolnya. Model <i>yield farming</i> ini cepat menyebar ke protokol pinjam-meminjam dan bursa terdesentralisasi (DEX) seperti Uniswap. Untuk pertama kalinya, pinjaman dan pertukaran aset berjalan tanpa perusahaan perantara dalam skala besar.</li>
<li><b>2021, NFT dan puncak euforia.</b> Karya digital Beeple terjual sekitar US$69 juta di balai lelang Christie's pada Maret 2021. Koleksi NFT dan gim berbasis token meledak. El Salvador menjadikan Bitcoin alat pembayaran sah pada September 2021; pada awal 2025 undang-undangnya direvisi: pedagang tidak lagi wajib menerimanya, pajak tidak bisa dibayar dengan Bitcoin, dan status alat pembayaran sahnya dicabut.</li>
<li><b>2022, keruntuhan.</b> Pada Mei 2022, stablecoin algoritmik TerraUSD (UST) lepas dari patokannya dan token LUNA runtuh, menghapus nilai puluhan miliar dolar. Dampaknya menular ke pemberi pinjaman crypto seperti Celsius dan dana Three Arrows Capital. Pada November 2022 bursa FTX bangkrut setelah terungkap dana nasabah dipakai perusahaan afiliasinya; pendirinya kemudian divonis bersalah atas penipuan. Di tengah semua itu, Ethereum menyelesaikan The Merge pada September 2022.</li>
<li><b>2024, ETF spot.</b> Pada 10 Januari 2024, SEC menyetujui ETF Bitcoin spot pertama di Amerika Serikat. ETF Ethereum spot menyusul: disetujui Mei 2024, mulai diperdagangkan Juli 2024. Sebagai pembanding, Kanada sudah punya ETF Bitcoin spot sejak 2021. Di Uni Eropa, aturan MiCA berlaku penuh mulai 30 Desember 2024.</li>
<li><b>2025, regulasi stablecoin.</b> Pada 18 Juli 2025, GENIUS Act ditandatangani menjadi undang-undang di AS. Isinya mengatur penerbit stablecoin pembayaran: cadangan, izin, dan pengawasan. Nilai stablecoin yang beredar melampaui US$300 miliar pada 2025. Di Indonesia, pengawasan aset kripto berpindah dari Bappebti ke OJK pada 10 Januari 2025.</li>
</ul>

<h3>Contoh: pola yang berulang</h3>
<p>Bandingkan ICO 2017 dengan keruntuhan 2022. Keduanya didahului janji keuntungan besar yang sulit dijelaskan asal-usulnya. Protokol Anchor, misalnya, menawarkan imbal hasil sekitar 20% per tahun untuk deposit UST sebelum runtuh. Kalau Anda tidak bisa menjawab "uangnya dari mana?", kemungkinan besar sumbernya adalah uang peserta lain. Sebaliknya, yang bertahan dari setiap gelombang adalah infrastruktur yang benar-benar dipakai: stablecoin, DEX, protokol pinjaman, dan kini produk yang diawasi regulator seperti ETF.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Sejarah ini sengaja diringkas dan berhenti di 2025; peristiwa sesudahnya belum dirangkum di sini. Regulasi di AS, Eropa, dan Indonesia masih bergerak cepat, jadi periksa aturan terbaru sebelum mengambil keputusan. Angka nilai lelang, total stablecoin, dan besar kerugian adalah angka yang dilaporkan pada saatnya dan sudah dibulatkan. ETF dan undang-undang tidak menghapus risiko harga. Keduanya hanya mengubah siapa yang ikut di pasar.</div>` },
      ],
      kuis: [
        { tanya: 'Apa sumbangan eCash David Chaum, dan kenapa ia belum menjawab masalah yang dipecahkan Bitcoin?',
          pilihan: ['Blind signature membuat pembayaran digital privat, tetapi sistemnya masih bergantung pada server pusat', 'eCash adalah blockchain pertama tetapi terlalu lambat', 'eCash memakai Proof of Work tetapi terlalu boros listrik', 'eCash tidak memakai kriptografi sama sekali'],
          jelas: 'eCash memecahkan privasi, tetapi pencatatan koin yang sudah terpakai tetap di server bank. Saat DigiCash bangkrut pada 1998, sistemnya ikut berhenti.' },
        { tanya: 'Genesis block Bitcoin (3 Januari 2009) memuat…',
          pilihan: ['Judul berita surat kabar The Times tentang dana talangan kedua untuk bank', 'Nama asli Satoshi Nakamoto', 'Harga Bitcoin pertama dalam dolar', 'Daftar alamat para penambang awal'],
          jelas: 'Teks itu berfungsi sebagai bukti bahwa blok tidak dibuat sebelum tanggal tersebut, dan sering dibaca sebagai komentar atas krisis keuangan 2008.' },
        { tanya: 'Pelajaran utama dari runtuhnya Mt. Gox (2014) dan FTX (2022) adalah…',
          pilihan: ['Saldo di bursa bergantung pada kejujuran dan kesehatan bursa itu, bukan hanya pada blockchain', 'Blockchain Bitcoin berhasil dibobol peretas', 'Bitcoin tidak bisa diperdagangkan di bursa', 'Semua bursa crypto pasti bangkrut'],
          jelas: 'Dalam kedua kasus, protokol blockchain tetap berjalan. Yang gagal adalah perusahaan yang memegang kunci nasabah.' },
        { tanya: 'Apa yang memicu "DeFi summer" 2020?',
          pilihan: ['Protokol mulai membagikan token kepada penggunanya (yield farming), dimulai dari Compound dengan COMP', 'Persetujuan ETF Bitcoin spot', 'Halving Bitcoin yang pertama', 'Larangan ICO di Tiongkok'],
          jelas: 'Pembagian token kepada pengguna menarik dana besar ke protokol pinjam-meminjam dan DEX, dan menunjukkan layanan keuangan bisa berjalan tanpa perusahaan perantara.' },
        { tanya: 'Protokol Anchor menawarkan imbal hasil sekitar 20% per tahun untuk UST sebelum runtuh pada 2022. Pertanyaan apa yang seharusnya diajukan?',
          pilihan: ['Dari mana uang untuk membayar imbal hasil itu, dan apakah sumbernya bisa bertahan', 'Berapa banyak influencer yang merekomendasikannya', 'Apakah imbal hasilnya masih bisa naik lagi', 'Seberapa cepat keuntungannya bisa ditarik'],
          jelas: 'Imbal hasil tinggi tanpa sumber pendapatan yang jelas biasanya dibayar dari subsidi atau uang peserta baru, dan berhenti saat aliran itu berhenti.' },
        { tanya: 'Apakah ETF Bitcoin spot yang disetujui pada Januari 2024 adalah yang pertama di dunia?',
          pilihan: ['Bukan; Kanada sudah punya sejak 2021, dan Januari 2024 adalah yang pertama di Amerika Serikat', 'Ya, itu yang pertama di dunia', 'Bukan; yang pertama diluncurkan di Tiongkok pada 2017', 'Bukan; ETF Bitcoin spot sudah ada sejak 2009'],
          jelas: 'Persetujuan di AS dianggap tonggak karena ukuran pasar modalnya, bukan karena menjadi yang pertama.' },
      ] },
  ],
});
