export interface PrivacyPolicySection {
  title: string;
  content: string;
}

export interface PrivacyPolicyData {
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
