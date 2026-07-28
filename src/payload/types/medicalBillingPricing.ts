export interface PricingHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  highlights: (string | { label?: string })[];
}

export interface PricingUnlockFormData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  roleOptions: (string | { label?: string })[];
  collectionsOptions: (string | { label?: string })[];
  submitBtnText: string;
}

export interface MedicalBillingPricingPageData {
  hero: PricingHeroData;
  unlockForm: PricingUnlockFormData;
}
