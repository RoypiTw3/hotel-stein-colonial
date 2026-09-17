import { whatsappUrl } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Hola, quisiera recibir información para reservar en el Hotel Stein Colonial.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir al Hotel Stein Colonial por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-olive text-white shadow-[0_12px_30px_rgba(44,65,51,0.35)] transition hover:-translate-y-1 hover:bg-[#334a3a] active:translate-y-0"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.2 7.8c.4-1 1.2-.7 1.5-.1l.7 1.7c.2.5-.2.8-.6 1.2 1 1.8 2.1 2.8 3.8 3.6.4-.5.7-1 1.2-.8l1.7.8c.6.3.8 1.1-.1 1.6-1 .5-2.2.8-4.7-.5-2.1-1.1-3.8-2.8-4.6-4.8-.5-1.2.3-2.2 1.1-2.7Z"/></svg>
    </a>
  );
}
