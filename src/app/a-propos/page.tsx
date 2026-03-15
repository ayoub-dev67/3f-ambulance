import { Zap, Shield, Heart, Users, Ambulance, Car, CarTaxiFront, Award, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = generatePageMetadata({
  title: "À Propos de 3F Ambulance | Ambulancier Saint-Louis Trois Frontières",
  description: "Découvrez 3F Ambulance, votre ambulancier de confiance à Saint-Louis (68) aux Trois Frontières. Transport médical professionnel 24h/24. Appelez le 06 33 81 40 47.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <>
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Qui sommes-nous</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Votre Ambulancier de Confiance aux Trois Frontières
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">
            Transport médical professionnel à Saint-Louis et dans toute la zone des Trois Frontières.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title="Qui Sommes-Nous ?" surtitre="NOTRE HISTOIRE" />
            <div className="mx-auto max-w-3xl space-y-5 text-lg text-grey-600 leading-relaxed">
              <p><strong className="text-dark">3F Ambulance</strong> (Trois Frontières Ambulance) est une entreprise de transport sanitaire basée à <strong className="text-dark">Saint-Louis</strong>, dans le Haut-Rhin (68). On est au cœur de la zone des Trois Frontières — là où la France, la Suisse et l&apos;Allemagne se touchent. Bâle est à 15 minutes, Mulhouse à 30 minutes, l&apos;EuroAirport est sur notre commune.</p>
              <p>Au quotidien, on transporte des patients vers l&apos;hôpital de Saint-Louis (GHRMSA), vers l&apos;hôpital Émile Muller et la Clinique Diaconat-Roosevelt à Mulhouse, vers l&apos;Universitätsspital de Bâle, et sur le corridor longue distance vers les HUS de Strasbourg (Hautepierre, NHC, ICANS). Ambulances, VSL, taxis conventionnés — on adapte le véhicule à la situation médicale du patient.</p>
              <p>Disponibles <strong className="text-dark">24 heures sur 24, 7 jours sur 7</strong>. Dialyse à 5h30 du matin, retour d&apos;hospitalisation à 22h, rapatriement sanitaire un dimanche — on répond à toute heure.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-primary-50 section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll>
            <SectionHeading title="Notre Mission" surtitre="NOTRE MISSION" />
            <p className="mx-auto max-w-3xl text-center text-lg text-grey-600 leading-relaxed">
              Le transport sanitaire, ce n&apos;est pas juste un trajet d&apos;un point A à un point B. C&apos;est un maillon du parcours de soins — entre le domicile et l&apos;hôpital, entre deux établissements, entre une opération et la convalescence. Notre mission : que ce moment se passe dans les meilleures conditions possibles. Avec <strong className="text-dark">ponctualité</strong> (on sait que le patient en dialyse ne peut pas arriver en retard), <strong className="text-dark">bienveillance</strong> (un mot rassurant avant une chimio, ça compte) et <strong className="text-dark">professionnalisme</strong> (on connaît les protocoles, les accès, les procédures).
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Nos Valeurs" surtitre="NOS VALEURS" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Zap, title: "Réactivité", desc: "Nous intervenons rapidement, de jour comme de nuit, pour répondre à vos besoins de transport médical dans les meilleurs délais." },
                { icon: Shield, title: "Sécurité", desc: "La sécurité de nos patients est notre priorité absolue. Nos véhicules sont entretenus rigoureusement et nos équipements sont aux normes." },
                { icon: Heart, title: "Confort", desc: "Nous veillons au confort de chaque patient pendant le transport, avec des véhicules climatisés et un accompagnement attentionné." },
                { icon: Users, title: "Humanité", desc: "Nos ambulanciers sont à l'écoute, bienveillants et respectueux. Nous traitons chaque patient avec dignité et empathie." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-grey-100 border-t-4 border-t-primary bg-white p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary"><v.icon className="h-7 w-7" /></div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-dark">{v.title}</h3>
                  <p className="text-grey-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <RevealOnScroll><SectionHeading title="Notre Flotte de Véhicules" surtitre="NOS VÉHICULES" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Ambulance, title: "Ambulances", desc: "Véhicules médicalisés équipés de brancards, oxygène, matériel de monitoring et de premiers secours. Pour le transport allongé et semi-allongé avec surveillance médicale." },
                { icon: Car, title: "VSL", desc: "Véhicules Sanitaires Légers confortables et climatisés, adaptés au transport assis. Idéals pour les consultations régulières, examens et séances de soins." },
                { icon: CarTaxiFront, title: "Taxis Conventionnés", desc: "Véhicules conventionnés par la CPAM pour le transport de patients autonomes. Prise en charge par l'Assurance Maladie sur prescription médicale." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-grey-100 bg-white p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-light text-primary"><v.icon className="h-10 w-10" /></div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-dark">{v.title}</h3>
                  <p className="text-grey-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll><SectionHeading title="Notre Engagement Qualité" surtitre="QUALITÉ" /></RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="space-y-5">
              {[
                { icon: Award, title: "Ambulanciers Diplômés d'État", desc: "Tous nos ambulanciers sont titulaires du Diplôme d'État d'Ambulancier (DEA) et formés aux gestes de premiers secours." },
                { icon: Shield, title: "Véhicules aux Normes", desc: "Notre flotte est régulièrement entretenue et contrôlée. Chaque véhicule répond aux normes sanitaires en vigueur." },
                { icon: CheckCircle, title: "Conventionné CPAM", desc: "Nous sommes conventionnés par la Caisse Primaire d'Assurance Maladie pour la prise en charge de vos transports médicaux." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 rounded-2xl border border-grey-100 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary"><item.icon className="h-7 w-7" /></div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold text-dark">{item.title}</h3>
                    <p className="text-lg text-grey-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Faites connaissance avec nous sur la route" subtitle="Le meilleur moyen de nous connaître, c'est de nous appeler. On vous écoute et on organise votre transport." />
    </>
  );
}
