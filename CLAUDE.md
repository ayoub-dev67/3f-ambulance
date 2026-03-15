# 3F AMBULANCE — Site Web Médical & SEO Local

## Contexte Projet

**Client :** 3F AMBULANCE (Trois Frontières Ambulance)
**Localisation affichée :** Saint-Louis, Haut-Rhin (68) — Trois Frontières
**Pack :** Croissance (15-25 pages avec pages villes + hôpitaux)
**Domaine :** 3f-ambulance.fr
**Téléphone :** 06 33 81 40 47
**Adresse légale (mentions légales UNIQUEMENT) :** 9 Allée de la Hardt, 68440 Dietwiller
**Activité :** Transport sanitaire — Ambulance, VSL, Taxi Conventionné
**Services confirmés :** Ambulance (allongé/semi-allongé), VSL (transport assis), Taxi Conventionné CPAM

### Positionnement SEO
Zone des Trois Frontières (France / Suisse / Allemagne), basé à Saint-Louis 68.
Axe longue distance stratégique : **corridor Strasbourg ↔ Saint-Louis** (et inversement).
Concurrence locale quasi nulle (aucun concurrent direct n'a de site web).
Objectif : première position Google sur "ambulance saint-louis" et variantes.

### Ce qu'on NE met PAS sur le site (sauf mentions légales)
- Adresse physique Dietwiller → mentions légales uniquement
- Numéro d'agrément ARS → pas disponible pour l'instant
- SIRET → mentions légales uniquement quand reçu

---

## Stack Technique

- **Framework :** Next.js 14+ (App Router)
- **Langage :** TypeScript strict
- **Styling :** Tailwind CSS
- **Hébergement :** Vercel
- **Domaine :** OVH (3f-ambulance.fr) — à configurer plus tard
- **Emails :** Resend + React Email — à configurer plus tard avec le domaine
- **Analytics :** Google Analytics 4 + Google Search Console — post-launch
- **Icons :** Lucide React
- **Fonts :** Google Fonts — Inter (body) + Poppins (headings)

---

## Design & Thème

### Direction artistique : MÉDICAL / PROFESSIONNEL / CONFIANCE

Le site DOIT immédiatement évoquer le secteur médical et le transport sanitaire.
Le client veut un design qui fait "médical, transport médical" — pas un site générique.
Thème : **BLEU et BLANC** médical, propre, rassurant, professionnel.

### Palette de couleurs

```
--primary:         #0057B8   (Bleu Étoile de Vie — headers, boutons principaux, liens)
--primary-dark:    #003DA5   (Bleu Assurance Maladie — hover, footer, hero overlay)
--primary-light:   #E8F1FB   (Bleu très clair — backgrounds sections alternées)
--primary-50:      #F0F6FF   (Bleu ultra-léger — subtle backgrounds)
--accent:          #E53E3E   (Rouge urgence — bouton appel, CTA urgents)
--accent-hover:    #C53030   (Rouge foncé — hover sur CTA)
--success:         #38A169   (Vert — badges de confiance, validations)
--white:           #FFFFFF   (Fond principal)
--light:           #F7FAFC   (Background sections alternées)
--grey-100:        #EDF2F7   (Bordures, séparateurs)
--grey-500:        #718096   (Texte secondaire)
--grey-800:        #2D3748   (Texte principal body)
--dark:            #1A202C   (Texte titres, navbar, footer)
```

**IMPORTANT :** Le site est majoritairement BLANC avec des accents BLEU. Pas de fond bleu partout.
Les sections alternent entre fond blanc et fond bleu très clair (#E3F2FD ou #F0F7FF).
Le hero a un overlay bleu foncé semi-transparent sur un fond dégradé.

### Éléments visuels médicaux
- **Icônes médicales partout** : croix médicale, ambulance, stéthoscope, cœur/ECG, brancard, horloge 24h, bouclier (sécurité)
- **Motif subtil ECG** : une ligne de cardiogramme en arrière-plan du hero, très discrète en opacité basse
- **Croix médicale** : intégrée dans le logo "3F" ou comme élément décoratif
- **Badges de confiance** : "Agréé ARS", "24h/24 7j/7", "Conventionné CPAM", "3 Frontières"
- **Photos** : PAS DE PHOTOS pour l'instant → utiliser des illustrations SVG médicales ou des icônes grandes taille en placeholder. Pas d'images stock. On ajoutera les vraies photos du client plus tard.

### Style des composants
- Coins arrondis : `rounded-2xl` sur cartes, `rounded-full` sur badges et boutons CTA
- Ombres douces : `shadow-sm` par défaut, `shadow-lg` au hover
- Navbar : fond blanc, sticky, `shadow-sm` au scroll, logo à gauche, bouton appel rouge à droite
- Bouton d'appel flottant : fixe en bas à droite, rouge (#E53E3E), animation pulse, icône téléphone, toujours visible
- Animations : fade-in au scroll, transitions douces (300ms), rien d'agressif
- Bordures : fines, `border-grey-100`, sur les cartes de services
- Typographie : titres en Poppins bold bleu foncé, body en Inter regular gris foncé

---

## Architecture des Pages (Pack Croissance : ~20 pages)

### PAGES PRINCIPALES (7 pages)

#### 1. Page d'Accueil `/`
**Title :** "3F Ambulance Saint-Louis (68) | Transport Médical 24h/24 Trois Frontières"
**Meta description :** "3F Ambulance : ambulance, VSL et taxi conventionné à Saint-Louis (68). Transport médical dans les Trois Frontières et longue distance. Appelez le 06 33 81 40 47."

**Sections :**
1. **Hero** — Grande section pleine largeur
   - Background : dégradé bleu foncé (#003DA5 → #0057B8) avec motif ECG subtil en SVG
   - Titre H1 : "Votre Ambulance à Saint-Louis" (blanc, Poppins, très grand)
   - Sous-titre : "Transport médical professionnel aux Trois Frontières — 24h/24, 7j/7"
   - Bouton principal : "Appelez maintenant — 06 33 81 40 47" (rouge, grand, icône téléphone, animation pulse légère)
   - Bouton secondaire : "Demander un transport" → lien vers /contact (blanc outline)
   - 3 petits badges sous les boutons : "Ambulance" | "VSL" | "Taxi Conventionné" (blancs, arrondis)

2. **Bandeau de confiance** — 4 blocs sur fond blanc
   - Icône + label :
     - Horloge "24h/24 — 7j/7"
     - Check "Conventionné CPAM"
     - Bouclier "Agréé ARS"
     - Globe "Trois Frontières"

3. **Nos Services** — Fond bleu très clair (#F0F7FF)
   - Titre H2 : "Nos Services de Transport Médical"
   - 3 grandes cartes côte à côte :
     - **Ambulance** — icône ambulance, "Transport allongé et semi-allongé pour patients nécessitant une surveillance médicale"
     - **VSL** — icône voiture, "Transport assis pour consultations, examens et rendez-vous médicaux"
     - **Taxi Conventionné** — icône taxi, "Transport pris en charge par l'Assurance Maladie sur prescription médicale"
   - Chaque carte : bouton "En savoir plus" → /services

4. **Pourquoi 3F Ambulance** — Fond blanc
   - Titre H2 : "Pourquoi Choisir 3F Ambulance ?"
   - 4 blocs en grille 2x2 :
     - "Réactivité" — "Intervention rapide sur Saint-Louis et les Trois Frontières"
     - "Équipement médical" — "Véhicules équipés et conformes aux normes sanitaires"
     - "Personnel qualifié" — "Ambulanciers diplômés d'État, formés aux gestes de premiers secours"
     - "Couverture étendue" — "Saint-Louis, Trois Frontières et longue distance jusqu'à Strasbourg"

5. **Zone d'intervention** — Fond bleu très clair
   - Titre H2 : "Notre Zone d'Intervention"
   - Liste des principales communes en badges/tags
   - Mention "Longue distance : corridor Strasbourg ↔ Saint-Louis"
   - Bouton "Voir toutes les communes" → /zone-intervention

6. **CTA Final** — Bandeau fond bleu foncé (#003DA5)
   - "Besoin d'un transport médical ?"
   - "Appelez 3F Ambulance — nous intervenons 24h/24"
   - Grand bouton rouge : "06 33 81 40 47"

7. **FAQ rapide** — Fond blanc, 4 questions seulement (accordéon)
   - Schema FAQPage en JSON-LD

#### 2. Page Services `/services`
**Title :** "Services Transport Médical Saint-Louis (68) | Ambulance VSL Taxi — 3F Ambulance"
**H1 :** "Nos Services de Transport Médical"

Sous-sections détaillées avec icône, titre H2, description, liste de situations, CTA appel :
- **Transport en Ambulance** — Allongé, semi-allongé, équipement médical, urgences, transferts inter-hospitaliers
- **VSL (Véhicule Sanitaire Léger)** — Transport assis, consultations, examens (IRM, scanner, radio), kinésithérapie, dialyse
- **Taxi Conventionné** — Prise en charge CPAM, rendez-vous médecin, spécialiste, établissement de soins
- **Transport Longue Distance** — Transferts inter-hospitaliers, corridor Strasbourg ↔ Saint-Louis, rapatriement sanitaire
- **Transport Transfrontalier** — Suisse (Bâle, Universitätsspital), Allemagne (Lörrach, Freiburg), EuroAirport

#### 3. Page À Propos `/a-propos`
**Title :** "À Propos de 3F Ambulance | Ambulancier Saint-Louis Trois Frontières"
**H1 :** "3F Ambulance — Votre Ambulancier de Confiance aux Trois Frontières"

- Présentation entreprise, mission, valeurs
- Engagement qualité et sécurité
- Flotte de véhicules (description texte, photos à venir)
- Zone d'intervention détaillée

#### 4. Page Contact `/contact`
**Title :** "Contact 3F Ambulance Saint-Louis | Réservez votre Transport Médical"
**H1 :** "Contactez 3F Ambulance"

- Numéro de téléphone IMMENSE et cliquable en haut
- Formulaire : Nom, Téléphone (requis), Email (optionnel), Type transport (select), Date, Lieu départ, Lieu arrivée, Message
- Info pratique à côté : téléphone, horaires, zone, WhatsApp
- API route `/api/contact` : console.log pour l'instant, retourne succès (Resend config plus tard)

#### 5. Page FAQ `/faq`
**Title :** "FAQ Transport Ambulance Saint-Louis (68) | 3F Ambulance"
**H1 :** "Questions Fréquentes"

10 questions en accordéon + Schema FAQPage JSON-LD obligatoire.

#### 6. Page Zone d'Intervention `/zone-intervention`
**Title :** "Zone d'Intervention Ambulance Saint-Louis (68) | Trois Frontières — 3F Ambulance"
**H1 :** "Notre Zone d'Intervention"

Communes par secteur en badges + section Longue Distance + section Transfrontalier + CTA

#### 7. Mentions Légales `/mentions-legales`
Raison sociale, adresse Dietwiller, téléphone, hébergeur Vercel, politique confidentialité basique.

---

### PAGES GÉOLOCALISÉES SEO (10 pages villes)

Pages générées avec `generateStaticParams()`. Template unique `CityPageTemplate`.
URL : `/ambulance-[ville]`

**Villes :** huningue, hesingue, blotzheim, bartenheim, village-neuf, kembs, sierentz, rixheim, mulhouse, habsheim

### PAGES ÉTABLISSEMENTS DE SANTÉ (5 pages)

Template unique `HospitalPageTemplate`.
URL : `/transport-[etablissement]`

**Établissements :** hopital-saint-louis, hopital-emile-muller-mulhouse, clinique-diaconat-mulhouse, hopital-strasbourg, euroairport-bale-mulhouse

---

## SEO Technique

### Meta tags par page
- `<title>` unique (50-60 car.)
- `<meta name="description">` unique (150-160 car.)
- Open Graph tags
- Canonical URL

### Schema Markup (JSON-LD)
Sur toutes les pages : EmergencyService schema avec name, telephone, address Saint-Louis, areaServed, openingHours, services.
Sur /faq : FAQPage schema.
Sur pages villes : LocalBusiness avec areaServed spécifique.

### Sitemap & Robots
- `sitemap.ts` automatique (toutes pages)
- `robots.ts` : autoriser tout sauf /api/

### Performance : PageSpeed 95+, WebP, lazy loading, preload fonts

---

## Composants Réutilisables

### `<FloatingCallButton />` — Fixe bas-droite, rouge, pulse, click-to-call, z-50
### `<Navbar />` — Blanc sticky, shadow au scroll, logo gauche, CTA appel rouge droite, hamburger mobile
### `<Footer />` — Fond #1A202C, 4 colonnes (logo/liens/services/contact), mentions légales
### `<ServiceCard />` — Carte blanche bordure, icône cercle bleu, hover shadow+translate
### `<TrustBadge />` — Icône + label compact
### `<CTABanner />` — Fond bleu foncé, titre blanc, bouton rouge
### `<SectionHeading />` — H2 Poppins bold bleu + trait bleu dessous
### `<ContactForm />` — Formulaire validation + API route (console.log pour l'instant)
### `<FAQAccordion />` — Accordéon animé, un seul ouvert à la fois
### `<CityPageTemplate />` — Template pages villes avec données dynamiques
### `<HospitalPageTemplate />` — Template pages hôpitaux avec données dynamiques

---

## Structure des Fichiers

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      # Accueil
│   ├── services/page.tsx
│   ├── a-propos/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── zone-intervention/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── ambulance-[ville]/page.tsx    # Pages villes dynamiques
│   ├── transport-[etablissement]/page.tsx  # Pages hôpitaux dynamiques
│   ├── api/contact/route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/ (Navbar, Footer, FloatingCallButton)
│   ├── home/ (Hero, TrustBadges, ServicesSection, WhyUs, ZonePreview, HomeFAQ)
│   ├── ui/ (ServiceCard, TrustBadge, CTABanner, FAQAccordion, ContactForm, SectionHeading)
│   ├── templates/ (CityPageTemplate, HospitalPageTemplate)
│   └── seo/ (JsonLd, FAQJsonLd)
├── data/
│   ├── cities.ts        # 10 villes avec slug, nom, description, distance, meta
│   ├── hospitals.ts     # 5 hôpitaux avec slug, nom, spécialités, meta
│   ├── services.ts      # Données services
│   └── faq.ts           # Questions/réponses
├── lib/
│   ├── constants.ts     # SITE_CONFIG + COMMUNES_DESSERVIES
│   ├── metadata.ts      # Helper metadata
│   └── types.ts
└── styles/
    └── globals.css      # Tailwind + animations custom
```

---

## Constantes

```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  name: "3F Ambulance",
  fullName: "3F AMBULANCE",
  tagline: "Transport Médical aux Trois Frontières",
  phone: "06 33 81 40 47",
  phoneDisplay: "06 33 81 40 47",
  phoneHref: "tel:+33633814047",
  whatsappHref: "https://wa.me/33633814047",
  email: "",
  domain: "https://3f-ambulance.fr",
  legalAddress: {
    street: "9 Allée de la Hardt",
    city: "Dietwiller",
    zip: "68440",
    country: "France",
  },
  publicLocation: "Saint-Louis (68) — Trois Frontières",
  serviceArea: "Saint-Louis et les Trois Frontières",
  siret: "",
  hours: "24h/24, 7j/7",
  services: [
    { name: "Ambulance", slug: "ambulance" },
    { name: "VSL", slug: "vsl" },
    { name: "Taxi Conventionné", slug: "taxi-conventionne" },
  ],
} as const;
```

---

## Notes de Développement

1. **Adresse Dietwiller** → UNIQUEMENT `/mentions-legales`. Partout ailleurs : "Saint-Louis — Trois Frontières"
2. **Pas de photos** → illustrations SVG / icônes Lucide. PAS d'images stock.
3. **Téléphone 06 33 81 40 47** → sur CHAQUE page (navbar, footer, CTA, bouton flottant)
4. **API contact** → console.log pour l'instant, retourne succès. Resend plus tard.
5. **Pages dynamiques** → `generateStaticParams()` pour génération statique
6. **Mobile-first** → designer mobile d'abord
7. **Animations** → subtiles, sérieuses, médicales
8. **Pas d'agrément ARS affiché** → badge "Agréé ARS" présent comme signal de confiance mais sans numéro
