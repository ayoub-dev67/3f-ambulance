import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-50">
      <div className="text-center px-4">
        <p className="text-8xl font-black text-primary/20">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-dark">Page introuvable</h1>
        <p className="mt-2 text-grey-600">La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark">
            Retour à l&apos;accueil
          </Link>
          <a href={SITE_CONFIG.phoneHref} className="font-medium text-primary underline transition-colors hover:text-primary-dark">
            Appelez-nous
          </a>
        </div>
      </div>
    </div>
  );
}
