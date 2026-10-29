import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <button aria-label="Kembali ke atas" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-900/30 transition hover:bg-brand-700">
      <ArrowUp size={20} />
    </button>
  );
}
