import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Mentions Légales | 3F Ambulance Saint-Louis (68)",
  description: "Mentions légales de 3F Ambulance. Raison sociale, siège, hébergeur, politique de confidentialité et gestion des cookies. Transport médical Saint-Louis (68).",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="mb-4 font-heading text-4xl font-bold text-dark md:text-5xl">Mentions Légales</h1>
        <div className="mb-12 h-1 w-16 rounded-full bg-primary" />
        <div className="space-y-10 text-lg text-grey-600 leading-relaxed">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Éditeur du site</h2>
            <ul className="space-y-2">
              <li><strong className="text-grey-800">Raison sociale :</strong> {SITE_CONFIG.fullName}</li>
              <li><strong className="text-grey-800">Adresse :</strong> {SITE_CONFIG.legalAddress.street}, {SITE_CONFIG.legalAddress.zip} {SITE_CONFIG.legalAddress.city}</li>
              <li><strong className="text-grey-800">Téléphone :</strong> <a href={SITE_CONFIG.phoneHref} className="text-primary hover:text-primary-dark transition-colors">{SITE_CONFIG.phoneDisplay}</a></li>
              <li><strong className="text-grey-800">SIRET :</strong> En cours d&apos;immatriculation</li>
              <li><strong className="text-grey-800">Activité :</strong> Transport sanitaire — Ambulance, VSL, Taxi Conventionné</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Hébergeur</h2>
            <ul className="space-y-2">
              <li><strong className="text-grey-800">Nom :</strong> Vercel Inc.</li>
              <li><strong className="text-grey-800">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong className="text-grey-800">Site web :</strong> vercel.com</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de {SITE_CONFIG.fullName}, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l&apos;autorisation écrite préalable de {SITE_CONFIG.fullName}.</p>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Politique de confidentialité</h2>
            <h3 className="mb-3 font-heading text-xl font-semibold text-dark">Collecte des données</h3>
            <p className="mb-5">Les données personnelles collectées via le formulaire de contact (nom, téléphone, email, informations de transport) sont utilisées uniquement dans le cadre du traitement de votre demande de transport médical. Ces données ne sont en aucun cas cédées, vendues ou partagées avec des tiers.</p>
            <h3 className="mb-3 font-heading text-xl font-semibold text-dark">Durée de conservation</h3>
            <p className="mb-5">Les données collectées sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec {SITE_CONFIG.fullName}, conformément à la réglementation en vigueur.</p>
            <h3 className="mb-3 font-heading text-xl font-semibold text-dark">Vos droits</h3>
            <p className="mb-5">Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous au <a href={SITE_CONFIG.phoneHref} className="text-primary hover:text-primary-dark transition-colors">{SITE_CONFIG.phoneDisplay}</a>.</p>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Cookies</h2>
            <p>Ce site est susceptible d&apos;utiliser des cookies à des fins de mesure d&apos;audience (Google Analytics). Ces cookies permettent de collecter des informations anonymes sur la navigation des visiteurs. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">Limitation de responsabilité</h2>
            <p>{SITE_CONFIG.fullName} s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour des informations présentes sur ce site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
