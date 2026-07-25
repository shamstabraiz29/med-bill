import { getPayload } from 'payload'
import config from '@payload-config'
import { defaultHomepageData } from '@/lib/defaults/homepage'
import { defaultClearinghouseData } from '@/lib/defaults/clearinghouse'
import { defaultProviderCredentialingData } from '@/lib/defaults/providerCredentialing'
import { defaultHealthcareSeoData } from '@/lib/defaults/healthcareSeo'
import { defaultRevenueCycleManagementData } from '@/lib/defaults/revenueCycleManagement'
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

    return NextResponse.json({
      success: true,
      message: 'Homepage, Clearinghouse, Provider Credentialing, Healthcare SEO, and Revenue Cycle Management globals seeded successfully!',
    })
  } catch (error: any) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Seeding failed' },
      { status: 500 },
    )
  }
}
