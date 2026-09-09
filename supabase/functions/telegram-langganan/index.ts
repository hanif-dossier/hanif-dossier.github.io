// Bot Telegram langganan Hanif Dossier Crypto — Supabase Edge Function.
//
// Alur: di situs orang menekan tombol paket ("Pilih & lanjut ke Telegram") ->
// bot menerima /start <kode> dengan kode:
//     <id akun 32 hex>                akun dikenali, paket belum dipilih
//     <id akun 32 hex>_<paket>        akun dikenali + paket (bulanan/tahunan)
//     paket_<paket>                   belum punya akun; bot tetap menyebut harga
//                                     dan rekening, lalu minta email akunnya
// -> bot menyebut harga paket + rekening -> orang mengirim foto bukti transfer
// -> bot meneruskan ke owner/admin dengan tombol Setujui/Tolak dan memberi tahu
//    masa tunggu maks 24 jam -> disetujui: status 'disetujui', langganan_sampai
//    diisi, email konfirmasi terkirim, orang diberi tahu bahwa akun bisa masuk.
// Pengingat: GitHub Actions memanggil ?tugas=pengingat tiap jam (header rahasia):
//   - bukti menunggu > 2 jam: ingatkan admin (ulang tiap 6 jam)
//   - bukti menunggu > 12 jam: kabari pengirim bahwa masih diperiksa (sekali)
//   - akun terhubung tapi belum kirim bukti > 24 jam: ingatkan sekali
//
// Rahasia (supabase secrets set): TELEGRAM_BOT_TOKEN, TELEGRAM_SECRET, SB_URL,
// SB_SECRET, SB_PUBLISHABLE, ADMIN_EMAILS, CARA_BAYAR, SITUS.

const env = (k: string, wajib = true) => { const v = Deno.env.get(k) ?? ''; if (wajib && !v) throw new Error(`env ${k} kosong`); return v; };
const BOT = env('TELEGRAM_BOT_TOKEN'), RAHASIA = env('TELEGRAM_SECRET'), SB_URL = env('SB_URL'), SB_SECRET = env('SB_SECRET'), SB_PUB = env('SB_PUBLISHABLE');
const ADMIN = env('ADMIN_EMAILS').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
const CARA_BAYAR = env('CARA_BAYAR', false) || 'Cara bayar belum diisi. Hubungi kami lewat Instagram @hanif.dossiercrypto.';
const SITUS = env('SITUS', false) || 'https://hanif-dossier.github.io';
const HARGA: Record<string, { nama: string; teks: string; hari: number; nominal: string }> = {
  bulanan: { nama: 'Langganan bulanan', teks: 'Rp 500.000 / bulan', nominal: 'Rp 500.000', hari: 30 },
  tahunan: { nama: 'Langganan tahunan', teks: 'Rp 5.000.000 / tahun', nominal: 'Rp 5.000.000', hari: 365 },
};
const JAM = 3600 * 1000;

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
const ubahAnggota = (id: string, data: Record<string, unknown>) => rest(`/anggota?id=eq.${id}`, { method: 'PATCH', body: JSON.stringify(data) });
const adminChats = async (): Promise<number[]> => ((await rest(`/anggota?telegram_chat_id=not.is.null&select=email,telegram_chat_id`)) || [])
  .filter((a: { email: string }) => ADMIN.includes(a.email.toLowerCase())).map((a: { telegram_chat_id: number }) => a.telegram_chat_id);

