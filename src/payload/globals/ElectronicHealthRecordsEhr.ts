import type { GlobalConfig } from 'payload'

export const ElectronicHealthRecordsEhr: GlobalConfig = {
  slug: 'electronic-health-records-ehr',
  label: 'Electronic Health Records (EHR) Page',
  admin: {
    group: 'Software',
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
        { name: 'badge', type: 'text', defaultValue: 'Electronic Health Records Software.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'The 21st Century Antidote to ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Medical Records-Keeping Challenges!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Start My Free Trial' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Features Group
    {
      name: 'features',
      type: 'group',
      label: 'Features List',
      fields: [
        {
          name: 'features',
          type: 'array',
          label: 'Feature Items',
          fields: [
            { name: 'titlePlain', type: 'text', required: true },
            { name: 'titleHighlight', type: 'text', required: true },
            { name: 'titleSuffix', type: 'text' },
            { name: 'endPeriod', type: 'checkbox', defaultValue: false },
            { name: 'description', type: 'textarea', required: true },
            { name: 'imageSrc', type: 'text' },
            { name: 'imageAlt', type: 'text' },
            { name: 'reverse', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },

    // ICD 10 CTA Group
    {
      name: 'icd10Cta',
      type: 'group',
      label: 'ICD 10 CTA Banner',
      fields: [
        { name: 'badgeTag', type: 'text', defaultValue: 'New' },
        { name: 'badgeText', type: 'text', defaultValue: 'Ehr for Icd-10 Coding.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'ICD 10 is big change. But our EHR software is a ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'bigger solution.' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Start My Free Trial' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Specialties Group
    {
      name: 'specialties',
      type: 'group',
      label: 'Specialties Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Not just a band-aid solution, but a ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'cure for every specialty.' },
        { name: 'footerText', type: 'text', defaultValue: 'And many other specialties' },
        {
          name: 'specialties',
          type: 'array',
          label: 'Specialties List',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Why Ace Group
    {
      name: 'whyAce',
      type: 'group',
      label: 'Why Ace EHR Race Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Why do we ace the ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'EHR Software' },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        { name: 'imageAlt', type: 'text' },
        {
          name: 'features',
          type: 'array',
          label: 'Why Ace Points',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Benefits Group
    {
      name: 'benefits',
      type: 'group',
      label: 'EHR Benefits Section',
      fields: [
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefit Cards',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // FAQ Group
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Frequently Asked Questions.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Frequently Asked ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Questions' },
        { name: 'description', type: 'textarea' },
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Items',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Get Started CTA Group
    {
      name: 'getStartedCta',
      type: 'group',
      label: 'Get Started CTA Banner',
      fields: [
        {
          name: 'highlights',
          type: 'array',
          label: 'Highlight Pills',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'titlePlain', type: 'text', defaultValue: 'Free Today, Premium All The Way. ' },
        { name: 'titleHighlight', type: 'text', defaultValue: "Let's Get Started!" },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Get Started For Free' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
