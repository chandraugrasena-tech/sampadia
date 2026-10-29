import { useEffect, useState } from "react";
import { ArrowRight, Sprout, Users, Recycle, Activity, Eye, HeartHandshake, Leaf, BookOpen, HelpCircle, Newspaper, Calculator, MapPin, MessageCircle } from "lucide-react";
import ArticleCard from "../components/ArticleCard.jsx";
import Faq from "../components/Faq.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { useCountUp } from "../hooks.js";
import { articles, topics, questions, challenges } from "../data.js";

const features = [
  [BookOpen, "Belajar", "Materi singkat tentang jenis sampah, memilah, 3R, dan kompos.", "belajar", "bg-emerald-500"],
  [HelpCircle, "Quiz", "Uji pemahamanmu dengan soal dan penjelasan langsung.", "quiz", "bg-violet-500"],
  [MessageCircle, "Komunitas", "Challenge harian, forum diskusi, dan event bersama.", "komunitas", "bg-sky-500"],
  [Newspaper, "Artikel", "Tips praktis yang bisa langsung dicoba di rumah.", "artikel", "bg-amber-400"],
  [Calculator, "Kalkulator", "Hitung perkiraan sampahmu dan dapatkan saran.", "kalkulator", "bg-rose-500"],
  [MapPin, "Titik pengumpulan", "Cari bank sampah dan tempat penyetoran di kotamu.", "titik", "bg-brand-600"]
];

function Stat({ icon: Icon, target, suffix = "", label, desc, box, ic }) {
  const [ref, n] = useCountUp(target);
  return (
    <div ref={ref} className={`rounded-3xl border p-6 ${box}`}>
      <div className={`grid h-11 w-11 place-items-center rounded-2xl ${ic}`}><Icon size={22} /></div>
      <p className="mt-5 text-4xl font-extrabold text-slate-900">{n.toLocaleString("id-ID")}{suffix}</p>
      <p className="mt-1 font-semibold text-slate-800">{label}</p>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </div>
  );
}

const feed = ["Dina memilah sampah organik", "Raka memulai challenge harian", "Salsa menyelesaikan quiz", "Bima membuat kompos pertamanya", "Nadia membagikan tips di forum"];

