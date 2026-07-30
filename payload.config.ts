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
    Posts,
    Media,
  ],

  globals: [
    // 1. Core Pages
    Homepage,
    AboutUs,
    ContactUs,
    MedicalBillingPricing,
    ScheduleDemo,

    // 2. Services Pages
    MedicalBilling,
    MedicalCoding,
    RevenueCycleManagement,
    MedicalBillingAudit,
    Clearinghouse,
    ProviderCredentialing,
    HealthcareSeo,

    // 3. Software Pages
    MedicalBillingSoftware,
    FusionediClearinghouse,
    ElectronicHealthRecordsEhr,
    PracticeManagementSoftwarePms,

    // 4. Solutions Pages
    OutsourceMedicalBilling,
    LargePractices,
    SmallPractices,
    PhysicianBillingServices,
    DenialManagementServices,
    HospitalBillingServices,

    // 5. Resources & Company Pages
    Careers,
    Testimonials,

    // 6. Legal Pages
    PrivacyPolicy,
    TermsAndConditions,
    CookiesPolicy,
  ],

  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''),

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl:
        !process.env.DATABASE_URI?.includes('localhost') &&
        !process.env.DATABASE_URI?.includes('127.0.0.1') &&
        (process.env.DATABASE_URI?.includes('sslmode=require') ||
          process.env.DATABASE_URI?.includes('neon.tech') ||
          process.env.DATABASE_URI?.includes('supabase') ||
          process.env.DATABASE_URI?.includes('pooler') ||
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
