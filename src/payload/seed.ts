/**
 * Seed script for Payload CMS Homepage Global
 * 
 * Run this after initial database setup to populate the Homepage
 * global with all the current hardcoded content.
 * 
 * Usage: npx tsx src/payload/seed.ts
 */

import { getPayload } from 'payload'
import config from '@payload-config'
import { defaultHomepageData } from '@/lib/defaults/homepage'
import { defaultClearinghouseData } from '@/lib/defaults/clearinghouse'
import { defaultProviderCredentialingData } from '@/lib/defaults/providerCredentialing'
import { defaultHealthcareSeoData } from '@/lib/defaults/healthcareSeo'
import { defaultRevenueCycleManagementData } from '@/lib/defaults/revenueCycleManagement'

async function seed() {
  console.log('🌱 Seeding Payload CMS...')

  const payload = await getPayload({ config })

  // Create initial admin user (if not exists)
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@bellmedex.com',
        password: 'changeme123',
        name: 'Admin',
        role: 'admin',
      },
    })
    console.log('✅ Created admin user: admin@bellmedex.com / changeme123')
  } else {
    console.log('ℹ️  Admin user already exists, skipping...')
  }

  // Seed Homepage Global
  try {
    await payload.updateGlobal({
      slug: 'homepage',
      data: defaultHomepageData as any,
    })
    console.log('✅ Homepage global seeded successfully!')
  } catch (error) {
    console.error('❌ Failed to seed homepage:', error)
  }

  // Seed Clearinghouse Global
  try {
    await payload.updateGlobal({
      slug: 'clearinghouse',
      data: defaultClearinghouseData as any,
    })
    console.log('✅ Clearinghouse global seeded successfully!')
  } catch (error) {
    console.error('❌ Failed to seed clearinghouse:', error)
  }

  // Seed Provider Credentialing Global
  try {
    await payload.updateGlobal({
      slug: 'provider-credentialing',
      data: defaultProviderCredentialingData as any,
    })
    console.log('✅ Provider Credentialing global seeded successfully!')
  } catch (error) {
    console.error('❌ Failed to seed provider credentialing:', error)
  }

  // Seed Healthcare SEO Global
  try {
    await payload.updateGlobal({
      slug: 'healthcare-seo',
      data: defaultHealthcareSeoData as any,
    })
    console.log('✅ Healthcare SEO global seeded successfully!')
  } catch (error) {
    console.error('❌ Failed to seed healthcare seo:', error)
  }

  // Seed Revenue Cycle Management Global
  try {
    await payload.updateGlobal({
      slug: 'revenue-cycle-management',
      data: defaultRevenueCycleManagementData as any,
    })
    console.log('✅ Revenue Cycle Management global seeded successfully!')
  } catch (error) {
    console.error('❌ Failed to seed revenue cycle management:', error)
  }

  console.log('🎉 Seeding complete!')
  process.exit(0)
}

seed().catch((error) => {
  console.error('❌ Seed script failed:', error)
  process.exit(1)
})
