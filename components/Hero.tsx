import BookingBar from "./BookingBar";
import ResponsiveHeroImage from "./ResponsiveHeroImage";

export default function Hero() {
  return (
    <section className="relative mb-56 min-h-[48rem] overflow-visible pt-20 sm:mb-28 sm:min-h-[44rem]">
      <div className="image-wash grain absolute inset-x-0 top-20 h-[calc(100%-5rem)] overflow-hidden">
        <ResponsiveHeroImage src="/images/pool.jpg" alt="Piscina rodeada por la arquitectura colonial y los jardines del Hotel Stein Colonial" className="object-center" />
      </div>
      <div className="container-shell relative z-10 flex min-h-[48rem] items-center pb-32 pt-16 sm:min-h-[44rem] sm:pb-24">
        <div className="reveal-up max-w-3xl text-white">
          <p className="eyebrow mb-5 text-white/70">Cali, Colombia</p>
          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl lg:text-[5.5rem]">Tu casa en la sucursal del cielo</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg">Tradición colonial, zonas verdes y una atención que se siente cercana, en el corazón de Cali.</p>
        </div>
      </div>
      <div className="container-shell absolute inset-x-0 -bottom-24 z-20 sm:-bottom-16"><BookingBar /></div>
    </section>
  );
}
