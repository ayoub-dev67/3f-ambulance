import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ui/ContactForm";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = generatePageMetadata({
  title: "Contact 3F Ambulance Saint-Louis | Réservez votre Transport Médical",
  description: "Contactez 3F Ambulance à Saint-Louis (68) pour réserver votre transport médical. Ambulance, VSL, taxi conventionné. Disponible 24h/24. Appelez le 06 33 81 40 47.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero with badge */}
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#041E42] via-[#0B60B0] to-[#084B8A] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Contactez-nous</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Contactez 3F Ambulance</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">Réservez votre transport médical ou demandez un renseignement. Nous sommes disponibles 24h/24.</p>
        </div>
      </section>

      {/* Phone banner */}
      <section className="bg-white py-10 shadow-sm">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl rounded-2xl bg-primary-light px-8 py-6 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white ring-pulse relative">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <a href={SITE_CONFIG.phoneHref} className="inline-block font-heading text-4xl font-black text-dark transition-colors hover:text-primary md:text-5xl">{SITE_CONFIG.phoneDisplay}</a>
              <p className="mt-2 text-grey-600">Disponible 24h/24, 7j/7 — y compris week-ends et jours fériés</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Form + sidebar on grey background */}
      <section className="bg-light section-padding">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Formulaire</span>
                <h2 className="mb-2 font-heading text-2xl font-bold text-dark md:text-3xl">Demander un transport</h2>
                <div className="mb-4 h-1 w-16 rounded-full bg-primary" />
                <p className="mb-8 text-grey-600 leading-relaxed">Pas besoin de tout savoir avant de nous contacter. Indiquez-nous le minimum — on vous rappelle pour organiser le reste. Si c&apos;est urgent, appelez directement : c&apos;est plus rapide qu&apos;un formulaire.</p>
                <div className="rounded-2xl bg-white p-8 shadow-xl"><ContactForm /></div>
              </div>
              {/* Dark info panel */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-[#084B8A] p-8 text-white">
                  <h3 className="mb-6 font-heading text-xl font-semibold">Informations pratiques</h3>
                  <ul className="space-y-5">
                    <li>
                      <a href={SITE_CONFIG.phoneHref} className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent"><Phone className="h-5 w-5" aria-hidden="true" /></div>
                        <div>
                          <p className="text-sm text-blue-200">Téléphone</p>
                          <p className="font-heading text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{SITE_CONFIG.phoneDisplay}</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300"><Clock className="h-5 w-5" aria-hidden="true" /></div>
                      <div>
                        <p className="text-sm text-blue-200">Horaires</p>
                        <p className="font-semibold">{SITE_CONFIG.hours}</p>
                        <p className="text-sm text-blue-200">Y compris week-ends et jours fériés</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                      <div>
                        <p className="text-sm text-blue-200">Zone d&apos;intervention</p>
                        <p className="font-semibold">{SITE_CONFIG.publicLocation}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-success/30 bg-success/5 p-8 transition-all hover:bg-success/10 hover:shadow-lg">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-success/20 text-success"><MessageCircle className="h-6 w-6" aria-hidden="true" /></div>
                  <div>
                    <p className="font-heading text-lg font-bold text-dark">WhatsApp</p>
                    <p className="text-grey-600">Écrivez-nous sur WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Préférez le téléphone ?" subtitle="Pour un transport urgent ou une question rapide, un appel c'est plus simple. On décroche 24h/24." />
    </>
  );
}