const hariIni = () => new Date().toISOString().slice(0, 10);
const aktif = (a: { status: string; langganan_sampai: string | null }) => a.status === 'disetujui' && (!a.langganan_sampai || a.langganan_sampai >= hariIni());
const tglId = (s: string) => new Date(s.slice(0, 10) + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const uuidDari = (kode: string) => { const h = kode.replace(/-/g, '').toLowerCase(); return /^[0-9a-f]{32}$/.test(h) ? `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}` : null; };
const samarkan = (email: string) => email.replace(/^(.{2}).*(@.*)$/, '$1•••$2');
const teksPaket = (paket?: string | null) => paket && HARGA[paket]
  ? `<b>${HARGA[paket].nama}</b> — ${HARGA[paket].teks}`
  : `<b>Pilihan paket:</b>\n• Bulanan — ${HARGA.bulanan.teks}\n• Tahunan — ${HARGA.tahunan.teks}`;
const teksBayar = (paket?: string | null) => `${teksPaket(paket)}\n\n<b>Cara bayar:</b>\n${CARA_BAYAR}${paket && HARGA[paket] ? `\nNominal: <b>${HARGA[paket].nominal}</b>` : ''}\n\nSetelah transfer, <b>kirim foto bukti transfernya di sini</b>. Kami periksa maksimal 24 jam; begitu disetujui, akun Anda aktif dan email konfirmasi terkirim.`;

// Email "Akun Anda sudah dikonfirmasi" (templat Magic Link Supabase).
async function emailKonfirmasi(email: string) {
  const r = await fetch(`${SB_URL}/auth/v1/otp?redirect_to=${encodeURIComponent(SITUS + '/dasbor.html')}`, {
    method: 'POST', headers: { apikey: SB_PUB, 'content-type': 'application/json' }, body: JSON.stringify({ email, create_user: false }),
  });
  if (!r.ok) console.warn('otp', r.status, await r.text());
  return r.ok;
}

// ------------------------------------------------------------- pesan masuk
async function tanganiPesan(m: any) {
  const chat = m.chat.id as number, teks = (m.text || '').trim();

  // /start <kode>
  if (teks.startsWith('/start')) {
    const kode = teks.split(/\s+/)[1] || '';
    let idHex = '', paket: string | null = null;
    const mm = kode.match(/^([0-9a-f]{32})(?:_(bulanan|tahunan))?$/i) || kode.match(/^paket_(bulanan|tahunan)$/i);
    if (mm && mm.length === 3) { idHex = mm[1]; paket = mm[2] || null; } else if (mm) { paket = mm[1]; }
    const a = idHex ? await anggotaOleh('id', uuidDari(idHex)!) : await anggotaOleh('telegram_chat_id', chat);
    if (!a) {
      return kirim(chat, `Halo! Ini bot langganan <b>Hanif Dossier Crypto</b>.\n\n${teksBayar(paket)}\n\n<b>Satu langkah lagi:</b> supaya pembayaran tercatat ke akun Anda, daftar akun di ${SITUS}/masuk.html?daftar (gratis, 1 menit), lalu <b>balas pesan ini dengan email akun Anda</b> — atau tekan tombol Telegram di halaman status akun.`);
    }
    await ubahAnggota(a.id, { telegram_chat_id: chat, ...(paket ? { paket } : {}) });
    if (aktif(a)) return kirim(chat, `Halo ${a.nama || ''}! Akun <b>${samarkan(a.email)}</b> sudah <b>aktif</b>${a.langganan_sampai ? ` sampai ${tglId(a.langganan_sampai)}` : ''}. Semua laporan dan dossier terbuka di ${SITUS}/dasbor.html.\n\nUntuk memperpanjang, kirim bukti transfer di sini kapan saja.`);
    return kirim(chat, `Halo ${a.nama || ''}! Akun <b>${samarkan(a.email)}</b> sudah terdaftar.\n\n${teksBayar(paket || a.paket)}`);
  }

  let a = await anggotaOleh('telegram_chat_id', chat);
  const admin = !!a && ADMIN.includes(a.email.toLowerCase());

  // Chat belum terkait: terima email akun untuk mengaitkannya
  if (!a) {
    const email = (teks.match(/[\w.+-]+@[\w-]+\.[\w.-]+/) || [])[0];
    if (email) {
      a = await anggotaOleh('email', email.toLowerCase());
      if (!a) return kirim(chat, `Email <b>${email}</b> belum terdaftar. Daftar dulu di ${SITUS}/masuk.html?daftar, lalu kirim lagi emailnya di sini.`);
      await ubahAnggota(a.id, { telegram_chat_id: chat });
      if (aktif(a)) return kirim(chat, `Akun <b>${samarkan(a.email)}</b> terhubung dan sudah aktif. Kirim bukti transfer di sini kalau ingin memperpanjang.`);
      return kirim(chat, `Akun <b>${samarkan(a.email)}</b> terhubung ke Telegram ini.\n\n${teksBayar(a.paket)}`);
    }
    return kirim(chat, `Akun Anda belum terkait. Balas dengan <b>email akun</b> Anda di situs ${SITUS}, atau tekan tombol Telegram di halaman status akun.`);
  }

  // Bukti transfer: foto atau dokumen
  const foto = m.photo?.at(-1)?.file_id || m.document?.file_id;
  if (foto) {
    const paket = /tahun/i.test(m.caption || '') ? 'tahunan' : /bulan/i.test(m.caption || '') ? 'bulanan' : (a.paket || 'bulanan');
    const [p] = (await rest('/pembayaran', { method: 'POST', body: JSON.stringify({ anggota_id: a.id, paket, bukti_file_id: foto }) })) || [];
    if (!p) return kirim(chat, 'Maaf, bukti belum tercatat. Coba kirim ulang.');
    const tombol = { inline_keyboard: [[{ text: '✅ Setujui bulanan', callback_data: `ok:${p.id}:bulanan` }, { text: '✅ Setujui tahunan', callback_data: `ok:${p.id}:tahunan` }], [{ text: '❌ Tolak', callback_data: `no:${p.id}` }]] };
    const keterangan = `💸 Ada yang transfer — bukti #${p.id}\n${a.nama || '-'} · ${a.email}\nPaket: ${paket} (${HARGA[paket]?.nominal || '-'})\nStatus akun: ${a.status}${a.langganan_sampai ? ` (sampai ${a.langganan_sampai})` : ''}\n\nCek mutasi rekening, lalu tekan tombol di bawah.`;
    const admins = await adminChats();
    if (!admins.length) console.warn('belum ada admin yang terhubung ke bot');
    for (const c of admins) await tg(m.photo ? 'sendPhoto' : 'sendDocument', { chat_id: c, [m.photo ? 'photo' : 'document']: foto, caption: keterangan, reply_markup: tombol });
    return kirim(chat, `✅ Bukti transfer <b>#${p.id}</b> (${HARGA[paket]?.nama || paket}) diterima dan sudah kami teruskan ke pemilik.\n\n⏳ <b>Masa tunggu: maksimal 24 jam</b>, biasanya jauh lebih cepat. Anda tidak perlu melakukan apa pun; kami kabari di sini dan lewat email begitu disetujui. Kalau lewat 12 jam belum ada kabar, bot ini akan mengingatkan kami secara otomatis.`);
  }

  if (/^\/?status/i.test(teks)) {
    const tunggu = (await rest(`/pembayaran?anggota_id=eq.${a.id}&status=eq.menunggu&select=id,dibuat_pada`)) || [];
    return kirim(chat, aktif(a) ? `Akun aktif${a.langganan_sampai ? ` sampai ${tglId(a.langganan_sampai)}` : ''}.` : tunggu.length ? `Bukti #${tunggu[0].id} sedang diperiksa (dikirim ${tglId(tunggu[0].dibuat_pada)}). Masa tunggu maksimal 24 jam.` : `Akun belum aktif. ${teksBayar(a.paket)}`);
  }
  if (admin && /^\/?menunggu/i.test(teks)) {
    const daftar = (await rest('/pembayaran?status=eq.menunggu&select=id,paket,dibuat_pada,anggota(email,nama)&order=dibuat_pada.asc')) || [];
    return kirim(chat, daftar.length ? 'Bukti yang menunggu:\n' + daftar.map((p: any) => `#${p.id} · ${p.anggota?.nama || '-'} (${p.anggota?.email}) · ${p.paket} · ${p.dibuat_pada.slice(0, 16).replace('T', ' ')}`).join('\n') : 'Tidak ada bukti yang menunggu.');
  }
  if (/^\/?(bulanan|tahunan)$/i.test(teks)) { const paket = teks.replace('/', '').toLowerCase(); await ubahAnggota(a.id, { paket }); return kirim(chat, teksBayar(paket)); }
  return kirim(chat, aktif(a)
    ? `Akun Anda aktif. Kirim foto bukti transfer untuk memperpanjang, atau ketik <b>status</b>.`
    : `Kirim <b>foto bukti transfer</b> di sini untuk mengaktifkan langganan. Ketik <b>bulanan</b> atau <b>tahunan</b> untuk mengganti paket.\n\n${teksBayar(a.paket)}`);
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
    const dasar = a?.langganan_sampai && a.langganan_sampai >= hariIni() ? new Date(a.langganan_sampai) : new Date();
    dasar.setDate(dasar.getDate() + HARGA[paket].hari);
    const sampai = dasar.toISOString().slice(0, 10);
    await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ status: 'disetujui', paket, diputuskan_pada: kini, diputuskan_oleh: pengubah.email }) });
    await ubahAnggota(p.anggota_id, { status: 'disetujui', diputuskan_pada: kini, langganan_sampai: sampai, paket });
    const emailOk = a ? await emailKonfirmasi(a.email) : false;
    if (a?.telegram_chat_id) await kirim(a.telegram_chat_id, `🎉 <b>Pembayaran #${p.id} disetujui.</b> ${HARGA[paket].nama} aktif sampai <b>${tglId(sampai)}</b>.\n\nAkun Anda <b>sudah bisa masuk sekarang</b>: ${SITUS}/masuk.html (email + kata sandi Anda).${emailOk ? '\nKami juga mengirim email berisi tombol <b>Masuk</b> yang langsung membuka laporan.' : ''}\n\nSemua laporan pagi, dossier, dan modul terbuka. Selamat membaca.`);
    ringkas = `✅ Disetujui (${paket}) oleh ${pengubah.email} · aktif sampai ${sampai}${emailOk ? '' : ' · email gagal terkirim'}`;
  } else {
    await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ status: 'ditolak', diputuskan_pada: kini, diputuskan_oleh: pengubah.email }) });
    if (a?.telegram_chat_id) await kirim(a.telegram_chat_id, `❌ Bukti transfer <b>#${p.id}</b> belum bisa kami terima. Periksa nominal dan rekening tujuannya, lalu kirim ulang buktinya di sini. Kalau merasa keliru, balas pesan ini dan kami periksa manual.`);
    ringkas = `❌ Ditolak oleh ${pengubah.email}`;
  }
  await tg('answerCallbackQuery', { callback_query_id: q.id, text: ringkas.slice(0, 180) });
  await tg('editMessageCaption', { chat_id: chat, message_id: q.message.message_id, caption: `${q.message.caption || ''}\n\n${ringkas}` });
}

