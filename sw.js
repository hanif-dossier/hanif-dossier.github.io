// Service worker Hanif Dossier: jaringan dulu, salinan terakhir dipakai kalau sinyal hilang.
// Yang tidak pernah disimpan: permintaan ke Supabase (sesi, laporan pribadi) dan API luar —
// itu selalu langsung ke jaringan supaya laporan anggota tidak pernah tertinggal di cache.
// Juga menerima Web Push (notifikasi briefing pagi dari GitHub Actions) dan membuka
// halaman briefing saat notifikasinya diketuk.
const CACHE = 'hanif-dossier-v2';
const CANGKANG = ['dasbor.html', 'masuk.html', 'akun.js', 'aplikasi.js', 'aplikasi.css', 'manifest.webmanifest', 'ikon-192.png'];
const BERANDA = 'https://hanif-dossier.github.io/';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CANGKANG).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => clients.claim()));
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;   // Supabase, CoinGecko, mempool: lewat saja
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const salinan = r.clone(); caches.open(CACHE).then(c => c.put(e.request, salinan)); }
      return r;
    }).catch(async () => (await caches.match(e.request)) || (e.request.mode === 'navigate' ? caches.match('dasbor.html') : Response.error()))
  );
});

// Isi kiriman: { title, body, url, tag } — disusun scripts/kirim-push.mjs di repo laporan-harian.
self.addEventListener('push', e => {
  let p = {};
  try { p = e.data ? e.data.json() : {}; } catch { p = { title: 'Hanif Dossier', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(p.title || 'Briefing pagi terbit', {
    body: p.body || 'Bacalah yang paling penting dulu.',
    icon: 'ikon-192.png', badge: 'ikon-192.png',
    tag: p.tag || 'briefing', renotify: true,
    data: { url: p.url || BERANDA + 'laporan.html?h=briefing' }
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || BERANDA;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('focus' in c) { c.navigate(url); return c.focus(); } }
    return clients.openWindow(url);
  }));
});
