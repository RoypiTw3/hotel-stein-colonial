"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoEmbed() {
  const [play, setPlay] = useState(false);
  if (play) {
    return <iframe className="aspect-video w-full rounded-xl" src="https://www.youtube-nocookie.com/embed/3-nvXNannbc?autoplay=1" title="Video Stein Colonial Hotel Cali" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />;
  }
  return (
    <button type="button" onClick={() => setPlay(true)} aria-label="Reproducir video del Hotel Stein Colonial" className="group relative aspect-video w-full overflow-hidden rounded-xl text-white">
      <Image src="/images/cali.jpg" alt="Vista de la ciudad de Cali" fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
      <span className="absolute inset-0 bg-ink/32 transition group-hover:bg-ink/42" />
      <span className="absolute inset-0 grid place-items-center"><span className="grid h-20 w-20 place-items-center rounded-full border border-white/70 bg-white/12 backdrop-blur-sm transition group-hover:scale-105"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7"><path d="m8 5 11 7-11 7z" /></svg></span></span>
    </button>
  );
}
