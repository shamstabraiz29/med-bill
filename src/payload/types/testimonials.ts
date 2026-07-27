export interface TestimonialStat {
  value: string;
  label: string;
  iconName?: string;
}

export interface TestimonialItemData {
  id?: string;
  name: string;
  role: string;
  clinic: string;
  specialty: string;
  quote: string;
  rating: number;
  avatar: string;
  roiStat: string;
  verified: boolean;
}

export interface TestimonialsHeroData {
  badge: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  stats: TestimonialStat[];
}

export interface FeaturedTestimonialData {
  verifiedBadgeText: string;
  quote: string;
  authorName: string;
  authorRole: string;
  metrics: { label: string }[] | string[];
  authorImageSrc: string;
}

export interface TestimonialsCTAData {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: { label: string }[] | string[];
  buttonText: string;
  buttonLink: string;
}

export interface TestimonialsPageData {
  hero: TestimonialsHeroData;
  featuredTestimonial: FeaturedTestimonialData;
  testimonialsList: TestimonialItemData[];
  cta: TestimonialsCTAData;
}
