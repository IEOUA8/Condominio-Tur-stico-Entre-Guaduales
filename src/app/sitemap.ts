import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { experienceSlugs } from "@/content/experiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticRoutes = [
    "",
    "/experiencias",
    "/condominio",
    "/galeria",
    "/servicios",
    "/ubicacion",
    "/preguntas-frecuentes",
    "/reglamento",
    "/reservar",
    "/contacto",
    "/politica-de-privacidad",
    "/politica-de-cookies",
    "/terminos-y-condiciones",
    "/politica-de-cancelacion",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/experiencias" || path === "/reservar" ? 0.9 : 0.6,
  }));

  const experienceEntries: MetadataRoute.Sitemap = experienceSlugs().map((slug) => ({
    url: `${base}/experiencias/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...experienceEntries];
}