function Live() {
  const [online, setOnline] = useState(1247);
  const [actions, setActions] = useState(89);
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setOnline((o) => Math.max(1180, Math.min(1320, o + Math.round((Math.random() - 0.5) * 14))));
      setActions((a) => a + (Math.random() > 0.6 ? 1 : 0));
      setI((x) => (x + 1) % feed.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-bold text-slate-900"><Activity size={18} className="text-brand-600" /> Aktivitas real-time</h3>
        <span className="text-xs text-slate-400">Data simulasi</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-4"><p className="flex items-center gap-1.5 text-xs text-slate-500"><Eye size={14} /> Pengunjung online</p><p className="mt-1 text-2xl font-extrabold text-slate-900">{online.toLocaleString("id-ID")}</p></div>
        <div className="rounded-2xl bg-slate-50 p-4"><p className="flex items-center gap-1.5 text-xs text-slate-500"><Leaf size={14} /> Aksi hari ini</p><p className="mt-1 text-2xl font-extrabold text-slate-900">{actions}</p></div>
      </div>
      <p className="mt-4 flex items-center gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-brand-800" aria-live="polite">
        <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />{feed[i]}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-400 to-brand-600 pb-24 pt-32 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-brand-300/20 blur-2xl" />
        <div className="wrap relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Kelola sampah mulai dari rumah sendiri</h1>
            <p className="mt-5 max-w-lg text-lg text-white/90">Sampah yang dipilah dengan benar bisa diolah menjadi barang berguna. Pelajari caranya di sini, singkat dan bisa langsung dipraktikkan.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#/belajar" className="btn-light">Mulai belajar <ArrowRight size={16} /></a>
              <a href="#/quiz" className="btn-ghost">Coba quiz</a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-3">
            {[["Organik", "bg-emerald-500", "Sisa makanan, daun"], ["Anorganik", "bg-amber-400", "Plastik, kaleng"], ["B3", "bg-rose-500", "Baterai, lampu"]].map(([t, c, d]) => (
              <div key={t} className="rounded-3xl bg-white p-4 text-center shadow-xl shadow-brand-900/20">
                <div className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white ${c}`}><Recycle size={26} /></div>
                <p className="mt-3 text-sm font-bold text-slate-900">{t}</p>
                <p className="mt-1 text-xs text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap -mt-8 grid gap-5 md:grid-cols-2">
        <div className="card border-emerald-100 bg-emerald-50/60">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500 text-white"><Sprout size={22} /></div>
          <h2 className="mt-4 text-xl font-bold text-slate-900">Dampak besar dari hal kecil</h2>
          <p className="mt-2 text-slate-600">Hal kecil seperti membuang sampah pada tempatnya dan memilahnya bisa memberi dampak besar bagi lingkungan.</p>
        </div>
        <div className="card border-violet-100 bg-violet-50/60">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500 text-white"><HeartHandshake size={22} /></div>
          <h2 className="mt-4 text-xl font-bold text-slate-900">Misi kita bersama</h2>
          <p className="mt-2 text-slate-600">Menjaga lingkungan bukan tugas segelintir orang. Kalau banyak yang tahu, pasti banyak yang peduli.</p>
        </div>
      </section>

      <section className="wrap mt-20">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Semua yang kamu butuhkan untuk mulai</h2>
        <p className="mt-2 max-w-xl text-slate-500">Dari belajar sampai beraksi, semuanya ada di satu tempat.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([I, t, d, h, c]) => (
            <a key={t} href={`#/${h}`} className="card group transition hover:-translate-y-0.5 hover:shadow-md">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl text-white ${c}`}><I size={22} /></span>
              <h3 className="mt-4 font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">Buka <ArrowRight size={14} className="transition group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap mt-20">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Yang bisa kamu pelajari di Sampadia</h2>
        <p className="mt-2 text-slate-500">Isi website ini terus bertambah.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={BookOpen} target={topics.length} label="Topik belajar" desc="Jenis sampah, cara memilah, 3R, dan kompos." box="border-emerald-100 bg-emerald-50" ic="bg-emerald-500 text-white" />
          <Stat icon={HelpCircle} target={questions.length} label="Soal quiz" desc="Lengkap dengan penjelasan di tiap jawaban." box="border-sky-100 bg-sky-50" ic="bg-sky-500 text-white" />
          <Stat icon={Newspaper} target={articles.length} label="Artikel & tips" desc="Bacaan singkat yang bisa langsung dipraktikkan." box="border-brand-100 bg-brand-50" ic="bg-brand-500 text-white" />
          <Stat icon={Leaf} target={challenges.length} label="Challenge harian" desc="Kebiasaan kecil untuk dicoba setiap hari." box="border-amber-100 bg-amber-50" ic="bg-amber-400 text-white" />
        </div>
      </section>

      <section className="wrap mt-20">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Mulai dalam 3 langkah</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {[["Pelajari", "Baca materi singkat tentang jenis sampah dan cara memilahnya.", "#/belajar"], ["Praktikkan", "Ikuti challenge harian dan catat kebiasaan barumu.", "#/komunitas"], ["Uji & bagikan", "Coba quiz, lalu ajak keluarga dan temanmu.", "#/quiz"]].map(([t, d, h], i) => (
            <li key={t} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-slate-600">{d}</p>
              <a href={h} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">Mulai <ArrowRight size={14} /></a>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Artikel terbaru</h2>
          <a href="#/artikel" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">Lihat semua <ArrowRight size={14} /></a>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">{articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
      </section>

      <section className="wrap mt-16 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-brand-100 p-6 sm:p-8">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white"><Users size={22} /></div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900">Bergabung sekarang!</h2>
          <p className="mt-2 text-slate-600">Gratis dan mudah. Dapatkan akses ke forum, challenge harian, dan event komunitas.</p>
          <a href="#/komunitas" className="btn-primary mt-6">Masuk komunitas <ArrowRight size={16} /></a>
        </div>
        <Live />
      </section>

      <section className="wrap mt-20 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Pertanyaan yang sering diajukan</h2>
        <div className="mt-6"><Faq /></div>
      </section>

      <section className="wrap mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative max-w-lg text-2xl font-extrabold sm:text-3xl">Dapatkan tips pengelolaan sampah setiap minggu</h2>
          <p className="relative mt-2 max-w-lg text-white/90">Satu email singkat berisi satu kebiasaan baru yang bisa kamu coba.</p>
          <div className="relative mt-6"><Newsletter /></div>
        </div>
      </section>
    </>
  );
}
