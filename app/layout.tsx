import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelsteincolonial.com"),
  title: {
    default: "Hotel Stein Colonial | Hotel en el corazón de Cali",
    template: "%s | Hotel Stein Colonial",
  },
  description: "Hotel colonial en el corazón de Cali con piscina, restaurante, parqueadero privado, zonas verdes y atención personalizada.",
  openGraph: {
    title: "Hotel Stein Colonial",
    description: "Tu casa en la sucursal del cielo.",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/images/pool.jpg", width: 1200, height: 800 }],
  },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#contenido" className="fixed left-4 top-3 z-[60] -translate-y-20 bg-ink px-4 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
