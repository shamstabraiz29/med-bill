import type { GlobalConfig } from 'payload'

export const OutsourceMedicalBilling: GlobalConfig = {
  slug: 'outsource-medical-billing',
  dbName: 'outsource_mb',
  label: 'Outsource Medical Billing Page',
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
        { name: 'badge', type: 'text', defaultValue: 'Outsource Medical Billing.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Outsource Medical Billing Services at Just ' },
        { name: 'titleHighlight', type: 'text', defaultValue: '2.49%' },
        { name: 'subtitle', type: 'textarea', defaultValue: 'Experience Thorough Compliance, Robust Technology, and Faster Reimbursements!' },
        { name: 'buttonText', type: 'text', defaultValue: "Let's Schedule a Quick Call" },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Intro Group
    {
      name: 'intro',
      type: 'group',
      label: 'Reduce Revenue Leaks Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Reduce Revenue Leaks.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Outsource Medical Billing ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'today to Reduce Errors, Minimize Revenue Holes, and Maximize Collections' },
        { name: 'description', type: 'textarea' },
        { name: 'commonProblemsTitle', type: 'text', defaultValue: 'Common problems practices face with billing:' },
        {
          name: 'challenges',
          type: 'array',
          label: 'Billing Challenges',
          dbName: 'omb_ch',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Set up a Discovery Call' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/doctor-hero.png' },
        { name: 'imageAlt', type: 'text' },
        { name: 'calloutTitle', type: 'text', defaultValue: 'Maximize collections with expert billing support' },
        { name: 'calloutDescription', type: 'text', defaultValue: 'Outsource billing to protect revenue and focus on patient care.' },
      ],
    },

    // Comparison Group
    {
      name: 'comparison',
      type: 'group',
      label: 'In-house vs Outsourced Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'In-house Vs. Outsourced.' },
        { name: 'titlePlain', type: 'text', defaultValue: "Let's Compare " },
        { name: 'titleHighlight', type: 'text', defaultValue: 'In-house Medical Billing Vs. Outsourcing with BellMedEx' },
        { name: 'description', type: 'textarea' },
        {
          name: 'items',
          type: 'array',
          label: 'Comparison Rows',
          dbName: 'omb_comp_i',
          fields: [
            { name: 'inhouseText', type: 'textarea', required: true },
            {
              name: 'inhouseBullets',
              type: 'array',
              label: 'In-house Bullets',
              dbName: 'omb_comp_b',
              fields: [{ name: 'text', type: 'text' }],
            },
            { name: 'outsourcingText', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // Specialists Group
    {
      name: 'specialists',
      type: 'group',
      label: 'Medical Billing Specialists Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Certified Medical Billing Specialists.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Why Choose BellMedEx ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Outsourced Billing Specialists?' },
        { name: 'description', type: 'textarea' },
        {
          name: 'points',
          type: 'array',
          label: 'Expertise Points',
          dbName: 'omb_spec_p',
          fields: [{ name: 'text', type: 'textarea' }],
        },
        {
          name: 'metrics',
          type: 'array',
          label: 'Performance Metrics',
          dbName: 'omb_spec_m',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'number', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Schedule a Call' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Practice Efficiency Group
    {
      name: 'practiceEfficiency',
      type: 'group',
      label: 'Steering Healthcare Practice Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Are You Steering the Wheel of Your ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Healthcare Practice' },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Practice Paragraphs',
          dbName: 'omb_eff_p',
          fields: [{ name: 'text', type: 'textarea' }],
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Get a Demo' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'imageSrc', type: 'text', defaultValue: '/doctors-team.png' },
        { name: 'imageAlt', type: 'text' },
        { name: 'calloutTitle', type: 'text', defaultValue: 'Stay laser-focused on patient care' },
        { name: 'calloutDescription', type: 'text', defaultValue: 'We take over front and back-end medical billing services.' },
      ],
    },

    // Solutions Group
    {
      name: 'solutions',
      type: 'group',
      label: 'Comprehensive Billing Solutions Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Comprehensive Billing Solutions.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'We Deliver Comprehensive ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Medical Billing Solutions' },
        { name: 'description', type: 'textarea' },
        {
          name: 'solutions',
          type: 'array',
          label: 'Solution Cards',
          dbName: 'omb_sol_i',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Get Started CTA Group
    {
      name: 'getStartedCta',
      type: 'group',
      label: 'Good Fit CTA Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Outsourcing Medical Billing.' },
        { name: 'titleLine1', type: 'text', defaultValue: "Let's Find Out if We are a " },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Good Fit' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'buttonText', type: 'text', defaultValue: 'Get Started' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },

    // Technology Expertise Group
    {
      name: 'technologyExpertise',
      type: 'group',
      label: 'Technology & Expertise Section',
      fields: [
        { name: 'techBadge', type: 'text', defaultValue: 'Robust Tech Stacks.' },
        { name: 'techTitlePlain', type: 'text', defaultValue: 'The Right Technology Solution for Your ' },
        { name: 'techTitleHighlight', type: 'text', defaultValue: 'Medical Practice' },
        {
          name: 'techFeatures',
          type: 'array',
          label: 'Tech Features',
          dbName: 'omb_tech_f',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'expBadge', type: 'text', defaultValue: 'Proven Billing Expertise.' },
        { name: 'expTitlePlain', type: 'text', defaultValue: 'The Right Medical Billing Team for ' },
        { name: 'expTitleHighlight', type: 'text', defaultValue: 'Faster Reimbursements' },
        {
          name: 'expFeatures',
          type: 'array',
          label: 'Expertise Features',
          dbName: 'omb_exp_f',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'ctaTitlePlain', type: 'text', defaultValue: 'Empower Your RCM with Advanced Technology and ' },
        { name: 'ctaTitleHighlight', type: 'text', defaultValue: 'Proven Expertise' },
        { name: 'ctaSubtitle', type: 'textarea' },
        { name: 'ctaButtonText', type: 'text', defaultValue: 'Schedule a Call' },
        { name: 'ctaButtonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
