import { Bookmark, Clock } from "lucide-react";
import { catStyle } from "../data.js";

export default function ArticleCard({ a, saved, onSave }) {
  return (
    <article className="card flex flex-col transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${catStyle[a.cat]}`}>{a.cat}</span>
        {onSave && (
          <button onClick={() => onSave(a.slug)} aria-pressed={saved} aria-label={saved ? "Hapus dari tersimpan" : "Simpan artikel"} className={`rounded-full p-2 ${saved ? "text-brand-600" : "text-slate-400 hover:text-slate-600"}`}>
            <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          </button>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900"><a href={`#/artikel/${a.slug}`} className="hover:text-brand-700">{a.title}</a></h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{a.excerpt}</p>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400"><Clock size={14} />{a.read} menit baca</p>
    </article>
  );
}
