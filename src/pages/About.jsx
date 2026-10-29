import { Target, Eye, BookOpen, Users, Lightbulb, Mail, Sprout, Recycle, Store } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";

const values = [
  [BookOpen, "Mudah dipahami", "Bahasa sederhana dan contoh nyata, supaya siapa pun bisa mulai."],
  [Users, "Dikerjakan bersama", "Perubahan besar datang dari kebiasaan banyak orang."],
  [Lightbulb, "Bisa dipraktikkan", "Setiap materi berakhir dengan langkah yang bisa dilakukan hari ini."]
];
const useful = [
  [Sprout, "Sisa dapur menjadi kompos", "Sampah organik bisa jadi pupuk untuk tanaman.", "#/artikel/panduan-kompos-pemula"],
  [Recycle, "Botol bekas menjadi pot dan kreasi", "Dengan sedikit kreativitas, botol punya hidup kedua.", "#/artikel/kreasi-botol-bekas"],
  [Store, "Sampah bersih bisa disetor", "Plastik, kertas, dan kaleng bisa ditukar di bank sampah.", "#/titik"]
];

export default function About() {
  return (
    <>
      <PageHeader title="Tentang Sampadia" desc="Dibuat agar lebih banyak orang sadar pentingnya memilah sampah." />

      <section className="wrap mt-10 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Mengapa Sampadia dibuat</h2>
        <div className="mt-5 grid gap-4 text-[17px] leading-8 text-slate-600">
          <p>Belakangan ini masalah sampah makin sering kita lihat. Di Bali misalnya, sampah menumpuk di berbagai tempat. Masalah ini tidak hanya soal kurangnya tempat pembuangan, tetapi juga soal kebiasaan kita sehari-hari.</p>
          <p>Salah satu langkah paling awal adalah memilah sampah dari rumah. Sampah yang tercampur sulit diolah, sedangkan sampah yang dipilah dengan benar bisa diolah menjadi barang yang berguna.</p>
          <p>Karena itu Sampadia dibuat: tempat belajar yang gratis, singkat, dan mudah dipahami, supaya masyarakat sadar pentingnya memilah sampah dan tahu apa yang bisa dilakukan setelahnya.</p>
        </div>
      </section>

      <section className="wrap mt-12 grid gap-5 md:grid-cols-2">
        <div className="card bg-brand-50/60"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white"><Eye size={22} /></div><h2 className="mt-4 text-xl font-bold text-slate-900">Visi</h2><p className="mt-2 text-slate-600">Masyarakat yang sadar dan terbiasa memilah sampah, sehingga lingkungan sekitar lebih bersih dan sehat.</p></div>
        <div className="card bg-violet-50/60"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500 text-white"><Target size={22} /></div><h2 className="mt-4 text-xl font-bold text-slate-900">Misi</h2><p className="mt-2 text-slate-600">Menyediakan edukasi gratis tentang memilah dan mengolah sampah, membangun komunitas yang saling mendukung, dan mendorong aksi nyata setiap hari.</p></div>
      </section>

      <section className="wrap mt-16">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Sampah bisa menjadi barang berguna</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {useful.map(([I, t, d, h]) => (
            <a key={t} href={h} className="card transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-100 text-brand-700"><I size={22} /></span>
              <h3 className="mt-4 font-bold text-slate-900">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap mt-16">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Nilai yang kami pegang</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map(([I, t, d]) => (
            <div key={t} className="card"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-100 text-brand-700"><I size={22} /></span><h3 className="mt-4 font-bold text-slate-900">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap mt-16">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand-100 p-8 sm:flex-row sm:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-2xl font-bold text-white">K</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-brand-700">Pembuat Sampadia</p>
            <h2 className="text-xl font-bold text-slate-900">I Ketut Chandra Ugrasena Putra</h2>
            <p className="mt-1 text-slate-600">Punya saran, ingin berkolaborasi, atau menemukan masalah di website ini? Kirim saja pesan.</p>
          </div>
          <a href="mailto:chandraugrasena@gmail.com" className="btn-primary shrink-0"><Mail size={16} /> Kirim email</a>
        </div>
      </section>
    </>
  );
}
