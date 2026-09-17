export const site = {
  name: "Hotel Stein Colonial",
  shortName: "Stein Colonial",
  address: "Avenida 4 Norte # 3 – 33, Cali, Valle del Cauca, Colombia",
  phoneDisplay: "+57 602 6614927 / +57 602 661 4999",
  phones: ["+576026614927", "+576026614999"],
  email: "reservas@hotelsteincolonial.com",
  whatsappNumber: "573103733830",
  bookingUrl: "https://hotels.cloudbeds.com/en/reservation/giM3Yf",
  facebook: "https://www.facebook.com/HotelSteinColonial",
  instagram: "https://www.instagram.com/hotel.stein.colonial/",
  mapUrl: "https://www.google.com/maps?q=Avenida+4+Norte+%23+3-33,+Cali,+Colombia&output=embed",
} as const;

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/habitaciones", label: "Habitaciones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
