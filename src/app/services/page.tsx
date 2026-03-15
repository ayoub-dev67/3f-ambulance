import Link from "next/link";
import Image from "next/image";
import { Ambulance, Car, CarTaxiFront, Route, Globe, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({
  title: "Services Transport Médical | 3F Ambulance Saint-Louis",
  description: "Découvrez nos services de transport médical à Saint-Louis (68) : ambulance, VSL, taxi conventionné, longue distance et transfrontalier. 3F Ambulance — 06 33 81 40 47.",
  path: "/services",
});

interface ServiceSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  situations: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
  reverse?: boolean;
  bgAlt?: boolean;
  isPhoto?: boolean;
}

function ServiceSection({ id, icon, title, description, situations, image, imageAlt, links, reverse, bgAlt, isPhoto = true }: ServiceSectionProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-24 ${bgAlt ? "bg-primary-50" : "bg-white"}`}>
      <div className="container-custom">
        <RevealOnScroll>
          <div className={`grid gap-12 items-center md:grid-cols-2 ${reverse ? "" : ""}`}>
            <div className={`${reverse ? "md:order-2" : ""}`}>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary">{icon}</div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl lg:text-4xl">{title}</h2>
              <p className="mb-8 text-lg text-grey-600 leading-relaxed">{description}</p>
              <div className="mb-8">
                <h3 className="mb-4 font-heading text-lg font-semibold text-dark">Dans quels cas ?</h3>
                <ul className="space-y-3">
                  {situations.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-grey-600 leading-relaxed">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {links && links.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-3">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                      <ArrowRight className="h-4 w-4" /> {link.label}
                    </Link>
                  ))}
                </div>
              )}
              <a href={SITE_CONFIG.phoneHref} className="inline-flex w-fit items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-hover hover:shadow-xl">
                <Phone className="h-5 w-5" />
                Appelez le {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className={`${reverse ? "md:order-1" : ""}`}>
              {isPhoto ? (
                <div className="relative h-[300px] md:h-[350px] overflow-hidden rounded-2xl shadow-lg">
                  <Image src={image} alt={imageAlt} fill className="object-cover" quality={75} />
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl shadow-lg bg-[#F0F6FF]">
                  <Image src={image} alt={imageAlt} width={600} height={400} className="w-full h-auto" quality={75} />
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#002B5C] via-[#0057B8] to-[#003DA5] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Nos services</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Nos Services de Transport Médical
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">
            Ambulance, VSL, taxi conventionné, longue distance et transfrontalier — une solution pour chaque besoin médical.
          </p>
        </div>
      </section>

      <ServiceSection
        id="ambulance"
        icon={<Ambulance className="h-10 w-10" />}
        title="Transport en Ambulance"
        image="/images/ambulance.jpg"
        imageAlt="Ambulance 3F Ambulance — Transport médical Saint-Louis"
        description="L'ambulance, c'est pour les patients qui doivent être allongés ou semi-allongés, ou qui ont besoin d'une surveillance pendant le trajet. Brancard, oxygène, monitoring, matériel de premiers secours — tout est à bord. Nos ambulanciers sont diplômés d'État et formés aux gestes d'urgence. C'est votre médecin qui décide si vous avez besoin d'une ambulance (il le précise sur le volet 4 du cerfa)."
        situations={[
          "Retour à domicile après une opération à la Clinique Diaconat-Roosevelt ou à Émile Muller",
          "Transfert inter-hospitalier : de l'hôpital de Saint-Louis vers le CHU de Mulhouse ou les HUS de Strasbourg",
          "Hospitalisation programmée (chirurgie, pose de prothèse, intervention cardiaque)",
          "Patient sous oxygène ou sous monitoring pendant le trajet",
          "Rapatriement sanitaire depuis l'EuroAirport ou un hôpital éloigné",
          "Transport vers les urgences du GHRMSA (Saint-Louis ou Mulhouse)",
        ]}
        links={[
          { label: "Transport vers l'hôpital de Saint-Louis", href: "/transport/hopital-saint-louis" },
        ]}
      />
      <ServiceSection
        id="vsl"
        icon={<Car className="h-10 w-10" />}
        title="VSL — Véhicule Sanitaire Léger"
        image="/images/vsl.jpg"
        imageAlt="VSL Véhicule Sanitaire Léger — 3F Ambulance"
        description="Le VSL, c'est pour les patients qui peuvent rester assis pendant le trajet. Véhicule confortable et climatisé, conduit par un auxiliaire ambulancier qualifié. C'est le mode de transport le plus courant pour les soins réguliers : dialyse, chimio, consultations de suivi. Pris en charge par l'Assurance Maladie sur prescription médicale."
        situations={[
          "Séances de dialyse au centre de Saint-Louis (16 postes, souvent départ à 5h30) ou à Mulhouse",
          "Chimiothérapie et radiothérapie à l'hôpital Émile Muller ou à l'ICANS de Strasbourg",
          "Consultations spécialisées : cardiologie, oncologie, neurologie à Mulhouse",
          "Examens d'imagerie : IRM et scanner à Mulhouse ou Saint-Louis",
          "Séances de kinésithérapie et rééducation au SSR de Sierentz",
          "Consultations de suivi post-opératoire à la Clinique Diaconat-Roosevelt",
        ]}
        links={[
          { label: "Transport vers l'hôpital Émile Muller", href: "/transport/hopital-emile-muller-mulhouse" },
          { label: "Transport vers la Clinique Diaconat", href: "/transport/clinique-diaconat-mulhouse" },
        ]}
        reverse
        bgAlt
        isPhoto={false}
      />
      <ServiceSection
        id="taxi-conventionne"
        icon={<CarTaxiFront className="h-10 w-10" />}
        title="Taxi Conventionné CPAM"
        image="/images/taxi-medical.jpg"
        imageAlt="Taxi conventionné — Transport médical agréé CPAM"
        description="Le taxi conventionné, c'est la solution pour les patients autonomes qui ont une prescription médicale de transport. Votre médecin remplit le volet 4 du cerfa, et la Sécu rembourse 65 % du trajet (100 % en ALD, accident du travail ou maternité). On pratique le tiers payant : dans la plupart des cas, vous n'avancez rien."
        situations={[
          "Rendez-vous chez un spécialiste à Mulhouse ou Saint-Louis",
          "Consultation à l'hôpital quand vous pouvez marcher et vous asseoir normalement",
          "Retour à domicile après une hospitalisation courte (chirurgie ambulatoire)",
          "Examens de routine : prise de sang, radio, échographie",
          "Patients en ALD qui ont des consultations régulières (prise en charge 100 %)",
          "Transport longue distance vers Strasbourg sur prescription médicale",
        ]}
        isPhoto={false}
      />
      <ServiceSection
        id="longue-distance"
        icon={<Route className="h-10 w-10" />}
        title="Transport Longue Distance"
        image="/images/hopitaux/hopital-strasbourg.jpg"
        imageAlt="Hôpitaux Universitaires de Strasbourg — Transport longue distance 3F Ambulance"
        description="Notre axe longue distance principal, c'est le corridor Saint-Louis ↔ Strasbourg : environ 1h30 de route par l'A35. On le fait tous les jours pour des patients suivis aux HUS — Hautepierre, Nouvel Hôpital Civil, ICANS (cancérologie). On assure aussi les trajets vers Colmar, Belfort, Besançon et toute destination en France. Nos véhicules sont équipés pour que le trajet soit confortable même sur les longues distances."
        situations={[
          "Consultations aux HUS de Strasbourg : Hautepierre, Nouvel Hôpital Civil, ICANS",
          "Transfert inter-hospitalier depuis le GHRMSA vers un CHU spécialisé",
          "Aller-retour dans la journée pour une consultation à Strasbourg (on attend ou on revient vous chercher)",
          "Transport vers un centre de rééducation : Colmar, Belfort, Besançon",
          "Rapatriement sanitaire depuis un hôpital éloigné vers Saint-Louis ou Mulhouse",
          "Tout trajet longue distance en France métropolitaine sur prescription médicale",
        ]}
        links={[
          { label: "Transport vers les hôpitaux de Strasbourg", href: "/transport/hopital-strasbourg" },
        ]}
        reverse
        bgAlt
      />
      <ServiceSection
        id="transfrontalier"
        icon={<Globe className="h-10 w-10" />}
        title="Transport Transfrontalier"
        image="/images/hopitaux/euroairport-bale-mulhouse.jpg"
        imageAlt="EuroAirport Bâle-Mulhouse — Transport transfrontalier 3F Ambulance"
        description="On est aux Trois Frontières — Bâle est à 15 minutes, Lörrach à 10 minutes, Freiburg à 45 minutes. Le transport transfrontalier, c'est notre quotidien. Beaucoup de patients de la région sont suivis à l'Universitätsspital de Bâle pour des spécialités pointues. On connaît les procédures, les accès hospitaliers, et on se coordonne avec les établissements étrangers."
        situations={[
          "Transport vers l'Universitätsspital Basel — à 15 min de Saint-Louis, c'est l'hôpital universitaire le plus proche",
          "Transport vers les hôpitaux de Lörrach (St. Elisabethen-Krankenhaus) à 10 min",
          "Transport vers le Universitätsklinikum Freiburg pour les spécialités de pointe",
          "Transferts depuis et vers l'EuroAirport Bâle-Mulhouse (sur notre commune, à 5 min)",
          "Rapatriement sanitaire international — coordination avec les sociétés d'assistance",
          "Travailleurs frontaliers ayant besoin d'un transport vers un hôpital suisse ou allemand",
        ]}
        links={[
          { label: "Transport via l'EuroAirport", href: "/transport/euroairport-bale-mulhouse" },
        ]}
      />

      <CTABanner title="Besoin d'un de ces services ?" subtitle="Un appel suffit — on vous explique quel transport correspond à votre situation et on organise la prise en charge." />

      <ServiceJsonLd services={[
        { name: "Transport en Ambulance", description: "Transport médical allongé et semi-allongé avec surveillance à Saint-Louis et Trois Frontières" },
        { name: "VSL - Véhicule Sanitaire Léger", description: "Transport médical assis pour consultations et examens à Saint-Louis et Trois Frontières" },
        { name: "Taxi Conventionné CPAM", description: "Transport médical conventionné Assurance Maladie à Saint-Louis et Trois Frontières" },
        { name: "Transport Longue Distance", description: "Transport sanitaire longue distance corridor Strasbourg Saint-Louis" },
        { name: "Transport Transfrontalier", description: "Transport sanitaire international vers Suisse (Bâle) et Allemagne (Lörrach, Freiburg)" },
      ]} />
    </>
  );
}
