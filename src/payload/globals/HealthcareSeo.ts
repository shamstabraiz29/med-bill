import type { GlobalConfig } from 'payload'

export const HealthcareSeo: GlobalConfig = {
  slug: 'healthcare-seo',
  label: 'Healthcare SEO Page',
  admin: {
    group: 'Content',
  },
  fields: [
    // ── SEO ──
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Meta',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title', required: true },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description', required: true },
        { name: 'keywords', type: 'text', label: 'Keywords' },
        { name: 'canonicalUrl', type: 'text', label: 'Canonical URL' },
        { name: 'robots', type: 'text', label: 'Robots', defaultValue: 'index, follow' },
        {
          name: 'openGraph',
          type: 'group',
          label: 'Open Graph',
          fields: [
            { name: 'ogTitle', type: 'text', label: 'OG Title' },
            { name: 'ogDescription', type: 'textarea', label: 'OG Description' },
            { name: 'ogType', type: 'text', label: 'OG Type', defaultValue: 'website' },
            { name: 'ogUrl', type: 'text', label: 'OG URL' },
          ],
        },
      ],
    },

    // ── HERO ──
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Eyebrow Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlighted)', required: true },
        { name: 'subtitle', type: 'textarea', label: 'Subtitle Copy', required: true },
        { name: 'leftImageSrc', type: 'text', label: 'Left Card Image Path' },
        { name: 'leftBadgeTag', type: 'text', label: 'Left Card Tag' },
        { name: 'leftBadgeStatus', type: 'text', label: 'Left Card Status' },
        { name: 'leftMetricValue', type: 'text', label: 'Left Card Metric Value' },
        { name: 'leftMetricLabel', type: 'text', label: 'Left Card Metric Label' },
        { name: 'formButtonLabel', type: 'text', label: 'Form Button Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Message Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Message Description', required: true },
        { name: 'rightImageSrc', type: 'text', label: 'Right Card Image Path' },
        { name: 'rightBadgeTag', type: 'text', label: 'Right Card Tag' },
        { name: 'rightMetricValue', type: 'text', label: 'Right Card Metric Value' },
        { name: 'rightMetricLabel', type: 'text', label: 'Right Card Metric Label' },
      ],
    },

    // ── PILLARS ──
    {
      name: 'pillars',
      type: 'group',
      label: 'Core Services Pillars Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'pillars',
          type: 'array',
          label: 'Service Pillars',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── EXPERTISE ──
    {
      name: 'expertise',
      type: 'group',
      label: 'Healthcare SEO Expertise Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'cardTitle', type: 'text', label: 'Card Title', required: true },
        { name: 'cardDescription', type: 'textarea', label: 'Card Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'valueProps',
          type: 'array',
          label: 'Value Proposition Pills',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'detail', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── SERVICES LIST ──
    {
      name: 'servicesList',
      type: 'group',
      label: 'Healthcare SEO Services List Section',
      fields: [
        { name: 'bannerTitlePlain', type: 'text', label: 'Banner Title (Plain)', required: true },
        { name: 'bannerTitleHighlight', type: 'text', label: 'Banner Title (Highlight)', required: true },
        { name: 'bannerCtaLabel', type: 'text', label: 'Banner CTA Label', required: true },
        { name: 'bannerCtaHref', type: 'text', label: 'Banner CTA Href', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Detailed Service Items',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'tagline', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'ctaLabel', type: 'text', required: true },
            { name: 'ctaHref', type: 'text', required: true },
            { name: 'accentBg', type: 'text', label: 'Accent Card Class', defaultValue: 'bg-[#1E1B4B] text-white' },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'imageSrc', type: 'text', label: 'Image Path' },
            {
              name: 'moreDetails',
              type: 'array',
              label: 'Expandable Details',
              fields: [{ name: 'label', type: 'textarea', required: true }],
            },
          ],
        },
      ],
    },

    // ── PRICING UNLOCK CTA ──
    {
      name: 'pricingUnlockCta',
      type: 'group',
      label: 'Pricing Unlock CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formDescription', type: 'text', label: 'Form Description', required: true },
        { name: 'formCtaLabel', type: 'text', label: 'Form Submit Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Description', required: true },
      ],
    },

    // ── HIPAA & OTHER SERVICES ──
    {
      name: 'hipaaAndServices',
      type: 'group',
      label: 'HIPAA & Other Services Section',
      fields: [
        { name: 'hipaaBadgeText', type: 'text', label: 'HIPAA Badge Text', required: true },
        { name: 'hipaaTitle', type: 'text', label: 'HIPAA Card Title', required: true },
        { name: 'hipaaDescription', type: 'textarea', label: 'HIPAA Card Description', required: true },
        { name: 'hipaaTag', type: 'text', label: 'HIPAA Security Tag', required: true },
        { name: 'otherServicesTitle', type: 'text', label: 'Other Services Title', required: true },
        { name: 'otherServicesDescription', type: 'textarea', label: 'Other Services Description', required: true },
        { name: 'otherServicesCtaLabel', type: 'text', label: 'Other Services Link Label', required: true },
        { name: 'otherServicesCtaHref', type: 'text', label: 'Other Services Link Href', required: true },
        {
          name: 'otherServices',
          type: 'array',
          label: 'Other Service Tiles',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'image', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── SCHEDULE CONSULTATION ──
    {
      name: 'scheduleConsultation',
      type: 'group',
      label: 'Schedule Consultation Section',
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Section Subtitle', required: true },
        { name: 'formCtaLabel', type: 'text', label: 'Form Submit Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Description', required: true },
        { name: 'imageSrc', type: 'text', label: 'Side Image Path' },
        { name: 'cardTitle', type: 'text', label: 'Card Title' },
        { name: 'cardSubtitle', type: 'text', label: 'Card Subtitle' },
        { name: 'cardBadge', type: 'text', label: 'Card Badge Text' },
      ],
    },
  ],
}
