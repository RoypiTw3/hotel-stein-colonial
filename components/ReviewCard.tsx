export default function ReviewCard({ review }: { review: { name: string; quote: string } }) {
  return (
    <figure className="border-t border-ink/15 pt-6">
      <div className="text-sm tracking-[0.25em] text-terracotta" aria-label="5 de 5 estrellas">★★★★★</div>
      <blockquote className="mt-6 font-serif text-2xl leading-9 tracking-[-0.015em] text-pretty">“{review.quote}”</blockquote>
      <figcaption className="mt-6 text-sm font-semibold text-stone">{review.name}</figcaption>
    </figure>
  );
}
