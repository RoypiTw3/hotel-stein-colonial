import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Política de cookies" };

export default function CookiesPage() {
  return (
    <section className="container-shell min-h-[70vh] pb-24 pt-40">
      <p className="eyebrow text-terracotta">Información legal</p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-0.04em]">Política de cookies</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-8 text-stone">
        <p>Esta versión del sitio no instala cookies propias de seguimiento. Los contenidos externos, como el mapa de Google o el video de YouTube, pueden aplicar sus propias políticas cuando el visitante los carga.</p>
        <p>El video se carga únicamente después de que el visitante decide reproducirlo.</p>
        <Link href="/" className="inline-block pt-4 font-semibold text-ink">← Volver al inicio</Link>
      </div>
    </section>
  );
}
