import { cn } from "@/lib/utils";

/** Matches homepage ServicesOverview / MedicalClaimsService card hover */
export const homeFeatureCardClassName =
  "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8";

/** Matches homepage ServicesOverview icon treatment (no icon background) */
export const homeFeatureIconClassName =
  "mb-5 text-primary transition-transform duration-300 group-hover:scale-110 sm:mb-6";

export const homeFeatureTitleClassName =
  "mb-3 text-base font-bold leading-snug tracking-[-0.02em] text-foreground";

export const homeFeatureDescriptionClassName =
  "text-xs leading-[1.6] text-muted-foreground sm:text-[13px]";

export const homeFeatureLinkClassName =
  "inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-secondary";

export function cnHomeFeatureCard(className?: string) {
  return cn(homeFeatureCardClassName, className);
}
