// ─────────────────────────────────────────────────────────
// TypeScript interfaces for Homepage CMS data
// Mirrors the Payload Homepage Global field structure
// ─────────────────────────────────────────────────────────

/** SEO / Meta fields */
export interface HomepageSeo {
  metaTitle: string
  metaDescription: string
  keywords?: string
  canonicalUrl?: string
  robots?: string
  openGraph?: {
    ogTitle?: string
    ogDescription?: string
    ogType?: string
    ogUrl?: string
  }
}

/** Hero Section */
export interface HomepageHero {
  eyebrow: string
  titlePrefix: string
  titleHighlight: string
  titleSuffix?: string
  description1: string
  description2: string
  formButtonLabel?: string
  successTitle?: string
  successDescription?: string
  trustBadges?: Array<{ label: string; id?: string }>
}

/** Stat item used in StatsCards and TrustStats */
export interface StatItem {
  value: string
  label: string
  subLabel: string
  iconName: string
  id?: string
}

/** Stats Cards Section */
export interface HomepageStatsCards {
  items: StatItem[]
}

/** Service item */
export interface ServiceItem {
  title: string
  description: string
  iconName: string
  link: string
  linkLabel?: string
  id?: string
}

/** Services Overview Section */
export interface HomepageServicesOverview {
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix?: string
  description: string
  services: ServiceItem[]
}

/** CTA link */
export interface CtaLink {
  primaryLabel: string
  primaryHref: string
}

/** Process step */
export interface ProcessStep {
  stepLabel: string
  title: string
  description: string
  iconName: string
  id?: string
}

/** Performance metric */
export interface Metric {
  value: string
  label: string
  id?: string
}

/** Medical Claims Section */
export interface HomepageMedicalClaims {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  steps: ProcessStep[]
  metrics: Metric[]
  primaryCta: CtaLink
  secondaryCta: {
    secondaryLabel: string
    secondaryHref: string
  }
}

/** Rating badge */
export interface RatingBadge {
  platform: string
  label: string
  value: string
  subLabel?: string
  color?: string
  id?: string
}

/** Card data used in Trust Stats bottom section */
export interface TrustCard {
  badge: string
  value: string
  description?: string
  linkLabel?: string
  linkHref?: string
}

/** Trust Stats Section */
export interface HomepageTrustStats {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  mainStats: StatItem[]
  ratingBadges: RatingBadge[]
  bottomTitle?: string
  bottomTitleHighlight?: string
  bottomTitleSuffix?: string
  bottomDescription?: string
  checklist: Array<{ label: string; id?: string }>
  happinessScore: TrustCard
  billingExperts: TrustCard
}

/** Feature item */
export interface FeatureItem {
  title: string
  description: string
  iconName: string
  id?: string
}

/** Billing CTA Section */
export interface HomepageBillingCta {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
  features: FeatureItem[]
}

/** Doctors Team Section */
export interface HomepageDoctorsTeam {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  floatingWidget1?: string
  floatingWidget2?: string
  traditionalAgencyText?: string
  bellmedexText?: string
  ctaLabel: string
  ctaHref: string
}

/** Provider Challenges Section */
export interface HomepageProviderChallenges {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  challenges: Array<{ label: string; id?: string }>
  formTitle?: string
  formDescription?: string
  formCtaLabel?: string
}

/** Specialty item */
export interface SpecialtyItem {
  title: string
  description: string
  iconName: string
  link: string
  popular?: boolean
  id?: string
}

/** Specialty Billing Section */
export interface HomepageSpecialtyBilling {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  specialties: SpecialtyItem[]
  ctaLabel: string
  ctaHref: string
}

/** Pricing Benefit */
export interface PricingBenefit {
  title: string
  description: string
  iconName: string
  id?: string
}

/** Nationwide Pricing Section */
export interface HomepageNationwidePricing {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  benefits: PricingBenefit[]
  primaryCta: CtaLink
  secondaryCta: {
    secondaryLabel: string
    secondaryHref: string
  }
  footerNote?: string
}

/** Pricing Quote Section */
export interface HomepagePricingQuote {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  specialties: Array<{ label: string; id?: string }>
  providerCounts: Array<{ label: string; id?: string }>
  claimVolumes: Array<{ label: string; id?: string }>
  services: Array<{ label: string; id?: string }>
  highlights: FeatureItem[]
  trustBadges: Array<{ label: string; id?: string }>
}

/** Testimonial item */
export interface TestimonialItem {
  name: string
  specialty: string
  clinicName?: string
  text: string
  avatarPath?: string
  rating?: number
  id?: string
}

/** Testimonials Section */
export interface HomepageTestimonials {
  preHeader?: string
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix?: string
  description: string
  items: TestimonialItem[]
}

/** FAQ item */
export interface FaqItem {
  question: string
  answer: string
  id?: string
}

/** FAQ Section */
export interface HomepageFaq {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  faqs: FaqItem[]
  helpTitle?: string
  helpDescription?: string
  primaryCta: CtaLink
  secondaryCta: {
    secondaryLabel: string
    secondaryHref: string
  }
  footerNote?: string
}

// ─────────────────────────────────────────────────────────
// Root Homepage Data Type
// ─────────────────────────────────────────────────────────
export interface HomepageData {
  seo: HomepageSeo
  hero: HomepageHero
  statsCards: HomepageStatsCards
  servicesOverview: HomepageServicesOverview
  medicalClaims: HomepageMedicalClaims
  trustStats: HomepageTrustStats
  billingCta: HomepageBillingCta
  doctorsTeam: HomepageDoctorsTeam
  providerChallenges: HomepageProviderChallenges
  specialtyBilling: HomepageSpecialtyBilling
  nationwidePricing: HomepageNationwidePricing
  pricingQuote: HomepagePricingQuote
  testimonials: HomepageTestimonials
  faq: HomepageFaq
}
