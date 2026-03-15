"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days: number) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleChoice(value: "accepted" | "refused") {
    setCookie("cookie-consent", value, 365);
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[60] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${closing ? "translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 md:flex-row md:justify-between">
        <p className="text-sm text-grey-600 text-center md:text-left">
          Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. En continuant votre navigation, vous acceptez leur utilisation.{" "}
          <Link href="/mentions-legales" className="text-primary underline">En savoir plus</Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button type="button" onClick={() => handleChoice("refused")} className="rounded-full bg-grey-100 px-6 py-2 text-sm font-medium text-grey-600 transition hover:bg-gray-200">
            Refuser
          </button>
          <button type="button" onClick={() => handleChoice("accepted")} className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary-dark">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
