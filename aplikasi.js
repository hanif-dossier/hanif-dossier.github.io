// aplikasi.js — dua tugas kecil untuk semua halaman Hanif Dossier:
//   1. memberi ikon pada tiap tautan nav.menu (markup tiap halaman tidak diubah, hanya dihias),
//   2. mendaftarkan service worker dan menawarkan "Pasang aplikasi" bila browser mengizinkan.
// Pasang dengan <script src="aplikasi.js" defer></script> setelah <link rel="stylesheet" href="aplikasi.css">.
(() => {
  // ---- 1. ikon menu: dipilih dari teks tautan (beberapa halaman memberi label berbeda untuk tujuan yang sama)
  const IKON = {
    beranda:   '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
    briefing:  '<path d="M4 4h13v16H4z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7 8h7M7 12h7M7 16h4"/>',
    radar:     '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v9l6 3"/>',
    schedule:  '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    screening: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
    pasar:     '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    bitcoin:   '<circle cx="12" cy="12" r="9"/><path d="M9 7h4.5a2.25 2.25 0 0 1 0 4.5H9m0 0h5a2.25 2.25 0 0 1 0 4.5H9M9 7v9M11 5v2M11 16v2"/>',
    kelas:     '<path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/>',
    modul:     '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    kuis:      '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    pustaka:   '<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="m16 5 3.5-.8L22 19l-3.5.8z"/>',
    anggota:   '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"/>',
    tentang:   '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    riset:     '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
    laporan:   '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    langganan: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/>',
    status:    '<circle cx="10" cy="8" r="3.5"/><path d="M3.5 20a6.5 6.5 0 0 1 13 0"/><path d="m16 11 2 2 4-4"/>',
    keluar:    '<path d="M10 4H5v16h5"/><path d="M14 8l4 4-4 4M18 12H9"/>',
    masuk:     '<path d="M14 4h5v16h-5"/><path d="m10 8-4 4 4 4M6 12h9"/>'
  };
  const kunci = (a) => {
    const t = a.textContent.trim().toLowerCase();
    if (t.startsWith('status')) return 'status';
    return IKON[t] ? t : null;
  };
  const hias = () => {
    document.querySelectorAll('nav.menu a').forEach(a => {
      if (a.querySelector('svg')) return;
      const k = kunci(a); if (!k) return;
      const teks = a.textContent.trim();
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + IKON[k] + '</svg><span>' + teks + '</span>';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hias); else hias();

  // ---- 2. aplikasi: service worker hanya di alamat terbit (bukan saat uji lokal), lalu tawaran pasang
  const diTerbit = location.hostname.endsWith('github.io');
  if ('serviceWorker' in navigator && diTerbit) navigator.serviceWorker.register('sw.js').catch(() => {});

  const sudahTerpasang = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const ditutup = () => { try { return localStorage.getItem('pasang-aplikasi-tutup') === '1'; } catch { return false; } };
  const tutup = () => { try { localStorage.setItem('pasang-aplikasi-tutup', '1'); } catch {} };
  if (sudahTerpasang || ditutup()) return;

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

  // Chrome/Edge/Android: browser memberi tahu saat situs boleh dipasang.
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    const pil = buatPil('Pasang Hanif Dossier di layar utama', 'Buka seperti aplikasi, tanpa bilah alamat.', async () => {
      pil.remove(); e.prompt(); const { outcome } = await e.userChoice; if (outcome !== 'accepted') tutup();
    });
  });
  window.addEventListener('appinstalled', () => document.querySelector('.pasang-aplikasi')?.remove());

  // iPhone/iPad: tidak ada prompt otomatis, beri petunjuk singkat sekali saja.
  const iOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && diTerbit) setTimeout(() => buatPil('Pasang di iPhone', 'Ketuk tombol Bagikan, lalu "Tambah ke Layar Utama".'), 2500);
})();
