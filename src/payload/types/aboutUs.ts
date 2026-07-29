export interface AboutHeroChecklistItem {
  label: string;
}

export interface AboutHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  checklist: AboutHeroChecklistItem[];
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  imageSrc?: string;
  imageAlt?: string;
  topBadgeLabel: string;
  topBadgeTitle: string;
  bottomStatLabel: string;
  bottomStatValue: string;
  bottomStatSubtext: string;
  bottomBadgeText: string;
}

export interface AboutValueItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface AboutMissionVisionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  missionBadge: string;
  missionTitle: string;
  missionDescription: string;
  visionBadge: string;
  visionTitle: string;
  visionDescription: string;
  valuesBadge: string;
  valuesTitlePlain: string;
  valuesTitleHighlight: string;
  valuesDescription: string;
  values: AboutValueItem[];
}

export interface AboutCapabilityItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface AboutCapabilitiesData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  capabilities: AboutCapabilityItem[];
}

export interface AboutPillarItem {
  title: string;
  desc: string;
  iconName?: string;
}

export interface AboutMetricItem {
  label: string;
  value: string;
  badgeText: string;
}

export interface AboutWhyUsData {
  badge: string;
  titlePlain: string;
  subtitle: string;
  pillars: AboutPillarItem[];
  impactBadge: string;
  impactTitle: string;
  metrics: AboutMetricItem[];
}

export interface AboutCtaData {
  badge?: string;
  title?: string;
  titlePlain?: string;
  titleHighlight?: string;
  description: string;
  highlights: (string | { label?: string })[];
  buttonText: string;
  buttonLink: string;
}

export interface AboutUsPageData {
  hero: AboutHeroData;
  missionVision: AboutMissionVisionData;
  capabilities: AboutCapabilitiesData;
  whyUs: AboutWhyUsData;
  cta: AboutCtaData;
}
