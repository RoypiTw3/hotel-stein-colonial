import Image from "next/image";

export default function PageHero({ eyebrow, title, description, image, imageAlt }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string }) {
  return (
    <section className="relative mt-20 min-h-[31rem] overflow-hidden">
      <Image src={image} alt={imageAlt} fill loading="eager" quality={70} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,23,19,.73),rgba(28,23,19,.18))]" />
      <div className="container-shell relative flex min-h-[31rem] items-end pb-16 pt-28 text-white">
        <div className="max-w-3xl reveal-up">
          <p className="eyebrow mb-4 text-white/65">{eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-balance sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
