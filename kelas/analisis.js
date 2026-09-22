// kelas/analisis.js, data kelas kategori Analisis Pasar & Trading. Hanya data; logika ada di kelas.html.
(window.KELAS = window.KELAS || []).push({
  kode: 'analisis', urut: 7, nama: 'Analisis Pasar & Trading', warna: '#3d5570',
  ringkas: 'Cara membaca grafik tanpa menipu diri sendiri: apa yang sebenarnya digambar sebuah candle, di mana batas kegunaan indikator, strategi mana yang sudah diuji orang banyak, dan bagaimana menyusun rencana masuk dan keluar sebelum uang dipertaruhkan.',
  kursus: [
    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 1, MEMBACA GRAFIK HARGA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'grafik', judul: 'Membaca Grafik Harga',
      ringkas: 'Apa yang benar-benar ditunjukkan sebuah candle, kenapa pilihan timeframe mengubah kesimpulan, dan kenapa volume sering lebih jujur daripada harga.',
      pelajaran: [
        { judul: 'Candlestick, timeframe, dan apa yang sebenarnya digambar', isi: `
<h3>Konsepnya</h3>
<p>Grafik harga bukan gambaran nilai sebuah aset. Ia hanya catatan kesepakatan: pada setiap transaksi ada satu pihak yang bersedia menjual dan satu pihak yang bersedia membeli pada angka itu. Titik-titik kesepakatan itu dirangkum menjadi batang yang kita sebut <b>candle</b>.</p>
<p>Satu candle merangkum empat angka dalam satu potongan waktu: harga pertama yang terjadi (<b>open</b>), harga terakhir (<b>close</b>), harga tertinggi (<b>high</b>), dan harga terendah (<b>low</b>). Badan candle adalah jarak antara open dan close. Sumbu tipis di atas dan bawah, disebut <b>wick</b> atau ekor, menunjukkan sejauh mana harga sempat bergerak sebelum ditarik kembali.</p>
<p>Warna hanya menandai arah. Close di atas open berarti naik, close di bawah open berarti turun. Tidak ada informasi tambahan di dalam warna. Banyak pemula membaca warna seolah itu ramalan, padahal itu cuma laporan.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Timeframe</b>: lama waktu yang dirangkum satu candle. Candle 4 jam merangkum semua transaksi selama empat jam menjadi satu batang.</li>
<li><b>Wick panjang</b>: harga sempat jauh ke satu arah lalu ditolak kembali. Sering diartikan sebagai penolakan, padahal bisa juga sekadar tanda likuiditas tipis.</li>
<li><b>Gap</b>: lompatan harga tanpa transaksi di antaranya. Di crypto jarang terjadi karena pasar buka 24 jam, berbeda dengan saham yang tutup semalam.</li>
<li><b>OHLC</b>: singkatan open, high, low, close. Format data mentah yang dipakai hampir semua penyedia grafik.</li>
</ul>

<h3>Kenapa timeframe mengubah kesimpulan</h3>
<p>Data yang sama bisa melahirkan dua cerita berlawanan. Penurunan tajam yang terlihat menakutkan di grafik 15 menit bisa jadi hanya satu wick kecil di grafik mingguan. Sebaliknya, tren naik yang mulus di grafik mingguan berisi puluhan hari merah yang membuat orang menyerah di tengah jalan.</p>
<p>Karena itu urutan membacanya penting. Mulai dari timeframe besar untuk tahu arah umum, lalu turun ke timeframe kecil untuk mencari titik masuk. Kebiasaan sebaliknya, yaitu mulai dari grafik 5 menit lalu menyimpulkan arah pasar, adalah salah satu cara tercepat kehilangan uang.</p>
<p>Satu hal lagi yang jarang disadari: batas candle itu buatan manusia. Candle harian di satu bursa ditutup pukul 07.00 WIB (tengah malam UTC), di bursa lain bisa berbeda. Pola yang terlihat sempurna di satu platform kadang tidak ada di platform lain. Kalau sebuah pola cuma muncul karena kebetulan pembagian jam, pola itu tidak layak dipertaruhkan uang.</p>

<h3>Contoh</h3>
<p>Ambil satu hari perdagangan Bitcoin yang bergejolak. Di grafik 1 jam Anda melihat 24 candle: beberapa merah panjang, beberapa hijau panjang, kelihatan seperti pertarungan sengit. Di grafik harian, seluruh hari itu menjadi satu candle dengan badan kecil dan dua ekor panjang. Artinya sama saja: harga banyak bergerak, tetapi berakhir dekat titik awal.</p>
<p>Trader harian melihat 24 peluang. Investor jangka panjang melihat satu hari yang tidak mengubah apa-apa. Keduanya membaca data yang identik. Yang membedakan adalah jangka waktu keputusan mereka, bukan kebenaran grafiknya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Grafik hanya mencatat transaksi di bursa tertentu. Harga Bitcoin di satu bursa bisa berbeda beberapa puluh dolar dari bursa lain, dan bursa kecil dengan volume tipis bisa menampilkan wick ekstrem yang tidak mencerminkan pasar sesungguhnya. Selalu periksa bursa mana yang jadi sumber grafik Anda. Pola candle juga bukan ramalan, melainkan rangkuman apa yang sudah terjadi.</div>` },

        { judul: 'Tren, support, dan resistance: level yang benar-benar dipakai orang', isi: `
<h3>Konsepnya</h3>
<p>Harga tidak bergerak acak sepenuhnya, tetapi juga tidak tunduk pada garis yang digambar di grafik. Yang sebenarnya terjadi lebih sederhana: pada harga tertentu, cukup banyak orang punya alasan untuk membeli atau menjual. Kumpulan alasan itulah yang membuat harga melambat, berhenti, atau berbalik.</p>
<p><b>Support</b> adalah daerah harga tempat pembelian biasanya cukup kuat untuk menahan penurunan. <b>Resistance</b> kebalikannya, daerah tempat penjualan menahan kenaikan. Perhatikan kata <i>daerah</i>. Support bukan satu angka persis, melainkan rentang. Menganggapnya satu angka membuat orang memasang stop loss terlalu rapat lalu tersapu oleh gerakan biasa.</p>

<h3>Kenapa sebuah level jadi penting</h3>
<ol>
<li><b>Banyak orang membeli di sana.</b> Kalau harga pernah lama berputar di satu rentang, banyak posisi terbentuk di situ. Ketika harga kembali, pemilik posisi itu bereaksi: sebagian menambah, sebagian buru-buru keluar di titik impas.</li>
<li><b>Angka bulat.</b> Manusia suka angka rapi. Order menumpuk di 100.000, bukan di 99.847. Penumpukan itu nyata dan terlihat di buku order.</li>
<li><b>Puncak dan dasar sebelumnya.</b> Titik tertinggi atau terendah yang mudah dilihat semua orang jadi tempat banyak order dipasang.</li>
<li><b>Level yang dipakai pemain besar.</b> Harga rata-rata pembelian sebuah dana, atau titik likuidasi besar di pasar derivatif, menciptakan daerah reaksi yang nyata.</li>
</ol>
<p>Kesimpulan yang penting: level bekerja karena <b>banyak orang memperhatikannya</b>, bukan karena ada sifat ajaib pada angka itu. Level yang hanya Anda lihat, yang butuh garis miring aneh dan zoom tertentu untuk terlihat, hampir pasti tidak berguna.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Tren naik</b>: rangkaian puncak yang makin tinggi dan lembah yang makin tinggi. Tren turun kebalikannya.</li>
<li><b>Sideways (ranging)</b>: harga berputar di antara support dan resistance tanpa arah jelas. Sebagian besar waktu pasar ada di keadaan ini.</li>
<li><b>Breakout</b>: harga menembus level lalu bertahan di luarnya.</li>
<li><b>Fakeout</b>: harga menembus lalu cepat kembali. Sering terjadi persis di level yang paling banyak diperhatikan, karena di situlah order stop menumpuk.</li>
<li><b>Flip</b>: resistance yang tertembus lalu berubah peran jadi support, dan sebaliknya.</li>
</ul>

<h3>Contoh</h3>
<p>Sebuah aset berputar antara 20 dan 24 dolar selama dua bulan. Rentang itu terlihat jelas oleh semua orang. Suatu hari harga menembus 24 dan naik ke 24,6, lalu dalam dua jam jatuh kembali ke 22. Yang terjadi bukan sihir. Di atas 24 menumpuk dua jenis order: order beli dari orang yang menunggu breakout, dan order stop dari orang yang sudah menjual di dekat 24. Ketika order-order itu tereksekusi sekaligus, pihak yang ingin menjual dalam jumlah besar mendapat harga bagus. Setelah tekanan beli tadi habis, harga tidak punya tenaga lagi.</p>
<p>Inilah sebabnya banyak trader berpengalaman tidak masuk saat breakout terjadi, melainkan menunggu harga kembali menguji level itu dari sisi atas. Kalau level bertahan, breakout-nya nyata. Kalau tidak, kerugiannya kecil.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Support dan resistance adalah alat bantu membaca perilaku ramai, bukan hukum alam. Level bisa patah kapan saja kalau ada berita, likuidasi besar, atau penjual yang jauh lebih besar dari biasanya. Di aset berkapitalisasi kecil, satu pemegang besar bisa menghancurkan semua level sendirian. Jangan pernah memakai level sebagai alasan untuk tidak memasang stop loss.</div>` },

        { judul: 'Volume dan likuiditas: kenapa harga tanpa volume menipu', isi: `
<h3>Konsepnya</h3>
<p>Harga memberi tahu <i>berapa</i>. Volume memberi tahu <i>seberapa serius</i>. Kenaikan 10 persen dengan volume tiga kali lipat rata-rata berarti banyak pihak benar-benar berpindah posisi. Kenaikan 10 persen dengan volume sepi berarti hanya sedikit transaksi yang menggerakkan harga, dan angka itu bisa hilang secepat munculnya.</p>
<p><b>Likuiditas</b> adalah hal yang berkaitan tapi berbeda: seberapa banyak yang bisa Anda beli atau jual tanpa menggeser harga. Aset likuid menyerap order besar tanpa goyah. Aset tidak likuid bergerak jauh hanya karena satu order sedang.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Order book</b>: daftar order beli dan jual yang sedang menunggu di bursa, lengkap dengan harga dan jumlahnya.</li>
<li><b>Spread</b>: selisih antara harga beli tertinggi dan harga jual terendah. Spread lebar menandakan likuiditas tipis.</li>
<li><b>Slippage</b>: selisih antara harga yang Anda harapkan dan harga yang benar-benar Anda dapat. Muncul ketika order Anda lebih besar dari likuiditas di harga itu.</li>
<li><b>Depth</b>: banyaknya order yang menumpuk di sekitar harga sekarang.</li>
<li><b>Wash trading</b>: transaksi palsu yang dibuat untuk menggelembungkan angka volume. Nyata dan masih terjadi di sebagian bursa.</li>
</ul>

<h3>Langkah memeriksanya</h3>
<p>Tiga pertanyaan yang layak diajukan sebelum percaya pada sebuah gerakan harga:</p>
<ol>
<li><b>Volumenya dari mana?</b> Kalau seluruh volume sebuah token berasal dari satu bursa kecil, angka harganya rapuh. Periksa sebarannya di CoinGecko atau CoinMarketCap, yang menampilkan volume per pasangan per bursa.</li>
<li><b>Berapa dalam order book-nya?</b> Hitung kira-kira berapa dolar yang dibutuhkan untuk menggerakkan harga satu persen. Kalau jawabannya kecil, Anda sedang melihat pasar yang mudah didorong siapa saja.</li>
<li><b>Apakah volume naik bersama harga?</b> Kenaikan harga dengan volume menurun biasanya berarti tenaga pembeli menipis, walaupun grafiknya masih hijau.</li>
</ol>
<p>Untuk aset di blockchain ada pemeriksaan tambahan yang tidak dimiliki pasar saham: likuiditas di kolam DEX bisa dilihat langsung lewat DefiLlama, termasuk berapa besar kolamnya. Kolam kecil berarti harga di grafik cuma berlaku untuk transaksi kecil.</p>

<h3>Contoh</h3>
<p>Sebuah token baru menunjukkan kenaikan 400 persen dalam seminggu dengan volume harian 30 juta dolar. Terlihat ramai. Ketika diperiksa, 27 juta dari volume itu berasal dari satu bursa yang tidak memungut biaya perdagangan, dan kolam likuiditas terbesarnya di DEX hanya 800 ribu dolar. Artinya menjual 100 ribu dolar saja sudah menggerakkan harga beberapa persen ke bawah. Grafiknya benar, tetapi harga itu tidak bisa diuangkan dalam jumlah besar.</p>
<p>Kesenjangan antara harga di layar dan harga yang benar-benar bisa Anda dapat adalah salah satu jebakan paling mahal bagi pemula. Ia tidak terlihat di grafik sama sekali.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka volume yang dilaporkan bursa tidak selalu jujur. Sejumlah penelitian sejak 2019 menemukan sebagian besar volume yang dilaporkan bursa kecil tidak mencerminkan perdagangan nyata. Pakai volume sebagai tanda peringatan, bukan sebagai bukti. Likuiditas juga tidak tetap: kolam DEX bisa ditarik pemiliknya kapan saja, dan market maker bisa mundur persis ketika pasar panik, yaitu saat Anda paling butuh menjual.</div>` },
      ],
      kuis: [
        { tanya: 'Badan sebuah candle menunjukkan…',
          pilihan: ['Jarak antara harga pembukaan dan harga penutupan pada periode itu', 'Harga tertinggi dan terendah yang pernah dicapai aset', 'Jumlah transaksi yang terjadi', 'Ramalan arah harga berikutnya'],
          jelas: 'Badan candle adalah open sampai close. Titik tertinggi dan terendah digambarkan oleh wick, bukan badan.' },
        { tanya: 'Kenapa membaca grafik sebaiknya dimulai dari timeframe besar?',
          pilihan: ['Supaya arah umum diketahui dulu, baru dicari titik masuk di timeframe kecil', 'Karena grafik besar lebih akurat secara matematis', 'Karena bursa hanya memperbarui grafik besar', 'Karena candle mingguan tidak bisa salah'],
          jelas: 'Data yang sama melahirkan cerita berbeda di tiap timeframe. Menyimpulkan arah pasar dari grafik 5 menit adalah kesalahan urutan yang mahal.' },
        { tanya: 'Sebuah level support bekerja terutama karena…',
          pilihan: ['Banyak pelaku pasar memperhatikan dan memasang order di sekitar level itu', 'Angka itu punya sifat matematis khusus', 'Bursa memprogram harga agar berhenti di sana', 'Level support tidak pernah tertembus'],
          jelas: 'Level jadi berarti karena perhatian orang banyak. Level yang hanya terlihat oleh Anda sendiri, dengan garis dan zoom khusus, biasanya tidak berguna.' },
        { tanya: 'Harga menembus resistance lalu dalam waktu singkat jatuh kembali ke bawahnya. Peristiwa ini disebut…',
          pilihan: ['Fakeout, dan sering terjadi justru di level yang paling banyak diperhatikan', 'Flip, karena resistance berubah jadi support', 'Gap, karena ada lompatan harga', 'Slippage, karena order tidak terisi'],
          jelas: 'Di atas resistance menumpuk order beli breakout dan order stop. Ketika tereksekusi sekaligus, pihak yang ingin menjual besar mendapat harga bagus, lalu tenaga beli habis.' },
        { tanya: 'Sebuah token naik tajam tetapi kolam likuiditasnya hanya beberapa ratus ribu dolar. Artinya…',
          pilihan: ['Harga di grafik hanya berlaku untuk transaksi kecil; menjual dalam jumlah besar akan menjatuhkan harga', 'Token itu pasti penipuan', 'Harga akan naik lebih cepat lagi', 'Volume yang dilaporkan bursa pasti akurat'],
          jelas: 'Likuiditas menentukan berapa banyak yang bisa dijual tanpa menggeser harga. Kesenjangan antara harga di layar dan harga yang benar-benar didapat tidak terlihat di grafik.' },
        { tanya: 'Kenaikan harga yang disertai volume menurun biasanya menandakan…',
          pilihan: ['Tenaga pembeli sedang menipis meski grafiknya masih hijau', 'Tren naik makin kuat', 'Bursa sedang bermasalah', 'Harga akan naik persis sebesar penurunan volume'],
          jelas: 'Harga memberi tahu berapa, volume memberi tahu seberapa serius. Gerakan tanpa volume berarti sedikit pihak yang benar-benar berpindah posisi.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 2, SIKLUS DAN STRUKTUR PASAR
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'struktur', judul: 'Siklus dan Struktur Pasar',
      ringkas: 'Empat fase yang berulang di hampir setiap pasar, tanda-tanda yang bisa dilihat di grafik dan di data on-chain, serta seberapa jauh gagasan "uang pintar" boleh dipercaya.',
      pelajaran: [
        { judul: 'Empat fase: akumulasi, kenaikan, distribusi, penurunan', isi: `
<h3>Konsepnya</h3>
<p>Gagasan bahwa pasar bergerak dalam siklus sudah berumur lebih dari seabad. Richard Wyckoff, seorang pialang di New York pada awal 1900-an, merumuskannya dengan cara yang masih dipakai sampai sekarang: harga berputar melewati empat fase, dan setiap fase punya perilaku yang bisa dikenali.</p>
<ol>
<li><b>Akumulasi.</b> Setelah penurunan panjang, harga berhenti turun dan bergerak menyamping. Berita masih buruk, minat orang rendah, volume mengecil. Pembeli berjangka panjang mengumpulkan posisi perlahan tanpa mendorong harga naik.</li>
<li><b>Kenaikan (markup).</b> Harga mulai membuat puncak yang makin tinggi. Perhatian publik kembali. Volume naik. Fase ini biasanya yang paling lama dan paling terasa enak.</li>
<li><b>Distribusi.</b> Harga berhenti naik dan bergerak menyamping di dekat puncak. Berita justru paling ramai dan paling optimistis. Pemegang lama menjual sedikit demi sedikit kepada pendatang baru.</li>
<li><b>Penurunan (markdown).</b> Harga jatuh, sering cepat. Optimisme berubah jadi penyangkalan, lalu menyerah. Volume memuncak di titik kepanikan.</li>
</ol>
<p>Yang membuat kerangka ini berguna bukan kemampuannya meramal, melainkan kemampuannya memberi konteks. Pertanyaan "sekarang kira-kira di fase mana" mengubah cara Anda menafsirkan berita yang sama.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Rentang (trading range)</b>: daerah menyamping tempat akumulasi atau distribusi berlangsung. Bisa berbulan-bulan.</li>
<li><b>Spring</b>: penurunan singkat ke bawah rentang lalu cepat kembali masuk. Menyapu stop loss dan sering muncul di akhir akumulasi.</li>
<li><b>Upthrust</b>: kebalikannya. Lonjakan singkat ke atas rentang lalu jatuh kembali, sering muncul di akhir distribusi.</li>
<li><b>Kapitulasi</b>: penjualan massal karena putus asa, biasanya dengan volume sangat besar dan candle merah panjang.</li>
</ul>

<h3>Kenapa fase menyamping paling sulit</h3>
<p>Akumulasi dan distribusi terlihat mirip di grafik: sama-sama menyamping, sama-sama membosankan. Bedanya baru jelas setelah selesai. Inilah alasan orang sering salah menebak, dan alasan kenapa taruhan besar di tengah rentang itu mahal.</p>
<p>Ada pembeda yang lebih dapat dipercaya daripada bentuk grafik, dan itu pembeda yang tidak dimiliki Wyckoff pada zamannya: <b>data on-chain</b>. Di akumulasi, koin cenderung mengalir keluar dari bursa ke dompet pribadi, dan porsi pasokan yang tidak bergerak lebih dari setahun naik. Di distribusi, arahnya terbalik. Glassnode dan CryptoQuant menyediakan angka ini, dan kursus Riset Fundamental membahas cara membacanya.</p>

<h3>Contoh</h3>
<p>Perhatikan pola berulang di pasar crypto: setiap kali harga Bitcoin mencetak rekor baru, jumlah pencarian kata "bitcoin" di Google melonjak, aplikasi bursa naik ke peringkat atas toko aplikasi, dan kenalan yang tidak pernah peduli tiba-tiba bertanya. Itu ciri khas fase distribusi, bukan karena ada rumusnya, tetapi karena butuh pembeli baru dalam jumlah besar untuk menyerap penjualan pemegang lama.</p>
<p>Sebaliknya, fase akumulasi terasa sepi. Tidak ada yang membicarakannya, media menulis bahwa crypto sudah mati, dan harganya bergerak sedikit sekali selama berbulan-bulan. Secara emosi, fase ini paling sulit dibeli justru karena terasa paling tidak menarik.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Fase hanya bisa dipastikan setelah lewat. Grafik yang menunjukkan siklus dengan rapi selalu grafik masa lalu. Tidak ada aturan berapa lama satu fase berlangsung, dan sebuah rentang bisa langsung berubah arah tanpa melewati pola yang rapi. Jangan mengubah kerangka ini jadi ramalan bertanggal.</div>` },

        { judul: '"Uang pintar" dan batas kejujuran konsep ini', isi: `
<h3>Konsepnya</h3>
<p>Istilah <b>smart money</b> atau uang pintar dipakai untuk menyebut pelaku besar yang dianggap punya informasi dan disiplin lebih baik: dana kelola, perusahaan perdagangan, penambang, pemegang awal. Lawannya disebut <b>retail</b>, yaitu pelaku kecil perorangan.</p>
<p>Ada inti yang benar di balik istilah ini. Pelaku besar memang tidak bisa membeli sekaligus tanpa menggerakkan harga, jadi mereka terpaksa mencicil dalam waktu lama. Mereka juga punya akses data dan biaya transaksi yang lebih baik. Jejak itu kadang terlihat: transaksi besar yang berulang di rentang harga sempit, atau perpindahan koin dari bursa ke dompet simpanan.</p>
<p>Tetapi istilah ini juga sering dipakai secara malas. Setiap gerakan yang merugikan orang banyak dijelaskan sebagai "permainan bandar". Penjelasan itu enak didengar karena memindahkan kesalahan ke pihak lain, dan justru karena itu berbahaya.</p>

<h3>Yang bisa diperiksa dan yang tidak</h3>
<table>
<tr><th>Klaim</th><th>Bisa diperiksa?</th><th>Cara</th></tr>
<tr><td>Koin berpindah dari bursa ke dompet pribadi dalam jumlah besar</td><td>Ya</td><td>Arus keluar bursa di Glassnode atau CryptoQuant</td></tr>
<tr><td>Dompet tertentu menambah posisi</td><td>Ya</td><td>Penjelajah blockchain, kalau alamatnya sudah dikenal</td></tr>
<tr><td>Posisi terbuka di pasar berjangka menumpuk di satu arah</td><td>Ya</td><td>Open interest dan funding rate di Coinglass</td></tr>
<tr><td>"Bandar sengaja menjatuhkan harga untuk mengambil stop loss Anda"</td><td>Tidak</td><td>Tidak ada data niat. Yang ada hanya data transaksi.</td></tr>
<tr><td>"Ada satu pihak yang mengendalikan pasar"</td><td>Tidak</td><td>Pasar crypto tersebar di puluhan bursa dan jutaan dompet</td></tr>
</table>
<p>Aturan praktisnya: kalau sebuah klaim tidak bisa ditunjukkan angkanya, klaim itu cerita, bukan analisis. Cerita boleh menghibur, tetapi jangan jadi dasar keputusan uang.</p>

<h3>Langkah yang lebih berguna daripada menebak niat</h3>
<p>Alih-alih menebak apa yang dipikirkan pemain besar, dua hal berikut lebih bisa dikerjakan:</p>
<ol>
<li><b>Lihat di mana stop loss orang banyak kemungkinan menumpuk.</b> Biasanya persis di bawah dasar yang terlihat jelas atau di atas puncak yang terlihat jelas. Sadari bahwa daerah itu rawan disapu, lalu letakkan stop Anda sedikit di luar daerah rapat itu.</li>
<li><b>Lihat data posisi berjangka.</b> Funding rate yang sangat tinggi berarti banyak pihak membayar mahal untuk memegang posisi beli dengan leverage. Keadaan seperti itu rapuh: satu penurunan kecil bisa memicu rantai likuidasi.</li>
</ol>
<p>Keduanya bukan ramalan. Keduanya cara mengurangi kemungkinan Anda berada di sisi yang ramai dan rapuh.</p>

<h3>Contoh</h3>
<p>Menjelang penurunan tajam, pola yang berulang biasanya begini: harga naik pelan selama beberapa hari, open interest di pasar berjangka naik tajam, dan funding rate positif tinggi. Artinya makin banyak orang masuk dengan pinjaman di arah yang sama. Ketika harga turun sedikit saja, posisi-posisi itu dilikuidasi, dan likuidasi itu sendiri menjadi penjualan paksa yang menurunkan harga lagi. Tidak perlu ada bandar. Strukturnya sendiri yang rapuh.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Data on-chain menunjukkan perpindahan, bukan alasan. Koin yang keluar dari bursa bisa berarti disimpan jangka panjang, bisa juga dipindahkan ke kustodian lain atau dipakai sebagai jaminan pinjaman. Label dompet di berbagai layanan analitik adalah dugaan, bukan kepastian, dan sering keliru. Jangan membangun keputusan besar hanya dari satu label dompet.</div>` },
      ],
      kuis: [
        { tanya: 'Fase akumulasi biasanya ditandai oleh…',
          pilihan: ['Harga menyamping setelah penurunan panjang, minat publik rendah, volume mengecil', 'Harga naik cepat dengan liputan media yang ramai', 'Volume memuncak karena kepanikan menjual', 'Puncak yang makin tinggi disertai antusiasme tinggi'],
          jelas: 'Akumulasi terasa membosankan dan sepi. Justru itu yang membuatnya sulit dibeli secara emosi.' },
        { tanya: 'Kenapa fase akumulasi dan distribusi sulit dibedakan saat sedang berlangsung?',
          pilihan: ['Keduanya sama-sama menyamping dan baru jelas bedanya setelah selesai', 'Keduanya selalu punya bentuk grafik yang identik secara matematis', 'Bursa menyembunyikan datanya', 'Distribusi tidak pernah terjadi di crypto'],
          jelas: 'Bentuk grafiknya mirip. Pembeda yang lebih dapat dipercaya adalah data on-chain, misalnya arah aliran koin masuk atau keluar bursa.' },
        { tanya: 'Penurunan singkat ke bawah rentang yang cepat kembali masuk, sering muncul di akhir akumulasi, disebut…',
          pilihan: ['Spring', 'Upthrust', 'Kapitulasi', 'Markup'],
          jelas: 'Spring menyapu stop loss di bawah rentang lalu harga kembali masuk. Upthrust adalah kebalikannya di akhir distribusi.' },
        { tanya: 'Klaim mana yang TIDAK bisa diperiksa dengan data?',
          pilihan: ['"Bandar sengaja menjatuhkan harga untuk mengambil stop loss Anda"', 'Koin berpindah dari bursa ke dompet pribadi dalam jumlah besar', 'Open interest pasar berjangka sedang menumpuk di satu arah', 'Funding rate sedang sangat tinggi'],
          jelas: 'Data blockchain dan data bursa menunjukkan perpindahan dan posisi, bukan niat. Kalau sebuah klaim tidak ada angkanya, itu cerita, bukan analisis.' },
        { tanya: 'Funding rate positif yang sangat tinggi menandakan…',
          pilihan: ['Banyak pihak membayar mahal untuk memegang posisi beli dengan leverage, sehingga pasar jadi rapuh', 'Harga pasti akan naik', 'Bursa sedang memberi bonus kepada pembeli', 'Likuiditas sedang sangat dalam'],
          jelas: 'Penumpukan posisi searah dengan pinjaman membuat penurunan kecil bisa memicu rantai likuidasi, dan likuidasi itu sendiri menekan harga lebih jauh.' },
        { tanya: 'Label "dompet milik institusi X" di layanan analitik sebaiknya diperlakukan sebagai…',
          pilihan: ['Dugaan yang bisa keliru, bukan kepastian', 'Fakta yang diverifikasi blockchain', 'Data resmi dari institusi tersebut', 'Informasi yang selalu diperbarui secara otomatis'],
          jelas: 'Blockchain mencatat alamat, bukan nama. Pemberian label adalah hasil penelusuran pihak ketiga dan sering salah.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 3, INDIKATOR DAN BATASNYA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'indikator', judul: 'Indikator dan Batasnya',
      ringkas: 'Apa yang sebenarnya dihitung moving average, RSI, dan MACD, kenapa semuanya terlambat, dan bagaimana memakainya tanpa tertipu oleh sinyal yang terlihat meyakinkan.',
      pelajaran: [
        { judul: 'Apa yang sebenarnya dihitung sebuah indikator', isi: `
<h3>Konsepnya</h3>
<p>Setiap indikator teknikal adalah rumus matematika yang bahan bakunya cuma harga dan volume masa lalu. Tidak ada indikator yang membaca berita, membaca laporan keuangan, atau tahu apa yang akan terjadi. Semuanya mengolah ulang data yang sudah ada.</p>
<p>Menyadari hal ini menghilangkan sebagian besar kesalahpahaman. Indikator berguna untuk <b>meringkas</b> sesuatu yang sulit dilihat mata, misalnya "apakah kenaikan belakangan ini tidak biasa dibanding kebiasaan aset ini". Indikator tidak berguna untuk meramal, karena bahannya semuanya dari belakang.</p>

<h3>Istilah dan alat yang dipakai</h3>
<ul>
<li><b>Moving average (MA)</b>: harga rata-rata selama sekian periode terakhir. MA 200 hari adalah rata-rata penutupan 200 hari terakhir. Gunanya meratakan gejolak sehingga arah umum terlihat. Versi <b>EMA</b> memberi bobot lebih besar pada data terbaru, jadi bereaksi lebih cepat tetapi juga lebih sering memberi sinyal palsu.</li>
<li><b>RSI (Relative Strength Index)</b>: membandingkan besarnya kenaikan dan penurunan selama 14 periode terakhir, lalu memetakannya ke skala 0 sampai 100. Angka di atas 70 sering disebut jenuh beli, di bawah 30 jenuh jual. Yang sebenarnya diukur hanyalah kecepatan perubahan harga belakangan, bukan mahal atau murah.</li>
<li><b>MACD</b>: selisih antara dua EMA (biasanya 12 dan 26 periode), plus satu garis sinyal. Gunanya melihat apakah gerakan jangka pendek sedang menjauh atau mendekat dari gerakan jangka menengah.</li>
</ul>

<h3>Kenapa semuanya terlambat</h3>
<p>Ini bukan kekurangan yang bisa diperbaiki, melainkan sifat dasarnya. MA 200 hari baru berubah arah setelah harga cukup lama bergerak ke arah baru. RSI baru menyentuh 70 setelah kenaikannya terjadi. Indikator adalah cermin spion, dan spion memang berguna asal Anda tahu ia tidak menunjukkan jalan di depan.</p>
<p>Masalah muncul ketika orang memakai spion untuk menyetir. Membeli karena "RSI baru memotong ke atas 30" tanpa alasan lain berarti bertaruh bahwa pola masa lalu akan terulang persis. Kadang benar, sering tidak, dan yang membedakan bukan indikatornya melainkan manajemen risiko di belakangnya.</p>

<h3>Contoh</h3>
<p>Selama tren naik yang kuat, RSI bisa bertahan di atas 70 selama berminggu-minggu. Orang yang menjual di sentuhan 70 pertama karena dianggap "jenuh beli" akan melewatkan sebagian besar kenaikan, lalu kemungkinan besar membeli lagi di harga lebih tinggi karena tidak tahan melihatnya terus naik.</p>
<p>Sebaliknya, dalam pasar menyamping, RSI 70 dan 30 memang sering menandai titik balik. Indikator yang sama memberi hasil berlawanan tergantung keadaan pasar. Karena itu langkah pertama selalu menentukan keadaannya dulu: sedang tren atau sedang menyamping. Baru setelah itu indikator dipilih.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Semua angka bawaan indikator (14 untuk RSI, 12/26 untuk MACD, 200 untuk MA) adalah pilihan sejarah, bukan hasil penelitian yang membuktikannya terbaik. Angka-angka itu populer karena sudah lama dipakai, dan sebagian kegunaannya berasal dari kenyataan bahwa banyak orang memakainya. Mengutak-atik angka sampai terlihat cocok dengan grafik masa lalu adalah jebakan yang dibahas di kursus Menguji Strategi.</div>` },

        { judul: 'Memakai indikator tanpa tertipu', isi: `
<h3>Konsepnya</h3>
<p>Indikator paling berguna ketika ia menjawab pertanyaan yang sudah Anda punya, bukan ketika ia yang memberi Anda pertanyaan. Urutannya penting. Pertama tentukan keadaan pasar dan rencana Anda, baru pilih alat yang membantu menjalankan rencana itu.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Tentukan keadaan dulu.</b> Sedang tren atau menyamping? Salah satu cara sederhana: lihat apakah harga bergerak jauh dari MA panjang, atau berputar rapat di sekitarnya.</li>
<li><b>Pilih alat yang sesuai keadaan.</b> Di pasar tren, alat pengikut tren (MA, MACD) masuk akal. Di pasar menyamping, alat batas atas bawah (RSI, Bollinger Band) lebih masuk akal. Memakai alat yang salah untuk keadaan yang salah adalah sumber kerugian paling umum.</li>
<li><b>Pakai maksimal dua atau tiga.</b> Menumpuk delapan indikator tidak menambah informasi, karena sebagian besar menghitung hal yang sama dari data yang sama. Yang bertambah hanya rasa yakin, dan itu yang berbahaya.</li>
<li><b>Tetapkan aturan sebelum masuk.</b> Tulis persis apa yang membuat Anda masuk, apa yang membuat Anda keluar rugi, dan apa yang membuat Anda keluar untung. Kalau aturannya tidak bisa ditulis dalam tiga kalimat, aturannya belum jelas.</li>
</ol>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Divergence</b>: harga membuat puncak baru tetapi indikator tidak ikut. Sering dianggap tanda pelemahan, tetapi sering pula gagal, terutama di tren kuat.</li>
<li><b>Golden cross</b>: MA pendek memotong ke atas MA panjang. <b>Death cross</b> kebalikannya. Populer di berita, tetapi sinyalnya muncul jauh setelah gerakan besarnya terjadi.</li>
<li><b>Konfluensi</b>: beberapa alasan berbeda menunjuk ke level yang sama. Lebih berarti daripada satu alasan, selama alasannya memang berbeda jenis, bukan tiga indikator yang menghitung hal serupa.</li>
</ul>

<h3>Contoh</h3>
<p>Dua trader melihat grafik yang sama. Yang pertama membuka sepuluh indikator, mencari yang paling mendukung keinginannya membeli, lalu membeli. Yang kedua sudah menetapkan lebih dulu: "saya hanya membeli aset yang harganya di atas MA 200 hari, dan saya keluar kalau turun di bawahnya." Trader kedua akan sering salah, tetapi kesalahannya konsisten dan bisa diukur. Trader pertama tidak pernah tahu apakah metodenya berhasil, karena metodenya berubah setiap kali.</p>
<p>Perbedaannya bukan kecerdasan. Perbedaannya adalah yang satu punya aturan yang bisa diuji, yang satu lagi punya pembenaran.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Tidak ada susunan indikator yang menjamin untung. Banyak layanan berbayar menjual "indikator rahasia" dengan tangkapan layar hasil masa lalu yang dipilih-pilih. Perlakukan setiap klaim seperti itu sebagai iklan sampai Anda bisa menguji sendiri aturannya di data yang belum pernah dipakai untuk merancangnya. Cara mengujinya ada di kursus berikutnya.</div>` },
      ],
      kuis: [
        { tanya: 'Bahan baku semua indikator teknikal adalah…',
          pilihan: ['Harga dan volume masa lalu', 'Laporan keuangan proyek', 'Berita dan sentimen media sosial', 'Data pemesanan dari bursa berjangka dunia'],
          jelas: 'Indikator hanya mengolah ulang data yang sudah ada. Karena itu semuanya bersifat tertinggal dan tidak bisa meramal.' },
        { tanya: 'RSI sebenarnya mengukur…',
          pilihan: ['Kecepatan perubahan harga belakangan, dipetakan ke skala 0 sampai 100', 'Apakah harga sebuah aset mahal atau murah dibanding nilai wajarnya', 'Jumlah pembeli dibanding penjual di order book', 'Besarnya volume dibanding rata-rata'],
          jelas: 'RSI membandingkan besar kenaikan dan penurunan selama 14 periode terakhir. Ia tidak tahu apa-apa tentang nilai wajar.' },
        { tanya: 'Di tengah tren naik yang kuat, RSI bertahan di atas 70 selama berminggu-minggu. Kesimpulan yang tepat…',
          pilihan: ['Sinyal jenuh beli tidak berlaku sama di pasar tren dan pasar menyamping', 'Harga pasti akan segera berbalik turun', 'Indikatornya rusak', 'RSI di atas 70 selalu berarti harus menjual'],
          jelas: 'Alat yang sama memberi hasil berlawanan tergantung keadaan pasar. Karena itu keadaan pasar ditentukan dulu, baru alat dipilih.' },
        { tanya: 'Kenapa menumpuk delapan indikator sekaligus biasanya tidak membantu?',
          pilihan: ['Sebagian besar menghitung hal serupa dari data yang sama, jadi yang bertambah hanya rasa yakin', 'Grafiknya jadi lambat dimuat', 'Bursa membatasi jumlah indikator', 'Indikator hanya boleh dipakai satu per satu menurut aturan pasar'],
          jelas: 'Informasi tidak bertambah kalau sumbernya sama. Yang bertambah adalah keyakinan palsu, dan itu justru berbahaya.' },
        { tanya: 'Golden cross dan death cross punya kelemahan utama berupa…',
          pilihan: ['Sinyalnya muncul jauh setelah gerakan besarnya sudah terjadi', 'Perhitungannya berbeda di setiap bursa', 'Hanya berlaku untuk saham, tidak untuk crypto', 'Membutuhkan data berbayar'],
          jelas: 'Keduanya dihitung dari moving average yang memang tertinggal. Popularitasnya di berita jauh melebihi kegunaannya sebagai sinyal masuk.' },
        { tanya: 'Konfluensi menjadi berarti kalau…',
          pilihan: ['Alasan-alasannya memang berbeda jenis, bukan tiga indikator yang menghitung hal serupa', 'Jumlah indikator yang setuju minimal lima', 'Semua indikator memakai periode yang sama', 'Sinyalnya muncul di timeframe terkecil'],
          jelas: 'Tiga alat yang mengolah data sama tidak saling mengonfirmasi. Yang saling menguatkan adalah bukti dari jenis yang benar-benar berbeda.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 4, TIGA KELUARGA STRATEGI
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'strategi', judul: 'Tiga Keluarga Strategi',
      ringkas: 'Hampir semua strategi yang dijual orang adalah variasi dari tiga gagasan dasar: mengikuti tren, bertaruh harga kembali ke rata-rata, atau membeli terjadwal tanpa meramal sama sekali.',
      pelajaran: [
        { judul: 'Mengikuti tren: sering salah, sesekali benar besar', isi: `
<h3>Konsepnya</h3>
<p>Strategi pengikut tren bertaruh pada satu gagasan sederhana: aset yang sedang naik cenderung terus naik untuk sementara, dan aset yang sedang turun cenderung terus turun. Tidak ada usaha menebak puncak atau dasar. Yang dilakukan hanya ikut sampai arahnya berubah.</p>
<p>Yang membuat strategi ini bertahan berpuluh tahun di berbagai pasar bukan tingkat keberhasilannya. Tingkat keberhasilannya justru rendah, sering hanya 30 sampai 40 persen. Yang membuatnya bekerja adalah <b>bentuk hasilnya</b>: banyak kerugian kecil, sesekali keuntungan sangat besar. Satu tren besar bisa menutup dua puluh kerugian kecil sebelumnya.</p>

<h3>Cara kerjanya</h3>
<ol>
<li><b>Tentukan tanda tren.</b> Misalnya harga menembus tertinggi 20 hari terakhir, atau harga berada di atas MA 100 hari.</li>
<li><b>Masuk ketika tanda muncul</b>, tanpa menunggu harga "lebih murah". Menunggu harga turun dulu adalah cara membatalkan seluruh logika strategi ini.</li>
<li><b>Pasang titik keluar yang bergerak.</b> Trailing stop, misalnya di bawah terendah 10 hari terakhir. Titik keluar ikut naik saat harga naik, tetapi tidak pernah turun.</li>
<li><b>Terima kerugian kecil berkali-kali.</b> Ini bagian yang paling sulit secara emosi dan paling sering merusak strategi yang sebenarnya sehat.</li>
</ol>

<h3>Kenapa banyak orang gagal memakainya</h3>
<p>Bukan karena aturannya rumit. Justru karena aturannya sederhana tapi menyakitkan. Setelah lima kali rugi kecil berturut-turut, orang mulai menambah syarat, melewatkan sinyal, atau memperlebar stop. Ketika tren besar akhirnya datang, mereka sudah tidak ikut. Padahal seluruh keuntungan strategi ini datang dari beberapa kejadian saja per tahun.</p>
<p>Ini sifat yang penting dipahami: strategi pengikut tren <b>membayar Anda untuk bertahan</b>, bukan untuk pintar. Kalau Anda tidak sanggup menjalankannya konsisten, strategi ini bukan untuk Anda, dan itu bukan aib.</p>

<h3>Contoh</h3>
<p>Aturan sederhana: beli kalau harga menembus tertinggi 50 hari, jual kalau menembus terendah 20 hari. Dijalankan setahun penuh, hasilnya mungkin tujuh kali masuk. Lima di antaranya rugi masing-masing 4 persen, satu impas, dan satu memberi keuntungan 60 persen karena kebetulan menangkap satu tren besar. Totalnya positif, tetapi 85 persen dari waktu Anda merasa metodenya tidak bekerja.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Strategi ini hancur di pasar menyamping yang panjang, karena terus memberi sinyal palsu. Ia juga butuh modal yang sanggup menahan rentetan kerugian kecil tanpa membuat Anda berhenti. Di aset dengan likuiditas tipis, slippage saat masuk dan keluar bisa memakan sebagian besar keuntungan. Angka 50 dan 20 di atas hanya contoh, bukan rekomendasi.</div>` },

        { judul: 'Kembali ke rata-rata, dan kenapa ini paling berbahaya bagi pemula', isi: `
<h3>Konsepnya</h3>
<p>Strategi kembali ke rata-rata (<b>mean reversion</b>) bertaruh pada kebalikannya: harga yang bergerak terlalu jauh dari kebiasaannya cenderung kembali. Membeli saat jatuh tajam, menjual saat melonjak tajam.</p>
<p>Bentuk hasilnya juga kebalikan dari pengikut tren: <b>sering benar dalam jumlah kecil, sesekali salah dalam jumlah besar</b>. Tingkat keberhasilannya bisa 70 persen atau lebih, yang membuatnya terasa sangat menyenangkan. Justru di situ bahayanya.</p>

<h3>Kenapa berbahaya</h3>
<p>Setelah dua puluh kali berhasil berturut-turut, orang mulai percaya bahwa "harga selalu kembali". Ukuran posisi dinaikkan, stop loss dilepas karena dianggap mengganggu. Lalu datang satu kejadian ketika harga tidak kembali, dan kerugian tunggal itu menghapus seluruh keuntungan berbulan-bulan.</p>
<p>Sejarah crypto penuh contohnya. Token yang turun 60 persen dan tidak pernah kembali. Stablecoin algoritmik yang lepas dari patokannya pada Mei 2022 dan tidak pulih. Strategi yang mengandalkan "pasti kembali" selalu punya satu kejadian yang menghabiskannya.</p>

<h3>Langkah memakainya dengan lebih aman</h3>
<ul>
<li><b>Hanya pada aset besar dan likuid.</b> Bitcoin dan Ethereum punya sejarah pulih dari penurunan tajam. Token kecil sering tidak.</li>
<li><b>Stop loss wajib, tanpa pengecualian.</b> Justru karena strategi ini sering benar, satu kali salah tanpa stop bisa fatal.</li>
<li><b>Ukuran posisi tetap.</b> Jangan menaikkan ukuran setelah beruntun menang. Rentetan kemenangan adalah sifat normal strategi ini, bukan bukti Anda makin pintar.</li>
<li><b>Pastikan pasarnya memang menyamping.</b> Membeli penurunan di tengah tren turun adalah cara paling umum kehilangan modal besar.</li>
</ul>

<h3>Contoh</h3>
<p>Seseorang membeli setiap kali Bitcoin turun 8 persen dalam sehari, lalu menjual setelah naik 4 persen. Dalam pasar menyamping, aturan ini bisa menang belasan kali berturut-turut. Dalam tren turun panjang, aturan yang sama membuatnya membeli di 60 ribu, lalu di 55 ribu, lalu di 48 ribu, dengan posisi yang makin besar dan tanpa titik berhenti. Strateginya tidak berubah. Keadaan pasarnya yang berubah.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Rata-rata masa lalu bukan janji. Sebuah aset bisa memasuki keadaan baru yang permanen, misalnya karena proyeknya diretas, timnya bubar, atau regulasi berubah. Strategi ini juga sering dipasarkan dengan grafik hasil yang mengesankan karena periode ujinya dipilih dari pasar menyamping. Selalu tanyakan: bagaimana hasilnya di tahun terburuk?</div>` },

        { judul: 'DCA dan grid: strategi untuk orang yang mengaku tidak bisa meramal', isi: `
<h3>Konsepnya</h3>
<p>Dua strategi berikut punya kejujuran yang menyegarkan: keduanya mengakui sejak awal bahwa Anda tidak tahu arah harga.</p>
<p><b>DCA (dollar cost averaging)</b> adalah membeli dengan nominal tetap pada jadwal tetap, misalnya satu juta rupiah setiap tanggal 1. Ketika harga rendah Anda dapat lebih banyak, ketika tinggi lebih sedikit. Tidak ada keputusan yang perlu diambil, dan itulah kekuatannya.</p>
<p><b>Grid</b> adalah memasang serangkaian order beli di bawah harga sekarang dan order jual di atasnya, dengan jarak tetap. Setiap kali harga bergerak naik turun di dalam rentang, satu pasang order terpenuhi dan menghasilkan selisih kecil. Grid mencari nafkah dari gejolak, bukan dari arah.</p>

<h3>Kapan masing-masing masuk akal</h3>
<table>
<tr><th></th><th>DCA</th><th>Grid</th></tr>
<tr><td>Cocok untuk</td><td>Penumpukan jangka panjang</td><td>Pasar menyamping yang bergejolak</td></tr>
<tr><td>Butuh perhatian</td><td>Hampir tidak</td><td>Perlu dipantau dan disetel ulang</td></tr>
<tr><td>Risiko utama</td><td>Tren turun bertahun-tahun</td><td>Harga keluar dari rentang dan tidak kembali</td></tr>
<tr><td>Biaya</td><td>Rendah</td><td>Banyak transaksi, biaya menumpuk</td></tr>
<tr><td>Keputusan yang diperlukan</td><td>Memilih aset dan jadwal</td><td>Memilih rentang, jarak, dan modal per level</td></tr>
</table>

<h3>Kenapa DCA sering diremehkan</h3>
<p>Karena tidak terlihat pintar. Tidak ada cerita seru, tidak ada grafik yang bisa dipamerkan. Tetapi DCA menyelesaikan masalah yang membuat sebagian besar orang rugi, yaitu keputusan emosional di saat yang salah. Ia juga satu-satunya strategi di halaman ini yang bisa dijalankan orang yang punya pekerjaan penuh waktu.</p>
<p>Satu perbaikan yang masuk akal: DCA tetap butuh pilihan aset yang layak. Membeli token yang menuju nol setiap bulan tidak menghasilkan apa-apa selain kerugian yang teratur. Kursus Riset Fundamental membahas cara menyaringnya.</p>

<h3>Contoh</h3>
<p>Grid yang dipasang di rentang 3.000 sampai 4.000 dolar dengan 20 level akan bekerja bagus selama harga berputar di dalam rentang itu. Ketika harga menembus 4.000 dan terus naik, seluruh posisi sudah terjual di harga rendah dan Anda hanya menonton. Ketika harga jatuh ke 2.000, seluruh modal sudah terpakai membeli di atas dan Anda menanggung rugi besar. Grid menghasilkan uang dari gejolak di dalam rentang dan kehilangan uang dari arah yang keluar rentang.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> DCA tidak melindungi dari pilihan aset yang buruk dan tidak menjamin untung; ia hanya menghilangkan keputusan waktu. Grid sering dipasarkan oleh bursa sebagai fitur "penghasilan pasif", padahal ia strategi berisiko dengan biaya transaksi yang nyata dan kerugian besar kalau rentangnya salah. Bot grid milik bursa juga menahan dana Anda di bursa, dengan risiko kustodian yang dibahas di kursus Keamanan.</div>` },
      ],
      kuis: [
        { tanya: 'Strategi pengikut tren biasanya punya bentuk hasil berupa…',
          pilihan: ['Banyak kerugian kecil dan sesekali keuntungan sangat besar', 'Banyak keuntungan kecil dan sesekali kerugian sangat besar', 'Keuntungan yang stabil setiap bulan', 'Hasil yang sama di semua keadaan pasar'],
          jelas: 'Tingkat keberhasilannya rendah, sering 30 sampai 40 persen. Yang membuatnya bekerja adalah beberapa tren besar per tahun yang menutup banyak kerugian kecil.' },
        { tanya: 'Kesalahan paling umum yang merusak strategi pengikut tren adalah…',
          pilihan: ['Melewatkan sinyal setelah beberapa kali rugi kecil berturut-turut', 'Memasang trailing stop', 'Masuk tepat saat sinyal muncul', 'Memakai timeframe harian'],
          jelas: 'Seluruh keuntungan datang dari beberapa kejadian per tahun. Melewatkan sinyal karena lelah rugi kecil berarti kemungkinan besar melewatkan yang besar.' },
        { tanya: 'Kenapa strategi kembali ke rata-rata berbahaya bagi pemula?',
          pilihan: ['Karena sering benar, sehingga orang menaikkan posisi dan melepas stop sebelum satu kejadian besar menghapus semuanya', 'Karena tingkat keberhasilannya sangat rendah', 'Karena hanya bisa dipakai di saham', 'Karena membutuhkan modal sangat besar'],
          jelas: 'Rentetan kemenangan adalah sifat normal strategi ini, bukan bukti kepintaran. Justru itu yang membuat orang lengah menjelang kerugian besar.' },
        { tanya: 'Membeli setiap penurunan tajam paling berbahaya ketika…',
          pilihan: ['Pasar sedang dalam tren turun panjang, bukan menyamping', 'Volume sedang tinggi', 'Harga berada di atas MA 200', 'Aset yang dibeli sangat likuid'],
          jelas: 'Aturan yang sama bisa menang belasan kali di pasar menyamping lalu menghabiskan modal di tren turun. Keadaan pasarnya yang menentukan.' },
        { tanya: 'Kekuatan utama DCA adalah…',
          pilihan: ['Menghilangkan keputusan emosional soal waktu pembelian', 'Menjamin keuntungan dalam jangka panjang', 'Selalu mengalahkan strategi aktif', 'Melindungi dari pilihan aset yang buruk'],
          jelas: 'DCA menyelesaikan masalah waktu, bukan masalah pemilihan aset. Membeli token yang menuju nol setiap bulan hanya menghasilkan kerugian yang teratur.' },
        { tanya: 'Strategi grid menghasilkan uang dari… dan kehilangan uang dari…',
          pilihan: ['Gejolak di dalam rentang; arah yang keluar dari rentang', 'Tren panjang; pasar menyamping', 'Biaya transaksi; likuiditas tinggi', 'Berita positif; berita negatif'],
          jelas: 'Setiap naik turun di dalam rentang menghasilkan selisih kecil. Begitu harga keluar rentang dan tidak kembali, kerugiannya besar.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 5, RENCANA MASUK DAN RENCANA KELUAR
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'rencana', judul: 'Rencana Masuk dan Rencana Keluar',
      ringkas: 'Keputusan paling menentukan dibuat sebelum uang masuk. Cara menyusun alasan masuk, titik berhenti rugi, penjualan bertahap, dan rencana keluar untuk siklus panjang.',
      pelajaran: [
        { judul: 'Rencana masuk: tiga hal yang harus tertulis sebelum menekan beli', isi: `
<h3>Konsepnya</h3>
<p>Sebagian besar kerugian besar bukan disebabkan analisis yang salah, melainkan karena tidak ada rencana sama sekali. Orang membeli karena harganya sedang naik, lalu bingung harus berbuat apa ketika harganya turun. Kebingungan itulah yang mahal.</p>
<p>Rencana masuk yang layak cukup berisi tiga hal, dan ketiganya harus ditulis <b>sebelum</b> transaksi, bukan sesudah:</p>
<ol>
<li><b>Alasan.</b> Kenapa aset ini, kenapa sekarang. Satu atau dua kalimat. Kalau tidak bisa ditulis, berarti belum ada alasan.</li>
<li><b>Titik salah.</b> Harga berapa yang membuktikan alasan Anda keliru. Ini bukan "berapa saya sanggup rugi", melainkan "di harga berapa cerita saya batal".</li>
<li><b>Ukuran posisi.</b> Berapa rupiah yang masuk, dihitung dari jarak ke titik salah, bukan dari seberapa yakin Anda.</li>
</ol>

<h3>Cara menghitung ukuran posisi</h3>
<p>Ini bagian yang paling sering dilewati padahal paling menentukan. Rumusnya sederhana:</p>
<p><b>Ukuran posisi = (modal × persen risiko per transaksi) ÷ jarak ke stop loss dalam persen</b></p>
<p>Contoh dengan angka. Modal 50 juta rupiah. Anda memutuskan tidak pernah mempertaruhkan lebih dari 1 persen modal dalam satu transaksi, jadi 500 ribu rupiah. Titik salah Anda berada 10 persen di bawah harga masuk. Maka ukuran posisi = 500.000 ÷ 0,10 = 5 juta rupiah.</p>
<p>Perhatikan apa yang terjadi kalau stop Anda lebih rapat, misalnya 5 persen: ukuran posisi jadi 10 juta. Risiko rupiahnya tetap 500 ribu. Jarak stop menentukan ukuran, bukan keyakinan. Inilah yang membedakan orang yang bertahan lama dari orang yang tamat di satu transaksi.</p>

<h3>Istilah yang dipakai</h3>
<ul>
<li><b>Risiko per transaksi</b>: persen modal yang Anda relakan hilang kalau transaksi ini salah. Angka 1 sampai 2 persen umum dipakai trader profesional.</li>
<li><b>Risk-reward ratio</b>: perbandingan antara jarak ke target dan jarak ke stop. Rasio 1:3 berarti target tiga kali lebih jauh daripada stop.</li>
<li><b>Masuk bertahap (scaling in)</b>: membeli dalam beberapa bagian, bukan sekaligus. Mengurangi penyesalan soal waktu, tetapi menambah biaya transaksi.</li>
</ul>

<h3>Contoh</h3>
<p>Dua orang membeli aset yang sama di harga sama. Yang pertama memasukkan 40 persen modalnya karena "yakin sekali". Yang kedua menghitung: stop di 12 persen bawah, risiko 1 persen modal, jadi posisinya 8,3 persen modal. Harga turun 15 persen. Orang pertama kehilangan 6 persen modal total dan panik. Orang kedua kehilangan 1 persen dan tidur nyenyak, lalu masih punya modal untuk kesempatan berikutnya.</p>
<p>Keduanya salah menebak arah. Hanya satu yang masih bisa bermain besok.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Rumus ukuran posisi mengandaikan stop loss Anda benar-benar tereksekusi di harga yang diminta. Dalam penurunan cepat, terutama di aset tidak likuid atau saat bursa sedang penuh, eksekusi bisa jauh lebih buruk. Kalau memakai leverage, kerugian bisa melebihi perhitungan ini. Angka 1 persen bukan aturan baku, hanya titik awal yang umum.</div>` },

        { judul: 'Rencana keluar: stop loss, ambil untung bertahap, dan keluar dari siklus', isi: `
<h3>Konsepnya</h3>
<p>Masuk itu mudah karena penuh harapan. Keluar sulit karena selalu terasa salah: kalau menjual dan harga naik Anda menyesal, kalau menahan dan harga turun Anda menyesal. Satu-satunya jalan keluar dari perangkap ini adalah memutuskan lebih dulu, saat kepala masih dingin.</p>

<h3>Tiga jenis keluar</h3>
<ol>
<li><b>Keluar karena salah (stop loss).</b> Harga menyentuh titik yang membatalkan alasan Anda. Keluar tanpa negosiasi. Memindahkan stop menjauh adalah kebiasaan tunggal yang paling sering menghabiskan akun.</li>
<li><b>Keluar karena benar (ambil untung).</b> Paling baik dilakukan bertahap. Misalnya jual sepertiga di target pertama, pindahkan stop ke titik impas, biarkan sisanya berjalan dengan trailing stop. Anda mengunci sebagian hasil tanpa menutup kemungkinan tren besar.</li>
<li><b>Keluar karena berubah pikiran.</b> Alasan awal Anda tidak berlaku lagi, misalnya tim proyek bubar atau regulasi berubah. Ini keluar yang sah dan sering diabaikan orang yang terlalu kaku pada angka.</li>
</ol>

<h3>Rencana keluar untuk siklus panjang</h3>
<p>Bagi pemegang jangka panjang, pertanyaan yang sebenarnya bukan "kapan harga puncaknya" melainkan "berapa yang saya jual, di harga berapa, dan untuk apa uangnya". Puncak tidak bisa ditebak. Yang bisa disusun adalah tangga penjualan yang sudah ditulis sejak awal.</p>
<p>Bentuk yang masuk akal: tentukan beberapa tingkat harga, lalu tetapkan porsi yang dijual di masing-masing. Misalnya 10 persen di tingkat pertama, 15 persen di tingkat kedua, 20 persen di tingkat ketiga, dan seterusnya. Kalau harga hanya mencapai tingkat pertama, Anda tetap menjual sebagian. Kalau melewati semuanya, Anda menjual makin banyak di harga makin tinggi. Tidak ada tebakan puncak di dalamnya.</p>
<p>Satu pertanyaan yang jarang ditanyakan dan paling penting: <b>uangnya untuk apa</b>. Menjual tanpa tujuan membuat uang itu kembali masuk pasar dalam beberapa minggu, biasanya di harga lebih tinggi. Tujuan yang jelas, misalnya melunasi hutang, modal usaha, atau dana darurat, membuat penjualan terasa masuk akal dan bertahan.</p>

<h3>Contoh</h3>
<p>Seorang pemegang menulis rencananya jauh sebelum pasar ramai: jual 10 persen di harga X, 15 persen di 1,3X, 20 persen di 1,6X, 25 persen di 2X, dan sisanya disimpan tanpa batas waktu. Ia tidak tahu apakah harga akan mencapai 2X. Yang ia tahu, di setiap kemungkinan ia sudah punya jawaban. Ketika pasar memanas dan semua orang meramal angka yang makin tinggi, ia tidak perlu berpikir sama sekali. Ia cuma menjalankan daftar.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Rencana keluar bertahap menjamin Anda tidak pernah menjual semua di harga tertinggi. Itu memang harganya, dan itu ditukar dengan jaminan bahwa Anda tidak menjual semua di harga terendah juga. Stop loss tidak selalu tereksekusi di harga yang diminta. Penjualan juga punya akibat pajak: di Indonesia transaksi aset kripto di pedagang terdaftar dikenai pajak final yang dipungut saat transaksi, dan aturannya bisa berubah, jadi periksa ketentuan terbaru sebelum menyusun rencana besar.</div>` },
      ],
      kuis: [
        { tanya: 'Tiga hal yang harus tertulis sebelum menekan tombol beli adalah…',
          pilihan: ['Alasan, titik yang membuktikan alasan itu salah, dan ukuran posisi', 'Target harga, nama proyek, dan nama bursa', 'Indikator yang dipakai, timeframe, dan warna candle', 'Modal, keyakinan, dan rencana cadangan'],
          jelas: 'Kerugian besar biasanya bukan karena analisis salah, melainkan karena tidak ada rencana sehingga orang bingung ketika harga bergerak melawan.' },
        { tanya: 'Modal 50 juta, risiko per transaksi 1 persen, stop loss 10 persen di bawah harga masuk. Ukuran posisinya…',
          pilihan: ['5 juta rupiah', '500 ribu rupiah', '10 juta rupiah', '50 juta rupiah'],
          jelas: 'Risiko rupiah 500 ribu dibagi jarak stop 0,10 menghasilkan posisi 5 juta. Jarak stop yang menentukan ukuran, bukan seberapa yakin Anda.' },
        { tanya: 'Kalau stop loss dipasang lebih rapat, ukuran posisi seharusnya…',
          pilihan: ['Lebih besar, karena risiko rupiahnya tetap sama', 'Lebih kecil, karena risikonya lebih tinggi', 'Tidak berubah', 'Ditentukan oleh tingkat keyakinan'],
          jelas: 'Rumusnya membagi risiko rupiah dengan jarak stop. Stop yang lebih rapat menghasilkan posisi lebih besar dengan risiko rupiah yang persis sama.' },
        { tanya: 'Kebiasaan tunggal yang paling sering menghabiskan akun adalah…',
          pilihan: ['Memindahkan stop loss menjauh ketika harga bergerak melawan', 'Mengambil untung terlalu cepat', 'Memakai timeframe harian', 'Menjual bertahap'],
          jelas: 'Stop loss hanya berguna kalau dihormati. Menggesernya mengubah kerugian kecil yang terencana menjadi kerugian besar tanpa batas.' },
        { tanya: 'Kelebihan utama rencana penjualan bertahap untuk siklus panjang adalah…',
          pilihan: ['Tidak perlu menebak puncak, karena setiap kemungkinan harga sudah punya jawaban', 'Menjamin menjual di harga tertinggi', 'Menghilangkan kewajiban pajak', 'Menghasilkan keuntungan lebih besar dari menjual sekaligus'],
          jelas: 'Tangga penjualan menukar kemungkinan menjual semua di puncak dengan jaminan tidak menjual semua di dasar. Puncak memang tidak bisa ditebak.' },
        { tanya: 'Pertanyaan penting yang paling sering dilewatkan saat menyusun rencana keluar adalah…',
          pilihan: ['Uang hasil penjualannya untuk apa', 'Bursa mana yang dipakai', 'Jam berapa transaksi dilakukan', 'Indikator apa yang dipasang'],
          jelas: 'Menjual tanpa tujuan membuat uangnya kembali masuk pasar dalam beberapa minggu, biasanya di harga lebih tinggi.' },
      ] },

    // ─────────────────────────────────────────────────────────────────────
    // KURSUS 6, MENGUJI STRATEGI DENGAN DATA
    // ─────────────────────────────────────────────────────────────────────
    { kode: 'uji', judul: 'Menguji Strategi dengan Data',
      ringkas: 'Cara memeriksa apakah sebuah aturan benar-benar bekerja atau hanya terlihat bagus di masa lalu, serta angka apa saja yang layak dicatat dari transaksi Anda sendiri.',
      pelajaran: [
        { judul: 'Backtest dan empat cara ia menipu Anda', isi: `
<h3>Konsepnya</h3>
<p><b>Backtest</b> adalah menjalankan aturan strategi Anda di data harga masa lalu untuk melihat hasilnya. Gagasannya masuk akal: sebelum mempertaruhkan uang, periksa dulu apakah aturannya pernah bekerja.</p>
<p>Masalahnya, backtest sangat mudah dibuat terlihat bagus. Hampir semua strategi yang dijual dengan grafik hasil mengesankan adalah hasil backtest yang cacat. Empat cacat berikut yang paling sering, dan mengenalinya membuat Anda kebal terhadap sebagian besar penipuan.</p>

<h3>Empat jebakan</h3>
<ol>
<li><b>Overfitting.</b> Mengutak-atik angka sampai cocok dengan data masa lalu. Kalau Anda mencoba 200 kombinasi lalu memilih yang terbaik, kemungkinan besar yang Anda temukan adalah kebetulan, bukan pola. Tandanya: aturan dengan angka yang sangat spesifik, misalnya "RSI 13 pada timeframe 47 menit".</li>
<li><b>Melihat masa depan (lookahead bias).</b> Memakai informasi yang belum tersedia pada saat itu. Contoh paling umum: memutuskan berdasarkan harga penutupan sebuah candle lalu berpura-pura masuk di harga pembukaan candle yang sama.</li>
<li><b>Bias bertahan hidup (survivorship bias).</b> Menguji hanya pada aset yang masih ada sekarang. Ribuan token dari 2017 dan 2021 sudah lenyap. Strategi yang diuji hanya pada yang selamat akan terlihat jauh lebih baik daripada kenyataannya.</li>
<li><b>Melupakan biaya.</b> Biaya transaksi, slippage, biaya pendanaan posisi berjangka, dan pajak. Strategi yang banyak bertransaksi bisa berubah dari untung menjadi rugi hanya karena biaya dimasukkan.</li>
</ol>

<h3>Langkah menguji dengan lebih jujur</h3>
<ul>
<li><b>Pisahkan data.</b> Rancang aturan memakai sebagian data saja, misalnya 2018 sampai 2022. Uji di data yang belum pernah Anda lihat, misalnya 2023 sampai sekarang. Kalau hasilnya jatuh drastis, aturan Anda hanya menghafal masa lalu.</li>
<li><b>Uji di aset lain.</b> Aturan yang sehat biasanya bekerja lumayan di beberapa aset, bukan sempurna di satu aset.</li>
<li><b>Lihat periode terburuknya, bukan totalnya.</b> Berapa penurunan terdalam dari puncak (<b>max drawdown</b>)? Berapa lama waktu terlama untuk pulih? Angka itu yang menentukan apakah Anda sanggup menjalankannya.</li>
<li><b>Jalankan di uang kecil dulu.</b> Beberapa bulan dengan modal yang tidak menyakitkan akan mengajarkan hal yang tidak muncul di backtest mana pun, terutama tentang diri Anda sendiri.</li>
</ul>

<h3>Contoh</h3>
<p>Sebuah strategi menunjukkan keuntungan 900 persen di backtest 2020 sampai 2021. Angka itu mengesankan sampai Anda sadar hampir semua aset naik ratusan persen di periode itu. Pembanding yang jujur bukan nol, melainkan hasil kalau Anda cuma membeli dan menahan. Kalau strategi rumit Anda menghasilkan 900 persen sementara membeli dan diam menghasilkan 1.100 persen, strategi itu merugikan Anda sambil terlihat hebat.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Backtest yang bersih pun tidak menjamin masa depan. Pasar berubah: likuiditas berpindah, aturan bursa berubah, pelaku baru masuk. Data harga lama dari bursa yang sudah tutup sering tidak tersedia atau tidak akurat. Perlakukan backtest sebagai penyaring untuk membuang aturan yang jelas buruk, bukan sebagai bukti bahwa sebuah aturan bagus.</div>` },

        { judul: 'Jurnal transaksi dan angka yang benar-benar penting', isi: `
<h3>Konsepnya</h3>
<p>Tanpa catatan, ingatan akan berbohong. Anda akan mengingat transaksi yang berhasil dengan jelas dan melupakan yang gagal, lalu menyimpulkan bahwa metode Anda bekerja. Jurnal menghapus ilusi itu dengan cara paling sederhana: menuliskannya.</p>
<p>Jurnal yang berguna tidak perlu rumit. Satu baris per transaksi di spreadsheet sudah cukup, asal berisi alasan masuk yang ditulis <b>sebelum</b> hasilnya diketahui.</p>

<h3>Yang dicatat</h3>
<ul>
<li>Tanggal masuk, aset, harga masuk, ukuran posisi</li>
<li>Alasan masuk, satu kalimat, ditulis di awal</li>
<li>Titik stop dan target yang direncanakan</li>
<li>Tanggal keluar, harga keluar, alasan keluar</li>
<li>Apakah Anda mengikuti rencana sendiri: ya atau tidak</li>
</ul>
<p>Kolom terakhir itu yang paling berharga. Setelah lima puluh transaksi, Anda akan melihat pola yang jauh lebih penting daripada mana strategi yang benar: seberapa sering Anda melanggar aturan sendiri, dan dalam keadaan apa.</p>

<h3>Angka yang layak dihitung</h3>
<table>
<tr><th>Angka</th><th>Artinya</th><th>Kenapa penting</th></tr>
<tr><td>Win rate</td><td>Persen transaksi yang untung</td><td>Berguna, tapi sering menyesatkan kalau berdiri sendiri</td></tr>
<tr><td>Rata-rata untung dibanding rata-rata rugi</td><td>Besar kemenangan dibanding besar kekalahan</td><td>Pasangan wajib dari win rate</td></tr>
<tr><td>Expectancy</td><td>(win rate × rata-rata untung) − (lose rate × rata-rata rugi)</td><td>Hasil rata-rata yang diharapkan per transaksi. Ini angka intinya.</td></tr>
<tr><td>Max drawdown</td><td>Penurunan terdalam dari puncak modal</td><td>Menentukan apakah Anda sanggup bertahan menjalankannya</td></tr>
<tr><td>Jumlah transaksi</td><td>Banyaknya sampel</td><td>Kesimpulan dari 10 transaksi hampir tidak berarti apa-apa</td></tr>
</table>
<p>Win rate 40 persen dengan kemenangan rata-rata tiga kali lebih besar dari kekalahan jauh lebih baik daripada win rate 80 persen dengan kekalahan rata-rata lima kali lebih besar dari kemenangan. Yang kedua terasa jauh lebih menyenangkan dan akhirnya menghabiskan modal.</p>

<h3>Contoh</h3>
<p>Seseorang merasa strategi breakout-nya bagus karena ia ingat beberapa transaksi besar yang berhasil. Setelah mencatat empat bulan, angkanya muncul: 43 transaksi, win rate 37 persen, rata-rata untung 6,2 persen, rata-rata rugi 2,4 persen. Expectancy-nya positif, jadi metodenya memang sehat. Tetapi kolom "ikut rencana" terisi "tidak" pada 12 transaksi, dan sebelas di antaranya rugi. Temuan itu lebih berharga daripada indikator apa pun. Masalahnya bukan strateginya.</p>

<div class="batas-berlaku"><b>Batas & risiko.</b> Angka dari sedikit transaksi mudah menipu. Tiga puluh transaksi masih terlalu sedikit untuk menyimpulkan apa pun dengan yakin, apalagi kalau semuanya terjadi di satu keadaan pasar. Expectancy positif di pasar naik tidak berarti apa-apa untuk pasar turun. Catat juga keadaan pasarnya, supaya nanti Anda tahu hasil itu berlaku di keadaan yang mana.</div>` },
      ],
      kuis: [
        { tanya: 'Aturan dengan angka yang sangat spesifik, misalnya "RSI 13 pada timeframe 47 menit", biasanya tanda…',
          pilihan: ['Overfitting: angkanya dicocokkan dengan data masa lalu sampai terlihat bagus', 'Riset yang sangat teliti', 'Strategi tingkat lanjut', 'Data yang berkualitas tinggi'],
          jelas: 'Mencoba ratusan kombinasi lalu memilih yang terbaik biasanya menemukan kebetulan, bukan pola yang bertahan.' },
        { tanya: 'Menguji strategi hanya pada aset yang masih ada sekarang menimbulkan…',
          pilihan: ['Bias bertahan hidup, karena ribuan token yang gagal tidak ikut dihitung', 'Lookahead bias', 'Overfitting', 'Slippage'],
          jelas: 'Token dari 2017 dan 2021 yang sudah lenyap tidak masuk data. Hasilnya terlihat jauh lebih baik daripada kenyataan yang dialami investor saat itu.' },
        { tanya: 'Cara paling jujur menguji aturan yang baru dirancang adalah…',
          pilihan: ['Mengujinya di rentang data yang belum pernah dipakai saat merancang', 'Menambah lebih banyak indikator', 'Memperpanjang periode backtest sampai sepuluh tahun', 'Mencoba lebih banyak kombinasi angka'],
          jelas: 'Kalau hasil di data baru jatuh drastis, aturan itu hanya menghafal masa lalu. Pemisahan data adalah penyaring paling ampuh.' },
        { tanya: 'Pembanding yang jujur untuk hasil sebuah strategi adalah…',
          pilihan: ['Hasil kalau Anda cuma membeli dan menahan di periode yang sama', 'Nol persen', 'Bunga deposito', 'Hasil strategi lain yang paling populer'],
          jelas: 'Keuntungan 900 persen di 2020 sampai 2021 tidak berarti apa-apa kalau membeli dan diam menghasilkan 1.100 persen.' },
        { tanya: 'Angka mana yang paling merangkum apakah sebuah metode layak dijalankan?',
          pilihan: ['Expectancy, karena menggabungkan win rate dengan besar untung dan rugi', 'Win rate saja', 'Jumlah transaksi', 'Keuntungan terbesar yang pernah dicapai'],
          jelas: 'Win rate 80 persen dengan kekalahan lima kali lebih besar dari kemenangan tetap menghabiskan modal. Expectancy yang menunjukkan hasil rata-rata per transaksi.' },
        { tanya: 'Kolom paling berharga dalam jurnal transaksi adalah…',
          pilihan: ['Apakah Anda mengikuti rencana sendiri atau tidak', 'Nama bursa yang dipakai', 'Warna candle saat masuk', 'Jumlah indikator yang dipasang'],
          jelas: 'Setelah puluhan transaksi, pola pelanggaran aturan sendiri sering jadi temuan yang lebih penting daripada pertanyaan strategi mana yang benar.' },
      ] },
  ],
});
