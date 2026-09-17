"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/92 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Hotel Stein Colonial — inicio" className="shrink-0">
          <Image src="/images/logo.png" alt="Hotel Stein Colonial" width={155} height={130} className="h-[62px] w-auto object-contain" loading="eager" />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`relative py-2 text-[0.82rem] font-medium transition hover:text-terracotta ${pathname === item.href ? "text-terracotta after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-terracotta" : "text-ink/75"}`}>
              {item.label}
            </Link>
          ))}
          <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="ml-2 rounded-md bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#924525] active:translate-y-0">
            Reserva ahora
          </a>
          <span className="text-xs font-semibold text-stone" aria-label="Idioma español">ES</span>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
