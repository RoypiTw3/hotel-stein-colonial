import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/habitaciones",
    "/servicios",
    "/planes",
    "/nosotros",
    "/contacto",
    "/restaurante",
    "/privacidad",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/restaurante" ? 0.9 : 0.8,
  }));
}
