// kelas/keamanan.js, data kelas kategori Keamanan Web3. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'keamanan', urut: 4, nama: 'Keamanan Web3', warna: '#b86b5c',
  ringkas: 'Menjaga aset dari kesalahan sendiri, penipu, celah kode, dan bursa yang gagal: dari menyimpan seed phrase sampai menilai bursa.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1, SELF CUSTODY
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'self-custody', judul: 'Self Custody: Menyimpan Aset Sendiri',
      ringkas: 'Beda menitipkan aset di bursa dengan memegang kunci sendiri, cara menyiapkan dompet yang benar, dan cara memastikan aset tidak hilang saat Anda lupa atau tiada.',
      pelajaran: [
        { judul: 'Kustodian vs self-custody: siapa yang memegang kunci', isi: `
<h3>Konsepnya</h3>
<p>Setiap aset crypto dikendalikan oleh <b>kunci privat</b>, yaitu angka rahasia yang dipakai untuk menandatangani transaksi. Siapa pun yang memegang kunci itu bisa memindahkan asetnya. Aturan ini tidak mengenal nama, KTP, atau surat kuasa.</p>
<p>Karena itu ada dua cara menyimpan aset. Pertama, <b>kustodian</b>: pihak lain, biasanya bursa, memegang kuncinya. Anda hanya melihat angka saldo di aplikasi. Kedua, <b>self-custody</b>: Anda memegang kunci sendiri lewat dompet seperti MetaMask, Phantom, atau dompet hardware. Tidak ada perantara.</p>

<h3>Cara kerjanya</h3>
<p>Saat Anda menyetor koin ke bursa, koin itu masuk ke dompet milik bursa dan bercampur dengan koin nasabah lain. Bursa lalu mencatat di databasenya bahwa Anda berhak atas sejumlah koin. Jadi saldo di bursa adalah <i>janji</i> bursa untuk membayar Anda. Selama bursa sehat dan jujur, janji itu bisa ditagih kapan saja. Kalau bursa bangkrut, diretas, atau memakai dana nasabah, Anda ikut antre bersama nasabah lain.</p>
<p>Dengan self-custody, koin tercatat di alamat yang kuncinya hanya Anda pegang. Tidak ada yang bisa membekukan, meminjamkan, atau memakainya tanpa tanda tangan Anda. Harganya: tidak ada tombol "lupa kata sandi". Kunci hilang berarti aset hilang.</p>
<table>
<tr><th>Hal</th><th>Kustodian (bursa)</th><th>Self-custody</th></tr>
<tr><td>Pemegang kunci</td><td>Bursa</td><td>Anda sendiri</td></tr>
<tr><td>Lupa kata sandi</td><td>Bisa dipulihkan lewat layanan pelanggan</td><td>Hanya bisa dipulihkan dengan seed phrase</td></tr>
<tr><td>Risiko utama</td><td>Bursa bangkrut, diretas, atau membekukan akun</td><td>Kesalahan sendiri: seed bocor atau hilang</td></tr>
<tr><td>Cocok untuk</td><td>Dana trading dan penukaran ke rupiah</td><td>Simpanan jangka panjang</td></tr>
</table>

<h3>Contoh</h3>
<p>FTX pernah menjadi salah satu bursa terbesar di dunia. Awal November 2022, laporan media tentang keuangan Alameda Research, perusahaan trading milik pendiri FTX, memicu penarikan besar-besaran. Pada 8 November 2022 FTX menghentikan penarikan. Tiga hari kemudian FTX mengajukan kebangkrutan. Belakangan terungkap bahwa dana nasabah telah dipakai Alameda. Pendirinya, Sam Bankman-Fried, dinyatakan bersalah pada November 2023 dan dijatuhi hukuman 25 tahun penjara pada Maret 2024.</p>
<p>Nasabah baru mulai menerima pengembalian pada 2025, lebih dari dua tahun kemudian. Klaim mereka dihitung dalam dolar menurut harga saat bangkrut, ketika Bitcoin sekitar $17.000. Nasabah yang menyimpan Bitcoin di sana tidak ikut menikmati kenaikan harga sesudahnya. FTX juga bukan kasus pertama: Mt. Gox menghentikan penarikan pada 2014, dan Celsius membekukan penarikan pada Juni 2022.</p>
<p>Inilah arti ungkapan <b>"not your keys, not your coins"</b>. Kalau kuncinya bukan milik Anda, koinnya pada praktiknya juga bukan milik Anda. Anda hanya memegang klaim.</p>

<h3>Yang harus Anda lakukan</h3>
<ul>
<li><b>Pisahkan fungsi.</b> Bursa untuk membeli, menjual, dan menukar ke rupiah. Dompet sendiri untuk simpanan yang tidak Anda sentuh berbulan-bulan.</li>
<li><b>Jangan menunggu kabar buruk.</b> Saat masalah sebuah bursa sudah ramai diberitakan, penarikan biasanya sudah tertahan.</li>
<li><b>Mulai dari jumlah kecil.</b> Kirim sedikit dulu ke dompet sendiri untuk memahami alurnya, baru pindahkan simpanan yang lebih besar.</li>
<li><b>Siapkan dompet dengan benar</b> sebelum memindahkan dana. Caranya dibahas di pelajaran berikutnya.</li>
</ul>
<div class="batas-berlaku"><b>Batas & risiko.</b> Self-custody memindahkan risiko, bukan menghapusnya. Risiko bursa hilang, tetapi semua kesalahan kini menjadi tanggung jawab Anda. Kalau Anda belum siap menjaga seed phrase, dana kecil di bursa berizin bisa lebih aman daripada dompet yang dikelola asal-asalan. Yang penting, Anda sadar risiko mana yang sedang Anda pegang.</div>` },

        { judul: 'Menyiapkan dompet dengan benar', isi: `
<h3>Konsepnya</h3>
<p>Saat membuat dompet baru, Anda akan diberi <b>seed phrase</b>: biasanya 12 atau 24 kata, umumnya bahasa Inggris, dalam urutan tertentu. Kata-kata ini adalah cadangan kunci induk dompet Anda. Dari seed yang sama, dompet lain yang memakai standar BIP39 dan jalur turunan (derivation path) yang sama bisa membuat ulang semua alamat dan kunci Anda. Kalau setelah dipulihkan saldo tampak nol, periksa dulu jaringan dan jalur turunannya sebelum panik.</p>
<p>Artinya, seed phrase lebih penting daripada perangkatnya. HP hilang atau dompet hardware rusak tidak masalah selama seed aman. Sebaliknya, siapa pun yang melihat seed Anda bisa menguras seluruh isi dompet dari perangkat mana pun, tanpa perlu menyentuh HP Anda.</p>

<h3>Cara kerjanya</h3>
<p><b>Seed offline.</b> Tulis seed dengan tangan di kertas atau pelat logam. Jangan difoto, jangan diketik ke catatan HP, dan jangan disimpan di email, cloud, atau chat. Semua yang tersambung internet bisa bocor lewat akun yang diretas, aplikasi berbahaya, atau HP yang hilang.</p>
<p><b>Cadangan.</b> Satu salinan bisa terbakar, kebanjiran, atau tak sengaja terbuang. Buat dua salinan dan simpan di dua tempat berbeda yang sama-sama aman. Pelat logam tahan api dan air, cocok untuk simpanan besar.</p>
<p><b>Passphrase (kata ke-25).</b> Banyak dompet menyediakan kata sandi tambahan di atas seed. Seed yang sama dengan passphrase berbeda menghasilkan dompet yang sama sekali lain. Jadi kalau seed Anda ditemukan orang, ia tetap tidak bisa membuka dompet utama tanpa passphrase. Hati-hati: tidak ada pesan "passphrase salah". Salah ketik satu huruf hanya membuka dompet lain yang kosong. Lupa passphrase berarti dana hilang. Simpan passphrase terpisah dari seed.</p>
<p><b>Dompet hardware.</b> Ini perangkat kecil yang menyimpan kunci privat di dalam chip dan tidak pernah mengeluarkannya. Transaksi disiapkan di laptop atau HP, tetapi ditandatangani di dalam perangkat setelah Anda menekan tombolnya. Laptop yang terkena malware pun tidak bisa mencuri kuncinya.</p>

<h3>Contoh</h3>
<p>Modus lama yang masih beredar: dompet hardware bekas atau palsu dijual murah di marketplace. Di dalam kotaknya ada kartu berisi 24 kata "yang sudah disiapkan agar praktis". Pembeli memakai seed itu dan mengisi dana. Penjual, yang menyimpan salinan kata-kata tersebut, lalu mengurasnya. Dompet asli selalu membuat seed baru di dalam perangkat saat pertama kali dinyalakan, di depan mata Anda.</p>
<p>Contoh lain: pada 2020 data pembeli sebuah produsen dompet hardware bocor. Setelah itu banyak pembeli menerima email, bahkan paket, palsu yang meminta mereka "memperbarui" seed. Perangkatnya aman; yang diserang adalah pemiliknya.</p>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li>Beli dompet hardware langsung dari situs resmi produsen atau distributor resminya. Jangan beli bekas.</li>
<li>Buat seed baru di perangkat. Tolak seed apa pun yang sudah tertulis sebelumnya.</li>
<li>Tulis seed dengan tangan, periksa ejaan dan urutannya, lalu buat salinan kedua.</li>
<li>Kalau memakai passphrase, catat di tempat yang terpisah dari seed.</li>
<li><b>Uji pemulihan sebelum mengisi dana besar.</b> Reset perangkat atau pakai perangkat kedua, pulihkan dengan seed (dan passphrase), lalu pastikan alamat pertama yang muncul sama persis dengan sebelumnya.</li>
<li>Kirim jumlah kecil dulu, pastikan masuk, baru kirim sisanya.</li>
<li>Jangan pernah mengetik seed di situs web, formulir, atau aplikasi yang memintanya. Pihak resmi tidak pernah meminta seed.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Dompet hardware melindungi kunci dari malware, tetapi tidak melindungi Anda dari menyetujui transaksi jahat. Kalau Anda menekan tombol setuju tanpa membaca, kuncinya aman tetapi asetnya tetap pergi. Jangan juga memotong seed menjadi dua bagian sendiri. Cara itu melemahkan keamanan sekaligus menambah risiko kehilangan. Kalau ingin membagi cadangan, pakai cara yang memang dirancang untuk itu, seperti multisig di pelajaran berikutnya.</div>` },

        { judul: 'Warisan & pemulihan: tanpa satu titik kegagalan', isi: `
<h3>Konsepnya</h3>
<p><b>Satu titik kegagalan</b> adalah satu benda atau satu orang yang kalau hilang, rusak, atau bocor, membuat seluruh sistem runtuh. Dompet dengan satu seed phrase punya titik kegagalan seperti itu, dan gagalnya bisa ke dua arah. Kalau seed bocor, aset dicuri. Kalau seed hilang, aset terkunci selamanya.</p>
<p>Ada arah ketiga yang jarang dipikirkan: Anda sendiri. Kalau Anda meninggal atau sakit berat, dan hanya Anda yang tahu di mana seed disimpan, keluarga tidak bisa mengakses apa pun. Blockchain tidak menerima akta kematian atau surat keterangan ahli waris.</p>

<h3>Cara kerjanya</h3>
<p>Solusi yang umum dipakai adalah <b>multisig 2-dari-3</b>. Dompet dibuat dengan tiga kunci, masing-masing dengan seed sendiri. Setiap transaksi butuh tanda tangan dari dua kunci mana saja.</p>
<ul>
<li><b>Satu kunci hilang:</b> dua kunci sisanya masih cukup untuk memindahkan dana ke dompet baru.</li>
<li><b>Satu kunci dicuri:</b> pencuri masih butuh satu kunci lagi. Anda punya waktu untuk memindahkan dana.</li>
<li><b>Anda meninggal:</b> ahli waris yang bisa menjangkau dua kunci, dengan petunjuk yang jelas, bisa memindahkan dana.</li>
</ul>
<p>Contoh pembagian: kunci A di rumah Anda, kunci B di tempat penyimpanan lain seperti safe deposit box, dan kunci C dipegang anggota keluarga tepercaya atau layanan khusus multisig. Tidak ada satu tempat pun yang menyimpan dua kunci sekaligus.</p>
<p>Alatnya sudah tersedia. Di Ethereum dan chain sejenis ada Safe. Untuk Bitcoin ada dompet seperti Sparrow atau Nunchuk. Khusus multisig Bitcoin, simpan juga berkas konfigurasi dompet (wallet descriptor). Tanpa berkas itu, memulihkan dompet jauh lebih sulit meski dua seed ada di tangan.</p>

<h3>Contoh</h3>
<p>QuadrigaCX, sebuah bursa di Kanada, runtuh setelah pendirinya meninggal pada Desember 2018. Bursa itu mengaku hanya sang pendiri yang bisa mengakses dompet dinginnya. Penyelidikan kemudian menemukan bahwa sebagian besar dana nasabah sudah disalahgunakan jauh sebelumnya. Jadi kasus ini bukan sekadar soal kunci yang hilang. Namun pelajarannya tetap berlaku: sistem yang bergantung pada satu orang adalah sistem yang rapuh.</p>
<p>Di tingkat perorangan, perusahaan analitik Chainalysis pada 2020 memperkirakan sekitar 20% Bitcoin yang sudah ditambang kemungkinan hilang selamanya, antara lain karena kunci hilang atau pemiliknya tiada. Angka itu perkiraan kasar, tetapi cukup untuk menunjukkan bahwa kehilangan akses bukan kejadian langka.</p>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li><b>Tulis surat petunjuk untuk keluarga.</b> Isinya: aset apa yang Anda punya, di dompet atau bursa mana, di mana cadangan disimpan, dan siapa yang bisa dimintai bantuan. Jangan tulis seed phrase di surat ini.</li>
<li><b>Simpan surat petunjuk terpisah dari seed.</b> Misalnya surat dititipkan ke notaris atau keluarga, sementara seed tetap di tempat Anda.</li>
<li><b>Pertimbangkan multisig</b> kalau nilai simpanan sudah besar. Berlatihlah dulu dengan jumlah kecil.</li>
<li><b>Uji apakah keluarga paham.</b> Minta satu orang membaca petunjuk tanpa bantuan Anda. Kalau ia bingung, sederhanakan.</li>
<li><b>Tinjau setahun sekali.</b> Aset, dompet, dan tempat penyimpanan berubah seiring waktu.</li>
<li><b>Peringatkan keluarga</b> bahwa penipu sering mendekati ahli waris dengan tawaran "membantu memulihkan aset".</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Multisig lebih rumit daripada dompet biasa. Salah menyimpan konfigurasi atau salah memilih pemegang kunci bisa membuat dana terkunci. Di beberapa chain biaya transaksinya juga lebih mahal. Untuk urusan hukum waris dan pajak, konsultasikan dengan notaris. Materi ini membahas sisi teknis, bukan nasihat hukum.</div>` },
      ],
      kuis: [
        { tanya: 'Anda menyimpan 0,5 BTC di bursa untuk jangka panjang. Teman berkata, "Aman, kan tercatat di akun atas nama kamu." Apa tanggapan yang paling tepat?',
          pilihan: ['Saldo itu klaim terhadap bursa; kalau bursa bangkrut atau menahan penarikan, saya ikut antre bersama nasabah lain', 'Aman, karena koin di bursa tercatat atas nama saya di blockchain', 'Aman, karena bursa selalu wajib mengganti semua kerugian dalam 24 jam', 'Aman, asalkan kata sandi akun saya panjang'],
          jelas: 'Koin di bursa ada di dompet milik bursa; Anda memegang janji pembayaran. Kasus FTX (November 2022) menunjukkan janji itu bisa tertahan bertahun-tahun.' },
        { tanya: 'Anda membeli dompet hardware di marketplace. Di dalam kotaknya ada kartu berisi 24 kata yang "sudah disiapkan". Apa yang tepat?',
          pilihan: ['Jangan dipakai; dompet asli selalu membuat seed baru di perangkat, jadi kembalikan dan laporkan ke produsen', 'Pakai saja, itu fitur resmi untuk mempermudah pengguna baru', 'Pakai, tetapi pasang PIN yang panjang', 'Foto kartunya sebagai cadangan, lalu pakai'],
          jelas: 'Seed yang dibuat orang lain berarti orang lain juga memegang salinannya. Begitu Anda mengisi dana, ia bisa mengurasnya.' },
        { tanya: 'Anda memakai passphrase tambahan. Suatu hari, setelah memasukkan seed dan passphrase, dompet terbuka tetapi saldonya nol. Kemungkinan terbesarnya?',
          pilihan: ['Passphrase yang diketik sedikit berbeda, sehingga yang terbuka adalah dompet lain yang kosong', 'Dana pasti sudah dicuri', 'Blockchain menghapus saldo dompet yang lama tidak dipakai', 'Passphrase kedaluwarsa setiap tahun'],
          jelas: 'Setiap passphrase menghasilkan dompet berbeda dan tidak ada pesan "salah". Cek ejaan, huruf besar-kecil, dan spasi sebelum panik.' },
        { tanya: 'Kapan waktu terbaik menguji pemulihan seed phrase?',
          pilihan: ['Setelah menulis seed dan sebelum menyetor dana besar', 'Setelah dompet hardware rusak', 'Tidak perlu diuji selama seed ditulis rapi', 'Setahun sekali dengan mengetik seed di situs pemeriksa online'],
          jelas: 'Menguji di awal berarti kesalahan tulis ketahuan saat dananya masih kecil. Mengetik seed di situs mana pun adalah cara tercepat kehilangan aset.' },
        { tanya: 'Anda memakai multisig 2-dari-3, dan salah satu kertas seed hilang saat pindah rumah. Apa artinya?',
          pilihan: ['Dua kunci tersisa masih cukup untuk memindahkan dana ke dompet baru yang aman', 'Dana langsung terkunci permanen', 'Siapa pun yang menemukan kertas itu bisa langsung menguras dana', 'Anda harus menghubungi layanan pelanggan blockchain'],
          jelas: 'Satu kunci saja tidak cukup untuk bertransaksi, tetapi dua kunci sisanya cukup. Segera pindahkan dana ke susunan kunci baru supaya kembali punya cadangan.' },
        { tanya: 'Anda ingin keluarga bisa mengakses aset crypto kalau terjadi sesuatu pada Anda. Langkah mana yang paling tepat?',
          pilihan: ['Membuat surat petunjuk tentang aset dan cara mengaksesnya, disimpan terpisah dari seed phrase', 'Menulis seed phrase di dokumen wasiat lalu memperbanyak salinannya', 'Mengirim seed phrase ke grup WhatsApp keluarga', 'Tidak perlu apa-apa; blockchain mengembalikan aset ke keluarga secara otomatis'],
          jelas: 'Petunjuk tanpa seed memberi keluarga peta tanpa membuka peluang pencurian. Seed yang disalin ke banyak dokumen atau chat justru membuat satu titik kebocoran baru.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2, MENGENALI TRIK PENIPUAN
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'penipuan', judul: 'Mengenali Trik Penipuan & Tips Keamanan',
      ringkas: 'Modus penipuan crypto yang paling sering memakan korban, dari situs palsu dan tanda tangan jebakan sampai pig butchering, beserta kebiasaan sederhana yang mencegahnya.',
      pelajaran: [
        { judul: 'Phishing, admin palsu, deepfake & iklan palsu', isi: `
<h3>Konsepnya</h3>
<p><b>Phishing</b> adalah penipuan dengan menyamar sebagai pihak tepercaya supaya korban menyerahkan sesuatu. Di crypto, yang diincar biasanya satu dari tiga hal: seed phrase, tanda tangan dompet, atau login akun bursa.</p>
<p>Taruhannya lebih besar daripada di perbankan. Transaksi blockchain tidak bisa dibatalkan, dan tidak ada bank yang bisa memblokir transfer. Satu klik yang salah bersifat permanen. Kabar baiknya, hampir semua phishing punya pola yang sama dan bisa dikenali.</p>

<h3>Tanda-tandanya</h3>
<p><b>Situs palsu.</b> Tampilannya meniru situs asli sampai detail terkecil. Bedanya ada di alamat: satu huruf diganti (misalnya huruf "l" menjadi angka "1"), ada tambahan kata seperti "claim" atau "airdrop", atau akhiran domainnya berbeda.</p>
<p><b>Admin palsu di Discord dan Telegram.</b> Penipu menyalin nama, foto, bahkan jabatan admin asli, lalu mengirim pesan pribadi (DM) lebih dulu: "Saya lihat Anda ada kendala, silakan hubungi tim support di tautan ini." Ada juga bot "verifikasi" palsu yang meminta Anda menyambungkan dompet, memasukkan seed, atau menyalin sebuah perintah lalu menjalankannya di komputer. Perintah seperti itu bisa memasang program pencuri.</p>
<p><b>Deepfake.</b> AI kini bisa meniru wajah dan suara. Penipu membuat siaran langsung palsu di YouTube berisi video tokoh terkenal yang menjanjikan "kirim 1 ETH, kami kembalikan 2 ETH". Ada juga panggilan video dengan "pendiri proyek" atau "calon mitra" yang ternyata rekaman buatan.</p>
<p><b>Iklan pencarian palsu.</b> Siapa pun bisa membeli iklan di mesin pencari. Penipu memasang iklan untuk kata kunci seperti nama dompet atau bursa, sehingga situs palsu muncul <i>di atas</i> situs asli dengan label "Bersponsor".</p>
<p>Benang merahnya selalu sama: <b>ada desakan waktu, ada iming-iming atau ancaman, dan ujungnya Anda diminta menyambungkan dompet, menandatangani sesuatu, atau menyerahkan data.</b></p>

<h3>Contoh</h3>
<p>Rina bergabung di grup Telegram sebuah proyek dan bertanya kenapa tokennya belum masuk. Dua menit kemudian, akun bernama "Admin Support" dengan logo proyek mengirim DM. Ia sopan, cepat tanggap, dan menyuruh Rina membuka situs "sinkronisasi dompet" untuk memperbaiki masalah. Situs itu meminta 12 kata seed phrase. Admin asli proyek tersebut tidak pernah mengirim DM. Pertanyaan Rina di grup publik itulah yang memberi tahu penipu siapa yang sedang bingung.</p>

<h3>Yang harus Anda lakukan</h3>
<ul>
<li>Simpan situs resmi yang sering dipakai di <b>bookmark</b>. Buka dari sana, bukan dari iklan, DM, atau tautan di kolom komentar.</li>
<li>Matikan DM dari anggota server di Discord. Anggap setiap DM tentang crypto yang datang duluan sebagai penipuan sampai terbukti sebaliknya.</li>
<li>Periksa silang pengumuman penting lewat kanal kedua, misalnya situs resmi dan akun X resmi. Akun resmi pun bisa diretas.</li>
<li>Ingat bahwa tidak ada giveaway sah yang meminta Anda mengirim dana lebih dulu.</li>
<li>Jangan pernah mengetik seed phrase di situs mana pun. Seed hanya dipakai di dompet Anda sendiri saat pemulihan.</li>
<li>Jangan menjalankan perintah, mengunduh "pembaruan Zoom", atau memasang aplikasi atas permintaan orang yang baru Anda kenal.</li>
</ul>
<div class="batas-berlaku"><b>Batas & risiko.</b> Penipu terus mengganti cara, jadi daftar tanda di atas tidak akan pernah lengkap. Pegang prinsipnya, bukan hafalan modusnya: pihak yang sah tidak meminta seed, tidak mendesak, dan tidak menghubungi Anda lebih dulu lewat DM. Kalau ragu, berhenti. Peluang yang lewat bisa dicari lagi; aset yang dicuri hampir tidak pernah kembali.</div>` },

        { judul: 'Drainer & tanda tangan berbahaya', isi: `
<h3>Konsepnya</h3>
<p><b>Drainer</b> adalah program penguras dompet. Program ini dijual atau disewakan kepada penipu sebagai paket siap pakai, lengkap dengan situs palsunya. Drainer tidak butuh seed phrase Anda. Cukup satu tanda tangan dari dompet Anda.</p>
<p>Perusahaan keamanan Scam Sniffer mencatat kerugian akibat drainer sekitar $494 juta sepanjang 2024, naik dari sekitar $295 juta pada 2023. Sebagian besar korban kehilangan aset bukan karena dompetnya dibobol, tetapi karena menyetujui sesuatu yang tidak mereka pahami.</p>

<h3>Cara kerjanya</h3>
<p>Setiap kali dompet memunculkan jendela konfirmasi (pop-up), Anda sedang memberi perintah. Beberapa perintah memberi pihak lain kuasa atas aset Anda:</p>
<table>
<tr><th>Permintaan</th><th>Artinya</th><th>Kapan wajar</th></tr>
<tr><td>approve</td><td>Memberi izin sebuah kontrak memindahkan token tertentu milik Anda, sampai jumlah tertentu atau tak terbatas</td><td>Saat memakai DEX atau protokol yang Anda buka sendiri dari bookmark</td></tr>
<tr><td>permit / Permit2</td><td>Izin yang sama seperti approve, tetapi berupa tanda tangan tanpa biaya gas. Pemegang tanda tangan bisa mengirimkannya ke blockchain kapan saja sebelum kedaluwarsa</td><td>Di aplikasi tepercaya yang memang memakainya</td></tr>
<tr><td>setApprovalForAll</td><td>Memberi satu alamat kuasa atas <i>semua</i> NFT Anda dalam satu koleksi</td><td>Saat mendaftarkan NFT di marketplace resmi</td></tr>
<tr><td>Blind signing</td><td>Menandatangani data yang tidak bisa diterjemahkan dompet; layar hanya menampilkan kode acak atau hash</td><td>Hampir tidak pernah untuk pengguna biasa</td></tr>
</table>
<p>Jebakan terbesar ada di tanda tangan tanpa gas. Banyak orang berpikir, "Hanya tanda tangan, tidak bayar apa-apa, berarti aman." Padahal tanda tangan permit sama kuatnya dengan approve.</p>

<h3>Contoh</h3>
<p>Budi melihat pengumuman airdrop di X dan membuka situsnya. Situs itu meminta "Sign in to check eligibility". Pop-up dompetnya tidak meminta gas, jadi Budi menyetujuinya. Isi sebenarnya adalah Permit untuk seluruh USDC-nya, dengan alamat penipu sebagai penerima izin. Beberapa menit kemudian USDC-nya pindah. Dompetnya tidak diretas. Budi sendiri yang memberi izin.</p>

<h3>Yang harus Anda lakukan</h3>
<p>Baca pop-up dompet dengan urutan ini:</p>
<ol>
<li><b>Situs mana yang meminta?</b> Dompet menampilkan domain peminta. Pastikan sama persis dengan situs asli.</li>
<li><b>Jenis perintahnya apa?</b> Waspadai kata approve, permit, setApprovalForAll, atau pesan berisi kode acak.</li>
<li><b>Siapa penerima izinnya?</b> Tempel alamatnya di Etherscan. Kontrak resmi biasanya bernama dan punya riwayat panjang. Alamat baru tanpa nama patut dicurigai.</li>
<li><b>Berapa jumlahnya?</b> Kalau tertulis tak terbatas (unlimited), ubah ke jumlah yang benar-benar Anda perlukan. MetaMask memungkinkan Anda mengubah batas ini.</li>
<li><b>Apa hasil simulasinya?</b> MetaMask dan Rabby menampilkan perkiraan perubahan saldo. Kalau ada aset keluar yang tidak Anda harapkan, tolak.</li>
<li><b>Tidak paham? Tolak.</b> Menolak tidak ada ruginya.</li>
</ol>
<p>Setelah itu, <b>cabut izin lama</b> secara berkala lewat revoke.cash atau Etherscan Token Approval Checker. Pakai juga <b>dompet terpisah</b>: dompet "percobaan" berisi sedikit dana untuk airdrop dan situs baru, dan dompet utama yang hanya tersambung ke aplikasi yang sudah lama Anda kenal.</p>
<div class="batas-berlaku"><b>Batas & risiko.</b> Mencabut izin memakan biaya gas dan hanya membatalkan izin yang sudah tercatat di blockchain. Tanda tangan permit yang belum dipakai penipu belum tentu bisa dibatalkan dengan cara yang sama. Kalau Anda terlanjur menandatangani sesuatu yang mencurigakan, atau seed Anda mungkin bocor, cara paling aman adalah segera memindahkan aset ke dompet baru dengan seed baru. Simulasi transaksi membantu, tetapi bisa dikelabui, jadi jangan jadikan satu-satunya pegangan.</div>` },

        { judul: 'Penipuan investasi: dari rug pull sampai pig butchering', isi: `
<h3>Konsepnya</h3>
<p>Penipuan investasi tidak mencuri aset Anda diam-diam. Anda sendiri yang mengirimnya, karena dijanjikan keuntungan. Bentuknya beragam, tetapi semuanya menjual hal yang sama: <b>untung besar dengan risiko yang tampak kecil</b>. Di pasar yang jujur, dua hal itu jarang datang bersamaan.</p>

<h3>Tanda-tandanya</h3>
<table>
<tr><th>Jenis</th><th>Cara kerjanya</th><th>Tanda</th></tr>
<tr><td>Rug pull</td><td>Pembuat token menarik likuiditas atau menjual seluruh jatahnya, lalu menghilang</td><td>Tim anonim, likuiditas tidak dikunci, sebagian besar suplai di segelintir dompet</td></tr>
<tr><td>Honeypot</td><td>Kontrak token mengizinkan membeli tetapi menghalangi menjual</td><td>Grafik hanya naik, hampir tidak ada transaksi jual, pajak jual sangat tinggi</td></tr>
<tr><td>Pump & dump</td><td>Kelompok mengajak orang membeli bersamaan; pengaturnya menjual ke pembeli terakhir</td><td>"Sinyal" berbayar, hitung mundur, janji naik 10 kali lipat</td></tr>
<tr><td>Ponzi imbal hasil tinggi</td><td>Keuntungan anggota lama dibayar dari setoran anggota baru</td><td>Imbal hasil tetap dan tinggi setiap hari, bonus merekrut, sumber keuntungan tidak jelas</td></tr>
<tr><td>Pig butchering</td><td>Penipu membangun hubungan berminggu-minggu, lalu mengajak "investasi" di platform palsu</td><td>Kenalan baru dari salah sambung atau aplikasi kencan, platform tak dikenal, "pajak" untuk menarik dana</td></tr>
<tr><td>Recovery scam</td><td>Mengaku bisa memulihkan dana korban penipuan, dengan biaya di muka</td><td>Muncul setelah Anda bercerita di media sosial, mengaku hacker, pengacara, atau aparat</td></tr>
</table>
<p>Istilah <i>pig butchering</i> berasal dari bahasa Mandarin: babi "digemukkan" dulu sebelum "disembelih". Korban dibiarkan melihat keuntungan palsu di layar dan diizinkan menarik jumlah kecil supaya percaya. Setelah korban menyetor besar, penarikan diblokir dengan alasan pajak, biaya, atau "akun dibekukan". Banyak operasi ini dijalankan dari kompleks penipuan di Asia Tenggara. Sebagian pekerjanya sendiri korban perdagangan orang, termasuk warga Indonesia.</p>

<h3>Contoh</h3>
<ul>
<li><b>Token Squid Game (SQUID), November 2021.</b> Harganya naik dari beberapa sen hingga ribuan dolar dalam sekitar sepekan. Pembeli ternyata tidak bisa menjual. Setelah pembuatnya menarik dana, harga jatuh ke hampir nol dalam hitungan menit.</li>
<li><b>Bitconnect.</b> Menjanjikan keuntungan harian dari "bot trading" rahasia. Skema ini runtuh pada Januari 2018 setelah regulator di Amerika Serikat memerintahkan penghentian.</li>
<li><b>Robot trading di Indonesia, 2022.</b> Beberapa skema, seperti DNA Pro dan Fahrenheit, menjanjikan cuan otomatis dari robot, lalu ditangani polisi. Pola dasarnya mirip Bitconnect.</li>
</ul>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li>Tanyakan <b>dari mana keuntungannya berasal</b>. Kalau jawabannya kabur ("strategi rahasia", "robot AI"), mundur.</li>
<li>Periksa izinnya. Di Indonesia, pengawasan aset kripto pindah dari Bappebti ke OJK sejak Januari 2025. Cek juga daftar entitas ilegal dari Satgas PASTI (dahulu Satgas Waspada Investasi).</li>
<li>Jangan pernah membayar "pajak" atau "biaya" supaya bisa menarik dana. Itu lapisan penipuan berikutnya, bukan prosedur.</li>
<li>Waspadai kenalan online yang cepat akrab lalu mulai membicarakan investasi.</li>
<li>Kalau sudah menjadi korban, lapor ke polisi dan ke bursa tujuan dana dikirim. Laporan resmi itu gratis. Siapa pun yang meminta bayaran di muka untuk "memulihkan" dana hampir pasti penipu.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak semua koin yang jatuh adalah penipuan; banyak proyek gagal secara jujur. Tidak semua imbal hasil tinggi juga penipuan, misalnya insentif sementara di DeFi. Tetapi imbal hasil tinggi selalu berarti risiko tinggi. Kalau Anda belum bisa menjelaskan risikonya, Anda belum siap memasukkan dana.</div>` },

        { judul: 'Address poisoning, clipboard malware, SIM swap & kebiasaan aman', isi: `
<h3>Konsepnya</h3>
<p>Serangan di pelajaran ini tidak membobol blockchain atau dompet. Yang diserang adalah kebiasaan kecil sehari-hari: menyalin alamat, mengandalkan SMS, atau memasang aplikasi sembarangan. Justru karena kebiasaan itu terasa sepele, serangannya sering berhasil.</p>

<h3>Cara kerjanya</h3>
<p><b>Address poisoning (peracunan alamat).</b> Alamat dompet panjang dan sulit dibaca, jadi orang biasanya hanya mencocokkan beberapa karakter awal dan akhir. Penipu membuat alamat yang awal dan akhirnya sama dengan alamat yang sering Anda pakai. Lalu ia mengirim transaksi bernilai nol atau sangat kecil ke dompet Anda, supaya alamat palsu itu muncul di riwayat. Ia berharap suatu hari Anda menyalin alamat dari riwayat, dan yang tersalin adalah alamat miliknya.</p>
<p><b>Clipboard malware.</b> Program jahat di komputer atau HP memantau teks yang Anda salin. Begitu mendeteksi alamat crypto, program itu menggantinya dengan alamat penipu. Anda menempel alamat yang berbeda tanpa sadar. Program ini sering menumpang di aplikasi bajakan, ekstensi browser yang tidak jelas, atau "alat trading gratis".</p>
<p><b>SIM swap.</b> Penipu meyakinkan operator seluler, memakai data pribadi curian atau bantuan orang dalam, untuk memindahkan nomor Anda ke kartu SIM baru miliknya. Sejak saat itu semua SMS, termasuk kode OTP, masuk ke penipu. Akun yang hanya dilindungi SMS, seperti email, media sosial, atau bursa, bisa diambil alih.</p>

<h3>Contoh</h3>
<ul>
<li><b>Mei 2024:</b> seorang pemilik dompet mengirim 1.155 WBTC, sekitar $68 juta saat itu, ke alamat hasil peracunan. Kasus ini langka karena pelakunya kemudian mengembalikan dana tersebut setelah dilacak dan diajak bernegosiasi. Hampir semua korban lain tidak seberuntung itu.</li>
<li><b>September 2023:</b> akun X milik Vitalik Buterin, salah satu pendiri Ethereum, dibajak lewat SIM swap. Akun itu dipakai menyebar tautan NFT gratis palsu, dan korban yang mengkliknya kehilangan ratusan ribu dolar.</li>
<li><b>Januari 2024:</b> akun X Komisi Sekuritas AS (SEC) diambil alih lewat SIM swap dan memuat pengumuman palsu tentang persetujuan ETF Bitcoin. Harga Bitcoin sempat bergejolak sebelum SEC meralatnya.</li>
</ul>

<h3>Yang harus Anda lakukan</h3>
<p>Kebiasaan aman sehari-hari:</p>
<ol>
<li>Salin alamat dari buku alamat dompet atau langsung dari penerima, bukan dari riwayat transaksi.</li>
<li>Cocokkan seluruh alamat, atau setidaknya banyak karakter di awal, tengah, dan akhir.</li>
<li>Untuk jumlah besar, kirim uji coba kecil dulu dan minta penerima mengonfirmasi.</li>
<li>Abaikan transaksi nol atau token asing yang tiba-tiba masuk. Jangan berinteraksi dengannya.</li>
<li>Pakai 2FA berbasis aplikasi atau kunci hardware, bukan SMS, untuk email dan bursa.</li>
<li>Tanyakan ke operator seluler apakah ada pengamanan tambahan untuk penggantian kartu SIM, lalu aktifkan.</li>
<li>Jangan memasang aplikasi bajakan atau ekstensi browser yang tidak jelas di perangkat yang dipakai untuk crypto.</li>
<li>Jangan memamerkan saldo atau jumlah aset di media sosial. Itu menjadikan Anda sasaran.</li>
<li>Periksa izin token setiap beberapa bulan dan cabut yang tidak dipakai.</li>
<li>Kalau ada yang terasa aneh, berhenti dulu. Penipu mengandalkan kepanikan dan kecepatan.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak ada kebiasaan yang membuat Anda kebal. Tujuannya membuat Anda jauh lebih sulit ditipu daripada rata-rata orang, sehingga penipu beralih ke sasaran lain. Kalau perangkat Anda sudah terinfeksi malware, jangan lanjutkan transaksi di perangkat itu. Dari perangkat yang bersih, pindahkan aset ke dompet dengan seed baru.</div>` },
      ],
      kuis: [
        { tanya: 'Anda mencari "MetaMask" di Google. Hasil teratas berlabel "Bersponsor" dan tampilannya persis situs asli. Apa yang tepat?',
          pilihan: ['Lewati iklan itu dan buka situs resmi dari bookmark atau tautan di dokumentasi resmi', 'Klik saja, karena semua iklan sudah diperiksa Google', 'Klik dan pasang dulu, periksa belakangan', 'Unduh dari situs mana saja asalkan namanya MetaMask'],
          jelas: 'Siapa pun bisa membeli iklan, dan situs palsu sering muncul di atas situs asli. Bookmark menghilangkan risiko salah klik.' },
        { tanya: 'Situs "klaim airdrop" meminta tanda tangan. Pop-up dompet menunjukkan Permit untuk USDC dengan jumlah tak terbatas, tanpa biaya gas. Apa yang tepat?',
          pilihan: ['Tolak; tanda tangan itu memberi izin memindahkan USDC Anda meski tidak memakai gas', 'Setujui, karena tanda tangan tanpa gas tidak bisa memindahkan aset', 'Setujui, karena klaim airdrop memang selalu meminta izin tak terbatas', 'Setujui sekarang, lalu cabut izinnya minggu depan'],
          jelas: 'Permit setara approve. Penipu bisa memakainya dalam hitungan menit, jauh sebelum Anda sempat mencabut apa pun.' },
        { tanya: 'Anda bertanya di Discord sebuah proyek. Tak lama, akun bernama "Admin Support" mengirim DM berisi tautan untuk "memperbaiki dompet". Apa yang tepat?',
          pilihan: ['Abaikan dan laporkan; admin asli tidak memulai DM dan tidak meminta Anda menyambungkan dompet ke situs perbaikan', 'Ikuti tautannya, karena ia memakai logo resmi proyek', 'Ikuti tautannya asalkan tidak diminta seed phrase', 'Balas dengan screenshot saldo supaya ia bisa membantu lebih cepat'],
          jelas: 'Nama dan logo mudah ditiru. Pertanyaan di grup publik justru memberi tahu penipu siapa yang sedang bingung.' },
        { tanya: 'Kenalan dari aplikasi kencan mengajak Anda trading di platform yang belum pernah Anda dengar. Saldo Anda di sana naik pesat, tetapi saat mau menarik, Anda diminta membayar "pajak" 20% dulu. Apa yang terjadi?',
          pilihan: ['Pig butchering; hentikan setoran, karena "pajak" itu lapisan penipuan berikutnya', 'Prosedur wajar; bayar pajaknya karena keuntungannya jauh lebih besar', 'Minta keringanan pajak supaya lebih murah', 'Setor lebih banyak supaya status akun naik dan pajaknya hilang'],
          jelas: 'Keuntungan di layar platform palsu hanyalah angka. Setiap pembayaran tambahan hanya menambah kerugian.' },
        { tanya: 'Setelah menjadi korban penipuan, Anda dihubungi akun yang mengaku "tim pemulihan blockchain" dan bisa mengembalikan dana dengan biaya di muka. Apa yang tepat?',
          pilihan: ['Tolak; itu recovery scam, dan laporan resmi ke polisi atau bursa tidak memungut biaya di muka', 'Bayar, karena peluang dana kembali lebih penting', 'Bayar setengah dulu sebagai tanda jadi', 'Berikan seed phrase supaya mereka bisa melacak dana'],
          jelas: 'Penipu sering mengincar korban yang sama dua kali. Tidak ada pihak yang bisa membalikkan transaksi blockchain dengan imbalan biaya di muka.' },
        { tanya: 'Anda hendak mengirim USDT ke teman. Di riwayat transaksi ada alamat yang awal dan akhirnya sama dengan alamat teman Anda, dan alamat itu baru saja mengirim 0 USDT ke Anda. Apa yang tepat?',
          pilihan: ['Salin alamat langsung dari teman atau buku alamat, cocokkan seluruh karakter, lalu kirim uji coba kecil', 'Salin dari riwayat, karena alamat itu sudah pernah bertransaksi dengan Anda', 'Cukup cocokkan empat karakter awal dan akhir', 'Kirim semua sekaligus supaya hemat biaya'],
          jelas: 'Transaksi 0 dari alamat mirip adalah ciri khas address poisoning. Penipu berharap Anda menyalin alamat palsunya dari riwayat.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3, ISU KEAMANAN SMART CONTRACT
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'keamanan-smart-contract', judul: 'Isu Keamanan Smart Contract',
      ringkas: 'Celah yang paling sering menguras protokol DeFi, dari reentrancy sampai kunci admin, dan kenapa status "sudah diaudit" bukan jaminan aman.',
      pelajaran: [
        { judul: 'Reentrancy & pola checks-effects-interactions', isi: `
<h3>Konsepnya</h3>
<p><b>Smart contract</b> adalah program yang berjalan di blockchain dan sering memegang uang sungguhan. Ada tiga hal yang membuatnya berbeda dari aplikasi biasa. Kodenya bisa dibaca siapa saja, termasuk peretas. Siapa pun bisa memanggil fungsinya. Dan setelah dipasang, bug tidak bisa ditambal diam-diam seperti aplikasi di HP.</p>
<p><b>Reentrancy</b> ("masuk kembali") adalah salah satu celah tertua dan paling terkenal. Celah ini muncul ketika kontrak mengirim uang ke pihak luar <i>sebelum</i> memperbarui catatannya sendiri. Kalau penerimanya ternyata kontrak jahat, kontrak itu bisa masuk kembali dan memanggil fungsi yang sama, sebelum saldonya sempat dikurangi.</p>

<h3>Cara kerjanya</h3>
<p>Bayangkan ATM yang mengeluarkan uang dulu dan baru mencatat saldo belakangan. Kalau Anda bisa menekan tombol tarik berulang kali di tengah proses, ATM terus membayar dari saldo yang belum berkurang. Di Ethereum, saat sebuah kontrak mengirim ETH ke kontrak lain, kontrak penerima otomatis menjalankan kodenya sendiri. Di situlah ia menekan tombol tarik lagi.</p>
<pre>
// RENTAN: kirim dulu, catat belakangan
function tarik() public {
    uint jumlah = saldo[msg.sender];
    (bool ok, ) = msg.sender.call{value: jumlah}("");  // penerima bisa memanggil tarik() lagi di sini
    require(ok);
    saldo[msg.sender] = 0;                             // terlambat
}

// AMAN: checks-effects-interactions
function tarik() public {
    uint jumlah = saldo[msg.sender];
    require(jumlah &gt; 0);                              // 1. checks: periksa syarat
    saldo[msg.sender] = 0;                             // 2. effects: perbarui catatan
    (bool ok, ) = msg.sender.call{value: jumlah}("");  // 3. interactions: baru kirim
    require(ok);
}
</pre>
<p>Pola <b>checks-effects-interactions</b> berarti: periksa semua syarat, perbarui catatan internal, baru berinteraksi dengan pihak luar. Kalau penyerang mencoba masuk kembali, saldonya sudah nol dan pemeriksaan pertama gagal. Pengembang biasanya menambah lapis kedua berupa <i>reentrancy guard</i>, semacam kunci yang menolak fungsi dipanggil lagi selama panggilan pertama belum selesai. Pustaka OpenZeppelin menyediakannya dengan nama nonReentrant.</p>

<h3>Contoh</h3>
<p><b>The DAO, Juni 2016.</b> The DAO adalah dana investasi bersama di Ethereum yang mengumpulkan ETH senilai sekitar $150 juta. Fungsi penarikannya mengirim ETH sebelum memperbarui saldo. Penyerang memanfaatkannya untuk menyedot sekitar 3,6 juta ETH, hampir sepertiga dana The DAO. Komunitas Ethereum lalu memilih hard fork pada Juli 2016 untuk mengembalikan dana tersebut. Sebagian komunitas menolak dan tetap memakai rantai lama, yang kini dikenal sebagai Ethereum Classic.</p>
<p>Celah ini belum punah. Pada Juli 2023, bug di beberapa versi lama compiler Vyper membuat kunci anti-reentrancy tidak bekerja, dan beberapa pool di Curve dikuras dengan kerugian puluhan juta dolar. Kodenya sudah memasang pengaman, tetapi alat yang menerjemahkan kode itu bermasalah.</p>

<h3>Yang harus Anda lakukan</h3>
<ul>
<li><b>Sebagai pengguna:</b> Anda tidak perlu membaca kode. Dahulukan protokol yang sudah lama berjalan, diaudit, dan punya program bug bounty. Jangan menaruh dana besar di protokol atau fork yang baru diluncurkan.</li>
<li><b>Sebagai pengembang pemula:</b> biasakan urutan checks-effects-interactions di setiap fungsi yang memindahkan dana. Pakai pustaka yang teruji seperti OpenZeppelin, dan tulis tes yang sengaja mencoba masuk kembali.</li>
</ul>
<div class="batas-berlaku"><b>Batas & risiko.</b> Reentrancy punya varian yang lebih halus, misalnya masuk kembali lewat fungsi lain, atau lewat fungsi baca yang memberi data usang saat kontrak sedang di tengah proses. Pola checks-effects-interactions mengurangi risikonya, tetapi tidak menjamin aman dari semua varian. Contoh kode di atas disederhanakan untuk belajar, bukan untuk dipakai langsung.</div>` },

        { judul: 'Oracle, flash loan, overflow, kunci admin & proxy', isi: `
<h3>Konsepnya</h3>
<p>Tidak semua celah berupa salah ketik dalam kode. Banyak kontrak bekerja persis seperti yang ditulis, tetapi asumsinya keliru: tentang harga, tentang batas angka, atau tentang siapa yang boleh menekan tombol tertentu. Pelajaran ini membahas lima sumber masalah yang paling sering muncul.</p>

<h3>Cara kerjanya</h3>
<p><b>1. Manipulasi oracle.</b> Kontrak tidak tahu harga di dunia luar. Ia bergantung pada <b>oracle</b>, yaitu sumber data harga. Kalau oracle hanya membaca harga dari satu pool DEX kecil, penyerang bisa menggeser harga pool itu sesaat dengan transaksi besar. Protokol pinjaman lalu mengira jaminan penyerang jauh lebih mahal dan meminjamkan dana melebihi nilai sebenarnya.</p>
<p><b>2. Flash loan.</b> Ini pinjaman tanpa jaminan yang harus dilunasi di dalam transaksi yang sama. Kalau tidak dilunasi, seluruh transaksi batal seolah tak pernah terjadi. Flash loan sendiri bukan celah. Masalahnya, siapa pun jadi bisa memegang modal ratusan juta dolar selama satu transaksi, sehingga celah kecil bisa dimanfaatkan dalam skala besar.</p>
<p><b>3. Integer overflow.</b> Setiap angka di kontrak punya batas maksimum. Kalau terlampaui, angkanya "berputar" kembali dari nol, seperti odometer mobil tua. Sebelum Solidity versi 0.8 (dirilis Desember 2020), bahasa ini tidak memeriksanya secara otomatis, sehingga pengembang harus memakai pustaka seperti SafeMath. Sejak versi 0.8, perhitungan yang meluap otomatis gagal, kecuali di blok yang sengaja ditandai unchecked.</p>
<p><b>4. Kontrol akses & kunci admin.</b> Fungsi penting seperti mencetak token, mengubah parameter, atau menarik dana harus dibatasi hanya untuk pihak tertentu. Lupa memasang pembatas berarti siapa pun bisa memanggilnya. Kalaupun pembatasnya ada, kunci admin yang disimpan di satu dompet tetap menjadi satu titik kegagalan.</p>
<p><b>5. Upgradeable proxy.</b> Banyak protokol memakai kontrak perantara (proxy). Pengguna berinteraksi dengan alamat proxy yang tetap, sementara logikanya ada di kontrak lain yang bisa diganti admin. Ini memudahkan perbaikan bug. Tetapi artinya, kode yang diaudit hari ini bisa diganti besok. Risikonya: admin jahat atau kuncinya dicuri, kontrak logika yang lupa diinisialisasi, dan data yang saling menimpa saat pembaruan.</p>

<h3>Contoh</h3>
<ul>
<li><b>Mango Markets, Oktober 2022:</b> penyerang menaikkan harga token MNGO di pasar yang tipis, lalu meminjam lebih dari $100 juta dengan jaminan yang nilainya sudah digelembungkan.</li>
<li><b>Beanstalk, April 2022:</b> penyerang memakai flash loan untuk sesaat menguasai suara mayoritas tata kelola, lalu meloloskan proposal yang mengirim dana protokol ke dirinya.</li>
<li><b>BeautyChain (BEC), April 2018:</b> overflow dalam fungsi transfer massal membuat penyerang bisa menciptakan token dalam jumlah luar biasa besar. Beberapa bursa menghentikan perdagangannya.</li>
<li><b>Parity, November 2017:</b> seorang pengguna bisa mengambil alih lalu menghancurkan kontrak pustaka yang dipakai banyak dompet multisig, karena fungsi penting di dalamnya tidak dibatasi. Lebih dari 500 ribu ETH terkunci selamanya.</li>
</ul>

<h3>Yang harus Anda lakukan</h3>
<ul>
<li>Cari tahu oracle yang dipakai protokol. Oracle terdesentralisasi seperti Chainlink, atau harga rata-rata berbasis waktu (TWAP), lebih sulit digeser daripada harga spot satu pool.</li>
<li>Periksa siapa pemegang kunci admin. Multisig dengan beberapa penandatangan yang dikenal lebih baik daripada satu dompet.</li>
<li>Cari tahu apakah ada <b>timelock</b>, yaitu jeda wajib, misalnya 24 sampai 48 jam, sebelum perubahan kontrak berlaku. Jeda ini memberi Anda waktu keluar kalau ada perubahan mencurigakan.</li>
<li>Di Etherscan, kontrak proxy biasanya punya tab "Read as Proxy". Tanda itu biasanya berarti logikanya bisa diganti, walau ada jenis proxy yang tidak bisa diperbarui. Cek juga siapa adminnya.</li>
</ul>
<div class="batas-berlaku"><b>Batas & risiko.</b> Informasi tentang admin, oracle, dan timelock kadang hanya ada di dokumentasi proyek dan belum tentu diperbarui. Protokol yang tidak bisa diubah sama sekali juga punya kekurangan: kalau ada bug, tidak bisa diperbaiki. Tidak ada desain tanpa kompromi. Yang Anda cari adalah kompromi yang terbuka dan masuk akal.</div>` },

        { judul: 'Audit bukan jaminan: pelajaran dari peretasan besar', isi: `
<h3>Konsepnya</h3>
<p>Ada tiga lapis pemeriksaan yang umum dipakai protokol:</p>
<ul>
<li><b>Audit:</b> tim ahli keamanan membaca dan menguji kode pada satu versi tertentu, lalu menerbitkan laporan temuan.</li>
<li><b>Bug bounty:</b> hadiah bagi peretas etis yang menemukan dan melaporkan celah, alih-alih memanfaatkannya. Platform yang banyak dipakai adalah Immunefi. Pada 2022, Wormhole membayar $10 juta kepada peneliti yang melaporkan celah pada kontrak proxy-nya.</li>
<li><b>Verifikasi formal:</b> pembuktian matematis bahwa kode selalu memenuhi aturan tertentu, misalnya "total saldo pengguna tidak pernah melebihi total setoran".</li>
</ul>
<p>Ketiganya berguna. Tetapi tidak satu pun berarti "pasti aman".</p>

<h3>Cara kerjanya</h3>
<p>Audit adalah foto satu momen. Laporannya hanya berlaku untuk kode dan cakupan yang diperiksa. Kalau protokol menambah fitur setelah audit, bagian baru itu belum tentu diperiksa. Audit juga tidak memeriksa hal di luar kontrak: siapa memegang kunci, bagaimana server dijaga, atau apakah situs webnya bisa disusupi. Verifikasi formal hanya membuktikan aturan yang ditulis. Kalau aturannya kurang lengkap, buktinya pun kurang lengkap.</p>

<h3>Contoh</h3>
<table>
<tr><th>Kasus</th><th>Kerugian</th><th>Penyebab</th></tr>
<tr><td>Ronin (bridge Axie Infinity), Maret 2022</td><td>Sekitar $600 juta (173.600 ETH dan 25,5 juta USDC)</td><td>Penyerang menguasai 5 dari 9 kunci validator: empat milik Sky Mavis, satu lagi lewat izin lama yang lupa dicabut. Pencurian baru ketahuan sekitar enam hari kemudian. FBI mengaitkannya dengan kelompok Lazarus dari Korea Utara.</td></tr>
<tr><td>Wormhole (bridge), Februari 2022</td><td>Sekitar $320 juta (120.000 wETH)</td><td>Celah verifikasi tanda tangan di sisi Solana membuat penyerang bisa mencetak wETH tanpa jaminan. Jump Crypto kemudian menutup kekurangannya.</td></tr>
<tr><td>Euler Finance, Maret 2023</td><td>Sekitar $197 juta</td><td>Fungsi baru dari sebuah pembaruan tidak memeriksa kesehatan posisi pinjaman, lalu dimanfaatkan bersama flash loan. Euler sudah diaudit berkali-kali, termasuk pembaruan itu. Penyerang kemudian mengembalikan hampir seluruh dana.</td></tr>
<tr><td>Bybit (bursa), 21 Februari 2025</td><td>Sekitar $1,5 miliar, kebanyakan ETH</td><td>Komputer seorang pengembang Safe{Wallet} dibobol, lalu antarmuka web Safe disusupi kode jahat yang menyasar Bybit. Penandatangan multisig melihat transaksi yang tampak normal, padahal isinya mengganti logika dompet. FBI mengaitkannya dengan Korea Utara (Lazarus). Ini disebut sebagai peretasan crypto terbesar sampai saat itu.</td></tr>
</table>
<p>Perhatikan polanya. Hanya Wormhole dan Euler yang berupa bug kode. Ronin dan Bybit jebol di sisi operasional: kunci yang terkumpul di sedikit tangan, dan penandatangan yang menyetujui sesuatu yang tidak bisa mereka periksa sendiri. Audit kontrak tidak akan menemukan masalah seperti itu.</p>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li><b>Baca ringkasan laporan audit.</b> Cek siapa auditornya, tanggalnya, cakupannya, dan apakah temuan kritis sudah diperbaiki.</li>
<li><b>Cek bug bounty.</b> Hadiah besar yang aktif menandakan protokol serius menjaga kodenya.</li>
<li><b>Lihat umur dan rekam jejak.</b> Protokol yang bertahun-tahun memegang dana besar tanpa insiden sudah teruji oleh waktu. Riwayat peretasan bisa dicek di DefiLlama (menu Hacks) atau rekt.news.</li>
<li><b>Batasi porsi per protokol.</b> Jangan menaruh seluruh aset di satu tempat, seaman apa pun kelihatannya.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Label "sudah diaudit" sering dipakai sebagai alat pemasaran. Ada laporan audit palsu, dan ada laporan asli untuk versi kode yang sudah tidak dipakai. Angka kerugian di tabel adalah nilai dolar sekitar waktu kejadian menurut laporan publik, dan bisa sedikit berbeda antarsumber.</div>` },
      ],
      kuis: [
        { tanya: 'Sebuah kontrak mengirim ETH ke pengguna lebih dulu, baru kemudian mengurangi saldonya. Celah apa yang terbuka?',
          pilihan: ['Reentrancy; penerima bisa memanggil fungsi tarik lagi sebelum saldonya dikurangi', 'Integer overflow', 'Manipulasi oracle', 'Tidak ada, selama kontraknya sudah diaudit'],
          jelas: 'Urutan kirim-dulu-catat-belakangan adalah pola celah The DAO (2016). Kontrak penerima bisa menjalankan kodenya sendiri di tengah proses pengiriman.' },
        { tanya: 'Urutan yang benar menurut pola checks-effects-interactions adalah…',
          pilihan: ['Periksa syarat, perbarui catatan internal, baru berinteraksi dengan pihak luar', 'Kirim dana, periksa syarat, lalu perbarui catatan', 'Perbarui catatan, kirim dana, lalu periksa syarat', 'Periksa syarat, kirim dana, lalu perbarui catatan'],
          jelas: 'Dengan catatan diperbarui sebelum mengirim, penyerang yang mencoba masuk kembali mendapati saldonya sudah nol.' },
        { tanya: 'Sebuah protokol pinjaman baru mengambil harga jaminan dari satu pool DEX kecil. Apa risikonya?',
          pilihan: ['Harga pool bisa digeser sesaat, misalnya dengan modal flash loan, sehingga penyerang meminjam melebihi nilai jaminannya', 'Tidak ada risiko, karena harga DEX selalu akurat', 'Pengguna harus membayar gas lebih mahal', 'Protokol tidak bisa menerima stablecoin'],
          jelas: 'Pool kecil mudah digerakkan dengan transaksi besar. Oracle yang lebih kuat memakai banyak sumber atau harga rata-rata berbasis waktu.' },
        { tanya: 'Apa itu flash loan?',
          pilihan: ['Pinjaman tanpa jaminan yang harus dilunasi dalam transaksi yang sama; kalau tidak, seluruh transaksi batal', 'Pinjaman berbunga tinggi yang wajib dilunasi dalam 24 jam', 'Nama lain dari celah reentrancy', 'Kredit bank untuk membeli crypto dengan cepat'],
          jelas: 'Flash loan bukan celah. Ia memberi siapa pun modal besar selama satu transaksi, sehingga memperbesar dampak celah lain.' },
        { tanya: 'Sebuah protokol memakai upgradeable proxy. Kunci adminnya dipegang satu dompet, tanpa timelock. Apa artinya bagi Anda?',
          pilihan: ['Pemegang kunci itu bisa mengganti logika kontrak kapan saja; kalau kuncinya dicuri, dana pengguna ikut terancam', 'Kontrak itu otomatis lebih aman karena bisa diperbarui', 'Dana Anda terlindungi karena proxy menyimpan salinan cadangan', 'Tidak ada pengaruhnya selama kontrak sudah diaudit'],
          jelas: 'Kode yang diaudit hari ini bisa diganti besok. Multisig dan timelock memberi pengguna perlindungan dan waktu untuk keluar.' },
        { tanya: 'Bybit kehilangan sekitar $1,5 miliar pada Februari 2025 walau memakai dompet multisig. Pelajaran terpentingnya?',
          pilihan: ['Penandatangan menyetujui transaksi yang tidak bisa mereka periksa sendiri, lewat antarmuka yang sudah disusupi', 'Kontrak multisig Safe punya bug reentrancy', 'Multisig selalu lebih rawan daripada dompet satu kunci', 'Jaringan Ethereum terkena serangan 51%'],
          jelas: 'Kontraknya bekerja sesuai rancangan. Yang jebol adalah rantai operasional: komputer pengembang, situs web, dan kebiasaan menandatangani tanpa bisa memverifikasi isi transaksi.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4, KEAMANAN AKUN BURSA & OPERASIONAL
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'keamanan-bursa', judul: 'Keamanan Akun Bursa & Operasional',
      ringkas: 'Cara mengunci akun bursa secara berlapis, lalu cara menilai apakah bursanya sendiri layak dipercaya.',
      pelajaran: [
        { judul: 'Mengunci akun bursa: 2FA, whitelist & email khusus', isi: `
<h3>Konsepnya</h3>
<p>Di bursa, Anda tidak memegang kunci privat. Yang Anda pegang adalah akun: email, kata sandi, dan kode verifikasi. Siapa pun yang berhasil masuk ke akun itu bisa menjual aset Anda dan menariknya ke alamat mereka. Jadi keamanan akun bursa adalah soal membuat pintu masuknya berlapis.</p>

<h3>Cara kerjanya</h3>
<p><b>Autentikasi dua faktor (2FA)</b> berarti login butuh dua hal: sesuatu yang Anda tahu (kata sandi) dan sesuatu yang Anda pegang (HP atau kunci fisik). Ada tiga jenis yang umum, dengan kekuatan berbeda:</p>
<table>
<tr><th>Jenis 2FA</th><th>Cara kerja</th><th>Kelemahan</th></tr>
<tr><td>SMS</td><td>Kode dikirim ke nomor HP</td><td>Bisa dicuri lewat SIM swap atau penyadapan</td></tr>
<tr><td>Aplikasi authenticator</td><td>Kode 6 digit dibuat di HP Anda dan berganti tiap 30 detik, misalnya lewat Google Authenticator atau Microsoft Authenticator</td><td>Masih bisa Anda ketik ke situs palsu kalau tertipu</td></tr>
<tr><td>Kunci hardware atau passkey</td><td>Perangkat fisik atau passkey di HP yang terikat pada alamat situs asli</td><td>Situs palsu tidak bisa memakainya; masalah muncul kalau perangkat hilang tanpa cadangan</td></tr>
</table>
<p><b>Whitelist penarikan.</b> Penarikan hanya boleh ke alamat yang sudah Anda daftarkan. Menambah alamat baru butuh verifikasi tambahan, dan di banyak bursa ada masa tunggu sebelum alamat itu bisa dipakai. Kalau penyerang berhasil masuk, ia tidak bisa langsung menarik ke alamatnya sendiri.</p>
<p><b>Anti-phishing code.</b> Banyak bursa besar mengizinkan Anda memasang kode rahasia pilihan sendiri. Kode itu muncul di setiap email resmi dari bursa. Email "dari bursa" tanpa kode itu hampir pasti palsu.</p>
<p><b>Email khusus.</b> Email adalah kunci untuk mengatur ulang kata sandi. Siapa yang menguasai email Anda bisa menguasai akun bursa Anda. Pakai alamat email yang hanya untuk bursa, tidak pernah dipakai mendaftar di situs lain, dan dilindungi 2FA sendiri.</p>

<h3>Contoh</h3>
<p>Andi memakai kata sandi yang sama untuk bursa dan sebuah toko online. Data toko itu bocor. Penjahat mencoba pasangan email dan kata sandi tersebut di berbagai bursa. Teknik ini disebut <i>credential stuffing</i>. Andi memakai 2FA SMS, dan penjahat sudah menyiapkan SIM swap. Dalam satu malam, saldonya habis.</p>
<p>Seandainya Andi memakai kata sandi unik, kata sandi curian itu tidak berguna. Seandainya ia memakai authenticator, SIM swap tidak berguna. Seandainya whitelist aktif, penarikan ke alamat baru tertahan dan Andi punya waktu untuk bereaksi. Setiap lapis menutup satu celah.</p>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li>Buat email khusus untuk bursa, lengkap dengan 2FA.</li>
<li>Pakai kata sandi unik dan panjang untuk setiap akun. Pengelola kata sandi membantu mengingatnya.</li>
<li>Ganti 2FA SMS dengan aplikasi authenticator. Kalau bursa mendukung, pakai kunci hardware atau passkey.</li>
<li>Simpan kode cadangan 2FA secara offline, terpisah dari HP.</li>
<li>Aktifkan whitelist penarikan dan anti-phishing code.</li>
<li>Selalu buka bursa dari aplikasi resmi atau bookmark, bukan dari tautan di email.</li>
<li>Periksa daftar perangkat yang sedang login dan riwayat aktivitas secara berkala.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Semua lapis ini melindungi akun Anda dari penyerang. Tidak satu pun melindungi Anda kalau bursanya sendiri bangkrut atau membekukan penarikan; itu dibahas di pelajaran berikutnya. Ingat juga, kalau HP berisi authenticator hilang dan kode cadangan tidak ada, memulihkan akun bisa makan waktu berhari-hari dan butuh verifikasi identitas ulang.</div>` },

        { judul: 'Proof of reserves, menilai bursa & menyebar risiko', isi: `
<h3>Konsepnya</h3>
<p>Akun yang terkunci rapat tetap tidak berguna kalau bursanya runtuh. Bursa bisa gagal karena diretas, salah kelola, menyalahgunakan dana nasabah, atau dibekukan regulator. Anda tidak bisa mengendalikan hal itu. Yang bisa Anda lakukan adalah memilih bursa dengan cermat, mengenali tanda bahaya lebih awal, dan tidak menaruh semua aset di satu tempat.</p>

<h3>Cara kerjanya</h3>
<p><b>Proof of reserves (bukti cadangan)</b> adalah cara bursa menunjukkan bahwa ia benar-benar memegang aset nasabah. Versi yang lengkap punya dua bagian. Pertama, daftar alamat dompet bursa yang saldonya bisa dicek siapa pun di blockchain. Kedua, daftar kewajiban kepada nasabah yang disusun dalam struktur bernama <i>Merkle tree</i>, sehingga setiap nasabah bisa memastikan saldonya ikut dihitung tanpa melihat saldo orang lain. Kalau aset lebih besar daripada kewajiban, setidaknya bursa itu tidak kekurangan cadangan pada saat itu.</p>
<p>Keterbatasannya perlu dipahami. Proof of reserves hanya potret satu momen. Aset bisa dipinjam sebentar sebelum potret diambil. Utang bursa di luar blockchain tidak terlihat. Dan tanpa daftar kewajiban, daftar alamat dompet saja tidak membuktikan apa-apa.</p>

<h3>Tanda-tandanya</h3>
<ul>
<li>Penarikan ditunda dengan alasan "pemeliharaan" yang berlarut-larut, atau batas penarikan tiba-tiba diturunkan.</li>
<li>Bursa menawarkan bunga simpanan yang jauh di atas pasar.</li>
<li>Cadangan bursa didominasi token buatan bursa itu sendiri.</li>
<li>Arus dana keluar dari bursa melonjak di data on-chain, misalnya di CryptoQuant atau dasbor transparansi bursa di DefiLlama.</li>
<li>Petinggi mundur mendadak, atau komunikasi resmi berubah menjadi diam dan jawaban yang mengambang.</li>
</ul>

<h3>Contoh</h3>
<p>Celsius membekukan penarikan pada 12 Juni 2022 dengan alasan "kondisi pasar ekstrem", lalu bangkrut sebulan kemudian. FTX hanya butuh enam hari dari laporan media pertama tentang neraca Alameda, pada 2 November 2022, sampai menghentikan penarikan. Neraca itu banyak berisi FTT, token buatan FTX sendiri. Dalam kedua kasus, nasabah yang menunggu kepastian terlambat keluar.</p>
<p>Sebaliknya, saat Bybit kehilangan sekitar $1,5 miliar pada Februari 2025, bursa itu tetap memproses penarikan nasabah dan menutup kekurangan cadangannya dalam hitungan hari. Cara bursa menangani krisis adalah informasi penting saat Anda menilainya.</p>

<h3>Yang harus Anda lakukan</h3>
<ol>
<li><b>Cek izin.</b> Untuk pengguna di Indonesia, pastikan bursa terdaftar dan berizin di OJK, yang mengawasi aset kripto sejak Januari 2025.</li>
<li><b>Cek proof of reserves:</b> apakah mencakup kewajiban, seberapa sering diterbitkan, dan apakah diperiksa pihak independen.</li>
<li><b>Pelajari rekam jejak:</b> pernah diretas atau tidak, dan bagaimana nasabah diperlakukan setelahnya.</li>
<li><b>Sebar risiko.</b> Simpan di bursa hanya dana yang memang dipakai untuk trading, dan jangan bergantung pada satu bursa saja.</li>
<li><b>Pindahkan simpanan jangka panjang</b> ke dompet sendiri, dengan cara yang dibahas di kursus Self Custody.</li>
<li><b>Bertindak lebih awal.</b> Saat tanda bahaya muncul, tarik dulu dan cari tahu kemudian. Biaya penarikan jauh lebih murah daripada dana yang tertahan bertahun-tahun.</li>
</ol>
<div class="batas-berlaku"><b>Batas & risiko.</b> Izin regulator dan proof of reserves menurunkan risiko, tetapi tidak menghapusnya. Bursa yang terdaftar tetap bisa diretas, seperti Indodax pada September 2024. Tanda bahaya juga bisa muncul karena rumor yang ternyata keliru. Karena itu, lebih baik menyebar risiko sejak awal daripada harus menebak kapan waktu yang tepat untuk lari.</div>` },
      ],
      kuis: [
        { tanya: 'Bursa Anda menawarkan tiga pilihan 2FA: SMS, aplikasi authenticator, dan kunci keamanan hardware. Urutan dari yang paling aman adalah…',
          pilihan: ['Kunci hardware, lalu aplikasi authenticator, lalu SMS', 'SMS, lalu aplikasi authenticator, lalu kunci hardware', 'Aplikasi authenticator, lalu SMS, lalu kunci hardware', 'Ketiganya sama kuatnya'],
          jelas: 'Kunci hardware terikat pada alamat situs asli, jadi situs palsu tidak bisa memakainya. Kode authenticator masih bisa diketik ke situs palsu, tetapi tidak bisa dicuri lewat SIM swap. SMS paling lemah karena rentan terhadap keduanya.' },
        { tanya: 'Anda menerima email "dari bursa" yang meminta login untuk verifikasi darurat. Email itu tidak memuat anti-phishing code yang Anda pasang. Apa yang tepat?',
          pilihan: ['Anggap palsu; buka aplikasi atau situs bursa langsung dari bookmark untuk mengecek', 'Klik tautannya, karena logo dan alamat pengirimnya terlihat resmi', 'Balas email itu dan tanyakan apakah benar dari bursa', 'Login lewat tautan itu, lalu segera ganti kata sandi'],
          jelas: 'Anti-phishing code dibuat untuk kasus seperti ini. Email resmi selalu memuatnya; penipu tidak tahu kode Anda.' },
        { tanya: 'Penyerang berhasil login ke akun bursa Anda, tetapi whitelist penarikan sudah aktif. Apa artinya?',
          pilihan: ['Ia tidak bisa langsung menarik ke alamatnya sendiri, karena alamat baru butuh verifikasi dan masa tunggu', 'Whitelist otomatis mengembalikan dana yang sudah dicuri', 'Ia tetap bisa menarik ke alamat mana pun tanpa hambatan', 'Akun Anda otomatis terhapus'],
          jelas: 'Whitelist tidak mencegah orang masuk, tetapi menahan jalan keluar dana. Masa tunggu memberi Anda waktu mengamankan akun.' },
        { tanya: 'Sebuah bursa menerbitkan "proof of reserves" yang hanya berisi daftar alamat dompetnya, tanpa data kewajiban kepada nasabah. Bagaimana menilainya?',
          pilihan: ['Belum cukup; tanpa data kewajiban, Anda tidak tahu apakah aset itu menutupi seluruh saldo nasabah', 'Sudah lengkap, karena saldo di blockchain tidak bisa dipalsukan', 'Justru lebih baik, karena lebih sederhana', 'Tidak penting, karena bursa besar tidak mungkin bangkrut'],
          jelas: 'Aset besar tidak berarti apa-apa kalau kewajibannya lebih besar. Proof of reserves yang berguna membandingkan keduanya.' },
        { tanya: 'Bursa tempat Anda menyimpan dana menunda penarikan selama berhari-hari "karena pemeliharaan", sementara media sosial ramai membicarakannya. Apa yang tepat?',
          pilihan: ['Anggap tanda bahaya: tarik apa yang masih bisa ditarik dan jangan menyetor dana baru', 'Setor lebih banyak, karena harga di bursa itu sedang murah', 'Tunggu saja, karena pemeliharaan lama itu hal biasa', 'Pindahkan saldo ke produk bunga tinggi di bursa yang sama'],
          jelas: 'Celsius dan FTX sama-sama didahului penundaan penarikan. Nasabah yang bergerak lebih awal punya peluang keluar lebih besar.' },
        { tanya: 'Cara menyebar risiko bursa yang paling masuk akal adalah…',
          pilihan: ['Menyimpan di bursa hanya dana untuk trading, menaruh simpanan jangka panjang di dompet sendiri, dan tidak bergantung pada satu bursa', 'Menaruh semua aset di bursa terbesar karena pasti aman', 'Membagi aset ke sepuluh bursa kecil yang belum berizin', 'Menyimpan semua di bursa, asalkan 2FA aktif'],
          jelas: 'Bursa sebesar apa pun bisa gagal. Porsi di bursa sebaiknya sebatas yang dipakai, dan bursa yang dipilih tetap perlu berizin dan punya rekam jejak baik.' },
      ] },
  ],
});
