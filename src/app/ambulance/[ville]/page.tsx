import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { SITE_CONFIG } from "@/lib/constants";
import CityPageTemplate from "@/components/templates/CityPageTemplate";

interface PageProps {
  params: { ville: string };
}

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = cities.find((c) => c.slug === params.ville);
  if (!city) return {};
  const url = `${SITE_CONFIG.domain}/ambulance/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `3F Ambulance ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title: city.metaTitle, description: city.metaDescription },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default function CityPage({ params }: PageProps) {
  const city = cities.find((c) => c.slug === params.ville);
  if (!city) notFound();
  return <CityPageTemplate city={city} />;
}
