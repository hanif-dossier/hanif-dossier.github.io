// akun.js — klien Supabase bersama untuk semua halaman Hanif Dossier Crypto.
// Dimuat setelah pustaka supabase-js (UMD) dari jsdelivr.
//
// Cara pakai di halaman:
//   const p = await akun.wajibMasuk();      // memaksa masuk + disetujui, kalau tidak dialihkan
//   const teks = await akun.unduh('terbaru.md');   // berkas dari gudang privat "laporan"
//
// Kunci di bawah adalah kunci PUBLIK (publishable). Aman terlihat di browser:
// ia hanya bisa membaca apa yang diizinkan kebijakan RLS di Supabase.
(() => {
  const SUPABASE_URL = 'https://fqpktykrkpqaztnpqgxz.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_UcFfp0XqHZWMZ2jpSRlDvg_vySECBzo';
  const ADMIN = ['abdullahhanif033@gmail.com', 'abdhanif033@gmail.com'];

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const sesi = async () => (await sb.auth.getSession()).data.session || null;

  // Profil = sesi + baris anggota + tanda admin. null kalau belum masuk.
  async function profil() {
    const s = await sesi();
    if (!s) return null;
    const { data } = await sb.from('anggota').select('*').eq('id', s.user.id).maybeSingle();
    const admin = ADMIN.includes((s.user.email || '').toLowerCase());
    return { sesi: s, pengguna: s.user, anggota: data, admin, disetujui: admin || (data && data.status === 'disetujui') };
  }

  // Halaman anggota: kalau belum masuk -> masuk.html; kalau belum disetujui -> masuk.html#status.
  async function wajibMasuk({ hanyaAdmin = false } = {}) {
    const p = await profil();
    const tujuan = encodeURIComponent(location.pathname.split('/').pop() + location.search);
    if (!p) { location.replace(`masuk.html?ke=${tujuan}`); return new Promise(() => {}); }
    if (hanyaAdmin && !p.admin) { location.replace('index.html'); return new Promise(() => {}); }
    if (!p.disetujui) { location.replace('masuk.html#status'); return new Promise(() => {}); }
    return p;
  }

  // Unduh berkas teks dari bucket privat "laporan" (SVG, markdown, HTML).
  async function unduh(nama) {
    const { data, error } = await sb.storage.from('laporan').download(nama);
    if (error) throw new Error(`${nama}: ${error.message || error}`);
    return await data.text();
  }

  async function keluar() { await sb.auth.signOut(); location.href = 'masuk.html'; }

  window.akun = { sb, sesi, profil, wajibMasuk, unduh, keluar, ADMIN };
})();
