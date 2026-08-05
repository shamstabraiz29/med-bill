import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from '@/payload/collections/Users'
import { FormSubmissions } from '@/payload/collections/FormSubmissions'
import { CareersSubmissions } from '@/payload/collections/CareersSubmissions'
import { ConsultationSubmissions } from '@/payload/collections/ConsultationSubmissions'
import { AuditSubmissions } from '@/payload/collections/AuditSubmissions'
import { ContactSubmissions } from '@/payload/collections/ContactSubmissions'
import { Posts } from '@/payload/collections/Posts'
import { Media } from '@/payload/collections/Media'
import { Homepage } from '@/payload/globals/Homepage'
import { Clearinghouse } from '@/payload/globals/Clearinghouse'
import { ProviderCredentialing } from '@/payload/globals/ProviderCredentialing'
import { HealthcareSeo } from '@/payload/globals/HealthcareSeo'
import { PhysicianBillingServices } from '@/payload/globals/PhysicianBillingServices'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isLocalDatabaseUri =
  process.env.DATABASE_URI?.includes('localhost') ||
  process.env.DATABASE_URI?.includes('127.0.0.1')

// Neon via Vercel Storage uses DATABASE_URL; ignore localhost DATABASE_URI on Vercel.
const databaseUri =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  (!isLocalDatabaseUri ? process.env.DATABASE_URI : undefined) ||
  ''

if (!databaseUri && (process.env.VERCEL || process.env.NODE_ENV === 'production')) {
  throw new Error(
    'No database connection string found. Connect Neon/Postgres in Vercel Storage, or set DATABASE_URL / DATABASE_URI.',
  )
}

import { RevenueCycleManagement } from '@/payload/globals/RevenueCycleManagement'
import { MedicalBilling } from '@/payload/globals/MedicalBilling'
import { MedicalCoding } from '@/payload/globals/MedicalCoding'
import { MedicalBillingAudit } from '@/payload/globals/MedicalBillingAudit'
import { Careers } from '@/payload/globals/Careers'
import { Testimonials } from '@/payload/globals/Testimonials'
import { MedicalBillingSoftware } from '@/payload/globals/MedicalBillingSoftware'
import { FusionediClearinghouse } from '@/payload/globals/FusionediClearinghouse'
import { ElectronicHealthRecordsEhr } from '@/payload/globals/ElectronicHealthRecordsEhr'
import { PracticeManagementSoftwarePms } from '@/payload/globals/PracticeManagementSoftwarePms'
import { OutsourceMedicalBilling } from '@/payload/globals/OutsourceMedicalBilling'
import { LargePractices } from '@/payload/globals/LargePractices'
import { SmallPractices } from '@/payload/globals/SmallPractices'
import { DenialManagementServices } from '@/payload/globals/DenialManagementServices'
import { HospitalBillingServices } from '@/payload/globals/HospitalBillingServices'
import { AboutUs } from '@/payload/globals/AboutUs'
import { ContactUs } from '@/payload/globals/ContactUs'
import { MedicalBillingPricing } from '@/payload/globals/MedicalBillingPricing'
import { ScheduleDemo } from '@/payload/globals/ScheduleDemo'
import { PrivacyPolicy } from '@/payload/globals/PrivacyPolicy'
import { TermsAndConditions } from '@/payload/globals/TermsAndConditions'
import { CookiesPolicy } from '@/payload/globals/CookiesPolicy'
import {
  withCollectionRevalidation,
  withGlobalRevalidation,
} from '@/payload/utils/withRevalidation'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    Users,
    FormSubmissions,
    CareersSubmissions,
    ConsultationSubmissions,
    AuditSubmissions,
    ContactSubmissions,
    withCollectionRevalidation(Posts),
    Media,
  ],

  globals: [
    // 1. Core Pages
    withGlobalRevalidation(Homepage),
    withGlobalRevalidation(AboutUs),
    withGlobalRevalidation(ContactUs),
    withGlobalRevalidation(MedicalBillingPricing),
    withGlobalRevalidation(ScheduleDemo),

    // 2. Services Pages
    withGlobalRevalidation(MedicalBilling),
    withGlobalRevalidation(MedicalCoding),
    withGlobalRevalidation(RevenueCycleManagement),
    withGlobalRevalidation(MedicalBillingAudit),
    withGlobalRevalidation(Clearinghouse),
    withGlobalRevalidation(ProviderCredentialing),
    withGlobalRevalidation(HealthcareSeo),

    // 3. Software Pages
    withGlobalRevalidation(MedicalBillingSoftware),
    withGlobalRevalidation(FusionediClearinghouse),
    withGlobalRevalidation(ElectronicHealthRecordsEhr),
    withGlobalRevalidation(PracticeManagementSoftwarePms),

    // 4. Solutions Pages
    withGlobalRevalidation(OutsourceMedicalBilling),
    withGlobalRevalidation(LargePractices),
    withGlobalRevalidation(SmallPractices),
    withGlobalRevalidation(PhysicianBillingServices),
    withGlobalRevalidation(DenialManagementServices),
    withGlobalRevalidation(HospitalBillingServices),

    // 5. Resources & Company Pages
    withGlobalRevalidation(Careers),
    withGlobalRevalidation(Testimonials),

    // 6. Legal Pages
    withGlobalRevalidation(PrivacyPolicy),
    withGlobalRevalidation(TermsAndConditions),
    withGlobalRevalidation(CookiesPolicy),
  ],

  serverURL:
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''),

  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
      ssl:
        !databaseUri.includes('localhost') &&
        !databaseUri.includes('127.0.0.1') &&
        (databaseUri.includes('sslmode=require') ||
          databaseUri.includes('neon.tech') ||
          databaseUri.includes('supabase') ||
          databaseUri.includes('pooler') ||
          Boolean(process.env.VERCEL))
          ? { rejectUnauthorized: false }
          : false,
    },
    push: process.env.NODE_ENV !== 'production' && !process.env.VERCEL,
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || 'b3llm3d3x-s3cr3t-k3y-ch4ng3-m3-1n-pr0duct10n-2026',

  typescript: {
    outputFile: path.resolve(dirname, 'src/payload/payload-types.ts'),
  },
})
