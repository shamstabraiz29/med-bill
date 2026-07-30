import type { GlobalConfig } from 'payload'

export const HospitalBillingServices: GlobalConfig = {
  slug: 'hospital-billing-services',
  dbName: 'hbs_page',
  label: 'Hospital Billing Services Page',
  admin: {
    group: 'Solutions',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    // 1. Hero Group
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Hospital Billing Services.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Best ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Hospital Billing Services' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' to Outsource in the USA' },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue:
            'Welcome to the Hospital Billing Company providing customized financial solutions to hospitals for as low as 2.49% of their monthly collections!',
        },
        { name: 'description1', type: 'textarea' },
        { name: 'description2', type: 'textarea' },
        { name: 'phoneText', type: 'text', defaultValue: '+1 (888) 987-6250' },
        { name: 'phoneLink', type: 'text', defaultValue: 'tel:+18889876250' },
        { name: 'ctaText', type: 'text', defaultValue: 'Contact Us' },
        { name: 'ctaHref', type: 'text', defaultValue: '/contact-us' },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          dbName: 'hbs_h_st',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // 2. Results Section
    {
      name: 'results',
      type: 'group',
      label: 'Results Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Consistently Achieving Better ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Results' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' for Hospitals' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'BellMedEx powers financial health for healthcare facilities across the country through compliant hospital billing, coding, and denial management.',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Results Stats',
          dbName: 'hbs_res_st',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // 3. Overview Section
    {
      name: 'overview',
      type: 'group',
      label: 'Overview Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Why Your Hospital System Needs ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Hospital Medical Billing Services' },
        { name: 'description', type: 'textarea' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/gennaya-matt.png' },
        { name: 'imageAlt', type: 'text', defaultValue: 'Hospital billing services team at work' },
        {
          name: 'benefits',
          type: 'array',
          label: 'Overview Benefits',
          dbName: 'hbs_ov_b',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        {
          name: 'checklist',
          type: 'array',
          label: 'Checklist Items',
          dbName: 'hbs_ov_cl',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },

    // 4. Assessment CTA Section
    {
      name: 'assessmentCta',
      type: 'group',
      label: 'Assessment CTA Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Contact Us!' },
        { name: 'buttonHref', type: 'text', defaultValue: '/contact-us' },
      ],
    },

    // 5. Experience Section
    {
      name: 'experience',
      type: 'group',
      label: 'Experience Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Trust Our Decades of ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Hospital Billing Experience' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/gennaya-matt.png' },
        { name: 'imageAlt', type: 'text' },
        {
          name: 'checklist',
          type: 'array',
          label: 'Experience Checklist',
          dbName: 'hbs_exp_cl',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },

    // 6. What Are Section
    {
      name: 'whatAre',
      type: 'group',
      label: 'What Are Hospital Billing Services Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'services',
          type: 'array',
          label: 'Service Items',
          dbName: 'hbs_wa_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'goalTitlePlain', type: 'text' },
        { name: 'goalTitleHighlight', type: 'text' },
        { name: 'goalDescription', type: 'textarea' },
        {
          name: 'goalPills',
          type: 'array',
          label: 'Goal Pills',
          dbName: 'hbs_wa_gp',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'goalCtaText', type: 'text', defaultValue: 'Contact Us' },
        { name: 'goalCtaHref', type: 'text', defaultValue: '/contact-us' },
      ],
    },

    // 7. We Also Do Section
    {
      name: 'weAlsoDo',
      type: 'group',
      label: 'We Also Do Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        {
          name: 'items',
          type: 'array',
          label: 'We Also Do Items',
          dbName: 'hbs_wad_i',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 8. Need Section
    {
      name: 'need',
      type: 'group',
      label: 'Need Hospital Billing Services Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'points',
          type: 'array',
          label: 'Need Points',
          dbName: 'hbs_nd_p',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 9. Team Section
    {
      name: 'team',
      type: 'group',
      label: 'Team Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Meet the Brains.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Behind Your ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Hospital Billing Operations' },
        { name: 'description', type: 'textarea' },
        {
          name: 'members',
          type: 'array',
          label: 'Team Members',
          dbName: 'hbs_tm_m',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'bio', type: 'textarea', required: true },
            { name: 'quote', type: 'textarea' },
            { name: 'imageSrc', type: 'text' },
            { name: 'imageAlt', type: 'text' },
            { name: 'linkedinUrl', type: 'text' },
          ],
        },
      ],
    },

    // 10. Affordable Section
    {
      name: 'affordable',
      type: 'group',
      label: 'Affordable Hospital Billing Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'AFFORDABLE SOLUTIONS' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'accordions',
          type: 'array',
          label: 'Accordion Items',
          dbName: 'hbs_aff_acc',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'content', type: 'textarea', required: true },
          ],
        },
        { name: 'visualTitle', type: 'text' },
        { name: 'visualDescription', type: 'textarea' },
        {
          name: 'visualHighlights',
          type: 'array',
          label: 'Visual Highlights',
          dbName: 'hbs_aff_vh',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },

    // 11. RCM Section
    {
      name: 'rcm',
      type: 'group',
      label: 'RCM Process Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'REVENUE CYCLE MANAGEMENT' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'steps',
          type: 'array',
          label: 'RCM Steps',
          dbName: 'hbs_rcm_s',
          fields: [
            { name: 'number', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // 12. Coding Section
    {
      name: 'coding',
      type: 'group',
      label: 'Hospital Coding Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'EXPERT CODING SERVICES' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'introParagraph', type: 'textarea' },
        {
          name: 'processSteps',
          type: 'array',
          label: 'Process Steps',
          dbName: 'hbs_cd_ps',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'whyTitlePlain', type: 'text' },
        { name: 'whyTitleHighlight', type: 'text' },
        { name: 'whyParagraph1', type: 'textarea' },
        { name: 'whyParagraph2', type: 'textarea' },
        { name: 'gaugeLabel', type: 'text', defaultValue: 'Code Accuracy Rate' },
        { name: 'gaugeValue', type: 'text', defaultValue: '99%' },
      ],
    },

    // 13. Compliance Checklist Section
    {
      name: 'complianceChecklist',
      type: 'group',
      label: 'Compliance Checklist Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'COMPLIANCE AUDIT' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Download Checklist' },
        {
          name: 'items',
          type: 'array',
          label: 'Checklist Items',
          dbName: 'hbs_cc_i',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },

    // 14. Patient Management Section
    {
      name: 'patientManagement',
      type: 'group',
      label: 'Patient Management Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'introParagraph', type: 'textarea' },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Paragraphs',
          dbName: 'hbs_pm_p',
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
      ],
    },

    // 15. Transform Section
    {
      name: 'transform',
      type: 'group',
      label: 'Transform Operations Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          dbName: 'hbs_tf_f',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 16. Software Section
    {
      name: 'software',
      type: 'group',
      label: 'Billing Software Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'subtitle', type: 'text' },
        { name: 'introParagraph', type: 'textarea' },
        {
          name: 'features',
          type: 'array',
          label: 'Software Features',
          dbName: 'hbs_sw_f',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'ctaText', type: 'text', defaultValue: 'Start a Free Trial' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // 17. Why Section
    {
      name: 'why',
      type: 'group',
      label: 'Why BellMedEx Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Why BellMedEx?' },
        { name: 'subtitle', type: 'text' },
        {
          name: 'questions',
          type: 'array',
          label: 'Questions',
          dbName: 'hbs_why_q',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'subheading', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'statValue', type: 'text', defaultValue: '97%' },
        { name: 'statDescription', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // 18. Schedule Call Section
    {
      name: 'scheduleCall',
      type: 'group',
      label: 'Schedule Call Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'HOSPITAL BILLING EXPERTS' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Schedule a Quick Call' },
        { name: 'buttonHref', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // 19. Promise Section
    {
      name: 'promise',
      type: 'group',
      label: 'Promise Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'We Promise ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Insurance, Billing & Financial Assistance' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' For Any Hospital In The USA' },
        {
          name: 'cards',
          type: 'array',
          label: 'Promise Cards',
          dbName: 'hbs_prm_c',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // 20. FAQ Section
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Hospital Billing FAQ' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Frequently Asked ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Questions' },
        { name: 'description', type: 'textarea' },
        { name: 'defaultOpenIndex', type: 'number', defaultValue: 3 },
        {
          name: 'items',
          type: 'array',
          label: 'FAQ Items',
          dbName: 'hbs_faq_i',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
        { name: 'helpTitle', type: 'text', defaultValue: 'Still have questions?' },
        { name: 'helpDescription', type: 'textarea' },
        { name: 'primaryCtaLabel', type: 'text', defaultValue: 'Contact Our Team' },
        { name: 'primaryCtaHref', type: 'text', defaultValue: '/contact-us' },
        { name: 'secondaryCtaLabel', type: 'text', defaultValue: 'Schedule a Free Consultation' },
        { name: 'secondaryCtaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'footerNote', type: 'text', defaultValue: 'Free Consultation • No Obligation' },
      ],
    },
  ],
}
