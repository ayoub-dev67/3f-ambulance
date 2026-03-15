import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Besoin d\u2019un transport médical ?",
  subtitle = "Appelez 3F Ambulance — nous intervenons 24h/24, 7j/7 sur Saint-Louis et les Trois Frontières.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#002B5C] to-[#0057B8] py-16 md:py-20">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] dot-pattern" />
      {/* Decorative cross */}
      <svg className="absolute -right-10 top-1/2 -translate-y-1/2 h-64 w-64 text-white opacity-[0.05]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        <rect x="35" y="10" width="30" height="80" rx="4" />
        <rect x="10" y="35" width="80" height="30" rx="4" />
      </svg>
      <div className="container-custom relative">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-blue-100/80">{subtitle}</p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={SITE_CONFIG.phoneHref}
              className="relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(229,62,62,0.4)] transition-all hover:bg-accent-hover hover:scale-105 ring-pulse"
              aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
