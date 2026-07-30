export interface TermsAndConditionsSection {
  title: string;
  content: string;
}

import type { PageSeo } from './seo';

export interface TermsAndConditionsData {
  seo?: PageSeo;
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    effectiveDate: string;
  };
  sections: TermsAndConditionsSection[];
  contactInfo: {
    heading: string;
    email: string;
    phone: string;
  };
}
