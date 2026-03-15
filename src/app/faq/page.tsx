import { faqItems } from "@/data/faq";
import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({
  title: "FAQ Transport Ambulance Saint-Louis (68) | 3F Ambulance",
  description: "Retrouvez les réponses à vos questions sur le transport médical à Saint-Louis (68). Ambulance, VSL, taxi conventionné, prise en charge CPAM. 3F Ambulance — 06 33 81 40 47.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">FAQ</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Questions Fréquentes</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">Retrouvez les réponses aux questions les plus courantes sur nos services de transport médical.</p>
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
