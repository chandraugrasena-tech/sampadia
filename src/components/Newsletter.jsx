import { useState } from "react";
import { useLocalStorage } from "../hooks.js";

export default function Newsletter() {
  const [, setList] = useLocalStorage("sampadia_newsletter", []);
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setState("error"); return; }
    setList((l) => [...l, { email, date: new Date().toISOString() }]);
    setEmail(""); setState("ok");
  };
  return (
    <form onSubmit={submit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="nl" className="sr-only">Email</label>
        <input id="nl" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" className="input flex-1 border-transparent" />
        <button className="btn-light shrink-0 py-3" type="submit">Langganan</button>
      </div>
      <p className="mt-2 text-sm text-white/90" aria-live="polite">
        {state === "ok" && "Terima kasih! Emailmu tersimpan."}
        {state === "error" && "Masukkan email yang valid, misalnya nama@email.com."}
        {state === "idle" && "Tips mingguan, tanpa spam. Berhenti kapan saja."}
      </p>
    </form>
  );
}
