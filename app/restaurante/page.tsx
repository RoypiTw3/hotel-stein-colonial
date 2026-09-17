import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = { title: "Restaurante y carta", description: "Restaurante a la carta del Hotel Stein Colonial. Consulta la carta y reserva previamente." };

export default function RestaurantePage() {
  return (
    <>
      <PageHero eyebrow="Restaurante" title="Cocina preparada para disfrutar sin prisa" description="Deliciosos platos son preparados por nuestro chef diariamente para deleite de huéspedes y visitantes." image="/images/restaurant-dining.jpg" imageAlt="Restaurante del Hotel Stein Colonial" />
      <section className="py-24 sm:py-32">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Servicio a la carta" title="Una mesa lista para ti" description="Contamos con servicio de restaurante para almuerzo y cena, además de licores y bebidas no alcohólicas." />
            <div className="mt-8 rounded-lg bg-sand p-5 text-sm leading-6 text-stone"><strong className="block text-terracotta">Reserva previa requerida</strong>Confirma disponibilidad antes de tu visita.</div>
            <Button href={whatsappUrl("Hola, quisiera hacer una reserva en el restaurante del Hotel Stein Colonial.")} target="_blank" className="mt-8">Reservar mesa</Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl"><Image src="/images/restaurant.jpg" alt="Ambiente del restaurante del hotel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="bg-olive py-24 text-white sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <SectionHeading eyebrow="Carta" title="La carta está en actualización" description="La página anterior no publica los platos ni un PDF de la carta. Este espacio queda preparado para que el hotel agregue su menú vigente." light />
          <div className="rounded-xl border border-white/20 bg-white/6 p-8 sm:p-10"><p className="font-serif text-3xl tracking-[-0.025em]">¿Quieres conocer las opciones disponibles hoy?</p><p className="mt-4 text-sm leading-7 text-white/65">Escríbenos o solicita la carta al correo de reservas.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button href={whatsappUrl("Hola, quisiera conocer la carta vigente del restaurante del Hotel Stein Colonial.")} target="_blank" variant="light">Solicitar por WhatsApp</Button><Button href={`mailto:${site.email}?subject=Carta del restaurante`} variant="outline" className="border-white/35 text-white hover:border-white hover:text-white">Solicitar por correo</Button></div></div>
        </div>
      </section>
    </>
  );
}
