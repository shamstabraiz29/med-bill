export interface FusionediFeatureItem {
  iconName?: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface FusionediStepItem {
  stepLabel: string;
  iconName?: string;
  title: string;
  description: string;
}

export interface FusionediOfferItem {
  iconName?: string;
  title: string;
  description: string;
}

export interface FusionediSolutionItem {
  iconName?: string;
  title: string;
  description: string;
}

export interface EdiTransferItem {
  title: string;
  description: string;
  iconName?: string;
  side?: "left" | "right";
}

export interface FusionediHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface FusionediDashboardData {
  imageSrc: string;
  imageAlt: string;
}

export interface FusionediFeaturesData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  features: FusionediFeatureItem[];
}

export interface FusionediGetStartedStepsData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  steps: FusionediStepItem[];
}

export interface FusionediWhatWeOfferData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  offers: FusionediOfferItem[];
}

export interface FusionediSolutionsData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  solutions: FusionediSolutionItem[];
}

export interface FusionediEdiTransfersData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  transfers: EdiTransferItem[];
}

export interface FusionediGetStartedCtaData {
  highlights: (string | { label?: string })[];
  titlePlain: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface FusionediClearinghousePageData {
  hero: FusionediHeroData;
  dashboard: FusionediDashboardData;
  features: FusionediFeaturesData;
  getStartedSteps: FusionediGetStartedStepsData;
  whatWeOffer: FusionediWhatWeOfferData;
  solutions: FusionediSolutionsData;
  ediTransfers: FusionediEdiTransfersData;
  getStartedCta: FusionediGetStartedCtaData;
}
