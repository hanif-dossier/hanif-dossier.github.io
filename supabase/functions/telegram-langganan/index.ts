// Bot Telegram Hanif Dossier Crypto — Supabase Edge Function (@HanifDossierBot).
//
// Versi gratis, 24 September 2026. Situs terbuka untuk umum tanpa bayar (model Token
// Terminal / DefiLlama), jadi bot ini bukan lagi bot pembayaran. Tugasnya sekarang:
//   /start [kode]  sapaan + apa yang gratis; kode = id akun (32 hex) dari situs -> chat
//                  ditautkan ke akun (dipakai untuk kabar lewat Telegram nanti)
//   /pasar         indeks musim altcoin, dominasi BTC, Fear & Greed hari ini (pasar.json publik)
//   /daftar        tautan daftar akun gratis dan apa yang terbuka setelahnya
//   /status        apakah chat ini sudah terkait akun
//   /anggota       (admin) jumlah anggota per status
//   <email>        menautkan chat ke akun yang emailnya itu
//   foto/dokumen   ditolak sopan: tidak ada yang perlu dibayar
// Alur bukti transfer, tombol Setujui/Tolak, dan pengingat langganan DIHAPUS.
// ?tugas=pengingat tetap dijawab 200 supaya workflow lama (sudah dimatikan) tidak error.
//
// Rahasia (supabase secrets): TELEGRAM_BOT_TOKEN, TELEGRAM_SECRET, SB_URL, SB_SECRET,
// SB_PUBLISHABLE, ADMIN_EMAILS, SITUS. Deploy: supabase functions deploy telegram-langganan

const env = (k: string, wajib = true) => { const v = Deno.env.get(k) ?? ''; if (wajib && !v) throw new Error(`env ${k} kosong`); return v; };
const BOT = env('TELEGRAM_BOT_TOKEN'), RAHASIA = env('TELEGRAM_SECRET'), SB_URL = env('SB_URL'), SB_SECRET = env('SB_SECRET');
const ADMIN = env('ADMIN_EMAILS').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
const SITUS = env('SITUS', false) || 'https://hanif-dossier.github.io';

