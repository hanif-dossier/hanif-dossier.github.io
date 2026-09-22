// kelas/metode.js, data kelas kategori Metode Riset Hanif Dossier.
// Pindahan dari halaman Modul (9 modul kerangka arsitektur Web3), disusun ulang
// mengikuti struktur kelas: kategori berisi kursus, kursus berisi pelajaran dan kuis.
// Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'metode', urut: 11, nama: 'Metode Riset Hanif Dossier', warna: '#3f4a3a',
  ringkas: 'Kerangka yang dipakai menyusun dossier dan screening harian: urutan berpikir dari kebutuhan ke token, mencari jantung tiap sektor, menghitung nilai intrinsik, membaca struktur suplai dan siklus, sampai menilai sebuah narasi dengan skor.',
  kursus: [
    { kode: 'urutan-riset', judul: 'Urutan Berpikir',
      ringkas: 'Kenapa analisis yang dimulai dari token selalu menyimpulkan hal yang salah, dan cara menempatkan sebuah proyek di lapisan yang benar sebelum membaca angkanya.',
      pelajaran: [
        { judul: 'Langkah −1: kebutuhan dulu, baru token', isi: `
<h3>Konsepnya</h3>
<p>Sebuah token tidak punya nilai karena ia ada. Ia punya nilai kalau ada <b>kebutuhan</b> yang dipenuhi protokolnya, dan kalau token itu memang perlu ada untuk memenuhi kebutuhan itu. Karena itu analisis tidak pernah dimulai dari harga, dari grafik, atau bahkan dari whitepaper, ia dimulai dari pertanyaan: <em>siapa yang butuh ini, dan seberapa besar kebutuhannya?</em></p>
<h3>Istilah yang dipakai</h3>
<ol>
<li><b>Tesis</b>: satu kalimat tentang fungsi yang belum selesai di teknologi lama dan disempurnakan oleh teknologi baru. Contoh tesis DeFi 2020: "menukar dan menyimpan dana tanpa perantara adalah fungsi yang tidak selesai di Bitcoin dan disempurnakan smart contract Ethereum."</li>
<li><b>Thesis-driven</b>: memilih aset karena ia mendukung tesis, bukan memilih tesis untuk membenarkan aset yang sudah dibeli.</li>
<li><b>Token-driven</b>: kebalikannya, mulai dari nama koin yang ramai, lalu mencari alasan.</li>
</ol>
<h3>Aturan bacanya: lima langkah, urutannya tidak boleh dibalik</h3>
<ol>
<li><b>Observasi sosial</b>: kebutuhan apa yang sedang muncul? Bukan narasi apa yang sedang ramai.</li>
<li><b>Hipotesis sektor</b>: sektor mana yang akan tumbuh karena kebutuhan itu, dan <em>seberapa besar</em>? Ukur potensinya dengan angka.</li>
<li><b>Peluang</b>: baru sekarang, adakah aset yang benar-benar menangkap pertumbuhan sektor itu? Sering jawabannya "sektornya tumbuh, tapi tokennya tidak ikut", itu temuan yang sah.</li>
<li><b>Eksekusi</b>: soal waktu dan ukuran, dan ini di luar cakupan riset.</li>
<li><b>Pemantauan</b>: apakah tesisnya masih berlaku? Kalau tidak, semua langkah setelahnya gugur.</li>
</ol>
<h3>Contoh</h3>
<p>Dua analisis atas rollup yang sama. Yang mulai dari grafik menyimpulkan "harga sudah turun 90% dari puncak, murah". Yang mulai dari kebutuhan menemukan bahwa fee jaringannya dibayar dalam ETH, mengalir ke treasury DAO, dan tokennya hanya dipakai untuk voting, jadi pertumbuhan jaringan tidak otomatis jadi pertumbuhan token. Dua kesimpulan berlawanan dari data yang sama; yang membedakan adalah titik mulainya.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Langkah −1 menyaring, bukan memilih. Lolos langkah ini hanya berarti tokennya punya alasan untuk ada, belum berarti harganya masuk akal (itu pelajaran Nilai Intrinsik Token) atau strukturnya sehat (pelajaran Struktur Suplai).</div>
<div class="sumber">Sumber kerangka: strategi thesis-driven Multicoin Capital sebagaimana dibahas komunitas Akademi Crypto (Mei 2024); dossier Hanif Dossier Crypto bab "Langkah −1".</div>` },

        { judul: 'Peta arsitektur Web3: di lapisan mana token ini hidup', isi: `
<h3>Konsepnya</h3>
<p>Crypto bukan daftar koin; ia tumpukan lapisan yang saling menumpang. Sebelum membaca satu token, tempatkan dulu proyeknya di lapisan yang benar, karena tiap lapisan punya "jantung" yang berbeda, pesaing yang berbeda, dan cara gagal yang berbeda.</p>
<h3>Empat lapisan, dari atas ke bawah</h3>
<table>
<tr><th>Lapisan</th><th>Isinya</th><th>Yang harus diukur</th><th>Cara gagalnya</th></tr>
<tr><td><b>Aplikasi</b></td><td>DeFi (bursa, lending, stablecoin), RWA, PayFi, game</td><td>Pengguna yang membayar fee; berapa yang sampai ke token</td><td>Pengguna pindah ke pesaing dalam hitungan hari, biaya pindah nol</td></tr>
<tr><td><b>Infrastruktur &amp; data</b></td><td>Oracle, privasi/komputasi terenkripsi, indeks, intelijen on-chain</td><td>Siapa aplikasi yang benar-benar memakainya, dan apakah mereka membayar</td><td>Dipakai luas tapi gratis, nilai mengalir ke pengguna, bukan ke token</td></tr>
<tr><td><b>Skala (L2) &amp; chain khusus</b></td><td>Rollup, app-chain</td><td>Fee sequencer, aktivitas, dan apakah tokennya punya fungsi ekonomi</td><td>Jaringan ramai, token tidak menerima apa-apa</td></tr>
<tr><td><b>Dasar (L1): penyelesaian</b></td><td>Bitcoin, Ethereum, Tron, dan lain-lain</td><td>Keamanan, desentralisasi, siapa membayar validator, biaya menyerang</td><td>Keamanan bergantung pada subsidi inflasi yang suatu hari habis</td></tr>
</table>
<h3>Aturan bacanya</h3>
<ol>
<li><b>Ke bawah:</b> apa yang terjadi pada token ini kalau lapisan di bawahnya goyah? Rollup di atas Ethereum mewarisi keamanan Ethereum, dan juga masalahnya.</li>
<li><b>Ke atas:</b> siapa yang membayar untuk memakai lapisan ini? Kalau jawabannya "belum ada", nilainya sepenuhnya janji.</li>
<li><b>Ke samping:</b> pesaing yang sebenarnya ada di lapisan yang sama, bukan di seluruh pasar. Bursa perpetual bersaing dengan bursa perpetual lain, bukan dengan Bitcoin.</li>
</ol>
<h3>Contoh</h3>
<p>Token intelijen on-chain (lapisan infrastruktur &amp; data) dinilai dengan metrik aplikasi (jumlah pengguna, volume) dan tampak lemah. Dibaca dari lapisannya sendiri, pertanyaannya berubah: siapa yang membayar untuk datanya, dan berapa? Jawabannya mungkin tetap mengecewakan, tapi setidaknya itu pertanyaan yang benar.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Beberapa proyek hidup di dua lapisan (L1 yang juga punya DEX bawaan). Pilih lapisan tempat <em>pendapatannya</em> berasal, bukan tempat pemasarannya.</div>
<div class="sumber">Sumber: peta lapisan yang dipakai katalog riset Hanif Dossier Crypto; pembagian lapisan umum di literatur arsitektur Web3.</div>` },
      ],
      kuis: [
        { tanya: 'Analisis yang benar dimulai dari…',
          pilihan: ['Kebutuhan: siapa yang butuh ini, dan seberapa besar kebutuhannya', 'Grafik harga dan penurunannya dari puncak', 'Whitepaper proyek', 'Nama koin yang sedang ramai dibicarakan'],
          jelas: 'Token punya nilai kalau ada kebutuhan yang dipenuhi protokolnya dan token itu memang perlu ada untuk memenuhinya. Titik mulai inilah yang membedakan dua kesimpulan berlawanan dari data yang sama.' },
        { tanya: '"Thesis-driven" berarti…',
          pilihan: ['Memilih aset karena ia mendukung tesis, bukan mencari tesis untuk membenarkan aset yang sudah dibeli', 'Membeli aset yang paling banyak dibahas', 'Menyusun tesis setelah posisi terbentuk', 'Mengikuti tesis analis terkenal'],
          jelas: 'Kebalikannya token-driven: mulai dari nama koin yang ramai, lalu mencari alasan.' },
        { tanya: 'Dalam lima langkah, kesimpulan "sektornya tumbuh tapi tokennya tidak ikut" adalah…',
          pilihan: ['Temuan yang sah, dan alasan untuk tidak membeli', 'Tanda analisisnya belum selesai', 'Alasan mencari sektor lain yang lebih ramai', 'Kesalahan membaca data'],
          jelas: 'Langkah Peluang memang bisa berakhir tanpa aset yang layak. Menemukan itu lebih berharga daripada memaksakan satu nama.' },
        { tanya: 'Pesaing sebenarnya sebuah token ada di…',
          pilihan: ['Lapisan yang sama, bukan di seluruh pasar', 'Seluruh pasar crypto', 'Lapisan di bawahnya', 'Sektor dengan kapitalisasi serupa'],
          jelas: 'Bursa perpetual bersaing dengan bursa perpetual lain, bukan dengan Bitcoin.' },
        { tanya: 'Proyek yang hidup di dua lapisan sebaiknya dibaca dari…',
          pilihan: ['Lapisan tempat pendapatannya berasal, bukan tempat pemasarannya', 'Lapisan yang paling tinggi', 'Lapisan yang paling banyak pesaingnya', 'Keduanya sekaligus dengan bobot sama'],
          jelas: 'Sebuah L1 yang juga punya DEX bawaan dibaca dari mana uangnya benar-benar masuk.' },
        { tanya: 'Cara gagal yang khas untuk lapisan aplikasi adalah…',
          pilihan: ['Pengguna pindah ke pesaing dalam hitungan hari, karena biaya pindahnya nol', 'Keamanan bergantung pada subsidi inflasi', 'Dipakai luas tapi gratis', 'Jaringan ramai tapi tokennya tidak menerima apa-apa'],
          jelas: 'Tiap lapisan punya cara gagal sendiri. Yang disebut di pilihan lain adalah cara gagal lapisan dasar, lapisan data, dan lapisan skala.' },
      ] },

    { kode: 'jantung-nilai', judul: 'Jantung dan Nilai',
      ringkas: 'Satu sampai dua metrik yang menentukan hidup matinya tiap sektor, lalu rumus nilai intrinsik beserta tiga tingkat dan saat rumusnya berbohong.',
      pelajaran: [
        { judul: 'Jantung dulu, baru aliran darah', isi: `
<h3>Konsepnya</h3>
<p>Dari puluhan angka di dashboard, hampir semuanya turunan. Yang menentukan hanya satu-dua: <b>jantung</b> protokol. Aturan Akademi Crypto soal kualitas informasi berlaku di sini, satu faktor yang teruji mengalahkan lima faktor yang belum teruji. Menilai murah atau mahal sebelum tahu jantungnya menghasilkan angka yang presisi untuk pertanyaan yang salah.</p>
<h3>Jantung per sektor</h3>
<table>
<tr><th>Sektor</th><th>Jantung</th><th>Aliran darah (ke mana nilainya mengalir)</th></tr>
<tr><td>Bursa perpetual / DEX</td><td>Volume yang membayar fee, dan fee per pengguna</td><td>Fee → LP / treasury / buyback token?</td></tr>
<tr><td>Lending</td><td>Pinjaman aktif (bukan TVL) dan selisih bunga</td><td>Selisih → treasury → token?</td></tr>
<tr><td>Stablecoin</td><td>Pasokan beredar dan imbal hasil cadangannya</td><td>Imbal hasil → pemegang stablecoin vs pemegang token governance</td></tr>
<tr><td>RWA / PayFi</td><td>Aset nyata yang benar-benar ditokenisasi dan pembiayaan yang dilunasi</td><td>Fee originasi → protokol → token?</td></tr>
<tr><td>L1 / L2</td><td>Fee jaringan yang dibayar pengguna nyata (bukan bot)</td><td>Fee → validator / sequencer → burn atau treasury?</td></tr>
<tr><td>Infrastruktur / data</td><td>Pelanggan yang membayar</td><td>Langganan → perusahaan pengembang vs token</td></tr>
</table>
<h3>Aturan bacanya</h3>
<ol>
<li>Cari jantungnya dulu; tulis angkanya dan arahnya 90 hari terakhir.</li>
<li>Ikuti aliran darahnya sampai ke token. Kalau alirannya berhenti sebelum sampai ke token, tulis itu, banyak protokol bagus dengan token yang tidak menerima apa-apa.</li>
<li>Baru bahas kerangka (tokenomics), otak (tim), dan lingkungan (makro, pesaing).</li>
</ol>
<h3>Contoh</h3>
<p>Protokol lending dengan TVL besar tapi pinjaman aktif kecil: jantungnya lemah, TVL cuma uang parkir yang menunggu insentif. Sebaliknya, bursa kecil dengan volume yang membayar fee tinggi per pengguna punya jantung kuat walau kapitalisasinya kecil.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Jantung yang sehat tidak menjamin harga naik dalam waktu dekat, pasar bisa mengabaikannya berbulan-bulan. Yang dijamin hanya: jantung yang sakit cepat atau lambat terlihat di harga.</div>
<div class="sumber">Sumber: metode "jantung dulu" Hanif Dossier Crypto; prinsip kualitas &gt; kuantitas informasi, Akademi Crypto (September 2024).</div>` },

        { judul: 'Nilai intrinsik token: rumus, tiga tingkat, dan kapan rumusnya berbohong', isi: `
<h3>Konsepnya</h3>
<p>Nilai intrinsik adalah nilai yang tersisa kalau semua narasi dihapus: berapa uang yang benar-benar <b>sampai ke pemegang token</b>, didiskontokan dengan risiko. Bukan fee yang dibayar pengguna (itu milik LP atau validator), bukan pendapatan protokol (itu milik treasury): hanya yang sampai ke token.</p>
<h3>Istilah yang dipakai</h3>
<ol>
<li><b>CF (arus kas ke pemegang)</b>: buyback, bagi fee, burn yang dibiayai pendapatan nyata. Staking yield yang dibayar dari inflasi <em>bukan</em> arus kas; itu pengenceran yang dibagikan.</li>
<li><b>r (tingkat diskonto)</b>: imbal hasil yang Anda tuntut untuk memegang aset yang bisa jatuh 80% dalam setahun. Rentang yang jujur: 20% untuk protokol yang sudah menghasilkan lebih dari setahun, 25–30% untuk yang lebih muda.</li>
<li><b>g (pertumbuhan lestari)</b>: pertumbuhan yang bisa bertahan bertahun-tahun, bukan pertumbuhan bulan lalu. Batas atas 10%; 0 kalau pendapatannya turun atau baru ada kurang dari dua kuartal.</li>
<li><b>FDV</b>: kapitalisasi kalau semua token beredar. Dipakai, bukan market cap, karena pembeli hari ini menanggung dilusi besok.</li>
</ol>
<h3>Rumusnya</h3>
<pre>V = CF × (1 + g) ÷ (r − g)

Rasio harga/nilai = FDV ÷ V

Contoh (angka ilustrasi):
  CF = $60 juta/tahun ke pemegang (12 × $5 juta sebulan)
  r  = 20%, g = 0      →  V = 60 ÷ 0,20 = $300 juta
  r  = 20%, g = 5%     →  V = 60 × 1,05 ÷ 0,15 = $420 juta
  r  = 25%, g = 0      →  V = 60 ÷ 0,25 = $240 juta
  FDV = $900 juta       →  rasio 3,0x · 2,1x · 3,75x</pre>
<p>Tiga skenario itu wajib ditampilkan. Satu angka tunggal menyesatkan karena hasilnya sangat peka terhadap r dan g.</p>
<h3>Aturan bacanya</h3>
<table>
<tr><th>FDV ÷ V</th><th>Bacaan</th></tr>
<tr><td>≤ 1</td><td>Harga di bawah nilai intrinsik, jarang, dan biasanya ada alasan (risiko regulasi, unlock besar, pendapatan satu kali)</td></tr>
<tr><td>1 – 3</td><td>Wajar untuk aset yang masih tumbuh</td></tr>
<tr><td>3 – 10</td><td>Harga sudah memuat pertumbuhan besar yang belum terjadi</td></tr>
<tr><td>&gt; 10</td><td>Yang dibayar adalah narasi, bukan arus kas</td></tr>
</table>
<h3>Tiga tingkat: dan tingkatnya tidak boleh dinaikkan dengan asumsi</h3>
<ol>
<li><b>Tingkat A</b>: ada arus kas ke pemegang, rumus di atas berlaku penuh.</li>
<li><b>Tingkat B</b>: protokol punya pendapatan, tapi tidak dialirkan ke token, hitung V dengan pendapatan protokol, lalu beri label <em>nilai bersyarat</em>. Nilai itu hanya terwujud kalau governance memutuskan mengalirkannya. Contoh klasiknya rollup yang fee-nya masuk treasury DAO.</li>
<li><b>Tingkat C</b>: tidak ada fee yang bisa diukur, tulis "nilai intrinsik tidak dapat dihitung; nilai token sepenuhnya spekulatif." Boleh ditambah pengukur jaringan (NVT, Metcalfe, untuk Bitcoin MVRV) dengan label "nilai jaringan, bukan nilai intrinsik".</li>
</ol>
<div class="batas-berlaku"><b>Kapan rumusnya berbohong.</b> (1) CF 30 hari terakhir berasal dari satu kejadian (airdrop, likuidasi besar, program insentif) lalu dikalikan 12. Cek tiga bulan terakhir. (2) Pendapatan dalam token proyek sendiri dihitung dengan harga yang sedang tinggi. (3) g diambil dari pertumbuhan bulan lalu. Screening harian Hanif Dossier Crypto memakai r = 20% dan g = 0 (Lapis 8) supaya angkanya bisa dicocokkan dengan dossier.</div>
<div class="sumber">Sumber: model diskonto arus kas (Gordon growth) diterapkan pada arus kas ke pemegang token; data fee/pendapatan/holders revenue dari DefiLlama; framework-crypto Dimensi 5, Hanif Dossier Crypto.</div>` },
      ],
      kuis: [
        { tanya: 'Jantung sebuah protokol pinjam-meminjam adalah…',
          pilihan: ['Pinjaman aktif dan selisih bunganya, bukan TVL', 'TVL', 'Jumlah pengguna terdaftar', 'Harga token tata kelolanya'],
          jelas: 'TVL besar dengan pinjaman aktif kecil berarti uang parkir yang menunggu insentif, bukan permintaan nyata.' },
        { tanya: 'Kalau aliran nilai berhenti sebelum sampai ke token, yang harus dilakukan…',
          pilihan: ['Tulis apa adanya; banyak protokol bagus yang tokennya memang tidak menerima apa-apa', 'Abaikan, karena harga tetap akan mengikuti protokolnya', 'Ganti metrik supaya hasilnya terlihat lebih baik', 'Anggap protokolnya gagal'],
          jelas: 'Protokol yang sehat dan token yang menerima nilai adalah dua hal berbeda. Keduanya perlu dipisahkan dalam laporan.' },
        { tanya: 'Dalam rumus nilai intrinsik, CF adalah…',
          pilihan: ['Arus kas yang benar-benar sampai ke pemegang token: buyback, bagi fee, burn dari pendapatan nyata', 'Seluruh fee yang dibayar pengguna', 'Pendapatan protokol yang masuk treasury', 'Nilai yang tersimpan di protokol'],
          jelas: 'Fee milik penyedia likuiditas atau validator, dan pendapatan protokol milik treasury. Yang dihitung hanya yang sampai ke token.' },
        { tanya: 'Staking yield yang dibayar dari inflasi token…',
          pilihan: ['Bukan arus kas, melainkan pengenceran yang dibagikan', 'Arus kas paling murni untuk pemegang token', 'Sama nilainya dengan buyback dari pendapatan', 'Menambah nilai intrinsik secara langsung'],
          jelas: 'Uangnya tidak datang dari luar; ia datang dari pemegang token lain lewat dilusi.' },
        { tanya: 'Rasio FDV ÷ V di atas 10 dibaca sebagai…',
          pilihan: ['Yang dibayar adalah narasi, bukan arus kas', 'Harga di bawah nilai intrinsik', 'Wajar untuk aset yang masih tumbuh', 'Harga sudah memuat pertumbuhan yang wajar'],
          jelas: 'Rentang 1 sampai 3 wajar untuk aset yang tumbuh, 3 sampai 10 berarti harga sudah memuat pertumbuhan besar yang belum terjadi.' },
        { tanya: 'Kenapa hasil perhitungan nilai intrinsik wajib ditampilkan dalam tiga skenario?',
          pilihan: ['Karena hasilnya sangat peka terhadap tingkat diskonto dan asumsi pertumbuhan', 'Karena aturan akuntansi mewajibkannya', 'Supaya laporannya terlihat lebih lengkap', 'Karena data fee selalu berbeda antar sumber'],
          jelas: 'Satu angka tunggal menyesatkan. Perubahan kecil pada r atau g mengubah hasilnya sangat jauh.' },
      ] },

    { kode: 'suplai-siklus', judul: 'Struktur Suplai dan Siklus',
      ringkas: 'FDV bersama float, jadwal unlock, siapa memegang apa, dan tiga tahap altcoin yang mengubah arti hampir semua metrik lain.',
      pelajaran: [
        { judul: 'FDV × float, unlock, dan siapa yang memegang', isi: `
<h3>Konsepnya</h3>
<p>Struktur suplai menentukan siapa yang bisa menjual, kapan, dan seberapa sakit dampaknya. Momentum sebagus apa pun tidak menyelamatkan struktur yang menekan.</p>
<h3>Istilah yang dipakai</h3>
<ol>
<li><b>Float</b>: porsi suplai yang benar-benar beredar dan bisa diperdagangkan.</li>
<li><b>FDV / market cap</b>: berapa kali lipat dilusi yang masih menunggu. 1,15× hampir penuh; 2–5× sedang; &gt;5× berat.</li>
<li><b>Unlock</b>: jadwal pelepasan token yang dikunci untuk tim, investor, ekosistem. Yang penting bukan tanggalnya saja, tapi <em>berapa persen dari suplai beredar</em> yang dilepas dalam 90 hari ke depan. Batas peringatan: 5%.</li>
</ol>
<h3>Aturan bacanya: FDV × float bersama, bukan FDV sendirian</h3>
<table>
<tr><th>Kombinasi</th><th>Kecenderungan</th><th>Mekanismenya</th></tr>
<tr><td>FDV rendah + float tinggi</td><td>Cenderung bisa naik</td><td>Pasar menganggap masih undervalued, dan perdagangannya ramai</td></tr>
<tr><td>FDV tinggi + float rendah</td><td>Cenderung <b>tidak</b> bisa naik</td><td>Dua lapis: persepsi valuasi terlalu tinggi, dan likuiditas tipis sehingga price impact besar</td></tr>
</table>
<h3>Siapa yang memegang: dua pandangan yang harus ditulis apa adanya</h3>
<p>Pandangan pertama: token yang mayoritas dipegang tim dan VC justru cenderung perform, karena pemegang besar yang sudah kaya jarang menjual (posisi itu kecil bagi mereka). Pandangan kedua: konsentrasi insider adalah risiko, karena perilaku itu bisa berubah. Keduanya benar dari sudut berbeda, yang satu bicara perilaku, yang lain bicara risiko kalau perilakunya berubah.</p>
<p>Cara menyelesaikannya bukan dengan asumsi, tapi dengan <b>memeriksa</b>: lacak dompet penerima unlock, hitung berapa yang benar-benar dicairkan dibanding total yang diterima. Pengembang yang menerima $27 juta token dan mencairkan $1,3 juta berperilaku beda dari yang mencairkan semuanya.</p>
<h3>Contoh</h3>
<p>Token dengan FDV 6× market cap dan unlock 8% suplai beredar bulan depan: apa pun narasinya, ada penjual yang sudah pasti datang. Sebaliknya, token dengan FDV 1,1× dan unlock selesai: naik-turunnya murni soal permintaan.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Unlock tidak selalu bearish, di beberapa sektor harga justru naik sebelum unlock karena investor mengantisipasi. Bukti historisnya per sektor ada di dossier; jangan memakai satu aturan untuk semua sektor.</div>
<div class="sumber">Sumber: Akademi Crypto, "Altcoins yang perform dan tidak perform" (Agustus 2024), kasus ENS (Juli 2024), tabel dampak unlock per sektor (Mei 2024); Lapis 5 screening Hanif Dossier Crypto.</div>` },

        { judul: 'Tiga tahap altcoin: di mana posisi aset ini dalam siklusnya', isi: `
<h3>Konsepnya</h3>
<p>Metrik yang sama berarti berbeda pada tahap siklus yang berbeda. Volume mengering di tahap 2 adalah kelelahan penjual; volume mengering di tahap 1 adalah pembeli yang pergi. Karena itu posisi dalam siklus wajib disebut sebelum metrik lain dibaca.</p>
<h3>Tiga tahap</h3>
<ol>
<li><b>Banjir rilis di fase euforia.</b> Pengembang berlomba merilis memanfaatkan narasi. Ciri era terakhir: FDV tinggi, float rendah, airdrop sebagai senjata utama, lalu dihajar setelah rilis, hampir semua turun 50–80%.</li>
<li><b>Kapitulasi berbasis waktu.</b> Harga sudah jenuh turun, tidak ada likuiditas untuk dijual, pembeli belum percaya diri. Semua lelah, semua sudah terlanjur masuk, semua menunggu "angka psikologis". Tahap ini diukur dengan waktu, bukan harga.</li>
<li><b>Bottom seller ter-short squeeze.</b> Likuiditas tipis membuat harga bergerak jauh lebih cepat dari yang dibayangkan; FOMO menyusul. Kenaikan 50% seminggu masih dianggap murah.</li>
</ol>
<h3>Aturan bacanya</h3>
<ul>
<li>Tahap 1: struktur suplai (pelajaran Struktur Suplai) mengalahkan semua sinyal lain.</li>
<li>Tahap 2: yang dicari adalah <em>akumulasi diam-diam</em> (volume naik sementara harga datar), karena uang besar tidak mengejar harga, ia menyerap penawaran.</li>
<li>Tahap 3: momentum adalah alasan untuk menoleh, bukan untuk membeli. Yang tahu duluan sudah selesai membeli.</li>
</ul>
<h3>Contoh</h3>
<p>Dua token sama-sama turun 85% dari puncak. Yang satu dirilis tiga bulan lalu dengan float 12% (tahap 1, unlock masih menunggu). Yang lain sudah 14 bulan di bawah, float 90%, volume tinggal seperlima (tahap 2). Angka "turun 85%" identik; artinya bertolak belakang.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Tahap tidak bisa ditentukan dari satu hari; butuh riwayat harga, volume, dan unlock minimal beberapa bulan. Dan tahap 2 bisa berlangsung jauh lebih lama dari kesabaran siapa pun, "sudah murah" bukan pemicu.</div>
<div class="sumber">Sumber: Akademi Crypto, "Tiga tahap Altcoins" (Agustus 2024); Lapis 4 screening Hanif Dossier Crypto (akumulasi diam-diam).</div>` },
      ],
      kuis: [
        { tanya: 'Kombinasi yang cenderung sulit naik adalah…',
          pilihan: ['FDV tinggi dengan float rendah', 'FDV rendah dengan float tinggi', 'FDV rendah dengan float rendah', 'FDV tinggi dengan float tinggi'],
          jelas: 'Dua lapis sekaligus: valuasi dianggap terlalu tinggi, dan likuiditas tipis sehingga dampak harganya besar.' },
        { tanya: 'Batas peringatan untuk unlock adalah…',
          pilihan: ['Di atas 5 persen suplai beredar dalam 90 hari ke depan', 'Setiap unlock berapa pun besarnya', 'Di atas 1 persen suplai beredar', 'Hanya unlock yang jatuh pada hari bursa tutup'],
          jelas: 'Yang penting bukan tanggalnya saja, melainkan berapa persen suplai beredar yang dilepas dalam tiga bulan ke depan.' },
        { tanya: 'Perdebatan apakah konsentrasi tim dan investor itu baik atau buruk diselesaikan dengan…',
          pilihan: ['Memeriksa dompet penerima unlock: berapa yang benar-benar dicairkan dibanding total yang diterima', 'Memilih salah satu pandangan lalu konsisten dengannya', 'Menganggapnya selalu risiko', 'Menganggapnya selalu tanda bagus'],
          jelas: 'Pengembang yang menerima token senilai puluhan juta dolar dan mencairkan sedikit saja berperilaku beda dari yang mencairkan semuanya. Itu bisa diperiksa, bukan diasumsikan.' },
        { tanya: 'Volume yang mengering pada tahap kapitulasi berarti…',
          pilihan: ['Kelelahan penjual', 'Pembeli yang pergi', 'Awal fase euforia', 'Data bursa sedang bermasalah'],
          jelas: 'Volume mengering di tahap banjir rilis artinya pembeli pergi. Metrik yang sama berarti berbeda tergantung tahapnya.' },
        { tanya: 'Pada tahap kapitulasi, yang dicari adalah…',
          pilihan: ['Akumulasi diam-diam: volume naik sementara harga datar', 'Momentum harga yang sudah berbalik naik', 'Berita positif dari tim', 'Listing di bursa besar'],
          jelas: 'Uang besar tidak mengejar harga, ia menyerap penawaran.' },
        { tanya: 'Dua token sama-sama turun 85 persen dari puncak. Kesimpulannya…',
          pilihan: ['Artinya bisa bertolak belakang, tergantung tahap siklus masing-masing', 'Keduanya sama-sama murah', 'Keduanya sama-sama berbahaya', 'Yang float-nya kecil lebih aman'],
          jelas: 'Satu baru rilis tiga bulan dengan float 12 persen dan unlock menunggu; satu lagi sudah 14 bulan di bawah dengan float 90 persen. Angkanya identik, maknanya berbeda.' },
      ] },

    { kode: 'makro-bias', judul: 'Makro dan Bias Diri',
      ringkas: 'Rantai yang menghubungkan berita Amerika sampai ke altcoin, kapan makro boleh diabaikan, dan dua bias yang paling mahal di crypto.',
      pelajaran: [
        { judul: 'Rantai transmisi makro: berita AS → SPX → Bitcoin → altcoin', isi: `
<h3>Konsepnya</h3>
<p>Altcoin tidak membaca berita; ia membaca Bitcoin, dan Bitcoin membaca pasar saham AS, yang membaca data ekonomi AS. Kalau rantainya dipahami, sebagian besar berita bisa diabaikan dengan tenang.</p>
<h3>Dua rantai</h3>
<ol>
<li><b>Berita AS → SPX → Bitcoin → altcoin.</b> Berita dari negara lain dampaknya kecil sampai tidak ada. Yang dipantau: rilis berkepentingan 2–3 bintang di kalender ekonomi (FOMC, inflasi, tenaga kerja).</li>
<li><b>Aliran ETF → Ethereum → altcoin.</b> Aliran dana masuk/keluar ETF hari per hari dicocokkan dengan harga; setelah ETH berbalik positif, altcoin cenderung mengikuti.</li>
</ol>
<h3>Aturan bacanya: bobot makro bersyarat pada rezim</h3>
<p>Dalam bull market yang normal, berita makro relatif tidak relevan, harga digerakkan aliran dana ke aset berisiko. Dalam kondisi anomali (likuiditas mengetat, ketidakpastian kebijakan), makro menentukan. Jadi sebutkan rezimnya dulu, baru putuskan seberapa serius membaca kalender.</p>
<ul>
<li>Menjelang, selama, dan sesudah rilis besar selalu ada pergolakan, bukan untuk ditebak arahnya, tapi untuk disiapkan ukuran posisinya.</li>
<li>Transfer besar ke bursa menjelang katalis yang sudah diketahui publik = persiapan jual ("sell the news"). Penarikan dari bursa saat harga jatuh = akumulasi. Satu variabel, dua tanda.</li>
</ul>
<h3>Contoh</h3>
<p>Peringatan pagi menyebut "FOMC 02.00 WIB, bintang tiga". Yang perlu dilakukan bukan menebak hasilnya, melainkan memastikan tidak ada posisi yang ukurannya membuat pergolakan 8% jadi masalah. Setelah rilis, yang dibaca adalah reaksi SPX, lalu BTC, altcoin datang belakangan.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Rantai ini bekerja pada horizon hari sampai minggu. Pada horizon jam, arahnya sering acak; pada horizon tahun, yang menentukan adalah jantung protokol (kursus Jantung dan Nilai), bukan makro.</div>
<div class="sumber">Sumber: Akademi Crypto, Economic Calendar (Juni 2024), pelacakan aliran ETF dan dompet (Juli–Agustus 2024); briefing dan peringatan harian Hanif Dossier Crypto.</div>` },

        { judul: 'Bias yang menggerakkan Anda: loss aversion, break-even syndrome, dan mengukur dalam unit aset', isi: `
<h3>Konsepnya</h3>
<p>Analisis terbaik gagal bukan karena salah hitung, tapi karena orangnya berubah rencana di tengah jalan. Bias kognitif adalah bagian dari analisis, bukan hiasan, dan bias yang paling mahal di crypto ada dua.</p>
<h3>Dua bias</h3>
<ol>
<li><b>Loss aversion.</b> Kerugian sebesar X terasa jauh lebih sakit daripada keuntungan sebesar X terasa menyenangkan. Akibatnya: drawdown kecil memicu keputusan besar.</li>
<li><b>Break-even syndrome.</b> Tujuan berubah dari "menang" jadi "balik modal". Begitu harga kembali ke titik masuk, dijual, lalu dibeli lagi lebih tinggi karena FOMO.</li>
</ol>
<h3>Aritmetikanya: dihitung dalam jumlah koin, bukan harga</h3>
<pre>Beli $100 di harga $1        → 100 koin
Turun 50%, jual di $0,50     → $50
Beli lagi di $2 dengan $50   → 25 koin

Dari 100 koin tinggal 25. Harga "sudah kembali", jumlah asetnya hilang tiga perempat.</pre>
<p>Mengukur hasil dalam <b>unit aset</b>, bukan nilai rupiah, adalah pengukur yang tidak bisa ditipu oleh naik-turun harga.</p>
<h3>Aturan bacanya</h3>
<ul>
<li>Persen tanpa basis nominal adalah angka yang menipu: "+100%" dari Rp10 juta dan dari Rp100 juta adalah dua cerita berbeda.</li>
<li>Untung kecil tetap untung. Firma dengan aset kelolaan miliaran dolar tetap menutup posisi dengan profit 0,008% dari AUM, karena profit lebih baik daripada rugi.</li>
<li>Kalau niatnya investasi: masuk bertahap, keluar bertahap, dan tulis di jurnal <em>kenapa</em> masuk, supaya tahu kapan tesisnya gugur, bukan kapan perasaannya berubah.</li>
</ul>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Pelajaran ini bukan nasihat alokasi. Ukuran posisi, kapan masuk, dan kapan keluar adalah keputusan Anda dan risikonya milik Anda. Yang bisa diberikan riset hanyalah bahan supaya keputusan itu diambil dengan bias yang disadari.</div>
<div class="sumber">Sumber: Akademi Crypto, "Pain of losing vs joy of winning", "Break Even Syndrome", "Bias angka" (Agustus 2024), Spartan Group (Juli 2024).</div>` },
      ],
      kuis: [
        { tanya: 'Rantai transmisi makro ke altcoin berjalan lewat…',
          pilihan: ['Berita Amerika, lalu indeks saham Amerika, lalu Bitcoin, lalu altcoin', 'Berita dari seluruh dunia langsung ke altcoin', 'Altcoin lebih dulu, baru Bitcoin', 'Harga emas, lalu Bitcoin'],
          jelas: 'Altcoin tidak membaca berita; ia membaca Bitcoin, dan Bitcoin membaca pasar saham Amerika.' },
        { tanya: 'Seberapa serius kalender ekonomi perlu dibaca?',
          pilihan: ['Bersyarat pada rezim: relatif tidak relevan di pasar naik normal, menentukan saat likuiditas mengetat', 'Selalu sama pentingnya', 'Tidak pernah penting untuk crypto', 'Hanya penting untuk Bitcoin, tidak untuk altcoin'],
          jelas: 'Sebutkan rezimnya dulu, baru putuskan bobot makronya.' },
        { tanya: 'Transfer besar ke bursa menjelang katalis yang sudah diketahui publik biasanya berarti…',
          pilihan: ['Persiapan menjual', 'Persiapan membeli lebih banyak', 'Perpindahan kustodian biasa', 'Tidak berarti apa-apa'],
          jelas: 'Penarikan dari bursa saat harga jatuh justru tanda akumulasi. Satu variabel, dua tanda, tergantung keadaannya.' },
        { tanya: 'Break-even syndrome adalah…',
          pilihan: ['Tujuan berubah dari menang jadi balik modal, lalu dijual begitu harga kembali ke titik masuk', 'Rasa sakit kehilangan yang lebih besar daripada nikmat mendapat', 'Menambah posisi yang sedang rugi', 'Menjual terlalu cepat saat untung besar'],
          jelas: 'Setelah dijual di titik impas, biasanya dibeli lagi di harga lebih tinggi karena takut ketinggalan.' },
        { tanya: 'Beli $100 di harga $1, jual saat turun ke $0,50, lalu beli lagi di harga $2. Hasilnya…',
          pilihan: ['Dari 100 koin tinggal 25 koin', 'Jumlah koinnya tetap 100', 'Modalnya kembali utuh', 'Untung 50 persen'],
          jelas: 'Harga boleh sudah kembali, tetapi jumlah asetnya hilang tiga perempat. Ini alasan hasil diukur dalam unit aset.' },
        { tanya: 'Pengukur hasil yang tidak bisa ditipu oleh naik turun harga adalah…',
          pilihan: ['Jumlah unit aset yang dimiliki, bukan nilai rupiahnya', 'Persentase keuntungan', 'Nilai portofolio dalam rupiah', 'Perbandingan dengan harga tertinggi tahun ini'],
          jelas: 'Persen tanpa basis nominal juga menipu: naik 100 persen dari sepuluh juta dan dari seratus juta adalah dua cerita berbeda.' },
      ] },

    { kode: 'naratif', judul: 'Trading Naratif',
      ringkas: 'Dari sinyal awal sebelum harga bergerak, skor tujuh kriteria, pemilihan kelas token, ukuran posisi, sampai lima aturan yang membatalkan tesis.',
      pelajaran: [
        { judul: 'Trading naratif: dari sinyal awal sampai aturan invalidasi', isi: `
<h3>Konsepnya</h3>
<p>Narasi adalah cerita yang membuat modal berpindah ke satu kelompok token sekaligus, AI, RWA, restaking, stablecoin. Narasi tidak muncul dari harga; harga adalah tempat terakhir ia terlihat. Jejaknya lebih dulu muncul di kode, pendanaan, percakapan, dan data on-chain. Pelajaran ini menyusun urutannya: temukan lebih awal, beri skor, pilih kelas token, ukur posisi, lalu tahu kapan harus keluar.</p>
<h3>Peta sinyal awal: enam tempat narasi muncul sebelum harga</h3>
<table>
<tr><th>Tempat</th><th>Yang dibaca</th><th>Alat</th></tr>
<tr><td><b>Aktivitas developer</b></td><td>Jumlah developer dan commit per ekosistem; repo yang tiba-tiba ramai</td><td><a href="https://www.developerreport.com" target="_blank" rel="noopener">Electric Capital Developer Report</a>, GitHub</td></tr>
<tr><td><b>Pendanaan VC</b></td><td>Sektor yang menerima ronde beruntun dari dana besar</td><td><a href="https://cryptorank.io/funding-rounds" target="_blank" rel="noopener">CryptoRank</a>, <a href="https://www.galaxy.com/insights/research" target="_blank" rel="noopener">Galaxy Research</a></td></tr>
<tr><td><b>Mindshare</b></td><td>Porsi percakapan yang naik sebelum harga bergerak</td><td><a href="https://www.kaito.ai" target="_blank" rel="noopener">Kaito</a>, <a href="https://www.cookie.fun" target="_blank" rel="noopener">Cookie.fun</a>, <a href="https://lunarcrush.com" target="_blank" rel="noopener">LunarCrush</a>, <a href="https://santiment.net" target="_blank" rel="noopener">Santiment</a></td></tr>
<tr><td><b>On-chain</b></td><td>TVL, fee, pengguna aktif, arus stablecoin ke satu sektor</td><td><a href="https://defillama.com" target="_blank" rel="noopener">DefiLlama</a>, <a href="https://tokenterminal.com" target="_blank" rel="noopener">Token Terminal</a>, <a href="https://dune.com" target="_blank" rel="noopener">Dune</a>, <a href="https://www.nansen.ai" target="_blank" rel="noopener">Nansen</a>, <a href="https://app.rwa.xyz" target="_blank" rel="noopener">rwa.xyz</a></td></tr>
<tr><td><b>Katalis regulasi</b></td><td>Undang-undang, keputusan ETF, kebijakan The Fed yang membuka pintu bagi satu sektor</td><td>Halaman <a href="laporan.html?h=schedule">Schedule</a> dan briefing pagi</td></tr>
<tr><td><b>Airdrop &amp; testnet</b></td><td>Program poin dan testnet yang menarik pengguna sebelum token ada</td><td>Pengumuman proyek, Kaito Yaps</td></tr>
</table>
<p>Di Hanif Dossier Crypto, sebagian sinyal ini sudah dirangkum untuk Anda: <a href="laporan.html?h=screening">Screening altcoin</a> membaca narasi yang menghangat dan mendingin tiap pagi, <a href="pasar.html">Pasar</a>
    <a href="bitcoin.html">Bitcoin</a> memuat leaderboard per sektor dan panel rincian tiap koin, <a href="metrik.html">Metrics</a> menjelaskan arti tiap angkanya, dan bagian <a href="laporan.html?h=briefing#portofolio-kamu-hari-ini">Portofolio Kamu Hari Ini</a> di briefing memantau koin yang Anda pegang.</p>
<h3>Rumus skor naratif: tujuh kriteria berbobot</h3>
<p>Setiap kriteria diberi skor 1–5, dikalikan bobotnya, lalu dijumlahkan.</p>
<table>
<tr><th>Kriteria</th><th>Bobot</th><th>Pertanyaannya</th></tr>
<tr><td>Kekuatan katalis</td><td>20%</td><td>Ada peristiwa bertanggal di depan yang bisa memindahkan modal?</td></tr>
<tr><td>Tokenomics (float &amp; FDV)</td><td>20%</td><td>Float besar, FDV dekat kapitalisasi, unlock kecil?</td></tr>
<tr><td>Ukuran pasar (TAM)</td><td>15%</td><td>Seberapa besar kue yang diperebutkan, dan sedang tumbuh atau menyusut?</td></tr>
<tr><td>Kualitas tim &amp; VC</td><td>15%</td><td>Tim publik dengan rekam jejak, pendana yang tidak sekadar membeli murah?</td></tr>
<tr><td>Likuiditas</td><td>10%</td><td>Bisa masuk dan keluar tanpa menggeser harga?</td></tr>
<tr><td>Timing siklus</td><td>10%</td><td>Narasinya masih awal, sedang panas, atau sudah lewat?</td></tr>
<tr><td>Revenue &amp; pengguna nyata</td><td>10%</td><td>Ada orang yang membayar, bukan cuma yang dibayar insentif?</td></tr>
</table>
<p>Skor di bawah 3 = narasinya lemah untuk dijadikan tesis utama. Skor ini <b>tidak menggantikan</b> analisis fundamental (kursus Jantung dan Nilai serta Struktur Suplai); ia menjawab pertanyaan lain: apakah narasinya layak diperdagangkan <em>sekarang</em>.</p>
<h3>Peta kelas token di dalam satu narasi</h3>
<ul>
<li><b>Leader</b>: token terbesar dan paling likuid di narasinya. Naik paling awal, turun paling lambat. Tempat porsi terbesar alokasi narasi.</li>
<li><b>Mid-cap</b>: pemain kedua dan ketiga. Bergerak lebih liar dari leader, masih cukup likuid.</li>
<li><b>Long-tail</b>: token kecil di ekor narasi. Naik paling kencang saat euforia, jatuh paling dalam dan paling cepat saat berbalik. Porsinya sangat kecil, disiplin keluarnya ketat.</li>
</ul>
<p>Sebelum masuk, cek unlock: <b>unlock di atas 5% suplai beredar dalam 90 hari</b> adalah tanda bahaya (pelajaran Struktur Suplai). Token yang punya buyback dari pendapatan nyata lebih disukai daripada yang hanya punya cerita.</p>
<h3>Tahap distribusi: enam sinyal narasi sedang dipuncak</h3>
<ol>
<li><b>Funding rate ekstrem</b>: posisi long membayar mahal untuk bertahan.</li>
<li><b>Open interest di puncak</b>: leverage menumpuk.</li>
<li><b>Listing di bursa tier-1</b>: momen likuiditas paling tebal, sering dipakai orang dalam untuk menjual.</li>
<li><b>Liputan media mainstream</b>: cerita sudah sampai ke orang yang paling akhir membeli.</li>
<li><b>Saturasi influencer</b>: semua akun membahas hal yang sama.</li>
<li><b>Google Trends di puncak</b>: pencarian publik memuncak.</li>
</ol>
<p>Tiga atau lebih menyala = narasi kemungkinan besar di fase distribusi. Alat: <a href="https://www.coinglass.com" target="_blank" rel="noopener">Coinglass</a> (funding, OI), <a href="https://trends.google.com" target="_blank" rel="noopener">Google Trends</a>. Sinyal yang tidak bisa diperiksa ditulis "tidak diperiksa", jangan dianggap mati.</p>
<h3>Aturan ukuran: core-satellite dan take profit bertahap</h3>
<ul>
<li><b>Core</b> BTC + ETH 60–80% · <b>satelit</b> narasi 10–40% · <b>buffer</b> stablecoin 10–15%. <b>Tidak ada satu altcoin di atas 5% portofolio.</b> Jangan masuk trading narasi sebelum core-nya stabil.</li>
<li>Tiga profil sebagai titik awal (BTC / ETH / altcoin naratif): konservatif <b>80/15/5</b>, moderat <b>70/20/10</b>, agresif <b>60/25/15</b>.</li>
<li><b>Take profit bertahap:</b> 25% saat +100%, ini baru mengembalikan <em>separuh</em> modal (25% × 2 = 0,5× modal); kalau ingin modal kembali utuh, yang dijual 50%, 25% di puncak hype (listing tier-1, liputan mainstream), sisanya dibiarkan jalan dengan <em>trailing stop</em>.</li>
</ul>
<h3>Langkah mingguan: rutinitas memantau narasi</h3>
<ol>
<li>Baca dominasi BTC, rasio ETH/BTC, dan <a href="https://www.blockchaincenter.net/en/altcoin-season-index/" target="_blank" rel="noopener">Altcoin Season Index</a>, rezim pasar dulu.</li>
<li>Periksa narasi yang menghangat dan mendingin di <a href="laporan.html?h=screening">Screening</a>.</li>
<li>Cocokkan dengan data on-chain: apakah fee dan pengguna ikut naik, atau cuma harga?</li>
<li>Cek jadwal unlock (<a href="https://tokenomist.ai" target="_blank" rel="noopener">Tokenomist</a>) dan katalis di <a href="laporan.html?h=schedule">Schedule</a>.</li>
<li>Hitung ulang sinyal fase distribusi untuk narasi yang Anda pegang.</li>
<li>Tulis di jurnal: posisi apa, kenapa, dan apa yang akan membatalkannya.</li>
</ol>
<h3>Lima aturan invalidasi</h3>
<ol>
<li><b>Katalis gagal</b> atau ditunda tanpa batas.</li>
<li><b>Mindshare turun</b> beberapa minggu berturut-turut.</li>
<li><b>Developer pergi</b>: commit dan rilis berhenti.</li>
<li><b>Fase decay</b>: funding kembali normal, volume mengering, aktivitas DEX anjlok.</li>
<li><b>Struktur harga rusak</b> di level kunci.</li>
</ol>
<p>Satu aturan terpenuhi sudah cukup alasan untuk meninjau ulang tesis. Waspadai juga risiko psikologis yang membuat aturan ini diabaikan: jatuh cinta pada narasi, <em>sunk cost</em>, <em>revenge trading</em>, dan konsentrasi di satu tema (kursus Makro dan Bias Diri).</p>
<h3>Contoh: REZ (Renzo), 13 September 2026</h3>
<p>REZ masuk daftar screening setelah listing Upbit. Dibaca dengan kerangka ini:</p>
<ul>
<li><b>Skor naratif 2,7/5</b>: tokenomics kuat (float 89,8%, FDV/MC 1,09×, skor 4) dan tim/VC kuat (skor 4), tetapi revenue sangat lemah (pendapatan $36,5 ribu per 30 hari, skor 1) dan TAM menyusut (skor 2).</li>
<li><b>Kelas: long-tail.</b> Leader liquid restaking menurut TVL adalah Kelp; ekosistemnya dipimpin EIGEN dan ether.fi. REZ memegang 8,5% kategori.</li>
<li><b>Fase distribusi: 1–2 dari 6 menyala</b>: listing tier-1 (Upbit, 10 Sep) dan perhatian memuncak (proksi dari screening); empat lainnya tidak bisa diperiksa. Volume Upbit sendiri hanya ±0,04% volume global hari itu: listingnya berita, bukan arus modal.</li>
<li><b>Invalidasi</b>: aturan 1 sudah pernah terjadi (buyback 10% suplai hanya tercapai ±21%); aturan 3 perlu dipantau (repo kontrak publik tidak diperbarui sejak Desember 2025).</li>
</ul>
<p>Rinciannya ada di dossier REZ di <a href="riset.html">Pustaka riset</a>.</p>
<div class="batas-berlaku"><b>Batas &amp; risiko.</b> Kerangka ini alat ukur, bukan sinyal beli atau jual. Skor naratif tinggi tidak menjamin harga naik, dan fase distribusi bisa berlangsung lebih lama dari perkiraan. Angka alokasi di atas adalah titik awal umum, bukan saran untuk kondisi keuangan Anda, ukuran posisi dan risikonya sepenuhnya keputusan Anda.</div>
<div class="sumber">Sumber: materi video kelas crypto (tangkapan layar pemilik, 13 Sep 2026); dossier REZ dan screening Hanif Dossier Crypto (13 Sep 2026).</div>` },
      ],
      kuis: [
        { tanya: 'Jejak sebuah narasi paling awal muncul di…',
          pilihan: ['Kode, pendanaan, percakapan, dan data on-chain; harga adalah tempat terakhir ia terlihat', 'Harga, sebelum yang lain', 'Liputan media besar', 'Listing di bursa tier-1'],
          jelas: 'Karena itu enam tempat sinyal awal dipantau lebih dulu, bukan grafiknya.' },
        { tanya: 'Dua kriteria dengan bobot terbesar dalam skor naratif adalah…',
          pilihan: ['Kekuatan katalis dan tokenomics, masing-masing 20 persen', 'Likuiditas dan timing siklus', 'Ukuran pasar dan kualitas tim', 'Revenue dan pengguna nyata'],
          jelas: 'Ukuran pasar dan kualitas tim masing-masing 15 persen; likuiditas, timing, serta revenue masing-masing 10 persen.' },
        { tanya: 'Skor naratif di bawah 3 berarti…',
          pilihan: ['Narasinya lemah untuk dijadikan tesis utama', 'Asetnya pasti akan turun', 'Analisis fundamentalnya tidak perlu dilakukan', 'Waktunya membeli karena masih murah'],
          jelas: 'Skor ini tidak menggantikan analisis fundamental. Ia menjawab pertanyaan lain: apakah narasinya layak diperdagangkan sekarang.' },
        { tanya: 'Ciri token kelas long-tail dalam sebuah narasi adalah…',
          pilihan: ['Naik paling kencang saat euforia, jatuh paling dalam dan paling cepat saat berbalik', 'Naik paling awal dan turun paling lambat', 'Paling likuid di narasinya', 'Cocok untuk porsi terbesar alokasi'],
          jelas: 'Yang naik paling awal dan turun paling lambat adalah leader, dan di situlah porsi terbesar alokasi narasi ditaruh.' },
        { tanya: 'Sebuah narasi dianggap kemungkinan besar di fase distribusi kalau…',
          pilihan: ['Tiga atau lebih dari enam sinyal menyala', 'Satu sinyal saja menyala', 'Keenam sinyal menyala bersamaan', 'Funding rate kembali normal'],
          jelas: 'Sinyal yang tidak bisa diperiksa ditulis "tidak diperiksa", bukan dianggap mati.' },
        { tanya: 'Menjual 25 persen posisi saat harga naik 100 persen berarti…',
          pilihan: ['Baru mengembalikan separuh modal; untuk modal kembali utuh perlu menjual 50 persen', 'Modal sudah kembali utuh', 'Seluruh keuntungan sudah diamankan', 'Posisi tersisa menjadi bebas risiko'],
          jelas: '25 persen posisi dikali kenaikan dua kali lipat sama dengan setengah modal awal. Ini aritmetika yang sering salah dikira.' },
        { tanya: 'Kalau satu dari lima aturan invalidasi terpenuhi…',
          pilihan: ['Sudah cukup alasan untuk meninjau ulang tesis', 'Tunggu sampai ketiga aturan terpenuhi', 'Abaikan selama harganya masih naik', 'Tambah posisi karena harganya jadi lebih murah'],
          jelas: 'Waspadai juga risiko psikologis yang membuat aturan ini diabaikan: jatuh cinta pada narasi, biaya hangus, balas dendam, dan menumpuk di satu tema.' },
      ] },
  ],
});
