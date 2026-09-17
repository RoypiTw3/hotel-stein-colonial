"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-md border border-ink/15 text-ink"
      >
        <span className="sr-only">Menú</span>
        <span className="space-y-1.5">
          <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-ink/10 bg-cream px-4 pb-6 pt-3 shadow-[0_18px_40px_rgba(73,53,38,0.14)]">
          <nav aria-label="Navegación móvil" className="container-shell flex flex-col">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`border-b border-ink/10 py-4 text-lg ${pathname === item.href ? "font-semibold text-terracotta" : "text-ink"}`}>
                {item.label}
              </Link>
            ))}
            <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="mt-5 rounded-md bg-terracotta px-6 py-3.5 text-center text-sm font-semibold text-white">
              Reserva ahora
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
