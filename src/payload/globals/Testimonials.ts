import type { GlobalConfig } from 'payload'

export const Testimonials: GlobalConfig = {
  slug: 'testimonials-page',
  label: 'Client Testimonials Page',
  admin: {
    group: 'Resources',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    // Hero Section Group
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Client Success Stories' },
        { name: 'title', type: 'text', defaultValue: 'Trusted By Over 500+ Healthcare Practices' },
        { name: 'highlightedTitle', type: 'text', defaultValue: 'Across The Nation' },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue:
            'Read real reviews and verified success stories from practice owners, physicians, and clinic managers who modernized their medical billing and credentialing with BellMedEx.',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stat Badges',
          fields: [
            { name: 'value', type: 'text' },
            { name: 'label', type: 'text' },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Featured Testimonial Group
    {
      name: 'featuredTestimonial',
      type: 'group',
      label: 'Featured Testimonial',
      fields: [
        { name: 'verifiedBadgeText', type: 'text', defaultValue: 'Verified Practice Owner' },
        {
          name: 'quote',
          type: 'textarea',
          defaultValue:
            'BellMedEx has made my job as a practice owner much easier. I can relax a bit more knowing that you have my billing and credentialings needs handled.',
        },
        { name: 'authorName', type: 'text', defaultValue: 'Dr. Julia Will' },
        {
          name: 'authorRole',
          type: 'text',
          defaultValue: 'Counselor & Practice Owner @ Psychiatric Clinic',
        },
        {
          name: 'metrics',
          type: 'array',
          label: 'Impact Metrics Badges',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'authorImageSrc', type: 'text', label: 'Author Image URL' },
      ],
    },

    // Testimonials List Array
    {
      name: 'testimonialsList',
      type: 'array',
      label: 'Testimonials Cards',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'clinic', type: 'text' },
        { name: 'specialty', type: 'text', required: true },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'rating', type: 'number', defaultValue: 5 },
        { name: 'avatar', type: 'text', label: 'Avatar Image URL' },
        { name: 'roiStat', type: 'text', label: 'ROI Badge Text' },
        { name: 'verified', type: 'checkbox', defaultValue: true },
      ],
    },

    // Call to Action Group
    {
      name: 'cta',
      type: 'group',
      label: 'Bottom Call To Action',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: 'Ready to Join 500+ Satisfied Practices?',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Transform Your Practice Revenue & Eliminate Claim Denials Today',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue:
            'Schedule a complimentary 1-on-1 RCM audit with our medical billing specialists. We will analyze your current clean claim rate and identify lost revenue opportunities.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'CTA Checkmark Points',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Schedule Free Audit' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
