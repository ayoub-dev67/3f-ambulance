import { ServiceData } from "@/lib/types";

export const services: ServiceData[] = [
  {
    slug: "ambulance",
    name: "Ambulance",
    icon: "Ambulance",
    shortDescription: "Transport allongé et semi-allongé pour patients nécessitant une surveillance médicale.",
    longDescription: "Notre service d'ambulance assure le transport de patients en position allongée ou semi-allongée. Nos véhicules sont équipés de matériel médical conforme aux normes en vigueur et nos ambulanciers sont diplômés d'État.",
    situations: [
      "Transferts inter-hospitaliers",
      "Hospitalisations et sorties d'hôpital",
      "Transport vers les urgences",
      "Patients nécessitant une surveillance médicale",
      "Transport allongé obligatoire sur prescription",
      "Rapatriement sanitaire",
    ],
  },
  {
    slug: "vsl",
    name: "VSL",
    icon: "Car",
    shortDescription: "Transport assis pour consultations, examens et rendez-vous médicaux.",
    longDescription: "Le Véhicule Sanitaire Léger (VSL) est adapté au transport de patients pouvant voyager en position assise. Confortable et sécurisé, il convient pour les rendez-vous médicaux réguliers.",
    situations: [
      "Consultations médicales et spécialistes",
      "Examens médicaux (IRM, scanner, radiologie)",
      "Séances de kinésithérapie",
      "Séances de dialyse",
      "Chimiothérapie et radiothérapie",
      "Rééducation fonctionnelle",
    ],
  },
  {
    slug: "taxi-conventionne",
    name: "Taxi Conventionné",
    icon: "CarTaxiFront",
    shortDescription: "Transport pris en charge par l'Assurance Maladie sur prescription médicale.",
    longDescription: "Notre service de taxi conventionné CPAM permet le transport de patients avec prise en charge par l'Assurance Maladie. Sur présentation d'une prescription médicale de transport, vos trajets sont remboursés.",
    situations: [
      "Rendez-vous chez le médecin traitant",
      "Consultations spécialistes",
      "Soins en établissement de santé",
      "Transport longue distance sur prescription",
      "Patients autonomes avec prescription de transport",
      "Retour à domicile après hospitalisation",
    ],
  },
];
