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

import type { PageSeo } from './seo';

export interface ScheduleDemoPageData {
  seo?: PageSeo;
  hero: ScheduleDemoHeroData;
  formSection: ScheduleDemoFormData;
}
