import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import MenuSection from "@/components/MenuSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { allergenNotice, drinkMenu, foodMenu } from "@/data/menu";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Restaurante y carta",
  description: "Consulta la carta completa, precios, horarios y opciones del restaurante del Hotel Stein Colonial en Cali.",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurante Hotel Stein Colonial",
  image: `${site.url}/images/restaurant-dining.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida 4 Norte # 3-33",
    addressLocality: "Cali",
    addressRegion: "Valle del Cauca",
    addressCountry: "CO",
  },
  telephone: site.phones[0],
  email: site.email,
  servesCuisine: ["Colombiana", "Internacional"],
  priceRange: "$$",
  hasMenu: `${site.url}/restaurante`,
};

export default function RestaurantePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <PageHero
        eyebrow="Restaurante"
        title="Cocina preparada para disfrutar sin prisa"
        description="Deliciosos platos son preparados por nuestro chef diariamente para deleite de huéspedes y visitantes."
        image="/images/restaurant-dining.jpg"
        imageAlt="Restaurante del Hotel Stein Colonial"
      />

      <section className="py-24 sm:py-32">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Servicio a la carta"
              title="Una mesa lista para ti"
              description="Almuerzos, cenas, bebidas y preparaciones para niños, vegetarianos y quienes buscan sabores tradicionales."
            />
            <div className="mt-8 grid gap-4 border-y border-ink/15 py-6 sm:grid-cols-2">
              <div><p className="eyebrow text-terracotta">Almuerzo</p><p className="mt-2 font-serif text-2xl">{site.restaurantHours.lunch}</p></div>
              <div><p className="eyebrow text-terracotta">Cena</p><p className="mt-2 font-serif text-2xl">{site.restaurantHours.dinner}</p></div>
            </div>
            <p className="mt-6 text-sm leading-6 text-stone"><strong className="text-terracotta">Reserva previa requerida.</strong> Confirma mesa, disponibilidad de platos y precios antes de tu visita.</p>
            <Button href={whatsappUrl("Hola, quisiera reservar una mesa en el restaurante del Hotel Stein Colonial.")} target="_blank" className="mt-8">Reservar mesa</Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image src="/images/restaurant.jpg" alt="Ambiente del restaurante del Hotel Stein Colonial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="carta" className="bg-white py-24 sm:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="eyebrow text-terracotta">Carta completa</p>
            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em]">Para comer</h2>
            <p className="mt-5 text-sm leading-6 text-stone">Precios en pesos colombianos, transcritos de la carta pública de mayo de 2025. Confirma valores y disponibilidad al reservar.</p>
            <nav aria-label="Categorías de comida" className="mt-8 grid grid-cols-2 gap-x-5 gap-y-2 text-sm lg:grid-cols-1">
              {foodMenu.map((section) => <a key={section.slug} href={`#${section.slug}`} className="py-1 text-stone transition hover:text-terracotta">{section.title}</a>)}
            </nav>
            <div className="mt-8 space-y-3 border-t border-ink/15 pt-6 text-sm font-semibold">
              <a href="/menu/carta-restaurante.pdf" target="_blank" className="block text-terracotta hover:underline">Descargar carta original · PDF</a>
              <a href="/menu/carta-licores.pdf" target="_blank" className="block text-terracotta hover:underline">Descargar carta de licores · PDF</a>
            </div>
          </aside>
          <div className="space-y-16">
            {foodMenu.map((section) => <MenuSection key={section.slug} section={section} />)}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-terracotta">Bebidas</p>
            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em]">Para acompañar</h2>
            <p className="mt-5 text-sm leading-6 text-stone">Jugos naturales, sodas, cervezas, vinos y licores disponibles en la carta original.</p>
          </div>
          <div className="space-y-16">{drinkMenu.map((section) => <MenuSection key={section.slug} section={section} />)}</div>
        </div>
      </section>

      <section className="bg-olive py-20 text-white sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[.42fr_.58fr] lg:items-start">
          <div><p className="eyebrow text-white/55">Información importante</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em]">Alérgenos y consumo responsable</h2></div>
          <div className="space-y-5 text-sm leading-7 text-white/72">
            <p>{allergenNotice}</p>
            <p className="border-t border-white/15 pt-5">Prohíbase la venta de bebidas embriagantes a menores de edad. El exceso de alcohol es perjudicial para la salud. Ley 124 de 1994 y Ley 30 de 1986.</p>
          </div>
        </div>
      </section>

      <section className="bg-terracotta py-20 text-white sm:py-24">
        <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl"><p className="eyebrow text-white/60">Reserva previa</p><h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.035em] text-balance sm:text-6xl">Comparte una mesa en el corazón de Cali.</h2></div>
          <Button href={whatsappUrl("Hola, quisiera reservar una mesa y confirmar la carta vigente del Hotel Stein Colonial.")} target="_blank" variant="light" className="shrink-0">Reservar por WhatsApp</Button>
        </div>
      </section>
    </>
  );
}
