import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, MapPin, Cross, Ambulance, MessageCircle, Siren } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const FOOTER_LOGOS = [
  { src: "/images/logos/etoile-de-vie.png", alt: "Étoile de Vie" },
  { src: "/images/logos/assurance-maladie.png", alt: "Assurance Maladie" },
  { src: "/images/logos/carte-vitale.png", alt: "Carte Vitale" },
  { src: "/images/logos/ars-grand-est.png", alt: "ARS Grand Est" },
  { src: "/images/logos/taxi-conventionne.jpg", alt: "Taxi Conventionné CPAM" },
];

export default function Footer() {
  return (
    <>
      {/* Pre-footer */}
      <section className="bg-white py-12 border-t border-grey-100">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-4 rounded-2xl border border-grey-100 p-6 transition-all hover:shadow-lg hover:border-primary/30 group">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-grey-600">Appelez-nous</p>
                <p className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors">{SITE_CONFIG.phoneDisplay}</p>
              </div>
            </a>
            <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-grey-100 p-6 transition-all hover:shadow-lg hover:border-success/30 group">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-grey-600">WhatsApp</p>
                <p className="font-heading text-lg font-bold text-dark group-hover:text-success transition-colors">Écrivez-nous</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-grey-100 p-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Siren className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-grey-600">Urgences</p>
                <p className="font-heading text-lg font-bold text-dark">24h/24 — 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-dark to-[#111827]">
        <div className="footer-separator" />
        <div className="container-custom py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div>
              <div className="mb-5 flex items-center gap-1">
                <span className="font-heading text-2xl font-black text-primary">3F</span>
                <Cross className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="font-heading text-lg font-light tracking-wide text-white">AMBULANCE</span>
                <Ambulance className="ml-2 h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                {SITE_CONFIG.tagline}. Ambulance, VSL et taxi conventionné disponibles {SITE_CONFIG.hours}.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Navigation
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Nos Services
              </h3>
              <ul className="space-y-3">
                {SITE_CONFIG.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services#${service.slug}`} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li><Link href="/services#longue-distance" className="text-sm text-gray-400 transition-colors hover:text-white">Transport Longue Distance</Link></li>
                <li><Link href="/services#transfrontalier" className="text-sm text-gray-400 transition-colors hover:text-white">Transport Transfrontalier</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-3 text-xl font-bold text-white transition-colors hover:text-primary">
                    <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {SITE_CONFIG.hours}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {SITE_CONFIG.publicLocation}
                </li>
              </ul>
            </div>
          </div>

          {/* Trust logos */}
          <div className="mt-12 border-t border-white/10 pt-6 pb-4">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {FOOTER_LOGOS.map((logo) => (
                <div key={logo.src} className="relative h-6 w-16 opacity-30 grayscale">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Tous droits réservés.{" "}
              <Link href="/mentions-legales" className="underline transition-colors hover:text-white">
                Mentions légales
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
