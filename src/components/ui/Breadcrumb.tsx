import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_CONFIG.domain}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-grey-100">
        <div className="container-custom py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-grey-600">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-grey-600">/</span>}
                {item.href && index < allItems.length - 1 ? (
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-grey-800 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
