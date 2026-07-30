import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const FusionediClearinghouse: GlobalConfig = {
  slug: 'fusionedi-clearinghouse',
  label: 'FusionEDI Clearinghouse Page',
  admin: {
    group: 'Software',
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
        { name: 'badge', type: 'text', defaultValue: 'Healthcare Fusion EDI Software.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'A fusion of EDI and Healthcare Billing for practices that want ',
        },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Speedy Rewards!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Get Started For Free' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Dashboard Group
    {
      name: 'dashboard',
      type: 'group',
      label: 'Dashboard Preview',
      fields: [
        { name: 'imageSrc', type: 'text', defaultValue: '/fusionedi-dashboard.png' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // Features Group
    {
      name: 'features',
      type: 'group',
      label: 'Features Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Health Institute EDI Software Features.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'The ' },
        {
          name: 'titleHighlight',
          type: 'text',
          defaultValue: 'No.1 Solution For The Billing Evolution',
        },
        { name: 'description', type: 'textarea' },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Cards',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'imageSrc', type: 'text' },
            { name: 'imageAlt', type: 'text' },
          ],
        },
      ],
    },

    // Steps Group
    {
      name: 'getStartedSteps',
      type: 'group',
      label: '3 Easy Steps Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Get Started for Free.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Get Started for Free in ' },
        { name: 'titleHighlight', type: 'text', defaultValue: '3 Easy Steps' },
        { name: 'description', type: 'textarea' },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps Cards',
          fields: [
            { name: 'stepLabel', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // What We Offer Group
    {
      name: 'whatWeOffer',
      type: 'group',
      label: 'What We Offer Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'What We Offer.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'More Features, More Efficiency, and ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'More Profitability.' },
        {
          name: 'offers',
          type: 'array',
          label: 'Offers Grid',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Solutions Group
    {
      name: 'solutions',
      type: 'group',
      label: 'Solutions Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Medical EDI Solutions.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'Clear the way for Better Healthcare with our ',
        },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Clearinghouse Solutions.' },
        { name: 'subtitle', type: 'textarea' },
        {
          name: 'solutions',
          type: 'array',
          label: 'Solutions List',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // EDI Transfers Group
    {
      name: 'ediTransfers',
      type: 'group',
      label: 'Electronic Data Transfers Section',
      fields: [
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'HIPAA Compliant Electronic Data Exchanges.',
        },
        { name: 'titlePlain', type: 'text', defaultValue: 'The Next Generation Of ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Electronic Data Transfers' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' In Healthcare' },
        { name: 'description', type: 'textarea' },
        {
          name: 'transfers',
          type: 'array',
          label: 'EDI Transfers List',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
            { name: 'side', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
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
