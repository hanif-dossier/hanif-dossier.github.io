// Service worker Hanif Dossier: jaringan dulu, salinan terakhir dipakai kalau sinyal hilang.
// Yang tidak pernah disimpan: permintaan ke Supabase (sesi, laporan pribadi) dan API luar —
// itu selalu langsung ke jaringan supaya laporan anggota tidak pernah tertinggal di cache.
const CACHE = 'hanif-dossier-v1';
const CANGKANG = ['dasbor.html', 'masuk.html', 'akun.js', 'aplikasi.js', 'aplikasi.css', 'manifest.webmanifest', 'ikon-192.png'];

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
