import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data.js";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="rounded-2xl border border-slate-200 bg-white">
          <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q}
            <ChevronDown size={20} className={`shrink-0 text-brand-600 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-5 pb-5 leading-relaxed text-slate-600">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
