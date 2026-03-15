import Link from "next/link";
import { Ambulance, Car, CarTaxiFront, Phone, Zap, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CityData } from "@/lib/types";
import { hospitals } from "@/data/hospitals";
import { cities } from "@/data/cities";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Breadcrumb from "@/components/ui/Breadcrumb";

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
      <Breadcrumb items={[
        { label: "Zone d'intervention", href: "/zone-intervention" },
        { label: city.name },
      ]} />

      {/* Mini-hero on light blue bg */}
      <section className="bg-primary-light py-16 md:py-20">
        <div className="container-custom text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">Ambulance {city.name}</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-dark md:text-5xl lg:text-6xl">Ambulance à {city.name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-grey-600 leading-relaxed">{city.description}</p>
          <span className="mt-6 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">{city.distance}</span>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-lg text-grey-600 leading-relaxed">
              <p>{city.content.intro}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title={`Nos Services à ${city.name}`} surtitre="SERVICES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard icon={Ambulance} title="Ambulance" description={`Transport en ambulance depuis ${city.name}. Allongé et semi-allongé avec surveillance médicale.`} href="/services#ambulance" number="01" />
              <ServiceCard icon={Car} title="VSL" description={`Véhicule Sanitaire Léger disponible à ${city.name} pour vos consultations et examens médicaux.`} href="/services#vsl" number="02" />
              <ServiceCard icon={CarTaxiFront} title="Taxi Conventionné" description={`Taxi conventionné CPAM à ${city.name}. Prise en charge Assurance Maladie sur prescription.`} href="/services#taxi-conventionne" number="03" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mx-auto mt-10 max-w-3xl text-lg text-grey-600 leading-relaxed">
              <p>{city.content.services}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Hospitals — clickable cards */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Établissements de Santé Proches" surtitre="HÔPITAUX" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="space-y-4">
              {nearbyHospitals.map((h) => (
                <Link key={h.slug} href={`/transport/${h.slug}`} className="flex items-start gap-5 rounded-2xl border border-grey-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 group md:p-8">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors">{h.name}</h3>
                    <p className="text-grey-600">{h.city}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {h.specialties.slice(0, 4).map((s) => (
                        <span key={s} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">{s}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="mt-2 h-5 w-5 flex-shrink-0 text-grey-600 group-hover:text-primary transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why us for this city */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title={`Les + de 3F Ambulance à ${city.name}`} surtitre="POURQUOI NOUS" />
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-grey-600 leading-relaxed">{city.content.why}</p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { icon: Zap, title: "Réactivité", desc: `Intervention rapide à ${city.name} et ses environs` },
                { icon: Users, title: "Professionnalisme", desc: "Ambulanciers diplômés d'État, formés et expérimentés" },
                { icon: CheckCircle, title: "Prise en charge", desc: "Conventionné CPAM, remboursement Assurance Maladie" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary"><item.icon className="h-6 w-6" aria-hidden="true" /></div>
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

      {/* Nearby cities — maillage interne */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title="Communes à Proximité" surtitre="MAILLAGE LOCAL" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyCities.map((c) => (
                <Link key={c.slug} href={`/ambulance/${c.slug}`} className="rounded-2xl border border-grey-100 bg-white p-6 text-center transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 group">
                  <h3 className="font-heading font-bold text-dark group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="mt-1 text-sm text-grey-600">{c.distance}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title={`Transport médical à ${city.name} ?`} subtitle="Appelez-nous — on connaît votre commune et on organise votre transport rapidement." />

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
    </>
  );
}