// ------------------------------------------------------------- pengingat (tiap jam)
async function pengingat() {
  const kini = Date.now(), laporan: string[] = [];
  const admins = await adminChats();
  const tunggu = (await rest('/pembayaran?status=eq.menunggu&select=id,paket,dibuat_pada,pengingat_pada,pengingat_pengirim_pada,anggota(id,email,nama,telegram_chat_id)&order=dibuat_pada.asc')) || [];
  // 1. Admin: bukti menunggu > 2 jam, diulang tiap 6 jam
  const telat = tunggu.filter((p: any) => kini - Date.parse(p.dibuat_pada) > 2 * JAM && (!p.pengingat_pada || kini - Date.parse(p.pengingat_pada) > 6 * JAM));
  if (telat.length && admins.length) {
    const teks = `⏰ Pengingat: <b>${telat.length} bukti transfer</b> masih menunggu keputusan Anda.\n` + telat.map((p: any) => { const jam = Math.floor((kini - Date.parse(p.dibuat_pada)) / JAM); return `#${p.id} · ${p.anggota?.nama || '-'} (${p.anggota?.email}) · ${p.paket} · ${jam} jam lalu`; }).join('\n') + '\n\nKetik /menunggu untuk daftar lengkap; tombol Setujui/Tolak ada di pesan bukti masing-masing.';
    for (const c of admins) await kirim(c, teks);
    for (const p of telat) await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ pengingat_pada: new Date().toISOString() }) });
    laporan.push(`admin diingatkan: ${telat.length}`);
  }
  // 2. Pengirim: > 12 jam belum diputuskan, kabari sekali
  const lama = tunggu.filter((p: any) => kini - Date.parse(p.dibuat_pada) > 12 * JAM && !p.pengingat_pengirim_pada && p.anggota?.telegram_chat_id);
  for (const p of lama) {
    await kirim(p.anggota.telegram_chat_id, `⏳ Bukti transfer <b>#${p.id}</b> masih dalam pemeriksaan. Kami sudah mengingatkan pemilik. Mohon maaf atas tunggunya; Anda akan dikabari di sini dan lewat email begitu disetujui.`);
    await rest(`/pembayaran?id=eq.${p.id}`, { method: 'PATCH', body: JSON.stringify({ pengingat_pengirim_pada: new Date().toISOString() }) });
  }
  if (lama.length) laporan.push(`pengirim diingatkan: ${lama.length}`);
  // 3. Akun terhubung, belum aktif, belum kirim bukti > 24 jam: ingatkan sekali
  const belum = (await rest(`/anggota?status=eq.menunggu&telegram_chat_id=not.is.null&pengingat_pada=is.null&select=id,nama,paket,telegram_chat_id,dibuat_pada`)) || [];
  let n = 0;
  for (const a of belum) {
    if (kini - Date.parse(a.dibuat_pada) < 24 * JAM) continue;
    const ada = (await rest(`/pembayaran?anggota_id=eq.${a.id}&select=id&limit=1`)) || [];
    if (ada.length) continue;
    await kirim(a.telegram_chat_id, `Halo ${a.nama || ''}, akun Anda sudah terdaftar tapi langganannya belum aktif.\n\n${teksBayar(a.paket)}\n\nKalau Anda sudah transfer, cukup kirim foto buktinya di sini.`);
    await ubahAnggota(a.id, { pengingat_pada: new Date().toISOString() }); n++;
  }
  if (n) laporan.push(`belum bayar diingatkan: ${n}`);
  return laporan.length ? laporan.join(' | ') : 'tidak ada yang perlu diingatkan';
}

// ------------------------------------------------------------- webhook
Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.searchParams.get('tugas') === 'pengingat') {
    if (req.headers.get('x-telegram-bot-api-secret-token') !== RAHASIA) return new Response('forbidden', { status: 403 });
    try { return new Response(await pengingat()); } catch (e) { console.error(e); return new Response('gagal: ' + e, { status: 500 }); }
  }
  if (req.method !== 'POST') return new Response('bot langganan Hanif Dossier Crypto', { status: 200 });
  if (req.headers.get('x-telegram-bot-api-secret-token') !== RAHASIA) return new Response('forbidden', { status: 403 });
  try {
    const u = await req.json();
    if (u.message) await tanganiPesan(u.message);
    else if (u.callback_query) await tanganiTombol(u.callback_query);
  } catch (e) { console.error(e); }
  return new Response('ok');
});
