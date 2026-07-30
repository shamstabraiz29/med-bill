import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const PracticeManagementSoftwarePms: GlobalConfig = {
  slug: 'practice-management-software-pms',
  dbName: 'pms_page',
  label: 'Practice Management Software (PMS) Page',
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
        { name: 'badge', type: 'text', defaultValue: 'Practice Management Software.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Practice Management Software x EHR = a ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'potent force for practice growth!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Start My Free Trial' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // About Group
    {
      name: 'about',
      type: 'group',
      label: 'About PMS Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'About PMS' },
        { name: 'title', type: 'text', defaultValue: 'About PMS' },
        { name: 'description', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/rcm-dashboard-laptop1.png' },
        { name: 'imageAlt', type: 'text' },
        { name: 'buttonText', type: 'text', defaultValue: "Let's Get Started" },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Balance Group
    {
      name: 'balance',
      type: 'group',
      label: 'Balance Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Balance the ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Art of Medicine' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' & the Science of Business' },
        { name: 'description', type: 'textarea' },
      ],
    },

    // Features Group
    {
      name: 'features',
      type: 'group',
      label: 'PMS Features Section',
      fields: [
        {
          name: 'features',
          type: 'array',
          label: 'Feature Cards',
          dbName: 'feat_items',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            {
              name: 'paragraphs',
              type: 'array',
              label: 'Paragraphs',
              dbName: 'feat_paras',
              fields: [{ name: 'text', type: 'textarea' }],
            },
            { name: 'imageSrc', type: 'text' },
            { name: 'imageAlt', type: 'text' },
            { name: 'reverse', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },

    // Manage Group
    {
      name: 'manage',
      type: 'group',
      label: 'Manage Practice Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Practice Management.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Manage your practice with ease and grace, because we ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'help you ace the medical space!' },
        { name: 'description', type: 'textarea' },
        { name: 'howItConnectsLabel', type: 'text', defaultValue: 'How it connects' },
        {
          name: 'items',
          type: 'array',
          label: 'Manage Accordion Items',
          dbName: 'mng_items',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'content', type: 'textarea', required: true },
            { name: 'summary', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Telemedicine & RCM Reports Group
    {
      name: 'telemedicineRcm',
      type: 'group',
      label: 'Telemedicine & RCM Reports Section',
      fields: [
        {
          name: 'features',
          type: 'array',
          label: 'Telemedicine & RCM Feature Items',
          dbName: 'tele_feats',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            {
              name: 'paragraphs',
              type: 'array',
              label: 'Paragraphs',
              dbName: 'tele_paras',
              fields: [{ name: 'text', type: 'textarea' }],
            },
            { name: 'imageSrc', type: 'text' },
            { name: 'imageAlt', type: 'text' },
            { name: 'reverse', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },

    // Specialty CTA Group
    {
      name: 'specialtyCta',
      type: 'group',
      label: 'Specialty Specific PMS Banner',
      fields: [
        { name: 'badgeTag', type: 'text', defaultValue: 'New' },
        { name: 'badgeText', type: 'text', defaultValue: 'Specialty Specific PMS.' },
        { name: 'titlePlain', type: 'text', defaultValue: "Don't settle for a generic PMS. Get one that works for your " },
        { name: 'titleHighlight', type: 'text', defaultValue: 'specialty!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Request Free Customization' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/pms-specialty-dashboard.png' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // Highlights Group
    {
      name: 'highlights',
      type: 'group',
      label: 'Highlights Section',
      fields: [
        {
          name: 'highlights',
          type: 'array',
          label: 'Highlight Cards',
          dbName: 'hl_items',
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
          dbName: 'faq_items',
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
          dbName: 'cta_hl',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'titleLine1', type: 'text', defaultValue: 'Free PMS? We Know You Want It.' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Try It Now for FREE!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Get Started For Free' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
