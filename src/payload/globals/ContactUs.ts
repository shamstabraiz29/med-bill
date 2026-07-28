import type { GlobalConfig } from 'payload'

export const ContactUs: GlobalConfig = {
  slug: 'contact-us',
  dbName: 'contact_us',
  label: 'Contact Us / Contact BellMedEx Page',
  admin: {
    group: 'Core Pages',
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
        { name: 'badge', type: 'text', defaultValue: 'Get In Touch With BellMedEx' },
        { name: 'titlePlain', type: 'text', defaultValue: "We're Here to Help Your Practice " },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Thrive Financially' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Hero Quick Highlights',
          dbName: 'cu_h_hl',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'desc', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Form Section Group
    {
      name: 'formSection',
      type: 'group',
      label: 'Direct Channels & Form Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Direct Channels' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Connect With Our ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Billing Specialists' },
        { name: 'description', type: 'textarea' },
        {
          name: 'channels',
          type: 'array',
          label: 'Contact Channels',
          dbName: 'cu_fs_ch',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'details', type: 'text', required: true },
            { name: 'subtext', type: 'text' },
            { name: 'iconName', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
        { name: 'guaranteeTitle', type: 'text', defaultValue: 'Privacy & Security Guaranteed' },
        { name: 'guaranteeDescription', type: 'textarea' },
        { name: 'formBadge', type: 'text', defaultValue: 'Free Consultation & Inquiry' },
        { name: 'formTitlePlain', type: 'text', defaultValue: 'Send Us a ' },
        { name: 'formTitleHighlight', type: 'text', defaultValue: 'Message' },
        { name: 'formSubtitle', type: 'textarea' },
        {
          name: 'serviceOptions',
          type: 'array',
          label: 'Service Options Dropdown',
          dbName: 'cu_fs_so',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // FAQ Group
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Frequently Asked Questions' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Got Questions Before ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Reaching Out?' },
        { name: 'description', type: 'textarea' },
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Accordion Items',
          dbName: 'cu_faq_items',
          fields: [
            { name: 'q', type: 'text', required: true },
            { name: 'a', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // CTA Group
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Banner Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Partner With BellMedEx' },
        { name: 'title', type: 'text', defaultValue: 'Ready to Boost Practice Revenue by Up to 35%?' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Checklist Highlights',
          dbName: 'cu_cta_hl',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'primaryBtnText', type: 'text', defaultValue: 'Schedule Free Audit' },
        { name: 'primaryBtnLink', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'phoneText', type: 'text', defaultValue: '(888) 500-2455' },
        { name: 'phoneLink', type: 'text', defaultValue: 'tel:8885002455' },
      ],
    },
  ],
}
