import { Phone, ArrowRight, Clock, Ambulance, Car, CarTaxiFront, Zap, HeartPulse, Users, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FAQJsonLd, OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/faq";

const homeFAQ = faqItems.slice(0, 4);

const TRUST_LOGOS = [
  { src: "/images/logos/etoile-de-vie.png", alt: "Étoile de Vie — Ambulanciers diplômés d'État" },
  { src: "/images/logos/assurance-maladie.png", alt: "Assurance Maladie — Conventionné Sécurité Sociale" },
  { src: "/images/logos/carte-vitale.png", alt: "Carte Vitale — Tiers payant accepté" },
  { src: "/images/logos/ars-grand-est.png", alt: "ARS Grand Est — Agréé Agence Régionale de Santé" },
  { src: "/images/logos/taxi-conventionne.jpg", alt: "Taxi Conventionné CPAM" },
];

const HOME_SERVICES = [
  {
    image: "/images/ambulance.jpg",
    alt: "Ambulance 3F Ambulance — Transport médical Saint-Louis",
    icon: Ambulance,
    title: "Ambulance",
    desc: "Transport allongé et semi-allongé avec surveillance médicale. Brancard, oxygène, monitoring à bord.",
    href: "/services#ambulance",
    isPhoto: true,
  },
  {
    image: "/images/vsl.jpg",
    alt: "VSL Véhicule Sanitaire Léger — 3F Ambulance",
    icon: Car,
    title: "VSL",
    desc: "Transport assis pour dialyse, chimio, consultations à Mulhouse ou Strasbourg. Confortable et climatisé.",
    href: "/services#vsl",
    isPhoto: false,
  },
  {
    image: "/images/taxi-medical.jpg",
    alt: "Taxi conventionné — Transport médical agréé CPAM",
    icon: CarTaxiFront,
    title: "Taxi Conventionné",
    desc: "Remboursé par la CPAM sur prescription médicale (volet 4 du cerfa). Tiers payant, pas d\u2019avance de frais.",
    href: "/services#taxi-conventionne",
    isPhoto: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden md:min-h-[85vh]">
        <Image
          src="/images/ambulance.jpg"
          alt="Ambulance 3F Ambulance — Transport médical Saint-Louis"
          fill
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C]/95 via-[#003DA5]/85 to-[#0057B8]/80 z-10" />
        {/* ECG heartbeat SVG pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.07] z-20" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,100 L200,100 L220,100 L240,20 L260,180 L280,60 L300,140 L320,100 L500,100 L520,100 L540,20 L560,180 L580,60 L600,140 L620,100 L800,100 L820,100 L840,20 L860,180 L880,60 L900,140 L920,100 L1200,100" fill="none" stroke="white" strokeWidth="3" className="ecg-line" />
        </svg>
        {/* Decorative large cross */}
        <svg className="absolute -right-16 top-1/2 -translate-y-1/2 h-[400px] w-[400px] text-white opacity-[0.04] hidden md:block z-20" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <rect x="35" y="5" width="30" height="90" rx="6" />
          <rect x="5" y="35" width="90" height="30" rx="6" />
        </svg>
        <div className="container-custom relative z-30 flex w-full flex-col items-center justify-center py-20 text-center md:py-28">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"><Ambulance className="h-4 w-4" aria-hidden="true" /> Transport Médical aux Trois Frontières</span>
          <h1 className="mx-auto max-w-5xl font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Votre Ambulance à<br /><span className="text-blue-200">Saint-Louis</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/80 leading-relaxed md:text-xl">
            De Saint-Louis à Mulhouse, de l&apos;hôpital GHRMSA à Strasbourg — transport médical professionnel 24h/24, 7j/7.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={SITE_CONFIG.phoneHref} className="relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(229,62,62,0.3)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_60px_rgba(229,62,62,0.5)] hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
              <Phone className="h-6 w-6" aria-hidden="true" />
              Appeler le {SITE_CONFIG.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-primary">
              Demander un transport
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Ambulance, label: "Ambulance" },
              { icon: Car, label: "VSL" },
              { icon: CarTaxiFront, label: "Taxi Conventionné" },
            ].map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur-sm"><s.icon className="h-4 w-4" aria-hidden="true" />{s.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust logos bandeau */}
      <section className="bg-white py-10 border-y border-grey-100">
        <div className="container-custom">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-grey-500">Agréments &amp; Conventionnements</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.src} className="relative h-14 w-28 md:h-16 md:w-32 transition-transform duration-300 hover:scale-105">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with images */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Nos Services de Transport Médical" surtitre="NOS SERVICES" /></RevealOnScroll>
          <RevealOnScroll>
            <div className="grid gap-6 md:grid-cols-3">
              {HOME_SERVICES.map((s) => (
                <div key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`relative h-44 w-full ${s.isPhoto ? "" : "bg-[#F0F6FF] p-2"}`}>
                    <Image src={s.image} alt={s.alt} fill className={`${s.isPhoto ? "object-cover" : "object-contain"} transition-transform duration-300 group-hover:scale-105`} quality={75} />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-dark">{s.title}</h3>
                    <p className="mb-6 text-grey-600 leading-relaxed">{s.desc}</p>
                    <Link href={s.href} className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark">
                      En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-dark hover:underline transition-colors">
                Découvrir tous nos services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
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
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#002B5C] to-[#0057B8] p-10 text-white md:p-12">
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
                  { icon: HeartPulse, title: "Hôpitaux qu\u2019on connaît", desc: "GHRMSA Saint-Louis, Émile Muller, Diaconat-Roosevelt, HUS Strasbourg, Universitätsspital Basel — on connaît chaque service, chaque accès." },
                  { icon: Users, title: "Ambulanciers diplômés", desc: "Diplômés d\u2019État, formés aux gestes d\u2019urgence. Ils connaissent vos dossiers, vos habitudes, vos horaires de soins." },
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

      {/* Zone — image cards */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Notre Zone d&apos;Intervention" surtitre="ZONE D'INTERVENTION" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { name: "Saint-Louis", image: "/images/villes/saint-louis.jpg", desc: "Notre base — intervention immédiate", distance: "Base", slug: "saint-louis" },
                { name: "Mulhouse", image: "/images/villes/mulhouse.jpg", desc: "3 hôpitaux, liaison quotidienne", distance: "30 min", slug: "mulhouse" },
                { name: "Blotzheim", image: "/images/villes/blotzheim.jpg", desc: "EuroAirport à 5 minutes", distance: "6 km", slug: "blotzheim" },
                { name: "Huningue", image: "/images/villes/huningue.jpg", desc: "Frontière suisse, accès Bâle", distance: "3 km", slug: "huningue" },
              ].map((v) => (
                <Link key={v.name} href={`/ambulance/${v.slug}`} className="group overflow-hidden rounded-2xl border border-grey-100 bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-32 md:h-40">
                    <Image src={v.image} alt={`Vue de ${v.name} — Ambulance 3F Ambulance`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" quality={75} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <span className="absolute bottom-2 left-3 font-heading text-lg font-bold text-white md:text-xl">{v.name}</span>
                    <span className="absolute top-2 right-2 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">{v.distance}</span>
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="text-sm text-grey-600">{v.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-8 text-center text-grey-600">Et plus de 30 communes desservies dans les Trois Frontières</p>
            <div className="mt-4 text-center">
              <Link href="/zone-intervention" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg">
                Voir notre zone d&apos;intervention <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Ce Que Disent Nos Patients" surtitre="TÉMOIGNAGES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Marie Weber", city: "Saint-Louis", stars: 5, text: "Ambulanciers très professionnels et rassurants. Mon mari a été transporté pour sa dialyse 3 fois par semaine pendant 6 mois — toujours à l\u2019heure, toujours avec le sourire. Merci à toute l\u2019équipe." },
                { name: "Pierre Fischer", city: "Huningue", stars: 5, text: "Transport vers l\u2019Universitätsspital de Bâle pour ma chimio. Ils connaissent parfaitement l\u2019hôpital, m\u2019ont déposé directement devant le bon service. Un vrai soulagement dans un moment difficile." },
                { name: "Françoise Schmitt", city: "Blotzheim", stars: 5, text: "Suite à mon opération du genou à la Clinique Diaconat, retour à domicile en ambulance. Très doux dans les manipulations, véhicule propre et confortable. Je recommande sans hésiter." },
              ].map((t) => (
                <div key={t.name} className="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <span className="absolute -top-2 left-6 font-serif text-6xl text-primary/10 select-none leading-none" aria-hidden="true">&ldquo;</span>
                  <div className="relative">
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="mb-6 text-grey-800 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                    <div className="border-t border-grey-100 pt-4">
                      <p className="font-heading font-semibold text-dark">{t.name}</p>
                      <p className="text-sm text-grey-600">{t.city}</p>
                    </div>
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
