export default function PageHeader({ title, desc, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-400 to-brand-600 pb-16 pt-32 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-brand-300/20 blur-2xl" />
      <div className="wrap relative">
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{desc}</p>
        {children}
      </div>
    </section>
  );
}
