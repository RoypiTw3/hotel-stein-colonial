import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { hotelSpaces, includedServices, roomServices } from "@/data/services";

export const metadata: Metadata = { title: "Servicios", description: "Piscina, desayuno, parqueadero, restaurante, gimnasio y más servicios en el Hotel Stein Colonial." };

function ListBlock({ title, subtitle, items, dark = false }: { title: string; subtitle: string; items: string[]; dark?: boolean }) {
  return (
    <div className={`rounded-xl p-7 sm:p-10 ${dark ? "bg-olive text-white" : "bg-sand text-ink"}`}>
      <p className={`eyebrow ${dark ? "text-white/55" : "text-terracotta"}`}>{subtitle}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em]">{title}</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">{items.map((item) => <li key={item} className={`flex items-start gap-3 border-t pt-4 text-sm leading-6 ${dark ? "border-white/15 text-white/75" : "border-ink/12 text-stone"}`}><Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-white" : "text-terracotta"}`} />{item}</li>)}</ul>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero eyebrow="Servicios" title="Todo lo que necesitas para sentirte a gusto" description="El Hotel Stein Colonial le ofrece servicios que hacen de su estadía una mejor experiencia." image="/images/pool-lifestyle.jpg" imageAlt="Huésped disfrutando de la piscina del Hotel Stein Colonial" />
      <section className="py-24 sm:py-28">
        <div className="container-shell grid gap-7 lg:grid-cols-2">
          <ListBlock title="Incluido en tu tarifa" subtitle="Desde el primer día" items={includedServices} />
          <ListBlock title="Room service sin costo" subtitle="Desde tu habitación" items={roomServices} dark />
        </div>
      </section>
      <section className="bg-white py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Espacios del hotel" title="Cada rincón tiene un propósito" description="Descansa, comparte, trabaja o simplemente disfruta los días soleados de Cali." />
          <div className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {hotelSpaces.map((space, index) => (
              <article key={space.name} className={index === 0 || index === 5 ? "sm:col-span-2" : ""}>
                <div className={`relative overflow-hidden rounded-xl ${index === 0 || index === 5 ? "aspect-[16/9]" : "aspect-[4/3]"}`}><Image src={space.image} alt={`${space.name} del Hotel Stein Colonial`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-[1.03]" /></div>
                <h3 className="mt-5 font-serif text-2xl tracking-[-0.02em]">{space.name}</h3>
                <p className="mt-2 text-sm leading-6 text-stone">{space.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
