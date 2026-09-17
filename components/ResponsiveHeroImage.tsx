type ResponsiveHeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ResponsiveHeroImage({ src, alt, className = "" }: ResponsiveHeroImageProps) {
  const base = src.replace(/\.[^.]+$/, "");

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={`${base}-mobile.webp`} type="image/webp" />
      <source srcSet={`${base}-desktop.webp`} type="image/webp" />
      {/* The native picture element avoids a cold image-optimization request on the critical hero. */}
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}
