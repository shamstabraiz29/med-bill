import type { GlobalConfig } from 'payload'

export const LargePractices: GlobalConfig = {
  slug: 'large-practices',
  dbName: 'large_pract',
  label: 'Large Practice Billing Page',
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
        { name: 'badge', type: 'text', defaultValue: 'Large Practice Billing.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Billing Services for your ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Large Practice' },
        { name: 'descriptionParagraph1', type: 'textarea', defaultValue: 'Save up to 30-60% on annual payroll with billing workflows built for high-volume large practices.' },
        { name: 'descriptionParagraph2', type: 'textarea', defaultValue: 'Billing inaccuracies can be disastrous for your large practice\'s financial growth. For 10+ years in billing and denial management, BellMedEx is known for mitigating lost revenue and reducing claim denials by 97% for large practices. Available in all 50 States!' },
        { name: 'ctaText', type: 'text', defaultValue: 'Contact BellMedEx Now' },
        { name: 'ctaHref', type: 'text', defaultValue: '/contact-bellmedex' },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          dbName: 'lp_h_st',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // Common Goals Group
    {
      name: 'commonGoals',
      type: 'group',
      label: 'Common Goals Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Shared Objectives.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'BellMedEx and Large Practices Share ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Common Goals' },
        {
          name: 'goals',
          type: 'array',
          label: 'Goals List',
          dbName: 'lp_cg_g',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Billing Infrastructure Group
    {
      name: 'infrastructure',
      type: 'group',
      label: 'Billing Infrastructure Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Enterprise Workflows.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Optimized Billing Infrastructure for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'High-Volume Practices' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Infrastructure Highlights',
          dbName: 'lp_in_hl',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // KPIs Section Group
    {
      name: 'kpis',
      type: 'group',
      label: 'KPIs Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Key Performance Indicators.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Measuring Performance with ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Actionable KPIs' },
        {
          name: 'cards',
          type: 'array',
          label: 'KPI Cards',
          dbName: 'lp_kpi_c',
          fields: [
            { name: 'number', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Audit Metrics Group
    {
      name: 'auditMetrics',
      type: 'group',
      label: 'Audit Metrics Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Measurable Outcomes.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Proven Audit Metrics & ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Results' },
        {
          name: 'metrics',
          type: 'array',
          label: 'Metrics List',
          dbName: 'lp_am_m',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'subtitle', type: 'text' },
          ],
        },
      ],
    },

    // Personalized Services Group
    {
      name: 'personalizedServices',
      type: 'group',
      label: 'Personalized Services Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Tailored Solutions.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Personalized Billing Services for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Your Practice' },
        {
          name: 'services',
          type: 'array',
          label: 'Services List',
          dbName: 'lp_ps_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Billing Flowchart Group
    {
      name: 'billingFlowchart',
      type: 'group',
      label: 'Billing Flowchart Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Seamless Process.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Our End-to-End Billing ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Flowchart' },
        {
          name: 'steps',
          type: 'array',
          label: 'Flowchart Steps',
          dbName: 'lp_bf_s',
          fields: [
            { name: 'stepNumber', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Work Process Group
    {
      name: 'workProcess',
      type: 'group',
      label: 'Work Process Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Proven Method.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Our Work Process for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Large Practices' },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          dbName: 'lp_wp_s',
          fields: [
            { name: 'stepNumber', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Add-On Services Group
    {
      name: 'addOnServices',
      type: 'group',
      label: 'Add-On Services Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Additional Support.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Comprehensive Add-On ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Billing Services' },
        {
          name: 'services',
          type: 'array',
          label: 'Add-On List',
          dbName: 'lp_ao_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },
  ],
}
