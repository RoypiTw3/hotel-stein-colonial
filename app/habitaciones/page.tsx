import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = { title: "Habitaciones", description: "Conoce las habitaciones dobles, familiares, superiores y twin del Hotel Stein Colonial en Cali." };

const stats = [
  ["26", "habitaciones"],
  ["13", "dobles"],
  ["3", "triples"],
  ["4", "twin / cuádruples"],
  ["1", "suite"],
];

export default function HabitacionesPage() {
  return (
    <>
      <PageHero eyebrow="Habitaciones" title="Descanso cálido, espíritu colonial" description="Cada habitación está acondicionada para cumplir los requerimientos de nuestros huéspedes, con espacios serenos y una atención cercana." image="/images/room-family.jpg" imageAlt="Habitación del Hotel Stein Colonial" />
      <section className="bg-sand py-12">
        <div className="container-shell grid grid-cols-2 gap-8 sm:grid-cols-5">
          {stats.map(([value, label]) => <div key={label} className="border-l border-ink/15 pl-4"><strong className="block font-serif text-4xl font-medium tracking-[-0.04em]">{value}</strong><span className="mt-1 block text-xs uppercase tracking-[0.12em] text-stone">{label}</span></div>)}
        </div>
      </section>
      <section className="py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Elige tu espacio" title="Una habitación para cada forma de viajar" description="Consulta la disponibilidad y la configuración exacta directamente con nuestro equipo de reservas." />
          <div className="mt-14 grid gap-x-8 gap-y-16 lg:grid-cols-2">{rooms.map((room) => <RoomCard key={room.name} room={room} />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
