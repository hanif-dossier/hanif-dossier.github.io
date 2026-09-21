// hidup.js — gerakan halaman depan (tentang.html). Dimuat di <head> tanpa defer,
// supaya kelas "hd" sudah terpasang sebelum halaman tergambar; kalau tidak,
// isi sambutan sempat terlihat sekejap lalu hilang dan muncul lagi.
//
// Isinya tiga hal:
//  1. hidup.hitung(el)  angka di dalam el menghitung naik dari nol.
//  2. Pengamat guliran: bagian yang belum terlihat menunggu, lalu muncul
//     berurutan saat masuk layar. Yang sudah terlihat saat dibuka tidak disembunyikan.
//  3. hidup.pindai(akar) untuk isi yang datang belakangan (kartu dossier).
(() => {
  const diam = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (diam || !('IntersectionObserver' in window)) { window.hidup = { hitung() {}, pindai() {} }; return; }
  document.documentElement.classList.add('hd');

  // Angka Indonesia: titik pemisah ribuan, koma desimal ("8.412", "2,41", "57,3%").
  function hitung(el, lama = 1100) {
    const teks = el.textContent, m = /\d[\d.]*(?:,\d+)?/.exec(teks);
    if (!m) return;
    const nilai = Number(m[0].replace(/\./g, '').replace(',', '.'));
    const des = (m[0].split(',')[1] || '').length;
    const tulis = v => el.textContent = teks.slice(0, m.index)
      + v.toLocaleString('id-ID', { minimumFractionDigits: des, maximumFractionDigits: des })
      + teks.slice(m.index + m[0].length);
    const mulai = performance.now();
    const langkah = t => {
      const p = Math.min(1, (t - mulai) / lama), halus = 1 - Math.pow(1 - p, 3);
      tulis(nilai * halus);
      if (p < 1) requestAnimationFrame(langkah);
    };
    requestAnimationFrame(langkah);
  }

  // Yang ikut muncul saat digulir, dikelompokkan per wadah supaya berurutan.
  const PILIH = [
    '.bagian > .mata', '.bagian > h2', '.bagian > .judul', '.bagian > .pengantar', '.bagian > .catatan',
    '.kisi > .kartu', '.masalah > .kartu', '.tumpukan-web3 > .lapis', 'ol.metode > li',
    '.batas', '.faq details', '.penutup > *',
  ].join(',');

  const pengamat = new IntersectionObserver(masuk => {
    const baru = masuk.filter(e => e.isIntersecting).map(e => e.target);
    // Lapisan Web3 dibangun dari dasar: yang paling bawah muncul lebih dulu.
    const lapis = baru.filter(el => el.classList.contains('lapis')).reverse();
    const lain = baru.filter(el => !el.classList.contains('lapis'));
    [lain, lapis].forEach(kelompok => kelompok.forEach((el, i) => {
      pengamat.unobserve(el);
      el.style.setProperty('--tunda', `${Math.min(i, 5) * (el.classList.contains('lapis') ? .14 : .08)}s`);
      el.classList.add('hd-muncul');
      el.classList.remove('hd-tunggu');
      el.querySelectorAll('.angka b').forEach(b => hitung(b, 900));
      // Sesudah muncul, kelasnya dilepas supaya efek sentuh kursor tidak terhalang.
      setTimeout(() => { el.classList.remove('hd-muncul'); el.style.removeProperty('--tunda'); }, 1600);
    }));
  }, { rootMargin: '0px 0px -8% 0px' });

  function pindai(akar = document) {
    akar.querySelectorAll(PILIH).forEach(el => {
      if (el.classList.contains('hd-tunggu') || el.closest('.sambut')) return;
      // Yang sudah ada di layar saat halaman dibuka dibiarkan tampil.
      if (el.getBoundingClientRect().top < innerHeight * .92) return;
      el.classList.add('hd-tunggu');
      pengamat.observe(el);
    });
  }

  window.hidup = { hitung, pindai };
  document.addEventListener('DOMContentLoaded', () => pindai());
})();
