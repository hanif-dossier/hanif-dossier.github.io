// Service worker Tautan Harian Hanif: ambil dari jaringan dulu, salinan terakhir dipakai kalau offline.
const CACHE = 'hanif-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    const salinan = r.clone(); caches.open(CACHE).then(c => c.put(e.request, salinan)); return r;
  }).catch(() => caches.match(e.request)));
});
