import { MapPin, Clock, Shield, Phone, ArrowRight, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

interface ZoneSectorProps {
  title: string;
  imageSlug: string;
  communes: string[];
}

function ZoneSector({ title, imageSlug, communes }: ZoneSectorProps) {
  const cityImage = cities.find((c) => c.slug === imageSlug);
  return (
    <div className="overflow-hidden rounded-2xl border border-grey-100 bg-white transition-all hover:shadow-lg">
      <div className="relative h-48">
        {cityImage && (
          <Image src={cityImage.image} alt={`Secteur ${title} — 3F Ambulance`} fill className="object-cover" quality={75} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <span className="absolute bottom-3 left-4 font-heading text-xl font-bold text-white">{title}</span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {communes.map((c) => {
            const slug = c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
            const hasPage = citySlugs.has(slug);
            if (hasPage) {
              return (
                <Link key={c} href={`/ambulance/${slug}`} className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-md">
                  {c}
                </Link>
              );
            }
            return <span key={c} className="rounded-full bg-grey-100 px-4 py-1.5 text-sm font-medium text-grey-600">{c}</span>;
          })}
        </div>
        <p className="mt-3 text-sm text-grey-600">{communes.length} communes couvertes</p>
      </div>
    </div>
  );
}

export default function ZoneInterventionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#002B5C] to-[#0057B8] py-16 md:py-20">
        <div className="container-custom text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-blue-300">Zone d&apos;intervention</span>
          <h1 className="mx-auto max-w-4xl font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">Nous intervenons sur tout le Sud Alsace</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/80 leading-relaxed">De Saint-Louis à Mulhouse, de Bâle à Strasbourg — 3F Ambulance couvre les Trois Frontières et bien au-delà.</p>
        </div>
      </section>

      {/* Sectors grid with images */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Communes Desservies" subtitle="Cliquez sur une commune pour découvrir nos services sur place." /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-2">
              <ZoneSector title="Saint-Louis & Proximité" imageSlug="saint-louis" communes={["Saint-Louis", "Bourgfelden", "Village-Neuf", "Huningue", "Rosenau", "Neuwiller"]} />
              <ZoneSector title="Secteur Blotzheim" imageSlug="blotzheim" communes={["Blotzheim", "Bartenheim", "Hésingue", "Hégenheim", "Buschwiller", "Wentzwiller", "Attenschwiller"]} />
              <ZoneSector title="Secteur Kembs" imageSlug="kembs" communes={["Kembs", "Niffer", "Rumersheim-le-Haut", "Ottmarsheim", "Chalampé"]} />
              <ZoneSector title="Secteur Sierentz" imageSlug="sierentz" communes={["Sierentz", "Landser", "Leymen", "Folgensbourg", "Ranspach-le-Bas", "Ranspach-le-Haut", "Stetten"]} />
              <ZoneSector title="Secteur Hagenthal" imageSlug="hesingue" communes={["Hagenthal-le-Bas", "Hagenthal-le-Haut", "Liebenswiller", "Oltingue", "Raedersdorf"]} />
              <ZoneSector title="Mulhouse & Agglomération" imageSlug="mulhouse" communes={["Mulhouse", "Rixheim", "Habsheim", "Illzach", "Kingersheim", "Wittenheim", "Riedisheim"]} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Longue distance */}
      <section className="bg-[#002B5C] py-16 md:py-20">
        <div className="container-custom text-center">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Strasbourg ↔ Saint-Louis</h2>
            <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80">
              <span className="flex items-center gap-2"><MapPin className="h-5 w-5" aria-hidden="true" />~140 km</span>
              <span className="hidden h-5 w-px bg-white/30 md:block" aria-hidden="true" />
              <span className="flex items-center gap-2"><Clock className="h-5 w-5" aria-hidden="true" />~1h30</span>
              <span className="hidden h-5 w-px bg-white/30 md:block" aria-hidden="true" />
              <span className="flex items-center gap-2"><Shield className="h-5 w-5" aria-hidden="true" />Confort garanti</span>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100 leading-relaxed">Notre axe principal : transferts quotidiens vers les HUS — Hautepierre, Nouvel Hôpital Civil, ICANS. Oncologie, neurochirurgie, cardiologie interventionnelle. On fait aussi Colmar (45 min), Belfort (1h15) et toute la France.</p>
            <a href={SITE_CONFIG.phoneHref} className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(229,62,62,0.4)] transition-all hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(229,62,62,0.5)] hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
              <Phone className="h-6 w-6" aria-hidden="true" />Réserver un transport longue distance
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Transfrontalier */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Transport Transfrontalier" surtitre="3 PAYS" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-grey-100 border-t-4 border-t-[#0057B8] bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0057B8]/10 text-[#0057B8]"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mb-2 font-heading text-lg font-bold text-dark">France</h3>
                <p className="text-grey-600">Saint-Louis et tout le Haut-Rhin</p>
              </div>
              <div className="rounded-2xl border border-grey-100 border-t-4 border-t-accent bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mb-2 font-heading text-lg font-bold text-dark">Suisse</h3>
                <p className="text-grey-600">Bâle, Universitätsspital, cliniques bâloises</p>
              </div>
              <div className="rounded-2xl border border-grey-100 border-t-4 border-t-[#D69E2E] bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#D69E2E]/10 text-[#D69E2E]"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mb-2 font-heading text-lg font-bold text-dark">Allemagne</h3>
                <p className="text-grey-600">Lörrach, Weil am Rhein, Freiburg</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mt-8 text-center">
              <Link href="/transport/euroairport-bale-mulhouse" className="inline-flex items-center gap-3 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white">
                <Plane className="h-5 w-5" aria-hidden="true" />EuroAirport Basel-Mulhouse-Freiburg <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Votre commune n'est pas listée ?" subtitle="Appelez-nous quand même — on intervient bien au-delà de cette liste, partout en France et aux frontières." />
    </>
  );
}
