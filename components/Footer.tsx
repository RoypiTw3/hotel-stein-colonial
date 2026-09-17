import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.15fr_.8fr_1fr] md:py-20">
        <div>
          <Image src="/images/logo.png" alt="Hotel Stein Colonial" width={155} height={130} className="h-24 w-auto rounded bg-white object-contain p-2" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">Atención cercana, espacios coloniales y zonas verdes en el corazón de Cali.</p>
        </div>
        <div>
          <p className="eyebrow text-white/45">Explora</p>
          <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="text-white/72 transition hover:text-white">{item.label}</Link>)}
            <Link href="/restaurante" className="text-white/72 transition hover:text-white">Restaurante</Link>
          </nav>
        </div>
        <div>
          <p className="eyebrow text-white/45">Contacto</p>
          <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-white/72">
            <p>{site.address}</p>
            <p><a href={`tel:${site.phones[0]}`} className="hover:text-white">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
          </address>
          <div className="mt-6 flex gap-5 text-sm">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-sand">Facebook</a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-sand">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hotel Stein Colonial</p>
          <div className="flex gap-5"><Link href="/privacidad">Privacidad</Link><Link href="/cookies">Cookies</Link></div>
        </div>
      </div>
    </footer>
  );
}
