import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  dbName: 'priv_pol',
  label: 'Privacy Policy Page',
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
        { name: 'badge', type: 'text', defaultValue: 'HIPAA & Data Protection' },
        { name: 'titlePlain', type: 'text', defaultValue: 'BellMedEx ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Privacy Policy' },
        { name: 'description', type: 'textarea' },
        { name: 'lastUpdated', type: 'text', defaultValue: 'July 2026' },
      ],
    },

    // Content Sections Array
    {
      name: 'sections',
      type: 'array',
      label: 'Policy Sections',
      dbName: 'pp_sec',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
      ],
    },

    // Contact Box
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Privacy Office Contact',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Questions Regarding Privacy?' },
        { name: 'email', type: 'text', defaultValue: 'privacy@bellmedex.com' },
        { name: 'phone', type: 'text', defaultValue: '(888) 500-2455' },
      ],
    },
  ],
}
