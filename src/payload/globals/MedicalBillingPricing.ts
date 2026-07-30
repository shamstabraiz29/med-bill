import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const MedicalBillingPricing: GlobalConfig = {
  slug: 'medical-billing-pricing',
  dbName: 'mb_pricing',
  label: 'Medical Billing Pricing Page',
  admin: {
    group: 'Core Pages',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    seoFields,
    // Hero Group
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Unlock Pricing Details' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Drop Your Details to ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Unlock Pricing Details Now' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Trust Highlights',
          dbName: 'mbp_h_hl',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // Unlock Form Group
    {
      name: 'unlockForm',
      type: 'group',
      label: 'Unlock Pricing Form Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Instant Pricing Access' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Fill In To ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Unlock Pricing Plans' },
        { name: 'description', type: 'textarea' },
        {
          name: 'roleOptions',
          type: 'array',
          label: 'I am a... Options',
          dbName: 'mbp_uf_ro',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'collectionsOptions',
          type: 'array',
          label: 'Monthly Collections Options',
          dbName: 'mbp_uf_co',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'submitBtnText', type: 'text', defaultValue: 'Unlock Pricing Now' },
      ],
    },
  ],
}
