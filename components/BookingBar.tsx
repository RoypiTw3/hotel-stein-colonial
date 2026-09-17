"use client";

import { FormEvent, useMemo, useState } from "react";
import { whatsappUrl } from "@/data/site";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [error, setError] = useState("");
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!checkIn || !checkOut) {
      setError("Selecciona las fechas de entrada y salida.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("La fecha de salida debe ser posterior a la entrada.");
      return;
    }
    setError("");
    const message = `Hola, quisiera consultar disponibilidad en el Hotel Stein Colonial. Entrada: ${checkIn}. Salida: ${checkOut}. Huéspedes: ${guests}.`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="relative grid gap-3 rounded-xl bg-cream p-4 shadow-[0_20px_60px_rgba(37,27,19,0.2)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_.75fr_auto] lg:items-end lg:p-5">
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone">
        Entrada
        <input type="date" min={minDate} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-3 text-sm font-medium tracking-normal text-ink" required />
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone">
        Salida
        <input type="date" min={checkIn || minDate} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-3 text-sm font-medium tracking-normal text-ink" required />
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone">
        Huéspedes
        <select value={guests} onChange={(e) => setGuests(e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-3 text-sm font-medium tracking-normal text-ink">
          {[1, 2, 3, 4, 5, 6].map((amount) => <option key={amount} value={amount}>{amount}</option>)}
        </select>
      </label>
      <button type="submit" className="h-12 rounded-md bg-terracotta px-7 text-sm font-semibold text-white transition hover:bg-[#924525] active:scale-[0.98]">Consultar</button>
      <p aria-live="polite" className={`text-xs text-terracotta sm:col-span-2 lg:absolute lg:-bottom-6 lg:left-5 ${error ? "block" : "hidden"}`}>{error}</p>
    </form>
  );
}
