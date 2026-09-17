import type { MenuSection as MenuSectionData } from "@/data/menu";

export default function MenuSection({ section }: { section: MenuSectionData }) {
  return (
    <section id={section.slug} className="scroll-mt-28 border-t border-ink/15 pt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-4xl leading-none tracking-[-0.035em]">{section.title}</h3>
        {section.note && <p className="max-w-sm text-xs leading-5 text-stone sm:text-right">{section.note}</p>}
      </div>
      <div className="mt-7 divide-y divide-ink/10">
        {section.items.map((item) => (
          <article key={`${section.slug}-${item.name}`} className="grid grid-cols-[1fr_auto] gap-x-5 py-5 first:pt-0">
            <div>
              <h4 className="font-medium leading-6 text-ink">{item.name}</h4>
              {item.description && <p className="mt-1.5 max-w-2xl text-sm leading-6 text-stone">{item.description}</p>}
            </div>
            <p className="font-mono text-sm font-semibold tabular-nums text-terracotta">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
