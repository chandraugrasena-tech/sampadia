import { useState } from "react";
import { MapPin, Clock, Search, Info } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { points } from "../data.js";

const cities = ["Semua kota", ...new Set(points.map((p) => p.city))];
const kinds = ["Plastik", "Kertas", "Logam", "Kaca", "Elektronik", "B3", "Organik"];

export default function Points() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("Semua kota");
  const [kind, setKind] = useState("");
  const list = points.filter((p) => (city === "Semua kota" || p.city === city) && (!kind || p.types.includes(kind)) && p.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHeader title="Titik pengumpulan" desc="Temukan bank sampah dan tempat penyetoran sampah di kotamu." />
      <section className="wrap mt-8">
        <p className="flex items-start gap-2 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900"><Info size={18} className="mt-0.5 shrink-0" /> Data di halaman ini masih contoh. Ganti dengan data lokasi aslimu di <code className="rounded bg-white px-1">src/data.js</code>, dan konfirmasi ke lokasi sebelum datang.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="relative"><Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input className="input pl-10" placeholder="Cari nama tempat..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Cari nama tempat" /></div>
          <select className="input" value={city} onChange={(e) => setCity(e.target.value)} aria-label="Pilih kota">{cities.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {["", ...kinds].map((k) => (
            <button key={k || "all"} onClick={() => setKind(k)} aria-pressed={kind === k} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${kind === k ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{k || "Semua jenis"}</button>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-500">{list.length} lokasi ditemukan</p>
        {list.length ? (
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {list.map((p) => (
              <article key={p.id} className="card">
                <h2 className="text-lg font-bold text-slate-900">{p.name}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600"><MapPin size={15} className="shrink-0 text-brand-600" />{p.address}, {p.city}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-600"><Clock size={15} className="shrink-0 text-brand-600" />{p.hours}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.types.map((t) => <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{t}</span>)}</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="card mt-3 text-center"><p className="font-semibold text-slate-900">Belum ada lokasi yang cocok</p><p className="mt-1 text-sm text-slate-500">Coba pilih Semua kota atau Semua jenis.</p></div>
        )}
      </section>
    </>
  );
}
