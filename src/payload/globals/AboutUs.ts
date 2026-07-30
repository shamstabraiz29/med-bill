import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const AboutUs: GlobalConfig = {
  slug: 'about-us',
  dbName: 'about_us',
  label: 'About Us / About BellMedEx Page',
  admin: {
    group: 'Core Pages',
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
        { name: 'badge', type: 'text', defaultValue: 'About BellMedEx Healthcare RCM' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Pioneering the Future of ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Healthcare Revenue Operations' },
        { name: 'description', type: 'textarea' },
        {
          name: 'checklist',
          type: 'array',
          label: 'Checklist Highlights',
          dbName: 'au_h_chk',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'primaryBtnText', type: 'text', defaultValue: 'Schedule Free Audit' },
        { name: 'primaryBtnLink', type: 'text', defaultValue: '/schedule-a-demo' },
        { name: 'secondaryBtnText', type: 'text', defaultValue: 'Contact Our Team' },
        { name: 'secondaryBtnLink', type: 'text', defaultValue: '/contact-us' },
        { name: 'imageSrc', type: 'text', defaultValue: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop' },
        { name: 'imageAlt', type: 'text', defaultValue: 'BellMedEx Healthcare RCM Team' },
        { name: 'topBadgeLabel', type: 'text', defaultValue: 'Trusted RCM Partner' },
        { name: 'topBadgeTitle', type: 'text', defaultValue: '500+ Clinics & Physicians' },
        { name: 'bottomStatLabel', type: 'text', defaultValue: 'Annual Collections' },
        { name: 'bottomStatValue', type: 'text', defaultValue: '$250M+' },
        { name: 'bottomStatSubtext', type: 'text', defaultValue: 'processed annually' },
        { name: 'bottomBadgeText', type: 'text', defaultValue: '+30% Avg Boost' },
      ],
    },

    // Mission & Vision Group
    {
      name: 'missionVision',
      type: 'group',
      label: 'Mission & Vision Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Mission & Vision' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Empowering Healthcare Practices ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'To Thrive Financially' },
        { name: 'description', type: 'textarea' },
        { name: 'missionBadge', type: 'text', defaultValue: 'Our Mission' },
        { name: 'missionTitle', type: 'text', defaultValue: 'Maximizing Provider Collections With Zero Administrative Stress' },
        { name: 'missionDescription', type: 'textarea' },
        { name: 'visionBadge', type: 'text', defaultValue: 'Our Vision' },
        { name: 'visionTitle', type: 'text', defaultValue: 'Setting the Industry Benchmark for Modern RCM Services' },
        { name: 'visionDescription', type: 'textarea' },
        { name: 'valuesBadge', type: 'text', defaultValue: 'Core Values' },
        { name: 'valuesTitlePlain', type: 'text', defaultValue: 'Guided By ' },
        { name: 'valuesTitleHighlight', type: 'text', defaultValue: 'Uncompromising Standards' },
        { name: 'valuesDescription', type: 'textarea' },
        {
          name: 'values',
          type: 'array',
          label: 'Core Values Cards',
          dbName: 'au_mv_vals',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Capabilities Group
    {
      name: 'capabilities',
      type: 'group',
      label: 'Core RCM Capabilities Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Comprehensive Solutions' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Our Core RCM Capabilities & ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Expertise' },
        { name: 'description', type: 'textarea' },
        {
          name: 'capabilities',
          type: 'array',
          label: 'Capability Cards',
          dbName: 'au_cap_items',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // Why Us Group
    {
      name: 'whyUs',
      type: 'group',
      label: 'BellMedEx Advantage Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Why Practices Trust Us' },
        { name: 'titlePlain', type: 'text', defaultValue: 'The BellMedEx Advantage' },
        { name: 'subtitle', type: 'textarea' },
        {
          name: 'pillars',
          type: 'array',
          label: 'Advantage Pillars',
          dbName: 'au_wy_plrs',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'desc', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
        { name: 'impactBadge', type: 'text', defaultValue: 'Average Practice Impact' },
        { name: 'impactTitle', type: 'text', defaultValue: 'Proven Revenue Uplift' },
        {
          name: 'metrics',
          type: 'array',
          label: 'Impact Metrics',
          dbName: 'au_wy_mtrcs',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
            { name: 'badgeText', type: 'text', required: true },
          ],
        },
      ],
    },

    // CTA Group
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Banner Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Partner With BellMedEx' },
        { name: 'title', type: 'text', defaultValue: 'Ready to Experience Stress-Free Revenue Cycle Management?' },
        { name: 'description', type: 'textarea' },
        {
          name: 'highlights',
          type: 'array',
          label: 'Checklist Highlights',
          dbName: 'au_cta_hl',
          fields: [{ name: 'label', type: 'text' }],
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Schedule Free Audit' },
        { name: 'buttonLink', type: 'text', defaultValue: '/schedule-a-demo' },
      ],
    },
  ],
}
