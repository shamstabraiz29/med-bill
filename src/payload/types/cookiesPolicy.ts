export interface CookieTypeItem {
  name: string;
  desc: string;
}

export interface CookiesPolicySection {
  title: string;
  content?: string;
  types?: CookieTypeItem[];
}

export interface CookiesPolicyData {
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    lastUpdated: string;
  };
  sections: CookiesPolicySection[];
  contactInfo: {
    heading: string;
    email: string;
    phone: string;
  };
}
