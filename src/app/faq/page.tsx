import { faqItems } from "@/data/faq";
import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({
  title: "FAQ Transport Médical | 3F Ambulance Alsace",
  description: "Réponses à vos questions sur le transport médical : remboursement CPAM, prescription, ambulance vs VSL, zone d'intervention en Alsace. 3F Ambulance — 06 33 81 40 47.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary-50 border-b border-grey-100 py-16 md:py-20">
        <div className="container-custom text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h1 className="font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">Questions Fréquentes</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-600 leading-relaxed">Tout ce qu&apos;il faut savoir sur le transport médical, le remboursement et nos services.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <RevealOnScroll><SectionHeading title="Tout savoir sur le transport médical" subtitle="Vous avez une question ? Vous trouverez probablement la réponse ci-dessous." /></RevealOnScroll>
          <RevealOnScroll><FAQAccordion items={faqItems} /></RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Vous avez une autre question ?" subtitle="Appelez-nous, nous vous répondrons avec plaisir" />
      <FAQJsonLd items={faqItems} />
    </>
  );
}
