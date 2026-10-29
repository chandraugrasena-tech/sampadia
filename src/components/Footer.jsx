import { Leaf, Mail, MapPin } from "lucide-react";

const col = (title, items) => (
  <div>
    <p className="font-semibold text-white">{title}</p>
    <ul className="mt-3 grid gap-2 text-sm">
      {items.map(([h, l]) => <li key={h}><a className="text-brand-200 hover:text-white" href={`#/${h}`}>{l}</a></li>)}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-xl font-bold text-white"><Leaf size={22} /> Sampadia</p>
          <p className="mt-3 max-w-xs text-sm text-brand-200">Belajar memilah, mengurangi, dan mendaur ulang sampah dengan cara yang mudah, dari rumah sendiri.</p>
          <p className="mt-4 flex items-center gap-2 text-sm"><Mail size={16} /> chandraugrasena@gmail.com</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><MapPin size={16} /> Indonesia</p>
        </div>
        {col("Belajar", [["belajar", "Materi edukasi"], ["quiz", "Coba quiz"], ["artikel", "Artikel & tips"]])}
        {col("Aksi", [["komunitas", "Komunitas"], ["kalkulator", "Kalkulator sampah"], ["titik", "Titik pengumpulan"]])}
        {col("Sampadia", [["tentang", "Tentang kami"], ["kontak", "Kontak"]])}
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-brand-300">© {new Date().getFullYear()} Sampadia. Dibuat oleh I Ketut Chandra Ugrasena Putra.</p>
    </footer>
  );
}
