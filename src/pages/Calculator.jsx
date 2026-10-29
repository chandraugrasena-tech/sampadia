import { RotateCcw, Lightbulb, Leaf } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { useLocalStorage } from "../hooks.js";

const items = [
  { k: "botol", label: "Botol plastik sekali pakai", unit: "buah/minggu", w: 20, max: 30, step: 1, def: 7, plastic: true, tip: "Bawa botol minum isi ulang. Ini cara tercepat mengurangi plastik." },
  { k: "kantong", label: "Kantong plastik", unit: "lembar/minggu", w: 5, max: 40, step: 1, def: 10, plastic: true, tip: "Simpan tas kain di tas atau motor agar selalu ada saat belanja." },
  { k: "kemasan", label: "Kemasan makanan sekali pakai", unit: "buah/minggu", w: 15, max: 30, step: 1, def: 7, plastic: true, tip: "Bawa kotak makan sendiri saat beli makanan." },
  { k: "kaleng", label: "Kaleng minuman", unit: "buah/minggu", w: 15, max: 20, step: 1, def: 2, tip: "Kaleng bisa disetor ke bank sampah. Bilas dulu sebelum disimpan." },
  { k: "makanan", label: "Sisa makanan", unit: "kg/minggu", w: 1000, max: 5, step: 0.5, def: 1.5, tip: "Rencanakan porsi dan olah sisa dapur menjadi kompos." },
  { k: "kertas", label: "Kertas dan kardus", unit: "kg/minggu", w: 1000, max: 3, step: 0.25, def: 0.5, tip: "Kumpulkan kertas bersih dan kering, lalu setor ke pengepul." }
];
const init = Object.fromEntries(items.map((i) => [i.k, i.def]));

export default function Calculator() {
  const [v, setV] = useLocalStorage("sampadia_calc", init);
  const rows = items.map((i) => ({ ...i, val: v[i.k] ?? i.def, grams: (v[i.k] ?? i.def) * i.w }));
  const total = rows.reduce((s, r) => s + r.grams, 0);
  const yearly = (total * 52) / 1000;
  const plasticG = rows.filter((r) => r.plastic).reduce((s, r) => s + r.grams, 0);
  const plasticYear = (plasticG * 52) / 1000;
  const saved = (plasticG * 0.5 * 52) / 1000;
  const top = rows.reduce((a, b) => (b.grams > a.grams ? b : a), rows[0]);
  const level = plasticYear < 5 ? ["Pejuang Bumi", "Plastik sekali pakaimu sudah sedikit. Pertahankan dan ajak orang lain."] : plasticYear < 15 ? ["Pegiat Peduli", "Kamu sudah di jalur yang baik. Kurangi sedikit lagi plastik sekali pakai."] : ["Siap Berubah", "Ada banyak ruang untuk berkurang. Mulai dari satu kebiasaan saja."];

  return (
    <>
      <PageHeader title="Kalkulator sampah" desc="Geser sesuai kebiasaanmu dalam seminggu, lalu lihat perkiraan sampahmu dalam setahun." />
      <section className="wrap mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="card grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Kebiasaan mingguanmu</h2>
            <button className="btn text-slate-500 hover:bg-slate-100" onClick={() => setV(init)}><RotateCcw size={16} /> Reset</button>
          </div>
          {rows.map((r) => (
            <div key={r.k}>
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor={r.k} className="font-semibold text-slate-800">{r.label}</label>
                <span className="shrink-0 text-sm font-semibold text-brand-700">{r.val} {r.unit}</span>
              </div>
              <input id={r.k} type="range" min="0" max={r.max} step={r.step} value={r.val} onChange={(e) => setV({ ...v, [r.k]: Number(e.target.value) })} className="mt-2 w-full accent-brand-600" />
            </div>
          ))}
        </div>
        <div className="grid content-start gap-5">
          <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white">
            <p className="text-sm text-white/85">Perkiraan sampahmu per tahun</p>
            <p className="mt-1 text-5xl font-extrabold">{yearly.toFixed(0)} <span className="text-2xl font-bold">kg</span></p>
            <p className="mt-4 flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-3 text-sm"><Leaf size={16} className="shrink-0" /> Tingkatmu: <b>{level[0]}</b></p>
            <p className="mt-3 text-sm text-white/90">{level[1]}</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-slate-900">Dari mana sampahmu?</h3>
            <ul className="mt-4 grid gap-3">
              {rows.map((r) => (
                <li key={r.k}>
                  <div className="flex justify-between text-sm"><span className="text-slate-600">{r.label}</span><span className="font-semibold text-slate-800">{total ? Math.round((r.grams / total) * 100) : 0}%</span></div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${total ? (r.grams / total) * 100 : 0}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-amber-100 bg-amber-50">
            <p className="flex items-center gap-2 font-bold text-slate-900"><Lightbulb size={18} className="text-amber-500" /> Saran untukmu</p>
            <p className="mt-2 text-slate-700">Penyumbang terbesar: <b>{top.label.toLowerCase()}</b>. {top.tip}</p>
            <p className="mt-3 text-sm text-slate-600">Jika plastik sekali pakaimu berkurang setengah, kamu menghemat sekitar <b>{saved.toFixed(1)} kg plastik</b> per tahun.</p>
          </div>
          <p className="text-xs text-slate-400">Angka berupa perkiraan dari berat rata-rata tiap barang, hanya sebagai gambaran kebiasaan.</p>
        </div>
      </section>
    </>
  );
}
