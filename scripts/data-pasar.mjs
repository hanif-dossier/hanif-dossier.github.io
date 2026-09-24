#!/usr/bin/env node
// =====================================================================
//  data-pasar.mjs — menarik data pasar dari DefiLlama, CoinGecko, dan
//  alternative.me, lalu menulis data/pasar.json untuk halaman pasar.html.
//
//  Dijalankan GitHub Actions tiap pagi (data-pasar.yml) atau manual:
//      node scripts/data-pasar.mjs
//  Kunci CoinGecko (opsional, menaikkan batas panggilan) dibaca dari
//  env COINGECKO_API_KEY atau berkas D:\Ai Agent\rahasia\api-crypto.env.
//
//  Isi pasar.json:
//    pasar   — angka ringkas: kapitalisasi total, dominasi, Fear & Greed,
//              stablecoin total, Coinbase premium (Coinbase vs Binance via CoinGecko)
//    rwa     — TVL aset dunia nyata: total, per jenis, protokol terbesar, riwayat bulanan
//    stable  — stablecoin: total, riwayat bulanan, per rantai
//    papan   — papan peringkat: fee & pendapatan protokol, fee rantai, TVL rantai,
//              volume DEX per rantai
//    koin    — ekosistem per koin dossier: harga/FDV/float dari CoinGecko,
//              TVL/fee/pendapatan/stablecoin/DEX dari DefiLlama, fee 6 bulan
//    musim   — Altcoin Season Index (hitung sendiri, riwayat 90 hari)
//    bitcoin — suplai, inflasi, halving, kesulitan (aturan protokol + mempool.space)
//    sektor  — indeks sektor buatan sendiri (kategori CoinGecko, bobot kapitalisasi
//              maks 25%/koin, dibersihkan); riwayat hariannya di data/sektor-riwayat.json
// =====================================================================

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const KELUAR = join(AKAR, 'data', 'pasar.json');

// ----------------------------------------------------------- kunci CoinGecko
async function kunciCoinGecko() {
  if (process.env.COINGECKO_API_KEY) return process.env.COINGECKO_API_KEY;
  const berkas = 'D:\\Ai Agent\\rahasia\\api-crypto.env';
  if (!existsSync(berkas)) return '';
  const m = (await readFile(berkas, 'utf8')).match(/^COINGECKO_API_KEY=(.+)$/m);
  return m ? m[1].trim() : '';
}
const KUNCI_CG = await kunciCoinGecko();

// ---------------------------------------------------------------- pengambil
async function ambil(url, { coba = 3, header = {} } = {}) {
  for (let i = 1; i <= coba; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'hanif-dossier', ...header }, signal: AbortSignal.timeout(45000) });
      if (r.status === 429 && i < coba) { await tidur(15000 * i); continue; }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      if (i === coba) { console.warn(`  ! gagal: ${url.slice(0, 90)} — ${e.message}`); return null; }
      await tidur(3000 * i);
    }
  }
}
const cg = (jalur) => ambil(`https://api.coingecko.com/api/v3${jalur}`, { header: KUNCI_CG ? { 'x-cg-demo-api-key': KUNCI_CG } : {} });
const llama = (jalur) => ambil(`https://api.llama.fi${jalur}`);
const tidur = (ms) => new Promise(r => setTimeout(r, ms));
const bulanDari = (detik) => new Date(detik * 1000).toISOString().slice(0, 7);

// Nilai terakhir tiap bulan dari deret [{date, nilai}] — N bulan terakhir.
function bulanan(deret, ambilNilai, n = 36) {
  const b = {};
  for (const x of deret) b[bulanDari(x.date ?? x[0])] = ambilNilai(x);
  return Object.entries(b).sort().slice(-n).map(([bulan, nilai]) => ({ bulan, nilai: Math.round(nilai) }));
}
// Jumlah per bulan dari deret harian [[ts, nilai]] — N bulan terakhir.
function jumlahBulanan(deret, n = 6) {
  const b = {};
  for (const [ts, v] of deret) { const k = bulanDari(ts); b[k] = (b[k] || 0) + v; }
  return Object.entries(b).sort().slice(-n).map(([bulan, nilai]) => ({ bulan, nilai: Math.round(nilai) }));
}

// ---------------------------------------------------------------- koin dossier
// jenis 'rantai': TVL/fee/stablecoin/DEX diambil sebagai rantai (nama DefiLlama).
// jenis 'aplikasi': TVL = jumlah protokol (slug DefiLlama), fee = summary/fees/<feeSlug>.
const KOIN = [
  { tick: 'BTC',   gecko: 'bitcoin',            jenis: 'rantai',   rantai: 'Bitcoin',   feeSlug: 'bitcoin',   lapisan: 'Lapisan dasar (L1)' },
  { tick: 'TRX',   gecko: 'tron',               jenis: 'rantai',   rantai: 'Tron',      feeSlug: 'tron',      lapisan: 'Lapisan dasar (L1)' },
  { tick: 'MON',   gecko: 'monad',              jenis: 'rantai',   rantai: 'Monad',     feeSlug: 'monad',     lapisan: 'Lapisan dasar (L1)' },
  { tick: 'ARB',   gecko: 'arbitrum',           jenis: 'rantai',   rantai: 'Arbitrum',  feeSlug: 'arbitrum',  lapisan: 'Lapisan skala (L2)' },
  { tick: 'INJ',   gecko: 'injective-protocol', jenis: 'rantai',   rantai: 'Injective', feeSlug: 'injective', lapisan: 'Chain khusus' },
  { tick: 'ASTER', gecko: 'aster-2',            jenis: 'aplikasi', protokol: ['aster-usdf', 'aster-asbnb'],            feeSlug: 'aster',        lapisan: 'Aplikasi — DeFi' },
  { tick: 'ENA',   gecko: 'ethena',             jenis: 'aplikasi', protokol: ['ethena-usde', 'ethena-usdtb'],          feeSlug: 'ethena',       lapisan: 'Aplikasi — DeFi' },
  { tick: 'REZ',   gecko: 'renzo',              jenis: 'aplikasi', protokol: ['renzo'],                                feeSlug: 'renzo',        lapisan: 'Aplikasi — Restaking' },
  { tick: 'ONDO',  gecko: 'ondo-finance',       jenis: 'aplikasi', protokol: ['ondo-yield-assets', 'ondo-global-markets'], feeSlug: 'ondo-finance', lapisan: 'Aplikasi — RWA' },
  { tick: 'CFG',   gecko: 'centrifuge-2',       jenis: 'aplikasi', protokol: ['centrifuge-protocol'],                  feeSlug: 'centrifuge',   lapisan: 'Aplikasi — RWA' },
  { tick: 'HUMA',  gecko: 'huma-finance',       jenis: 'aplikasi', protokol: ['huma-finance-v2'],                      feeSlug: null,           lapisan: 'Aplikasi — PayFi' },
  { tick: 'ZAMA',  gecko: 'zama',               jenis: 'aplikasi', protokol: ['zama'],                                 feeSlug: null,           lapisan: 'Infrastruktur' },
  { tick: 'ARKM',  gecko: 'arkham',             jenis: 'aplikasi', protokol: [],                                       feeSlug: null,           lapisan: 'Infrastruktur & data' },
];

