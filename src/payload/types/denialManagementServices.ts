import type { HomepageTestimonials } from "@/payload/types/homepage";

export interface DenialManagementStatItem {
  value: string;
  label: string;
  subLabel?: string;
  iconName?: string;
}

export interface DenialManagementRatingBadge {
  platform: string;
  value: string;
  color?: string;
  subLabel?: string;
}

export interface DenialManagementChecklistItem {
  label: string;
}

export interface DenialManagementMetricCard {
  badge: string;
  value: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

export interface DenialManagementStatsSectionData {
  titlePlain: string;
  titleHighlight: string;
  mainStats: DenialManagementStatItem[];
  ratingBadges: DenialManagementRatingBadge[];
  bottomTitlePlain: string;
  bottomTitleHighlight: string;
  bottomDescription: string;
  checklist: DenialManagementChecklistItem[];
  ctaText: string;
  ctaHref: string;
  happinessScore: DenialManagementMetricCard;
  payorSpeed: DenialManagementMetricCard;
}

export interface DenialManagementHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  description1: string;
  description2: string;
  featuresTitlePlain: string;
  featuresTitleHighlight: string;
  featureBullets: string[];
  formTitle: string;
  phoneText: string;
  phoneLink: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  spinningText?: string;
}

export interface DenialManagementAboutSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface DenialManagementBenefitItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface DenialManagementBenefitsSectionData {
  titlePlain: string;
  titleHighlight: string;
  benefits: DenialManagementBenefitItem[];
}

export interface DenialManagementAppealCtaData {
  titlePlain: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface DenialManagementDenialsCtaData {
  titlePlain: string;
  titleHighlight: string;
  descriptionPlain: string;
  descriptionHighlight: string;
  buttonText: string;
  buttonHref: string;
}

export interface DenialManagementHelpAccordionItem {
  title: string;
  problem: string;
  solution: string;
}

export interface DenialManagementHelpSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc?: string;
  imageAlt?: string;
  accordionHeading: string;
  accordionItems: DenialManagementHelpAccordionItem[];
}

export interface DenialManagementWhoWeServeItem {
  label: string;
  iconName?: string;
}

export interface DenialManagementWhoWeServeSectionData {
  titlePlain: string;
  titleHighlight: string;
  description: string;
  items: DenialManagementWhoWeServeItem[];
}

export interface DenialManagementRevenueCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface DenialManagementRevenueSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  paragraph1: string;
  paragraph2: string;
  gridSubheading: string;
  cards: DenialManagementRevenueCard[];
}

export interface DenialManagementServiceOfferingItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface DenialManagementServiceOfferingsSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  items: DenialManagementServiceOfferingItem[];
}

export interface DenialManagementOutsourceAccordionItem {
  title: string;
  content: string;
}

export interface DenialManagementOutsourceSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  accordionItems: DenialManagementOutsourceAccordionItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface DenialManagementWorkflowStep {
  title: string;
  description: string;
  iconName?: string;
}

export interface DenialManagementWorkflowSectionData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  paragraph1: string;
  paragraph2: string;
  stepsSubheading: string;
  steps: DenialManagementWorkflowStep[];
}

export interface DenialManagementCodeInsightFeature {
  label: string;
}

export interface DenialManagementCodeInsightHowStep {
  title: string;
  description: string;
  highlightPhrase?: string;
  iconName?: string;
}

export interface DenialManagementCodeInsightSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  paragraph1: string;
  paragraph2: string;
  buttonText: string;
  buttonHref: string;
  imageSrc?: string;
  imageAlt?: string;
  features: DenialManagementCodeInsightFeature[];
  gettingTitlePlain: string;
  gettingTitleHighlight: string;
  gettingTitleSuffix: string;
  gettingParagraph1: string;
  gettingParagraph2: string;
}

export interface DenialManagementCodeInsightHowItWorksData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  steps: DenialManagementCodeInsightHowStep[];
}

export interface DenialManagementCodeInsightCtaData {
  titlePlain: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface DenialManagementContactSupportData {
  titlePlain: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3BeforePhone: string;
  paragraph3AfterPhone: string;
  phoneText: string;
  phoneLink: string;
  buttonText: string;
  buttonHref: string;
}

export interface DenialManagementDeniedServicesPill {
  label: string;
  colorClass: string;
}

export interface DenialManagementDeniedServicesBannerData {
  title: string;
  pills: DenialManagementDeniedServicesPill[];
}

export interface DenialManagementPhysicianTestimonial {
  name: string;
  specialty: string;
  text: string;
  avatarPath?: string;
  rating?: number;
}

export interface DenialManagementPhysicianTestimonialsData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  items: DenialManagementPhysicianTestimonial[];
}

export interface DenialManagementUnderpaymentRecoverySectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  imageSrc?: string;
  imageAlt?: string;
}

import type { PageSeo } from './seo';

export interface DenialManagementServicesPageData {
  seo?: PageSeo;
  hero: DenialManagementHeroData;
  stats: DenialManagementStatsSectionData;
  about: DenialManagementAboutSectionData;
  help: DenialManagementHelpSectionData;
  whoWeServe: DenialManagementWhoWeServeSectionData;
  revenue: DenialManagementRevenueSectionData;
  underpaymentRecovery: DenialManagementUnderpaymentRecoverySectionData;
  serviceOfferings: DenialManagementServiceOfferingsSectionData;
  outsource: DenialManagementOutsourceSectionData;
  workflow: DenialManagementWorkflowSectionData;
  codeInsight: DenialManagementCodeInsightSectionData;
  codeInsightHowItWorks: DenialManagementCodeInsightHowItWorksData;
  codeInsightCta: DenialManagementCodeInsightCtaData;
  physicianTestimonials: DenialManagementPhysicianTestimonialsData;
  deniedServicesBanner: DenialManagementDeniedServicesBannerData;
  contactSupport: DenialManagementContactSupportData;
  testimonials: HomepageTestimonials;
  benefits: DenialManagementBenefitsSectionData;
  denialsCta: DenialManagementDenialsCtaData;
  appealCta: DenialManagementAppealCtaData;
}
