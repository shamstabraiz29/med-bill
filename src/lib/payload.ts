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
import type { MedicalBillingSoftwarePageData } from '@/payload/types/medicalBillingSoftware'
import { defaultMedicalBillingSoftwareData } from '@/lib/defaults/medicalBillingSoftware'
import type { FusionediClearinghousePageData } from '@/payload/types/fusionediClearinghouse'
import { defaultFusionediClearinghouseData } from '@/lib/defaults/fusionediClearinghouse'
import type { ElectronicHealthRecordsEhrPageData } from '@/payload/types/electronicHealthRecordsEhr'
import { defaultElectronicHealthRecordsEhrData } from '@/lib/defaults/electronicHealthRecordsEhr'
import type { PracticeManagementSoftwarePmsPageData } from '@/payload/types/practiceManagementSoftwarePms'
import { defaultPracticeManagementSoftwarePmsData } from '@/lib/defaults/practiceManagementSoftwarePms'
import type { OutsourceMedicalBillingPageData } from '@/payload/types/outsourceMedicalBilling'
import { defaultOutsourceMedicalBillingData } from '@/lib/defaults/outsourceMedicalBilling'
import type { AboutUsPageData } from '@/payload/types/aboutUs'
import { defaultAboutUsData } from '@/lib/defaults/aboutUs'
import type { ContactUsPageData } from '@/payload/types/contactUs'
import { defaultContactUsData } from '@/lib/defaults/contactUs'
import type { MedicalBillingPricingPageData } from '@/payload/types/medicalBillingPricing'
import { defaultMedicalBillingPricingData } from '@/lib/defaults/medicalBillingPricing'
import type { ScheduleDemoPageData } from '@/payload/types/scheduleDemo'
import { defaultScheduleDemoData } from '@/lib/defaults/scheduleDemo'
import type { PrivacyPolicyData } from '@/payload/types/privacyPolicy'
import { defaultPrivacyPolicyData } from '@/lib/defaults/privacyPolicy'
import type { TermsAndConditionsData } from '@/payload/types/termsAndConditions'
import { defaultTermsAndConditionsData } from '@/lib/defaults/termsAndConditions'
import type { CookiesPolicyData } from '@/payload/types/cookiesPolicy'
import { defaultCookiesPolicyData } from '@/lib/defaults/cookiesPolicy'
import type { LargePracticesPageData } from '@/payload/types/largePractices'
import { defaultLargePracticesData } from '@/lib/defaults/largePractices'
import type { PhysicianBillingServicesPageData } from '@/payload/types/physicianBillingServices'
import { defaultPhysicianBillingServicesData } from '@/lib/defaults/physicianBillingServices'
import type { SmallPracticesPageData } from '@/payload/types/smallPractices'
import { defaultSmallPracticesData } from '@/lib/defaults/smallPractices'
import type { DenialManagementServicesPageData } from '@/payload/types/denialManagementServices'
import { defaultDenialManagementServicesData } from '@/lib/defaults/denialManagementServices'
import type { HospitalBillingServicesPageData } from '@/payload/types/hospitalBillingServices'
import { defaultHospitalBillingServicesData } from '@/lib/defaults/hospitalBillingServices'

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
 * Fetches the FusionEDI Clearinghouse global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getFusionediClearinghouseData(): Promise<FusionediClearinghousePageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'fusionedi-clearinghouse',
    })

    return deepMerge(defaultFusionediClearinghouseData, data as unknown as Partial<FusionediClearinghousePageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch fusionedi clearinghouse data, using defaults:', error)
    return defaultFusionediClearinghouseData
  }
}

/**
 * Fetches the Electronic Health Records (EHR) global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getElectronicHealthRecordsEhrData(): Promise<ElectronicHealthRecordsEhrPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'electronic-health-records-ehr',
    })

    return deepMerge(defaultElectronicHealthRecordsEhrData, data as unknown as Partial<ElectronicHealthRecordsEhrPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch EHR data, using defaults:', error)
    return defaultElectronicHealthRecordsEhrData
  }
}

/**
 * Fetches the Practice Management Software (PMS) global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getPracticeManagementSoftwarePmsData(): Promise<PracticeManagementSoftwarePmsPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'practice-management-software-pms',
    })

    return deepMerge(defaultPracticeManagementSoftwarePmsData, data as unknown as Partial<PracticeManagementSoftwarePmsPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch PMS data, using defaults:', error)
    return defaultPracticeManagementSoftwarePmsData
  }
}

/**
 * Fetches the Outsource Medical Billing global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getOutsourceMedicalBillingData(): Promise<OutsourceMedicalBillingPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'outsource-medical-billing',
    })

    return deepMerge(defaultOutsourceMedicalBillingData, data as unknown as Partial<OutsourceMedicalBillingPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Outsource Medical Billing data, using defaults:', error)
    return defaultOutsourceMedicalBillingData
  }
}

/**
 * Fetches the About Us global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getAboutUsData(): Promise<AboutUsPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'about-us',
    })

    return deepMerge(defaultAboutUsData, data as unknown as Partial<AboutUsPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch About Us data, using defaults:', error)
    return defaultAboutUsData
  }
}

/**
 * Fetches the Contact Us global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getContactUsData(): Promise<ContactUsPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'contact-us',
    })

    return deepMerge(defaultContactUsData, data as unknown as Partial<ContactUsPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Contact Us data, using defaults:', error)
    return defaultContactUsData
  }
}

/**
 * Fetches the Medical Billing Pricing global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getMedicalBillingPricingData(): Promise<MedicalBillingPricingPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'medical-billing-pricing' as any,
    })

    return deepMerge(defaultMedicalBillingPricingData, data as unknown as Partial<MedicalBillingPricingPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Medical Billing Pricing data, using defaults:', error)
    return defaultMedicalBillingPricingData
  }
}

/**
 * Fetches the Schedule a Demo global data from Payload CMS.
 * Uses Payload Local API with fallback to default hardcoded content.
 */
