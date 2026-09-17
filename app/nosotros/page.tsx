import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Nosotros", description: "Conoce la atención personalizada, los espacios renovados y la tradición del Hotel Stein Colonial en Cali." };

const values = [
  ["01", "Trato personalizado", "Una atención preferencial y cercana, pensada para que cada huésped se sienta bien recibido."],
  ["02", "Zonas verdes", "Áreas amplias integradas al hotel para regalar calma en medio de la ciudad."],
  ["03", "Tradición", "Un ambiente colonial con espacios renovados que conserva el carácter propio del hotel."],
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title="Tu hotel en el corazón de Cali" description="Una casa de espíritu colonial donde la atención cercana y los espacios tranquilos siguen siendo lo más importante." image="/images/cali.jpg" imageAlt="Vista panorámica del centro de Cali" />
      <section className="py-24 sm:py-32">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl"><Image src="/images/interior.jpg" alt="Interior del Hotel Stein Colonial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
          <div>
            <SectionHeading eyebrow="Nuestra forma de recibir" title="Hospitalidad que se siente cercana" />
            <p className="mt-7 text-base leading-8 text-stone">Le damos la más cordial bienvenida a todos nuestros huéspedes. Aquí encontrará el trato preferencial y personalizado que nos ha caracterizado durante muchos años.</p>
            <p className="mt-4 text-base leading-8 text-stone">Nuevas áreas completamente renovadas y amplias zonas verdes se integran para hacer de cada estancia una mejor experiencia de hospedaje. Esperamos poderle servir próximamente en esta su casa en la sucursal del cielo.</p>
          </div>
        </div>
      </section>
      <section className="bg-sand py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Lo que nos guía" title="Sencillez, cuidado y carácter" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">{values.map(([number, title, text]) => <article key={number} className="border-t border-ink/15 pt-6"><span className="font-mono text-xs text-terracotta">{number}</span><h2 className="mt-10 font-serif text-3xl tracking-[-0.025em]">{title}</h2><p className="mt-4 text-sm leading-7 text-stone">{text}</p></article>)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
