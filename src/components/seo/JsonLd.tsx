import { SITE_CONFIG } from "@/lib/constants";

export function EmergencyServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: SITE_CONFIG.fullName,
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    url: SITE_CONFIG.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Louis",
      addressRegion: "Haut-Rhin",
      postalCode: "68300",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Saint-Louis" },
      { "@type": "City", name: "Huningue" },
      { "@type": "City", name: "Hésingue" },
      { "@type": "City", name: "Blotzheim" },
      { "@type": "City", name: "Mulhouse" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    serviceType: ["Ambulance", "VSL", "Taxi Conventionné"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Louis",
      addressRegion: "Haut-Rhin",
      postalCode: "68300",
      addressCountry: "FR",
    },
    sameAs: [],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.domain}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ServiceJsonLd({ services }: { services: { name: string; description: string }[] }) {
  const schemas = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.fullName,
      telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    },
    areaServed: {
      "@type": "City",
      name: "Saint-Louis",
    },
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}

export function MedicalBusinessJsonLd({ name, city }: { name: string; city: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONFIG.fullName,
    description: `Transport ambulance vers ${name} à ${city}`,
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    url: SITE_CONFIG.domain,
    medicalSpecialty: "Transport sanitaire",
    areaServed: { "@type": "City", name: city },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
