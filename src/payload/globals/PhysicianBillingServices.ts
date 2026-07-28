import type { GlobalConfig } from 'payload'

export const PhysicianBillingServices: GlobalConfig = {
  slug: 'physician-billing-services',
  dbName: 'phys_bs',
  label: 'Physician Billing Services Page',
  admin: {
    group: 'Solutions',
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
        { name: 'badge', type: 'text', defaultValue: 'Physician Billing Services.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Physician ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Billing Services' },
        { name: 'description', type: 'textarea', defaultValue: 'BellMedEx Physician Billing Services ensure physicians obtain rightful payments for caring for patients via accurate claim filing, coding, denial resolution, and unpaid claim follow-up.' },
        { name: 'ctaText', type: 'text', defaultValue: 'Get A Demo' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        {
          name: 'faqItems',
          type: 'array',
          label: 'Hero FAQ Accordion Items',
          dbName: 'pbs_h_faq',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Split Sections Array
    {
      name: 'splitSections',
      type: 'array',
      label: 'Split Feature Rows',
      dbName: 'pbs_ss',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'headingId', type: 'text', required: true },
        { name: 'titlePlain', type: 'text', required: true },
        { name: 'titleHighlight', type: 'text', required: true },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Paragraphs',
          dbName: 'pbs_ss_p',
          fields: [
            { name: 'text', type: 'textarea', required: true },
          ],
        },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        { name: 'imageAlt', type: 'text' },
        { name: 'ctaLabel', type: 'text', defaultValue: 'Get Started' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imagePosition', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
      ],
    },

    // MIPS Section Group
    {
      name: 'mipsSection',
      type: 'group',
      label: 'MIPS Performance Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'MIPS Performance.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Optimize MIPS by ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Over 75 Points' },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Copy Paragraphs',
          dbName: 'pbs_mips_p',
          fields: [
            { name: 'text', type: 'textarea', required: true },
          ],
        },
        { name: 'ctaText', type: 'text', defaultValue: "Yes, I'm Interested" },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/faq-doctor.png' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // Explore Features Group
    {
      name: 'exploreFeatures',
      type: 'group',
      label: 'Explore Features Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Physician Billing Features.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Explore More ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Features' },
        { name: 'description', type: 'textarea' },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Cards',
          dbName: 'pbs_ef_f',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Demo CTA Group
    {
      name: 'demoCta',
      type: 'group',
      label: 'Rate CTA Section',
      fields: [
        { name: 'rateLabel', type: 'text', defaultValue: 'New Low Rates From' },
        { name: 'rateValue', type: 'text', defaultValue: '2.49%' },
        { name: 'rateSubtext', type: 'text', defaultValue: 'of your monthly collections' },
        { name: 'buttonText', type: 'text', defaultValue: 'Take Advantage Now!' },
        { name: 'buttonHref', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
