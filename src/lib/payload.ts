import { getPayload } from 'payload'
import config from '@payload-config'
import type { HomepageData } from '@/payload/types/homepage'
import { defaultHomepageData } from '@/lib/defaults/homepage'
import type { ClearinghouseData } from '@/payload/types/clearinghouse'
import { defaultClearinghouseData } from '@/lib/defaults/clearinghouse'
import type { ProviderCredentialingData } from '@/payload/types/providerCredentialing'
import { defaultProviderCredentialingData } from '@/lib/defaults/providerCredentialing'
import type { HealthcareSeoData } from '@/payload/types/healthcareSeo'
import { defaultHealthcareSeoData } from '@/lib/defaults/healthcareSeo'
import type { RevenueCycleManagementData } from '@/payload/types/revenueCycleManagement'
import { defaultRevenueCycleManagementData } from '@/lib/defaults/revenueCycleManagement'
import type { MedicalBillingData } from '@/payload/types/medicalBilling'
import { defaultMedicalBillingData } from '@/lib/defaults/medicalBilling'
import type { MedicalCodingData } from '@/payload/types/medicalCoding'
import { defaultMedicalCodingData } from '@/lib/defaults/medicalCoding'
import type { MedicalBillingAuditData } from '@/payload/types/medicalBillingAudit'
import { defaultMedicalBillingAuditData } from '@/lib/defaults/medicalBillingAudit'
import type { BlogPost } from '@/components/blog/BlogCard'
import { defaultBlogPosts } from '@/lib/defaults/blogs'
import type { CareersData } from '@/payload/types/careers'
import { defaultCareersData } from '@/lib/defaults/careers'

