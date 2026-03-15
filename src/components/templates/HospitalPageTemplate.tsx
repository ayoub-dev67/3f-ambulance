import Link from "next/link";
import { Ambulance, Car, CarTaxiFront, Phone, FileText, PhoneCall, HeartHandshake, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HospitalData } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { MedicalBusinessJsonLd } from "@/components/seo/JsonLd";

interface HospitalPageTemplateProps {
  hospital: HospitalData;
}

export default function HospitalPageTemplate({ hospital }: HospitalPageTemplateProps) {
  return (
    <>
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: hospital.name },
      ]} />

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Transport médical</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Transport vers {hospital.name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">{hospital.content.intro}</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/80"><MapPin className="h-4 w-4" aria-hidden="true" /><span>{hospital.city}</span></div>
        </div>
      </section>

      {/* Specialties badges */}
      <section className="bg-white py-10 shadow-sm">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {hospital.specialties.map((s) => (
                <span key={s} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary">{s}</span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Transport info */}
      <section className="bg-primary-50 section-padding">
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

      {/* Transport types */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Types de Transport Disponibles" surtitre="NOS VÉHICULES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Ambulance, title: "Ambulance", desc: `Transport médicalisé allongé ou semi-allongé vers ${hospital.name}. Pour les patients nécessitant une surveillance médicale pendant le trajet.`, href: "/services#ambulance", num: "01" },
                { icon: Car, title: "VSL", desc: `Transport assis en Véhicule Sanitaire Léger vers ${hospital.name}. Idéal pour les consultations et examens programmés.`, href: "/services#vsl", num: "02" },
                { icon: CarTaxiFront, title: "Taxi Conventionné", desc: `Taxi conventionné CPAM pour vos déplacements vers ${hospital.name}. Prise en charge Assurance Maladie sur prescription.`, href: "/services#taxi-conventionne", num: "03" },
              ].map((t) => (
                <Link key={t.title} href={t.href} className="group relative overflow-hidden rounded-2xl border border-grey-100 border-l-4 border-l-primary bg-white p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-accent">
                  <span className="absolute top-4 right-4 hidden font-heading text-6xl font-black text-grey-100 select-none md:block" aria-hidden="true">{t.num}</span>
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-colors"><t.icon className="h-7 w-7" aria-hidden="true" /></div>
                  <h3 className="relative mb-3 font-heading text-xl font-semibold text-dark">{t.title}</h3>
                  <p className="relative text-grey-600 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Booking steps — connected circles */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Comment Réserver Votre Transport" surtitre="RÉSERVATION" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-8 hidden h-0.5 w-[60%] -translate-x-1/2 bg-primary/20 md:block" aria-hidden="true" />
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { icon: FileText, step: "1", title: "Prescription médicale", desc: "Demandez à votre médecin une prescription médicale de transport (PMT) précisant le mode de transport nécessaire." },
                  { icon: PhoneCall, step: "2", title: "Appelez-nous", desc: `Contactez-nous au ${SITE_CONFIG.phoneDisplay}. Nous organisons votre transport vers ${hospital.name} selon vos besoins.` },
                  { icon: HeartHandshake, step: "3", title: "On s'occupe de tout", desc: "Nos ambulanciers viennent vous chercher, vous transportent en toute sécurité et vous accompagnent." },
                ].map((s) => (
                  <div key={s.step} className="relative text-center">
                    <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white shadow-lg ring-4 ring-primary-light">
                      {s.step}
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-semibold text-dark">{s.title}</h3>
                    <p className="text-grey-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
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

      {/* Link to zone */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl text-center">
          <RevealOnScroll>
            <p className="text-lg text-grey-600 mb-4">Nous desservons de nombreuses communes dans le Haut-Rhin et les Trois Frontières.</p>
            <Link href="/zone-intervention" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg">
              Voir notre zone d&apos;intervention <MapPin className="h-4 w-4" aria-hidden="true" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title={`Transport vers ${hospital.name} ?`} subtitle="On connaît cet établissement par cœur. Appelez-nous pour organiser votre transport." />
      <MedicalBusinessJsonLd name={hospital.name} city={hospital.city} />
    </>
  );
}