// Pengelompokan RWA menurut nama protokol (DefiLlama tidak memberi jenis aset).
const JENIS_RWA = [
  ['Surat utang AS (T-bill)', /buidl|usyc|ustb|spiko|treasur|t-bill|tbill|superstate|franklin|benji|wisdomtree|anemoy|ondo yield|usdy|ousg|openeden|hashnote|midas|m0|usdtb|backed.*bond|janus/i],
  ['Emas & logam', /gold|xaut|paxg|silver|kinesis|metal/i],
  ['Saham & ETF', /global markets|xstock|stock|equit|etf|dinari|backed|robinhood/i],
  ['Kredit privat', /centrifuge|maple|goldfinch|credix|huma|clearpool|credit|lending/i],
  ['Dana & VC', /capital|fund|ventur|securitize|apollo|hamilton|kkr/i],
];
const jenisRwa = (nama) => (JENIS_RWA.find(([, re]) => re.test(nama)) || ['Lainnya'])[0];

// ==================================================================== utama
console.log('Menarik data pasar…' + (KUNCI_CG ? ' (CoinGecko dengan kunci)' : ' (CoinGecko tanpa kunci)'));
const hasil = { diperbarui: new Date().toISOString(), sumber: ['DefiLlama', 'CoinGecko', 'alternative.me', 'mempool.space'] };

// ---- 1. Angka pasar ringkas
{
  const g = (await cg('/global'))?.data;
  // Angka global CoinGecko (market_cap_change_percentage_24h_usd) terbukti menyimpang
  // (14 Sep 2026: -4,37% padahal tak satu pun koin besar turun >2%). Dihitung ulang
  // dari harga 100 koin terbesar; angka CoinGecko hanya cadangan.
  const top = (await cg('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')) || [];
  let kapKini = 0, kapLalu = 0;
  for (const c of top) { const p = c.price_change_percentage_24h; if (!c.market_cap || p == null || p <= -100) continue; kapKini += c.market_cap; kapLalu += c.market_cap / (1 + p / 100); }
  const fng = (await ambil('https://api.alternative.me/fng/?limit=1'))?.data?.[0];
  const cb = await cg('/coins/bitcoin/tickers?exchange_ids=gdax&order=volume_desc');
  const bn = await cg('/coins/bitcoin/tickers?exchange_ids=binance&order=volume_desc');
  const hargaDi = (d, target) => d?.tickers?.find(t => t.base === 'BTC' && t.target === target)?.last ?? null;
  const cbUsd = hargaDi(cb, 'USD'), bnUsdt = hargaDi(bn, 'USDT');
  hasil.pasar = {
    kapTotal: g?.total_market_cap?.usd ?? null, ubah24: kapLalu ? (kapKini / kapLalu - 1) * 100 : (g?.market_cap_change_percentage_24h_usd ?? null),
    volume24: g?.total_volume?.usd ?? null, domBtc: g?.market_cap_percentage?.btc ?? null, domEth: g?.market_cap_percentage?.eth ?? null,
    fng: fng ? { nilai: Number(fng.value), label: fng.value_classification } : null,
    coinbasePremium: cbUsd && bnUsdt ? { coinbase: cbUsd, binance: bnUsdt, persen: (cbUsd - bnUsdt) / bnUsdt * 100 } : null,
  };
  console.log('  pasar: kap total', Math.round((hasil.pasar.kapTotal || 0) / 1e9), 'M | premium', hasil.pasar.coinbasePremium?.persen?.toFixed(3));
}

