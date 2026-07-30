export interface OutsourceHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface OutsourceIntroChallengeItem {
  title: string;
  iconName?: string;
}

export interface OutsourceIntroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  commonProblemsTitle: string;
  challenges: OutsourceIntroChallengeItem[];
  buttonText: string;
  buttonLink: string;
  imageSrc?: string;
  imageAlt?: string;
  calloutTitle: string;
  calloutDescription: string;
}

export interface OutsourceComparisonItem {
  inhouseText: string;
  inhouseBullets?: (string | { text?: string })[];
  outsourcingText: string;
}

export interface OutsourceComparisonData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  items: OutsourceComparisonItem[];
}

export interface OutsourceSpecialistMetricItem {
  label: string;
  value: number;
  iconName?: string;
}

export interface OutsourceSpecialistsData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  points: (string | { text?: string })[];
  metrics: OutsourceSpecialistMetricItem[];
  buttonText: string;
  buttonLink: string;
}

export interface OutsourcePracticeEfficiencyData {
  titlePlain: string;
  titleHighlight: string;
  paragraphs: (string | { text?: string })[];
  buttonText: string;
  buttonLink: string;
  imageSrc?: string;
  imageAlt?: string;
  calloutTitle: string;
  calloutDescription: string;
}

export interface OutsourceSolutionItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface OutsourceSolutionsData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  solutions: OutsourceSolutionItem[];
}

export interface OutsourceGetStartedCtaData {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface OutsourceTechFeatureItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface OutsourceTechnologyExpertiseData {
  techBadge: string;
  techTitlePlain: string;
  techTitleHighlight: string;
  techFeatures: OutsourceTechFeatureItem[];
  expBadge: string;
  expTitlePlain: string;
  expTitleHighlight: string;
  expFeatures: OutsourceTechFeatureItem[];
  ctaTitlePlain: string;
  ctaTitleHighlight: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

import type { PageSeo } from './seo';

export interface OutsourceMedicalBillingPageData {
  seo?: PageSeo;
  hero: OutsourceHeroData;
  intro: OutsourceIntroData;
  comparison: OutsourceComparisonData;
  specialists: OutsourceSpecialistsData;
  practiceEfficiency: OutsourcePracticeEfficiencyData;
  solutions: OutsourceSolutionsData;
  getStartedCta: OutsourceGetStartedCtaData;
  technologyExpertise: OutsourceTechnologyExpertiseData;
}
