export interface PmsHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface PmsAboutData {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
}

export interface PmsBalanceData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
}

export interface PmsFeatureItem {
  label: string;
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export interface PmsFeaturesData {
  features: PmsFeatureItem[];
}

export interface PmsManageItem {
  title: string;
  content: string;
  summary: string;
  iconName?: string;
}

export interface PmsManageData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  howItConnectsLabel: string;
  items: PmsManageItem[];
}

export interface PmsTelemedicineRcmItem {
  label: string;
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export interface PmsTelemedicineRcmData {
  features: PmsTelemedicineRcmItem[];
}

export interface PmsSpecialtyCtaData {
  badgeTag: string;
  badgeText: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface PmsHighlightItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface PmsHighlightsData {
  highlights: PmsHighlightItem[];
}

export interface PmsFaqItem {
  question: string;
  answer: string;
}

export interface PmsFaqData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  faqs: PmsFaqItem[];
}

export interface PmsGetStartedCtaData {
  highlights: (string | { label?: string })[];
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

import type { PageSeo } from './seo';

export interface PracticeManagementSoftwarePmsPageData {
  seo?: PageSeo;
  hero: PmsHeroData;
  about: PmsAboutData;
  balance: PmsBalanceData;
  features: PmsFeaturesData;
  manage: PmsManageData;
  telemedicineRcm: PmsTelemedicineRcmData;
  specialtyCta: PmsSpecialtyCtaData;
  highlights: PmsHighlightsData;
  faq: PmsFaqData;
  getStartedCta: PmsGetStartedCtaData;
}
