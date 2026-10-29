import { useState } from "react";
import { Flame, Check, MessageCircle, Calendar, MapPin, Send } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { challenges, events, seedPosts } from "../data.js";
import { useLocalStorage, todayStr, yesterdayStr } from "../hooks.js";

const fmt = (d, o) => new Date(d).toLocaleDateString("id-ID", o);

function Challenge() {
  const [s, setS] = useLocalStorage("sampadia_challenge", { date: todayStr(), done: [], streak: 0, last: "" });
  const state = s.date === todayStr() ? s : { ...s, date: todayStr(), done: [] };
  const toggle = (id) => {
    const done = state.done.includes(id) ? state.done.filter((x) => x !== id) : [...state.done, id];
    let { streak, last } = state;
    if (done.length === challenges.length && last !== todayStr()) { streak = last === yesterdayStr() ? streak + 1 : 1; last = todayStr(); }
    setS({ ...state, done, streak, last });
  };
  const pct = Math.round((state.done.length / challenges.length) * 100);
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="card lg:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Challenge hari ini</h2>
          <span className="text-sm font-semibold text-brand-700">{state.done.length}/{challenges.length}</span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${pct}%` }} /></div>
        <ul className="mt-5 grid gap-2">
          {challenges.map((c) => {
            const on = state.done.includes(c.id);
            return (
              <li key={c.id}>
                <button onClick={() => toggle(c.id)} aria-pressed={on} className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${on ? "border-brand-300 bg-brand-50" : "border-slate-200 hover:bg-slate-50"}`}>
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${on ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"}`}>{on && <Check size={14} />}</span>
                  <span className={on ? "text-slate-500 line-through" : "text-slate-800"}>{c.text}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {pct === 100 && <p className="mt-4 rounded-2xl bg-brand-50 p-3 text-sm font-semibold text-brand-800">Hebat! Semua challenge hari ini selesai.</p>}
      </div>
      <div className="card flex flex-col items-center justify-center text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-orange-100 text-orange-500"><Flame size={28} /></div>
        <p className="mt-3 text-4xl font-extrabold text-slate-900">{state.streak}</p>
        <p className="text-sm text-slate-500">hari berturut-turut</p>
        <p className="mt-3 text-xs text-slate-400">Selesaikan semua challenge setiap hari untuk menambah streak.</p>
      </div>
    </div>
  );
}

function Forum() {
  const [posts, setPosts] = useLocalStorage("sampadia_posts", seedPosts);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(null);
  const [cm, setCm] = useState({ name: "", text: "" });
  const add = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setPosts([{ id: Date.now(), name: name.trim() || "Anonim", text: text.trim(), time: new Date().toISOString(), comments: [] }, ...posts]);
    setText("");
  };
  const reply = (e, id) => {
    e.preventDefault();
    if (!cm.text.trim()) return;
    setPosts(posts.map((p) => p.id === id ? { ...p, comments: [...p.comments, { name: cm.name.trim() || "Anonim", text: cm.text.trim() }] } : p));
    setCm({ name: "", text: "" });
  };
  return (
    <div className="grid gap-5">
      <form onSubmit={add} className="card grid gap-3">
        <h2 className="text-xl font-bold text-slate-900">Tulis topik baru</h2>
        <input className="input" placeholder="Namamu (boleh dikosongkan)" value={name} onChange={(e) => setName(e.target.value)} aria-label="Nama" />
        <textarea className="input min-h-24" placeholder="Tanyakan sesuatu atau bagikan tipsmu..." value={text} onChange={(e) => setText(e.target.value)} aria-label="Isi postingan" />
        <button className="btn-primary justify-self-start" type="submit"><Send size={16} /> Kirim postingan</button>
      </form>
      {posts.map((p) => (
        <article key={p.id} className="card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">{p.name[0].toUpperCase()}</span>
            <div><p className="font-semibold text-slate-900">{p.name}</p><p className="text-xs text-slate-400">{fmt(p.time, { day: "numeric", month: "short", year: "numeric" })}</p></div>
          </div>
          <p className="mt-3 text-slate-700">{p.text}</p>
          <button onClick={() => setOpen(open === p.id ? null : p.id)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            <MessageCircle size={16} /> {p.comments.length} komentar
          </button>
          {open === p.id && (
            <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3">
              {p.comments.map((c, k) => <p key={k} className="rounded-2xl bg-slate-50 px-4 py-2.5 text-sm"><b className="text-slate-800">{c.name}:</b> {c.text}</p>)}
              <form onSubmit={(e) => reply(e, p.id)} className="grid gap-2 sm:grid-cols-[1fr_2fr_auto]">
                <input className="input" placeholder="Nama" value={cm.name} onChange={(e) => setCm({ ...cm, name: e.target.value })} aria-label="Nama komentar" />
                <input className="input" placeholder="Tulis komentar..." value={cm.text} onChange={(e) => setCm({ ...cm, text: e.target.value })} aria-label="Isi komentar" />
                <button className="btn-primary" type="submit">Balas</button>
              </form>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function Events() {
  const [joined, setJoined] = useLocalStorage("sampadia_events", []);
  const toggle = (id) => setJoined(joined.includes(id) ? joined.filter((x) => x !== id) : [...joined, id]);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {events.map((ev) => {
        const on = joined.includes(ev.id);
        return (
          <article key={ev.id} className="card flex flex-col">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-700"><Calendar size={16} />{fmt(ev.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">{ev.title}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={14} />{ev.place}</p>
            <p className="mt-3 flex-1 text-slate-600">{ev.desc}</p>
            <button onClick={() => toggle(ev.id)} aria-pressed={on} className={`mt-5 ${on ? "btn border border-brand-300 bg-brand-50 text-brand-700" : "btn-primary"}`}>{on ? "Terdaftar (batalkan)" : "Ikuti event"}</button>
          </article>
        );
      })}
    </div>
  );
}

const tabs = [["challenge", "Challenge harian", Challenge], ["forum", "Forum diskusi", Forum], ["event", "Event", Events]];

export default function Community() {
  const [tab, setTab] = useState("challenge");
  const View = tabs.find((t) => t[0] === tab)[2];
  return (
    <>
      <PageHeader title="Komunitas Sampadia" desc="Ikut challenge, berdiskusi dengan sesama, dan temukan kegiatan di dekatmu." />
      <section className="wrap mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist">
          {tabs.map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${tab === k ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{l}</button>
          ))}
        </div>
        <div className="mt-6"><View /></div>
      </section>
    </>
  );
}
