import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { hospitals } from "@/data/hospitals";

const BASE_URL = "https://3f-ambulance.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/zone-intervention`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.1 },
  ];

  const cityPages = cities.map((city) => ({
    url: `${BASE_URL}/ambulance/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const hospitalPages = hospitals.map((hospital) => ({
    url: `${BASE_URL}/transport/${hospital.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...cityPages, ...hospitalPages];
}