// ---- 1b. Indeks musim altcoin (metode Blockchain Center, dihitung sendiri)
// Berapa persen dari 50 altcoin terbesar (tanpa stablecoin dan aset terbungkus) yang
// mengalahkan Bitcoin dalam 90 hari. >= 75 disebut musim altcoin, <= 25 musim Bitcoin.
// Ditambahkan 24 Sep 2026 setelah unggahan @crypto.radius memakai sinyal Glassnode
// (berbayar) untuk mengumumkan "altcoin season"; ini versi gratis yang bisa dicek siapa saja.
// CoinGecko tidak punya kolom 90 hari di /coins/markets, jadi tiap koin ditarik candle
// hariannya dari Binance Vision (CoinGecko hanya cadangan untuk yang tidak ada di Binance).
{
  const STABIL = /usd|dai|eur|frax|gho|\bust|susd|pyusd|fdusd|rlusd|buidl|usyc|ustb|xaut|paxg|usds|tusd/i;
  const BUNGKUS_N = /wrapped|bridged|binance-peg|\bpeg\b|staked|restaked|liquid staking|\bbridge\b/i;
  const BUNGKUS_S = /^(w|cb|l|st|wst|we|r|rs|m|j|b|ez|pz|k|s|os|sol|u|t|f|x)(btc|eth|sol|bnb|hype|avax|sui)$/i;
  const RIWAYAT_MUSIM = join(AKAR, 'data', 'musim-altcoin.json');
  const pasar100 = (await cg('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=30d')) || [];
  const btc = pasar100.find(c => c.id === 'bitcoin');
  const alt = pasar100.filter(c => c.id !== 'bitcoin' && !STABIL.test(c.symbol) && !STABIL.test(c.name) && !BUNGKUS_N.test(c.name) && !BUNGKUS_S.test(c.symbol)).slice(0, 50);
  // Harga 90 hari: Binance Vision dulu (cepat, tanpa batas laju yang ketat; pasangan
  // <SIMBOL>USDT, candle harian), CoinGecko hanya untuk koin yang tidak ada di Binance
  // atau baru tercatat (< 60 candle). Tanpa kunci CoinGecko, 51 panggilan market_chart
  // berturut-turut selalu kena 429 (uji lokal 24 Sep 2026).
  const dariBinance = async simbol => {
    const k = await ambil(`https://data-api.binance.vision/api/v3/klines?symbol=${simbol.toUpperCase()}USDT&interval=1d&limit=91`, { coba: 1 });
    if (!Array.isArray(k) || k.length < 60) return null;
    return (Number(k.at(-1)[4]) / Number(k[0][1]) - 1) * 100;
  };
  let jatuhCg = 0;
  const ubah90 = async (id, simbol) => {
    const b = await dariBinance(simbol); if (b != null) return b;
    jatuhCg++; await tidur(2600);
    const d = await cg(`/coins/${id}/market_chart?vs_currency=usd&days=91&interval=daily`);
    const h = d?.prices; if (!h || h.length < 60) return null;
    const awal = h.find(x => Date.now() - x[0] <= 90.5 * 864e5) || h[0];
    return (h.at(-1)[1] / awal[1] - 1) * 100;
  };
  if (btc && alt.length >= 30) {
    const btc90 = await ubah90('bitcoin', 'BTC');
    const baris = [];
    for (const c of alt) { await tidur(150); const r = await ubah90(c.id, c.symbol); if (r != null) baris.push({ simbol: c.symbol.toUpperCase(), nama: c.name, id: c.id, r90: r, r30: c.price_change_percentage_30d_in_currency ?? null }); }
    console.log(`  musim altcoin: ${baris.length} koin terhitung, ${jatuhCg} lewat CoinGecko`);
    if (btc90 != null && baris.length >= 30) {
      const menang = baris.filter(b => b.r90 > btc90);
      const indeks90 = Math.round(menang.length / baris.length * 100);
      const ada30 = baris.filter(b => b.r30 != null), btc30 = btc.price_change_percentage_30d_in_currency ?? null;
      const indeks30 = btc30 != null && ada30.length >= 30 ? Math.round(ada30.filter(b => b.r30 > btc30).length / ada30.length * 100) : null;
      const label = indeks90 >= 75 ? 'Musim altcoin' : indeks90 <= 25 ? 'Musim Bitcoin' : 'Netral';
      const hariIni = new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);
      const lama = existsSync(RIWAYAT_MUSIM) ? JSON.parse(await readFile(RIWAYAT_MUSIM, 'utf8')) : {};
      const riwayat = Object.fromEntries(Object.keys({ ...lama, [hariIni]: indeks90 }).sort().slice(-400).map(t => [t, t === hariIni ? indeks90 : lama[t]]));
      await writeFile(RIWAYAT_MUSIM, JSON.stringify(riwayat), 'utf8');
      const urut = [...baris].sort((a, b) => b.r90 - a.r90);
      hasil.musimAltcoin = {
        indeks90, indeks30, label, menang: menang.length, dari: baris.length, btc90, btc30, ambang: { altcoin: 75, bitcoin: 25 },
        teratas: urut.slice(0, 5).map(b => ({ simbol: b.simbol, r90: b.r90 })), terbawah: urut.slice(-5).reverse().map(b => ({ simbol: b.simbol, r90: b.r90 })),
        koinmu: baris.filter(b => KOIN.some(k => k.gecko === b.id)).map(b => ({ simbol: b.simbol, r90: b.r90, kalahkanBtc: b.r90 > btc90 })),
        riwayat: Object.entries(riwayat).slice(-90).map(([t, v]) => ({ t, v })),
        metode: '50 altcoin terbesar menurut kapitalisasi (tanpa stablecoin dan aset terbungkus) dibanding Bitcoin, kinerja 90 hari; sama dengan metode Altcoin Season Index Blockchain Center. Dihitung sendiri dari harga harian CoinGecko.',
      };
      console.log(`  musim altcoin: ${indeks90}/100 (${label}), ${menang.length} dari ${baris.length} alt mengalahkan BTC (${btc90.toFixed(1)}%) dalam 90 hari`);
    } else console.log('  musim altcoin: data kurang, dilewati');
  } else console.log('  musim altcoin: daftar pasar kosong, dilewati');
}

// ---- 2. Protokol (dipakai RWA, ekosistem aplikasi, dan peringkat)
const protokol = (await llama('/protocols')) || [];
const perSlug = Object.fromEntries(protokol.map(p => [p.slug, p]));

// Indeks protokol menurut simbol token, dipakai untuk melengkapi keterangan tiap koin
// di halaman Pasar. Satu simbol bisa dipakai beberapa protokol (mis. token bercabang),
// jadi yang dipilih yang TVL-nya paling besar.
const protoPerSimbol = {};
for (const p of protokol) {
  const s = (p.symbol || '').toUpperCase();
  if (!s || s === '-') continue;
  if (!protoPerSimbol[s] || (p.tvl || 0) > (protoPerSimbol[s].tvl || 0)) protoPerSimbol[s] = p;
}
// Diisi di bagian 5 (papan peringkat), dipakai di bagian 7 (sektor).
let feePerNama = {}, revPerNama = {};
// Keterangan tiap koin penyusun sektor; ditulis ke data/koin.json, bukan ke pasar.json.
const koinDetail = {};

// ---- 3. RWA
{
  const rwa = protokol.filter(p => p.category === 'RWA' || p.category === 'RWA Lending').sort((a, b) => (b.tvl || 0) - (a.tvl || 0));
  const total = rwa.reduce((a, p) => a + (p.tvl || 0), 0);
  const jenis = {};
  for (const p of rwa) { const j = jenisRwa(p.name); jenis[j] = (jenis[j] || 0) + (p.tvl || 0); }
  const teratas = rwa.slice(0, 12).map(p => ({ nama: p.name, slug: p.slug, tvl: Math.round(p.tvl || 0), jenis: jenisRwa(p.name), simbol: p.symbol && p.symbol !== '-' ? p.symbol : null, rantai: (p.chains || []).slice(0, 4) }));
  // Riwayat: jumlah 12 protokol RWA terbesar, akhir bulan, 36 bulan
  const gabung = {};
  for (const p of teratas) {
    const d = await llama(`/protocol/${p.slug}`); await tidur(400);
    for (const x of bulanan(d?.tvl || [], x => x.totalLiquidityUSD, 40)) gabung[x.bulan] = (gabung[x.bulan] || 0) + x.nilai;
  }
  hasil.rwa = {
    total: Math.round(total), jumlahProtokol: rwa.length,
    perJenis: Object.entries(jenis).sort((a, b) => b[1] - a[1]).map(([nama, tvl]) => ({ nama, tvl: Math.round(tvl) })),
    teratas, riwayat: Object.entries(gabung).sort().slice(-36).map(([bulan, nilai]) => ({ bulan, nilai })),
    catatan: 'TVL kategori RWA & RWA Lending di DefiLlama (tanpa stablecoin). Riwayat = jumlah 12 protokol terbesar hari ini, akhir bulan.',
  };
  console.log('  rwa: total', Math.round(total / 1e9), 'M |', rwa.length, 'protokol | riwayat', hasil.rwa.riwayat.length, 'bulan');
}

