export interface PhysicianHeroFaq {
  question: string;
  answer: string;
}

export interface PhysicianSplitSection {
  badge: string;
  headingId: string;
  titlePlain: string;
  titleHighlight: string;
  paragraphs: { text: string }[];
  imageSrc: string;
  imageAlt?: string;
  ctaLabel: string;
  ctaHref: string;
  imagePosition?: "left" | "right";
}

export interface PhysicianExploreFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface PhysicianBillingServicesPageData {
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    faqItems: PhysicianHeroFaq[];
  };
  splitSections: PhysicianSplitSection[];
  mipsSection: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    paragraphs: { text: string }[];
    ctaText: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt?: string;
  };
  exploreFeatures: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    features: PhysicianExploreFeature[];
  };
  demoCta: {
    rateLabel: string;
    rateValue: string;
    rateSubtext: string;
    buttonText: string;
    buttonHref: string;
  };
}
