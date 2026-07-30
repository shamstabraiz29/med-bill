import type { HomepageTestimonials } from "./homepage";

export interface HospitalBillingWhatAreService {
  title: string;
  description: string;
  iconName?: string;
}

export interface HospitalBillingWhatAreSectionData {
  titlePlain: string;
  titleHighlight: string;
  description: string;
  services: HospitalBillingWhatAreService[];
  goalTitlePlain: string;
  goalTitleHighlight: string;
  goalDescription: string;
  goalPills: string[];
  goalCtaText: string;
  goalCtaHref: string;
}

export interface HospitalBillingHeroStat {
  value: string;
  label: string;
}

export interface HospitalBillingOverviewBenefit {
  label: string;
  iconName?: string;
}

export interface HospitalBillingOverviewSectionData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  titleLocationHighlight: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  benefitsIntro: string;
  benefits: HospitalBillingOverviewBenefit[];
}

export interface HospitalBillingAssessmentCtaSectionData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  buttonText: string;
  buttonHref: string;
}

export interface HospitalBillingExperienceSectionData {
  titlePlain: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc?: string;
  imageAlt?: string;
  checklist: string[];
}

export interface HospitalBillingWeAlsoDoItem {
  title: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface HospitalBillingWeAlsoDoSectionData {
  titlePlain: string;
  titleHighlight: string;
  items: HospitalBillingWeAlsoDoItem[];
}

export interface HospitalBillingNeedSectionData {
  title: string;
  paragraph1: string;
  paragraph2: string;
  benefits: string[];
  decisionTitle: string;
  decisionFooter: string;
  yesLabel?: string;
  noLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
}

export interface HospitalBillingTeamMember {
  name: string;
  bio: string;
  quote: string;
  imageSrc?: string;
  imageAlt?: string;
  linkedinUrl?: string;
}

export interface HospitalBillingTeamSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  members: HospitalBillingTeamMember[];
}

export interface HospitalBillingAffordableAccordionItem {
  title: string;
  description: string;
}

export interface HospitalBillingAffordableSectionData {
  title: string;
  paragraph1: string;
  accordionIntro: string;
  accordionItems: HospitalBillingAffordableAccordionItem[];
  workflowLabels: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface HospitalBillingRcmService {
  title: string;
  description: string;
  iconName?: string;
}

export interface HospitalBillingRcmSectionData {
  ctaTitle: string;
  ctaSubtext: string;
  ctaButtonText: string;
  ctaButtonHref: string;
  title: string;
  paragraph1: string;
  servicesIntro: string;
  services: HospitalBillingRcmService[];
}

export interface HospitalBillingCodingSlide {
  title: string;
  description: string;
  iconName?: string;
}

export interface HospitalBillingCodingSectionData {
  titlePlain: string;
  titleHighlight: string;
  paragraph1: string;
  ctaText: string;
  ctaHref: string;
  carouselIntro: string;
  slides: HospitalBillingCodingSlide[];
}

export interface HospitalBillingComplianceChecklistSectionData {
  title: string;
  description: string;
  buttonText: string;
}

export interface HospitalBillingPatientManagementSectionData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  withoutTitle: string;
  withTitle: string;
  withoutPoints: string[];
  withPoints: string[];
}

export interface HospitalBillingTestimonialItem {
  reviewTitle: string;
  name: string;
  text: string;
  date: string;
  rating?: number;
  id?: string;
}

export interface HospitalBillingTestimonialsSectionData {
  titlePlain: string;
  titleHighlight: string;
  trustpilotRating: string;
  trustpilotReviewCount: string;
  items: HospitalBillingTestimonialItem[];
}

export interface HospitalBillingTransformFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface HospitalBillingTransformSectionData {
  titlePlain: string;
  titleHighlight: string;
  description: string;
  features: HospitalBillingTransformFeature[];
}

export interface HospitalBillingSoftwareFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface HospitalBillingSoftwareSectionData {
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  introParagraph: string;
  features: HospitalBillingSoftwareFeature[];
  ctaText: string;
  ctaHref: string;
}

export interface HospitalBillingWhySectionData {
  title: string;
  subtitle: string;
  questions: string[];
  subheading: string;
  paragraph1: string;
  paragraph2: string;
  statValue: string;
  statDescription: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface HospitalBillingScheduleCallSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface HospitalBillingPromiseCard {
  title: string;
  description: string;
}

export interface HospitalBillingPromiseSectionData {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  cards: HospitalBillingPromiseCard[];
}

export interface HospitalBillingFaqItem {
  question: string;
  answer: string;
}

export interface HospitalBillingFaqSectionData {
  badge?: string;
  titlePlain: string;
  titleHighlight: string;
  description?: string;
  defaultOpenIndex?: number;
  items: HospitalBillingFaqItem[];
  helpTitle?: string;
  helpDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  footerNote?: string;
}

export interface HospitalBillingServicesHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  description1: string;
  description2: string;
  phoneText: string;
  phoneLink: string;
  ctaText: string;
  ctaHref: string;
  stats: HospitalBillingHeroStat[];
}

export interface HospitalBillingResultsMetric {
  value: string;
  valuePrefix?: string;
  label: string;
  gaugePercent: number;
}

export interface HospitalBillingResultsSectionData {
  titlePlain: string;
  titleHighlight: string;
  hospitalTypes: string[];
  metrics: HospitalBillingResultsMetric[];
}

import type { PageSeo } from './seo';

export interface HospitalBillingServicesPageData {
  seo?: PageSeo;
  hero: HospitalBillingServicesHeroData;
  results: HospitalBillingResultsSectionData;
  overview: HospitalBillingOverviewSectionData;
  whatAre: HospitalBillingWhatAreSectionData;
  weAlsoDo: HospitalBillingWeAlsoDoSectionData;
  need: HospitalBillingNeedSectionData;
  team: HospitalBillingTeamSectionData;
  affordable: HospitalBillingAffordableSectionData;
  rcm: HospitalBillingRcmSectionData;
  coding: HospitalBillingCodingSectionData;
  complianceChecklist: HospitalBillingComplianceChecklistSectionData;
  patientManagement: HospitalBillingPatientManagementSectionData;
  testimonials: HomepageTestimonials | HospitalBillingTestimonialsSectionData;
  transform: HospitalBillingTransformSectionData;
  software: HospitalBillingSoftwareSectionData;
  why: HospitalBillingWhySectionData;
  promise: HospitalBillingPromiseSectionData;
  faq: HospitalBillingFaqSectionData;
  scheduleCall: HospitalBillingScheduleCallSectionData;
  assessmentCta: HospitalBillingAssessmentCtaSectionData;
  experience: HospitalBillingExperienceSectionData;
}