// ---- 4. Stablecoin
{
  const semua = await ambil('https://stablecoins.llama.fi/stablecoincharts/all');
  const rantai = await ambil('https://stablecoins.llama.fi/stablecoinchains');
  const perRantai = (rantai || []).map(c => ({ nama: c.name, total: Math.round(c.totalCirculatingUSD?.peggedUSD || 0) })).filter(c => c.total > 0).sort((a, b) => b.total - a.total);
  const totalSemua = perRantai.reduce((a, c) => a + c.total, 0);
  hasil.stable = {
    total: semua?.length ? Math.round(semua.at(-1).totalCirculatingUSD.peggedUSD) : totalSemua,
    riwayat: bulanan(semua || [], x => x.totalCirculatingUSD.peggedUSD, 36),
    perRantai: perRantai.slice(0, 10).map(c => ({ ...c, pangsa: c.total / totalSemua * 100 })),
  };
  console.log('  stablecoin: total', Math.round(hasil.stable.total / 1e9), 'M');
}

// ---- 5. Papan peringkat
{
  const fee = await ambil('https://api.llama.fi/overview/fees?dataType=dailyFees&excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true');
  const rev = await ambil('https://api.llama.fi/overview/fees?dataType=dailyRevenue&excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true');
  const revPer = Object.fromEntries((rev?.protocols || []).map(p => [p.name, p.total30d || 0]));
  // Disimpan ke luar blok supaya bagian sektor bisa memakainya untuk keterangan koin.
  feePerNama = Object.fromEntries((fee?.protocols || []).map(p => [p.name, p.total30d || 0]));
  revPerNama = revPer;
  const feeProtokol = (fee?.protocols || []).filter(p => p.category !== 'Chain' && (p.total30d || 0) > 0)
    .sort((a, b) => (b.total30d || 0) - (a.total30d || 0)).slice(0, 15)
    .map(p => ({ nama: p.name, kategori: p.category, fee30d: Math.round(p.total30d), rev30d: Math.round(revPer[p.name] || 0), rantai: (p.chains || []).slice(0, 3) }));
  const feeRantai = (fee?.protocols || []).filter(p => p.category === 'Chain' && (p.total30d || 0) > 0)
    .sort((a, b) => (b.total30d || 0) - (a.total30d || 0)).slice(0, 12)
    .map(p => ({ nama: p.name.replace(/ Chain$/, ''), fee30d: Math.round(p.total30d), rev30d: Math.round(revPer[p.name] || 0) }));
  const rantai = (await llama('/v2/chains')) || [];
  const tvlRantai = rantai.filter(c => c.tvl > 0).sort((a, b) => b.tvl - a.tvl).slice(0, 12).map(c => ({ nama: c.name, tvl: Math.round(c.tvl), simbol: c.tokenSymbol }));
  const dex = await ambil('https://api.llama.fi/overview/dexs?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true');
  const dexRantai = {};
  for (const p of dex?.protocols || []) for (const [r, v] of Object.entries(p.breakdown30d || {})) dexRantai[r] = (dexRantai[r] || 0) + Object.values(v).reduce((a, b) => a + b, 0);
  const dexProtokol = (dex?.protocols || []).filter(p => (p.total30d || 0) > 0).sort((a, b) => b.total30d - a.total30d).slice(0, 10).map(p => ({ nama: p.name, volume30d: Math.round(p.total30d), rantai: (p.chains || []).slice(0, 3) }));
  hasil.papan = {
    feeProtokol, feeRantai, tvlRantai, dexProtokol,
    dexRantai: Object.entries(dexRantai).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([nama, v]) => ({ nama, volume30d: Math.round(v) })),
    rwaProtokol: hasil.rwa.teratas.slice(0, 10), stableRantai: hasil.stable.perRantai,
  };
  console.log('  papan: fee protokol', feeProtokol.length, '| rantai', feeRantai.length, '| dex', dexProtokol.length);
}

// ---- 6. Ekosistem per koin
{
  const pasar = (await cg(`/coins/markets?vs_currency=usd&ids=${KOIN.map(k => k.gecko).join(',')}&price_change_percentage=7d,30d`)) || [];
  const perId = Object.fromEntries(pasar.map(c => [c.id, c]));
  const rantaiSemua = (await llama('/v2/chains')) || [];
  const stableRantai = (await ambil('https://stablecoins.llama.fi/stablecoinchains')) || [];
  hasil.koin = [];
  for (const k of KOIN) {
    const c = perId[k.gecko] || {};
    const eko = { jenis: k.jenis, tvl: null, fee30d: null, rev30d: null, feeBulanan: [], stable: null, dex30d: null, jumlahProtokol: null, protokolTeratas: [] };
    if (k.jenis === 'rantai') {
      eko.tvl = Math.round(rantaiSemua.find(r => r.name === k.rantai)?.tvl || 0);
      eko.stable = Math.round(stableRantai.find(r => r.name === k.rantai)?.totalCirculatingUSD?.peggedUSD || 0);
      const dex = await ambil(`https://api.llama.fi/overview/dexs/${k.rantai.toLowerCase()}?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true`);
      eko.dex30d = dex ? Math.round(dex.total30d || 0) : null;
      const diRantai = protokol.filter(p => (p.chainTvls || {})[k.rantai] > 1e5).sort((a, b) => b.chainTvls[k.rantai] - a.chainTvls[k.rantai]);
      eko.jumlahProtokol = diRantai.length;
      eko.protokolTeratas = diRantai.slice(0, 5).map(p => ({ nama: p.name, kategori: p.category, tvl: Math.round(p.chainTvls[k.rantai]) }));
    } else {
      const ps = k.protokol.map(s => perSlug[s]).filter(Boolean);
      eko.tvl = ps.length ? Math.round(ps.reduce((a, p) => a + (p.tvl || 0), 0)) : null;
      eko.protokolTeratas = ps.map(p => ({ nama: p.name, kategori: p.category, tvl: Math.round(p.tvl || 0) }));
    }
    if (k.feeSlug) {
      const f = await ambil(`https://api.llama.fi/summary/fees/${k.feeSlug}?dataType=dailyFees`);
      const r = await ambil(`https://api.llama.fi/summary/fees/${k.feeSlug}?dataType=dailyRevenue`);
      eko.fee30d = f ? Math.round(f.total30d || 0) : null; eko.rev30d = r ? Math.round(r.total30d || 0) : null;
      eko.feeBulanan = jumlahBulanan(f?.totalDataChart || [], 6);
      await tidur(300);
    }
    hasil.koin.push({
      tick: k.tick, nama: c.name || k.tick, gambar: c.image || null, lapisan: k.lapisan,
      harga: c.current_price ?? null, mcap: c.market_cap ?? null, fdv: c.fully_diluted_valuation ?? null,
      float: c.circulating_supply && c.total_supply ? c.circulating_supply / c.total_supply * 100 : null,
      ubah24: c.price_change_percentage_24h ?? null, ubah7: c.price_change_percentage_7d_in_currency ?? null, ubah30: c.price_change_percentage_30d_in_currency ?? null,
      ath: c.ath ?? null, dariAth: c.ath_change_percentage ?? null, peringkat: c.market_cap_rank ?? null,
      ekosistem: eko,
    });
    console.log(`  ${k.tick.padEnd(6)} harga ${c.current_price} | tvl ${eko.tvl} | fee30d ${eko.fee30d}`);
  }
}

