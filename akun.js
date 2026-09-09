// akun.js — klien Supabase bersama untuk semua halaman Hanif Dossier Crypto.
// Dimuat setelah pustaka supabase-js (UMD) dari jsdelivr.
//
// Cara pakai di halaman:
//   const p = await akun.wajibMasuk();      // memaksa masuk + disetujui, kalau tidak dialihkan
//   const teks = await akun.unduh('terbaru.md');   // berkas teks dari gudang privat "laporan"
//   const url = await akun.tautanUnduh('dossier/X.pdf'); // tautan sementara untuk PDF
//   await akun.pasangMenu();                 // halaman publik: sesuaikan menu dengan sesi
//
// Kunci di bawah adalah kunci PUBLIK (publishable). Aman terlihat di browser:
// ia hanya bisa membaca apa yang diizinkan kebijakan RLS di Supabase.
(() => {
  const SUPABASE_URL = 'https://fqpktykrkpqaztnpqgxz.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_UcFfp0XqHZWMZ2jpSRlDvg_vySECBzo';
  const OWNER = 'abdullahhanif033@gmail.com';            // pemilik: label Owner
  const ADMIN = [OWNER, 'abdhanif033@gmail.com'];        // admin: akses sama dengan owner (untuk sekarang)
  // Bot Telegram yang memproses langganan (tanpa @). Kosong = bot belum dipasang,
  // halaman memakai DM Instagram sebagai cadangan.
  const BOT_TELEGRAM = 'HanifDossierBot';
  const IG = 'https://ig.me/m/hanif.dossiercrypto';

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const sesi = async () => (await sb.auth.getSession()).data.session || null;

  // Profil = sesi + baris anggota + tanda admin. null kalau belum masuk.
  async function profil() {
    const s = await sesi();
    if (!s) return null;
    const { data } = await sb.from('anggota').select('*').eq('id', s.user.id).maybeSingle();
    const admin = ADMIN.includes((s.user.email || '').toLowerCase());
    // Disetujui = status 'disetujui' dan masa langganan belum lewat (kosong = tanpa batas: undangan pemilik).
    const hariIni = new Date().toISOString().slice(0, 10);
    const disetujui = admin || !!(data && data.status === 'disetujui' && (!data.langganan_sampai || data.langganan_sampai >= hariIni));
    // peran: admin (pemilik), anggota (disetujui), tamu (sudah daftar, belum disetujui)
    const email = (s.user.email || '').toLowerCase();
    return { sesi: s, pengguna: s.user, anggota: data, admin, disetujui, peran: email === OWNER ? 'owner' : admin ? 'admin' : disetujui ? 'anggota' : 'tamu' };
  }

  // Halaman anggota: kalau belum masuk -> masuk.html; kalau belum disetujui -> masuk.html#status,
  // kecuali halaman itu menerima tamu (bolehTamu: beranda dalam mode melihat-lihat).
  async function wajibMasuk({ hanyaAdmin = false, bolehTamu = false } = {}) {
    const p = await profil();
    const tujuan = encodeURIComponent(location.pathname.split('/').pop() + location.search);
    if (!p) { location.replace(`masuk.html?ke=${tujuan}`); return new Promise(() => {}); }
    if (hanyaAdmin && !p.admin) { location.replace('dasbor.html'); return new Promise(() => {}); }
    if (!p.disetujui && !bolehTamu) { location.replace('masuk.html#status'); return new Promise(() => {}); }
    return p;
  }

  // Unduh berkas teks dari bucket privat "laporan" (SVG, markdown, HTML).
  async function unduh(nama) {
    const { data, error } = await sb.storage.from('laporan').download(nama);
    if (error) throw new Error(`${nama}: ${error.message || error}`);
    return await data.text();
  }

  // Tautan unduh sementara untuk berkas biner (PDF dossier) di gudang privat.
  // Berlaku `detik` detik; setelah itu tombolnya harus diklik lagi.
  async function tautanUnduh(nama, detik = 120) {
    const { data, error } = await sb.storage.from('laporan').createSignedUrl(nama, detik);
    if (error) throw new Error(`${nama}: ${error.message || error}`);
    return data.signedUrl;
  }

  // Menu halaman publik (index, riset, langganan, privasi): elemen bertanda
  // data-tamu tampil untuk yang belum masuk, data-anggota untuk yang disetujui,
  // data-menunggu untuk yang sudah daftar tapi belum dikonfirmasi, data-admin untuk admin,
  // data-sesi untuk siapa pun yang sudah masuk (tombol Keluar).
  async function pasangMenu() {
    const p = await profil().catch(() => null);
    const atur = (tanda, tampil) => document.querySelectorAll(`[${tanda}]`).forEach(el => { el.hidden = !tampil; });
    atur('data-tamu', !p);
    atur('data-sesi', !!p);
    atur('data-anggota', p && p.disetujui);
    atur('data-menunggu', p && !p.disetujui);
    atur('data-admin', p && p.admin);
    document.querySelectorAll('[data-keluar]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); keluar(); }));
    return p;
  }

  async function keluar() { await sb.auth.signOut(); location.href = 'masuk.html'; }

  // Tautan untuk melanjutkan langganan: bot Telegram dengan kode akun (id pengguna),
  // supaya bot langsung tahu akun mana yang sedang diproses. Cadangan: DM Instagram.
  // paket: 'bulanan' | 'tahunan' | '' — ikut dikirim ke bot supaya bot langsung
  // menyebut harga paket itu. Tanpa akun pun bot tetap membuka chat (kode paket_<paket>).
  function tautanLangganan(p, paket) {
    if (!paket) { try { paket = localStorage.getItem('paket-dipilih') || ''; } catch { paket = ''; } }
    paket = /^(bulanan|tahunan)$/.test(paket || '') ? paket : '';
    if (!BOT_TELEGRAM) return IG;
    if (p && p.pengguna) return `https://t.me/${BOT_TELEGRAM}?start=${p.pengguna.id.replace(/-/g, '')}${paket ? '_' + paket : ''}`;
    return `https://t.me/${BOT_TELEGRAM}?start=paket_${paket || 'bulanan'}`;
  }
  function pilihPaket(paket) { try { localStorage.setItem('paket-dipilih', paket); } catch {} }

  window.akun = { sb, sesi, profil, wajibMasuk, unduh, tautanUnduh, pasangMenu, keluar, tautanLangganan, pilihPaket, ADMIN, OWNER, BOT_TELEGRAM, IG };
})();
