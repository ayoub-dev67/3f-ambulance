export interface CityData {
  slug: string;
  name: string;
  description: string;
  distance: string;
  metaTitle: string;
  metaDescription: string;
  content: {
    intro: string;
    services: string;
    why: string;
  };
}

export interface HospitalData {
  slug: string;
  name: string;
  city: string;
  specialties: string[];
  metaTitle: string;
  metaDescription: string;
  content: {
    intro: string;
    transport: string;
    services: string;
  };
}

export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  situations: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  transportType: string;
  date?: string;
  departure?: string;
  destination?: string;
  message?: string;
}