// ---- 7. Indeks sektor
// Indeks buatan sendiri dari daftar koin per kategori CoinGecko. Angka kategori
// CoinGecko sendiri tidak dipakai sebagai hasil karena mudah terdistorsi: 15 Sep
// 2026 "RWA" +51% dan "Tokenized Assets" +97% dalam 24 jam, seluruhnya karena satu
// token (Figure HELOC) yang datanya melompat.
//
// Metode (mode 'harga'):
//   1. 30 koin terbesar per sektor setelah dibersihkan dari stablecoin, token
//      bungkus/staking (wBTC, stETH, …), dan data janggal.
//   2. Bobot = kapitalisasi, dibatasi 25% per koin (sisa bobot dibagi ulang).
//   3. Kinerja 24 jam, 7 hari, 30 hari = rata-rata tertimbang perubahan harga koin
//      penyusun hari ini. Tidak ada angka 1 tahun: dengan penyusun hari ini ia
//      bias (koin mati tidak ikut, koin baru +1.000% ikut) — uji 15 Sep 2026: Rantai
//      L1 +21% setahun padahal BTC −32% dan ETH −45%.
//   Tiap sektor mencatat 'penggerak' = koin dengan sumbangan terbesar ke kinerjanya.
//   4. Riwayat harian dirantai dari kinerja 24 jam, disimpan di data/sektor-riwayat.json.
// Mode 'kapitalisasi' (stablecoin, obligasi tertokenisasi): harganya dipatok, jadi
// yang diukur adalah pertumbuhan nilai beredar, bukan harga.
const SEKTOR_INDEKS = [
  { id: 'layer-1', nama: 'Rantai L1', grup: 'Infrastruktur', ket: 'Blockchain lapisan dasar' },
  { id: 'layer-2', nama: 'Rantai L2', grup: 'Infrastruktur', ket: 'Jaringan skala di atas Ethereum' },
  { id: 'oracle', nama: 'Oracle', grup: 'Infrastruktur', ket: 'Pemasok data ke kontrak' },
  { id: 'depin', nama: 'DePIN', grup: 'Infrastruktur', ket: 'Jaringan fisik terdesentralisasi' },
  { id: 'decentralized-finance-defi', nama: 'DeFi', grup: 'Keuangan on-chain', ket: 'Seluruh aplikasi keuangan on-chain' },
  { id: 'decentralized-exchange', nama: 'Bursa DEX', grup: 'Keuangan on-chain', ket: 'Bursa terdesentralisasi' },
  { id: 'lending-borrowing', nama: 'Pinjam-meminjam', grup: 'Keuangan on-chain', ket: 'Protokol lending' },
  { id: 'decentralized-perpetuals', nama: 'DEX perpetual', grup: 'Keuangan on-chain', ket: 'Bursa derivatif on-chain' },
  { id: 'liquid-staking-governance-tokens', nama: 'Liquid staking', grup: 'Keuangan on-chain', ket: 'Token tata kelola protokol staking' },
  { id: 'liquid-restaking-governance-token', nama: 'Restaking', grup: 'Keuangan on-chain', ket: 'Token tata kelola protokol restaking' },
  { id: 'rwa-protocol', nama: 'Protokol RWA', grup: 'RWA & tokenisasi', ket: 'Token protokol yang menokenisasi aset (bukan asetnya)' },
  { id: 'tokenized-gold', nama: 'Emas tertokenisasi', grup: 'RWA & tokenisasi', ket: 'Emas fisik dalam bentuk token' },
  { id: 'tokenized-stock', nama: 'Saham tertokenisasi', grup: 'RWA & tokenisasi', ket: 'Saham & ETF dalam bentuk token; satu saham bisa punya beberapa versi penerbit' },
  { id: 'artificial-intelligence', nama: 'AI', grup: 'Narasi', ket: 'Kecerdasan buatan' },
  { id: 'privacy-coins', nama: 'Privasi', grup: 'Narasi', ket: 'Koin transaksi privat' },
  { id: 'gaming', nama: 'Gaming', grup: 'Narasi', ket: 'Game & metaverse' },
  { id: 'meme-token', nama: 'Meme', grup: 'Narasi', ket: 'Koin meme' },
  { id: 'exchange-based-tokens', nama: 'Token bursa', grup: 'Narasi', ket: 'Token milik bursa terpusat' },
  { id: 'stablecoins', nama: 'Stablecoin', grup: 'Nilai beredar', ket: 'Dolar & mata uang on-chain', mode: 'kapitalisasi' },
  { id: 'tokenized-treasuries', nama: 'Obligasi AS tertokenisasi', grup: 'Nilai beredar', ket: 'T-bill & dana pasar uang on-chain', mode: 'kapitalisasi' },
  { id: 'tokenized-products', nama: 'Aset tertokenisasi (total)', grup: 'Nilai beredar', ket: 'Semua aset dunia nyata yang ditokenisasi', mode: 'kapitalisasi' },
];
const BUNGKUS_NAMA = /wrapped|bridged|binance-peg|\bpeg\b|staked|restaked|liquid staking|\bbridge\b/i;
const BUNGKUS_SIMBOL = /^(w|cb|l|st|wst|we|r|rs|m|j|b|ez|pz|k|s|os|sol|u|t|f|x)(btc|eth|sol|bnb|hype|avax|sui)$/i;
const BATAS_BOBOT = 0.25;

function bobotTerbatas(koin, batas) {
  const cap = Math.max(batas, 1 / koin.length);
  let w = koin.map(c => c.market_cap), total = w.reduce((a, b) => a + b, 0);
  w = w.map(x => x / total);
  for (let putaran = 0; putaran < 20; putaran++) {
    const lebih = w.reduce((a, x) => a + Math.max(0, x - cap), 0);
    if (lebih < 1e-9) break;
    const bebas = w.reduce((a, x) => a + (x < cap ? x : 0), 0);
    w = w.map(x => x >= cap ? cap : x + lebih * (x / bebas));
  }
  return w;
}
const rataTertimbang = (koin, w, kunci) => {
  let jum = 0, bobot = 0;
  koin.forEach((c, i) => { const v = c[kunci]; if (v != null && Number.isFinite(v)) { jum += v * w[i]; bobot += w[i]; } });
  return bobot > 0.5 ? jum / bobot : null; // butuh data untuk >50% bobot
};