export async function getScheduleDemoData(): Promise<ScheduleDemoPageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'schedule-demo' as any,
    })

    return deepMerge(defaultScheduleDemoData, data as unknown as Partial<ScheduleDemoPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Schedule a Demo data, using defaults:', error)
    return defaultScheduleDemoData
  }
}

/**
 * Fetches the Privacy Policy global data from Payload CMS.
 */
export async function getPrivacyPolicyData(): Promise<PrivacyPolicyData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'privacy-policy' as any })
    return deepMerge(defaultPrivacyPolicyData, data as unknown as Partial<PrivacyPolicyData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Privacy Policy data, using defaults:', error)
    return defaultPrivacyPolicyData
  }
}

/**
 * Fetches the Terms & Conditions global data from Payload CMS.
 */
export async function getTermsAndConditionsData(): Promise<TermsAndConditionsData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'terms-and-conditions' as any })
    return deepMerge(defaultTermsAndConditionsData, data as unknown as Partial<TermsAndConditionsData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Terms & Conditions data, using defaults:', error)
    return defaultTermsAndConditionsData
  }
}

/**
 * Fetches the Cookies Policy global data from Payload CMS.
 */
export async function getCookiesPolicyData(): Promise<CookiesPolicyData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'cookies-policy' as any })
    return deepMerge(defaultCookiesPolicyData, data as unknown as Partial<CookiesPolicyData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Cookies Policy data, using defaults:', error)
    return defaultCookiesPolicyData
  }
}

/**
 * Fetches the Large Practices global data from Payload CMS.
 */
export async function getLargePracticesData(): Promise<LargePracticesPageData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'large-practices' as any })
    return deepMerge(defaultLargePracticesData, data as unknown as Partial<LargePracticesPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Large Practices data, using defaults:', error)
    return defaultLargePracticesData
  }
}

/**
 * Fetches the Physician Billing Services global data from Payload CMS.
 */
export async function getPhysicianBillingServicesData(): Promise<PhysicianBillingServicesPageData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'physician-billing-services' as any })
    return deepMerge(defaultPhysicianBillingServicesData, data as unknown as Partial<PhysicianBillingServicesPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Physician Billing Services data, using defaults:', error)
    return defaultPhysicianBillingServicesData
  }
}

/**
 * Fetches the Small Practices global data from Payload CMS.
 */
export async function getSmallPracticesData(): Promise<SmallPracticesPageData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'small-practices' as any })
    return deepMerge(defaultSmallPracticesData, data as unknown as Partial<SmallPracticesPageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch Small Practices data, using defaults:', error)
    return defaultSmallPracticesData
  }
}

/**
 * Fetches the Denial Management Services global data from Payload CMS.
 */
export async function getDenialManagementServicesData(): Promise<DenialManagementServicesPageData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'denial-management-services' as any })
    const merged = deepMerge(defaultDenialManagementServicesData, data as unknown as Partial<DenialManagementServicesPageData>)

    // Normalize array fields to ensure frontend components receive expected string / object formats
    if (merged?.hero?.featureBullets) {
      merged.hero.featureBullets = merged.hero.featureBullets.map((b: any) =>
        typeof b === 'string' ? b : b.text || b.label || '',
      )
    }
    if (merged?.stats?.checklist) {
      merged.stats.checklist = merged.stats.checklist.map((c: any) =>
        typeof c === 'string' ? { label: c } : { label: c.label || c.text || '' },
      )
    }
    if (merged?.codeInsight?.features) {
      merged.codeInsight.features = merged.codeInsight.features.map((f: any) =>
        typeof f === 'string' ? { label: f } : { label: f.label || f.text || '' },
      )
    }
    if (merged?.revenue?.cards) {
      merged.revenue.cards = merged.revenue.cards.map((card: any) => ({
        ...card,
        bullets: (card.bullets || []).map((b: any) =>
          typeof b === 'string' ? b : b.text || b.label || '',
        ),
      }))
    }

    return merged
  } catch (error) {
    console.error('[Payload] Failed to fetch Denial Management Services data, using defaults:', error)
    return defaultDenialManagementServicesData
  }
}

/**
 * Fetches the Hospital Billing Services global data from Payload CMS.
 */
export async function getHospitalBillingServicesData(): Promise<HospitalBillingServicesPageData> {
  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'hospital-billing-services' as any })
    const merged = deepMerge(defaultHospitalBillingServicesData, data as unknown as Partial<HospitalBillingServicesPageData>)

    // Normalize array fields to ensure frontend components receive expected string / object formats
    if (merged?.experience?.checklist) {
      merged.experience.checklist = merged.experience.checklist.map((c: any) =>
        typeof c === 'string' ? c : c.text || c.label || '',
      )
    }
    if (merged?.whatAre?.goalPills) {
      merged.whatAre.goalPills = merged.whatAre.goalPills.map((p: any) =>
        typeof p === 'string' ? p : p.text || p.label || '',
      )
    }
    if (merged?.why?.questions) {
      merged.why.questions = merged.why.questions.map((q: any) =>
        typeof q === 'string' ? q : q.text || q.label || '',
      )
    }

    return merged
  } catch (error) {
    console.error('[Payload] Failed to fetch Hospital Billing Services data, using defaults:', error)
    return defaultHospitalBillingServicesData
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
