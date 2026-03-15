import { MapPin, Route, Globe, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import { cities } from "@/data/cities";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = generatePageMetadata({
  title: "Zone d'Intervention Ambulance Saint-Louis (68) | Trois Frontières — 3F Ambulance",
  description: "Découvrez la zone d'intervention de 3F Ambulance : Saint-Louis, Huningue, Blotzheim, Mulhouse et toutes les Trois Frontières. Transport longue distance et transfrontalier.",
  path: "/zone-intervention",
});

const citySlugs = new Set(cities.map((c) => c.slug));

interface ZoneSectionProps {
  title: string;
  communes: string[];
}

function ZoneSection({ title, communes }: ZoneSectionProps) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 flex items-center gap-2.5 font-heading text-xl font-semibold text-dark">
        <MapPin className="h-5 w-5 text-primary" />{title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {communes.map((c) => {
          const slug = c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
          const hasPage = citySlugs.has(slug);
          if (hasPage) {
            return (
              <Link key={c} href={`/ambulance/${slug}`} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:border-primary hover:shadow-md">
                {c}
              </Link>
            );
          }
          return <span key={c} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-primary">{c}</span>;
        })}
      </div>
    </div>
  );
}

export default function ZoneInterventionPage() {
  return (
    <>
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Zone d&apos;intervention</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Notre Zone d&apos;Intervention</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">3F Ambulance intervient à Saint-Louis et dans toute la zone des Trois Frontières, avec des liaisons longue distance et transfrontalières.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Communes Desservies" subtitle="Cliquez sur une commune pour découvrir nos services sur place." /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Saint-Louis & Proximité" communes={["Saint-Louis", "Bourgfelden", "Village-Neuf", "Huningue", "Rosenau", "Neuwiller"]} /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Secteur Blotzheim" communes={["Blotzheim", "Bartenheim", "Hésingue", "Hégenheim", "Buschwiller", "Wentzwiller", "Attenschwiller"]} /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Secteur Kembs" communes={["Kembs", "Niffer", "Rumersheim-le-Haut", "Ottmarsheim", "Chalampé"]} /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Secteur Sierentz" communes={["Sierentz", "Landser", "Leymen", "Folgensbourg", "Ranspach-le-Bas", "Ranspach-le-Haut", "Stetten"]} /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Secteur Hagenthal" communes={["Hagenthal-le-Bas", "Hagenthal-le-Haut", "Liebenswiller", "Oltingue", "Raedersdorf"]} /></RevealOnScroll>
          <RevealOnScroll><ZoneSection title="Mulhouse & Agglomération" communes={["Mulhouse", "Rixheim", "Habsheim", "Illzach", "Kingersheim", "Wittenheim", "Riedisheim"]} /></RevealOnScroll>
        </div>
      </section>

      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <div className="rounded-2xl border border-primary/20 bg-white p-8 md:p-10 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary"><Route className="h-8 w-8" /></div>
                <div className="flex-1">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Transport Longue Distance</h2>
                  <p className="mb-4 text-lg text-grey-600 leading-relaxed">Notre axe principal : le <strong className="text-dark">corridor Saint-Louis ↔ Strasbourg</strong> (1h30 par l&apos;A35). On le fait tous les jours pour des patients suivis aux HUS — Hautepierre, Nouvel Hôpital Civil, ICANS. Transferts inter-hospitaliers, consultations d&apos;oncologie, de neurochirurgie, de cardiologie interventionnelle.</p>
                  <p className="mb-8 text-lg text-grey-600 leading-relaxed">On assure aussi les trajets vers Colmar (45 min), Belfort (1h15), Besançon et toute destination en France métropolitaine.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-hover hover:shadow-xl"><Phone className="h-5 w-5" />{SITE_CONFIG.phoneDisplay}</a>
                    <Link href="/services#longue-distance" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-white">Nos services <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <div className="rounded-2xl border border-primary/20 bg-white p-8 md:p-10 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary"><Globe className="h-8 w-8" /></div>
                <div className="flex-1">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Transport Transfrontalier</h2>
                  <p className="mb-6 text-lg text-grey-600 leading-relaxed">Situés au cœur des Trois Frontières, nous assurons des transports sanitaires internationaux vers la Suisse et l&apos;Allemagne.</p>
                  <div className="mb-8 grid gap-4 sm:grid-cols-2">
                    {[
                      { country: "Suisse", cities: "Bâle, Universitätsspital Basel, Liestal" },
                      { country: "Allemagne", cities: "Lörrach, Weil am Rhein, Freiburg" },
                      { country: "EuroAirport", cities: "Bâle-Mulhouse-Freiburg" },
                      { country: "Autres", cities: "Sur demande, toute destination" },
                    ].map((item) => (
                      <div key={item.country} className="rounded-xl bg-primary-50 p-4">
                        <p className="font-heading font-bold text-primary">{item.country}</p>
                        <p className="text-sm text-grey-600">{item.cities}</p>
                      </div>
                    ))}
                  </div>
                  <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-hover hover:shadow-xl"><Phone className="h-5 w-5" />{SITE_CONFIG.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Votre commune n'est pas listée ?" subtitle="Appelez-nous quand même — on intervient bien au-delà de cette liste, partout en France et aux frontières." />
    </>
  );
}
