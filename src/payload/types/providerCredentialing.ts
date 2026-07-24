export interface ProviderCredentialingSEO {
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

export interface ProviderCredentialingHeroData {
  badge: string
  titlePrefix: string
  titleHighlight: string
  description1: string
  description2: string
  description3: string
  formTitle: string
  formDescription: string
  formBadge: string
  formCtaLabel: string
  successMessage: string
  imageSrc: string
  cardTitle: string
  cardSubtitle: string
}

export interface ExpectationItemData {
  iconName: string
  title: string
  description: string
}

export interface CredentialingWhatToExpectData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  expectations: ExpectationItemData[]
}

export interface SoloPractitionerFeatureData {
  iconName: string
  title: string
  description: string
}

export interface SoloPractitionerCTAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
  features: SoloPractitionerFeatureData[]
}

export interface PremiumPayerNetworksData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description1: string
  description2: string
  description3: string
  ctaLabel: string
  ctaHref: string
  imageSrc: string
  cardTitle: string
  cardSubtitle: string
}

export interface WorkflowStepData {
  stepNumber: number
  title: string
  description: string
}

export interface CredentialingWorkflowStepsData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  steps: WorkflowStepData[]
}

export interface ExpeditedServiceItemData {
  title: string
  description: string
}

export interface ExpeditedCredentialingServicesData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  block1Features: ExpeditedServiceItemData[]
  block1ImageSrc: string
  block1CardTitle: string
  block1CardSubtitle: string
  banner1TextPlain: string
  banner1TextHighlight: string
  banner1CtaLabel: string
  banner1CtaHref: string
  block2Features: ExpeditedServiceItemData[]
  block2ImageSrc: string
  block2CardTitle: string
  block2CardSubtitle: string
  banner2TextPlain: string
  banner2TextHighlight: string
  banner2CtaLabel: string
  banner2CtaHref: string
  block3Features: ExpeditedServiceItemData[]
  block3ImageSrc: string
  block3CardTitle: string
  block3CardSubtitle: string
  banner3TextPlain: string
  banner3TextHighlight: string
  banner3CtaLabel: string
  banner3CtaHref: string
}

export interface BenefitTextItem {
  label: string
}

export interface BenefitsOfOutsourcingCredentialingData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description1: string
  description2: string
  benefits: BenefitTextItem[]
  ctaLabel: string
  ctaHref: string
  imageSrc: string
  cardTitle: string
  cardSubtitle: string
}

export interface HealthcareEntityItemData {
  iconName: string
  title: string
}

export interface HealthcareEntitiesGridData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  entities: HealthcareEntityItemData[]
}

export interface PayerTypeItemData {
  iconName: string
  title: string
  examples: string
}

export interface EnrollFavoritePayersData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  payerTypes: PayerTypeItemData[]
}

export interface PricingFeatureData {
  label: string
  included: boolean
}

export interface DetailChecklistItemData {
  label: string
}

export interface PricingTierData {
  name: string
  popular?: boolean
  coreFeatures: PricingFeatureData[]
  detailChecklist: DetailChecklistItemData[]
}

export interface CredentialingPricingPackagesData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  tiers: PricingTierData[]
}

export interface RedTapeFeatureData {
  iconName: string
  title: string
  description: string
}

export interface RedTapeCTAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
  features: RedTapeFeatureData[]
}

export interface ProviderCredentialingData {
  seo: ProviderCredentialingSEO
  hero: ProviderCredentialingHeroData
  whatToExpect: CredentialingWhatToExpectData
  soloPractitionerCta: SoloPractitionerCTAData
  premiumPayerNetworks: PremiumPayerNetworksData
  workflowSteps: CredentialingWorkflowStepsData
  expeditedServices: ExpeditedCredentialingServicesData
  benefitsOfOutsourcing: BenefitsOfOutsourcingCredentialingData
  healthcareEntities: HealthcareEntitiesGridData
  enrollFavoritePayers: EnrollFavoritePayersData
  pricingPackages: CredentialingPricingPackagesData
  redTapeCta: RedTapeCTAData
}
