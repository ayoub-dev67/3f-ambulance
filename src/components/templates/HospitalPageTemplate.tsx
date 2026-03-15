import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, PhoneCall, HeartHandshake, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HospitalData } from "@/lib/types";
import { hospitals } from "@/data/hospitals";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MedicalBusinessJsonLd } from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

interface HospitalPageTemplateProps {
  hospital: HospitalData;
}

export default function HospitalPageTemplate({ hospital }: HospitalPageTemplateProps) {
  const otherHospitals = hospitals.filter((h) => h.slug !== hospital.slug);

  return (
    <>
      {/* Hero with image */}
      <section className="relative h-[250px] md:h-[400px]">
        <Image
          src={hospital.image}
          alt={`${hospital.name} — Transport médical 3F Ambulance`}
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
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{hospital.name}</span>
            </nav>
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">Transport vers {hospital.name}</h1>
            <span className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">{hospital.city}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-lg text-grey-600 leading-relaxed">
              <p>{hospital.content.intro}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-primary-50 py-10">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {hospital.specialties.map((s) => (
                <span key={s} className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-sm font-medium text-primary">{s}</span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Transport info */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title={`Transport vers ${hospital.name}`} surtitre="INFORMATIONS" />
            <div className="mx-auto max-w-3xl space-y-5 text-lg text-grey-600 leading-relaxed">
              <p>{hospital.content.transport}</p>
              <p>{hospital.content.services}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Booking steps — circles with connecting line */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Comment Réserver Votre Transport" surtitre="RÉSERVATION" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-4">
              {[
                { icon: FileText, step: "1", title: "Prescription", desc: "Votre médecin vous délivre une prescription de transport (cerfa volet 4)" },
                { icon: PhoneCall, step: "2", title: "Réservation", desc: `Appelez le ${SITE_CONFIG.phoneDisplay} ou remplissez notre formulaire en ligne` },
                { icon: HeartHandshake, step: "3", title: "Transport", desc: "Nous venons vous chercher et vous conduisons en toute sécurité" },
              ].map((s, i) => (
                <div key={s.step} className="flex flex-1 flex-col items-center text-center">
                  <div className="flex items-center gap-0 w-full justify-center">
                    {i > 0 && <div className="hidden h-0.5 flex-1 bg-grey-100 md:block" />}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-white shadow-lg">
                      {s.step}
                    </div>
                    {i < 2 && <div className="hidden h-0.5 flex-1 bg-grey-100 md:block" />}
                  </div>
                  <h3 className="mt-4 mb-2 font-heading text-lg font-semibold text-dark">{s.title}</h3>
                  <p className="text-grey-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mt-10 text-center">
              <a href={SITE_CONFIG.phoneHref} className="relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(229,62,62,0.4)] transition-all hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(229,62,62,0.5)] hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
                <Phone className="h-6 w-6" aria-hidden="true" />Appelez le {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Other hospitals with images */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Autres Établissements" surtitre="VOIR AUSSI" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherHospitals.map((h) => (
                <Link key={h.slug} href={`/transport/${h.slug}`} className="group overflow-hidden rounded-2xl border border-grey-100 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <div className="relative h-32">
                    <Image src={h.image} alt={`${h.name} — Transport médical 3F Ambulance`} fill className="object-cover" quality={75} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-bold text-dark group-hover:text-primary transition-colors leading-tight">{h.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      Voir <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title={`Transport vers ${hospital.name} ?`} subtitle="On connaît cet établissement par cœur. Appelez-nous pour organiser votre transport." />
      <MedicalBusinessJsonLd name={hospital.name} city={hospital.city} />
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: SITE_CONFIG.domain },
        { name: "Services", url: `${SITE_CONFIG.domain}/services` },
        { name: hospital.name, url: `${SITE_CONFIG.domain}/transport/${hospital.slug}` },
      ]} />
    </>
  );
}
