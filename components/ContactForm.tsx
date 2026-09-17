"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/data/site";

type FormState = { name: string; email: string; phone: string; message: string };
const empty: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  function valid() {
    if (!form.name.trim() || !form.message.trim()) {
      setError("Escribe tu nombre y el mensaje.");
      return false;
    }
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Revisa el correo electrónico.");
      return false;
    }
    setError("");
    return true;
  }

  function body() {
    return `Nombre: ${form.name}\nCorreo: ${form.email || "No indicado"}\nTeléfono: ${form.phone || "No indicado"}\n\n${form.message}`;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Consulta de ${form.name}`)}&body=${encodeURIComponent(body())}`;
  }

  function sendWhatsapp() {
    if (!valid()) return;
    window.open(whatsappUrl(`Hola, soy ${form.name}. ${form.message}${form.phone ? ` Mi teléfono es ${form.phone}.` : ""}`), "_blank", "noopener,noreferrer");
  }

  function field(name: keyof FormState, value: string) { setForm((current) => ({ ...current, [name]: value })); }

  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">Nombre *<input value={form.name} onChange={(e) => field("name", e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-4 font-normal" autoComplete="name" required /></label>
        <label className="grid gap-2 text-sm font-semibold">Correo<input type="email" value={form.email} onChange={(e) => field("email", e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-4 font-normal" autoComplete="email" /></label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">Teléfono<input type="tel" value={form.phone} onChange={(e) => field("phone", e.target.value)} className="h-12 rounded-md border border-ink/15 bg-white px-4 font-normal" autoComplete="tel" /></label>
      <label className="grid gap-2 text-sm font-semibold">Mensaje *<textarea value={form.message} onChange={(e) => field("message", e.target.value)} rows={6} className="rounded-md border border-ink/15 bg-white px-4 py-3 font-normal leading-6" required /></label>
      <p aria-live="polite" className={`text-sm font-medium text-terracotta ${error ? "block" : "hidden"}`}>{error}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="min-h-12 rounded-md bg-terracotta px-6 text-sm font-semibold text-white transition hover:bg-[#924525] active:scale-[0.98]">Enviar por correo</button>
        <button type="button" onClick={sendWhatsapp} className="min-h-12 rounded-md border border-olive px-6 text-sm font-semibold text-olive transition hover:bg-olive hover:text-white active:scale-[0.98]">Enviar por WhatsApp</button>
      </div>
      <p className="text-xs leading-5 text-stone">Este formulario abre tu aplicación de correo o WhatsApp; no almacena tus datos.</p>
    </form>
  );
}
