export default function NotFound() {
  return (
    <section className="wrap grid min-h-[70vh] place-items-center pt-28 text-center">
      <div>
        <p className="text-6xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-slate-500">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
        <a href="#/" className="btn-primary mt-6">Kembali ke beranda</a>
      </div>
    </section>
  );
}
