import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

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
    seoFields,
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
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'Robust Billing Infrastructure is a Promising Feature of Our ',
        },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Medical Billing Services' },
        {
          name: 'descriptionParagraph1',
          type: 'textarea',
          defaultValue:
            'Large practices face myriad challenges from patient registration to claims submission and follow-up. One of the grand struggles is filing multiple claims above all the other administrative burdens.',
        },
        {
          name: 'descriptionParagraph2',
          type: 'textarea',
          defaultValue:
            'A solid billing infrastructure ensures transparency, affordability, and flexibility that fine-tunes the weak areas of billing processes and this is where BellMedEx comes in. Our billing services are handled by efficient systems — that have up-to-date denial management resources and experienced personnel — who provide solutions and 24/7 assistance.',
        },
        { name: 'ctaText', type: 'text', defaultValue: "Let's Hop on a Quick Call" },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // KPIs Section Group
    {
      name: 'kpis',
      type: 'group',
      label: 'KPIs Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: '8 Important KPIs ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'to Ensure Faster and More ROI' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'These metrics make up most of the revenue cycle management flowchart for the billing process and revenue cycle management of your large practice.',
        },
        {
          name: 'chartItems',
          type: 'array',
          label: 'KPI Chart Items',
          dbName: 'lp_kpi_ci',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'number', required: true },
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
        { name: 'badge', type: 'text', defaultValue: 'Billing Audit Metrics.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'It Takes us ' },
        { name: 'titleHighlight', type: 'text', defaultValue: '4 Metrics to Audit Billing' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' and Fix ROI for Your Large Practice' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            "These metrics make up 60% of your billing process's efficiency, productivity, and financial performance. The figures are taken from the first-hand experience of our clients.",
        },
        {
          name: 'metrics',
          type: 'array',
          label: 'Metrics List',
          dbName: 'lp_am_m',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
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
        { name: 'badge', type: 'text', defaultValue: 'Personalized Billing.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'Get Personalized Medical Billing Services to Refine your ',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          defaultValue: 'Billing, Coding, and overall RCM Strengths',
        },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            "We understand one-size doesn't fit all and your large practice needs customized services that are transparent yet error-less. We audit your billing process, identify, and rectify errors and check all unpaid and aging claims.",
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'Your Large Practice is fighting multiple battles from patient registration to claims submission and denial management. We take over all your non-clinical burden to help you focus on delivering patient care.',
        },
        {
          name: 'paragraph3',
          type: 'textarea',
          defaultValue:
            'In fact, we have billing, coding, and RCM systems for your large practice in place. We submit clean claims more than 99% of the time, ensure timely submission of medical claims, follow up on aging A/R daily, and increase reimbursements.',
        },
        { name: 'ctaText', type: 'text', defaultValue: 'Book Free Consultation Now' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue: 'Healthcare professional reviewing personalized medical billing services on a laptop',
        },
      ],
    },

    // Billing Flowchart Group
    {
      name: 'billingFlowchart',
      type: 'group',
      label: 'Billing Flowchart Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'RCM Flowchart.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'Medical Billing Services to Streamline ',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          defaultValue: 'Revenue Cycle Management for Large Practices',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Simplify the complexities of medical billing and enhance your financial and healthcare productivity by opting the following billing flowchart for your large practice.',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Flowchart Steps',
          dbName: 'lp_bf_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
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
        { name: 'badge', type: 'text', defaultValue: 'Efficient Workflow.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue: 'Our Efficient Work Process to Achieve ',
        },
        { name: 'titleHighlight', type: 'text', defaultValue: 'These Goals Faster' },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          dbName: 'lp_wp_s',
          fields: [
            { name: 'stepNumber', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
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
        { name: 'badge', type: 'text', defaultValue: 'Add-On Services.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Add on Services to Provide a ' },
        {
          name: 'titleHighlight',
          type: 'text',
          defaultValue: "One-Stop Solution for your Large Practice's Thorough Billing and RCM Needs",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Unlock your fullest revenue and care potential with these add-on services available individually as well as complete package.',
        },
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
