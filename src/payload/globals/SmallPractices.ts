import type { GlobalConfig } from 'payload'

export const SmallPractices: GlobalConfig = {
  slug: 'small-practices',
  dbName: 'sm_pract',
  label: 'Small Practice Billing Page',
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
        { name: 'badge', type: 'text', defaultValue: 'Small Practice Billing.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Medical Billing Services for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Small Practices' },
        {
          name: 'descriptionParagraph1',
          type: 'textarea',
          defaultValue:
            "Medical billing for small practices is an expert service that transforms each patient encounter in a small clinic or solo provider's office into a clean, payer-ready claim. This service makes sure that each patient visit gets the right ICD-10 code. It follows up on every Medicare or private healthcare insurance claim. This way, small physician groups and micro clinics receive payments for the services given to patients.",
        },
        {
          name: 'descriptionParagraph2',
          type: 'textarea',
          defaultValue:
            "BellMedEx provides medical billing services for small healthcare practices. We act as a complete revenue cycle partner. We turn every chart into a claim that meets payer requirements and deposit the reimbursements directly into your account. You don't need to hire more staff or deal with software problems.",
        },
        {
          name: 'trustStats',
          type: 'array',
          label: 'Trust Badges / Stats',
          dbName: 'sp_h_ts',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Hero Benefits',
          dbName: 'sp_h_bn',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        {
          name: 'formTitle',
          type: 'text',
          defaultValue: 'Request a Free Small Practice Billing Audit',
        },
        {
          name: 'formSubtitle',
          type: 'textarea',
          defaultValue:
            'See how much revenue your clinic is missing out on with a complimentary 30-minute analysis.',
        },
      ],
    },

    // Collaborate Group
    {
      name: 'collaborate',
      type: 'group',
      label: 'Collaborate Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Customized Billing.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Collaborate with BellMedEx and Get ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Customized Billing Services' },
        { name: 'titleSuffix', type: 'text', defaultValue: ' for Your Small Practice' },
        {
          name: 'services',
          type: 'array',
          label: 'Collaborate Services',
          dbName: 'sp_col_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'imageSrc', type: 'text', required: true },
          ],
        },
      ],
    },

    // Affordable Billing Group
    {
      name: 'affordableBilling',
      type: 'group',
      label: 'Affordable Billing Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Revenue & Profit.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Are You Making More Revenue but ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Lesser Profits?' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Guess what, higher billing costs could be taking away a big chunk of your revenue, leaving crumbs behind.',
        },
        {
          name: 'mainTitlePlain',
          type: 'text',
          defaultValue: 'Outsourcing with BellMedEx Is Inexpensive Because We Make Billing ',
        },
        {
          name: 'mainTitleHighlight',
          type: 'text',
          defaultValue: 'Affordable for Your Individual Practice',
        },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            'At BellMedEx, we have helped over 1,500 small and mid-sized practices with billing & collections + coding assistance for independent practices. These include family medicine offices, low-volume practices, and rural health clinics. Our medical billing solutions increase their revenue by an average of 30% in a cost-effective way.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'A small-budget clinic faces challenges like accounts management and claim denials. It works hard to provide quality care while managing many tasks and tight budgets. Our accounts management team provides affordable and effective medical billing support. We help small healthcare practices grow from just surviving to thriving.',
        },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue:
            'Healthcare professional reviewing medical billing analytics on a laptop',
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Affordable Billing Benefits List',
          dbName: 'sp_af_b',
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
      ],
    },

    // Specialty Form Group
    {
      name: 'specialtyForm',
      type: 'group',
      label: 'Specialty Form Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Specialty Billing.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Billing Services Customized for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Your Specialty' },
        { name: 'description', type: 'text', defaultValue: 'We Cover 75+ Specialties.' },
      ],
    },

    // Revenue Loss Group
    {
      name: 'revenueLoss',
      type: 'group',
      label: 'Revenue Loss Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'According to Recent Reports.' },
        {
          name: 'titlePlain',
          type: 'text',
          defaultValue:
            'Medical Billing Complexities Such as Denied Claims and Poor Billing Practices Result in ',
        },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Massive Revenue Loss' },
        {
          name: 'stats',
          type: 'array',
          label: 'Revenue Loss Stats',
          dbName: 'sp_rl_st',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Billing Process Group
    {
      name: 'billingProcess',
      type: 'group',
      label: 'Billing Process Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'End-to-End Workflow.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Our Streamlined Medical Billing Process for ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Small Practices' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'We simplify every step of your revenue cycle so you can focus on patient care.',
        },
        { name: 'ctaText', type: 'text', defaultValue: 'SCHEDULE A FREE DEMO' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          dbName: 'sp_bp_s',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            {
              name: 'items',
              type: 'array',
              label: 'Step Bullet Points',
              dbName: 'sp_bp_s_i',
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
          ],
        },
      ],
    },

    // Ease Billing Group
    {
      name: 'easeBilling',
      type: 'group',
      label: 'Ease Billing Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Small Practice Support.' },
        { name: 'titlePlain', type: 'text', defaultValue: "Here's How We Ease Billing for " },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Small Practices!' },
        {
          name: 'features',
          type: 'array',
          label: 'Ease Billing Features',
          dbName: 'sp_eb_f',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Transparency Group
    {
      name: 'transparency',
      type: 'group',
      label: 'Transparency Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: '100% Transparency ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'and No Hidden Fees' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'We offer high-end services for your small practice. Our team at BellMedEx believes in clear communication and making informed decisions to ensure efficiency in all areas of our billing services.',
        },
        { name: 'ctaText', type: 'text', defaultValue: 'Schedule a Demo' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/rcm-dashboard-laptop1.png' },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue:
            'Healthcare professional reviewing transparent medical billing reports on a tablet',
        },
      ],
    },

    // Partner CTA Group
    {
      name: 'partnerCta',
      type: 'group',
      label: 'Partner CTA Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Partner With BellMedEx.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Partner with BellMedEx and ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Experience the Difference' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            "We prioritize high-touch, personalized service, clear communication and transparency, keeping you informed every step of the way. Our team possesses in-depth knowledge of the latest billing regulations and coding guidelines, ensuring compliance and maximizing your practice's financial performance. We provide complete reports and analytics to empower you to make informed decisions about your healthcare.",
        },
        { name: 'ctaText', type: 'text', defaultValue: 'Schedule a Quick Call' },
        { name: 'ctaHref', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
