import Image from "next/image";
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
      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center bg-gradient-to-br from-[#002B5C] via-[#0057B8] to-[#003DA5] md:min-h-[400px]">
        <div className="container-custom w-full py-20 text-center md:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">Contactez-nous</span>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Contactez 3F Ambulance</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100/80 leading-relaxed">Réservez votre transport médical ou demandez un renseignement. Nous sommes disponibles 24h/24.</p>
        </div>
      </section>

      {/* Urgency banner */}
      <div className="container-custom">
        <div className="relative z-10 -mt-8 mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary-dark to-primary py-8 px-6 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white ring-pulse relative">
            <Phone className="h-7 w-7 text-accent" aria-hidden="true" />
          </div>
          <a href={SITE_CONFIG.phoneHref} className="inline-block font-heading text-4xl font-black text-white transition-opacity hover:opacity-80 md:text-5xl">{SITE_CONFIG.phoneDisplay}</a>
          <p className="mt-2 text-blue-100">Disponible 24h/24, 7j/7 — Urgences &amp; Réservations</p>
        </div>
      </div>

      {/* Form + sidebar */}
      <section className="bg-light section-padding">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Formulaire</span>
                <h2 className="mb-2 font-heading text-2xl font-bold text-dark md:text-3xl">Demandez un transport</h2>
                <div className="mb-4 h-1 w-16 rounded-full bg-primary" />
                <p className="mb-8 text-grey-600 leading-relaxed">Réponse rapide garantie. Pour les urgences, appelez-nous directement.</p>
                <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10"><ContactForm /></div>
              </div>
              {/* Dark info panel */}
              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-2xl bg-[#003DA5] p-8 text-white">
                  <h3 className="mb-6 font-heading text-xl font-semibold">Informations pratiques</h3>
                  <ul className="space-y-6">
                    <li className="border-b border-white/10 pb-6">
                      <a href={SITE_CONFIG.phoneHref} className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent"><Phone className="h-5 w-5" aria-hidden="true" /></div>
                        <div>
                          <p className="text-sm text-blue-200">Téléphone</p>
                          <p className="font-heading text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{SITE_CONFIG.phoneDisplay}</p>
                        </div>
                      </a>
                    </li>
                    <li className="border-b border-white/10 pb-6">
                      <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-green-400"><MessageCircle className="h-5 w-5" aria-hidden="true" /></div>
                        <div>
                          <p className="text-sm text-blue-200">WhatsApp</p>
                          <p className="font-semibold group-hover:text-blue-200 transition-colors">Écrivez-nous sur WhatsApp</p>
                        </div>
                      </a>
                    </li>
                    <li className="border-b border-white/10 pb-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300"><Clock className="h-5 w-5" aria-hidden="true" /></div>
                        <div>
                          <p className="text-sm text-blue-200">Horaires</p>
                          <p className="font-semibold">{SITE_CONFIG.hours}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
                        <div>
                          <p className="text-sm text-blue-200">Zone</p>
                          <p className="font-semibold">{SITE_CONFIG.publicLocation}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* Trust logos */}
                  <div className="mt-8 flex items-center justify-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative h-8 w-20 opacity-60">
                      <Image src="/images/logos/assurance-maladie.png" alt="Assurance Maladie" fill className="object-contain" />
                    </div>
                    <div className="relative h-8 w-20 opacity-60">
                      <Image src="/images/logos/carte-vitale.png" alt="Carte Vitale" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="mb-4 font-heading text-2xl font-bold text-dark">Nous trouver</h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42000!2d7.55!3d47.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b6c4e3e0c5e7%3A0x40a5fb99a3f1b70!2sSaint-Louis%2C+France!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3F Ambulance - Saint-Louis, Haut-Rhin"
            />
          </div>
          <p className="mt-4 text-center text-sm text-grey-600">Zone d&apos;intervention : Saint-Louis et les Trois Frontières</p>
        </div>
      </section>

      <CTABanner title="Préférez le téléphone ?" subtitle="Pour un transport urgent ou une question rapide, un appel c'est plus simple. On décroche 24h/24." />
    </>
  );
}
