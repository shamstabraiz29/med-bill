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
import { AboutUs } from '@/payload/globals/AboutUs'
import { ContactUs } from '@/payload/globals/ContactUs'
import { MedicalBillingPricing } from '@/payload/globals/MedicalBillingPricing'

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
    Homepage,
    Clearinghouse,
    ProviderCredentialing,
    HealthcareSeo,
    RevenueCycleManagement,
    MedicalBilling,
    MedicalCoding,
    MedicalBillingAudit,
    Careers,
    Testimonials,
    MedicalBillingSoftware,
    FusionediClearinghouse,
    ElectronicHealthRecordsEhr,
    PracticeManagementSoftwarePms,
    OutsourceMedicalBilling,
    AboutUs,
    ContactUs,
    MedicalBillingPricing,
  ],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'src/payload/payload-types.ts'),
  },
})
