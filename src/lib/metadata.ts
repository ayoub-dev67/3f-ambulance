import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  noindex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.domain}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "3F Ambulance - Transport Médical Saint-Louis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
