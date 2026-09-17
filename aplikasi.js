// aplikasi.js — tugas kecil untuk semua halaman Hanif Dossier:
//   1. memberi ikon pada tiap tautan nav.menu (markup tiap halaman tidak diubah, hanya dihias),
//   2. mendaftarkan service worker dan menawarkan "Pasang aplikasi" bila browser mengizinkan,
//   3. notifikasi (Web Push): langganan per perangkat di tabel dossier_push lewat akun.sb, dengan
//      pilihan jenis {briefing, screening}; dikirim GitHub Actions (scripts/kirim-push.mjs di repo
//      laporan-harian dan potret-pasar-crypto). Antarmukanya ada di pengaturan.html.
// Pasang dengan <script src="aplikasi.js" defer></script> setelah <link rel="stylesheet" href="aplikasi.css">.
(() => {
  const diTerbit = location.hostname.endsWith('github.io');
  const iOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
  const sudahTerpasang = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  // ---- 1. ikon menu: dipilih dari teks tautan (beberapa halaman memberi label berbeda untuk tujuan yang sama)
  const IKON = {
    beranda:    '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
    briefing:   '<path d="M4 4h13v16H4z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7 8h7M7 12h7M7 16h4"/>',
    radar:      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v9l6 3"/>',
    schedule:   '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    screening:  '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
    pasar:      '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    bitcoin:    '<circle cx="12" cy="12" r="9"/><path d="M9 7h4.5a2.25 2.25 0 0 1 0 4.5H9m0 0h5a2.25 2.25 0 0 1 0 4.5H9M9 7v9M11 5v2M11 16v2"/>',
    kelas:      '<path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/>',
    modul:      '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    kuis:       '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    pustaka:    '<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="m16 5 3.5-.8L22 19l-3.5.8z"/>',
    anggota:    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"/>',
    pengaturan: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    tentang:    '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    riset:      '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
    laporan:    '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    langganan:  '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/>',
    status:     '<circle cx="10" cy="8" r="3.5"/><path d="M3.5 20a6.5 6.5 0 0 1 13 0"/><path d="m16 11 2 2 4-4"/>',
    keluar:     '<path d="M10 4H5v16h5"/><path d="M14 8l4 4-4 4M18 12H9"/>',
    masuk:      '<path d="M14 4h5v16h-5"/><path d="m10 8-4 4 4 4M6 12h9"/>'
  };
  const kunci = (a) => {
    const t = a.textContent.trim().toLowerCase();
    if (t.startsWith('status')) return 'status';
    return IKON[t] ? t : null;
  };
  const hias = (akar = document) => {
    akar.querySelectorAll('nav.menu a').forEach(a => {
      if (a.querySelector('svg')) return;
      const k = kunci(a); if (!k) return;
      const teks = a.textContent.trim();
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + IKON[k] + '</svg><span>' + teks + '</span>';
    });
  };
  window.hiasMenu = hias;   // dipakai laporan.html setelah menulis ulang dokumen

  // ---- 2. aplikasi: service worker hanya di alamat terbit (bukan saat uji lokal), lalu tawaran pasang
  if ('serviceWorker' in navigator && diTerbit) navigator.serviceWorker.register('sw.js').catch(() => {});

  const ditutup = () => { try { return localStorage.getItem('pasang-aplikasi-tutup') === '1'; } catch { return false; } };
  const tutup = () => { try { localStorage.setItem('pasang-aplikasi-tutup', '1'); } catch {} };
  const buatPil = (judul, ket, aksiYa) => {
    const el = document.createElement('div');
    el.className = 'pasang-aplikasi';
    el.innerHTML = '<img src="ikon-192.png" alt=""><div>' + judul + '<small>' + ket + '</small></div>' +
      (aksiYa ? '<button class="ya" type="button">Pasang</button>' : '') + '<button class="tutup" type="button" aria-label="Tutup">×</button>';
    el.querySelector('.tutup').onclick = () => { tutup(); el.remove(); };
    if (aksiYa) el.querySelector('.ya').onclick = aksiYa;
    document.body.appendChild(el);
    return el;
  };

  // Chrome/Edge/Android memberi tahu saat situs boleh dipasang. Kalau halaman punya tombol
  // #tombol-pasang (pasang.html, pengaturan.html), tombol itu yang dipakai; kalau tidak, muncul pil kecil.
  window.__pasangSiap = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.__pasangSiap = e;
    window.dispatchEvent(new CustomEvent('pasang-siap'));
    if (document.getElementById('tombol-pasang') || sudahTerpasang || ditutup()) return;
    const pil = buatPil('Pasang Hanif Dossier di layar utama', 'Buka seperti aplikasi, tanpa bilah alamat.', async () => {
      pil.remove(); e.prompt(); const { outcome } = await e.userChoice; if (outcome !== 'accepted') tutup();
    });
  });
  window.pasangAplikasi = async () => {
    const e = window.__pasangSiap; if (!e) return 'belum-siap';
    e.prompt(); const { outcome } = await e.userChoice; window.__pasangSiap = null; return outcome;
  };
  window.addEventListener('appinstalled', () => document.querySelector('.pasang-aplikasi')?.remove());
  if (iOS && diTerbit && !sudahTerpasang && !ditutup() && !document.getElementById('tombol-pasang'))
    setTimeout(() => buatPil('Pasang di iPhone', 'Ketuk tombol Bagikan, lalu "Tambah ke Layar Utama".'), 2500);

  // ---- 3. notifikasi (Web Push)
  const VAPID_PUBLIC = 'BIJidIGJnRYQld2c2I6eNMBhh8jStK3_NGeuI4EAgE3cYlMBTc_ZrQEAlNAbJtOU7FRZOmuu8-BfxOdegYSAhYg';   // kunci publik VAPID; pasangannya hanya di GitHub Secrets
  const JENIS_BAWAAN = { briefing: true, screening: true };
  const b64keUint8 = b => { const p = '='.repeat((4 - b.length % 4) % 4); const r = atob((b + p).replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from([...r].map(c => c.charCodeAt(0))); };
  const notifDidukung = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  const langgananKini = async () => { try { const reg = await navigator.serviceWorker.getRegistration(); return reg ? await reg.pushManager.getSubscription() : null; } catch { return null; } };
  const namaPerangkat = () => {
    const ua = navigator.userAgent;
    const os = /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iPhone/iPad' : /Windows/.test(ua) ? 'Windows' : /Mac/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Perangkat';
    const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'browser';
    return os + ' · ' + br + (sudahTerpasang ? ' · aplikasi' : '');
  };
  // Simpan/ubah baris langganan; kalau kolom jenis belum ada di database, ulangi tanpa kolom itu.
  async function simpanBaris(baris) {
    let { error } = await akun.sb.from('dossier_push').upsert(baris, { onConflict: 'endpoint' });
    if (error && /jenis/i.test(error.message)) { const { jenis, ...tanpa } = baris; ({ error } = await akun.sb.from('dossier_push').upsert(tanpa, { onConflict: 'endpoint' })); }
    if (error) throw new Error('Gagal menyimpan langganan: ' + error.message);
  }
  async function nyalakanNotif(jenis = JENIS_BAWAAN) {
    if (!notifDidukung()) throw new Error(iOS
      ? 'Di iPhone, pasang dulu Hanif Dossier ke Layar Utama (Bagikan → Tambah ke Layar Utama), lalu buka dari ikon itu.'
      : 'Browser ini tidak mendukung notifikasi dorong.');
    if (!diTerbit) throw new Error('Notifikasi hanya bisa dinyalakan di alamat terbit (hanif-dossier.github.io).');
    if (!window.akun) throw new Error('Halaman ini belum memuat akun.');
    const p = await akun.profil().catch(() => null);
    if (!p) throw new Error('Masuk dulu supaya notifikasi terkirim ke perangkat ini.');
    const izin = await Notification.requestPermission();
    if (izin !== 'granted') throw new Error('Izin notifikasi ditolak. Aktifkan lewat ikon gembok di bilah alamat, lalu coba lagi.');
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64keUint8(VAPID_PUBLIC) });
    await simpanBaris({ endpoint: sub.endpoint, user_id: p.pengguna.id, langganan: sub.toJSON(), aktif: true, jenis, perangkat: namaPerangkat(), diperbarui: new Date().toISOString() });
    return sub;
  }
  async function aturJenisNotif(jenis) {
    const sub = await langgananKini(); if (!sub) throw new Error('Perangkat ini belum berlangganan.');
    const { error } = await akun.sb.from('dossier_push').update({ jenis, diperbarui: new Date().toISOString() }).eq('endpoint', sub.endpoint);
    if (error) throw new Error('Gagal menyimpan pilihan: ' + error.message);
  }
  async function matikanNotif() {
    const sub = await langgananKini(); if (!sub) return;
    try { if (window.akun) await akun.sb.from('dossier_push').delete().eq('endpoint', sub.endpoint); } catch {}
    try { await sub.unsubscribe(); } catch {}
  }
  window.notifBriefing = { didukung: notifDidukung, langganan: langgananKini, nyalakan: nyalakanNotif, aturJenis: aturJenisNotif, matikan: matikanNotif, JENIS_BAWAAN, namaPerangkat, terpasang: sudahTerpasang, iOS };

  // ---- 4. menu bawah untuk HP (<=720px): 4 tujuan utama + tombol Menu yang membuka lembar semua tautan.
  // Dibangun dari nav.menu halaman, jadi ikut aturan tampil/sembunyi tamu-anggota-admin di tiap halaman.
  const PRIORITAS = ['beranda', 'briefing', 'laporan', 'pasar', 'pengaturan', 'pustaka', 'kelas', 'masuk', 'tentang'];   // Pengaturan = slot "Profil" (Akun, Langganan, Notifikasi); Pustaka lewat Menu
  const IK_MENU = '<path d="M4 6h16M4 12h16M4 18h16"/>';
  const LAPORAN = ['briefing', 'radar', 'schedule', 'screening'];
  const kunciA = a => kunci(a) || a.textContent.trim().toLowerCase();
  const ikonUntuk = k => IKON[k] || IKON.laporan;
  // Tautan "#" (Keluar) diteruskan ke tautan aslinya supaya handler halaman ikut jalan.
  const teruskan = (wadah, tautan, sebelum) => wadah.querySelectorAll('a[href="#"]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); if (sebelum) sebelum(); const asli = tautan.find(x => kunciA(x) === b.dataset.asli); if (asli) asli.click();
  }));
  function bukaLembar(tautan) {
    const lama = document.querySelector('.lembar-menu'); if (lama) lama.remove();
    const l = document.createElement('div'); l.className = 'lembar-menu';
    l.innerHTML = '<div class="latar"></div><div class="lembar"><div class="kepala"><b>Menu</b><button type="button" class="tutup" aria-label="Tutup">×</button></div><div class="kisi">' +
      tautan.map(a => { const k = kunciA(a); return '<a href="' + a.getAttribute('href') + '" class="' + (a.classList.contains('aktif') ? 'aktif' : '') + (k === 'keluar' ? ' keluar' : '') + '" data-asli="' + k + '"><span class="ik"><svg viewBox="0 0 24 24">' + ikonUntuk(k) + '</svg></span><span>' + a.textContent.trim() + '</span></a>'; }).join('') +
      '</div></div>';
    const tutup = () => l.remove();
    l.querySelector('.latar').onclick = tutup; l.querySelector('.tutup').onclick = tutup;
    teruskan(l, tautan, tutup);
    document.body.appendChild(l);
  }
  function bangunMenuBawah() {
    const nav = document.querySelector('nav.menu'); if (!nav) return;
    let bar = document.querySelector('.nav-bawah');
    if (!bar) { bar = document.createElement('nav'); bar.className = 'nav-bawah'; bar.setAttribute('aria-label', 'Menu bawah'); document.body.appendChild(bar); }
    const tautan = [...nav.querySelectorAll('a')].filter(a => !a.hidden);
    const aktifLaporan = tautan.some(a => a.classList.contains('aktif') && LAPORAN.includes(kunciA(a)));
    let utama = tautan;
    if (tautan.length > 5) { utama = []; for (const k of PRIORITAS) { const a = tautan.find(x => kunciA(x) === k); if (a && !utama.includes(a)) utama.push(a); if (utama.length === 4) break; } }
    bar.innerHTML = utama.map(a => {
      const k = kunciA(a), label = k === 'briefing' ? 'Laporan' : a.textContent.trim();
      const aktif = a.classList.contains('aktif') || (k === 'briefing' && aktifLaporan);
      return '<a href="' + a.getAttribute('href') + '" class="' + (aktif ? 'aktif' : '') + '" data-asli="' + k + '"><span class="ik"><svg viewBox="0 0 24 24">' + ikonUntuk(k) + '</svg></span>' + label + '</a>';
    }).join('') + (tautan.length > 5 ? '<button type="button" class="buka-menu"><span class="ik"><svg viewBox="0 0 24 24">' + IK_MENU + '</svg></span>Menu</button>' : '');
    teruskan(bar, tautan);
    const tb = bar.querySelector('.buka-menu'); if (tb) tb.addEventListener('click', () => bukaLembar(tautan));
    if (!nav.__diamati) { nav.__diamati = true; new MutationObserver(() => bangunMenuBawah()).observe(nav, { attributes: true, subtree: true, attributeFilter: ['hidden', 'class'] }); }
  }
  window.bangunMenuBawah = bangunMenuBawah;

  const mulai = () => { hias(); bangunMenuBawah(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mulai); else mulai();
})();
