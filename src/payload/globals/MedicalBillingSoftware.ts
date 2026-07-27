import type { GlobalConfig } from 'payload'

export const MedicalBillingSoftware: GlobalConfig = {
  slug: 'medical-billing-software',
  label: 'Medical Billing Software Page',
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
        { name: 'eyebrow', type: 'text', defaultValue: 'Medical Billing Software' },
        { name: 'titlePrefix', type: 'text', defaultValue: 'Medical Billing' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Software' },
        {
          name: 'description1',
          type: 'text',
          defaultValue: 'Automate billing workflow. Eliminate errors. Maximize reimbursement.',
        },
        {
          name: 'description2',
          type: 'text',
          defaultValue: '100% free to try. No credit card required.',
        },
        { name: 'testimonialQuote', type: 'textarea' },
        { name: 'testimonialAuthor', type: 'text' },
        { name: 'testimonialRole', type: 'text' },
      ],
    },

    // Delivers Group
    {
      name: 'delivers',
      type: 'group',
      label: 'Delivers Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Medical Billing Software' },
        { name: 'titlePlain', type: 'text', defaultValue: 'A billing software that' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'delivers' },
        { name: 'description', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        {
          name: 'features',
          type: 'array',
          label: 'Delivers Features',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // In Action Group
    {
      name: 'inAction',
      type: 'group',
      label: 'Software In Action Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Software In Action' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Billing made' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'fast, easy, and accurate' },
        { name: 'descriptionText', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Get Started for Free' },
        {
          name: 'features',
          type: 'array',
          label: 'In Action Features',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // New Features Group
    {
      name: 'newFeatures',
      type: 'group',
      label: 'Exciting New Features Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Exciting New Features' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Boost your medical billing' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'efficiency and profitability' },
        { name: 'description', type: 'textarea' },
        {
          name: 'features',
          type: 'array',
          label: 'New Features List',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Growth Tools Group
    {
      name: 'growthTools',
      type: 'group',
      label: 'Growth Tools Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Growth Driven Billing Software' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Do more' },
        { name: 'titleSuffix', type: 'text', defaultValue: 'than just billing.' },
        { name: 'description', type: 'textarea' },
        {
          name: 'tools',
          type: 'array',
          label: 'Growth Tools Cards',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },

    // Testimonials Group
    {
      name: 'testimonials',
      type: 'group',
      label: 'Software Testimonials Carousel',
      fields: [
        {
          name: 'testimonials',
          type: 'array',
          label: 'Testimonials List',
          fields: [
            { name: 'quote', type: 'textarea', required: true },
            { name: 'name', type: 'text', required: true },
            { name: 'role', type: 'text' },
            { name: 'highlightText', type: 'text' },
          ],
        },
      ],
    },

    // Sign Up CTA Group
    {
      name: 'signUpCta',
      type: 'group',
      label: 'Sign Up Call To Action',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Get Started for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Free Today' },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Badges',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },
  ],
}
