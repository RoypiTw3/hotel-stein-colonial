import Button from "./Button";

export default function CTASection() {
  return (
    <section className="bg-terracotta py-20 text-white sm:py-24">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl"><p className="eyebrow text-white/60">Tu próxima estadía</p><h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.035em] text-balance sm:text-6xl">Cali se disfruta mejor desde un lugar que se siente como casa.</h2></div>
        <Button href="/contacto" variant="light" className="shrink-0">Reserva tu estadía</Button>
      </div>
    </section>
  );
}
