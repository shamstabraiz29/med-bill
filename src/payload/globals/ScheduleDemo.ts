import type { GlobalConfig } from 'payload'

export const ScheduleDemo: GlobalConfig = {
  slug: 'schedule-demo',
  dbName: 'sch_demo',
  label: 'Schedule a Demo Page',
  admin: {
    group: 'Pages',
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
        { name: 'badge', type: 'text', defaultValue: 'Claim Your Free Demo' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Claim Your ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Free Demo' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Trust Highlights',
          dbName: 'sd_h_hl',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // Form Section Group
    {
      name: 'formSection',
      type: 'group',
      label: 'Request Call Back Form Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: '1-On-1 Consultation' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Request a ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Call Back' },
        { name: 'description', type: 'textarea' },
        {
          name: 'roleOptions',
          type: 'array',
          label: 'I am a... Options',
          dbName: 'sd_fs_ro',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'collectionsOptions',
          type: 'array',
          label: 'Monthly Collections Options',
          dbName: 'sd_fs_co',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'submitBtnText', type: 'text', defaultValue: 'Submit Demo Request' },
      ],
    },
  ],
}
