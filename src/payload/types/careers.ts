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

export interface CareersData {
  hero: CareersHeroData;
  formSection: CareersFormSectionData;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    robots: string;
    canonicalUrl: string;
  };
}
