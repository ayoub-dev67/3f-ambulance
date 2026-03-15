import { Phone, ArrowRight, Clock, ShieldCheck, Globe, CheckCircle, Ambulance, Car, CarTaxiFront, Zap, HeartPulse, Users, MapPin } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, COMMUNES_DESSERVIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FAQJsonLd, OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/faq";

const homeFAQ = faqItems.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero — 85vh, deep gradient, ECG pattern, decorative ambulance */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[85vh]">
        {/* ECG heartbeat SVG pattern */}
        <svg className="absolute inset-0 hidden h-full w-full opacity-[0.03] md:block" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,100 L200,100 L220,100 L240,20 L260,180 L280,60 L300,140 L320,100 L500,100 L520,100 L540,20 L560,180 L580,60 L600,140 L620,100 L800,100 L820,100 L840,20 L860,180 L880,60 L900,140 L920,100 L1200,100" fill="none" stroke="white" strokeWidth="3" className="ecg-line" />
        </svg>
        {/* Decorative large cross */}
        <svg className="absolute -right-16 top-1/2 -translate-y-1/2 h-[400px] w-[400px] text-white opacity-[0.04] hidden md:block" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <rect x="35" y="5" width="30" height="90" rx="6" />
          <rect x="5" y="35" width="90" height="30" rx="6" />
        </svg>
        <div className="container-custom relative w-full py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-5xl font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-7xl">
            Votre <span className="text-blue-300">Ambulance</span> à Saint-Louis
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">
            De Saint-Louis à Mulhouse, de l&apos;hôpital du GHRMSA à l&apos;EuroAirport — transport sanitaire 24h/24 aux Trois Frontières.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={SITE_CONFIG.phoneHref} className="relative inline-flex items-center gap-2.5 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(229,62,62,0.4)] transition-all hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(229,62,62,0.5)] hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
              <Phone className="h-6 w-6" aria-hidden="true" />
              Appelez — {SITE_CONFIG.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary hover:border-white">
              Demander un transport
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Ambulance", "VSL", "Taxi Conventionné"].map((s) => (
              <span key={s} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges — counter style with dividers */}
      <section className="bg-white py-10 shadow-sm">
        <div className="container-custom">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-grey-100">
              <div className="flex flex-col items-center gap-2 text-center">
                <Clock className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-heading text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-grey-600">Tous les jours</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <CheckCircle className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-heading text-3xl font-bold text-primary">CPAM</span>
                <span className="text-sm text-grey-600">Conventionné</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-heading text-3xl font-bold text-primary">ARS</span>
                <span className="text-sm text-grey-600">Transport agréé</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Globe className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-heading text-3xl font-bold text-primary">3 pays</span>
                <span className="text-sm text-grey-600">FR · CH · DE</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services — asymmetric layout */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Nos Services de Transport Médical" surtitre="NOS SERVICES" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Ambulance — larger, spans 2 cols on desktop */}
              <div className="group relative overflow-hidden rounded-2xl border border-grey-100 border-l-4 border-l-primary bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-accent md:col-span-2 md:row-span-2 md:p-10">
                <span className="absolute top-4 right-4 hidden font-heading text-7xl font-black text-grey-100 select-none md:block md:text-8xl" aria-hidden="true">01</span>
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                  <Ambulance className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="relative mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Ambulance</h3>
                <p className="relative mb-6 max-w-xl text-lg text-grey-600 leading-relaxed">Transport allongé et semi-allongé avec surveillance médicale. Post-opératoire, transferts inter-hospitaliers entre Saint-Louis et Mulhouse, retours d&apos;hospitalisation. Brancard, oxygène, monitoring à bord.</p>
                <Link href="/services#ambulance" className="relative inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark">
                  En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              {/* VSL */}
              <div className="group relative overflow-hidden rounded-2xl border border-grey-100 border-l-4 border-l-primary bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-accent md:p-8">
                <span className="absolute top-4 right-4 hidden font-heading text-6xl font-black text-grey-100 select-none md:block" aria-hidden="true">02</span>
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                  <Car className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="relative mb-3 font-heading text-xl font-semibold text-dark">VSL</h3>
                <p className="relative mb-6 text-grey-600 leading-relaxed">Transport assis pour dialyse, chimio, consultations à Mulhouse ou Strasbourg. Confortable et climatisé.</p>
                <Link href="/services#vsl" className="relative inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark">
                  En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              {/* Taxi */}
              <div className="group relative overflow-hidden rounded-2xl border border-grey-100 border-l-4 border-l-primary bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-accent md:p-8">
                <span className="absolute top-4 right-4 hidden font-heading text-6xl font-black text-grey-100 select-none md:block" aria-hidden="true">03</span>
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                  <CarTaxiFront className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="relative mb-3 font-heading text-xl font-semibold text-dark">Taxi Conventionné</h3>
                <p className="relative mb-6 text-grey-600 leading-relaxed">Remboursé par la CPAM sur prescription médicale (volet 4 du cerfa). Tiers payant, pas d&apos;avance de frais.</p>
                <Link href="/services#taxi-conventionne" className="relative inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark">
                  En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why us — 2-column asymmetric layout */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Pourquoi Choisir 3F Ambulance ?" surtitre="POURQUOI NOUS" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left: big feature block */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#041E42] to-[#0B60B0] p-10 text-white md:p-12">
                <span className="absolute -right-4 -top-4 font-heading text-[8rem] font-black leading-none text-white/[0.06] select-none" aria-hidden="true">24h</span>
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                    <Zap className="h-7 w-7 text-blue-300" aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 font-heading text-2xl font-bold md:text-3xl">Moins de 30 min</h3>
                  <p className="text-lg text-blue-100/80 leading-relaxed">On intervient en moins de 30 minutes sur tout le secteur des Trois Frontières. Dialyse à 5h30, retour d&apos;hospitalisation à 22h — on répond à toute heure.</p>
                  <div className="mt-6 flex items-center gap-2 text-blue-300">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                    <span className="font-semibold">Disponible 24h/24, 7j/7</span>
                  </div>
                </div>
              </div>
              {/* Right: 3 stacked blocks */}
              <div className="space-y-4">
                {[
                  { icon: HeartPulse, title: "Hôpitaux qu'on connaît", desc: "GHRMSA Saint-Louis, Émile Muller, Diaconat-Roosevelt, HUS Strasbourg, Universitätsspital Basel — on connaît chaque service, chaque accès." },
                  { icon: Users, title: "Ambulanciers diplômés", desc: "Diplômés d'État, formés aux gestes d'urgence. Ils connaissent vos dossiers, vos habitudes, vos horaires de soins." },
                  { icon: MapPin, title: "3 pays, 0 frontière", desc: "Saint-Louis → Mulhouse (30 min), Bâle (15 min), Strasbourg (1h30). France, Suisse, Allemagne — même sérieux." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-5 rounded-2xl border border-grey-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-lg font-semibold text-dark">{item.title}</h3>
                      <p className="text-grey-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Zone — tag cloud with hover effects */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Notre Zone d&apos;Intervention" surtitre="ZONE D'INTERVENTION" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-2.5">
              {COMMUNES_DESSERVIES.slice(0, 15).map((commune) => (
                <span key={commune} className="cursor-default rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:border-primary hover:shadow-md">{commune}</span>
              ))}
            </div>
            <p className="mt-8 text-center text-lg text-grey-600">
              Longue distance : corridor <strong className="text-dark">Strasbourg ↔ Saint-Louis</strong>
            </p>
            <div className="mt-8 text-center">
              <Link href="/zone-intervention" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg">
                Voir toutes les communes <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Ce Que Disent Nos Patients" surtitre="TÉMOIGNAGES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Marie Weber", city: "Saint-Louis", stars: 5, text: "Ambulanciers très professionnels et rassurants. Mon mari a été transporté pour sa dialyse 3 fois par semaine pendant 6 mois — toujours à l'heure, toujours avec le sourire. Merci à toute l'équipe." },
                { name: "Pierre Fischer", city: "Huningue", stars: 5, text: "Transport vers l'Universitätsspital de Bâle pour ma chimio. Ils connaissent parfaitement l'hôpital, m'ont déposé directement devant le bon service. Un vrai soulagement dans un moment difficile." },
                { name: "Françoise Schmitt", city: "Blotzheim", stars: 5, text: "Suite à mon opération du genou à la Clinique Diaconat, retour à domicile en ambulance. Très doux dans les manipulations, véhicule propre et confortable. Je recommande sans hésiter." },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-grey-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="mb-4 text-grey-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-heading font-semibold text-dark">{t.name}</p>
                    <p className="text-sm text-grey-600">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Un transport médical à prévoir ?" subtitle="Appelez-nous maintenant — on s'occupe de tout, de la réservation au retour à domicile." />

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <RevealOnScroll><SectionHeading title="Questions Fréquentes" surtitre="FAQ" /></RevealOnScroll>
          <RevealOnScroll>
            <FAQAccordion items={homeFAQ} />
            <div className="mt-10 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-dark transition-colors">
                Voir toutes les questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <FAQJsonLd items={homeFAQ} />
    </>
  );
}
