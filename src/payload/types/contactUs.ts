export interface ContactHeroHighlightItem {
  title: string;
  desc: string;
  iconName?: string;
}

export interface ContactHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  highlights: ContactHeroHighlightItem[];
}

export interface ContactChannelItem {
  title: string;
  details: string;
  subtext: string;
  iconName?: string;
  href?: string | null;
}

export interface ContactFormSectionData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  channels: ContactChannelItem[];
  guaranteeTitle: string;
  guaranteeDescription: string;
  formBadge: string;
  formTitlePlain: string;
  formTitleHighlight: string;
  formSubtitle: string;
  serviceOptions: (string | { label?: string })[];
}

export interface ContactFaqItem {
  q: string;
  a: string;
}

export interface ContactFaqData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  faqs: ContactFaqItem[];
}

export interface ContactCtaData {
  badge: string;
  title: string;
  description: string;
  highlights: (string | { label?: string })[];
  primaryBtnText: string;
  primaryBtnLink: string;
  phoneText: string;
  phoneLink: string;
}

export interface ContactUsPageData {
  hero: ContactHeroData;
  formSection: ContactFormSectionData;
  faq: ContactFaqData;
  cta: ContactCtaData;
}
