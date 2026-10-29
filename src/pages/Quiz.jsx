import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { questions } from "../data.js";
import { useLocalStorage } from "../hooks.js";

export default function Quiz() {
  const [stat, setStat] = useLocalStorage("sampadia_quiz", { best: 0, history: [] });
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const total = questions.length;
  const q = questions[i];

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.a) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 < total) { setI(i + 1); setPicked(null); return; }
    setStat({ best: Math.max(stat.best, score), history: [{ score, total, date: new Date().toISOString() }, ...stat.history].slice(0, 5) });
    setDone(true);
  };
  const restart = () => { setI(0); setPicked(null); setScore(0); setDone(false); };
  const msg = score === total ? "Sempurna! Kamu siap jadi teladan." : score >= total * 0.6 ? "Bagus! Sedikit lagi sempurna." : "Ayo belajar lagi, kamu pasti bisa.";

  return (
    <>
      <PageHeader title="Coba quiz sampah" desc={`${total} pertanyaan singkat. Skor terbaikmu tersimpan di perangkat ini.`} />
      <section className="wrap mt-8 max-w-2xl">
        {!done ? (
          <div className="card">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Pertanyaan {i + 1} dari {total}</span><span>Skor: {score}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${((i + (picked !== null ? 1 : 0)) / total) * 100}%` }} /></div>
            <h2 className="mt-6 text-xl font-bold text-slate-900">{q.q}</h2>
            <div className="mt-5 grid gap-3">
              {q.o.map((opt, idx) => {
                const ok = picked !== null && idx === q.a;
                const bad = picked === idx && idx !== q.a;
                return (
                  <button key={opt} onClick={() => choose(idx)} disabled={picked !== null}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left font-medium transition ${ok ? "border-emerald-400 bg-emerald-50 text-emerald-800" : bad ? "border-rose-300 bg-rose-50 text-rose-800" : "border-slate-200 hover:border-brand-400 hover:bg-brand-50"}`}>
                    {opt}{ok && <CheckCircle2 size={20} />}{bad && <XCircle size={20} />}
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600" aria-live="polite">
                <p className="font-semibold text-slate-800">{picked === q.a ? "Benar!" : "Belum tepat."}</p>
                <p className="mt-1">{q.e}</p>
                <button onClick={next} className="btn-primary mt-4">{i + 1 < total ? "Pertanyaan berikutnya" : "Lihat hasil"}</button>
              </div>
            )}
          </div>
        ) : (
          <div className="card text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-amber-100 text-amber-500"><Trophy size={30} /></div>
            <p className="mt-4 text-5xl font-extrabold text-slate-900">{score}<span className="text-2xl text-slate-400">/{total}</span></p>
            <p className="mt-2 text-slate-600">{msg}</p>
            <p className="mt-1 text-sm text-slate-400">Skor terbaik: {Math.max(stat.best, score)}/{total}</p>
            <button onClick={restart} className="btn-primary mt-6"><RotateCcw size={16} /> Ulangi quiz</button>
          </div>
        )}
        {stat.history.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold text-slate-900">Riwayat terakhir</h3>
            <ul className="mt-3 grid gap-2">
              {stat.history.map((h, k) => (
                <li key={k} className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="text-slate-500">{new Date(h.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="font-semibold text-slate-800">{h.score}/{h.total}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
