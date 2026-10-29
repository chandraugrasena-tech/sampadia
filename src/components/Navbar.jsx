import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export const links = [["", "Beranda"], ["belajar", "Belajar"], ["artikel", "Artikel"], ["komunitas", "Komunitas"], ["kalkulator", "Kalkulator"], ["tentang", "Tentang"], ["kontak", "Kontak"]];

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);
  const item = (k) => `rounded-full px-3 py-2 text-sm font-medium transition ${route === k ? "bg-brand-100 text-brand-700" : "text-slate-600 hover:bg-slate-100"}`;
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto max-w-6xl rounded-3xl border border-white bg-white/90 px-4 py-2.5 shadow-lg shadow-brand-900/10 backdrop-blur">
        <div className="flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2 font-bold text-brand-700">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white"><Leaf size={16} /></span>
            Sampadia
          </a>
          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map(([k, label]) => <li key={k}><a href={`#/${k}`} className={item(k)}>{label}</a></li>)}
          </ul>
          <a href="#/quiz" className="btn-primary hidden lg:inline-flex">Coba Quiz</a>
          <button className="rounded-full p-2 text-slate-700 lg:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="grid gap-1 pb-1 pt-3 lg:hidden">
            {links.map(([k, label]) => <a key={k} href={`#/${k}`} onClick={() => setOpen(false)} className={item(k)}>{label}</a>)}
            <a href="#/quiz" onClick={() => setOpen(false)} className="btn-primary mt-1">Coba Quiz</a>
          </div>
        )}
      </nav>
    </header>
  );
}
