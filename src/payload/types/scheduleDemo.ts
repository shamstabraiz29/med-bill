export interface ScheduleDemoHeroData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  highlights: (string | { label?: string })[];
}

export interface ScheduleDemoFormData {
  badge: string;
  titlePlain: string;
  titleHighlight: string;
  description: string;
  roleOptions: (string | { label?: string })[];
  collectionsOptions: (string | { label?: string })[];
  submitBtnText: string;
}

export interface ScheduleDemoPageData {
  hero: ScheduleDemoHeroData;
  formSection: ScheduleDemoFormData;
}
