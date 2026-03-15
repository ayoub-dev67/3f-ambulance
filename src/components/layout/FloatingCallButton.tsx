"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      title={`Appeler le ${SITE_CONFIG.phoneDisplay}`}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-accent shadow-2xl transition-transform duration-300 hover:scale-110 md:h-auto md:w-auto md:rounded-full md:px-6 md:py-4 ring-pulse"
      aria-label={`Appeler ${SITE_CONFIG.name} au ${SITE_CONFIG.phoneDisplay}`}
    >
      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
      <span className="hidden text-base font-bold text-white md:inline">Appeler</span>
    </a>
  );
}
