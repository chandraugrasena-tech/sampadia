import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { useLocalStorage } from "../hooks.js";
import Faq from "../components/Faq.jsx";

export default function Contact() {
  const [, setMessages] = useLocalStorage("sampadia_messages", []);
  const [f, setF] = useState({ name: "", email: "", topic: "Pertanyaan umum", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Nama wajib diisi.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Masukkan email yang valid, misalnya nama@email.com.";
    if (f.message.trim().length < 10) er.message = "Pesan minimal 10 karakter.";
    setErr(er);
    if (Object.keys(er).length) return;
    setMessages((m) => [{ ...f, date: new Date().toISOString() }, ...m]);
    setF({ name: "", email: "", topic: "Pertanyaan umum", message: "" });
    setSent(true);
  };
  const Err = ({ k }) => err[k] ? <p className="mt-1 text-sm text-rose-600">{err[k]}</p> : null;

  return (
    <>
      <PageHeader title="Hubungi kami" desc="Ada pertanyaan, saran, atau ingin bekerja sama? Tulis pesanmu di sini." />
      <section className="wrap mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
        <form onSubmit={submit} className="card grid gap-4" noValidate>
          {sent && <p className="flex items-center gap-2 rounded-2xl bg-brand-50 p-4 font-semibold text-brand-800" role="status"><CheckCircle2 size={20} /> Pesan terkirim. Terima kasih!</p>}
          <div><label className="mb-1 block text-sm font-semibold text-slate-800" htmlFor="n">Nama</label><input id="n" className="input" value={f.name} onChange={set("name")} /><Err k="name" /></div>
          <div><label className="mb-1 block text-sm font-semibold text-slate-800" htmlFor="e">Email</label><input id="e" type="email" className="input" value={f.email} onChange={set("email")} /><Err k="email" /></div>
          <div><label className="mb-1 block text-sm font-semibold text-slate-800" htmlFor="t">Topik</label>
            <select id="t" className="input" value={f.topic} onChange={set("topic")}>
              {["Pertanyaan umum", "Kerja sama", "Saran dan masukan", "Laporan masalah"].map((o) => <option key={o}>{o}</option>)}
            </select></div>
          <div><label className="mb-1 block text-sm font-semibold text-slate-800" htmlFor="m">Pesan</label><textarea id="m" className="input min-h-32" value={f.message} onChange={set("message")} /><Err k="message" /></div>
          <button className="btn-primary justify-self-start" type="submit">Kirim pesan</button>
        </form>
        <aside className="grid content-start gap-4">
          {[[Mail, "Email", "chandraugrasena@gmail.com"], [MapPin, "Lokasi", "Indonesia"], [Clock, "Jam balasan", "Senin - Jumat, 09.00 - 17.00"]].map(([I, t, v]) => (
            <div key={t} className="card flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-700"><I size={20} /></span>
              <div><p className="text-sm text-slate-500">{t}</p><p className="font-semibold text-slate-900">{v}</p></div>
            </div>
          ))}
          <p className="text-xs text-slate-400">Pesan disimpan di perangkat ini (localStorage). Sambungkan ke Formspree atau EmailJS agar pesan masuk ke emailmu.</p>
        </aside>
      </section>
      <section className="wrap mt-16 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-slate-900">Pertanyaan yang sering diajukan</h2>
        <div className="mt-6"><Faq /></div>
      </section>
    </>
  );
}