// ------------------------------------------------------------- Telegram
async function tg(metode: string, body: Record<string, unknown>) {
  const r = await fetch(`https://api.telegram.org/bot${BOT}/${metode}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json(); if (!j.ok) console.warn('telegram', metode, j.description); return j.result;
}
const kirim = (chat: number, text: string, extra: Record<string, unknown> = {}) => tg('sendMessage', { chat_id: chat, text, parse_mode: 'HTML', disable_web_page_preview: true, ...extra });

// ------------------------------------------------------------- Supabase REST
const H = { apikey: SB_SECRET, Authorization: `Bearer ${SB_SECRET}`, 'content-type': 'application/json' };
async function rest(jalur: string, init: RequestInit = {}) {
  const r = await fetch(`${SB_URL}/rest/v1${jalur}`, { ...init, headers: { ...H, Prefer: 'return=representation', ...(init.headers || {}) } });
  if (!r.ok) { console.warn('rest', jalur, r.status, await r.text()); return null; }
  const t = await r.text(); return t ? JSON.parse(t) : null;
}
const anggotaOleh = async (kolom: string, nilai: string | number) => (await rest(`/anggota?${kolom}=eq.${encodeURIComponent(String(nilai))}&select=*&limit=1`))?.[0] || null;
const ubahAnggota = (id: string, isi: Record<string, unknown>) => rest(`/anggota?id=eq.${id}`, { method: 'PATCH', body: JSON.stringify(isi) });
const uuidDari = (hex: string) => /^[0-9a-f]{32}$/i.test(hex) ? `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`.toLowerCase() : null;
const samarkan = (email: string) => email.replace(/^(.{2})[^@]*(@.*)$/, '$1***$2');

// ------------------------------------------------------------- teks
const TEKS_GRATIS = `<b>Hanif Dossier Crypto sekarang gratis.</b> Tidak ada paket, tidak ada pembayaran, tidak ada yang perlu dikonfirmasi.

<b>Tanpa akun:</b> data pasar dan leaderboard (${SITUS}/pasar.html), Kelas 141 pelajaran, Kuis, daftar isi tiap dossier.
<b>Dengan akun gratis</b> (daftar 1 menit, langsung aktif): briefing pagi, schedule, screening altcoin, dossier lengkap dibaca di situs, tab Koinmu, nilai kuis tersimpan, notifikasi ke HP.

Daftar: ${SITUS}/masuk.html?daftar

Perintah di sini: /pasar (angka hari ini), /daftar, /status. Pertanyaan lain: DM Instagram @hanif.dossiercrypto.
Kalau ada pihak yang meminta transfer atas nama Hanif Dossier, itu penipuan.`;

const TEKS_DAFTAR = `Daftar akun gratis di ${SITUS}/masuk.html?daftar lalu klik tautan di email Anda; akun aktif seketika, tidak ada yang dibayar.

Setelah masuk terbuka: briefing pagi, schedule, screening altcoin, seluruh dossier dibaca di situs, tab Koinmu (angka Token Terminal 13 koin), nilai kuis tersimpan, notifikasi.`;

const TEKS_TOLAK_BAYAR = `Terima kasih, tapi <b>tidak perlu membayar apa pun</b>: Hanif Dossier gratis. Kalau ini bukti transfer ke pihak yang mengaku Hanif Dossier, itu penipuan; hubungi bank Anda untuk menariknya kembali. Semua fitur terbuka lewat ${SITUS}/masuk.html?daftar.`;

// Angka pasar hari ini dari berkas publik situs (dibangun tiap pagi oleh data-pasar.mjs).
async function teksPasar() {
  try {
    const d = await (await fetch(`${SITUS}/data/pasar.json`, { cache: 'no-store' })).json();
    const p = d.pasar || {}, m = d.musimAltcoin;
    const pct = (v: number | null | undefined, dp = 1) => v == null ? 'n/a' : `${v.toFixed(dp).replace('.', ',')}%`;
    const kapan = new Date(d.diperbarui).toLocaleString('id-ID', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' });
    const baris = [
      `<b>Pasar crypto, ${kapan} WIB</b>`,
      m ? `Indeks musim altcoin (90 hari): <b>${m.indeks90}/100</b>, ${m.label}. ${m.menang} dari ${m.dari} alt mengalahkan BTC.` : null,
      `Dominasi Bitcoin: <b>${pct(p.domBtc)}</b> (Ethereum ${pct(p.domEth)})`,
      p.fng ? `Fear & Greed: <b>${p.fng.nilai}</b> (${p.fng.label})` : null,
      p.ubah24 != null ? `Kapitalisasi total 24 jam: <b>${p.ubah24 >= 0 ? '+' : ''}${pct(p.ubah24, 2)}</b>` : null,
      '', `Selengkapnya (tanpa akun): ${SITUS}/pasar.html`,
      'Sumber: CoinGecko, DefiLlama, Binance, alternative.me. Bukan saran beli atau jual.',
    ].filter(x => x !== null);
    return baris.join('\n');
  } catch (e) { console.warn('pasar.json', e); return `Angka hari ini belum bisa diambil. Lihat langsung di ${SITUS}/pasar.html`; }
}

// ------------------------------------------------------------- pesan masuk
async function tanganiPesan(m: any) {
  const chat = m.chat.id as number, teks = (m.text || '').trim();

  // Foto atau dokumen: dulu bukti transfer. Sekarang ditolak sopan.
  if (m.photo?.length || m.document) return kirim(chat, TEKS_TOLAK_BAYAR);

  if (/^\/start/i.test(teks)) {
    const kode = teks.split(/\s+/)[1] || '';
    const id = uuidDari((kode.match(/^([0-9a-f]{32})/i) || [])[1] || '');
    if (id) {
      const a = await anggotaOleh('id', id);
      if (a) { await ubahAnggota(a.id, { telegram_chat_id: chat }); return kirim(chat, `Halo ${a.nama || ''}! Akun <b>${samarkan(a.email)}</b> terhubung ke Telegram ini.\n\n${TEKS_GRATIS}`); }
    }
    return kirim(chat, `Halo! Ini bot resmi <b>Hanif Dossier Crypto</b>.\n\n${TEKS_GRATIS}`);
  }
  if (/^\/?pasar/i.test(teks)) return kirim(chat, await teksPasar());
  if (/^\/?daftar/i.test(teks)) return kirim(chat, TEKS_DAFTAR);

  const a = await anggotaOleh('telegram_chat_id', chat);
  const admin = !!a && ADMIN.includes((a.email || '').toLowerCase());

  if (/^\/?status/i.test(teks)) {
    return kirim(chat, a
      ? `Chat ini terkait akun <b>${samarkan(a.email)}</b>. Akun aktif, gratis, tanpa batas waktu. Masuk: ${SITUS}/masuk.html`
      : `Chat ini belum terkait akun. Balas dengan <b>email akun</b> Anda di situs, atau kalau belum punya akun: ${SITUS}/masuk.html?daftar (gratis).`);
  }
  if (admin && /^\/?anggota/i.test(teks)) {
    const semua = (await rest('/anggota?select=status')) || [];
    const hitung: Record<string, number> = {}; for (const x of semua) hitung[x.status] = (hitung[x.status] || 0) + 1;
    return kirim(chat, `Anggota: ${semua.length}\n` + Object.entries(hitung).map(([s, n]) => `• ${s}: ${n}`).join('\n'));
  }

  // Email: tautkan chat ke akun
  const email = (teks.match(/[\w.+-]+@[\w-]+\.[\w.-]+/) || [])[0];
  if (email) {
    const b = await anggotaOleh('email', email.toLowerCase());
    if (!b) return kirim(chat, `Email <b>${email}</b> belum terdaftar. Daftar dulu (gratis) di ${SITUS}/masuk.html?daftar, lalu kirim lagi emailnya di sini.`);
    await ubahAnggota(b.id, { telegram_chat_id: chat });
    return kirim(chat, `Akun <b>${samarkan(b.email)}</b> terhubung ke Telegram ini. Semua fitur sudah terbuka untuk Anda di ${SITUS}/masuk.html`);
  }

  return kirim(chat, TEKS_GRATIS);
}

// ------------------------------------------------------------- webhook
Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.searchParams.get('tugas') === 'pengingat') {
    if (req.headers.get('x-telegram-bot-api-secret-token') !== RAHASIA) return new Response('forbidden', { status: 403 });
    return new Response('tidak ada pengingat: situs gratis sejak 24 Sep 2026');
  }
  if (req.method !== 'POST') return new Response('bot Hanif Dossier Crypto (gratis)', { status: 200 });
  if (req.headers.get('x-telegram-bot-api-secret-token') !== RAHASIA) return new Response('forbidden', { status: 403 });
  try {
    const u = await req.json();
    if (u.message) await tanganiPesan(u.message);
    else if (u.callback_query) await tg('answerCallbackQuery', { callback_query_id: u.callback_query.id, text: 'Tombol ini tidak dipakai lagi; situs gratis.' });
  } catch (e) { console.error(e); }
  return new Response('ok');
});
