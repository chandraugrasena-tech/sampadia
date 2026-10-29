import { useState } from "react";
import { ArrowLeft, Bookmark, Clock, Search } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import { articles, catStyle } from "../data.js";
import { useLocalStorage } from "../hooks.js";
import NotFound from "./NotFound.jsx";

const fmt = (d) => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

function Detail({ a, saved, onSave }) {
  const related = articles.filter((x) => x.slug !== a.slug && x.cat === a.cat).concat(articles.filter((x) => x.slug !== a.slug && x.cat !== a.cat)).slice(0, 2);
  return (
    <>
      <section className="bg-gradient-to-br from-brand-400 to-brand-600 pb-14 pt-32 text-white">
        <div className="wrap max-w-3xl">
          <a href="#/artikel" className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white"><ArrowLeft size={16} /> Semua artikel</a>
          <span className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${catStyle[a.cat]}`}>{a.cat}</span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{a.title}</h1>
          <p className="mt-3 flex items-center gap-3 text-sm text-white/90"><span>{fmt(a.date)}</span><span className="flex items-center gap-1"><Clock size={14} /> {a.read} menit baca</span></p>
        </div>
      </section>
      <article className="wrap mt-10 max-w-3xl">
        <p className="text-lg font-medium leading-relaxed text-slate-800">{a.excerpt}</p>
        <div className="mt-6 grid gap-5 text-[17px] leading-8 text-slate-600">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        <button onClick={() => onSave(a.slug)} className={`mt-8 ${saved ? "btn border border-brand-300 bg-brand-50 text-brand-700" : "btn-primary"}`}>
          <Bookmark size={16} fill={saved ? "currentColor" : "none"} /> {saved ? "Tersimpan" : "Simpan artikel"}
        </button>
        <h2 className="mt-14 text-xl font-bold text-slate-900">Baca juga</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">{related.map((r) => <ArticleCard key={r.slug} a={r} />)}</div>
      </article>
    </>
  );
}

export default function Articles({ param }) {
  const [saved, setSaved] = useLocalStorage("sampadia_saved", []);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");
  const toggle = (slug) => setSaved(saved.includes(slug) ? saved.filter((s) => s !== slug) : [...saved, slug]);

  if (param) {
    const a = articles.find((x) => x.slug === param);
    return a ? <Detail a={a} saved={saved.includes(a.slug)} onSave={toggle} /> : <NotFound />;
  }
  const cats = ["Semua", ...Object.keys(catStyle), "Tersimpan"];
  const list = articles.filter((a) => {
    if (cat === "Tersimpan" && !saved.includes(a.slug)) return false;
    if (cat !== "Semua" && cat !== "Tersimpan" && a.cat !== cat) return false;
    return (a.title + a.excerpt).toLowerCase().includes(q.toLowerCase());
  });
  return (
    <>
      <PageHeader title="Artikel & tips" desc="Bacaan singkat yang bisa langsung kamu praktikkan di rumah." />
      <section className="wrap mt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {c}{c === "Tersimpan" ? ` (${saved.length})` : ""}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="input pl-10" placeholder="Cari artikel..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Cari artikel" />
          </div>
        </div>
        {list.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((a) => <ArticleCard key={a.slug} a={a} saved={saved.includes(a.slug)} onSave={toggle} />)}</div>
        ) : (
          <div className="card mt-6 text-center">
            <p className="font-semibold text-slate-900">Tidak ada artikel yang cocok</p>
            <p className="mt-1 text-sm text-slate-500">Coba kata kunci lain, atau pilih kategori Semua.</p>
            <button className="btn-primary mt-4" onClick={() => { setQ(""); setCat("Semua"); }}>Reset pencarian</button>
          </div>
        )}
      </section>
    </>
  );
}
