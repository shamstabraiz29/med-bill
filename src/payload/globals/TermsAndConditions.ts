import type { GlobalConfig } from 'payload'

export const TermsAndConditions: GlobalConfig = {
  slug: 'terms-and-conditions',
  dbName: 'terms_cond',
  label: 'Terms & Conditions Page',
  admin: {
    group: 'Legal Pages',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    // Hero Group
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Legal Agreement' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Terms & ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Conditions' },
        { name: 'description', type: 'textarea' },
        { name: 'effectiveDate', type: 'text', defaultValue: 'July 2026' },
      ],
    },

    // Content Sections Array
    {
      name: 'sections',
      type: 'array',
      label: 'Terms Sections',
      dbName: 'tc_sec',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
      ],
    },

    // Contact Box
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Legal Inquiries Contact',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Legal Inquiries' },
        { name: 'email', type: 'text', defaultValue: 'legal@bellmedex.com' },
        { name: 'phone', type: 'text', defaultValue: '(888) 500-2455' },
      ],
    },
  ],
}
