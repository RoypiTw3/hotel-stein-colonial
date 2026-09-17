type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }: Props) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "text-white/65" : "text-terracotta"}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && <p className={`mt-5 text-base leading-7 text-pretty sm:text-lg ${light ? "text-white/72" : "text-stone"}`}>{description}</p>}
    </div>
  );
}
