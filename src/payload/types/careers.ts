export interface CareersHeroPerk {
  id?: string;
  iconName: string;
  label: string;
}

export interface CareersHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  perks: CareersHeroPerk[];
}

export interface CareersFormSectionData {
  title: string;
  subtitle: string;
  successTitle: string;
  successDescription: string;
  departments: string[];
}

export interface CareersFaqItem {
  q: string;
  a: string;
}

export interface CareersFaqData {
  badge?: string;
  titlePlain?: string;
  titleHighlight?: string;
  description?: string;
  faqs?: CareersFaqItem[];
}

export interface CareersCtaData {
  badge?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export interface CareersData {
  hero: CareersHeroData;
  formSection: CareersFormSectionData;
  faq?: CareersFaqData;
  cta?: CareersCtaData;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    robots: string;
    canonicalUrl: string;
  };
}

