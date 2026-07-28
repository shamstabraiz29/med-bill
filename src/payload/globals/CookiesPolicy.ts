import type { GlobalConfig } from 'payload'

export const CookiesPolicy: GlobalConfig = {
  slug: 'cookies-policy',
  dbName: 'cookies_pol',
  label: 'Cookies Policy Page',
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
        { name: 'badge', type: 'text', defaultValue: 'Web Technology & Security' },
        { name: 'titlePlain', type: 'text', defaultValue: 'BellMedEx ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Cookies Policy' },
        { name: 'description', type: 'textarea' },
        { name: 'lastUpdated', type: 'text', defaultValue: 'July 2026' },
      ],
    },

    // Content Sections Array
    {
      name: 'sections',
      type: 'array',
      label: 'Policy Sections',
      dbName: 'cp_sec',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea' },
        {
          name: 'types',
          type: 'array',
          label: 'Cookie Types (Optional)',
          dbName: 'cp_typ',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'desc', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Contact Box
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Support Contact',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Cookie Settings & Inquiries' },
        { name: 'email', type: 'text', defaultValue: 'support@bellmedex.com' },
        { name: 'phone', type: 'text', defaultValue: '(888) 500-2455' },
      ],
    },
  ],
}
