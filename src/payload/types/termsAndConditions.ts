export interface TermsAndConditionsSection {
  title: string;
  content: string;
}

export interface TermsAndConditionsData {
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
