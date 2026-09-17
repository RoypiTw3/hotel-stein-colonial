import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contacto", description: "Contacta al Hotel Stein Colonial y consulta disponibilidad para tu estadía en Cali." };

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos de tu próxima estadía" description="Nuestro equipo está listo para ayudarte con disponibilidad, planes y servicios." image="/images/facade.jpg" imageAlt="Fachada del Hotel Stein Colonial" />
      <section className="py-24 sm:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Estamos en Cali" title="Escríbenos o visítanos" />
            <dl className="mt-10 space-y-7 text-sm">
              <div className="border-t border-ink/15 pt-5"><dt className="font-semibold text-ink">Dirección</dt><dd className="mt-2 leading-6 text-stone">{site.address}</dd></div>
              <div className="border-t border-ink/15 pt-5"><dt className="font-semibold text-ink">Teléfonos</dt><dd className="mt-2 text-stone"><a href={`tel:${site.phones[0]}`}>{site.phoneDisplay}</a></dd></div>
              <div className="border-t border-ink/15 pt-5"><dt className="font-semibold text-ink">Correo</dt><dd className="mt-2 text-stone"><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div className="border-t border-ink/15 pt-5"><dt className="font-semibold text-ink">Horarios</dt><dd className="mt-2 text-stone">Consultar</dd></div>
            </dl>
          </div>
          <div className="rounded-xl bg-sand p-6 sm:p-10"><h2 className="font-serif text-4xl tracking-[-0.03em]">Envíanos un mensaje</h2><p className="mb-8 mt-3 text-sm leading-6 text-stone">Cuéntanos qué necesitas y te responderemos por el canal que elijas.</p><ContactForm /></div>
        </div>
      </section>
      <section className="pb-24 sm:pb-28">
        <div className="container-shell overflow-hidden rounded-xl bg-sand"><iframe src={site.mapUrl} title="Mapa del Hotel Stein Colonial" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[30rem] w-full border-0" /></div>
      </section>
    </>
  );
}
