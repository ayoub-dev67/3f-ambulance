"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/33633814047?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20transport%20m%C3%A9dical.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] shadow-lg transition-all hover:bg-[#20BD5A] hover:shadow-xl md:h-auto md:w-auto md:px-5 md:py-3 animate-bounce-once"
    >
      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
      <span className="hidden text-base font-medium text-white md:inline">WhatsApp</span>
    </a>
  );
}
