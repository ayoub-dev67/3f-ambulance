import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hospitals } from "@/data/hospitals";
import { SITE_CONFIG } from "@/lib/constants";
import HospitalPageTemplate from "@/components/templates/HospitalPageTemplate";

interface PageProps {
  params: { etablissement: string };
}

export function generateStaticParams() {
  return hospitals.map((hospital) => ({ etablissement: hospital.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const hospital = hospitals.find((h) => h.slug === params.etablissement);
  if (!hospital) return {};
  const url = `${SITE_CONFIG.domain}/transport/${hospital.slug}`;
  return {
    title: hospital.metaTitle,
    description: hospital.metaDescription,
    openGraph: {
      title: hospital.metaTitle,
      description: hospital.metaDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Transport vers ${hospital.name}` }],
    },
    twitter: { card: "summary_large_image", title: hospital.metaTitle, description: hospital.metaDescription },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default function HospitalPage({ params }: PageProps) {
  const hospital = hospitals.find((h) => h.slug === params.etablissement);
  if (!hospital) notFound();
  return <HospitalPageTemplate hospital={hospital} />;
}
