import { getPayload } from 'payload'
import config from '@payload-config'
import { defaultHomepageData } from '@/lib/defaults/homepage'
import { defaultClearinghouseData } from '@/lib/defaults/clearinghouse'
import { defaultProviderCredentialingData } from '@/lib/defaults/providerCredentialing'
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

    return NextResponse.json({
      success: true,
      message: 'Homepage, Clearinghouse, and Provider Credentialing globals seeded successfully!',
    })
  } catch (error: any) {
    console.error('[Seed Route Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Seeding failed' },
      { status: 500 },
    )
  }
}
