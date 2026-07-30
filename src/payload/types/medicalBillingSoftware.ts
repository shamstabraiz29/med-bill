export interface SoftwareFeatureItem {
  iconName?: string;
  title: string;
  description: string;
}

export interface GrowthToolItem {
  iconName?: string;
  title: string;
  description: string;
  href: string;
}

export interface SoftwareTestimonialItem {
  id?: string;
  quote: string;
  name: string;
  role: string;
  highlightText: string;
}

export interface SignUpFeatureItem {
  label: string;
  iconName?: string;
}

export interface MedicalBillingSoftwareHeroData {
  badge?: string;
  eyebrow?: string;
  titlePlain?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonLink?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

export interface MedicalBillingSoftwareDeliversData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  features: SoftwareFeatureItem[];
  imageSrc: string;
}

export interface MedicalBillingSoftwareInActionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  descriptionText: string;
  buttonText: string;
  features: SoftwareFeatureItem[];
}

export interface MedicalBillingSoftwareNewFeaturesData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  features: SoftwareFeatureItem[];
}

export interface MedicalBillingSoftwareGrowthToolsData {
  badge: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  tools: GrowthToolItem[];
}

export interface MedicalBillingSoftwareTestimonialsData {
  testimonials: SoftwareTestimonialItem[];
}

export interface MedicalBillingSoftwareSignUpCtaData {
  badge?: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  features: SignUpFeatureItem[];
}

import type { PageSeo } from './seo';

export interface MedicalBillingSoftwarePageData {
  seo?: PageSeo;
  hero: MedicalBillingSoftwareHeroData;
  delivers: MedicalBillingSoftwareDeliversData;
  inAction: MedicalBillingSoftwareInActionData;
  newFeatures: MedicalBillingSoftwareNewFeaturesData;
  growthTools: MedicalBillingSoftwareGrowthToolsData;
  testimonials: MedicalBillingSoftwareTestimonialsData;
  signUpCta: MedicalBillingSoftwareSignUpCtaData;
}
