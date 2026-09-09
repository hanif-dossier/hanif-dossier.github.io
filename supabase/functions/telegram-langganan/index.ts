// Bot Telegram langganan Hanif Dossier Crypto — Supabase Edge Function.
//
// Alur: pendaftar menekan "Lanjutkan ke Telegram" di situs -> bot menerima
// /start <kode akun> -> bot mengaitkan chat dengan akun, memberi cara bayar ->
// pendaftar mengirim foto bukti transfer -> bot meneruskannya ke owner/admin
// dengan tombol Setujui/Tolak -> disetujui: status anggota 'disetujui',
// langganan_sampai diisi, email konfirmasi (Magic Link "Akun Anda sudah
// dikonfirmasi") terkirim, pendaftar diberi tahu di Telegram.
//
// Rahasia (supabase secrets set):
//   TELEGRAM_BOT_TOKEN   token dari @BotFather
//   TELEGRAM_SECRET      kata acak; dipasang juga di setWebhook (secret_token)
//   SB_URL               https://<ref>.supabase.co
//   SB_SECRET            kunci rahasia (sb_secret_...) — REST melewati RLS
//   SB_PUBLISHABLE       kunci publik (untuk mengirim email magic link)
//   ADMIN_EMAILS         owner,admin (dipisah koma)
//   CARA_BAYAR           teks cara bayar (rekening / QRIS), boleh multi-baris
//   SITUS                https://hanif-dossier.github.io

const env = (k: string, wajib = true) => { const v = Deno.env.get(k) ?? ''; if (wajib && !v) throw new Error(`env ${k} kosong`); return v; };
const BOT = env('TELEGRAM_BOT_TOKEN'), RAHASIA = env('TELEGRAM_SECRET'), SB_URL = env('SB_URL'), SB_SECRET = env('SB_SECRET'), SB_PUB = env('SB_PUBLISHABLE');
const ADMIN = env('ADMIN_EMAILS').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
const CARA_BAYAR = env('CARA_BAYAR', false) || 'Cara bayar belum diisi. Hubungi kami lewat Instagram @hanif.dossiercrypto.';
const SITUS = env('SITUS', false) || 'https://hanif-dossier.github.io';
const HARGA: Record<string, { teks: string; hari: number }> = { bulanan: { teks: 'Rp 500.000 / bulan', hari: 30 }, tahunan: { teks: 'Rp 5.000.000 / tahun', hari: 365 } };

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
  const t = await r.text(); return t ? JSON.parse(t) : [];
}
const anggotaOleh = async (kolom: string, nilai: string | number) => (await rest(`/anggota?${kolom}=eq.${encodeURIComponent(String(nilai))}&select=*`))?.[0] ?? null;
const adminChats = async () => ((await rest(`/anggota?telegram_chat_id=not.is.null&select=email,telegram_chat_id`)) || [])
  .filter((a: { email: string }) => ADMIN.includes(a.email.toLowerCase())).map((a: { telegram_chat_id: number }) => a.telegram_chat_id);

