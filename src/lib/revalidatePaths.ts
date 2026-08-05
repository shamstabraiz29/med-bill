import { revalidatePath } from 'next/cache'

/** Maps Payload global slugs to frontend routes that consume them. */
const GLOBAL_PATHS: Record<string, string[]> = {
  homepage: ['/'],
  'about-us': ['/about-us', '/about-bellmedex'],
  'contact-us': ['/contact-us', '/contact-bellmedex'],
  'medical-billing-pricing': ['/medical-billing-pricing-bellmedex', '/pricing'],
  'schedule-demo': ['/schedule-a-demo'],
  'medical-billing': ['/medical-billing'],
  'medical-coding': ['/medical-coding'],
  'revenue-cycle-management': ['/rcm', '/revenue-cycle-management-rcm'],
  'medical-billing-audit': ['/medical-billing-audit'],
  clearinghouse: ['/clearinghouse'],
  'provider-credentialing': ['/provider-credentialing', '/credentialing'],
  'healthcare-seo': ['/healthcare-seo'],
  'medical-billing-software': ['/medical-billing-software'],
  'fusionedi-clearinghouse': ['/fusionedi-clearinghouse', '/fusionedi'],
  'electronic-health-records-ehr': ['/electronic-health-records-ehr', '/free-ehr'],
  'practice-management-software-pms': ['/practice-management-software-pms', '/free-pms'],
  'outsource-medical-billing': ['/outsource-medical-billing'],
  'large-practices': ['/large-practices'],
  'small-practices': ['/small-practices'],
  'physician-billing-services': ['/physician-billing-services'],
  'denial-management-services': ['/denial-management-services'],
  'hospital-billing-services': ['/hospital-billing-services'],
  careers: ['/careers', '/bellmedex-careers'],
  'testimonials-page': ['/testimonials', '/bellmedex-client-testimonials'],
  'privacy-policy': ['/privacy-policy'],
  'terms-and-conditions': ['/terms-and-conditions'],
  'cookies-policy': ['/cookies-policy'],
}

export function revalidatePathsForGlobal(slug: string): void {
  const paths = GLOBAL_PATHS[slug] ?? []

  for (const path of paths) {
    revalidatePath(path)
  }
}

export function revalidatePathsForPost(slug?: string | null): void {
  revalidatePath('/blog')
  revalidatePath('/blogs')

  if (slug) {
    revalidatePath(`/blog/${slug}`)
  }
}
