import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacidadPage() {
  return (
    <section className="container-shell min-h-[70vh] pb-24 pt-40">
      <p className="eyebrow text-terracotta">Información legal</p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-0.04em]">Política de privacidad</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-8 text-stone">
        <p>El formulario de este sitio no almacena información: abre la aplicación de correo o WhatsApp elegida por el visitante.</p>
        <p>Para conocer el tratamiento aplicable a los datos enviados directamente al hotel, solicita la política vigente escribiendo a <a className="font-semibold text-terracotta" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <Link href="/" className="inline-block pt-4 font-semibold text-ink">← Volver al inicio</Link>
      </div>
    </section>
  );
}
