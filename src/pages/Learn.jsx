import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { topics } from "../data.js";

export default function Learn() {
  const [id, setId] = useState(topics[0].id);
  const t = topics.find((x) => x.id === id);
  return (
    <>
      <PageHeader title="Belajar mengelola sampah" desc="Pilih topik di bawah. Tiap topik singkat dan bisa langsung dipraktikkan." />
      <section className="wrap mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist">
          {topics.map((x) => (
            <button key={x.id} role="tab" aria-selected={x.id === id} onClick={() => setId(x.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${x.id === id ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {x.label}
            </button>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">{t.intro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.items.map((it) => (
            <article key={it.title} className={`rounded-3xl border p-6 ${it.color}`}>
              <h2 className="text-lg font-bold text-slate-900">{it.title}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{it.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-50 p-6 sm:flex-row sm:items-center">
          <p className="font-semibold text-slate-800">Sudah paham? Uji pengetahuanmu dengan quiz singkat.</p>
          <a href="#/quiz" className="btn-primary">Coba quiz <ArrowRight size={16} /></a>
        </div>
      </section>
    </>
  );
}
