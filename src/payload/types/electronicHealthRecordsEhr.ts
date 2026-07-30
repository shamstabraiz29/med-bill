export interface EhrFeatureItem {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix?: string;
  endPeriod?: boolean;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export interface EhrSpecialtyItem {
  label: string;
  iconName?: string;
}

export interface EhrWhyAceFeatureItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface EhrBenefitItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface EhrFaqItem {
  question: string;
  answer: string;
}

export interface EhrHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface EhrFeaturesData {
  features: EhrFeatureItem[];
}

export interface EhrIcd10CtaData {
  badgeTag: string;
  badgeText: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface EhrSpecialtiesData {
  titlePlain: string;
  titleHighlight: string;
  footerText: string;
  specialties: EhrSpecialtyItem[];
}

export interface EhrWhyAceData {
  titlePlain: string;
  titleHighlight: string;
  imageSrc: string;
  imageAlt: string;
  features: EhrWhyAceFeatureItem[];
}

export interface EhrBenefitsData {
  benefits: EhrBenefitItem[];
}

export interface EhrFaqData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  faqs: EhrFaqItem[];
}

export interface EhrGetStartedCtaData {
  highlights: (string | { label?: string })[];
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

import type { PageSeo } from './seo';

export interface ElectronicHealthRecordsEhrPageData {
  seo?: PageSeo;
  hero: EhrHeroData;
  features: EhrFeaturesData;
  icd10Cta: EhrIcd10CtaData;
  specialties: EhrSpecialtiesData;
  whyAce: EhrWhyAceData;
  benefits: EhrBenefitsData;
  faq: EhrFaqData;
  getStartedCta: EhrGetStartedCtaData;
}
