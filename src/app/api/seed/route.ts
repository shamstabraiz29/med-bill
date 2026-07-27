import { getPayload } from 'payload'
import config from '@payload-config'
import { defaultHomepageData } from '@/lib/defaults/homepage'
import { defaultClearinghouseData } from '@/lib/defaults/clearinghouse'
import { defaultProviderCredentialingData } from '@/lib/defaults/providerCredentialing'
import { defaultHealthcareSeoData } from '@/lib/defaults/healthcareSeo'
import { defaultRevenueCycleManagementData } from '@/lib/defaults/revenueCycleManagement'
import { defaultMedicalBillingData } from '@/lib/defaults/medicalBilling'
import { defaultMedicalCodingData } from '@/lib/defaults/medicalCoding'
import { defaultMedicalBillingAuditData } from '@/lib/defaults/medicalBillingAudit'
import { defaultBlogPosts } from '@/lib/defaults/blogs'
import { defaultCareersData } from '@/lib/defaults/careers'
import { defaultTestimonialsData } from '@/lib/defaults/testimonials'
import { defaultMedicalBillingSoftwareData } from '@/lib/defaults/medicalBillingSoftware'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    await payload.updateGlobal({
      slug: 'homepage',
      data: defaultHomepageData as any,
    })

    await payload.updateGlobal({
      slug: 'clearinghouse',
      data: defaultClearinghouseData as any,
    })

    await payload.updateGlobal({
      slug: 'provider-credentialing',
      data: defaultProviderCredentialingData as any,
    })

    await payload.updateGlobal({
      slug: 'healthcare-seo',
      data: defaultHealthcareSeoData as any,
    })

    await payload.updateGlobal({
      slug: 'revenue-cycle-management',
      data: defaultRevenueCycleManagementData as any,
    })

    await payload.updateGlobal({
      slug: 'medical-billing',
      data: defaultMedicalBillingData as any,
    })

    await payload.updateGlobal({
      slug: 'medical-coding',
      data: defaultMedicalCodingData as any,
    })

    await payload.updateGlobal({
      slug: 'medical-billing-audit',
      data: defaultMedicalBillingAuditData as any,
    })

    await payload.updateGlobal({
      slug: 'careers',
      data: defaultCareersData as any,
    })

    await payload.updateGlobal({
      slug: 'testimonials-page',
      data: defaultTestimonialsData as any,
    })

    await payload.updateGlobal({
      slug: 'medical-billing-software',
      data: defaultMedicalBillingSoftwareData as any,
    })

    // Seed Posts Collection if empty
    const existingPosts = await payload.find({
      collection: 'posts',
      limit: 1,
    })

    if (existingPosts.totalDocs === 0) {
      for (const post of defaultBlogPosts) {
        await payload.create({
          collection: 'posts',
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            category: post.category,
            author: {
              name: post.author.name,
              role: post.author.role || 'Specialist',
              avatar: post.author.avatar,
            },
            publishedAt: post.publishedAt,
            readTime: post.readTime,
            imageSrc: post.imageSrc,
          },
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'All globals and Blog posts collection seeded successfully!',
    })
  } catch (error: any) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Seeding failed' },
      { status: 500 },
    )
  }
}
