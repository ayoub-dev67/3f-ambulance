import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci — 3F Ambulance",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-primary-50 px-4">
      <div className="mx-auto max-w-lg text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-success" aria-hidden="true" />
        <h1 className="mt-6 font-heading text-3xl font-bold text-dark">Merci pour votre demande !</h1>
        <p className="mt-4 text-lg text-grey-600">Nous avons bien reçu votre demande de transport. Notre équipe vous recontactera dans les plus brefs délais.</p>
        <p className="mt-4 text-grey-600">Pour les urgences, appelez-nous directement :</p>
        <a href={SITE_CONFIG.phoneHref} className="mt-4 inline-block font-heading text-2xl font-bold text-primary transition-colors hover:text-primary-dark">
          {SITE_CONFIG.phoneDisplay}
        </a>
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
