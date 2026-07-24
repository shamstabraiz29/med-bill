export interface ClearinghouseSEO {
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

export interface ClearinghouseHeroData {
  badge: string
  titlePrefix: string
  titleHighlight: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  imageSrc: string
  badge1Value: string
  badge1Label: string
  badge2Value: string
  badge2Label: string
}

export interface CapabilityItemHighlight {
  label: string
}

export interface CapabilityItemData {
  id: string
  category: string
  iconName: string
  title: string
  description: string
  highlights: CapabilityItemHighlight[]
  link: string
  linkLabel: string
}

export interface ClearinghouseCapabilitiesData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  items: CapabilityItemData[]
}

export interface WhyChooseFeatureData {
  id: string
  badge: string
  iconName: string
  title: string
  subtitle: string
  description: string
  statValue: string
  statLabel: string
  imageSrc: string
}

export interface WhyChooseClearinghouseData {
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix: string
  description: string
  features: WhyChooseFeatureData[]
}

export interface DirectPayersFeatureData {
  iconName: string
  title: string
  description: string
}

export interface DirectPayersCTAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
  features: DirectPayersFeatureData[]
}

export interface ValueFeatureData {
  iconName: string
  title: string
  description: string
}

export interface ClearinghouseValueFeaturesData {
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix: string
  description: string
  features: ValueFeatureData[]
  metricValue: string
  metricLabel: string
}

export interface EftEraFeatureData {
  title: string
  description: string
}

export interface ClearinghouseEFTERAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  points: EftEraFeatureData[]
  metricValue: string
  metricLabel: string
}

export interface StatItemData {
  value: string
  label: string
}

export interface ClearinghouseStatsData {
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix: string
  description: string
  stats: StatItemData[]
}

export interface TextLabelItem {
  label: string
}

export interface ClearinghouseEDISecurityData {
  ediBadge: string
  ediTitlePlain: string
  ediTitleHighlight: string
  ediPoints: TextLabelItem[]
  ediBadgeValue: string
  ediBadgeLabel: string
  hipaaBadge: string
  hipaaTitlePlain: string
  hipaaTitleHighlight: string
  hipaaDescription: string
  hipaaPoints: TextLabelItem[]
  hipaaBadgeValue: string
  hipaaBadgeLabel: string
}

export interface RcmFunctionItemData {
  iconName: string
  title: string
  description: string
}

export interface ClearinghouseRCMFunctionsData {
  badge: string
  titlePlain: string
  titleHighlight: string
  titleSuffix: string
  description: string
  functions: RcmFunctionItemData[]
}

export interface ReduceErrorRatesFeatureData {
  iconName: string
  title: string
  description: string
}

export interface ReduceErrorRatesCTAData {
  badge: string
  titlePlain: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
  features: ReduceErrorRatesFeatureData[]
}

export interface ClearinghouseData {
  seo: ClearinghouseSEO
  hero: ClearinghouseHeroData
  capabilities: ClearinghouseCapabilitiesData
  whyChoose: WhyChooseClearinghouseData
  directPayersCta: DirectPayersCTAData
  valueFeatures: ClearinghouseValueFeaturesData
  eftEra: ClearinghouseEFTERAData
  stats: ClearinghouseStatsData
  ediSecurity: ClearinghouseEDISecurityData
  rcmFunctions: ClearinghouseRCMFunctionsData
  reduceErrorRatesCta: ReduceErrorRatesCTAData
}
