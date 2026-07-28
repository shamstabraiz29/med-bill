export interface SmallPracticeTrustStat {
  value: string;
  label: string;
}

export interface SmallPracticeHeroBenefit {
  title: string;
  description: string;
}

export interface SmallPracticeCollaborateService {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

export interface SmallPracticeAffordableBenefit {
  text: string;
}

export interface SmallPracticeRevenueLossStat {
  iconName: string;
  description: string;
}

export interface SmallPracticeBillingStepItem {
  text: string;
}

export interface SmallPracticeBillingStep {
  iconName: string;
  title: string;
  items: SmallPracticeBillingStepItem[] | string[];
}

export interface SmallPracticeEaseFeature {
  iconName: string;
  description: string;
}

export interface SmallPracticesPageData {
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    trustStats: SmallPracticeTrustStat[];
    benefits: SmallPracticeHeroBenefit[];
    formTitle: string;
    formSubtitle: string;
  };
  collaborate: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    titleSuffix: string;
    services: SmallPracticeCollaborateService[];
  };
  affordableBilling: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    mainTitlePlain: string;
    mainTitleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    imageSrc: string;
    imageAlt: string;
    benefits: (SmallPracticeAffordableBenefit | string)[];
  };
  specialtyForm: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
  };
  revenueLoss: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    stats: SmallPracticeRevenueLossStat[];
  };
  billingProcess: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    steps: SmallPracticeBillingStep[];
  };
  easeBilling: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    features: SmallPracticeEaseFeature[];
  };
  transparency: {
    titlePlain: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  partnerCta: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
}