const aktif = (a: { status: string; langganan_sampai: string | null }) => a.status === 'disetujui' && (!a.langganan_sampai || a.langganan_sampai >= new Date().toISOString().slice(0, 10));
const tglId = (s: string) => new Date(s + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const uuidDari = (kode: string) => { const h = kode.replace(/-/g, '').toLowerCase(); return /^[0-9a-f]{32}$/.test(h) ? `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}` : null; };
const samarkan = (email: string) => email.replace(/^(.{2}).*(@.*)$/, '$1•••$2');

// Kirim email "Akun Anda sudah dikonfirmasi" (templat Magic Link Supabase).
async function emailKonfirmasi(email: string) {
  const r = await fetch(`${SB_URL}/auth/v1/otp?redirect_to=${encodeURIComponent(SITUS + '/dasbor.html')}`, {
    method: 'POST', headers: { apikey: SB_PUB, 'content-type': 'application/json' },
    body: JSON.stringify({ email, create_user: false }),
  });
  if (!r.ok) console.warn('otp', r.status, await r.text());
  return r.ok;
}

// ------------------------------------------------------------- pesan masuk
async function tanganiPesan(m: any) {
  const chat = m.chat.id as number, teks = (m.text || '').trim();

  // /start <kode akun> — dari tombol "Lanjutkan ke Telegram" di situs
  if (teks.startsWith('/start')) {
    const kode = teks.split(/\s+/)[1] || '', id = uuidDari(kode);
    const a = id ? await anggotaOleh('id', id) : await anggotaOleh('telegram_chat_id', chat);
    if (!a) return kirim(chat, `Halo! Ini bot langganan <b>Hanif Dossier Crypto</b>.\n\nAkun Anda belum kami kenali. Daftar dulu di ${SITUS}/masuk.html?daftar lalu tekan tombol <b>Lanjutkan ke Telegram</b> di halaman status akun — bot akan langsung mengenali akun Anda.`);
    await rest(`/anggota?id=eq.${a.id}`, { method: 'PATCH', body: JSON.stringify({ telegram_chat_id: chat }) });
    if (aktif(a)) return kirim(chat, `Halo ${a.nama || ''}! Akun <b>${samarkan(a.email)}</b> sudah <b>aktif</b>${a.langganan_sampai ? ` sampai ${tglId(a.langganan_sampai)}` : ''}. Semua laporan dan dossier terbuka di ${SITUS}/dasbor.html.\n\nUntuk memperpanjang, kirim bukti transfer di sini kapan saja.`);
    return kirim(chat, `Halo ${a.nama || ''}! Akun <b>${samarkan(a.email)}</b> sudah terdaftar; tinggal berlangganan.\n\n<b>Pilihan:</b>\n• Bulanan — ${HARGA.bulanan.teks}\n• Tahunan — ${HARGA.tahunan.teks}\n\n<b>Cara bayar:</b>\n${CARA_BAYAR}\n\nSetelah transfer, <b>kirim foto bukti transfernya di sini</b>. Tulis <i>bulanan</i> atau <i>tahunan</i> di keterangan foto. Kami periksa, lalu akun aktif dan email konfirmasi terkirim.`);
  }

  const a = await anggotaOleh('telegram_chat_id', chat);
  if (!a) return kirim(chat, `Akun Anda belum terkait. Buka ${SITUS}/masuk.html#status dan tekan <b>Lanjutkan ke Telegram</b>.`);
  const admin = ADMIN.includes(a.email.toLowerCase());

  // Bukti transfer: foto atau dokumen
  const foto = m.photo?.at(-1)?.file_id || m.document?.file_id;
  if (foto) {
    const paket = /tahun/i.test(m.caption || '') ? 'tahunan' : 'bulanan';
    const [p] = (await rest('/pembayaran', { method: 'POST', body: JSON.stringify({ anggota_id: a.id, paket, bukti_file_id: foto }) })) || [];
    if (!p) return kirim(chat, 'Maaf, bukti belum tercatat. Coba kirim ulang.');
    const tombol = { inline_keyboard: [[{ text: '✅ Setujui bulanan', callback_data: `ok:${p.id}:bulanan` }, { text: '✅ Setujui tahunan', callback_data: `ok:${p.id}:tahunan` }], [{ text: '❌ Tolak', callback_data: `no:${p.id}` }]] };
    const keterangan = `Bukti transfer #${p.id}\n${a.nama || '-'} · ${a.email}\nPaket diminta: ${paket}\nStatus akun: ${a.status}${a.langganan_sampai ? ` (sampai ${a.langganan_sampai})` : ''}`;
    const admins = await adminChats();
    if (!admins.length) console.warn('belum ada admin yang terhubung ke bot');
    for (const c of admins) await tg(m.photo ? 'sendPhoto' : 'sendDocument', { chat_id: c, [m.photo ? 'photo' : 'document']: foto, caption: keterangan, reply_markup: tombol });
    return kirim(chat, `Bukti transfer <b>#${p.id}</b> diterima (${paket}). Kami periksa dulu; begitu disetujui, akun Anda aktif dan email konfirmasi terkirim. Biasanya kurang dari 24 jam.`);
  }

  if (/^\/?status/i.test(teks)) return kirim(chat, aktif(a) ? `Akun aktif${a.langganan_sampai ? ` sampai ${tglId(a.langganan_sampai)}` : ''}.` : `Akun belum aktif (${a.status}). Kirim foto bukti transfer untuk mengaktifkan.`);
  if (admin && /^\/?menunggu/i.test(teks)) {
    const daftar = (await rest('/pembayaran?status=eq.menunggu&select=id,paket,dibuat_pada,anggota(email,nama)&order=dibuat_pada.asc')) || [];
    return kirim(chat, daftar.length ? 'Bukti yang menunggu:\n' + daftar.map((p: any) => `#${p.id} · ${p.anggota?.nama || '-'} (${p.anggota?.email}) · ${p.paket} · ${p.dibuat_pada.slice(0, 10)}`).join('\n') : 'Tidak ada bukti yang menunggu.');
  }
  return kirim(chat, aktif(a)
    ? `Akun Anda aktif. Kirim foto bukti transfer untuk memperpanjang, atau ketik <b>status</b>.`
    : `Kirim <b>foto bukti transfer</b> di sini untuk mengaktifkan langganan.\n\n<b>Cara bayar:</b>\n${CARA_BAYAR}`);
}

// ------------------------------------------------------------- tombol admin
async function tanganiTombol(q: any) {
  const chat = q.message?.chat?.id as number, [aksi, idStr, paketPilih] = String(q.data || '').split(':');
  const pengubah = await anggotaOleh('telegram_chat_id', chat);
  if (!pengubah || !ADMIN.includes(pengubah.email.toLowerCase())) return tg('answerCallbackQuery', { callback_query_id: q.id, text: 'Hanya owner/admin.' });
  const p = (await rest(`/pembayaran?id=eq.${idStr}&select=*`))?.[0];
  if (!p) return tg('answerCallbackQuery', { callback_query_id: q.id, text: 'Pembayaran tidak ditemukan.' });
  if (p.status !== 'menunggu') return tg('answerCallbackQuery', { callback_query_id: q.id, text: `Sudah ${p.status}.` });
  const a = await anggotaOleh('id', p.anggota_id);
  const kini = new Date().toISOString();
  let ringkas = '';
  if (aksi === 'ok') {
    const paket = HARGA[paketPilih] ? paketPilih : p.paket;
    const dasar = a?.langganan_sampai && a.langganan_sampai >= kini.slice(0, 10) ? new Date(a.langganan_sampai) : new Date();
    dasar.setDate(dasar.getDate() + HARGA[paket].hari);
    const sampai = dasar.toISOString().slice(0, 10);
    await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ status: 'disetujui', paket, diputuskan_pada: kini, diputuskan_oleh: pengubah.email }) });
    await rest(`/anggota?id=eq.${p.anggota_id}`, { method: 'PATCH', body: JSON.stringify({ status: 'disetujui', diputuskan_pada: kini, langganan_sampai: sampai, paket }) });
    const emailOk = a ? await emailKonfirmasi(a.email) : false;
    if (a?.telegram_chat_id) await kirim(a.telegram_chat_id, `✅ Pembayaran <b>#${p.id}</b> disetujui. Langganan <b>${paket}</b> aktif sampai <b>${tglId(sampai)}</b>.\n\n${emailOk ? 'Cek email Anda: ada tombol <b>Masuk</b> yang langsung membuka laporan.' : 'Masuk di ' + SITUS + '/masuk.html dengan email dan kata sandi Anda.'}`);
    ringkas = `✅ Disetujui (${paket}) oleh ${pengubah.email} · aktif sampai ${sampai}${emailOk ? '' : ' · email gagal terkirim'}`;
  } else {
    await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ status: 'ditolak', diputuskan_pada: kini, diputuskan_oleh: pengubah.email }) });
    if (a?.telegram_chat_id) await kirim(a.telegram_chat_id, `❌ Bukti transfer <b>#${p.id}</b> belum bisa kami terima. Periksa nominal dan tujuan transfernya, lalu kirim ulang buktinya di sini. Kalau merasa keliru, balas pesan ini.`);
    ringkas = `❌ Ditolak oleh ${pengubah.email}`;
  }
  await tg('answerCallbackQuery', { callback_query_id: q.id, text: ringkas.slice(0, 180) });
  await tg('editMessageCaption', { chat_id: chat, message_id: q.message.message_id, caption: `${q.message.caption || ''}\n\n${ringkas}` });
}

// ------------------------------------------------------------- webhook
Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('bot langganan Hanif Dossier Crypto', { status: 200 });
  if (req.headers.get('x-telegram-bot-api-secret-token') !== RAHASIA) return new Response('forbidden', { status: 403 });
  try {
    const u = await req.json();
    if (u.message) await tanganiPesan(u.message);
    else if (u.callback_query) await tanganiTombol(u.callback_query);
  } catch (e) { console.error(e); }
  return new Response('ok');
});
