// kelas/lanjutan.js — data kelas kategori Teknologi Lanjutan & Tren. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'lanjutan', urut: 6, nama: 'Teknologi Lanjutan & Tren', warna: '#5a9a9a',
  ringkas: 'Cara kerja teknologi di tepi dunia crypto, dari koin privasi, NFT, RWA, DePIN, dan AI sampai CBDC dan adopsi perusahaan, beserta batas-batasnya.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1 — KOIN PRIVASI: MONERO & ZCASH
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'koin-privasi', judul: 'Koin Privasi: Monero & Zcash',
      ringkas: 'Kenapa privasi finansial penting, bagaimana Monero dan Zcash menyembunyikan transaksi dengan cara yang berbeda, dan kenapa bursa serta regulator mewaspadainya.',
      pelajaran: [
        { judul: 'Privasi finansial dan bedanya dengan pencucian uang', isi: `
<h3>Konsepnya</h3>
<p>Bitcoin sering disebut anonim. Kenyataannya tidak. Bitcoin itu <b>pseudonim</b>: nama Anda tidak tercatat, tetapi setiap alamat, jumlah, dan waktu transaksi terbuka untuk siapa pun, selamanya. Begitu satu alamat terhubung dengan identitas Anda, misalnya karena Anda menarik koin dari bursa yang sudah memverifikasi KTP Anda, seluruh riwayat alamat itu ikut terbaca.</p>
<p>Privasi finansial berarti Anda yang memutuskan siapa boleh melihat keuangan Anda. Ini bukan hal aneh. Mutasi rekening bank Anda tidak bisa diintip tetangga, dan uang tunai tidak meninggalkan jejak. Blockchain publik justru kebalikannya: transparan secara bawaan.</p>
<p>Kenapa itu penting? Ada beberapa alasan praktis:</p>
<ul>
<li><b>Keamanan pribadi.</b> Orang yang ketahuan memegang banyak koin bisa menjadi sasaran penipuan, pemerasan, bahkan kekerasan fisik.</li>
<li><b>Rahasia bisnis.</b> Kalau perusahaan membayar pemasok lewat chain publik, pesaing bisa melihat siapa pemasoknya, berapa nilainya, dan kapan dibayar.</li>
<li><b>Gaji dan belanja.</b> Majikan yang membayar gaji ke alamat Anda bisa melihat ke mana saja uang itu Anda belanjakan.</li>
<li><b>Fungibilitas.</b> Satu koin seharusnya sama nilainya dengan koin lain. Kalau koin bisa dianggap "tercemar" karena riwayatnya, sebagian koin bisa ditolak bursa walau pemegangnya sekarang tidak bersalah.</li>
</ul>
<h3>Cara kerjanya</h3>
<p>Pengintaian di chain publik dilakukan lewat <b>analisis on-chain</b>: perusahaan analitik mengelompokkan alamat yang kemungkinan dimiliki orang yang sama, lalu mencocokkannya dengan data bursa, media sosial, atau alamat yang pernah dipublikasikan. Satu kebocoran kecil bisa membuka banyak hal.</p>
<p><b>Pencucian uang</b> adalah hal lain. Pencucian uang adalah upaya membuat uang hasil kejahatan tampak berasal dari sumber sah. Polanya biasanya tiga tahap: <i>placement</i> (memasukkan uang kotor ke sistem keuangan), <i>layering</i> (memindahkannya berkali-kali agar asal-usulnya kabur), dan <i>integration</i> (memakainya kembali seolah uang bersih).</p>
<p>Perbedaannya ada pada asal dan tujuan. Privasi menyembunyikan informasi dari publik; uangnya sendiri sah. Pencucian uang menyamarkan asal uang yang tidak sah dari penegak hukum. Alat yang sama bisa dipakai untuk keduanya. Karena itulah perdebatannya panas: yang dipersoalkan bukan hanya alatnya, tetapi siapa yang boleh melihat dan dalam kondisi apa.</p>
<h3>Contoh</h3>
<p>Bayangkan dua orang memakai layanan penyamaran transaksi yang sama. Orang pertama pedagang yang tidak ingin pesaing tahu omzetnya; ia tetap melaporkan pajak dan bisa menunjukkan catatannya ke auditor. Orang kedua peretas yang memindahkan hasil curian. Secara teknis transaksi mereka mirip. Secara hukum, yang pertama menjaga privasi, yang kedua mencuci uang.</p>
<p>Dunia crypto sudah mengalami bentrokan ini. Pada 2022 Departemen Keuangan AS menjatuhkan sanksi pada Tornado Cash, layanan pencampur (mixer) di Ethereum, karena dipakai mencuci dana hasil peretasan. Pada akhir 2024 pengadilan banding AS memutuskan bahwa kontrak pintar yang tidak bisa diubah tidak bisa disanksi sebagai "properti", dan sanksi itu dicabut pada Maret 2025. Kasus pidana terhadap pengembangnya berjalan terpisah.</p>
<p>Data juga perlu dibaca dengan tenang. Laporan tahunan perusahaan analitik Chainalysis (edisi 2024 dan 2025) memperkirakan transaksi terkait kejahatan di bawah 1% dari volume on-chain, dan sebagian besarnya memakai stablecoin, bukan koin privasi. Angka ini perkiraan dan sering direvisi, tetapi cukup untuk menunjukkan bahwa "privasi sama dengan kejahatan" adalah penyederhanaan.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Privasi di chain tidak menghapus kewajiban hukum Anda. Pajak tetap harus dilaporkan, dan bursa tetap wajib memeriksa asal dana (KYC dan anti pencucian uang). Memakai alat privasi juga bisa membuat akun bursa Anda diperiksa atau dibekukan, walau dana Anda sah. Simpan catatan asal-usul dana Anda sendiri.</div>` },

        { judul: 'Monero: privasi sebagai bawaan', isi: `
<h3>Konsepnya</h3>
<p>Monero (XMR) diluncurkan April 2014 dengan satu prinsip: setiap transaksi harus privat, tanpa pengecualian. Tidak ada mode transparan. Pengirim, penerima, dan jumlah disembunyikan untuk semua orang, secara bawaan.</p>
<p>Kenapa privasi bawaan penting? Karena privasi adalah permainan kerumunan. Anda hanya tersamar kalau banyak orang lain terlihat sama persis dengan Anda. Kalau privasi bersifat pilihan dan hanya sedikit yang memakainya, pemakai privasi justru mencolok. Dengan mewajibkannya, Monero membuat semua transaksi tampak serupa. Kelompok orang yang tidak bisa dibedakan satu sama lain ini disebut <b>anonymity set</b>.</p>
<h3>Cara kerjanya</h3>
<p>Monero memakai tiga lapis penyamaran. Masing-masing menjawab satu pertanyaan.</p>
<table>
<tr><th>Yang disembunyikan</th><th>Teknik</th><th>Idenya</th></tr>
<tr><td>Siapa pengirimnya</td><td>Ring signature</td><td>Tanda tangan dibuat atas nama sekelompok kunci; pengamat hanya tahu salah satunya pengirim asli</td></tr>
<tr><td>Siapa penerimanya</td><td>Stealth address</td><td>Setiap pembayaran dikirim ke alamat sekali pakai yang baru</td></tr>
<tr><td>Berapa jumlahnya</td><td>RingCT</td><td>Jumlah dikunci dalam "komitmen" matematis yang bisa diperiksa tanpa dibuka</td></tr>
</table>
<p><b>Ring signature.</b> Saat Anda membelanjakan koin, dompet mengambil 15 keluaran transaksi lama lain sebagai umpan (decoy), lalu mencampurnya dengan keluaran milik Anda. Ukuran cincin ini tetap 16 sejak pembaruan Agustus 2022. Jaringan bisa memastikan bahwa salah satu dari 16 anggota berhak membelanjakan, tanpa tahu yang mana. Untuk mencegah koin yang sama dibelanjakan dua kali, setiap keluaran menghasilkan <b>key image</b>, semacam sidik jari unik. Kalau key image yang sama muncul lagi, transaksi ditolak.</p>
<p><b>Stealth address.</b> Alamat Monero publik Anda tidak pernah muncul di blockchain. Pengirim memakai alamat Anda untuk menurunkan alamat sekali pakai. Dompet Anda memindai blockchain dengan <b>view key</b> (kunci lihat) untuk menemukan pembayaran yang ditujukan kepada Anda. View key hanya bisa melihat pembayaran masuk, tidak bisa membelanjakan, jadi bisa diberikan ke auditor.</p>
<p><b>RingCT</b> (Ring Confidential Transactions, aktif sejak Januari 2017) menyembunyikan jumlah. Jaringan tetap bisa memeriksa bahwa jumlah masuk sama dengan jumlah keluar dan tidak ada angka negatif, lewat bukti rentang (range proof) bernama Bulletproofs (sejak Agustus 2022 memakai versi yang lebih ringkas, Bulletproofs+). Jadi tidak ada koin yang tercetak diam-diam, walau tidak ada yang melihat angkanya.</p>
<p><b>Penambangan.</b> Monero memakai Proof of Work dengan algoritma <b>RandomX</b> (sejak November 2019). RandomX menjalankan program acak yang cocok untuk prosesor komputer biasa (CPU), sehingga mesin khusus (ASIC) tidak jauh lebih unggul. Tujuannya agar penambangan tetap tersebar di banyak orang. Sejak pertengahan 2022 Monero juga memberi hadiah tetap 0,6 XMR per blok tanpa batas waktu (tail emission) agar penambang tetap dibayar.</p>
<h3>Contoh</h3>
<p>Ani mengirim 2 XMR ke Budi. Di blockchain, pengamat melihat satu transaksi dengan 16 kemungkinan sumber dana, satu alamat tujuan yang belum pernah muncul dan tidak akan muncul lagi, serta jumlah yang tersandi. Budi, dengan view key-nya, tahu ia menerima 2 XMR. Pengamat lain tidak tahu apa pun selain "sebuah transaksi sah terjadi".</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Privasi Monero kuat, tetapi tidak sempurna. Umpan dipilih secara statistik, dan riset menunjukkan transaksi lama (sebelum 2017) atau kebiasaan pengguna yang ceroboh bisa mempersempit tebakan. Kebocoran juga bisa terjadi di luar chain: alamat IP, bursa tempat Anda membeli, atau pola waktu transaksi. Pengembang menyiapkan pengganti ring signature yang memakai seluruh riwayat chain sebagai kerumunan (FCMP++), tetapi per pertengahan 2026 belum diaktifkan di jaringan utama. Dari sisi keamanan jaringan, pada Agustus 2025 pool penambangan Qubic mengklaim menguasai mayoritas hashrate Monero dan sempat terjadi reorganisasi beberapa blok. Ini pengingat bahwa Proof of Work dengan hashrate kecil lebih mudah diganggu. Terakhir, banyak bursa tidak lagi mendaftarkan XMR, sehingga membeli dan menjualnya makin sulit.</div>` },

        { judul: 'Zcash, zk-SNARK, dan tekanan regulasi', isi: `
<h3>Konsepnya</h3>
<p>Zcash (ZEC) diluncurkan Oktober 2016 dari riset akademis bernama Zerocash. Pendekatannya berbeda dari Monero. Monero menyembunyikan pengirim di tengah kerumunan umpan. Zcash tidak memakai umpan sama sekali. Ia memakai <b>bukti tanpa pengetahuan</b> (zero-knowledge proof): cara membuktikan sebuah pernyataan benar tanpa membuka data di baliknya.</p>
<p>Jenis bukti yang dipakai Zcash disebut <b>zk-SNARK</b>. Namanya panjang, tetapi intinya dua: buktinya kecil (succinct) sehingga cepat diperiksa, dan cukup dikirim sekali tanpa tanya-jawab (non-interactive). Dengan zk-SNARK, sebuah transaksi bisa membuktikan "pengirim memang punya koin ini, belum pernah membelanjakannya, dan jumlah masuk sama dengan jumlah keluar" tanpa menyebut siapa pengirimnya, siapa penerimanya, atau berapa jumlahnya.</p>
<h3>Cara kerjanya</h3>
<p>Zcash punya dua jenis alamat:</p>
<ul>
<li><b>Alamat transparan</b> (diawali huruf t). Bekerja seperti Bitcoin: semuanya terlihat.</li>
<li><b>Alamat terlindung (shielded)</b>. Dana di sini masuk ke kolam terlindung (shielded pool) yang isinya tersandi. Generasinya berganti: Sprout (2016), Sapling (2018), lalu Orchard (2022). Dompet modern memakai <i>unified address</i> yang membungkus beberapa jenis alamat sekaligus.</li>
</ul>
<p>Karena privasinya pilihan, Zcash menawarkan <b>viewing key</b>: kunci yang bisa Anda serahkan ke auditor, akuntan, atau otoritas pajak untuk melihat transaksi Anda tanpa memberi mereka hak membelanjakan. Konsep ini disebut <i>selective disclosure</i>: rahasia terhadap publik, terbuka bagi pihak yang Anda pilih.</p>
<p><b>Trusted setup dan Halo 2.</b> zk-SNARK generasi awal butuh parameter awal yang dibuat dalam sebuah upacara. Proses itu menghasilkan data sisa yang dijuluki "limbah beracun" (toxic waste). Kalau seseorang menyimpan limbah itu, ia bisa mencetak ZEC palsu tanpa ketahuan, walau tetap tidak bisa membongkar privasi orang lain. Zcash menggelar upacara multi-pihak pada 2016 dan 2018; hasilnya aman selama minimal satu peserta jujur memusnahkan bagiannya. Ketergantungan ini dihapus oleh <b>Halo 2</b>, sistem bukti tanpa trusted setup yang dipakai kolam Orchard sejak pembaruan NU5 pada Mei 2022.</p>
<h3>Contoh: delisting dan regulasi</h3>
<p>Koin privasi terus berbenturan dengan aturan anti pencucian uang. Standar internasional FATF mewajibkan penyedia jasa aset kripto mengetahui pengirim dan penerima transfer (travel rule), sesuatu yang sulit dilakukan untuk koin yang menyembunyikan keduanya. Beberapa tonggak:</p>
<ul>
<li><b>2018</b>: bursa Jepang men-delist koin privasi di bawah tekanan regulator keuangan setempat.</li>
<li><b>2021</b>: Korea Selatan mewajibkan bursa berhenti memperdagangkan koin privasi.</li>
<li><b>Februari 2024</b>: Binance men-delist Monero.</li>
<li><b>Juli 2027 (dijadwalkan)</b>: aturan anti pencucian uang Uni Eropa (AMLR, disahkan 2024) melarang penyedia jasa kripto menangani aset yang meningkatkan anonimitas.</li>
</ul>
<p>Zcash cenderung bertahan lebih lama di bursa dibanding Monero karena punya alamat transparan dan viewing key. Bursa bisa, misalnya, hanya menerima setoran dari alamat transparan.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Privasi pilihan punya kelemahan: selama bertahun-tahun sebagian besar ZEC disimpan di alamat transparan, sehingga kerumunan di kolam terlindung kecil. Porsinya naik dalam beberapa tahun terakhir, tetapi angkanya berubah-ubah; periksa data terbaru sebelum menyimpulkan. Memindahkan dana dari alamat transparan ke terlindung lalu keluar lagi dengan jumlah sama dalam waktu dekat juga mudah ditebak. Dari sisi pasar, delisting dan pembatasan regulasi bisa menurunkan likuiditas secara mendadak. Pelajari aturan di negara Anda sebelum memegangnya.</div>` },
      ],
      kuis: [
        { tanya: 'Apa beda utama privasi finansial dengan pencucian uang?',
          pilihan: ['Privasi menyembunyikan informasi dari publik atas uang yang sah; pencucian uang menyamarkan asal uang hasil kejahatan', 'Tidak ada bedanya karena alatnya sama', 'Privasi hanya berlaku untuk uang tunai, bukan crypto', 'Pencucian uang menjadi legal selama memakai koin privasi'],
          jelas: 'Alatnya bisa sama, tetapi yang membedakan adalah asal dan tujuan uangnya. Privasi tidak menghapus kewajiban pajak atau pemeriksaan asal dana.' },
        { tanya: 'Kenapa Monero mewajibkan privasi untuk semua transaksi, bukan menjadikannya pilihan?',
          pilihan: ['Privasi bergantung pada kerumunan: kalau semua transaksi tampak sama, pemakai privasi tidak mencolok', 'Supaya biaya transaksinya nol', 'Karena Monero tidak punya penambang', 'Supaya bursa lebih mudah melacak transaksi'],
          jelas: 'Makin besar anonymity set, makin sulit menebak siapa di balik sebuah transaksi. Kalau privasi opsional dan jarang dipakai, pemakainya justru menonjol.' },
        { tanya: 'Kenapa Monero memakai algoritma penambangan RandomX?',
          pilihan: ['Agar penambangan cocok untuk CPU biasa dan mesin khusus (ASIC) tidak jauh lebih unggul, sehingga penambang lebih tersebar', 'Agar jaringan tidak butuh penambang sama sekali', 'Agar blok dibuat oleh satu perusahaan resmi', 'Agar semua transaksi menjadi transparan'],
          jelas: 'RandomX menjalankan program acak yang paling efisien di prosesor umum. Tujuannya mencegah penambangan terkonsentrasi di segelintir pemilik mesin khusus.' },
        { tanya: 'Viewing key di Zcash memungkinkan Anda…',
          pilihan: ['Menunjukkan transaksi kepada auditor atau otoritas pajak tanpa memberi mereka hak membelanjakan dana', 'Membelanjakan dana dari dompet orang lain', 'Mengubah alamat shielded menjadi transparan secara permanen', 'Menambang ZEC lebih cepat'],
          jelas: 'Viewing key mewujudkan selective disclosure: transaksi tetap rahasia bagi publik, tetapi terbuka bagi pihak yang Anda pilih.' },
        { tanya: 'Masalah apa yang diselesaikan Halo 2 di Zcash?',
          pilihan: ['Kebutuhan trusted setup, yaitu upacara yang limbahnya, kalau disimpan, bisa dipakai mencetak ZEC palsu', 'Biaya transaksi Bitcoin yang mahal', 'Risiko delisting di bursa', 'Seed phrase yang hilang'],
          jelas: 'Halo 2 adalah sistem bukti tanpa trusted setup. Ia dipakai kolam Orchard sejak pembaruan NU5 pada Mei 2022.' },
        { tanya: 'Kenapa Zcash cenderung lebih lama bertahan di bursa dibanding Monero?',
          pilihan: ['Zcash punya alamat transparan dan viewing key, sehingga bursa bisa bekerja dengan transaksi yang terlihat', 'Zcash dijamin pemerintah AS', 'Zcash tidak memakai kriptografi sama sekali', 'Monero tidak bisa ditambang'],
          jelas: 'Bursa wajib memenuhi aturan anti pencucian uang. Opsi transparan dan viewing key membuat kewajiban itu lebih mungkin dipenuhi, sedangkan Monero menyembunyikan semuanya secara bawaan.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2 — NFT & TOKENISASI DI LUAR ERC-721
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'nft-tokenisasi', judul: 'NFT & Tokenisasi di Luar ERC-721',
      ringkas: 'NFT sebagai bukti kepemilikan digital beserta batasnya, lalu keluarga standar token lain: ERC-1155, security token ERC-3643, fraksionalisasi, dan nama ENS.',
      pelajaran: [
        { judul: 'NFT sebagai bukti kepemilikan', isi: `
<h3>Konsepnya</h3>
<p>NFT (non-fungible token) adalah token yang unik. Satu token tidak bisa ditukar begitu saja dengan token lain, seperti dua sertifikat tanah yang menunjuk bidang berbeda. Di Ethereum, standar yang paling umum adalah ERC-721. Setiap NFT punya dua penanda: alamat kontrak (koleksinya) dan nomor ID (butirnya). Blockchain mencatat siapa pemilik pasangan itu.</p>
<p>Satu hal perlu dipahami sejak awal. Yang Anda pegang adalah <b>catatan kepemilikan token</b>, bukan otomatis hak atas karya di baliknya. Gambar biasanya disimpan di luar chain, dan token hanya menyimpan tautan ke metadatanya. Hak cipta tetap milik pembuatnya kecuali ada lisensi yang memberikannya kepada pemegang. Sebagian koleksi memberi lisensi komersial, sebagian tidak sama sekali.</p>
<p>Lalu kenapa NFT berguna? Karena ia menjawab satu masalah internet. Berkas digital bisa disalin tanpa batas, sehingga siapa pemilik "yang asli" sulit dibuktikan. NFT memberi bukti publik yang bisa diperiksa siapa pun, dan bisa dipindahkan tanpa izin platform.</p>
<h3>Cara kerjanya</h3>
<p><b>Royalti.</b> Banyak kreator berharap menerima persentase setiap kali karyanya dijual ulang. Standar ERC-2981 memungkinkan kontrak NFT <i>menyatakan</i> besaran royalti. Kata kuncinya "menyatakan": standar itu tidak memaksa pembayaran. Yang membayar adalah marketplace, dan marketplace bebas mengabaikannya. Pada 2022–2023, persaingan antar-marketplace membuat royalti banyak dijadikan opsional. Ada cara memaksa royalti dengan membatasi ke mana token boleh dipindahkan, tetapi pembatasan itu mengurangi kebebasan pemilik, padahal kebebasan itu salah satu alasan orang memegang NFT.</p>
<p><b>Soulbound token (SBT).</b> Gagasan ini dipopulerkan makalah Vitalik Buterin dan dua rekannya pada Mei 2022: token yang <b>tidak bisa dipindahtangankan</b>. Kalau NFT biasa seperti barang yang bisa dijual, SBT seperti ijazah yang melekat pada pemiliknya. Kegunaannya untuk sertifikat, bukti kehadiran, reputasi, atau keanggotaan yang tidak boleh diperjualbelikan.</p>
<p><b>Tiket dan keanggotaan.</b> NFT bisa berfungsi sebagai tiket acara. Keasliannya bisa dicek di pintu masuk, dan kontraknya bisa mengatur aturan jual ulang, misalnya batas harga maksimum untuk menekan calo. NFT keanggotaan bekerja serupa: memegang token tertentu membuka akses ke komunitas, diskon, atau layanan.</p>
<h3>Contoh</h3>
<ul>
<li><b>Seni digital.</b> Pemilik bisa membuktikan kepemilikan butir tertentu, walau salinan gambarnya beredar di mana-mana.</li>
<li><b>Program loyalitas.</b> Starbucks meluncurkan Starbucks Odyssey pada akhir 2022, program loyalitas dengan koleksi NFT di jaringan Polygon, lalu menutupnya pada Maret 2024. Tokennya tetap ada di chain, tetapi kegunaannya berhenti bersama programnya.</li>
<li><b>Sertifikat kursus.</b> Lembaga bisa menerbitkan SBT sebagai bukti kelulusan yang bisa diverifikasi siapa pun tanpa menghubungi lembaganya.</li>
</ul>
<div class="batas-berlaku"><b>Batas & risiko.</b> Nilai NFT bergantung pada hal di luar chain: tautan gambar yang bisa mati, lisensi yang bisa terbatas, dan penerbit yang bisa berhenti beroperasi. Royalti tidak dijamin. Harga koleksi NFT sangat spekulatif dan likuiditasnya tipis; banyak koleksi yang ramai pada 2021–2022 kini sulit dijual. SBT juga punya masalah: kalau dompet Anda hilang, token yang tidak bisa dipindahkan ikut hilang, dan data yang melekat permanen bisa menjadi masalah privasi.</div>` },

        { judul: 'Tokenisasi yang lebih luas: ERC-1155, ERC-3643, fraksionalisasi, ENS', isi: `
<h3>Konsepnya</h3>
<p>ERC-721 cocok untuk satu barang unik. Dunia nyata lebih beragam. Ada barang yang jumlahnya ribuan tetapi identik, seperti tiket kelas ekonomi. Ada aset yang hanya boleh dipegang investor terverifikasi, seperti saham. Ada barang mahal yang ingin dimiliki bersama, seperti lukisan. Karena itu muncul standar dan pola lain.</p>
<p><b>Tokenisasi</b> berarti mencatat hak atas sesuatu dalam bentuk token di blockchain, supaya hak itu bisa dipindahkan, dibagi, dan diprogram.</p>
<h3>Cara kerjanya</h3>
<table>
<tr><th>Standar/pola</th><th>Masalah yang dijawab</th><th>Ciri utama</th></tr>
<tr><td>ERC-1155</td><td>Satu proyek butuh banyak jenis token</td><td>Satu kontrak memuat banyak jenis token, fungible maupun unik; bisa mengirim banyak jenis sekaligus</td></tr>
<tr><td>ERC-3643</td><td>Aset yang diatur hukum sekuritas</td><td>Transfer hanya bisa ke dompet yang identitasnya terverifikasi dan lolos aturan kepatuhan</td></tr>
<tr><td>Fraksionalisasi</td><td>Aset mahal sulit dibeli satu orang</td><td>Satu aset dikunci, lalu diterbitkan banyak token pecahan yang mewakili bagiannya</td></tr>
</table>
<p><b>ERC-1155</b> lahir dari kebutuhan game. Sebuah game bisa punya 10.000 ramuan identik dan satu pedang legendaris. Dengan ERC-721, setiap butir dicatat terpisah; dengan ERC-20, keunikan hilang. ERC-1155 menampung keduanya dalam satu kontrak dan memungkinkan transfer berkelompok, sehingga biaya gas lebih hemat.</p>
<p><b>ERC-3643</b> adalah standar token berizin (permissioned) untuk <b>security token</b>, yaitu token yang mewakili efek seperti saham, obligasi, atau unit dana. Sebelum transfer terjadi, kontrak memeriksa dua hal: apakah penerima punya identitas on-chain yang sudah diverifikasi, dan apakah transfer itu melanggar aturan, misalnya batas jumlah investor atau larangan bagi negara tertentu. Penerbit juga bisa membekukan token atau memulihkannya atas perintah hukum. Ini bertolak belakang dengan semangat token bebas, tetapi itulah syarat agar aset yang diatur hukum bisa hidup di chain.</p>
<p><b>Fraksionalisasi</b> mengunci satu aset, misalnya NFT mahal atau properti yang dipegang badan hukum, lalu menerbitkan token pecahan. Orang bisa membeli bagian kecil dan menjualnya kembali. Tantangannya ada pada keputusan bersama: siapa yang berhak menjual aset utuhnya, dan dengan harga berapa? Biasanya diatur lewat lelang atau voting pemegang pecahan.</p>
<h3>Contoh</h3>
<p><b>ENS</b> (Ethereum Name Service) adalah contoh NFT yang fungsional, bukan koleksi. Nama seperti "budi.eth" adalah NFT ERC-721. Sejak 2023, nama yang "dibungkus" lewat fitur Name Wrapper menjadi token ERC-1155 agar bisa memuat aturan tambahan, misalnya subnama yang tidak bisa dicabut pemilik nama induk. Nilainya bukan dari gambar, tetapi dari fungsi: nama itu menunjuk ke alamat dompet Anda. Kursus ENS di kategori ini membahasnya lebih dalam.</p>
<p>Contoh lain: item game dalam kontrak ERC-1155, dana investasi yang unit kepemilikannya dicatat sebagai token berizin, dan properti yang dimiliki badan hukum khusus lalu kepemilikannya dipecah menjadi token.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Token hanya sekuat hak hukum di belakangnya. Token pecahan properti tidak otomatis memberi Anda hak atas tanah; hak Anda bergantung pada dokumen badan hukumnya. Fraksionalisasi bisa membuat token dianggap sekuritas, sehingga penerbit tanpa izin berisiko ditindak dan pemegangnya ikut terdampak. Token berizin seperti ERC-3643 bisa dibekukan penerbit, jadi Anda bergantung pada kejujurannya. Selalu periksa siapa penerbitnya, di yurisdiksi mana, dan apa yang terjadi kalau penerbit bangkrut.</div>` },
      ],
      kuis: [
        { tanya: 'Anda membeli NFT sebuah gambar. Apa yang pasti Anda miliki?',
          pilihan: ['Catatan kepemilikan token di blockchain; hak cipta gambarnya bergantung pada lisensi dari pembuat', 'Hak cipta penuh atas gambar itu', 'Berkas gambar yang tersimpan utuh di dalam blok', 'Hak atas semua pendapatan penjualan koleksi'],
          jelas: 'Token mencatat siapa pemiliknya, sedangkan gambarnya biasanya disimpan di luar chain. Hak cipta hanya berpindah kalau lisensinya menyatakan demikian.' },
        { tanya: 'Standar royalti ERC-2981 bekerja dengan cara…',
          pilihan: ['Kontrak menyatakan besaran royalti, tetapi pembayarannya bergantung pada kemauan marketplace', 'Memaksa semua pembeli membayar royalti otomatis tanpa pengecualian', 'Mengirim royalti ke pemerintah', 'Menghapus NFT kalau royalti tidak dibayar'],
          jelas: 'ERC-2981 hanya memberi informasi besaran royalti. Karena marketplace bebas mengabaikannya, banyak royalti menjadi opsional sejak 2022–2023.' },
        { tanya: 'Ciri utama soulbound token (SBT) adalah…',
          pilihan: ['Tidak bisa dipindahtangankan, sehingga cocok untuk ijazah, sertifikat, atau reputasi', 'Harganya selalu naik', 'Bisa dipecah menjadi jutaan bagian', 'Hanya bisa dibeli di bursa terpusat'],
          jelas: 'SBT melekat pada satu dompet seperti ijazah melekat pada pemiliknya. Karena tidak bisa dijual, ia cocok sebagai bukti kredensial.' },
        { tanya: 'Kenapa game sering memakai ERC-1155?',
          pilihan: ['Satu kontrak bisa memuat banyak item identik sekaligus item unik, dan transfer berkelompok menghemat gas', 'Karena ERC-1155 tidak butuh blockchain', 'Karena token ERC-1155 tidak bisa diperdagangkan', 'Karena ERC-1155 otomatis membayar royalti'],
          jelas: 'Game butuh item fungible (ramuan, koin) dan unik (senjata langka) dalam satu sistem. ERC-1155 menampung keduanya dengan efisien.' },
        { tanya: 'Apa yang dilakukan kontrak ERC-3643 sebelum sebuah transfer terjadi?',
          pilihan: ['Memeriksa apakah penerima punya identitas terverifikasi dan transfer itu lolos aturan kepatuhan', 'Memeriksa harga token di bursa', 'Meminta persetujuan semua pemegang token', 'Tidak memeriksa apa pun'],
          jelas: 'ERC-3643 dirancang untuk security token yang diatur hukum. Transfer ke dompet yang tidak terverifikasi atau melanggar aturan otomatis ditolak.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3 — ETHEREUM NAME SERVICE (ENS)
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'ens', judul: 'Ethereum Name Service (ENS)',
      ringkas: 'Cara nama .eth menggantikan alamat panjang, bagaimana registrasi, resolver, dan reverse record bekerja, serta jebakan nama mirip dan nama kedaluwarsa.',
      pelajaran: [
        { judul: 'Nama .eth: alamat yang bisa dibaca manusia', isi: `
<h3>Konsepnya</h3>
<p>Alamat Ethereum berupa 42 karakter seperti 0x71C7656E…976F. Sulit diingat, mudah salah ketik, dan satu karakter keliru bisa berarti dana terkirim ke tempat yang salah. Ethereum Name Service (ENS), diluncurkan 2017, mengatasinya dengan cara yang mirip DNS di internet. DNS mengubah "google.com" menjadi alamat IP server. ENS mengubah "budi.eth" menjadi alamat dompet.</p>
<p>Bedanya dengan DNS: kepemilikan nama ENS dicatat di blockchain sebagai NFT. Tidak ada perusahaan yang bisa mengambil nama Anda selama Anda terus memperpanjangnya. Tetapi karena kendalinya murni di tangan Anda, kesalahan juga menjadi tanggungan Anda sendiri.</p>
<h3>Cara kerjanya</h3>
<p>ENS terdiri dari beberapa bagian yang sering tertukar:</p>
<ol>
<li><b>Registry</b>: daftar utama yang mencatat setiap nama, siapa pemiliknya, dan resolver mana yang dipakai.</li>
<li><b>Resolver</b>: kontrak yang menjawab pertanyaan "nama ini menunjuk ke mana?". Isinya bisa alamat Ethereum, alamat di chain lain (misalnya Bitcoin atau Solana), alamat situs di IPFS, serta catatan teks seperti avatar, email, atau akun media sosial.</li>
<li><b>Reverse record</b> atau <i>primary name</i>: arah sebaliknya, dari alamat ke nama. Inilah yang membuat aplikasi menampilkan "budi.eth" alih-alih 0x71C7…976F. Reverse record harus diatur terpisah. Memiliki nama tidak otomatis membuatnya tampil.</li>
</ol>
<p><b>Registrasi</b> nama .eth dilakukan dua langkah. Pertama, Anda mengirim "komitmen" tersandi. Setelah menunggu sekitar satu menit, Anda mendaftar sungguhan. Jeda ini mencegah orang yang melihat transaksi Anda di mempool menyerobot nama itu lebih dulu. Biaya sewa ditetapkan dalam dolar tetapi dibayar dengan ETH. Per 2025, tarifnya $5 per tahun untuk nama lima huruf atau lebih, $160 untuk empat huruf, dan $640 untuk tiga huruf, ditambah biaya gas.</p>
<p><b>Perpanjangan</b> bisa dibayar siapa pun untuk nama siapa pun, tetapi pembayaran itu tidak mengubah pemiliknya. Setelah masa sewa habis, pemilik punya masa tenggang 90 hari untuk memperpanjang. Setelah itu nama dilepas lewat lelang turun harga selama 21 hari yang dimulai dari harga sangat tinggi, lalu bisa didaftarkan siapa saja dengan harga normal.</p>
<h3>Contoh</h3>
<p>Budi mendaftarkan "budi.eth" untuk tiga tahun. Ia mengatur resolver agar menunjuk ke alamat dompetnya, lalu mengatur reverse record. Temannya cukup mengetik "budi.eth" di dompet untuk mengirim USDC. Budi juga menambahkan catatan teks berisi akun media sosial dan avatarnya, sehingga profilnya tampil di aplikasi yang mendukung ENS. Ia bisa membuat subnama seperti "tabungan.budi.eth" untuk dompet lain.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> <b>Nama mirip.</b> Penipu mendaftarkan nama yang sekilas sama, misalnya memakai huruf dari alfabet lain yang bentuknya identik, atau menambah satu huruf. Untuk transfer besar, cocokkan juga alamat 0x-nya. <b>Kedaluwarsa.</b> Kalau Anda lupa memperpanjang, orang lain bisa mendaftarkan nama itu setelah masa tenggang, lalu menerima semua dana yang dikirim ke nama tersebut. <b>Catatan usang.</b> Kalau Anda pindah dompet tetapi resolver masih menunjuk ke dompet lama yang kuncinya sudah bocor, dana masuk ke tempat yang salah. <b>Privasi.</b> Nama ENS mengikat identitas Anda ke semua aktivitas alamat itu di chain publik. <b>Dukungan aplikasi.</b> Tidak semua dompet dan chain membaca ENS dengan cara sama; uji dulu dengan jumlah kecil.</div>` },
      ],
      kuis: [
        { tanya: 'Apa fungsi resolver dalam ENS?',
          pilihan: ['Menjawab ke mana sebuah nama menunjuk: alamat dompet, alamat di chain lain, situs, atau catatan teks', 'Menambang ETH baru', 'Menyimpan kunci privat pemilik nama', 'Menentukan harga ETH'],
          jelas: 'Registry mencatat pemilik dan resolver sebuah nama. Resolver-lah yang menyimpan jawaban sebenarnya, misalnya alamat dompet tujuan.' },
        { tanya: 'Anda sudah memiliki "budi.eth", tetapi aplikasi masih menampilkan alamat 0x Anda. Kenapa?',
          pilihan: ['Reverse record (primary name) belum diatur; arah alamat-ke-nama harus diatur terpisah', 'Nama ENS hanya berlaku di jaringan Bitcoin', 'Nama Anda palsu', 'Aplikasi itu wajib membayar biaya ke ENS dulu'],
          jelas: 'Nama-ke-alamat dan alamat-ke-nama adalah dua catatan berbeda. Aplikasi menampilkan nama hanya kalau reverse record sudah diatur.' },
        { tanya: 'Kenapa registrasi nama .eth memakai dua langkah dengan jeda sekitar satu menit?',
          pilihan: ['Supaya orang yang melihat transaksi Anda di mempool tidak bisa menyerobot nama itu lebih dulu', 'Supaya harga ETH stabil selama pendaftaran', 'Supaya petugas ENS sempat memeriksa KTP Anda', 'Karena Ethereum hanya membuat satu blok per menit'],
          jelas: 'Langkah pertama hanya mengirim komitmen tersandi, sehingga nama yang Anda incar belum terlihat. Setelah jeda, barulah nama didaftarkan terbuka.' },
        { tanya: 'Apa risiko terbesar kalau nama ENS Anda kedaluwarsa dan tidak diperpanjang?',
          pilihan: ['Setelah masa tenggang 90 hari habis, orang lain bisa mendaftarkannya dan menerima dana yang dikirim ke nama itu', 'Dompet Anda otomatis dikosongkan', 'Semua NFT Anda terhapus', 'Tidak ada risiko karena nama ENS berlaku permanen'],
          jelas: 'Nama .eth disewa, bukan dibeli selamanya. Pemilik baru mengatur resolvernya sendiri, jadi dana yang dikirim teman-teman Anda ke nama itu jatuh ke tangannya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4 — REAL-WORLD ASSETS (RWA)
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'rwa', judul: 'Real-World Assets (RWA)',
      ringkas: 'Aset dunia nyata yang haknya dipindahkan ke blockchain, dari obligasi pemerintah AS sampai emas dan saham, beserta struktur hukum dan risiko yang menopangnya.',
      pelajaran: [
        { judul: 'Apa saja yang ditokenisasi', isi: `
<h3>Konsepnya</h3>
<p>Real-world assets (RWA) adalah aset di luar blockchain, seperti obligasi, pinjaman, emas, atau saham, yang haknya diwakili token di blockchain. Tokennya bukan asetnya sendiri. Token adalah <b>klaim</b> atas aset yang dipegang pihak lain di dunia nyata.</p>
<p>Kenapa repot-repot? Ada tiga daya tarik:</p>
<ul>
<li><b>Penyelesaian cepat.</b> Transfer token selesai dalam detik atau menit, 24 jam sehari. Pasar tradisional sering butuh satu sampai dua hari kerja.</li>
<li><b>Bisa diprogram.</b> Token bisa dipakai sebagai jaminan pinjaman, dimasukkan ke protokol DeFi, atau diatur agar membagikan hasil otomatis.</li>
<li><b>Hasil dari dunia nyata.</b> Pemegang stablecoin, yang umumnya tidak mendapat bunga, bisa beralih ke token obligasi yang berbunga tanpa keluar dari chain.</li>
</ul>
<h3>Cara kerjanya: kategori utama</h3>
<p><b>Obligasi pemerintah AS (Treasury).</b> Kategori paling mapan. Contohnya:</p>
<ul>
<li><b>BlackRock BUIDL</b>, dana likuiditas yang diluncurkan Maret 2024 di Ethereum lewat Securitize, lalu diperluas ke beberapa chain lain. Nilai tokennya dijaga $1, dan bunga dibagikan setiap bulan sebagai token baru. Dana ini hanya untuk investor institusi yang memenuhi syarat, dengan investasi minimum besar. Nilainya melewati $1 miliar pada Maret 2025.</li>
<li><b>Ondo Finance</b>, dengan produk seperti OUSG (eksposur obligasi AS jangka pendek untuk investor yang memenuhi syarat) dan USDY (surat utang berjaminan obligasi dan deposito bank untuk investor di luar AS).</li>
<li><b>Franklin Templeton</b>, yang sejak 2021 mencatat kepemilikan dana pasar uang pemerintah AS miliknya (FOBXX) di blockchain publik. Unitnya diwakili token BENJI.</li>
</ul>
<p><b>Kredit swasta.</b> Pinjaman ke perusahaan atau individu yang dicatat di chain, misalnya lewat Figure, Maple, atau Centrifuge. Imbal hasilnya lebih tinggi dari obligasi pemerintah karena risiko gagal bayarnya juga lebih tinggi.</p>
<p><b>Emas.</b> PAXG (Paxos Gold, 2019) dan XAUT (Tether Gold, 2020): satu token mewakili satu troy ons (sekitar 31,1 gram) emas batangan di brankas. Paxos diawasi regulator keuangan negara bagian New York; emas XAUT disimpan di Swiss.</p>
<p><b>Saham tertokenisasi.</b> Token yang mengikuti harga saham seperti Apple atau Tesla. Sejak 2025 beberapa penerbit, misalnya xStocks dari Backed dan Robinhood untuk pengguna di Uni Eropa, menawarkannya kepada pengguna di luar AS. Modelnya beragam. Ada yang benar-benar membeli saham 1:1 lalu mencetak token, ada yang berupa surat utang atau derivatif yang sekadar mengikuti harga.</p>
<h3>Contoh</h3>
<p>Bayangkan protokol DeFi yang memegang ratusan juta dolar dalam stablecoin. Dana itu tidak menghasilkan apa-apa kalau diam. Dengan memindahkan sebagian ke token obligasi pemerintah AS, protokol mendapat bunga dunia nyata sambil tetap bisa menukarnya kembali ke stablecoin. Menurut dasbor RWA.xyz, nilai obligasi pemerintah AS tertokenisasi naik dari sekitar $100 juta pada awal 2023 menjadi beberapa miliar dolar pada 2025. Periksa angka terbarunya, karena berubah cepat.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Banyak produk RWA hanya untuk investor terverifikasi dan menutup akses bagi warga negara tertentu, termasuk AS. Saham tertokenisasi sering <b>tidak</b> memberi hak suara atau hak pemegang saham penuh; pada Juli 2025 OpenAI menegaskan bahwa token "saham OpenAI" yang dibagikan Robinhood bukan ekuitas OpenAI. Label "RWA" juga dipakai token yang fundamentalnya lemah: token OM milik Mantra, yang memasarkan diri sebagai chain RWA, jatuh lebih dari 90% dalam sehari pada April 2025. Pelajaran berikutnya membahas struktur yang menentukan apakah klaim Anda benar-benar kuat.</div>` },

        { judul: 'Cara kerja dan titik rawannya', isi: `
<h3>Konsepnya</h3>
<p>Token RWA menjembatani dua dunia dengan aturan berbeda. Blockchain tahu siapa memegang token. Pengadilan dan bank tahu siapa pemilik aset menurut hukum. Kekuatan token RWA bergantung pada seberapa rapat kedua catatan itu disambungkan. Kalau sambungannya longgar, Anda memegang token yang berpindah dengan mulus tetapi haknya lemah saat ada masalah.</p>
<h3>Cara kerjanya</h3>
<p>Strukturnya umumnya berlapis:</p>
<ol>
<li><b>Badan hukum khusus (SPV, special purpose vehicle)</b> atau dana investasi dibentuk untuk memegang aset. Tujuannya memisahkan aset dari neraca penerbit. Kalau penerbit bangkrut, aset itu tidak ikut dibagikan ke kreditur penerbit. Sifat ini disebut <i>bankruptcy remote</i>.</li>
<li><b>Kustodian</b>, biasanya bank atau lembaga kustodi berizin, menyimpan aset aslinya: obligasi di rekening efek, emas di brankas.</li>
<li><b>Agen transfer</b> mencatat daftar pemilik resmi. Pada sebagian produk, blockchain dijadikan catatan resmi itu. Pada produk lain, blockchain hanya cermin dari catatan di luar chain.</li>
<li><b>Whitelist KYC.</b> Token hanya bisa dipegang dan dipindahkan ke dompet yang pemiliknya sudah lolos verifikasi identitas. Penerbit biasanya bisa membekukan token atau memindahkannya paksa atas perintah pengadilan.</li>
<li><b>Oracle NAV.</b> NAV (net asset value) adalah nilai bersih aset per unit. Penerbit atau penyedia oracle memublikasikannya ke chain supaya protokol DeFi tahu berapa nilai token itu. Bunga dibagikan dengan dua cara: harga token naik perlahan, atau harga tetap $1 dan pemegang menerima token tambahan.</li>
<li><b>Penebusan.</b> Pemegang menukar token kembali ke dolar lewat penerbit, biasanya pada jam kerja dan dengan jumlah minimum.</li>
</ol>
<h3>Contoh</h3>
<p>Sebuah dana obligasi tertokenisasi menerima $10 juta dari investor institusi. Investor lolos KYC, dompetnya dimasukkan whitelist, lalu ia menerima 10 juta token. Uangnya dibelikan obligasi pemerintah AS jangka pendek dan disimpan kustodian. NAV diperbarui di chain secara berkala. Karena penebusan lewat penerbit butuh waktu, penyedia likuiditas bisa menawarkan jalan pintas. Pada April 2024, misalnya, Circle menyediakan kontrak yang memungkinkan pemegang BUIDL menukar tokennya ke USDC kapan saja.</p>
<p>Sebelum memegang token RWA, ajukan pertanyaan berikut:</p>
<table>
<tr><th>Titik</th><th>Pertanyaan</th></tr>
<tr><td>Hukum</td><td>Hak apa yang diberikan token: kepemilikan langsung, unit dana, atau sekadar klaim utang ke penerbit?</td></tr>
<tr><td>Kebangkrutan</td><td>Apakah aset dipisahkan dari penerbit, dan siapa yang mengurus penebusan kalau penerbit bangkrut?</td></tr>
<tr><td>Kustodi</td><td>Siapa kustodiannya, dan adakah audit atau laporan cadangan berkala?</td></tr>
<tr><td>Oracle</td><td>Seberapa sering NAV diperbarui, dan siapa yang memasoknya?</td></tr>
<tr><td>Likuiditas</td><td>Bisakah token dijual cepat tanpa diskon besar di pasar sekunder?</td></tr>
</table>
<div class="batas-berlaku"><b>Batas & risiko.</b> Blockchain tidak bisa memaksa dunia nyata. Kalau kustodian lalai, penerbit curang, atau pengadilan di negara lain memutuskan berbeda, token tetap berpindah lancar di chain sementara aset di baliknya bermasalah. Oracle NAV yang terlambat bisa membuat protokol DeFi salah menilai jaminan. Pinjaman kredit swasta bisa gagal bayar; beberapa protokol kredit on-chain generasi awal menanggung kerugian karena peminjam macet. Kekuasaan penerbit untuk membekukan token juga berarti Anda bergantung pada kepatuhan dan itikad baiknya. Makin rumit strukturnya, makin penting membaca dokumen penawaran, bukan hanya situs web.</div>` },
      ],
      kuis: [
        { tanya: 'Token RWA paling tepat dipahami sebagai…',
          pilihan: ['Klaim atas aset dunia nyata yang dipegang pihak lain; kekuatannya bergantung pada struktur hukumnya', 'Aset dunia nyata itu sendiri yang tersimpan di dalam blockchain', 'Token tanpa hubungan dengan aset apa pun', 'Mata uang resmi bank sentral'],
          jelas: 'Obligasi atau emasnya tetap berada di kustodian. Token hanya mewakili hak atasnya, dan hak itu sekuat dokumen hukum di belakangnya.' },
        { tanya: 'Apa tujuan memakai SPV (badan hukum khusus) dalam struktur RWA?',
          pilihan: ['Memisahkan aset dari neraca penerbit supaya tidak ikut dibagi ke kreditur kalau penerbit bangkrut', 'Menghindari semua pajak', 'Mempercepat waktu blok', 'Menggantikan fungsi kustodian'],
          jelas: 'Sifat bankruptcy remote melindungi pemegang token dari masalah keuangan penerbit. Tanpanya, aset bisa tercampur dengan harta penerbit saat pailit.' },
        { tanya: 'Kenapa kebanyakan token obligasi tertokenisasi memakai whitelist KYC?',
          pilihan: ['Produk itu diatur hukum sekuritas, sehingga hanya investor terverifikasi yang boleh memegang dan menerimanya', 'Supaya harganya naik', 'Karena blockchain tidak bisa mencatat transfer tanpa KYC', 'Supaya siapa pun bisa membelinya tanpa batas'],
          jelas: 'Penerbit wajib tahu siapa investornya. Whitelist membuat token hanya bisa berpindah ke dompet yang sudah lolos verifikasi.' },
        { tanya: 'PAXG dan XAUT sama-sama mewakili…',
          pilihan: ['Satu troy ons emas batangan yang disimpan di brankas untuk setiap token', 'Satu gram perak', 'Satu lembar saham perusahaan tambang emas', 'Satu dolar AS'],
          jelas: 'Satu troy ons sekitar 31,1 gram. PAXG diterbitkan Paxos (2019), XAUT diterbitkan Tether (2020).' },
        { tanya: 'Apa fungsi oracle NAV pada token dana obligasi?',
          pilihan: ['Memublikasikan nilai bersih aset per unit ke chain agar protokol lain bisa menilai token itu dengan benar', 'Mencetak token baru tanpa batas', 'Memverifikasi identitas investor', 'Menentukan siapa pemenang lelang blok'],
          jelas: 'Protokol DeFi yang menerima token RWA sebagai jaminan butuh nilai terkini. Kalau NAV terlambat atau salah, penilaian jaminan ikut salah.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 5 — FAN TOKEN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'fan-token', judul: 'Fan Token',
      ringkas: 'Token klub olahraga seperti di ekosistem Chiliz/Socios: apa yang sebenarnya Anda dapat, dan kenapa harganya sangat bergantung pada sensasi.',
      pelajaran: [
        { judul: 'Fan token: hak kecil, harga yang bergejolak', isi: `
<h3>Konsepnya</h3>
<p>Fan token adalah token yang diterbitkan bersama klub olahraga, tim balap, atau tim e-sports, untuk memberi penggemar sedikit keterlibatan dengan klubnya. Pemain terbesarnya adalah Chiliz, perusahaan di balik token CHZ dan aplikasi Socios.com. Sejak 2019–2020, Chiliz bermitra dengan klub-klub besar Eropa seperti Juventus, Paris Saint-Germain, dan FC Barcelona. Binance juga pernah menerbitkan fan token untuk beberapa klub lewat platformnya.</p>
<p>Poin terpenting: fan token <b>bukan saham klub</b>. Pemegangnya tidak memiliki bagian klub, tidak menerima dividen, dan tidak ikut menentukan keputusan besar seperti membeli pemain atau mengganti pelatih.</p>
<h3>Cara kerjanya</h3>
<p>Di ekosistem Socios, fan token awalnya dijual dalam Fan Token Offering (FTO) dan dibeli memakai CHZ. Setelah itu token diperdagangkan bebas di bursa. Pemegangnya mendapat:</p>
<ul>
<li><b>Hak voting kecil.</b> Klub mengadakan jajak pendapat soal hal ringan, misalnya lagu yang diputar setelah gol, desain bus tim, pesan di ban kapten, atau pemain terbaik bulan ini. Bobot suara biasanya sebanding dengan jumlah token, dan hasilnya hanya berlaku untuk hal yang memang diserahkan klub.</li>
<li><b>Hadiah dan akses.</b> Kesempatan memenangkan tiket, merchandise bertanda tangan, bertemu pemain, atau konten eksklusif. Sering berbentuk undian atau permainan di aplikasi.</li>
<li><b>Gengsi komunitas.</b> Peringkat penggemar dan lencana digital.</li>
</ul>
<p>Klub mendapat pemasukan dari penjualan token awal dan kontrak kemitraan, ditambah saluran baru untuk berinteraksi dengan penggemar global yang jarang bisa datang ke stadion.</p>
<h3>Contoh</h3>
<p>Seorang penggemar di Jakarta memegang fan token klub Eropa favoritnya. Ia ikut memilih lagu gol untuk satu musim dan sesekali ikut undian jersey. Pengalamannya menyenangkan. Tetapi pada saat yang sama, harga tokennya bisa melonjak menjelang final atau kabar transfer pemain bintang, lalu anjlok setelah momen itu lewat. Pola ini terlihat pada banyak fan token di sekitar Piala Dunia 2022: sensasi turnamen mendorong harga naik, lalu harga surut ketika sorotan berlalu.</p>
<p>Kenapa begitu spekulatif? Ada empat sebab:</p>
<ol>
<li><b>Nilai fundamentalnya tipis.</b> Hak yang diberikan kecil dan tidak menghasilkan arus kas.</li>
<li><b>Permintaan datang dari emosi.</b> Orang membeli karena momen pertandingan, bukan karena butuh memakai token.</li>
<li><b>Pasokan terkonsentrasi.</b> Klub dan penerbit sering memegang porsi token yang besar dan bisa menjualnya.</li>
<li><b>Likuiditas tipis.</b> Beberapa pembeli atau penjual besar cukup untuk menggerakkan harga.</li>
</ol>
<p>Hasilnya, banyak fan token kini diperdagangkan jauh di bawah puncaknya pada 2021.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Anggap fan token sebagai barang koleksi atau tiket komunitas, bukan investasi. Regulator pernah menegur cara pemasarannya: pada 2021 badan pengawas iklan Inggris (ASA) menilai iklan fan token Arsenal menyesatkan karena meremehkan risikonya. Kemitraan klub bisa berakhir, dan manfaat di aplikasi bisa berubah sepihak. Kalau Anda membelinya, belilah karena menginginkan manfaatnya sebagai penggemar, dengan jumlah yang siap hilang.</div>` },
      ],
      kuis: [
        { tanya: 'Apa yang TIDAK Anda dapatkan dengan memegang fan token klub sepak bola?',
          pilihan: ['Bagian kepemilikan klub dan dividen dari pendapatannya', 'Hak ikut jajak pendapat soal hal ringan', 'Kesempatan memenangkan hadiah dan akses eksklusif', 'Lencana atau peringkat di komunitas penggemar'],
          jelas: 'Fan token bukan saham. Haknya terbatas pada voting ringan dan hadiah, tanpa klaim atas pendapatan atau keputusan besar klub.' },
        { tanya: 'Di ekosistem Socios, fan token biasanya dibeli pertama kali memakai…',
          pilihan: ['CHZ, token milik Chiliz', 'Saham klub', 'Rupiah Digital', 'Obligasi pemerintah'],
          jelas: 'Fan Token Offering di Socios memakai CHZ. Setelah itu fan token bisa diperdagangkan bebas di bursa.' },
        { tanya: 'Kenapa harga fan token cenderung melonjak menjelang pertandingan besar lalu turun sesudahnya?',
          pilihan: ['Permintaan digerakkan sensasi dan emosi, bukan arus kas atau kebutuhan memakai token', 'Karena klub wajib membeli kembali token setiap final', 'Karena jumlah token berlipat ganda setelah pertandingan', 'Karena harganya dikunci federasi sepak bola'],
          jelas: 'Tanpa arus kas, harga hanya ditopang minat sesaat. Begitu momen berlalu, pembeli menghilang dan harga surut.' },
        { tanya: 'Pendekatan paling masuk akal terhadap fan token adalah…',
          pilihan: ['Menganggapnya barang koleksi atau tiket komunitas, dengan jumlah yang siap hilang', 'Menjadikannya tabungan pensiun', 'Membelinya karena pasti naik saat klub menang liga', 'Memakainya sebagai jaminan utang besar'],
          jelas: 'Manfaat fan token ada pada pengalaman sebagai penggemar. Sebagai investasi, nilainya sangat spekulatif dan banyak yang jauh di bawah puncak 2021.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 6 — DePIN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'depin', judul: 'DePIN: Infrastruktur Fisik Terdesentralisasi',
      ringkas: 'Jaringan fisik yang dibangun orang banyak dengan imbalan token, dari hotspot nirkabel sampai GPU, dan ujian terberatnya: adakah pelanggan yang benar-benar membayar.',
      pelajaran: [
        { judul: 'Konsep DePIN dan roda insentif token', isi: `
<h3>Konsepnya</h3>
<p>DePIN (Decentralized Physical Infrastructure Networks) adalah jaringan infrastruktur fisik, seperti pemancar sinyal, hard disk, kartu grafis, atau kamera, yang dibangun banyak orang secara swadaya dan dikoordinasikan dengan token. Istilah ini dipopulerkan firma riset Messari pada akhir 2022.</p>
<p>Masalah yang coba dipecahkan adalah modal awal. Membangun jaringan seluler atau pusat data butuh investasi sangat besar sebelum satu pelanggan pun datang. Perusahaan biasa harus mengumpulkan modal dulu, membangun, lalu berharap pelanggan datang. DePIN membalik urutannya. Ribuan individu membeli dan memasang perangkatnya sendiri, dan jaringan membayar mereka dengan token sejak awal, bahkan sebelum ada permintaan.</p>
<h3>Cara kerjanya</h3>
<p>Setiap DePIN punya dua sisi:</p>
<ul>
<li><b>Sisi penawaran (supply)</b>: orang yang menyediakan sumber daya, misalnya memasang hotspot atau menyewakan GPU. Mereka dibayar emisi token, ditambah bagian dari pembayaran pelanggan.</li>
<li><b>Sisi permintaan (demand)</b>: pelanggan yang memakai layanan, misalnya perusahaan yang butuh penyimpanan atau komputasi. Pembayaran mereka sering, dengan satu atau lain cara, berujung pada pembelian atau pembakaran token.</li>
</ul>
<p>Kedua sisi dihubungkan oleh <b>flywheel</b> (roda gila) insentif:</p>
<ol>
<li>Token baru dibagikan kepada penyedia awal.</li>
<li>Penyedia bertambah, jaringan meluas, dan kualitasnya naik.</li>
<li>Jaringan yang luas menarik pelanggan yang membayar.</li>
<li>Pembayaran pelanggan menciptakan permintaan token.</li>
<li>Harga token yang sehat menarik lebih banyak penyedia. Roda kembali ke langkah 2.</li>
</ol>
<p>Beberapa jaringan memakai model <b>burn-and-mint</b>. Pelanggan membakar token untuk mendapat kredit pemakaian dengan harga dolar tetap, sementara penyedia menerima token baru. Kalau pemakaian besar, token yang dibakar bisa melebihi yang dicetak, sehingga suplai menyusut. Kalau pemakaian kecil, suplai terus bertambah.</p>
<h3>Contoh</h3>
<p>Bayangkan jaringan Wi-Fi komunitas di sebuah kota. Pada tahun pertama hampir tidak ada pelanggan, jadi pendapatan penyedia hampir seluruhnya berasal dari emisi token. Itu subsidi. Kalau jaringan berhasil menarik operator seluler yang mau membayar untuk mengalihkan lalu lintas datanya, pendapatan nyata mulai menggantikan subsidi. Kalau tidak, penyedia hanya bertahan selama harga token cukup tinggi untuk menutup biaya listrik dan perangkat.</p>
<p>Karena itu metrik terpenting DePIN adalah perbandingan <b>pendapatan dari pelanggan</b> dengan <b>nilai token yang dicetak</b> pada periode yang sama. Selama pendapatan jauh di bawah emisi, jaringan masih hidup dari subsidi. Data seperti ini bisa diperiksa di Token Terminal atau dasbor proyek.</p>
<p>DePIN juga dinilai lebih relevan di negara berkembang, tempat harga layanan internet dan komputasi lebih terasa dan infrastrukturnya belum merata.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Roda gila bisa berputar mundur. Harga token turun, penyedia berhenti karena tidak lagi untung, kualitas jaringan memburuk, pelanggan pergi, lalu harga turun lagi. Penyedia juga menanggung risiko nyata: membeli perangkat dengan uang sendiri yang belum tentu balik modal. Waspadai pula angka kapasitas yang tampak besar. Kapasitas terpasang tidak sama dengan kapasitas yang benar-benar dipakai dan dibayar pelanggan.</div>` },

        { judul: 'Contoh DePIN dan ujian permintaan nyata', isi: `
<h3>Konsepnya</h3>
<p>DePIN mencakup banyak jenis infrastruktur. Cara termudah memahaminya adalah mengajukan tiga pertanyaan untuk setiap proyek: sumber daya fisik apa yang disediakan, siapa pelanggannya, dan berapa yang mereka bayar dibanding token yang dibagikan.</p>
<h3>Cara kerjanya: empat kategori</h3>
<table>
<tr><th>Kategori</th><th>Contoh</th><th>Yang disediakan peserta</th><th>Calon pelanggan</th></tr>
<tr><td>Nirkabel</td><td>Helium</td><td>Hotspot IoT dan titik akses seluler/Wi-Fi</td><td>Perangkat IoT, operator seluler, pengguna paket seluler</td></tr>
<tr><td>Penyimpanan</td><td>Filecoin, Arweave</td><td>Ruang hard disk</td><td>Pengembang, lembaga arsip, aplikasi</td></tr>
<tr><td>Komputasi</td><td>Render, Akash</td><td>GPU dan server</td><td>Studio grafis, pengembang AI</td></tr>
<tr><td>Pemetaan</td><td>Hivemapper</td><td>Rekaman kamera dasbor mobil</td><td>Perusahaan logistik, pembuat peta</td></tr>
</table>
<p><b>Helium</b> dimulai 2019 dengan hotspot untuk jaringan IoT jarak jauh berdaya rendah (LoRaWAN), lalu berkembang ke layanan seluler lewat Helium Mobile. Pada April 2023 Helium memindahkan jaringannya ke Solana. Pelanggan membayar dengan Data Credits, yang didapat dengan membakar HNT pada harga dolar tetap.</p>
<p><b>Filecoin</b> (mainnet 2020) adalah pasar sewa penyimpanan. Penyedia harus membuktikan secara kriptografis dan berkala bahwa mereka masih menyimpan data pelanggan; kalau gagal, jaminannya dipotong. <b>Arweave</b> memakai model lain: bayar sekali untuk penyimpanan permanen, dengan dana abadi yang membiayai penyimpanan jangka panjang.</p>
<p><b>Render</b> menghubungkan pemilik GPU menganggur dengan pembuat grafis 3D dan, belakangan, beban kerja AI. <b>Akash</b> adalah pasar komputasi awan: pengguna menulis kebutuhan server, penyedia menawar harga, dan penawaran terbaik yang memenuhi syarat menang.</p>
<p><b>Hivemapper</b> membagikan token kepada pengemudi yang memasang kamera dasbor dan merekam jalan. Rekaman diolah menjadi peta, lalu datanya dijual ke perusahaan.</p>
<h3>Contoh: ujian permintaan nyata</h3>
<p>Kisah Helium adalah pelajaran penting. Pada 2021–2022 jumlah hotspot tumbuh cepat karena pemasangnya dibayar token. Tetapi pada 2022 sejumlah laporan media menunjukkan bahwa pendapatan dari pemakaian data jaringan IoT sangat kecil dibanding nilai token yang dibagikan. Jaringannya luas, pelanggannya sedikit. Helium kemudian menggeser fokus ke layanan seluler yang permintaannya lebih jelas.</p>
<p>Filecoin mengalami pola serupa dalam bentuk lain: kapasitas penyimpanan yang disediakan jauh lebih besar daripada data yang benar-benar dibayar pelanggan. Tren yang lebih baru di sektor ini adalah integrasi vertikal. Proyek tidak lagi hanya menjual sumber daya mentah, tetapi membungkusnya menjadi produk jadi yang siap dipakai perusahaan.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Pertanyaan kuncinya selalu sama: berapa pendapatan dari pelanggan dibanding nilai emisi token? Jaringan yang pertumbuhannya hanya diukur dari jumlah perangkat bisa tampak sehat padahal masih bergantung pada subsidi. DePIN juga menghadapi pesaing terpusat yang kuat dan murah seperti penyedia cloud besar dan operator seluler, aturan frekuensi dan data, serta risiko kualitas: penyedia anonim tidak selalu seandal pusat data profesional. Angka proyek berubah cepat; periksa data terbaru sebelum menyimpulkan.</div>` },
      ],
      kuis: [
        { tanya: 'Masalah utama apa yang coba dipecahkan DePIN?',
          pilihan: ['Modal awal membangun infrastruktur: banyak orang memasang perangkat sendiri dan dibayar token sebelum pelanggan datang', 'Kebutuhan akan bursa terpusat', 'Kerahasiaan transaksi', 'Waktu blok Bitcoin yang lambat'],
          jelas: 'Jaringan fisik butuh investasi besar sebelum ada pendapatan. Token dipakai untuk membagi beban modal itu ke banyak peserta.' },
        { tanya: 'Dalam DePIN, "sisi penawaran" adalah…',
          pilihan: ['Peserta yang menyediakan sumber daya seperti hotspot, hard disk, atau GPU', 'Pelanggan yang membayar layanan', 'Bursa yang memperdagangkan tokennya', 'Pemerintah yang memberi izin'],
          jelas: 'Sisi penawaran dibayar emisi token dan bagian dari pembayaran pelanggan. Sisi permintaan adalah pelanggan yang memakai layanannya.' },
        { tanya: 'Metrik apa yang paling jujur untuk menilai apakah sebuah DePIN sudah sehat?',
          pilihan: ['Pendapatan dari pelanggan dibanding nilai token yang dicetak pada periode yang sama', 'Jumlah pengikut media sosial', 'Jumlah perangkat terpasang saja', 'Harga token pada hari peluncuran'],
          jelas: 'Selama pendapatan jauh di bawah emisi, jaringan masih hidup dari subsidi. Jumlah perangkat bisa tumbuh tanpa ada pelanggan yang membayar.' },
        { tanya: 'Apa beda Filecoin dan Arweave?',
          pilihan: ['Filecoin pasar sewa penyimpanan dengan bukti berkala; Arweave bayar sekali untuk penyimpanan permanen', 'Filecoin untuk komputasi GPU, Arweave untuk jaringan seluler', 'Keduanya sama persis', 'Filecoin milik pemerintah, Arweave milik bank'],
          jelas: 'Keduanya DePIN penyimpanan. Penyedia Filecoin harus terus membuktikan data masih disimpan, sedangkan Arweave membiayai penyimpanan permanen dari pembayaran di muka.' },
        { tanya: 'Pelajaran dari Helium pada 2022 adalah…',
          pilihan: ['Jaringan bisa tumbuh luas karena insentif token, sementara pendapatan dari pelanggannya sangat kecil', 'Semua DePIN pasti menguntungkan penyedianya', 'Jaringan IoT tidak mungkin dibangun dengan hotspot', 'Token tidak berguna untuk menarik penyedia'],
          jelas: 'Token berhasil menarik penyedia, tetapi pelanggan yang membayar tidak datang secepat itu. Helium lalu menggeser fokus ke layanan seluler.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 7 — BLOCKCHAIN & AI
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'blockchain-ai', judul: 'Blockchain & AI',
      ringkas: 'Titik temu blockchain dan AI, dari pasar GPU dan asal-usul data sampai agen AI yang memegang dompet, beserta cara memisahkan kegunaan nyata dari label pemasaran.',
      pelajaran: [
        { judul: 'Di mana blockchain dan AI bersinggungan', isi: `
<h3>Konsepnya</h3>
<p>AI dan blockchain punya sifat yang berlawanan. AI modern cenderung terpusat: model besar dilatih segelintir perusahaan di pusat data raksasa, dan cara kerjanya sulit diperiksa dari luar. Blockchain dirancang terbuka: siapa pun bisa memeriksa aturannya, dan tidak ada satu pihak yang mengendalikan. Titik temunya muncul ketika AI butuh sesuatu yang dimiliki blockchain: pembayaran tanpa izin, catatan yang tidak bisa diubah, dan cara berbagi sumber daya tanpa perantara.</p>
<h3>Cara kerjanya: empat persinggungan</h3>
<p><b>1. Komputasi terdesentralisasi.</b> Melatih dan menjalankan model AI butuh GPU yang mahal dan langka. Pasar GPU berbasis token mempertemukan pemilik GPU menganggur dengan pihak yang butuh daya komputasi, seperti DePIN komputasi yang dibahas di kursus sebelumnya.</p>
<p><b>2. Data dan provenance.</b> Provenance berarti asal-usul: dari mana sebuah data atau konten berasal, dan apakah sudah diubah. Di era gambar dan video buatan AI, membuktikan bahwa sebuah foto memang diambil pada waktu tertentu menjadi penting. Blockchain bisa menyimpan sidik jari (hash) dan cap waktu konten, sehingga perubahan sesudahnya ketahuan. Blockchain juga bisa mencatat siapa menyumbang data pelatihan agar mereka bisa diberi imbalan.</p>
<p><b>3. Agen AI yang memegang dompet.</b> Agen AI adalah program yang bisa bertindak sendiri: mencari informasi, membandingkan pilihan, lalu mengeksekusi. Agen tidak bisa membuka rekening bank, tetapi bisa memegang dompet crypto dan membayar dengan stablecoin. Contohnya protokol x402 yang diperkenalkan Coinbase pada 2025. Kode HTTP "402 Payment Required" dihidupkan agar aplikasi dan agen bisa membayar layanan secara otomatis per permintaan. Di DeFi, agen bekerja dalam tiga lapis: perintah bahasa biasa dari pengguna, penalaran oleh model AI, lalu eksekusi transaksi di chain.</p>
<p><b>4. Verifikasi inferensi.</b> Inferensi adalah saat model AI menghasilkan jawaban. Kalau Anda membayar sebuah layanan untuk menjalankan model tertentu, bagaimana Anda tahu mereka tidak diam-diam memakai model yang lebih murah? Ada beberapa pendekatan. Bukti tanpa pengetahuan untuk komputasi model (zkML). Perangkat keras terpercaya (TEE) yang bisa membuktikan kode tertentu benar-benar dijalankan. Atau sistem yang menganggap hasil benar kecuali dibantah dalam masa sanggah.</p>
<p>Ada satu persinggungan lagi yang makin penting: membedakan manusia dari bot. Ketika bot AI makin pandai meniru manusia, <b>proof-of-personhood</b>, yaitu bukti bahwa sebuah akun dijalankan manusia unik, menjadi kebutuhan nyata untuk airdrop, voting, dan media sosial.</p>
<h3>Contoh</h3>
<p>Seorang pengguna meminta agen AI: "Pindahkan stablecoin saya ke tempat berbunga tertinggi yang risikonya rendah." Agen membaca data beberapa protokol, memilih satu, lalu menandatangani transaksi dengan dompet yang diberi batas belanja harian. Blockchain mencatat setiap langkah, sehingga pengguna bisa memeriksa ulang apa yang dilakukan agennya.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Memberi agen AI akses ke dompet berarti memberi program kemampuan memindahkan uang Anda. Agen bisa salah paham, dimanipulasi lewat instruksi tersembunyi di data yang dibacanya (prompt injection), atau dieksploitasi. Batasi dananya, pakai izin terbatas, dan jangan serahkan kunci dompet utama. Verifikasi inferensi masih mahal dan umumnya baru praktis untuk model kecil. Hash di blockchain membuktikan konten tidak berubah sejak dicatat, tetapi tidak membuktikan konten itu benar sejak awal.</div>` },

        { judul: 'Contoh proyek dan skeptisisme yang sehat', isi: `
<h3>Konsepnya</h3>
<p>Setiap kali AI sedang ramai, banyak proyek crypto menempelkan kata "AI" di namanya. Sebagian membangun sesuatu yang nyata; sebagian hanya menumpang naratif. Pelajaran ini memakai beberapa proyek sebagai contoh cara kerja, lalu memberi Anda daftar pertanyaan untuk memisahkan keduanya.</p>
<h3>Cara kerjanya: tiga contoh</h3>
<p><b>Bittensor (TAO).</b> Jaringan yang memberi token kepada peserta yang menyumbang kerja AI berguna. Jaringannya dibagi menjadi banyak <b>subnet</b>. Setiap subnet adalah pasar untuk satu jenis pekerjaan: menjawab teks, membuat prediksi, menyediakan komputasi, dan sebagainya. Di setiap subnet, <b>penambang</b> mengerjakan tugas dan <b>validator</b> menilai kualitasnya, lalu emisi token dibagikan sesuai penilaian itu. Sejak 2025 setiap subnet punya token sendiri (alpha), dan pasar ikut menentukan subnet mana yang menerima emisi lebih besar. Suplai TAO dibatasi 21 juta dengan jadwal halving, meniru Bitcoin.</p>
<p><b>Akash dan Render.</b> Keduanya pasar komputasi. Akash menyediakan server dan GPU umum lewat sistem lelang. Render berawal dari rendering grafis 3D lalu meluas ke beban kerja AI. Keduanya cocok untuk tugas yang bisa dipecah dan tidak butuh koneksi super cepat antar-mesin, seperti menjalankan model yang sudah jadi atau pelatihan skala kecil.</p>
<p><b>Worldcoin (kini World).</b> Proyek yang didirikan antara lain oleh Sam Altman dan diluncurkan Juli 2023. Pengguna memindai iris mata di alat bernama Orb untuk mendapat World ID, bukti bahwa ia manusia unik, tanpa harus membuka namanya. Tujuannya membedakan manusia dari bot. Proyek ini juga menuai kritik soal pengumpulan data biometrik. Beberapa negara menangguhkan operasinya, termasuk Indonesia: pada Mei 2025 Kementerian Komunikasi dan Digital membekukan sementara izin layanannya.</p>
<h3>Contoh: pertanyaan skeptis</h3>
<ol>
<li><b>Kenapa perlu blockchain?</b> Kalau layanan AI-nya berjalan sama baiknya di server biasa tanpa token, tokennya mungkin hanya alat penggalangan dana.</li>
<li><b>Kenapa perlu token itu?</b> Apakah pelanggan wajib memakai token untuk membayar, atau token hanya dibagikan sebagai hadiah?</li>
<li><b>Siapa pelanggannya dan berapa bayarnya?</b> Pendapatan dari pengguna nyata lebih penting daripada jumlah "node" atau "agen".</li>
<li><b>Bagian mana yang benar-benar terdesentralisasi?</b> Sering kali modelnya dijalankan tim di server terpusat, dan hanya pembayarannya yang di chain.</li>
<li><b>Apakah masuk akal secara teknis?</b> Pelatihan model besar butuh ribuan GPU yang terhubung jaringan super cepat di satu lokasi. GPU yang tersebar di rumah-rumah dengan internet biasa tidak cocok untuk itu, walau cocok untuk tugas lain.</li>
</ol>
<p>Ingat pula pola "tren benar, token salah". Naratif AI bisa terus menguat, sementara token yang Anda pilih justru jatuh karena pemenang baru muncul. Banyak token agen AI yang ramai pada akhir 2024 turun tajam dalam hitungan bulan.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Skeptis bukan berarti menolak. Beberapa persinggungan, seperti pembayaran stablecoin oleh agen dan proof-of-personhood, menjawab masalah nyata. Tetapi token AI termasuk yang paling digerakkan naratif, dan penilaian kualitas kerja AI di jaringan terbuka bisa dimanipulasi. Data biometrik juga tidak bisa diganti seperti kata sandi kalau bocor. Nilailah proyek dari pemakaian dan pendapatannya, bukan dari kata "AI" di namanya.</div>` },
      ],
      kuis: [
        { tanya: 'Kenapa agen AI cenderung memakai dompet crypto untuk membayar?',
          pilihan: ['Agen tidak bisa membuka rekening bank, tetapi bisa memegang dompet dan membayar dengan stablecoin secara otomatis', 'Karena dompet crypto dijamin tidak pernah diretas', 'Karena bank melarang AI dipakai', 'Karena harga stablecoin selalu naik'],
          jelas: 'Pembayaran tanpa izin dan bisa diprogram adalah hal yang dibutuhkan agen. Protokol seperti x402 (Coinbase, 2025) memanfaatkan ini untuk pembayaran otomatis per permintaan.' },
        { tanya: '"Verifikasi inferensi" bertujuan membuktikan bahwa…',
          pilihan: ['Jawaban memang dihasilkan model yang dijanjikan, bukan model lain yang lebih murah', 'Pengguna adalah manusia', 'Harga token AI wajar', 'Data pelatihan bebas hak cipta'],
          jelas: 'Pendekatannya antara lain zkML, perangkat keras terpercaya (TEE), dan sistem dengan masa sanggah. Semuanya masih mahal untuk model besar.' },
        { tanya: 'Di Bittensor, siapa yang menilai kualitas kerja penambang di sebuah subnet?',
          pilihan: ['Validator di subnet itu, dan emisi token dibagikan sesuai penilaian mereka', 'Pemerintah AS', 'Pemegang saham produsen GPU', 'Tidak ada; semua penambang dibayar sama'],
          jelas: 'Setiap subnet adalah pasar untuk satu jenis pekerjaan AI. Validator memberi skor, dan skor itu menentukan bagian emisi penambang.' },
        { tanya: 'Kenapa GPU yang tersebar di rumah-rumah kurang cocok untuk melatih model AI raksasa?',
          pilihan: ['Pelatihan besar butuh ribuan GPU yang terhubung jaringan super cepat di satu lokasi', 'GPU rumahan tidak bisa menjalankan program apa pun', 'Listrik rumahan dilarang untuk AI', 'Blockchain melarang pelatihan AI'],
          jelas: 'Koneksi internet biasa terlalu lambat untuk bertukar data pelatihan dalam jumlah raksasa. GPU tersebar lebih cocok untuk inferensi atau tugas yang bisa dipecah.' },
        { tanya: 'Sebuah proyek bertoken "AI" menjalankan modelnya di server terpusat, dan tokennya hanya dibagikan sebagai hadiah tanpa dibutuhkan pelanggan. Bacaan paling tepat?',
          pilihan: ['Tokennya mungkin tidak diperlukan; periksa siapa pelanggannya dan apakah pendapatannya nyata', 'Proyek pasti sukses karena memakai kata AI', 'Server terpusat membuat tokennya lebih aman', 'Tidak perlu diperiksa karena AI selalu menjadi tren'],
          jelas: 'Kalau layanan berjalan sama baiknya tanpa token, token itu lebih mirip alat penggalangan dana. Nilailah dari pemakaian dan pendapatan, bukan label.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 8 — CENTRAL BANK DIGITAL CURRENCY (CBDC)
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'cbdc', judul: 'Central Bank Digital Currency (CBDC)',
      ringkas: 'Uang digital yang diterbitkan bank sentral: bedanya dengan stablecoin dan crypto, contoh dari Tiongkok, Nigeria, dan Indonesia, serta pertanyaan soal privasi dan kontrol.',
      pelajaran: [
        { judul: 'CBDC: uang bank sentral dalam bentuk digital', isi: `
<h3>Konsepnya</h3>
<p>CBDC (central bank digital currency) adalah uang digital yang diterbitkan langsung oleh bank sentral. Ia kewajiban bank sentral, sama seperti uang kertas. Bedanya dengan saldo di rekening bank: saldo bank adalah utang bank komersial kepada Anda, sedangkan CBDC adalah uang bank sentral itu sendiri.</p>
<p>CBDC ada dua jenis:</p>
<ul>
<li><b>CBDC ritel</b>: dipakai masyarakat umum untuk belanja dan transfer, seperti uang tunai versi digital.</li>
<li><b>CBDC wholesale</b>: hanya dipakai bank dan lembaga keuangan untuk menyelesaikan transaksi besar antar-lembaga, misalnya jual beli surat berharga.</li>
</ul>
<h3>Cara kerjanya</h3>
<table>
<tr><th>Aspek</th><th>CBDC</th><th>Stablecoin</th><th>Crypto (misalnya Bitcoin)</th></tr>
<tr><td>Penerbit</td><td>Bank sentral</td><td>Perusahaan swasta</td><td>Tidak ada; aturan protokol</td></tr>
<tr><td>Jaminan nilai</td><td>Kewajiban bank sentral</td><td>Cadangan (kas, obligasi) milik penerbit</td><td>Tidak ada; harga ditentukan pasar</td></tr>
<tr><td>Siapa bisa memblokir</td><td>Bank sentral dan perantaranya</td><td>Penerbit bisa membekukan alamat</td><td>Sulit diblokir satu pihak</td></tr>
<tr><td>Jaringan</td><td>Dirancang bank sentral, sering bukan blockchain publik</td><td>Umumnya blockchain publik</td><td>Blockchain publik</td></tr>
</table>
<p>Kebanyakan CBDC ritel memakai model dua tingkat: bank sentral menerbitkan, sedangkan bank dan penyedia pembayaran menyalurkannya ke masyarakat serta mengurus KYC. Banyak juga yang tidak memakai blockchain sama sekali. "Digital" tidak sama dengan "crypto".</p>
<h3>Contoh</h3>
<p><b>e-CNY (Tiongkok).</b> Uji coba di beberapa kota dimulai sekitar 2020, lalu dipamerkan di Olimpiade Musim Dingin Beijing 2022. Bank sentral Tiongkok menyebut desainnya "anonimitas terkendali": transaksi kecil lebih longgar, tetapi bank sentral tetap bisa melihat data bila perlu. Dompetnya berjenjang. Makin lengkap identitas yang diserahkan, makin besar batas saldonya. Sejak Januari 2026, Tiongkok memperlakukan saldo e-CNY sebagai simpanan bank, sehingga e-CNY bergeser dari fungsi awalnya sebagai uang tunai digital.</p>
<p><b>eNaira (Nigeria).</b> Diluncurkan Oktober 2021 sebagai CBDC ritel pertama di Afrika. Adopsinya sangat rendah; kajian IMF pada 2023 mencatat pemakainya kurang dari 1% penduduk. Pelajarannya: menerbitkan uang digital itu mudah, membuat orang mau memakainya itu sulit, apalagi kalau sudah ada alternatif yang lebih praktis.</p>
<p><b>Proyek Garuda dan Rupiah Digital (Indonesia).</b> Bank Indonesia mengumumkan Proyek Garuda lewat buku putih pada akhir November 2022. Rencananya bertahap. Tahap pertama adalah Rupiah Digital wholesale untuk penerbitan, pemusnahan, dan transfer dana antar-lembaga. Tahap berikutnya memperluasnya ke operasi pasar uang dan surat berharga. Baru kemudian Rupiah Digital wholesale diintegrasikan dengan Rupiah Digital ritel. Dasar hukumnya diperkuat Undang-Undang Nomor 4 Tahun 2023 (UU P2SK), yang mengakui rupiah dalam bentuk digital. Uji konsep tahap pertama berlangsung Juli 2023 sampai Agustus 2024, dan laporannya terbit Desember 2024. Hingga 2026 belum ada Rupiah Digital ritel yang bisa dipakai masyarakat; periksa perkembangan terbaru di situs Bank Indonesia.</p>
<p>Arah dunia tidak seragam. Bank Sentral Eropa sedang menyiapkan euro digital, sedangkan Amerika Serikat melarang lembaga pemerintahnya membuat CBDC lewat perintah eksekutif pada Januari 2025.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Isu terbesar CBDC ritel adalah <b>privasi dan kontrol</b>. Uang tunai tidak meninggalkan jejak; CBDC bisa mencatat setiap transaksi di satu tempat. Karena bisa diprogram, CBDC secara teknis bisa diberi tanggal kedaluwarsa, dibatasi untuk belanja tertentu, atau dibekukan dari pusat. Apakah itu terjadi bergantung pada hukum dan kepercayaan terhadap lembaganya, bukan pada teknologinya. Risiko lain: kalau masyarakat memindahkan tabungan dari bank ke CBDC saat panik, bank kehilangan dana. Karena itu banyak rancangan membatasi saldo maksimum. CBDC juga bukan investasi; nilainya sama dengan mata uang biasa.</div>` },
      ],
      kuis: [
        { tanya: 'Apa beda CBDC ritel dan CBDC wholesale?',
          pilihan: ['Ritel dipakai masyarakat umum; wholesale hanya untuk bank dan lembaga keuangan menyelesaikan transaksi besar', 'Ritel memakai blockchain, wholesale tidak pernah', 'Ritel diterbitkan swasta, wholesale oleh bank sentral', 'Tidak ada bedanya'],
          jelas: 'Keduanya diterbitkan bank sentral. Bedanya ada pada siapa yang boleh memakainya.' },
        { tanya: 'Apa beda mendasar CBDC dengan stablecoin seperti USDC?',
          pilihan: ['CBDC adalah kewajiban bank sentral; stablecoin diterbitkan perusahaan swasta yang memegang cadangan', 'CBDC selalu memakai blockchain publik, stablecoin tidak', 'Stablecoin dijamin negara, CBDC tidak', 'Harga CBDC naik turun seperti Bitcoin'],
          jelas: 'Nilai stablecoin bergantung pada cadangan dan kejujuran penerbitnya. CBDC adalah uang bank sentral itu sendiri.' },
        { tanya: 'Proyek Garuda Bank Indonesia, yang diumumkan akhir 2022, direncanakan dimulai dari…',
          pilihan: ['Rupiah Digital wholesale untuk penerbitan, pemusnahan, dan transfer dana antar-lembaga', 'Rupiah Digital ritel untuk semua warga sekaligus', 'Penambangan rupiah dengan Proof of Work', 'Penggantian seluruh uang kertas pada 2023'],
          jelas: 'Proyek Garuda bertahap: wholesale dulu, lalu operasi pasar uang dan surat berharga, baru kemudian integrasi dengan ritel. Per 2025 Rupiah Digital ritel belum tersedia.' },
        { tanya: 'Kenapa CBDC ritel memicu kekhawatiran privasi?',
          pilihan: ['Setiap transaksi bisa tercatat di satu tempat dan secara teknis bisa dibatasi atau dibekukan dari pusat', 'Karena CBDC bisa dicuri penambang', 'Karena nilainya selalu turun', 'Karena CBDC hanya bisa dipakai di luar negeri'],
          jelas: 'Berbeda dari uang tunai, CBDC meninggalkan jejak dan bisa diprogram. Perlindungannya bergantung pada hukum dan lembaga, bukan teknologi.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 9 — SMART LEGAL CONTRACT
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'smart-legal-contract', judul: 'Smart Legal Contract',
      ringkas: 'Kontrak hukum yang sebagian kewajibannya dijalankan kode: bedanya dengan smart contract murni, contoh escrow dan asuransi parametrik, serta batas yang tetap dipegang hukum.',
      pelajaran: [
        { judul: 'Ketika kontrak hukum dijalankan sebagian oleh kode', isi: `
<h3>Konsepnya</h3>
<p>Istilah "smart contract" sering menyesatkan. Smart contract di Ethereum adalah <b>program</b> yang berjalan otomatis di blockchain. Ia belum tentu kontrak dalam arti hukum. Tidak ada jaminan para pihak saling kenal, menyepakati syarat tertulis, atau bisa menuntut ke pengadilan.</p>
<p><b>Smart legal contract</b> berangkat dari arah sebaliknya. Ia adalah perjanjian yang sah secara hukum, dan sebagian kewajibannya ditulis serta dijalankan oleh kode. Bagian yang mudah diukur, seperti "bayar X jika Y terjadi", dijalankan otomatis. Bagian yang butuh penilaian manusia, seperti itikad baik, kualitas barang, atau keadaan memaksa, tetap ditulis dalam bahasa hukum biasa.</p>
<table>
<tr><th>Aspek</th><th>Smart contract murni</th><th>Smart legal contract</th></tr>
<tr><td>Dasar mengikat</td><td>Kode itu sendiri</td><td>Perjanjian hukum, dengan kode sebagai alat pelaksana</td></tr>
<tr><td>Jika terjadi sengketa</td><td>Hampir tidak ada jalur selain kode</td><td>Pengadilan atau arbitrase</td></tr>
<tr><td>Identitas pihak</td><td>Sering anonim</td><td>Umumnya diketahui</td></tr>
</table>
<h3>Cara kerjanya</h3>
<p>Idenya tidak baru. Pada 1996 Ian Grigg memperkenalkan <i>Ricardian contract</i>: dokumen yang bisa dibaca manusia sekaligus diolah mesin, ditandatangani secara kriptografis, dan diikat ke transaksinya lewat hash. Pendekatan modern biasanya punya tiga bagian:</p>
<ol>
<li><b>Teks hukum</b> yang disepakati, termasuk klausul yang menyatakan kode sebagai cara pelaksanaan dan menentukan mana yang berlaku kalau teks dan kode berbeda.</li>
<li><b>Kode</b> yang menjalankan kewajiban terukur, misalnya mengunci dan melepas dana.</li>
<li><b>Sumber data (oracle)</b> yang memberi tahu kode bahwa syarat sudah terpenuhi.</li>
</ol>
<p>Di Indonesia, syarat sahnya perjanjian tetap mengacu pada Pasal 1320 KUHPerdata: kesepakatan, kecakapan para pihak, objek tertentu, dan sebab yang halal. Undang-Undang ITE mengakui kontrak dan tanda tangan elektronik. Artinya, bentuk digital tidak otomatis membuat kontrak sah atau tidak sah; syarat dasarnya tetap sama. Di Inggris, Law Commission menyimpulkan pada 2021 bahwa hukum yang berlaku sudah bisa menampung smart legal contract.</p>
<h3>Contoh</h3>
<p><b>Escrow.</b> Pembeli dan penjual menandatangani perjanjian jual beli. Uang pembeli dikunci dalam kontrak. Begitu jasa pengiriman mengonfirmasi barang diterima, dana otomatis dilepas ke penjual. Kalau pembeli mengeluh barangnya rusak, klausul hukum menunjuk arbiter yang bisa memerintahkan dana dikembalikan.</p>
<p><b>Asuransi parametrik.</b> Asuransi biasa membayar setelah kerugian dinilai petugas. Asuransi parametrik membayar berdasarkan <b>indeks</b> terukur: curah hujan di bawah batas tertentu, gempa di atas magnitudo tertentu, atau penerbangan terlambat lebih dari dua jam. Oracle membaca data resmi, dan kode membayar otomatis tanpa pengajuan klaim. AXA pernah menguji asuransi keterlambatan penerbangan di Ethereum bernama Fizzy pada 2017, lalu menghentikannya pada 2019. Otomatisasi saja ternyata tidak cukup untuk menarik pembeli.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Kode hanya sebaik data yang masuk; oracle yang salah membuat pembayaran salah. Asuransi parametrik punya <i>basis risk</i>: indeks bisa tidak cocok dengan kerugian nyata Anda. Misalnya, stasiun cuaca mencatat hujan cukup, padahal sawah Anda tetap kering. Hukum juga tetap berkuasa atas kode. Aturan perlindungan konsumen tidak hilang hanya karena kode berjalan otomatis, dan pengadilan bisa memerintahkan pengembalian dana walau transaksi di chain tidak bisa dibatalkan. Kalau teks dan kode berbeda dan tidak ada klausul yang mengatur mana yang berlaku, sengketa justru makin rumit.</div>` },
      ],
      kuis: [
        { tanya: 'Apa beda smart legal contract dengan smart contract murni?',
          pilihan: ['Smart legal contract adalah perjanjian yang sah secara hukum dengan sebagian kewajiban dijalankan kode; smart contract murni hanyalah program', 'Keduanya sama persis', 'Smart legal contract tidak memakai kode sama sekali', 'Smart contract murni selalu diakui pengadilan sebagai perjanjian'],
          jelas: 'Smart contract murni mengikat hanya lewat kodenya. Smart legal contract tetap berpijak pada hukum perjanjian, dengan kode sebagai alat pelaksana.' },
        { tanya: 'Asuransi parametrik membayar klaim berdasarkan…',
          pilihan: ['Indeks terukur, misalnya curah hujan atau magnitudo gempa, yang dibaca lewat oracle', 'Penilaian petugas di lokasi setelah bencana', 'Voting pemegang token', 'Harga Bitcoin pada hari itu'],
          jelas: 'Karena pemicunya indeks, pembayaran bisa otomatis dan cepat. Kompensasinya, pembayaran tidak selalu cocok dengan kerugian nyata.' },
        { tanya: 'Apa itu "basis risk" dalam asuransi parametrik?',
          pilihan: ['Kemungkinan indeks tidak cocok dengan kerugian nyata yang Anda alami', 'Risiko harga token asuransi naik', 'Risiko kontrak tidak memakai blockchain', 'Risiko pembayaran datang terlalu cepat'],
          jelas: 'Stasiun cuaca bisa mencatat hujan cukup padahal lahan Anda kekeringan. Anda tidak dibayar walau benar-benar rugi, atau sebaliknya.' },
        { tanya: 'Dalam smart legal contract, kenapa perlu klausul yang menentukan mana yang berlaku kalau teks hukum dan kode berbeda?',
          pilihan: ['Supaya saat terjadi selisih, para pihak dan pengadilan tahu acuan mana yang mengikat', 'Supaya kode bisa diubah siapa saja', 'Supaya kontrak tidak perlu ditandatangani', 'Supaya oracle tidak diperlukan lagi'],
          jelas: 'Kode bisa punya bug atau tafsir berbeda dari teks. Tanpa klausul prioritas, sengketa soal mana yang benar menjadi jauh lebih rumit.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 10 — ENTERPRISE & ADOPSI DUNIA NYATA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'adopsi-enterprise', judul: 'Enterprise & Adopsi Dunia Nyata',
      ringkas: 'Kapan perusahaan memilih blockchain berizin atau publik, kapan blockchain sama sekali tidak dibutuhkan, dan contoh adopsi nyata beserta tahunnya.',
      pelajaran: [
        { judul: 'Blockchain berizin vs publik, dan kapan blockchain tidak perlu', isi: `
<h3>Konsepnya</h3>
<p>Perusahaan yang tertarik pada blockchain dihadapkan pada dua jalur. <b>Blockchain publik</b> (permissionless), seperti Ethereum, terbuka bagi siapa pun untuk dipakai dan divalidasi. <b>Blockchain berizin</b> (permissioned), seperti Hyperledger Fabric, hanya bisa diikuti pihak yang diundang dan dikenal identitasnya.</p>
<h3>Cara kerjanya</h3>
<table>
<tr><th>Aspek</th><th>Hyperledger Fabric (berizin)</th><th>Ethereum (publik)</th></tr>
<tr><td>Siapa ikut</td><td>Anggota yang disetujui, identitasnya diketahui</td><td>Siapa saja</td></tr>
<tr><td>Siapa memvalidasi</td><td>Node milik anggota konsorsium</td><td>Ratusan ribu validator yang mempertaruhkan ETH</td></tr>
<tr><td>Token bawaan</td><td>Tidak ada</td><td>ETH untuk membayar gas</td></tr>
<tr><td>Privasi data</td><td>Bisa dibatasi per kelompok (channel)</td><td>Terbuka secara bawaan</td></tr>
<tr><td>Kekuatan utama</td><td>Kontrol, kerahasiaan, kepatuhan</td><td>Netral, tahan sensor, terhubung dengan aset dan aplikasi lain</td></tr>
</table>
<p>Hyperledger Fabric adalah proyek di bawah Linux Foundation yang banyak dikembangkan IBM. Konsorsium bisa menentukan siapa yang harus menyetujui sebuah transaksi dan data apa yang boleh dilihat anggota tertentu. Ethereum menawarkan hal yang tidak bisa diberikan konsorsium: tidak ada satu pemilik yang bisa menutup jaringan, dan aset di dalamnya bisa langsung dipakai aplikasi lain seperti DeFi. Belakangan muncul jalan tengah: chain yang dibangun perusahaan dengan validator yang dikenal tetapi terbuka untuk dipakai publik, misalnya Arc dari Circle dan Tempo dari Stripe, keduanya diumumkan pada 2025.</p>
<p><b>Kapan blockchain TIDAK dibutuhkan?</b> Ajukan pertanyaan berikut secara berurutan:</p>
<ol>
<li>Apakah Anda perlu menyimpan data bersama? Kalau tidak, pakai database biasa.</li>
<li>Apakah banyak pihak menulis ke data itu? Kalau hanya satu, pakai database biasa.</li>
<li>Apakah para pihak itu tidak saling percaya? Kalau saling percaya, database bersama yang dikelola satu pihak sudah cukup.</li>
<li>Apakah tidak ada pihak ketiga tepercaya yang bisa dan mau mengelolanya? Kalau ada, memakai pihak itu sering lebih murah.</li>
</ol>
<p>Blockchain baru masuk akal kalau semua jawaban mengarah ke "perlu". Kalau yang dibutuhkan juga keterbukaan bagi publik, pertimbangkan chain publik. Kalau pesertanya terbatas dan saling kenal, chain berizin bisa cukup.</p>
<h3>Contoh</h3>
<p>TradeLens, platform rantai pasok pelayaran yang dibangun Maersk dan IBM di atas Hyperledger Fabric, ditutup pada awal 2023. Teknologinya berjalan. Masalahnya, banyak perusahaan pelayaran enggan bergabung ke platform yang dikendalikan pesaing mereka. Pada November 2022, bursa efek Australia (ASX) juga membatalkan proyek pengganti sistem kliringnya yang berbasis teknologi buku besar terdistribusi, setelah bertahun-tahun pengembangan dan penghapusan biaya ratusan juta dolar Australia.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Proyek blockchain perusahaan jarang gagal karena teknologinya. Penyebab umumnya adalah tata kelola (siapa yang mengendalikan), insentif (kenapa pesaing mau bergabung), dan kenyataan bahwa database biasa sudah cukup. Chain berizin juga mengorbankan sifat yang membuat blockchain publik berharga. Kalau lima anggota konsorsium bisa sepakat mengubah data, kepercayaannya pada dasarnya tetap kepercayaan kepada lima perusahaan itu. Waspadai pengumuman "memakai blockchain" yang tidak menjelaskan masalah apa yang diselesaikan.</div>` },

        { judul: 'Contoh adopsi nyata, dengan tahunnya', isi: `
<h3>Konsepnya</h3>
<p>Selama bertahun-tahun, banyak uji coba blockchain perusahaan berhenti di tahap pilot. Adopsi yang bertahan kini terkonsentrasi di beberapa area, dan polanya jelas: yang bertahan memakai aset digital yang benar-benar berpindah, terutama stablecoin dan dana tertokenisasi. Daftar di bawah ini menyebut tahun supaya Anda bisa melihat urutannya.</p>
<h3>Cara kerjanya: empat area</h3>
<p><b>1. Pembayaran stablecoin lintas negara.</b> Transfer internasional lewat bank koresponden bisa memakan waktu berhari-hari dengan biaya berlapis. Transfer stablecoin selesai dalam menit, 24 jam sehari.</p>
<ul>
<li><b>2023</b>: Visa memperluas uji penyelesaian transaksi dengan USDC ke jaringan Solana, setelah sebelumnya di Ethereum.</li>
<li><b>2024–2025</b>: Stripe mengakuisisi Bridge, perusahaan infrastruktur stablecoin, senilai sekitar $1,1 miliar (diumumkan Oktober 2024, rampung awal 2025).</li>
<li><b>2025</b>: suplai stablecoin melewati $300 miliar, dan AS mengesahkan GENIUS Act (Juli 2025), undang-undang khusus stablecoin pembayaran.</li>
</ul>
<p><b>2. Tokenisasi dana dan obligasi.</b></p>
<ul>
<li><b>2021</b>: Franklin Templeton mencatat kepemilikan dana pasar uangnya di blockchain publik. Bank Investasi Eropa menerbitkan obligasi digital €100 juta di Ethereum.</li>
<li><b>2023</b>: Siemens menerbitkan obligasi digital €60 juta di Polygon. Pemerintah Hong Kong menerbitkan obligasi hijau tertokenisasi.</li>
<li><b>2024</b>: BlackRock meluncurkan dana BUIDL di Ethereum.</li>
</ul>
<p><b>3. Rantai pasok.</b> Dalam uji coba 2016–2017, Walmart bersama IBM menunjukkan bahwa pelacakan asal mangga yang semula butuh hampir tujuh hari bisa dipersingkat menjadi sekitar 2 detik. Pada 2018 Walmart meminta pemasok sayuran daun ikut sistem pelacakan itu. Tetapi penutupan TradeLens pada 2023 menunjukkan area ini sulit ketika pesaing harus berbagi platform.</p>
<p><b>4. Perusahaan treasury Bitcoin.</b> Perusahaan menyimpan sebagian kasnya dalam Bitcoin.</p>
<ul>
<li><b>2020</b>: MicroStrategy (kini Strategy) membeli Bitcoin pertamanya untuk kas perusahaan, senilai $250 juta.</li>
<li><b>2021</b>: Tesla membeli Bitcoin senilai $1,5 miliar, lalu menjual sekitar tiga perempatnya pada 2022.</li>
<li><b>2025</b>: muncul gelombang perusahaan treasury baru, termasuk yang memegang ETH dan SOL. Strategy melewati 600.000 BTC pada Juli 2025.</li>
</ul>
<h3>Contoh</h3>
<p>Perhatikan beda antara pilot dan produksi. Obligasi digital generasi awal umumnya kecil dan bersifat uji coba. Produk seperti BUIDL dan stablecoin untuk pembayaran sudah mengelola dana miliaran dolar. Ukuran dan kesinambungan pemakaian adalah tanda adopsi sungguhan, bukan jumlah siaran pers.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Adopsi perusahaan tidak otomatis menguntungkan token tertentu. Perusahaan bisa memakai chain publik tanpa membeli token apa pun selain untuk gas, atau membangun chain sendiri. Model perusahaan treasury juga punya titik lemah: roda gilanya bergantung pada saham yang diperdagangkan di atas nilai Bitcoin yang dipegang. Ketika premi itu menyempit, seperti yang dialami Strategy sejak paruh kedua 2025, ketika pada akhir November 2025 nilai pasarnya bahkan sempat di bawah nilai Bitcoin yang dipegangnya, menerbitkan saham baru tidak lagi efektif menambah Bitcoin per saham. Angka suplai stablecoin dan kepemilikan Bitcoin berubah cepat; periksa data terbaru.</div>` },
      ],
      kuis: [
        { tanya: 'Apa ciri utama blockchain berizin seperti Hyperledger Fabric dibanding Ethereum?',
          pilihan: ['Hanya anggota yang disetujui dan dikenal identitasnya yang bisa ikut dan memvalidasi', 'Siapa pun bisa ikut memvalidasi tanpa izin', 'Wajib memakai token bawaan untuk membayar gas', 'Semua data selalu terbuka untuk publik'],
          jelas: 'Chain berizin menukar keterbukaan dengan kontrol dan kerahasiaan. Validatornya adalah anggota konsorsium yang dikenal.' },
        { tanya: 'Sebuah perusahaan ingin mencatat data inventaris yang hanya ditulis oleh perusahaan itu sendiri. Pilihan paling masuk akal?',
          pilihan: ['Database biasa, karena hanya ada satu pihak penulis', 'Blockchain publik dengan token baru', 'Blockchain berizin dengan seratus validator', 'Koin privasi'],
          jelas: 'Blockchain berguna ketika banyak pihak yang tidak saling percaya menulis ke data yang sama. Satu penulis cukup memakai database biasa yang lebih murah dan cepat.' },
        { tanya: 'Kenapa TradeLens (Maersk dan IBM) ditutup pada awal 2023?',
          pilihan: ['Banyak perusahaan pelayaran enggan bergabung ke platform yang dikendalikan pesaingnya', 'Teknologinya diretas sampai seluruh data hilang', 'Dilarang pemerintah AS', 'Karena harga ETH turun'],
          jelas: 'Teknologinya berjalan, tetapi insentif dan tata kelolanya gagal. Ini penyebab umum kegagalan blockchain perusahaan.' },
        { tanya: 'Mana urutan tahun yang benar?',
          pilihan: ['Bitcoin pertama MicroStrategy (2020) → peluncuran BUIDL BlackRock (2024) → GENIUS Act disahkan (2025)', 'GENIUS Act (2020) → Bitcoin pertama MicroStrategy (2024) → BUIDL (2025)', 'BUIDL (2020) → GENIUS Act (2021) → Bitcoin pertama MicroStrategy (2025)', 'Ketiganya terjadi pada tahun yang sama'],
          jelas: 'MicroStrategy membeli Bitcoin pertamanya Agustus 2020, BUIDL diluncurkan Maret 2024, dan GENIUS Act disahkan Juli 2025.' },
        { tanya: 'Apa tanda adopsi enterprise yang sungguhan, bukan sekadar uji coba?',
          pilihan: ['Pemakaian yang terus berjalan dengan nilai besar, bukan hanya pilot kecil dan siaran pers', 'Banyaknya siaran pers yang menyebut kata blockchain', 'Perusahaan meluncurkan token sendiri', 'Logo blockchain di situs perusahaan'],
          jelas: 'Banyak proyek berhenti di tahap pilot. Ukuran dan kesinambungan pemakaian, seperti dana tertokenisasi bernilai miliaran dolar, lebih bisa dipercaya.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 11 — INFRASTRUKTUR DATA WEB3 (21 Sep 2026)
    // Ditulis sendiri dari dokumentasi resmi tiap proyek. Fokus: apa yang dikerjakan koinnya.
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'infra-data', judul: 'Infrastruktur Data Web3',
      ringkas: 'Lapisan yang jarang dilihat pengguna tapi dipakai setiap aplikasi: data availability, penyimpanan, rollup siap pakai, node RPC, dan indexing. Di tiap lapisan kita cek satu hal: koinnya sebenarnya dipakai untuk apa.',
      pelajaran: [
        { judul: 'Data availability: tempat rollup menaruh datanya', isi: `
<h3>Konsepnya</h3>
<p>Rollup menjalankan transaksi di luar chain utama, lalu mengirim ringkasannya ke chain utama. Supaya siapa pun bisa mengecek ringkasan itu jujur, data transaksinya harus bisa diunduh orang lain, setidaknya untuk beberapa waktu. Jaminan bahwa data itu benar-benar dipublikasikan dan bisa diambil disebut <b>data availability</b> (DA).</p>
<p>Kalau data disembunyikan, operator rollup bisa mengklaim saldo yang salah dan tidak ada yang bisa membuktikan sebaliknya. Jadi DA adalah fondasi keamanan rollup. Masalahnya, menaruh data di Ethereum dulu mahal. Dari sinilah lahir jaringan yang khusus menjual ruang data.</p>
<h3>Cara kerjanya</h3>
<p>Ada dua pendekatan besar. Pertama, <b>Ethereum sendiri</b>. Sejak upgrade Dencun pada 13 Maret 2024 (EIP-4844), rollup bisa mengirim data dalam bentuk <b>blob</b>. Blob jauh lebih murah dari calldata biasa, dan dihapus dari node setelah sekitar 18 hari karena tugasnya hanya memberi waktu untuk pengecekan.</p>
<p>Kedua, <b>jaringan DA terpisah</b>. Kuncinya teknik <b>data availability sampling</b>: data dipecah dan diberi kode tambahan (erasure coding), lalu node ringan cukup mengambil potongan acak kecil. Kalau banyak potongan acak berhasil diambil, peluang ada data yang disembunyikan menjadi sangat kecil. Node ringan tidak perlu mengunduh semuanya.</p>
<h3>Apa yang dikerjakan koinnya</h3>
<table>
<tr><th>Jaringan</th><th>Koin</th><th>Tugas koinnya</th><th>Siapa yang membayar</th></tr>
<tr><td>Ethereum (blob)</td><td>ETH</td><td>Membayar biaya blob. Biaya dasarnya dibakar</td><td>Rollup yang mengirim blob</td></tr>
<tr><td>Celestia</td><td>TIA</td><td>Membayar ruang data (transaksi PayForBlobs), di-stake validator untuk mengamankan jaringan, dipakai voting</td><td>Rollup yang memakai Celestia</td></tr>
<tr><td>EigenDA</td><td>EIGEN, ETH yang di-restake</td><td>Operator menaruh jaminan lewat restaking EigenLayer. Jaminan bisa dipotong kalau curang</td><td>Rollup yang memesan kapasitas data</td></tr>
<tr><td>Avail</td><td>AVAIL</td><td>Di-stake validator, membayar biaya pengiriman data</td><td>Rollup dan chain yang memakai Avail</td></tr>
</table>
<h3>Contoh</h3>
<p>Satu rollup bisa berpindah lapisan DA tanpa mengganti aplikasinya. Rollup yang memakai Celestia membayar dalam TIA per ukuran data. Kalau rollup yang sama pindah ke blob Ethereum, uangnya mengalir ke ETH. Artinya permintaan koin DA sangat bergantung pada keputusan beberapa tim rollup besar, dan keputusan itu bisa berubah.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Harga ruang data terus turun karena pasokannya bertambah dari banyak jaringan sekaligus, termasuk Ethereum yang terus menambah jumlah blob per blok. Pendapatan jaringan DA bisa tetap kecil walau pemakaiannya naik. Sebelum menilai koinnya, bandingkan biaya yang dibayar rollup dengan nilai token baru yang dicetak untuk validator. DA juga hanya menjamin data tersedia, bukan bahwa isinya benar. Kebenaran transaksi tetap urusan bukti fraud atau bukti ZK milik rollup.</div>
<div class="sumber">Sumber: <a href="https://eips.ethereum.org/EIPS/eip-4844" target="_blank" rel="noopener">EIP-4844</a>; <a href="https://docs.celestia.org/learn/how-celestia-works/overview" target="_blank" rel="noopener">Dokumentasi Celestia</a>; <a href="https://docs.eigenda.xyz" target="_blank" rel="noopener">Dokumentasi EigenDA</a>; <a href="https://docs.availproject.org" target="_blank" rel="noopener">Dokumentasi Avail</a>.</div>` },

        { judul: 'Penyimpanan terdesentralisasi: menyewa, membeli sekali, atau memecah file', isi: `
<h3>Konsepnya</h3>
<p>Blockchain mahal untuk menyimpan file besar. Gambar NFT, video, arsip, dan data latih AI biasanya disimpan di tempat lain, dan blockchain hanya menyimpan penunjuknya. Kalau tempat penyimpanannya satu perusahaan, file bisa hilang saat perusahaan itu tutup atau berubah pikiran. Jaringan penyimpanan terdesentralisasi mencoba menjawab pertanyaan sederhana: siapa yang menjamin file saya masih ada lima tahun lagi?</p>
<h3>Cara kerjanya: tiga model</h3>
<ul>
<li><b>Sewa dengan bukti berkala (Filecoin).</b> Pemilik data membuat kesepakatan dengan penyedia penyimpanan. Penyedia menaruh jaminan dalam FIL, lalu wajib membuktikan secara kriptografis bahwa mereka menyimpan salinan unik (<i>proof of replication</i>) dan terus menyimpannya dari waktu ke waktu (<i>proof of spacetime</i>). Kalau gagal membuktikan, jaminannya dipotong.</li>
<li><b>Bayar sekali untuk selamanya (Arweave).</b> Pengguna membayar AR satu kali. Sebagian besar pembayaran masuk dana abadi yang dicairkan pelan-pelan untuk membayar penambang di masa depan, dengan asumsi biaya penyimpanan per gigabyte terus turun.</li>
<li><b>Pecah dan sebar (Walrus di Sui).</b> File dipecah dengan erasure coding ke banyak node. File masih bisa disusun ulang walau sebagian node hilang. Pembayaran dan staking memakai WAL.</li>
</ul>
<p>IPFS sering disebut di sini, tetapi IPFS hanyalah cara menamai dan mengambil file berdasarkan isinya. IPFS tidak punya koin dan tidak menjamin siapa pun menyimpan file Anda. Filecoin dibangun untuk mengisi kekosongan itu.</p>
<h3>Apa yang dikerjakan koinnya</h3>
<table>
<tr><th>Jaringan</th><th>Koin</th><th>Tugas koinnya</th></tr>
<tr><td>Filecoin</td><td>FIL</td><td>Alat bayar sewa penyimpanan, jaminan yang dikunci penyedia, hadiah blok untuk penyedia. Sebagian biaya transaksi dibakar</td></tr>
<tr><td>Arweave</td><td>AR</td><td>Alat bayar penyimpanan permanen dan sumber dana abadi untuk penambang</td></tr>
<tr><td>Walrus</td><td>WAL</td><td>Alat bayar penyimpanan dan jaminan yang di-stake node penyimpan, bisa didelegasikan</td></tr>
</table>
<h3>Contoh</h3>
<p>Sebuah proyek NFT ingin gambarnya tidak bisa hilang. Di Arweave, biayanya dibayar sekali di depan dan urusan selesai. Di Filecoin, proyek harus memperpanjang kesepakatan sewa sebelum habis atau memakai layanan yang mengurusnya otomatis. Pilihan yang tepat bergantung pada kebutuhan: arsip permanen cocok dengan model Arweave, data besar yang sering diambil lebih cocok dengan pasar sewa.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Kapasitas yang disediakan tidak sama dengan data yang benar-benar dibayar pelanggan. Di sektor ini kapasitas sering jauh lebih besar dari permintaan, dan penyedia hidup dari hadiah token, bukan dari pelanggan. Model "bayar sekali selamanya" bergantung pada asumsi harga penyimpanan terus turun. Asumsi itu wajar secara sejarah tetapi tetap asumsi. Pesaingnya juga berat: penyimpanan cloud terpusat murah, cepat, dan sudah dipercaya perusahaan.</div>
<div class="sumber">Sumber: <a href="https://docs.filecoin.io/basics/what-is-filecoin" target="_blank" rel="noopener">Dokumentasi Filecoin</a>; <a href="https://www.arweave.org/yellow-paper.pdf" target="_blank" rel="noopener">Arweave yellow paper</a>; <a href="https://docs.wal.app" target="_blank" rel="noopener">Dokumentasi Walrus</a>; <a href="https://docs.ipfs.tech/concepts/what-is-ipfs/" target="_blank" rel="noopener">Dokumentasi IPFS</a>.</div>` },

        { judul: 'Rollup as a Service: membuat chain sendiri tanpa tim infrastruktur', isi: `
<h3>Konsepnya</h3>
<p>Dulu membuat blockchain sendiri butuh tim besar. Sekarang kerangka rollup seperti OP Stack, Arbitrum Orbit, ZK Stack, dan Polygon CDK tersedia terbuka. Yang masih sulit adalah menjalankannya setiap hari: sequencer harus hidup terus, node harus diperbarui, bridge dan penjelajah blok harus disiapkan. <b>Rollup as a Service</b> (RaaS) adalah perusahaan yang mengerjakan semua itu dengan biaya langganan.</p>
<h3>Cara kerjanya</h3>
<ol>
<li>Pelanggan, misalnya sebuah game atau protokol DeFi, memilih kerangka rollup dan lapisan DA.</li>
<li>Penyedia RaaS memasang sequencer, node, RPC, bridge, dan penjelajah blok.</li>
<li>Pelanggan membayar biaya bulanan atau bagi hasil dari biaya transaksi chain-nya.</li>
<li>Chain baru itu menaruh datanya di lapisan DA dan menyelesaikan transaksinya di chain induk.</li>
</ol>
<h3>Apa yang dikerjakan koinnya</h3>
<table>
<tr><th>Penyedia</th><th>Koin</th><th>Tugas koinnya</th></tr>
<tr><td>Conduit</td><td>Tidak ada</td><td>Perusahaan jasa biasa. Pendapatannya tidak mengalir ke token mana pun</td></tr>
<tr><td>Caldera</td><td>ERA</td><td>Dipakai di jaringan yang menghubungkan rollup buatan Caldera: staking, biaya lintas chain, dan tata kelola</td></tr>
<tr><td>AltLayer</td><td>ALT</td><td>Di-stake bersama aset yang di-restake untuk layanan verifikasi dan finalitas cepat rollup ("restaked rollup")</td></tr>
</table>
<p>Tabel ini sengaja memuat penyedia tanpa token. Di sektor ini banyak perusahaan untung tanpa menerbitkan koin, dan itu hal penting bagi investor.</p>
<h3>Contoh</h3>
<p>Sebuah game ingin transaksi pemainnya murah dan tidak berebut ruang dengan aplikasi lain. Game itu menyewa RaaS untuk membuat rollup khusus. Biaya transaksi di chain game itu masuk ke operatornya, data dikirim ke lapisan DA, dan penyedia RaaS menerima biaya jasa. Koin penyedia RaaS ikut diuntungkan hanya kalau jasanya memang mewajibkan koin itu.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Kebanyakan rollup yang dibuat lewat RaaS masih memakai satu sequencer yang dijalankan penyedianya. Kalau sequencer itu mati, chain berhenti. Kalau disalahgunakan, transaksi bisa ditunda atau diurutkan ulang. Banyak chain baru juga sepi pemakai setelah insentif awal habis. Jumlah rollup yang diluncurkan bukan ukuran keberhasilan; lihat berapa yang masih punya pengguna harian dan biaya transaksi nyata.</div>
<div class="sumber">Sumber: <a href="https://docs.optimism.io/stacks/opstack" target="_blank" rel="noopener">Dokumentasi OP Stack</a>; <a href="https://docs.arbitrum.io/launch-arbitrum-chain/a-gentle-introduction" target="_blank" rel="noopener">Dokumentasi Arbitrum chain</a>; <a href="https://docs.conduit.xyz" target="_blank" rel="noopener">Dokumentasi Conduit</a>; <a href="https://docs.caldera.xyz" target="_blank" rel="noopener">Dokumentasi Caldera</a>; <a href="https://docs.altlayer.io" target="_blank" rel="noopener">Dokumentasi AltLayer</a>.</div>` },

        { judul: 'Node as a Service dan RPC: pintu yang dipakai dompet Anda', isi: `
<h3>Konsepnya</h3>
<p>Setiap kali dompet menampilkan saldo atau mengirim transaksi, dompet itu bertanya ke sebuah node lewat <b>RPC</b> (remote procedure call). Menjalankan node penuh sendiri butuh server, penyimpanan besar, dan pemeliharaan. Karena itu hampir semua dompet dan aplikasi memakai penyedia node. Inilah <b>Node as a Service</b>.</p>
<p>Akibatnya, jaringan yang terdesentralisasi sering diakses lewat segelintir perusahaan. Pada November 2020, gangguan di Infura membuat sejumlah bursa menghentikan penarikan ETH sementara dan banyak dompet menampilkan data yang salah. Chain-nya berjalan normal. Pintunya yang macet.</p>
<h3>Cara kerjanya</h3>
<p>Penyedia terpusat seperti Infura dan Alchemy menjalankan ribuan node dan menjual akses per jumlah permintaan. Jaringan RPC terdesentralisasi mencoba membagi pekerjaan itu ke banyak operator node independen. Operator menaruh jaminan token, menjawab permintaan, dan dibayar per permintaan yang dilayani. Jawaban yang salah atau lambat bisa membuat operator kehilangan pekerjaan atau jaminannya.</p>
<h3>Apa yang dikerjakan koinnya</h3>
<table>
<tr><th>Penyedia</th><th>Koin</th><th>Tugas koinnya</th></tr>
<tr><td>Infura, Alchemy, QuickNode</td><td>Tidak ada</td><td>Perusahaan jasa biasa, dibayar langganan</td></tr>
<tr><td>Pocket Network</td><td>POKT</td><td>Di-stake operator node dan gateway, dicetak sebagai upah per permintaan yang dilayani, dibakar oleh pemakai</td></tr>
<tr><td>Ankr</td><td>ANKR</td><td>Alat bayar layanan RPC premium dan jaminan yang di-stake penyedia node</td></tr>
<tr><td>Lava Network</td><td>LAVA</td><td>Di-stake penyedia RPC, dipakai membayar dan memberi insentif pada chain yang ingin aksesnya dilayani</td></tr>
</table>
<h3>Contoh</h3>
<p>Buka pengaturan jaringan di dompet Anda dan lihat alamat RPC-nya. Hampir pasti itu alamat milik satu perusahaan. Anda bisa menggantinya dengan RPC lain atau dengan node sendiri. Transaksi tetap sama, tetapi Anda tidak lagi bergantung pada satu pintu.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Penyedia RPC melihat alamat dompet dan alamat IP pemakainya, jadi memilih RPC juga soal privasi. Jaringan RPC terdesentralisasi harus bersaing harga dan kecepatan dengan penyedia terpusat yang sangat efisien. Periksa apakah pendapatan dari pemakai sungguhan sudah menutup token yang dicetak untuk operator, atau jaringan masih hidup dari subsidi.</div>
<div class="sumber">Sumber: <a href="https://docs.pokt.network" target="_blank" rel="noopener">Dokumentasi Pocket Network</a>; <a href="https://www.ankr.com/docs/" target="_blank" rel="noopener">Dokumentasi Ankr</a>; <a href="https://docs.lavanet.xyz" target="_blank" rel="noopener">Dokumentasi Lava</a>; <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/" target="_blank" rel="noopener">ethereum.org: JSON-RPC</a>.</div>` },

        { judul: 'Indexing: mengubah catatan blok jadi data yang bisa dicari', isi: `
<h3>Konsepnya</h3>
<p>Blockchain menyimpan data per blok, berurutan menurut waktu. Cara itu bagus untuk keamanan tetapi buruk untuk pertanyaan seperti "tampilkan semua transaksi dompet ini di Uniswap bulan lalu". Menjawabnya langsung dari node berarti membaca jutaan blok. <b>Indexer</b> membaca chain sekali, menyusunnya ke dalam basis data, lalu menjawab pertanyaan itu dalam hitungan milidetik. Hampir semua dasbor, penjelajah blok, dan aplikasi DeFi bergantung pada indexer.</p>
<h3>Cara kerjanya: The Graph sebagai contoh</h3>
<p>Pengembang menulis <b>subgraph</b>, yaitu resep data apa yang diambil dari kontrak tertentu dan bagaimana menyusunnya. Jaringan The Graph punya beberapa peran:</p>
<ul>
<li><b>Indexer</b> menjalankan server, mengindeks subgraph, dan menjawab permintaan. Mereka wajib menaruh jaminan GRT dan bisa dipotong kalau curang.</li>
<li><b>Delegator</b> menitipkan GRT ke indexer dan ikut mendapat bagian hasil, tanpa menjalankan server.</li>
<li><b>Curator</b> menaruh GRT pada subgraph yang menurut mereka berguna, sebagai sinyal bagi indexer.</li>
<li><b>Pemakai</b> membayar setiap permintaan data dengan GRT.</li>
</ul>
<h3>Apa yang dikerjakan koinnya</h3>
<table>
<tr><th>Jaringan</th><th>Koin</th><th>Tugas koinnya</th></tr>
<tr><td>The Graph</td><td>GRT</td><td>Alat bayar permintaan data, jaminan indexer, delegasi, dan sinyal curator. Sebagian biaya dibakar</td></tr>
<tr><td>SQD (Subsquid)</td><td>SQD</td><td>Jaminan operator node data dan alat untuk mendapatkan kuota akses data</td></tr>
<tr><td>Dune, Goldsky, Nansen</td><td>Tidak ada</td><td>Perusahaan data biasa, dibayar langganan</td></tr>
</table>
<h3>Contoh</h3>
<p>Dasbor yang menampilkan volume harian sebuah DEX mengambil angkanya dari indexer, bukan langsung dari chain. Kalau indexer telat menyinkronkan data atau salah membaca kontrak, angka di dasbor ikut salah walau chain-nya benar. Saat angka sebuah dasbor terlihat aneh, cek dulu apakah indexer-nya sudah sampai blok terbaru.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Banyak pengembang memilih penyedia data terpusat karena lebih mudah dan cepat, jadi permintaan jaringan terdesentralisasi tidak otomatis ikut naik saat pemakaian data on-chain naik. Nilai koin indexing bergantung pada biaya permintaan yang benar-benar dibayar, bukan jumlah subgraph yang terdaftar. Data dari satu indexer juga bisa keliru; untuk angka penting, cocokkan dengan sumber kedua.</div>
<div class="sumber">Sumber: <a href="https://thegraph.com/docs/en/resources/tokenomics/" target="_blank" rel="noopener">The Graph: tokenomics</a>; <a href="https://thegraph.com/docs/en/subgraphs/developing/subgraphs/" target="_blank" rel="noopener">The Graph: subgraph</a>; <a href="https://docs.sqd.ai" target="_blank" rel="noopener">Dokumentasi SQD</a>.</div>` },

        { judul: 'Menilai koin infrastruktur: pemakaiannya naik, koinnya ikut untung?', isi: `
<h3>Konsepnya</h3>
<p>Koin infrastruktur mudah dijual dengan satu kalimat: "semua aplikasi butuh ini". Kalimat itu sering benar untuk layanannya, tetapi belum tentu benar untuk koinnya. Pertanyaan investor ada tiga. Apakah pemakai wajib memakai koin itu? Apakah pembayaran pemakai lebih besar dari koin baru yang dicetak? Apakah ada pesaing tanpa koin yang lebih murah?</p>
<h3>Cara kerjanya: empat pertanyaan pemeriksaan</h3>
<ol>
<li><b>Siapa yang membayar dan pakai apa?</b> Kalau pemakai bisa membayar dengan dolar atau stablecoin lalu jaringan menukarnya diam-diam, tekanan beli pada koin jauh lebih kecil dari kesan pertama.</li>
<li><b>Pendapatan dibanding emisi.</b> Bandingkan biaya yang dibayar pemakai dalam sebulan dengan nilai token yang dibagikan ke operator pada bulan yang sama. Data ini bisa diperiksa di Token Terminal dan DefiLlama.</li>
<li><b>Jaminan yang dikunci.</b> Koin yang wajib di-stake untuk bekerja memang mengurangi pasokan beredar, tetapi hanya selama operatornya untung. Kalau tidak untung, mereka keluar dan menjual.</li>
<li><b>Pesaing tanpa koin.</b> Setiap lapisan di kursus ini punya pesaing terpusat atau pesaing yang tidak menerbitkan token. Kalau pesaing itu lebih murah dan lebih cepat, kebutuhan akan koinnya harus datang dari alasan lain, misalnya ketahanan sensor atau netralitas.</li>
</ol>
<h3>Contoh</h3>
<p>Ambil jaringan DA. Pemakaiannya diukur dari megabyte data yang dikirim rollup per hari. Angka ini bisa naik tajam. Tetapi kalau harga per megabyte turun lebih cepat karena persaingan, pendapatannya bisa tetap datar. Untuk investor, grafik pemakaian dan grafik pendapatan harus dibaca berdampingan, jangan satu saja.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Empat pertanyaan ini menyaring, tidak memutuskan. Koin yang lolos semua pertanyaan tetap bisa turun karena harga pasar, jadwal unlock, atau siklus. Koin yang gagal di satu pertanyaan juga bisa naik tinggi karena narasi. Pakai ini untuk tahu apa yang Anda pegang, bukan untuk menebak harga besok.</div>
<div class="sumber">Sumber data yang disarankan: <a href="https://tokenterminal.com" target="_blank" rel="noopener">Token Terminal</a> (pendapatan dan emisi), <a href="https://defillama.com/fees" target="_blank" rel="noopener">DefiLlama Fees</a>, dokumentasi tokenomics resmi tiap proyek.</div>` },
      ],
      kuis: [
        { tanya: 'Apa arti data availability bagi sebuah rollup?',
          pilihan: ['Jaminan bahwa data transaksi rollup benar-benar dipublikasikan sehingga orang lain bisa mengeceknya', 'Jaminan bahwa semua transaksi rollup pasti benar', 'Kecepatan rollup memproses transaksi', 'Tempat menyimpan kunci privat pengguna'],
          jelas: 'DA hanya menjamin data tersedia. Kebenaran transaksinya dicek lewat bukti fraud atau bukti ZK, dan itu hanya mungkin kalau datanya bisa diambil.' },
        { tanya: 'Apa tugas TIA di jaringan Celestia?',
          pilihan: ['Membayar ruang data yang dipakai rollup, di-stake untuk keamanan, dan dipakai untuk voting', 'Membayar gas di Ethereum', 'Menyimpan file permanen seperti Arweave', 'Membayar langganan RPC'],
          jelas: 'Rollup membayar TIA untuk menaruh data. Validator menaruh TIA sebagai jaminan keamanan jaringan.' },
        { tanya: 'Apa beda model penyimpanan Filecoin dan Arweave?',
          pilihan: ['Filecoin menyewa dengan bukti berkala dan jaminan FIL; Arweave dibayar sekali untuk penyimpanan permanen', 'Filecoin gratis, Arweave berbayar', 'Arweave memakai bukti berkala, Filecoin bayar sekali', 'Keduanya hanya menyimpan penunjuk, bukan file'],
          jelas: 'Penyedia Filecoin harus terus membuktikan data masih disimpan. Arweave memakai dana abadi dari pembayaran di muka.' },
        { tanya: 'Kenapa kejadian gangguan Infura pada November 2020 penting?',
          pilihan: ['Chain berjalan normal, tetapi banyak dompet dan bursa terganggu karena bergantung pada satu penyedia RPC', 'Ethereum berhenti membuat blok selama sehari', 'Semua ETH di Infura dicuri', 'Infura mengganti aturan konsensus Ethereum'],
          jelas: 'Jaringannya terdesentralisasi, tetapi pintu aksesnya terpusat. Gangguan di pintu itu terasa seperti gangguan jaringan bagi pengguna.' },
        { tanya: 'Dalam jaringan The Graph, peran indexer adalah…',
          pilihan: ['Menjalankan server, mengindeks subgraph, menjawab permintaan, dan menaruh jaminan GRT', 'Menulis resep subgraph untuk aplikasi', 'Hanya menitipkan GRT tanpa menjalankan server', 'Mencetak GRT baru untuk curator'],
          jelas: 'Indexer adalah operator. Delegator menitipkan GRT, curator memberi sinyal, dan pengembang menulis subgraph.' },
        { tanya: 'Penyedia RaaS atau RPC tanpa token mengajarkan hal apa kepada investor?',
          pilihan: ['Layanan bisa laris tanpa memberi keuntungan pada koin mana pun, jadi cek apakah koinnya benar-benar wajib dipakai', 'Semua layanan tanpa token pasti gagal', 'Token selalu membuat layanan lebih murah', 'Layanan infrastruktur tidak punya pesaing'],
          jelas: 'Conduit, Infura, dan Alchemy untung tanpa koin. Pemakaian yang naik hanya menguntungkan koin kalau koin itu memang diperlukan dalam pembayarannya.' },
        { tanya: 'Pemakaian jaringan DA naik tiga kali lipat, tetapi pendapatannya datar. Penjelasan yang paling mungkin adalah…',
          pilihan: ['Harga per megabyte turun lebih cepat karena persaingan pasokan ruang data', 'Data pemakaiannya pasti palsu', 'Rollup berhenti mengirim data', 'Token jaringan dibakar semuanya'],
          jelas: 'Pasokan ruang data bertambah dari banyak jaringan, termasuk blob Ethereum. Pemakaian dan pendapatan harus dibaca berdampingan.' },
      ] },
  ],
});
