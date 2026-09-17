import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotel Stein Colonial",
    short_name: "Stein Colonial",
    description: "Hotel colonial con jardines, restaurante y atención cercana en el corazón de Cali.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#253a2f",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "155x130",
        type: "image/png",
      },
    ],
  };
}
