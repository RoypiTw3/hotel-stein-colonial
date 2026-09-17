import { whatsappUrl } from "@/data/site";
import Icon from "./Icon";

export default function PlanCard({ plan, index }: { plan: { name: string; kicker: string; description: string; detail: string }; index: number }) {
  return (
    <article className={`relative flex min-h-[25rem] flex-col overflow-hidden rounded-xl p-8 sm:p-10 ${index === 1 ? "bg-olive text-white" : "bg-sand text-ink"}`}>
      <span className={`font-mono text-xs tracking-[0.16em] ${index === 1 ? "text-white/55" : "text-stone"}`}>0{index + 1}</span>
      <p className={`eyebrow mt-14 ${index === 1 ? "text-white/60" : "text-terracotta"}`}>{plan.kicker}</p>
      <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.03em]">{plan.name}</h2>
      <p className={`mt-6 leading-7 ${index === 1 ? "text-white/75" : "text-stone"}`}>{plan.description}</p>
      <p className={`mt-3 text-sm ${index === 1 ? "text-white/60" : "text-stone"}`}>{plan.detail}</p>
      <a href={whatsappUrl(`Hola, quisiera consultar disponibilidad y condiciones del ${plan.name} del Hotel Stein Colonial.`)} target="_blank" rel="noreferrer" className={`mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold ${index === 1 ? "text-white" : "text-terracotta"}`}>Consultar este plan <Icon name="arrow" className="h-4 w-4" /></a>
    </article>
  );
}
