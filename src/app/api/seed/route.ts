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

    return NextResponse.json({
      success: true,
      message: 'Homepage, Clearinghouse, Provider Credentialing, Healthcare SEO, Revenue Cycle Management, Medical Billing, Medical Coding, and Medical Billing Audit globals seeded successfully!',
    })
  } catch (error: any) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Seeding failed' },
      { status: 500 },
    )
  }
}