/**
 * Fetches the Homepage global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getHomepageData(): Promise<HomepageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'homepage',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultHomepageData, data as unknown as Partial<HomepageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch homepage data, using defaults:', error)
    return defaultHomepageData
  }
}

/**
 * Fetches the Clearinghouse global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getClearinghouseData(): Promise<ClearinghouseData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'clearinghouse',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultClearinghouseData, data as unknown as Partial<ClearinghouseData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch clearinghouse data, using defaults:', error)
    return defaultClearinghouseData
  }
}

/**
 * Fetches the Provider Credentialing global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getProviderCredentialingData(): Promise<ProviderCredentialingData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'provider-credentialing',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultProviderCredentialingData, data as unknown as Partial<ProviderCredentialingData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch provider credentialing data, using defaults:', error)
    return defaultProviderCredentialingData
  }
}

/**
 * Fetches the Healthcare SEO global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getHealthcareSeoData(): Promise<HealthcareSeoData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'healthcare-seo',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultHealthcareSeoData, data as unknown as Partial<HealthcareSeoData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch healthcare seo data, using defaults:', error)
    return defaultHealthcareSeoData
  }
}

/**
 * Fetches the Revenue Cycle Management global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getRevenueCycleManagementData(): Promise<RevenueCycleManagementData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'revenue-cycle-management',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultRevenueCycleManagementData, data as unknown as Partial<RevenueCycleManagementData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch revenue cycle management data, using defaults:', error)
    return defaultRevenueCycleManagementData
  }
}

/**
 * Fetches the Medical Billing global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getMedicalBillingData(): Promise<MedicalBillingData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'medical-billing',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultMedicalBillingData, data as unknown as Partial<MedicalBillingData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch medical billing data, using defaults:', error)
    return defaultMedicalBillingData
  }
}

/**
 * Fetches the Medical Coding global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getMedicalCodingData(): Promise<MedicalCodingData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'medical-coding',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultMedicalCodingData, data as unknown as Partial<MedicalCodingData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch medical coding data, using defaults:', error)
    return defaultMedicalCodingData
  }
}

/**
 * Fetches the Medical Billing Audit global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getMedicalBillingAuditData(): Promise<MedicalBillingAuditData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'medical-billing-audit',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultMedicalBillingAuditData, data as unknown as Partial<MedicalBillingAuditData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch medical billing audit data, using defaults:', error)
    return defaultMedicalBillingAuditData
  }
}

/**
 * Fetches all blog posts from Payload CMS (posts collection).
 * Falls back to default sample posts on any error or empty database.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'posts',
      limit: 100,
      sort: '-publishedAt',
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs.map((doc: any) => ({
        id: String(doc.id),
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt,
        category: doc.category,
        author: {
          name: doc.author?.name || 'BellMedEx Editorial Team',
          role: doc.author?.role || 'Medical Billing Specialist',
          avatar: doc.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
        },
        publishedAt: doc.publishedAt,
        readTime: doc.readTime,
        imageSrc: doc.imageSrc,
      }))
    }

    return defaultBlogPosts
  } catch (error) {
    console.error('[Payload] Failed to fetch blog posts, using default sample posts:', error)
    return defaultBlogPosts
  }
}

/**
 * Fetches a single blog post by its slug from Payload CMS.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    if (result.docs && result.docs.length > 0) {
      const doc: any = result.docs[0]
      return {
        id: String(doc.id),
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt,
        category: doc.category,
        author: {
          name: doc.author?.name || 'BellMedEx Editorial Team',
          role: doc.author?.role || 'Medical Billing Specialist',
          avatar: doc.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
        },
        publishedAt: doc.publishedAt,
        readTime: doc.readTime,
        imageSrc: doc.imageSrc,
      }
    }

    // Fallback to sample posts
    const sample = defaultBlogPosts.find((p) => p.slug === slug)
    return sample || null
  } catch (error) {
    console.error(`[Payload] Failed to fetch post by slug ${slug}:`, error)
    const sample = defaultBlogPosts.find((p) => p.slug === slug)
    return sample || null
  }
}

/**
 * Fetches the Careers global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getCareersData(): Promise<CareersData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'careers',
    })

    return deepMerge(defaultCareersData, data as unknown as Partial<CareersData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch careers data, using defaults:', error)
    return defaultCareersData
  }
}

import type { TestimonialsPageData } from '@/payload/types/testimonials'
import { defaultTestimonialsData } from '@/lib/defaults/testimonials'
import type { MedicalBillingSoftwarePageData } from '@/payload/types/medicalBillingSoftware'
import { defaultMedicalBillingSoftwareData } from '@/lib/defaults/medicalBillingSoftware'

/**
 * Fetches the Testimonials global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getTestimonialsData(): Promise<TestimonialsPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'testimonials-page',
    })

    return deepMerge(defaultTestimonialsData, data as unknown as Partial<TestimonialsPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch testimonials data, using defaults:', error)
    return defaultTestimonialsData
  }
}

/**
 * Fetches the Medical Billing Software global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getMedicalBillingSoftwareData(): Promise<MedicalBillingSoftwarePageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'medical-billing-software',
    })

    return deepMerge(defaultMedicalBillingSoftwareData, data as unknown as Partial<MedicalBillingSoftwarePageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch medical billing software data, using defaults:', error)
    return defaultMedicalBillingSoftwareData
  }
}

/**
 * Deep-merges a source into a target object. Source values override target
 * values, but only when defined (non-null, non-undefined). Arrays from source
 * replace target arrays entirely (CMS arrays should be treated as complete).
 */
function deepMerge<T>(
  target: T,
  source: Partial<T>,
): T {
  const output = { ...target } as any
  const src = source as any

  for (const key in src) {
    const sourceVal = src[key]
    const targetVal = output[key]

    if (sourceVal === null || sourceVal === undefined) {
      continue
    }

    if (Array.isArray(sourceVal)) {
      // Arrays from CMS replace defaults entirely (if non-empty)
      if (sourceVal.length > 0) {
        output[key] = sourceVal
      }
    } else if (
      typeof sourceVal === 'object' &&
      !Array.isArray(sourceVal) &&
      typeof targetVal === 'object' &&
      !Array.isArray(targetVal) &&
      targetVal !== null
    ) {
      // Recursively merge nested objects
      output[key] = deepMerge(targetVal, sourceVal)
    } else {
      output[key] = sourceVal
    }
  }

  return output as T
}
