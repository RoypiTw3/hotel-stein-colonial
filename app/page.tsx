import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import ReviewCard from "@/components/ReviewCard";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceItem from "@/components/ServiceItem";
import VideoEmbed from "@/components/VideoEmbed";
import { reviews } from "@/data/reviews";
import { rooms } from "@/data/rooms";

const highlights = [
  { name: "Parque infantil", icon: "tree" as const },
  { name: "Piscina", icon: "pool" as const },
  { name: "Salón de usos múltiples", icon: "people" as const },
  { name: "Parqueadero privado", icon: "car" as const },
  { name: "Desayuno a la carta", icon: "coffee" as const },
  { name: "WiFi en todo el hotel", icon: "wifi" as const },
  { name: "Gimnasio", icon: "gym" as const },
  { name: "Pet friendly", icon: "pet" as const },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Bienvenidos" title="La atención hecha tradición" />
            <p className="mt-7 max-w-xl text-base leading-8 text-stone">Le damos la más cordial bienvenida a todos nuestros huéspedes, en donde encontrará el trato preferencial y personalizado que nos ha caracterizado durante muchos años.</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-stone">Disfrute nuevas áreas del hotel completamente renovadas y amplias zonas verdes, integradas para hacer de su estancia una mejor experiencia de hospedaje. Esta es su casa en la sucursal del cielo.</p>
            <Button href="/nosotros" variant="outline" className="mt-8">Conoce el hotel <Icon name="arrow" className="h-4 w-4" /></Button>
          </div>
          <div className="relative min-h-[31rem]">
            <Image src="/images/facade.jpg" alt="Fachada del Hotel Stein Colonial en Cali" fill sizes="(max-width: 1024px) 100vw, 55vw" className="rounded-xl object-cover" />
            <div className="absolute -bottom-7 -left-5 hidden rounded-lg bg-olive px-7 py-6 text-white shadow-[0_16px_35px_rgba(53,72,58,.28)] sm:block"><strong className="block font-serif text-4xl font-medium">26</strong><span className="mt-1 block text-xs uppercase tracking-[0.14em] text-white/65">habitaciones</span></div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Descanso" title="Habitaciones con carácter propio" description="Espacios cálidos, cómodos y preparados para recibir desde viajeros solos hasta familias." />
            <Link href="/habitaciones" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-terracotta">Ver todas <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-x-7 gap-y-12 md:grid-cols-3">{rooms.slice(0, 3).map((room) => <RoomCard key={room.name} room={room} />)}</div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:order-1"><Image src="/images/restaurant-dining.jpg" alt="Restaurante del Hotel Stein Colonial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
          <div className="lg:order-2">
            <SectionHeading eyebrow="Nuestro restaurante" title="Sabores preparados cada día" description="Contamos con servicio de restaurante a la carta. Deliciosos platos son preparados por nuestro chef diariamente para deleite de nuestros huéspedes." />
            <div className="mt-7 border-l-2 border-terracotta pl-5 text-sm font-semibold text-terracotta">Debes hacer reserva previa.</div>
            <Button href="/restaurante" className="mt-8">Conoce la carta <Icon name="arrow" className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Todo a tu alcance" title="Servicios para una estadía sin afán" description="Nos esforzamos siempre para que su estadía sea una experiencia inigualable." />
            <Link href="/servicios" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-terracotta">Todos los servicios <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">{highlights.map((item) => <ServiceItem key={item.name} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-olive py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Conoce el hotel" title="Un rincón colonial en medio de Cali" description="Recorre nuestros espacios y descubre una estancia rodeada de calma, jardines y hospitalidad." align="center" light />
          <div className="mt-12"><VideoEmbed /></div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Comentarios" title="Lo que cuentan nuestros huéspedes" />
          <div className="mt-12 grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{reviews.map((review) => <ReviewCard key={review.name} review={review} />)}</div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
