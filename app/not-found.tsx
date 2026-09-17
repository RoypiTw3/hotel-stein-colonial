import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell grid min-h-[80vh] place-items-center pb-20 pt-32 text-center">
      <div><p className="font-mono text-sm tracking-[0.18em] text-terracotta">404</p><h1 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Esta habitación no existe.</h1><p className="mx-auto mt-5 max-w-lg leading-7 text-stone">La página que buscas cambió de lugar o ya no está disponible.</p><Link href="/" className="mt-8 inline-flex rounded-md bg-terracotta px-6 py-3 text-sm font-semibold text-white">Volver al inicio</Link></div>
    </section>
  );
}
