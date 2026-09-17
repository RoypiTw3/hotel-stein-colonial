import Image from "next/image";
import { Room } from "@/data/rooms";
import { whatsappUrl } from "@/data/site";
import Icon from "./Icon";

export default function RoomCard({ room, featured = false }: { room: Room; featured?: boolean }) {
  return (
    <article className={`group ${featured ? "lg:col-span-2" : ""}`}>
      <div className={`relative overflow-hidden rounded-xl ${featured ? "aspect-[16/9] lg:aspect-[2/1]" : "aspect-[4/3]"}`}>
        <Image src={room.image} alt={`${room.name} del Hotel Stein Colonial`} fill sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover transition duration-700 group-hover:scale-[1.035]" />
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-5">
          <h3 className="font-serif text-3xl leading-tight tracking-[-0.025em]">{room.name}</h3>
          <a href={whatsappUrl(`Hola, quisiera reservar una ${room.name} en el Hotel Stein Colonial.`)} target="_blank" rel="noreferrer" aria-label={`Reservar ${room.name}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition hover:border-terracotta hover:bg-terracotta hover:text-white"><Icon name="arrow" className="h-4 w-4" /></a>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-6 text-stone">{room.description}</p>
        <div className="mt-4 flex gap-5 text-xs font-semibold uppercase tracking-[0.1em] text-olive"><span>{room.capacity}</span><span>{room.bed}</span></div>
      </div>
    </article>
  );
}
