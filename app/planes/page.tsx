import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import { plans } from "@/data/plans";

export const metadata: Metadata = { title: "Planes", description: "Plan romántico, pasadía y tarifas corporativas del Hotel Stein Colonial en Cali." };

export default function PlanesPage() {
  return (
    <>
      <PageHero eyebrow="Planes" title="Tres maneras de vivir el Hotel Stein" description="Un día de sol en familia, una pausa en pareja o una tarifa especial para sus viajes de negocios." image="/images/pool.jpg" imageAlt="Piscina del Hotel Stein Colonial" />
      <section className="py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow="Encuentra tu plan" title="Diseñados para momentos distintos" description="Consulta disponibilidad, condiciones y complementos directamente con nuestro equipo." />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">{plans.map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index} />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
