import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export default function Splash() {
  const [phase, setPhase] = useState("show");
  useEffect(() => {
    const a = setTimeout(() => setPhase("fade"), 1700);
    const b = setTimeout(() => setPhase("gone"), 2200);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (phase === "gone") return null;
  return (
    <div className={`fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-brand-400 to-brand-600 transition-opacity duration-500 ${phase === "fade" ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center text-white">
        <div className="grid h-16 w-16 animate-pop place-items-center rounded-full bg-white text-brand-600 shadow-xl"><Leaf size={30} /></div>
        <p className="mt-4 text-xl font-bold">Sampadia</p>
        <p className="mt-1 text-sm text-white/85">Memuat halaman...</p>
        <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-white/30"><div className="h-full animate-bar rounded-full bg-white" /></div>
      </div>
    </div>
  );
}
