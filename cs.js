/* Kotak chat "Dina", asisten Hanif Dossier. Dimuat di halaman publik lewat <script src="cs.js" defer>.
   Pertanyaan dikirim ke RPC cs_tanya (Supabase), yang menjawab dari basis pengetahuan situs. Tidak ada identitas yang
   dikirim: hanya id sesi acak yang disimpan di browser ini supaya percakapan nyambung. 4 Oktober 2026. */
(function () {
  'use strict';
  if (window.__hdcs) return; window.__hdcs = true;
  var DASAR = 'https://hzxfheydtrjhizbwbddh.supabase.co/rest/v1/rpc/';
  var ANON = 'sb_publishable_3c_5VhfP4Z9g1dSU9c00HQ_0QkuiHTm';
  var SAPA = 'Halo Kak, saya Dina, asisten Hanif Dossier. Tanyakan apa saja soal situs ini: kelas, riset, cara daftar, atau data pasar. Saya tidak menilai koin, itu bukan bagian saya.';
  var SARAN = ['Hanif Dossier itu apa?', 'Semuanya gratis?', 'Cara daftar akun', 'Kelas mulai dari mana?'];
  var simpan = function (k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) {} };
  var baca = function (k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } };
  var sesi = baca('hdcs-sesi'); if (!sesi || sesi.length < 8) { sesi = 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); simpan('hdcs-sesi', sesi); }
  var riwayat = []; try { riwayat = JSON.parse(baca('hdcs-riwayat', true) || '[]'); } catch (e) { riwayat = []; }

  var css = '' +
    '.hdcs-tombol{position:fixed;right:16px;bottom:16px;z-index:65;display:inline-flex;align-items:center;gap:9px;padding:11px 16px 11px 13px;border-radius:999px;border:1px solid var(--sage,#4f7a68);background:var(--sage,#4f7a68);color:#fff;font:700 14px/1 inherit;font-family:inherit;cursor:pointer;box-shadow:0 8px 24px rgba(43,51,48,.18);transition:transform .15s,box-shadow .15s}' +
    '.hdcs-tombol:hover{transform:translateY(-1px);box-shadow:0 10px 28px rgba(43,51,48,.22)}.hdcs-tombol svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
    '.hdcs-tombol[hidden]{display:none}body:has(.pasang-aplikasi:not([hidden])) .hdcs-tombol{bottom:84px}' +
    '.hdcs-panel{position:fixed;right:16px;bottom:16px;z-index:66;width:min(380px,calc(100vw - 32px));height:min(600px,calc(100vh - 32px));display:flex;flex-direction:column;background:var(--kartu,#fff);color:var(--tx,#2b3330);border:1px solid var(--gr,#e6e9e4);border-radius:20px;box-shadow:0 18px 50px rgba(43,51,48,.22);overflow:hidden;font-family:inherit}' +
    '.hdcs-panel[hidden]{display:none}.hdcs-kepala{display:flex;align-items:center;gap:11px;padding:13px 14px;border-bottom:1px solid var(--gr,#e6e9e4);background:var(--sage,#4f7a68);color:#fff}' +
    '.hdcs-avatar{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.18);display:grid;place-items:center;font:700 14px/1 inherit;letter-spacing:.02em}' +
    '.hdcs-kepala b{display:block;font-size:14.5px;line-height:1.2}.hdcs-kepala small{display:block;font-size:12px;opacity:.85;margin-top:2px}' +
    '.hdcs-tutup{margin-left:auto;width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font:400 20px/1 inherit;cursor:pointer}.hdcs-tutup:hover{background:rgba(255,255,255,.26)}' +
    '.hdcs-isi{flex:1;overflow-y:auto;padding:14px 14px 6px;display:flex;flex-direction:column;gap:9px;background:var(--bg,#f6f7f5)}' +
    '.hdcs-gelembung{max-width:86%;padding:9px 12px;border-radius:16px;font-size:14px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word}' +
    '.hdcs-gelembung.asisten{align-self:flex-start;background:var(--kartu,#fff);border:1px solid var(--gr,#e6e9e4);border-bottom-left-radius:6px}' +
    '.hdcs-gelembung.pengunjung{align-self:flex-end;background:var(--sage,#4f7a68);color:#fff;border-bottom-right-radius:6px}' +
    '.hdcs-gelembung.galat{align-self:flex-start;background:var(--bata-lembut,#f6e4df);color:var(--bata,#b86b5c);border-bottom-left-radius:6px}' +
    '.hdcs-gelembung a{color:inherit;text-decoration:underline;text-underline-offset:2px;word-break:break-all}.hdcs-gelembung.asisten a{color:var(--sage-tua,#365446);font-weight:600}' +
    '.hdcs-ketik{align-self:flex-start;display:inline-flex;gap:4px;padding:11px 14px;background:var(--kartu,#fff);border:1px solid var(--gr,#e6e9e4);border-radius:16px;border-bottom-left-radius:6px}' +
    '.hdcs-ketik i{width:6px;height:6px;border-radius:50%;background:var(--tx2,#58635e);opacity:.4;animation:hdcs-k 1.2s infinite}.hdcs-ketik i:nth-child(2){animation-delay:.2s}.hdcs-ketik i:nth-child(3){animation-delay:.4s}' +
    '@keyframes hdcs-k{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@media (prefers-reduced-motion:reduce){.hdcs-ketik i{animation:none;opacity:.6}}' +
    '.hdcs-saran{display:flex;flex-wrap:wrap;gap:6px;padding:4px 14px 8px;background:var(--bg,#f6f7f5)}.hdcs-saran button{border:1px solid var(--gr,#e6e9e4);background:var(--kartu,#fff);color:var(--tx2,#58635e);border-radius:999px;padding:6px 11px;font:600 12.5px/1 inherit;font-family:inherit;cursor:pointer}.hdcs-saran button:hover{border-color:var(--sage,#4f7a68);color:var(--sage-tua,#365446)}' +
    '.hdcs-form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--gr,#e6e9e4);background:var(--kartu,#fff)}' +
    '.hdcs-form textarea{flex:1;resize:none;min-height:40px;max-height:110px;padding:9px 12px;border:1px solid var(--gr,#e6e9e4);border-radius:14px;font:14px/1.4 inherit;font-family:inherit;color:inherit;background:var(--bg,#f6f7f5);outline:none}.hdcs-form textarea:focus{border-color:var(--sage,#4f7a68)}' +
    '.hdcs-kirim{width:42px;height:40px;flex:none;border:0;border-radius:14px;background:var(--sage,#4f7a68);color:#fff;cursor:pointer;display:grid;place-items:center}.hdcs-kirim:disabled{opacity:.5;cursor:default}.hdcs-kirim svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}' +
    '.hdcs-kaki{padding:0 14px 10px;font-size:11px;line-height:1.4;color:var(--tx2,#58635e);background:var(--kartu,#fff)}' +
    '@media (max-width:760px){.hdcs-tombol{bottom:78px;right:12px;padding:11px 13px}.hdcs-tombol span{display:none}.hdcs-panel{right:0;bottom:0;width:100vw;height:min(88vh,100vh);border-radius:20px 20px 0 0}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var ikonChat = '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>';
  var tombol = document.createElement('button'); tombol.type = 'button'; tombol.className = 'hdcs-tombol'; tombol.setAttribute('aria-label', 'Tanya Dina, asisten Hanif Dossier');
  tombol.innerHTML = ikonChat + '<span>Tanya Dina</span>';
  var panel = document.createElement('section'); panel.className = 'hdcs-panel'; panel.hidden = true; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Chat dengan Dina, asisten Hanif Dossier');
  panel.innerHTML = '<div class="hdcs-kepala"><div class="hdcs-avatar">D</div><div><b>Dina</b><small>asisten Hanif Dossier, menjawab dari isi situs</small></div><button type="button" class="hdcs-tutup" aria-label="Tutup">×</button></div>' +
    '<div class="hdcs-isi" aria-live="polite"></div><div class="hdcs-saran"></div>' +
    '<form class="hdcs-form"><textarea rows="1" maxlength="1000" placeholder="Tulis pertanyaan..." aria-label="Pertanyaan"></textarea><button type="submit" class="hdcs-kirim" aria-label="Kirim"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></form>' +
    '<div class="hdcs-kaki">Jawaban otomatis dari asisten, bukan nasihat investasi. Untuk hal di luar situs, DM Instagram @hanif.dossiercrypto.</div>';
  document.body.appendChild(tombol); document.body.appendChild(panel);
  var isi = panel.querySelector('.hdcs-isi'), saran = panel.querySelector('.hdcs-saran'), form = panel.querySelector('form'), ta = panel.querySelector('textarea'), kirim = panel.querySelector('.hdcs-kirim');

  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var tautkan = function (s) { return esc(s).replace(/https?:\/\/[^\s<)]+/g, function (u) { var bersih = u.replace(/[.,;:!?]+$/, ''); var ekor = u.slice(bersih.length); return '<a href="' + bersih + '" target="_blank" rel="noopener">' + bersih.replace(/^https?:\/\//, '') + '</a>' + ekor; }); };
  var gelembung = function (peran, teks) { var d = document.createElement('div'); d.className = 'hdcs-gelembung ' + peran; d.innerHTML = peran === 'asisten' ? tautkan(teks) : esc(teks); isi.appendChild(d); isi.scrollTop = isi.scrollHeight; return d; };
  var gambarSaran = function () { saran.innerHTML = riwayat.length ? '' : SARAN.map(function (s) { return '<button type="button">' + esc(s) + '</button>'; }).join(''); };
  var gambar = function () { isi.innerHTML = ''; gelembung('asisten', SAPA); riwayat.forEach(function (r) { gelembung(r.peran, r.isi); }); gambarSaran(); };
  var catat = function (peran, teks) { riwayat.push({ peran: peran, isi: teks }); if (riwayat.length > 40) riwayat = riwayat.slice(-40); simpan('hdcs-riwayat', JSON.stringify(riwayat), true); };

  var sibuk = false;
  var tanya = function (teks) {
    teks = (teks || '').trim(); if (!teks || sibuk) return;
    sibuk = true; kirim.disabled = true; gelembung('pengunjung', teks); catat('pengunjung', teks); gambarSaran();
    var ketik = document.createElement('div'); ketik.className = 'hdcs-ketik'; ketik.innerHTML = '<i></i><i></i><i></i>'; isi.appendChild(ketik); isi.scrollTop = isi.scrollHeight;
    var halaman = (location.pathname.split('/').pop() || 'index.html');
    // Jawaban Gemini butuh beberapa detik, sedangkan permintaan ke database dibatasi singkat: kirim dulu (dapat tiket),
    // lalu tanya tiap 1,2 detik apakah jawabannya sudah datang, paling lama 50 detik.
    var rpc = function (fn, body) { return fetch(DASAR + fn, { method: 'POST', headers: { apikey: ANON, Authorization: 'Bearer ' + ANON, 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(function (r) { return r.json(); }); };
    var selesai = function (j) { ketik.remove(); if (j && j.ok && j.jawaban) { gelembung('asisten', j.jawaban); catat('asisten', j.jawaban); } else { gelembung('galat', (j && j.pesan) || 'Maaf, saya sedang tidak bisa menjawab. Coba sebentar lagi.'); } sibuk = false; kirim.disabled = false; ta.focus(); };
    var putus = function () { selesai({ ok: false, pesan: 'Koneksi terputus. Coba kirim lagi, atau DM Instagram @hanif.dossiercrypto.' }); };
    rpc('cs_tanya', { p_sesi: sesi, p_pesan: teks, p_halaman: halaman }).then(function (j) {
      if (!j || !j.ok || !j.tiket) return selesai(j);
      var tiket = j.tiket, sisa = 42;
      var ambil = function () { rpc('cs_ambil', { p_sesi: sesi, p_tiket: tiket }).then(function (h) { if (h && h.ok && h.status === 'menunggu' && --sisa > 0) return setTimeout(ambil, 1200); selesai(h && h.status === 'menunggu' ? { ok: false, pesan: 'Jawabannya lama sekali datang. Coba kirim lagi ya.' } : h); }).catch(putus); };
      setTimeout(ambil, 1500);
    }).catch(putus);
  };

  var buka = function () { panel.hidden = false; tombol.hidden = true; gambar(); setTimeout(function () { ta.focus(); }, 50); };
  var tutup = function () { panel.hidden = true; tombol.hidden = false; tombol.focus(); };
  tombol.addEventListener('click', buka); panel.querySelector('.hdcs-tutup').addEventListener('click', tutup);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) tutup(); });
  form.addEventListener('submit', function (e) { e.preventDefault(); var t = ta.value; ta.value = ''; ta.style.height = ''; tanya(t); });
  ta.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true })); } });
  ta.addEventListener('input', function () { ta.style.height = ''; ta.style.height = Math.min(110, ta.scrollHeight) + 'px'; });
  saran.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) tanya(b.textContent); });
  if (location.hash === '#tanya') buka();
})();
