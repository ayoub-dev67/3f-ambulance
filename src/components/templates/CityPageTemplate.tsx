import Link from "next/link";
import Image from "next/image";
import { Ambulance, Car, CarTaxiFront, Phone, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CityData } from "@/lib/types";
import { hospitals } from "@/data/hospitals";
import { cities } from "@/data/cities";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

interface CityPageTemplateProps {
  city: CityData;
}

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const nearbyHospitals = hospitals.filter((h) => {
    if (["mulhouse", "rixheim", "habsheim"].includes(city.slug)) return true;
    return ["hopital-saint-louis", "hopital-emile-muller-mulhouse", "euroairport-bale-mulhouse"].includes(h.slug);
  });

  const nearbyCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4);

  return (
    <>
      {/* Hero with image */}
      <section className="relative h-[250px] md:h-[400px]">
        <Image
          src={city.image}
          alt={`Vue de ${city.name} — Ambulance 3F Ambulance`}
          fill
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/90 via-[#002B5C]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container-custom">
            <nav className="mb-3 text-sm text-white/70" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/zone-intervention" className="hover:text-white transition-colors">Zone d&apos;intervention</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{city.name}</span>
            </nav>
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">Ambulance à {city.name}</h1>
            <span className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">À {city.distance}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title={`Votre ambulance à ${city.name}`} surtitre="PRÉSENTATION" />
            <div className="mx-auto max-w-3xl text-lg text-grey-600 leading-relaxed">
              <p>{city.content.intro}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title={`Nos Services à ${city.name}`} surtitre="SERVICES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Ambulance, title: "Ambulance", desc: `Transport allongé et semi-allongé depuis ${city.name} avec surveillance médicale.`, href: "/services#ambulance" },
                { icon: Car, title: "VSL", desc: `VSL disponible à ${city.name} pour consultations, dialyse, chimio et examens.`, href: "/services#vsl" },
                { icon: CarTaxiFront, title: "Taxi Conventionné", desc: `Taxi CPAM à ${city.name}. Tiers payant, pas d'avance de frais sur prescription.`, href: "/services#taxi-conventionne" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group rounded-2xl border border-grey-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-dark">{s.title}</h3>
                  <p className="text-grey-600 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mx-auto mt-10 max-w-3xl text-lg text-grey-600 leading-relaxed">
              <p>{city.content.services}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Hospitals with images */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Établissements de Santé Proches" surtitre="HÔPITAUX" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-2">
              {nearbyHospitals.map((h) => (
                <Link key={h.slug} href={`/transport/${h.slug}`} className="group overflow-hidden rounded-2xl border border-grey-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-40">
                    <Image src={h.image} alt={`${h.name} — Transport médical 3F Ambulance`} fill className="object-cover" quality={75} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors">{h.name}</h3>
                    <p className="mb-3 text-sm text-grey-600">{h.city}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {h.specialties.slice(0, 3).map((s) => (
                        <span key={s} className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-medium text-primary">{s}</span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Transport vers cet établissement <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title={`Les + de 3F Ambulance à ${city.name}`} surtitre="POURQUOI NOUS" />
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-grey-600 leading-relaxed">{city.content.why}</p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: Zap, title: "Réactivité", desc: `Intervention rapide à ${city.name} et ses environs` },
                { icon: Users, title: "Professionnalisme", desc: "Ambulanciers diplômés d'État, formés et expérimentés" },
                { icon: CheckCircle, title: "Prise en charge", desc: "Conventionné CPAM, remboursement Assurance Maladie" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary"><item.icon className="h-6 w-6" aria-hidden="true" /></div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-dark">{item.title}</h3>
                  <p className="text-grey-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mt-10 text-center">
              <a href={SITE_CONFIG.phoneHref} className="relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(229,62,62,0.4)] transition-all hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(229,62,62,0.5)] hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
                <Phone className="h-6 w-6" aria-hidden="true" />{SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Nearby cities with images */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title="Communes à Proximité" surtitre="MAILLAGE LOCAL" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyCities.map((c) => (
                <Link key={c.slug} href={`/ambulance/${c.slug}`} className="group overflow-hidden rounded-2xl border border-grey-100 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <div className="relative h-32">
                    <Image src={c.image} alt={`Vue de ${c.name} — Ambulance 3F Ambulance`} fill className="object-cover" quality={75} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    <span className="absolute bottom-2 left-3 font-heading text-sm font-bold text-white">{c.name}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-grey-600">{c.distance}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title={`Besoin d'une ambulance à ${city.name} ?`} subtitle="Appelez maintenant — on connaît votre commune et on organise votre transport rapidement." />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE_CONFIG.fullName} ${city.name}`,
        telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
        url: `${SITE_CONFIG.domain}/ambulance/${city.slug}`,
        address: { "@type": "PostalAddress", addressLocality: "Saint-Louis", addressRegion: "Haut-Rhin", postalCode: "68300", addressCountry: "FR" },
        areaServed: { "@type": "City", name: city.name },
        serviceType: ["Ambulance", "VSL", "Taxi Conventionné"],
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      }) }} />
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: SITE_CONFIG.domain },
        { name: "Zone d\u2019Intervention", url: `${SITE_CONFIG.domain}/zone-intervention` },
        { name: city.name, url: `${SITE_CONFIG.domain}/ambulance/${city.slug}` },
      ]} />
    </>
  );
}
