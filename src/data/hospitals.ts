import { HospitalData } from "@/lib/types";

export const hospitals: HospitalData[] = [
  {
    slug: "hopital-saint-louis",
    name: "Hôpital de Saint-Louis (GHRMSA)",
    image: "/images/hopitaux/hopital-saint-louis.jpg",
    city: "Saint-Louis",
    specialties: ["Urgences 24h/24", "Dialyse (16 postes)", "Médecine interne", "Chirurgie", "Radiologie (IRM, scanner)", "Maternité"],
    metaTitle: "Transport Hôpital Saint-Louis (68) | Ambulance VSL — 3F Ambulance",
    metaDescription: "Transport médical vers l'Hôpital de Saint-Louis (68). Ambulance, VSL et taxi conventionné. 3F Ambulance — 06 33 81 40 47.",
    content: {
      intro: "L'Hôpital de Saint-Louis fait partie du GHRMSA (Groupe Hospitalier de la Région de Mulhouse et Sud Alsace). C'est l'établissement le plus proche de notre base — nous y transportons des patients tous les jours, parfois plusieurs fois par jour. Urgences ouvertes 24h/24, centre de dialyse avec 16 postes, service de chirurgie, IRM et scanner : c'est le premier recours pour les habitants du secteur.",
      transport: "Nous connaissons chaque entrée, chaque service, chaque accès de cet hôpital. Les patients en dialyse à Saint-Louis, c'est souvent un départ à 5h30 du matin — nous sommes rodés à ces horaires. On assure aussi les sorties d'hospitalisation, les transferts vers Mulhouse quand un patient a besoin d'un service qui n'est pas disponible sur place, et les retours à domicile après passage aux urgences.",
      services: "Ambulance pour les transferts post-opératoires et les patients sous surveillance. VSL pour les séances de dialyse régulières (3 fois par semaine pour la plupart des patients) et les consultations programmées. Taxi conventionné CPAM pour les rendez-vous de radiologie et les consultations de suivi.",
    },
  },
  {
    slug: "hopital-emile-muller-mulhouse",
    name: "Hôpital Émile Muller (GHRMSA Mulhouse)",
    image: "/images/hopitaux/hopital-emile-muller-mulhouse.jpg",
    city: "Mulhouse",
    specialties: ["Urgences 24h/24", "Cardiologie", "Oncologie", "Neurologie", "Réanimation", "Chirurgie", "Dialyse"],
    metaTitle: "Transport Hôpital Émile Muller Mulhouse | Ambulance — 3F Ambulance",
    metaDescription: "Transport ambulance vers l'Hôpital Émile Muller de Mulhouse. VSL et taxi conventionné. 3F Ambulance — 06 33 81 40 47.",
    content: {
      intro: "L'Hôpital Émile Muller est le centre hospitalier de référence du Sud Alsace, situé à Mulhouse — environ 30 minutes depuis Saint-Louis par l'A35. C'est là que sont orientés les cas les plus complexes : cardiologie interventionnelle, cancérologie, neurologie, réanimation. Beaucoup de nos patients y sont suivis pour des traitements lourds comme la chimiothérapie ou la radiothérapie.",
      transport: "On fait le trajet Saint-Louis ↔ Émile Muller plusieurs fois par jour. Les patients en chimiothérapie ont souvent des séances toutes les 2 à 3 semaines — on les connaît, on connaît leur dossier, on sait dans quel service les déposer. Pour les hospitalisations, on récupère les patients à domicile le matin et on assure le retour quand le service nous appelle.",
      services: "Ambulance pour les transferts inter-hospitaliers depuis Saint-Louis et les patients nécessitant une surveillance (post-réanimation, post-chirurgie cardiaque). VSL pour les consultations d'oncologie, de neurologie et les séances de chimiothérapie. Taxi conventionné pour les consultations de suivi et la radiologie.",
    },
  },
  {
    slug: "clinique-diaconat-mulhouse",
    name: "Clinique Diaconat-Roosevelt",
    image: "/images/hopitaux/clinique-diaconat-mulhouse.jpg",
    city: "Mulhouse",
    specialties: ["Chirurgie", "Maternité", "Cardiologie interventionnelle", "Orthopédie", "Ophtalmologie", "Gastro-entérologie"],
    metaTitle: "Transport Clinique Diaconat Mulhouse | Ambulance — 3F Ambulance",
    metaDescription: "Transport médical vers la Clinique Diaconat-Roosevelt à Mulhouse. Ambulance, VSL, taxi conventionné. 3F Ambulance — 06 33 81 40 47.",
    content: {
      intro: "La Clinique Diaconat-Roosevelt à Mulhouse est un établissement privé reconnu pour la chirurgie, la maternité et la cardiologie interventionnelle. C'est la clinique où beaucoup de patients du secteur des Trois Frontières choisissent de se faire opérer — orthopédie (prothèse de hanche, de genou), chirurgie digestive, ophtalmologie. On y transporte régulièrement des patients pour des interventions programmées.",
      transport: "Pour la chirurgie ambulatoire, le schéma est simple : on vous amène le matin, et on vient vous rechercher en fin de journée quand le chirurgien donne le feu vert. Pour les hospitalisations plus longues (prothèse, chirurgie cardiaque), on assure le retour à domicile dès que le service nous prévient de la sortie. On travaille aussi avec la maternité pour les transports de futures mamans quand leur médecin prescrit un transport sanitaire.",
      services: "Ambulance pour les retours post-opératoires (le patient est souvent allongé après une intervention chirurgicale). VSL pour les consultations pré-opératoires, les rendez-vous de cardiologie et les examens. Taxi conventionné pour les visites de suivi post-opératoire et les consultations spécialisées.",
    },
  },
  {
    slug: "hopital-strasbourg",
    name: "Hôpitaux Universitaires de Strasbourg (HUS)",
    image: "/images/hopitaux/hopital-strasbourg.jpg",
    city: "Strasbourg",
    specialties: ["CHU de référence", "Neurochirurgie", "Transplantation", "Cardiologie interventionnelle", "Oncologie (ICANS)", "Pédiatrie spécialisée"],
    metaTitle: "Transport Hôpital Strasbourg depuis Saint-Louis | Ambulance — 3F Ambulance",
    metaDescription: "Transport ambulance longue distance Saint-Louis ↔ Strasbourg. Transferts vers les HUS. 3F Ambulance — 06 33 81 40 47.",
    content: {
      intro: "Le corridor Saint-Louis ↔ Strasbourg, c'est environ 1h30 de route, et c'est notre axe longue distance le plus fréquenté. Les HUS (Hôpitaux Universitaires de Strasbourg) regroupent plusieurs sites : Hautepierre pour la chirurgie lourde et la pédiatrie, le Nouvel Hôpital Civil (NHC) pour la neurologie et la cardiologie, et l'ICANS (Institut de Cancérologie Strasbourg Europe) pour les traitements oncologiques de pointe. Quand un patient du sud Alsace a besoin de soins hautement spécialisés, c'est souvent vers Strasbourg qu'il est orienté.",
      transport: "On connaît bien la route — A35 jusqu'à Colmar, puis A35 direction Strasbourg. Nos ambulanciers savent exactement où se garer à Hautepierre (ce n'est pas évident la première fois), comment accéder au NHC par le bon côté, et où déposer les patients à l'ICANS. Pour un aller-retour dans la journée (consultation + retour), on s'organise pour attendre sur place ou revenir chercher le patient à l'heure convenue.",
      services: "Ambulance pour les transferts inter-hospitaliers (de l'Hôpital de Saint-Louis ou d'Émile Muller vers les HUS) et les patients nécessitant une surveillance sur un trajet long. VSL pour les consultations programmées à Hautepierre, au NHC ou à l'ICANS — beaucoup de patients en oncologie font ce trajet régulièrement. Taxi conventionné sur prescription pour les rendez-vous ponctuels.",
    },
  },
  {
    slug: "euroairport-bale-mulhouse",
    name: "EuroAirport Bâle-Mulhouse-Freiburg",
    image: "/images/hopitaux/euroairport-bale-mulhouse.jpg",
    city: "Saint-Louis / Blotzheim",
    specialties: ["Rapatriement sanitaire", "Transport aéroportuaire", "Assistance médicale voyage", "Transfert piste"],
    metaTitle: "Transport Ambulance EuroAirport Bâle-Mulhouse | 3F Ambulance",
    metaDescription: "Transport sanitaire EuroAirport Bâle-Mulhouse. Rapatriement, transfert aéroportuaire. Ambulance et VSL. 3F Ambulance — 06 33 81 40 47.",
    content: {
      intro: "L'EuroAirport est littéralement sur notre territoire — l'aéroport se trouve sur la commune de Saint-Louis, à 5 minutes de notre base. C'est un avantage considérable pour les rapatriements sanitaires : quand un patient arrive par avion médicalisé, on peut être sur le tarmac en quelques minutes. On gère aussi les transferts de passagers qui ont un problème médical à l'arrivée ou au départ.",
      transport: "Pour les rapatriements sanitaires, on se coordonne directement avec les compagnies aériennes et les sociétés d'assistance (Europ Assistance, Mondial Assistance, etc.). On récupère le patient à la descente de l'avion — parfois directement sur la piste avec notre ambulance — et on le transfère vers l'hôpital le plus adapté : Saint-Louis, Mulhouse ou Bâle selon la pathologie.",
      services: "Ambulance pour les rapatriements sanitaires et les transferts de patients médicalisés (brancard, oxygène, monitoring). VSL pour les passagers ayant besoin d'une assistance médicale légère à l'arrivée. Nous intervenons côté français et pouvons nous coordonner avec les services médicaux du côté suisse de l'aéroport.",
    },
  },
];
