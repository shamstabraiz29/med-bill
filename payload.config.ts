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
