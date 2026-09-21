// latar.js — latar hidup percobaan: garis kontur seperti peta topografi, bergeser pelan.
// Hanya menyala kalau alamatnya diberi ?latar (contoh: masuk.html?latar), supaya
// pengunjung biasa tidak melihatnya selama masih dicoba.
//
// Cara kerjanya:
//  1. Ada "medan" angka acak yang halus (value noise): tiap titik layar punya ketinggian.
//  2. Tiap bingkai, medan itu digeser sedikit mengikuti waktu.
//  3. Algoritme marching squares menarik garis di ketinggian tertentu, persis cara
//     peta topografi menggambar garis kontur gunung.
// Kanvasnya di belakang semua isi (z-index -1), digambar 24 kali per detik saja,
// dan berhenti saat tab tidak dilihat atau HP diatur "kurangi gerakan".
(() => {
  if (!/[?&]latar\b/.test(location.search)) return;
  const diam = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const kanvas = document.createElement('canvas');
  kanvas.setAttribute('aria-hidden', 'true');
  kanvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none';
  const ctx = kanvas.getContext('2d');

  // Value noise 3D: angka acak di titik kisi, dihaluskan di antaranya.
  const P = new Uint8Array(512);
  for (let i = 0; i < 256; i++) P[i] = i;
  for (let i = 255; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [P[i], P[j]] = [P[j], P[i]]; }
  for (let i = 0; i < 256; i++) P[i + 256] = P[i];
  const acak = (x, y, z) => P[P[P[x & 255] + (y & 255)] + (z & 255)] / 255;
  const halus = t => t * t * (3 - 2 * t);
  const campur = (a, b, t) => a + (b - a) * t;
  function noise(x, y, z) {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const u = halus(x - xi), v = halus(y - yi), w = halus(z - zi);
    const s = (dx, dy, dz) => acak(xi + dx, yi + dy, zi + dz);
    return campur(
      campur(campur(s(0, 0, 0), s(1, 0, 0), u), campur(s(0, 1, 0), s(1, 1, 0), u), v),
      campur(campur(s(0, 0, 1), s(1, 0, 1), u), campur(s(0, 1, 1), s(1, 1, 1), u), v), w);
  }
  // Dua lapis noise supaya bentuknya tidak terlalu bulat.
  const medan = (x, y, t) => noise(x, y, t) * .7 + noise(x * 2.1 + 40, y * 2.1, t * 1.3) * .3;

  const LANGKAH = 14;                              // ukuran sel kisi, piksel
  const SKALA = 1 / 190;                           // besar "bukit"
  const TINGKAT = [.3, .38, .46, .54, .62, .7];    // ketinggian garis kontur
  let L, T, kolom, baris, nilai, dpr;

  function ukur() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    L = innerWidth; T = innerHeight;
    kanvas.width = L * dpr; kanvas.height = T * dpr;
    kolom = Math.ceil(L / LANGKAH) + 1; baris = Math.ceil(T / LANGKAH) + 1;
    nilai = new Float32Array(kolom * baris);
  }

  function gambar(waktu) {
    const t = waktu / 9000;                        // makin besar pembagi, makin pelan
    for (let j = 0; j < baris; j++) for (let i = 0; i < kolom; i++)
      nilai[j * kolom + i] = medan(i * LANGKAH * SKALA, j * LANGKAH * SKALA + t * .35, t);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, L, T);
    ctx.lineWidth = 1;
    TINGKAT.forEach((h, k) => {
      // Garis tengah sedikit lebih tegas, sisanya samar.
      ctx.strokeStyle = k === 2 || k === 3 ? 'rgba(79,122,104,.24)' : 'rgba(79,122,104,.13)';
      ctx.beginPath();
      for (let j = 0; j < baris - 1; j++) for (let i = 0; i < kolom - 1; i++) {
        const a = nilai[j * kolom + i], b = nilai[j * kolom + i + 1];
        const c = nilai[(j + 1) * kolom + i + 1], d = nilai[(j + 1) * kolom + i];
        const kode = (a > h) | (b > h) << 1 | (c > h) << 2 | (d > h) << 3;
        if (kode === 0 || kode === 15) continue;
        const x = i * LANGKAH, y = j * LANGKAH;
        // Titik potong di tiap sisi sel, dihitung dengan interpolasi linear.
        const atas = [x + LANGKAH * (h - a) / (b - a), y];
        const kanan = [x + LANGKAH, y + LANGKAH * (h - b) / (c - b)];
        const bawah = [x + LANGKAH * (h - d) / (c - d), y + LANGKAH];
        const kiri = [x, y + LANGKAH * (h - a) / (d - a)];
        const garis = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
        switch (kode) {
          case 1: case 14: garis(kiri, atas); break;
          case 2: case 13: garis(atas, kanan); break;
          case 3: case 12: garis(kiri, kanan); break;
          case 4: case 11: garis(kanan, bawah); break;
          case 6: case 9: garis(atas, bawah); break;
          case 7: case 8: garis(kiri, bawah); break;
          case 5: garis(kiri, atas); garis(kanan, bawah); break;
          case 10: garis(atas, kanan); garis(kiri, bawah); break;
        }
      }
      ctx.stroke();
    });
  }

  let terakhir = 0;
  function putar(w) {
    if (!document.hidden && w - terakhir > 1000 / 24) { gambar(w); terakhir = w; }
    requestAnimationFrame(putar);
  }

  function mulai() {
    document.body.prepend(kanvas);
    ukur();
    addEventListener('resize', ukur);
    if (diam) gambar(0); else requestAnimationFrame(putar);
  }
  if (document.body) mulai(); else document.addEventListener('DOMContentLoaded', mulai);
})();
