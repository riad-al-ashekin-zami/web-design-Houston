export interface LeadFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  serviceNeeded: string;
  projectDetails: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  keyword: string;
  features: string[];
  anchor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TrustCard {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface BusinessType {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
