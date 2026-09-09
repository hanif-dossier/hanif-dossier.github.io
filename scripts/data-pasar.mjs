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
const hasil = { diperbarui: new Date().toISOString(), sumber: ['DefiLlama', 'CoinGecko', 'alternative.me'] };

// ---- 1. Angka pasar ringkas
{
  const g = (await cg('/global'))?.data;
  const fng = (await ambil('https://api.alternative.me/fng/?limit=1'))?.data?.[0];
  const cb = await cg('/coins/bitcoin/tickers?exchange_ids=gdax&order=volume_desc');
  const bn = await cg('/coins/bitcoin/tickers?exchange_ids=binance&order=volume_desc');
  const hargaDi = (d, target) => d?.tickers?.find(t => t.base === 'BTC' && t.target === target)?.last ?? null;
  const cbUsd = hargaDi(cb, 'USD'), bnUsdt = hargaDi(bn, 'USDT');
  hasil.pasar = {
    kapTotal: g?.total_market_cap?.usd ?? null, ubah24: g?.market_cap_change_percentage_24h_usd ?? null,
    volume24: g?.total_volume?.usd ?? null, domBtc: g?.market_cap_percentage?.btc ?? null, domEth: g?.market_cap_percentage?.eth ?? null,
    fng: fng ? { nilai: Number(fng.value), label: fng.value_classification } : null,
    coinbasePremium: cbUsd && bnUsdt ? { coinbase: cbUsd, binance: bnUsdt, persen: (cbUsd - bnUsdt) / bnUsdt * 100 } : null,
  };
  console.log('  pasar: kap total', Math.round((hasil.pasar.kapTotal || 0) / 1e9), 'M | premium', hasil.pasar.coinbasePremium?.persen?.toFixed(3));
}

// ---- 2. Protokol (dipakai RWA, ekosistem aplikasi, dan peringkat)
const protokol = (await llama('/protocols')) || [];
const perSlug = Object.fromEntries(protokol.map(p => [p.slug, p]));

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

await mkdir(dirname(KELUAR), { recursive: true });
await writeFile(KELUAR, JSON.stringify(hasil), 'utf8');
console.log('Ditulis:', KELUAR, Math.round(JSON.stringify(hasil).length / 1024), 'KB');
