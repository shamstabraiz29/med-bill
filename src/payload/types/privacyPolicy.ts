export interface PrivacyPolicySection {
  title: string;
  content: string;
}

import type { PageSeo } from './seo';

export interface PrivacyPolicyData {
  seo?: PageSeo;
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    lastUpdated: string;
  };
  sections: PrivacyPolicySection[];
  contactInfo: {
    heading: string;
    email: string;
    phone: string;
  };
}