{
  const PERIODE = '24h,7d,30d';
  const RIWAYAT = join(AKAR, 'data', 'sektor-riwayat.json');
  const riwayatLama = existsSync(RIWAYAT) ? JSON.parse(await readFile(RIWAYAT, 'utf8')) : {};
  const hariIni = new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);
  const tanggalLalu = Object.keys(riwayatLama).filter(t => t < hariIni).sort().at(-1);
  const kemarin = tanggalLalu ? riwayatLama[tanggalLalu] : {};
  const hariBaru = {};
  const milik = Object.fromEntries(KOIN.map(k => [k.gecko, k.tick]));

  const kategoriCg = Object.fromEntries(((await cg('/coins/categories')) || []).map(c => [c.id, c]));
  const stable = (await cg(`/coins/markets?vs_currency=usd&category=stablecoins&order=market_cap_desc&per_page=250&page=1`)) || [];
  const idStable = new Set(stable.map(c => c.id));
  const mentahPer = { stablecoins: stable };

  // Pembanding: BTC, ETH, dan 100 koin terbesar (tanpa stablecoin), metode yang sama.
  const top = (await cg(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=${PERIODE}`)) || [];
  const rangkum = (koin) => {
    const w = bobotTerbatas(koin, 1);
    return { r24: rataTertimbang(koin, w, 'price_change_percentage_24h_in_currency'), r7: rataTertimbang(koin, w, 'price_change_percentage_7d_in_currency'),
      r30: rataTertimbang(koin, w, 'price_change_percentage_30d_in_currency') };
  };
  const pembanding = [
    { kode: 'BTC', nama: 'Bitcoin', ...rangkum(top.filter(c => c.id === 'bitcoin')) },
    { kode: 'ETH', nama: 'Ethereum', ...rangkum(top.filter(c => c.id === 'ethereum')) },
    { kode: 'PASAR', nama: 'Pasar (100 koin, tanpa stablecoin)', ...rangkum(top.filter(c => c.market_cap && !idStable.has(c.id))) },
  ];

  // Keterangan tiap koin untuk panel detail di halaman Pasar. Ditulis ke berkas
  // terpisah (data/koin.json) dan hanya diambil browser saat pengguna membuka sebuah
  // sektor, supaya pasar.json tetap kecil dan halamannya cepat dibuka.
  // Sektor cukup menyimpan daftar id koinnya.
  const angka = v => (v == null || !Number.isFinite(v)) ? null : v;
  function catatKoin(c) {
    if (koinDetail[c.id]) return c.id;
    const simbol = (c.symbol || '').toUpperCase();
    const pr = protoPerSimbol[simbol];
    const nm = pr?.name || null;
    const d = {
      id: c.id, simbol, nama: c.name, gambar: c.image, peringkat: c.market_cap_rank ?? null,
      harga: angka(c.current_price), mcap: angka(c.market_cap), fdv: angka(c.fully_diluted_valuation),
      volume24: angka(c.total_volume), beredar: angka(c.circulating_supply),
      suplaiTotal: angka(c.total_supply), suplaiMaks: angka(c.max_supply),
      r24: angka(c.price_change_percentage_24h_in_currency ?? c.price_change_percentage_24h),
      r7: angka(c.price_change_percentage_7d_in_currency),
      r30: angka(c.price_change_percentage_30d_in_currency),
      ath: angka(c.ath), dariAth: angka(c.ath_change_percentage),
      athTanggal: c.ath_date ? c.ath_date.slice(0, 10) : null,
      // Bagian di bawah hanya terisi kalau simbol tokennya cocok dengan protokol di
      // DefiLlama. Banyak koin (mis. meme) memang tidak punya, dan itu wajar.
      protokol: nm, kategori: pr?.category || null, tvl: pr ? angka(pr.tvl) : null,
      rantai: pr?.chains?.length ? pr.chains.slice(0, 5) : null, situs: pr?.url || null,
      deskripsi: pr?.description ? String(pr.description).replace(/\s+/g, ' ').trim().slice(0, 400) : null,
      fee30d: nm ? angka(feePerNama[nm]) : null, rev30d: nm ? angka(revPerNama[nm]) : null,
    };
    for (const k of Object.keys(d)) if (d[k] == null) delete d[k];
    koinDetail[c.id] = d;
    return c.id;
  }

  const daftar = [];
  for (const s of SEKTOR_INDEKS) {
    let koin = mentahPer[s.id];
    if (!koin) { await tidur(KUNCI_CG ? 3200 : 6500); koin = (await cg(`/coins/markets?vs_currency=usd&category=${s.id}&order=market_cap_desc&per_page=100&page=1&price_change_percentage=${PERIODE}`)) || []; }
    const dikeluarkan = [];
    const lolos = [];
    for (const c of koin) {
      if (!c.market_cap) continue;
      const likuid = c.total_volume / c.market_cap;
      const alasan = s.mode === 'kapitalisasi'
        ? (c.market_cap_change_24h == null ? 'data perubahan kosong'
          : Math.abs(c.market_cap_change_percentage_24h) > 50 ? 'lonjakan nilai beredar tidak wajar' : null)
        : (idStable.has(c.id) ? 'stablecoin'
          : BUNGKUS_NAMA.test(c.name) || BUNGKUS_SIMBOL.test(c.symbol) ? 'token bungkus / staking'
          : c.price_change_percentage_24h_in_currency == null ? 'data harga kosong'
          : Math.abs(c.price_change_percentage_24h_in_currency) > 40 && likuid < 0.005 ? 'lonjakan tanpa likuiditas' : null);
      if (alasan) { if (c.market_cap > 1e8 && dikeluarkan.length < 8) dikeluarkan.push({ simbol: c.symbol.toUpperCase(), nama: c.name, alasan }); continue; }
      lolos.push(c);
    }
    const cg24 = kategoriCg[s.id]?.market_cap_change_24h ?? null;
    const entri = { id: s.id, nama: s.nama, grup: s.grup, ket: s.ket, mode: s.mode || 'harga', cg24, dikeluarkan };
    if (!lolos.length) { console.log(`  sektor ${s.id}: kosong`); continue; }

    if (entri.mode === 'kapitalisasi') {
      const kap = lolos.reduce((a, c) => a + c.market_cap, 0);
      const kapLalu = lolos.reduce((a, c) => a + c.market_cap - c.market_cap_change_24h, 0);
      Object.assign(entri, { kap: Math.round(kap), jumlah: lolos.length, r24: (kap / kapLalu - 1) * 100,
        teratas: lolos.slice(0, 5).map(c => ({ simbol: c.symbol.toUpperCase(), nama: c.name, gambar: c.image, bobot: c.market_cap / kap * 100 })),
        koin: lolos.map(c => ({ id: catatKoin(c), bobot: c.market_cap / kap * 100, r24: angka(c.market_cap_change_percentage_24h) })) });
      hariBaru[s.id] = Math.round(kap);
    } else {
      const inti = lolos.slice(0, 30), w = bobotTerbatas(inti, BATAS_BOBOT);
      Object.assign(entri, {
        kap: Math.round(inti.reduce((a, c) => a + c.market_cap, 0)), jumlah: inti.length,
        r24: rataTertimbang(inti, w, 'price_change_percentage_24h_in_currency'), r7: rataTertimbang(inti, w, 'price_change_percentage_7d_in_currency'),
        r30: rataTertimbang(inti, w, 'price_change_percentage_30d_in_currency'),
        penggerak: Object.fromEntries([['r24', '24h'], ['r7', '7d'], ['r30', '30d']].map(([k, p]) => {
          const kunci = p === '24h' ? 'price_change_percentage_24h_in_currency' : `price_change_percentage_${p}_in_currency`;
          let terbaik = null;
          inti.forEach((c, i) => { const v = c[kunci]; if (v != null && (!terbaik || Math.abs(v * w[i]) > Math.abs(terbaik.s))) terbaik = { simbol: c.symbol.toUpperCase(), r: v, s: v * w[i] }; });
          return [k, terbaik && { simbol: terbaik.simbol, r: terbaik.r, sumbangan: terbaik.s }];
        })),
        teratas: inti.map((c, i) => ({ simbol: c.symbol.toUpperCase(), nama: c.name, gambar: c.image, bobot: w[i] * 100, r24: c.price_change_percentage_24h_in_currency }))
          .sort((a, b) => b.bobot - a.bobot).slice(0, 5),
        koin: inti.map((c, i) => ({ id: catatKoin(c), bobot: w[i] * 100, r24: angka(c.price_change_percentage_24h_in_currency) })),
        koinmu: inti.filter(c => milik[c.id]).map(c => milik[c.id]),
      });
      const dasar = kemarin[s.id] ?? 100;
      hariBaru[s.id] = Math.round(dasar * (1 + (entri.r24 || 0) / 100) * 100) / 100;
    }
    daftar.push(entri);
    console.log(`  sektor ${s.nama.padEnd(26)} ${entri.mode === 'harga' ? 'r7 ' + entri.r7?.toFixed(1) + '%' : 'kap ' + Math.round(entri.kap / 1e9) + ' M'} | ${entri.jumlah} koin | dikeluarkan ${dikeluarkan.length}`);
  }
  for (const b of pembanding) hariBaru[b.kode] = Math.round((kemarin[b.kode] ?? 100) * (1 + (b.r24 || 0) / 100) * 100) / 100;

  // Simpan riwayat (±400 hari). Dijalankan dua kali sehari tetap aman: nilai hari
  // ini selalu dihitung dari tanggal sebelumnya, bukan dari dirinya sendiri.
  const riwayat = { ...riwayatLama, [hariIni]: hariBaru };
  const tanggal = Object.keys(riwayat).sort().slice(-400);
  const riwayatBaru = Object.fromEntries(tanggal.map(t => [t, riwayat[t]]));
  await writeFile(RIWAYAT, JSON.stringify(riwayatBaru), 'utf8');
  const deret = k => tanggal.map(t => ({ t, v: riwayatBaru[t][k] })).filter(x => x.v != null).slice(-90);
  for (const e of daftar) {
    e.riwayat = deret(e.id);
    if (e.mode === 'kapitalisasi') {
      const cari = hari => { const batas = new Date(Date.parse(hariIni) - hari * 864e5).toISOString().slice(0, 10); return e.riwayat.find(x => x.t >= batas && x.t < hariIni); };
      const a7 = cari(7), a30 = cari(30);
      e.r7 = a7 && a7.t <= new Date(Date.parse(hariIni) - 6 * 864e5).toISOString().slice(0, 10) ? (e.kap / a7.v - 1) * 100 : null;
      e.r30 = a30 && a30.t <= new Date(Date.parse(hariIni) - 28 * 864e5).toISOString().slice(0, 10) ? (e.kap / a30.v - 1) * 100 : null;
    }
  }
  for (const b of pembanding) b.riwayat = deret(b.kode);

  hasil.sektor = {
    tanggal: hariIni, pembanding, daftar,
    metode: 'Indeks buatan Hanif Dossier dari kategori CoinGecko: 30 koin terbesar per sektor, bobot kapitalisasi dibatasi 25% per koin, tanpa stablecoin, token bungkus/staking, dan data janggal. Kinerja = rata-rata tertimbang perubahan harga koin penyusun hari ini (tanpa angka 1 tahun karena bias bertahan hidup). Sektor bernilai tetap (stablecoin, obligasi) diukur dari nilai beredarnya.',
  };
}

// ---- 8. Musim pasar: Altcoin Season Index
// Definisi blockchaincenter.net: dari 50 koin terbesar (tanpa stablecoin dan token
// bungkus), berapa persen yang mengalahkan Bitcoin dalam 90 hari terakhir.
// ≥75 = musim altcoin, ≤25 = musim Bitcoin. Dihitung sendiri dari harga harian
// CoinGecko supaya riwayatnya ikut terbentuk dan bisa diperiksa.
{
  const stabil = new Set(((await cg('/coins/markets?vs_currency=usd&category=stablecoins&order=market_cap_desc&per_page=250&page=1')) || []).map(c => c.id));
  const semua = (await cg('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')) || [];
  const pilih = semua.filter(c => c.id !== 'bitcoin' && !stabil.has(c.id) && !BUNGKUS_NAMA.test(c.name) && !BUNGKUS_SIMBOL.test(c.symbol)).slice(0, 50);
  const hargaHarian = async (id) => {
    const d = await cg(`/coins/${id}/market_chart?vs_currency=usd&days=181`);
    if (!d?.prices?.length) return null;
    const per = {};
    for (const [ts, p] of d.prices) per[new Date(ts).toISOString().slice(0, 10)] = p;
    return per;
  };
  const btc = await hargaHarian('bitcoin');
  const koin = [];
  for (const c of pilih) {
    await tidur(KUNCI_CG ? 3200 : 6500);
    const h = await hargaHarian(c.id);
    if (h) koin.push({ id: c.id, simbol: c.symbol.toUpperCase(), nama: c.name, gambar: c.image, harga: h });
  }
  if (btc && koin.length >= 20) {
    const hari = Object.keys(btc).sort();
    const naikSejak = (h, t, t0) => (h[t] != null && h[t0] != null && h[t0] > 0) ? h[t] / h[t0] - 1 : null;
    const riwayat = [];
    for (let i = 90; i < hari.length; i++) {
      const t = hari[i], t0 = hari[i - 90], b = naikSejak(btc, t, t0);
      if (b == null) continue;
      const nilai = koin.map(k => naikSejak(k.harga, t, t0)).filter(v => v != null);
      if (nilai.length < 20) continue;
      riwayat.push({ t, v: Math.round(nilai.filter(v => v > b).length / nilai.length * 100) });
    }
    const t = hari.at(-1), t0 = hari.at(-91);
    const btc90 = naikSejak(btc, t, t0) * 100;
    const per = koin.map(k => ({ simbol: k.simbol, nama: k.nama, gambar: k.gambar, naik90: (naikSejak(k.harga, t, t0) ?? 0) * 100 }))
      .filter(k => Number.isFinite(k.naik90)).sort((a, b2) => b2.naik90 - a.naik90);
    const nilai = riwayat.at(-1)?.v ?? null;
    hasil.musim = {
      nilai, btc90, jumlah: per.length, riwayat,
      unggul: per.filter(k => k.naik90 > btc90).length,
      teratas: per.slice(0, 5), terbawah: per.slice(-5).reverse(),
      label: nilai == null ? 'tidak tersedia' : nilai >= 75 ? 'Musim altcoin' : nilai <= 25 ? 'Musim Bitcoin' : 'Di antara keduanya',
      catatan: 'Dihitung ulang dari harga harian CoinGecko dengan definisi Altcoin Season Index (blockchaincenter.net): berapa persen dari 50 koin terbesar (tanpa stablecoin dan token bungkus) yang mengalahkan Bitcoin dalam 90 hari. Riwayat memakai daftar koin hari ini.',
    };
    console.log(`  musim: ${nilai} (${hasil.musim.label}) · ${hasil.musim.unggul}/${per.length} koin kalahkan BTC · BTC 90h ${btc90.toFixed(1)}%`);
  }
}

// ---- 9. Bitcoin: suplai, inflasi, halving
// Semua dihitung dari aturan protokol (subsidi 50 BTC dibagi dua tiap 210.000 blok),
// bukan disalin dari situs lain. Tinggi blok & kecepatan blok dari mempool.space.
{
  const tinggi = Number(await (await fetch('https://mempool.space/api/blocks/tip/height').catch(() => ({ text: async () => '' }))).text()) || null;
  const sulit = await ambil('https://mempool.space/api/v1/difficulty-adjustment');
  const subsidi = (h) => 50 / 2 ** Math.floor(h / 210000);
  const suplai = (h) => { let s = 0; for (let e = 0; e * 210000 <= h; e++) s += Math.min(210000, h - e * 210000 + 1) * (50 / 2 ** e); return s; };
  // Tanggal halving yang sudah terjadi (blok 210.000 kelipatan) — sisanya diperkirakan.
  const HALVING = [['2009-01-03', 0], ['2012-11-28', 210000], ['2016-07-09', 420000], ['2020-05-11', 630000], ['2024-04-20', 840000]];
  if (tinggi) {
    const blokPerTahun = 144 * 365;
    const kini = suplai(tinggi), sub = subsidi(tinggi);
    const berikut = (Math.floor(tinggi / 210000) + 1) * 210000;
    const sisaBlok = berikut - tinggi;
    const detikPerBlok = sulit?.timeAvg ? sulit.timeAvg / 1000 : 600;
    const tanggalHalving = new Date(Date.now() + sisaBlok * detikPerBlok * 1000).toISOString();
    // Jadwal inflasi 2010–2040: satu titik per epoch, dipakai grafik tangga.
    const jadwal = [];
    for (let e = 0; e < 9; e++) {
      const h = e * 210000;
      const t = HALVING[e] ? HALVING[e][0] : new Date(Date.parse(HALVING.at(-1)[0]) + (e - (HALVING.length - 1)) * 4 * 365.25 * 864e5).toISOString().slice(0, 10);
      // Inflasi dihitung atas suplai di AKHIR periode halving itu. Kalau memakai
      // suplai di awal, epoch pertama keluar 5.256.000% (suplai baru 50 BTC) dan
      // grafiknya tidak terbaca. Dengan dasar akhir periode, angka periode berjalan
      // cocok dengan inflasi hari ini.
      const akhir = Math.max(suplai(h + 209999), 50);
      jadwal.push({ tahun: t.slice(0, 4), tanggal: t, blok: h, subsidi: 50 / 2 ** e, suplai: Math.round(suplai(h)), suplaiAkhir: Math.round(akhir), inflasi: (50 / 2 ** e) * blokPerTahun / akhir * 100 });
    }
    hasil.bitcoin = {
      tinggi, subsidi: sub, suplai: Math.round(kini), maks: 21e6, pangsaDitambang: kini / 21e6 * 100,
      inflasiTahunan: sub * blokPerTahun / kini * 100, terbitPerTahun: Math.round(sub * blokPerTahun),
      halving: { blok: berikut, sisaBlok, perkiraanTanggal: tanggalHalving, subsidiSesudah: sub / 2 },
      kesulitan: sulit ? { progres: sulit.progressPercent, perubahan: sulit.difficultyChange, sisaBlok: sulit.remainingBlocks, perkiraanTanggal: new Date(sulit.estimatedRetargetDate).toISOString(), detikPerBlok } : null,
      jadwal,
      catatan: 'Suplai dan inflasi dihitung dari aturan protokol (subsidi 50 BTC, dibagi dua tiap 210.000 blok) memakai tinggi blok dari mempool.space. Tanggal halving sebelum 2024 dari catatan sejarah; sesudahnya perkiraan.',
    };
    console.log(`  bitcoin: blok ${tinggi} | suplai ${(kini / 1e6).toFixed(3)} jt (${(kini / 21e6 * 100).toFixed(2)}%) | inflasi ${(sub * blokPerTahun / kini * 100).toFixed(2)}%/th | halving ${tanggalHalving.slice(0, 10)}`);
  }
}

await mkdir(dirname(KELUAR), { recursive: true });
await writeFile(KELUAR, JSON.stringify(hasil), 'utf8');
console.log('Ditulis:', KELUAR, Math.round(JSON.stringify(hasil).length / 1024), 'KB');

// Berkas kedua: keterangan tiap koin. Dipisah supaya pasar.json tetap kecil;
// browser hanya mengambilnya ketika pengguna membuka sebuah sektor.
const KELUAR_KOIN = join(AKAR, 'data', 'koin.json');
const isiKoin = JSON.stringify({ diperbarui: hasil.diperbarui, sumber: ['CoinGecko', 'DefiLlama'], koin: koinDetail });
await writeFile(KELUAR_KOIN, isiKoin, 'utf8');
console.log('Ditulis:', KELUAR_KOIN, Object.keys(koinDetail).length, 'koin,', Math.round(isiKoin.length / 1024), 'KB');
