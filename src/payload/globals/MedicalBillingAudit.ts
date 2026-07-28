import type { GlobalConfig } from 'payload'

export const MedicalBillingAudit: GlobalConfig = {
  slug: 'medical-billing-audit',
  label: 'Medical Billing Audit Page',
  admin: {
    group: 'Services',
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
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formDescription', type: 'text', label: 'Form Description', required: true },
        { name: 'formButtonLabel', type: 'text', label: 'Form Submit Label', required: true },
      ],
    },

    // ── OVERVIEW ──
    {
      name: 'overview',
      type: 'group',
      label: 'Overview Section',
      fields: [
        {
          name: 'blocks',
          type: 'array',
          label: 'Overview Blocks',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'titlePlain', type: 'text', required: true },
            { name: 'titleHighlight', type: 'text', required: true },
            { name: 'titleSuffix', type: 'text' },
            {
              name: 'paragraphs',
              type: 'array',
              label: 'Paragraphs',
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
            { name: 'imageSrc', type: 'text', required: true },
            { name: 'imageAlt', type: 'text', required: true },
            { name: 'imagePosition', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
          ],
        },
      ],
    },

    // ── SOLUTIONS ──
    {
      name: 'solutions',
      type: 'group',
      label: 'Audit Solutions Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'solutions',
          type: 'array',
          label: 'Solutions Grid',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── RECORDS CTA ──
    {
      name: 'recordsCta',
      type: 'group',
      label: 'Medical Records CTA Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'subtext', type: 'text', label: 'Subtext', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
      ],
    },

    // ── PROBLEMS & SOLUTIONS ──
    {
      name: 'problemsSolutions',
      type: 'group',
      label: 'Problems & Solutions Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'pairs',
          type: 'array',
          label: 'Problem Solution Cards',
          fields: [
            { name: 'problemIconName', type: 'text', required: true, label: 'Problem Icon Name' },
            { name: 'problemTitle', type: 'text', required: true },
            { name: 'problemDescription', type: 'textarea', required: true },
            { name: 'solutionIconName', type: 'text', required: true, label: 'Solution Icon Name' },
            { name: 'solutionTitle', type: 'text', required: true },
            { name: 'solutionDescription', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── OPTIMIZE PROCESSES ──
    {
      name: 'optimizeProcesses',
      type: 'group',
      label: 'Process Optimization Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'processes',
          type: 'array',
          label: 'Audit Process Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'freeAuditBadge', type: 'text', label: 'Free Audit Badge' },
        { name: 'freeAuditTitlePrefix', type: 'text', label: 'Free Audit Title Prefix' },
        { name: 'freeAuditTitleHighlight', type: 'text', label: 'Free Audit Title Highlight' },
        { name: 'freeAuditDescription', type: 'textarea', label: 'Free Audit Description' },
        { name: 'freeAuditCtaLabel', type: 'text', label: 'Free Audit CTA Label' },
        { name: 'freeAuditCtaHref', type: 'text', label: 'Free Audit CTA Href' },
      ],
    },

    // ── SOLUTIONS TO DATE ──
    {
      name: 'solutionsToDate',
      type: 'group',
      label: 'Track Record & Solutions Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'stats',
          type: 'array',
          label: 'Audit Stat Cards',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        { name: 'bannerTitlePrefix', type: 'text', label: 'Banner Title Prefix', required: true },
        { name: 'bannerTitleHighlight', type: 'text', label: 'Banner Title Highlight', required: true },
        { name: 'bannerTitleSuffix', type: 'text', label: 'Banner Title Suffix', required: true },
        { name: 'bannerCtaLabel', type: 'text', label: 'Banner CTA Label', required: true },
        { name: 'bannerCtaHref', type: 'text', label: 'Banner CTA Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Doctor Image Path' },
        { name: 'imageAlt', type: 'text', label: 'Doctor Image Alt' },
        {
          name: 'complianceAreas',
          type: 'array',
          label: 'Compliance Area Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── POST AUDIT REPORTS ──
    {
      name: 'postAuditReports',
      type: 'group',
      label: 'Post-Audit Reporting Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)', required: true },
        {
          name: 'reports',
          type: 'array',
          label: 'Report Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── CHART REVIEWS ──
    {
      name: 'chartReviews',
      type: 'group',
      label: 'Medical Chart Reviews Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Chart Review Tabs',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── CLAIM ACCURACY CTA ──
    {
      name: 'claimAccuracyCta',
      type: 'group',
      label: 'Claim Accuracy CTA Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'subtext', type: 'text', label: 'Subtext', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
      ],
    },
  ],
}
