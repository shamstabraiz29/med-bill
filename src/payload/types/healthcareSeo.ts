export interface HealthcareSeoSEO {
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

export interface HealthcareSeoHeroData {
  badge: string
  titlePrefix: string
  titleHighlight: string
  subtitle: string
  leftImageSrc: string
  leftBadgeTag: string
  leftBadgeStatus: string
  leftMetricValue: string
  leftMetricLabel: string
  formButtonLabel: string
  successTitle: string
  successDescription: string
  rightImageSrc: string
  rightBadgeTag: string
  rightMetricValue: string
  rightMetricLabel: string
}

export interface SeoPillarItemData {
  iconName: string
  title: string
  description: string
}

export interface HealthcareSeoPillarsData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  pillars: SeoPillarItemData[]
}

export interface ValuePropItemData {
  id: string
  iconName: string
  title: string
  detail: string
}

export interface HealthcareSeoExpertiseData {
  badge: string
  titlePrefix: string
  titleHighlight: string
  description: string
  cardTitle: string
  cardDescription: string
  ctaLabel: string
  ctaHref: string
  valueProps: ValuePropItemData[]
}

export interface DetailTextItem {
  label: string
}

export interface SeoFeatureDetailData {
  id: string
  title: string
  tagline: string
  description: string
  ctaLabel: string
  ctaHref: string
  accentBg: string
  iconName: string
  imageSrc: string
  moreDetails: DetailTextItem[]
}

export interface HealthcareSeoServicesListData {
  bannerTitlePlain: string
  bannerTitleHighlight: string
  bannerCtaLabel: string
  bannerCtaHref: string
  services: SeoFeatureDetailData[]
}

export interface HealthcareSeoPricingUnlockCTAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  formTitle: string
  formDescription: string
  formCtaLabel: string
  successTitle: string
  successDescription: string
}

export interface OtherServiceItemData {
  title: string
  href: string
  image: string
}

export interface HealthcareSeoHipaaAndServicesData {
  hipaaBadgeText: string
  hipaaTitle: string
  hipaaDescription: string
  hipaaTag: string
  otherServicesTitle: string
  otherServicesDescription: string
  otherServicesCtaLabel: string
  otherServicesCtaHref: string
  otherServices: OtherServiceItemData[]
}

export interface HealthcareSeoScheduleConsultationData {
  title: string
  subtitle: string
  formCtaLabel: string
  successTitle: string
  successDescription: string
  imageSrc: string
  cardTitle: string
  cardSubtitle: string
  cardBadge: string
}

export interface HealthcareSeoData {
  seo: HealthcareSeoSEO
  hero: HealthcareSeoHeroData
  pillars: HealthcareSeoPillarsData
  expertise: HealthcareSeoExpertiseData
  servicesList: HealthcareSeoServicesListData
  pricingUnlockCta: HealthcareSeoPricingUnlockCTAData
  hipaaAndServices: HealthcareSeoHipaaAndServicesData
  scheduleConsultation: HealthcareSeoScheduleConsultationData
}
