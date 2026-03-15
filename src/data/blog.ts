export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "transport-medical-rembourse-securite-sociale",
    title: "Transport médical : comment se faire rembourser par la Sécurité Sociale ?",
    category: "Remboursement",
    date: "2026-03-15",
    excerpt: "Prescription médicale, taux de remboursement, tiers payant : tout ce qu'il faut savoir pour que votre transport en ambulance ou VSL soit pris en charge.",
    image: "/images/blog-remboursement.jpg",
    content: `Le transport médical en ambulance, VSL ou taxi conventionné peut être pris en charge par l'Assurance Maladie. Mais comment ça fonctionne exactement ? Voici tout ce qu'il faut savoir.

## La prescription médicale de transport

Pour que votre transport soit remboursé, vous devez obligatoirement disposer d'une prescription médicale de transport. C'est votre médecin qui la délivre sur un formulaire cerfa spécifique (volet 4). Ce document indique le mode de transport prescrit (ambulance, VSL ou taxi conventionné) en fonction de votre état de santé.

Le médecin choisit le mode de transport adapté :
- Ambulance : si vous devez être allongé ou semi-allongé, ou si vous nécessitez une surveillance médicale pendant le trajet
- VSL (Véhicule Sanitaire Léger) : si vous pouvez rester en position assise mais avez besoin d'une aide pour vous déplacer
- Taxi conventionné : si vous pouvez vous déplacer de manière autonome

## Quel taux de remboursement ?

Le taux de remboursement dépend de votre situation :

En règle générale, l'Assurance Maladie prend en charge 65% des frais de transport. Vous restez redevable du ticket modérateur de 35%.

Cependant, certaines situations ouvrent droit à une prise en charge à 100% :
- Affection de Longue Durée (ALD) : si votre transport est lié à votre ALD
- Accident du travail ou maladie professionnelle
- Transport lié à une hospitalisation
- Maternité (à partir du 6ème mois de grossesse)
- Pension d'invalidité

## Le tiers payant

Chez 3F Ambulance, nous pratiquons le tiers payant dans la plupart des cas. Cela signifie que vous n'avancez pas les frais : nous facturons directement l'Assurance Maladie. Selon votre situation, vous n'aurez à régler que le ticket modérateur (la part restante), ou rien du tout si vous êtes pris en charge à 100%.

## Les cas de transport pris en charge

Les transports suivants peuvent être remboursés sur prescription :
- Hospitalisation (entrée et sortie)
- Consultations et examens médicaux (IRM, scanner, radiologie)
- Séances de traitement régulières (dialyse, chimiothérapie, radiothérapie)
- Soins de rééducation (kinésithérapie, soins de suite)
- Transferts entre établissements de santé
- Convocations auprès d'un médecin expert

## Comment ça se passe avec 3F Ambulance ?

1. Votre médecin vous délivre une prescription de transport
2. Vous nous appelez au 06 33 81 40 47 pour réserver votre transport
3. Nous venons vous chercher à l'horaire convenu
4. Après le transport, nous gérons toutes les formalités administratives avec la CPAM
5. Vous ne payez que le ticket modérateur si applicable

N'hésitez pas à [nous contacter](/contact) pour toute question sur le remboursement de votre transport médical. Découvrez aussi [la différence entre ambulance, VSL et taxi conventionné](/blog/difference-ambulance-vsl-taxi-conventionne).`,
  },
  {
    slug: "difference-ambulance-vsl-taxi-conventionne",
    title: "Ambulance, VSL ou Taxi Conventionné : quelle différence et lequel choisir ?",
    category: "Guide Pratique",
    date: "2026-03-10",
    excerpt: "Ambulance, VSL, taxi conventionné : trois modes de transport médical aux usages différents. Découvrez lequel correspond à votre situation.",
    image: "/images/blog-guide.jpg",
    content: `Quand votre médecin vous prescrit un transport médical, il doit choisir entre trois modes de transport : l'ambulance, le VSL et le taxi conventionné. Chacun répond à des besoins différents.

## L'ambulance

L'ambulance est un véhicule sanitaire équipé de matériel médical (brancard, oxygène, défibrillateur, dispositifs de surveillance). Elle est conduite par deux professionnels : un conducteur ambulancier et un ambulancier diplômé d'État.

L'ambulance est prescrite quand le patient :
- Doit être transporté en position allongée ou semi-allongée
- Nécessite une surveillance médicale pendant le trajet
- Est sous perfusion ou sous oxygène
- Sort d'une intervention chirurgicale lourde
- Présente un état de santé qui ne permet pas la position assise prolongée

Chez 3F Ambulance, nos ambulances sont entièrement équipées et climatisées pour assurer votre confort et votre sécurité.

## Le VSL (Véhicule Sanitaire Léger)

Le VSL est un véhicule adapté au transport de patients pouvant rester en position assise. Il est conduit par un auxiliaire ambulancier ou un ambulancier diplômé d'État.

Le VSL est prescrit quand le patient :
- Peut se déplacer en position assise
- A besoin d'aide pour monter et descendre du véhicule
- Doit se rendre à une consultation, un examen ou une séance de traitement
- Nécessite un accompagnement mais pas de surveillance médicale

Le VSL est très utilisé pour les séances régulières : dialyse, chimiothérapie, radiothérapie, kinésithérapie.

## Le taxi conventionné

Le taxi conventionné est un taxi qui a signé une convention avec la CPAM (Caisse Primaire d'Assurance Maladie). Il fonctionne comme un taxi classique, mais le trajet peut être pris en charge par l'Assurance Maladie.

Le taxi conventionné est adapté quand le patient :
- Peut se déplacer de manière autonome
- N'a pas besoin d'aide particulière
- Se rend à un rendez-vous médical de routine

Chez 3F Ambulance, notre service de taxi conventionné est agréé CPAM.

## C'est le médecin qui décide

Important : ce n'est pas le patient qui choisit son mode de transport. C'est le médecin prescripteur qui détermine le mode de transport adapté à votre état de santé. Ce choix est inscrit sur la prescription médicale de transport (cerfa).

Si votre état de santé évolue, n'hésitez pas à en parler à votre médecin pour adapter le mode de transport.

## Quel que soit le mode de transport, 3F Ambulance est là

Que votre médecin prescrive une ambulance, un VSL ou un taxi conventionné, 3F Ambulance dispose des trois types de véhicules. [Découvrez tous nos services](/services). Un seul numéro à retenir : 06 33 81 40 47 — [contactez-nous](/contact).`,
  },
  {
    slug: "transport-dialyse-saint-louis-trois-frontieres",
    title: "Transport pour dialyse à Saint-Louis : comment organiser vos trajets réguliers",
    category: "Dialyse",
    date: "2026-03-05",
    excerpt: "La dialyse nécessite des transports réguliers, souvent 3 fois par semaine. Voici comment 3F Ambulance simplifie vos trajets vers le GHRMSA de Saint-Louis.",
    image: "/images/blog-dialyse.jpg",
    content: `Si vous êtes suivi en hémodialyse, vous savez que les trajets vers le centre de dialyse font partie de votre quotidien. À Saint-Louis, l'hôpital GHRMSA dispose d'une unité d'hémodialyse médicalisée de 16 postes. 3F Ambulance vous accompagne pour chacun de ces trajets.

## La dialyse : des transports réguliers

L'hémodialyse nécessite généralement 3 séances par semaine, chacune durant entre 3 et 5 heures. Cela représente en moyenne 156 trajets aller-retour par an. C'est un engagement important, et le transport ne doit pas être une source de stress supplémentaire.

## Comment organiser vos transports de dialyse

Avec 3F Ambulance, l'organisation est simple :
- Votre néphrologue vous délivre une prescription de transport (valable généralement pour une durée déterminée, souvent 3 à 6 mois pour les traitements réguliers)
- Vous nous appelez une seule fois au 06 33 81 40 47 pour mettre en place le planning
- Nous programmons tous vos trajets à l'avance : jours, horaires de prise en charge et de retour
- Chaque jour de dialyse, nous venons vous chercher à domicile et vous ramenons après la séance
- Si vos horaires changent, un simple appel suffit pour adapter le planning

## Quel type de transport pour la dialyse ?

Le mode de transport est prescrit par votre médecin :
- En ambulance si votre état de santé nécessite une position allongée ou une surveillance
- En VSL si vous pouvez rester assis confortablement (cas le plus fréquent pour la dialyse)
- En taxi conventionné si vous êtes autonome dans vos déplacements

La plupart des patients dialysés sont transportés en VSL, mais cela dépend de votre situation médicale.

## Prise en charge financière

La dialyse est une Affection de Longue Durée (ALD). À ce titre, vos transports sont pris en charge à 100% par l'Assurance Maladie. Vous n'avez rien à payer : 3F Ambulance facture directement la CPAM.

## Le GHRMSA de Saint-Louis

Le pôle public de Saint-Louis, rattaché au Groupe Hospitalier de la Région de Mulhouse et Sud Alsace (GHRMSA), dispose d'une unité d'hémodialyse médicalisée de 16 postes. L'établissement propose également des consultations de néphrologie pour le suivi de votre maladie rénale.

3F Ambulance connaît parfaitement l'hôpital de Saint-Louis, ses accès et ses horaires. Nous déposons et récupérons nos patients directement devant l'entrée du service de dialyse.

## Nos engagements pour vos transports de dialyse

- Ponctualité : nous connaissons l'importance des horaires en dialyse
- Régularité : le même créneau, les mêmes habitudes, pour votre tranquillité
- Confort : véhicules climatisés et entretenus, conduite souple
- Flexibilité : adaptation rapide en cas de changement d'horaire ou de séance supplémentaire

Pour mettre en place vos transports de dialyse, appelez-nous au 06 33 81 40 47 ou [contactez-nous en ligne](/contact). En savoir plus sur le [transport vers l'hôpital de Saint-Louis](/transport/hopital-saint-louis) et le [remboursement de votre transport médical](/blog/transport-medical-rembourse-securite-sociale).`,
  },
];
