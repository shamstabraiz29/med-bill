import type { GlobalConfig } from 'payload'

export const RevenueCycleManagement: GlobalConfig = {
  slug: 'revenue-cycle-management',
  label: 'Revenue Cycle Management Page',
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
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlighted)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'bullets',
          type: 'array',
          label: 'Feature Bullets',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formDescription', type: 'text', label: 'Form Description', required: true },
        { name: 'formButtonLabel', type: 'text', label: 'Form Submit Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Message Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Message Description', required: true },
      ],
    },

    // ── IMPORTANCE SECTION ──
    {
      name: 'importance',
      type: 'group',
      label: 'Importance of RCM Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'description3', type: 'textarea', label: 'Description Paragraph 3', required: true },
        { name: 'imageSrc', type: 'text', label: 'Doctor Image Path' },
      ],
    },

    // ── AUDIT CTA SECTION ──
    {
      name: 'auditCta',
      type: 'group',
      label: 'Practice Audit CTA Section',
      fields: [
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)', required: true },
        { name: 'subtitleHighlight', type: 'text', label: 'Subtitle Highlight', required: true },
        { name: 'subtitleSub', type: 'text', label: 'Subtitle Subtext', required: true },
        { name: 'buttonLabel', type: 'text', label: 'Button Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Description', required: true },
      ],
    },

    // ── SERVICES OVERVIEW ──
    {
      name: 'servicesOverview',
      type: 'group',
      label: 'Services Overview Section',
      fields: [
        {
          name: 'items',
          type: 'array',
          label: 'Service Cards',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'titlePrefix', type: 'text' },
            { name: 'titleHighlight', type: 'text' },
            { name: 'titleSuffix', type: 'text' },
            { name: 'description', type: 'textarea', required: true },
            { name: 'linkText', type: 'text', required: true },
            { name: 'linkHref', type: 'text', required: true },
            { name: 'imageSrc', type: 'text', required: true },
            { name: 'imageAlt', type: 'text' },
            { name: 'cardBg', type: 'text' },
            { name: 'borderColor', type: 'text' },
            { name: 'imageLeft', type: 'checkbox', label: 'Place Image On Left?' },
          ],
        },
      ],
    },

    // ── ROI CASE STUDY ──
    {
      name: 'roiCaseStudy',
      type: 'group',
      label: 'RCM ROI Case Study Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)', required: true },
        {
          name: 'tableRows',
          type: 'array',
          label: 'Table Metric Rows',
          fields: [
            { name: 'metricLabel', type: 'text', required: true },
            { name: 'inHouseValue', type: 'text', required: true },
            { name: 'rcmValue', type: 'text', required: true },
            { name: 'resultValue', type: 'text' },
            { name: 'resultSub', type: 'text' },
          ],
        },
        { name: 'stat1Value', type: 'text', label: 'Stat 1 Value', required: true },
        { name: 'stat1Label', type: 'text', label: 'Stat 1 Label', required: true },
        { name: 'stat1Sub', type: 'text', label: 'Stat 1 Subtext' },
        { name: 'stat2Value', type: 'text', label: 'Stat 2 Value', required: true },
        { name: 'stat2Label', type: 'text', label: 'Stat 2 Label', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        { name: 'disclaimerText', type: 'textarea', label: 'Disclaimer Text' },
      ],
    },

    // ── FEATURES GRID ──
    {
      name: 'featuresGrid',
      type: 'group',
      label: 'End-to-End RCM Features Grid',
      fields: [
        { name: 'headerTitle', type: 'text', label: 'Header Title', required: true },
        { name: 'headerDescription', type: 'textarea', label: 'Header Description', required: true },
        {
          name: 'cards',
          type: 'array',
          label: 'Feature Cards Grid',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'items',
              type: 'array',
              label: 'Bullet Points',
              fields: [{ name: 'label', type: 'text', required: true }],
            },
          ],
        },
      ],
    },

    // ── SOLUTIONS COMPARISON ──
    {
      name: 'solutionsComparison',
      type: 'group',
      label: 'Solutions Comparison Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'comparisons',
          type: 'array',
          label: 'Problem vs Solution Items',
          fields: [
            { name: 'id', type: 'number', required: true },
            { name: 'problemTitle', type: 'text', required: true },
            { name: 'problemDesc', type: 'textarea', required: true },
            { name: 'solutionTitle', type: 'text', required: true },
            { name: 'solutionDesc', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── REPORTING FEATURES ──
    {
      name: 'reportingFeatures',
      type: 'group',
      label: 'Reporting & Analytics Features Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'block1Title1', type: 'text', label: 'Block 1 Feature 1 Title', required: true },
        { name: 'block1Desc1', type: 'textarea', label: 'Block 1 Feature 1 Description', required: true },
        { name: 'block1Title2', type: 'text', label: 'Block 1 Feature 2 Title', required: true },
        { name: 'block1Desc2', type: 'textarea', label: 'Block 1 Feature 2 Description', required: true },
        { name: 'block1Title3', type: 'text', label: 'Block 1 Feature 3 Title', required: true },
        { name: 'block1Desc3', type: 'textarea', label: 'Block 1 Feature 3 Description', required: true },
        { name: 'block1ImageSrc', type: 'text', label: 'Block 1 Image Path' },

        { name: 'block2ImageSrc', type: 'text', label: 'Block 2 Image Path' },
        { name: 'block2Title1', type: 'text', label: 'Block 2 Feature 1 Title', required: true },
        { name: 'block2Desc1', type: 'textarea', label: 'Block 2 Feature 1 Description', required: true },
        { name: 'block2Title2', type: 'text', label: 'Block 2 Feature 2 Title', required: true },
        { name: 'block2Desc2', type: 'textarea', label: 'Block 2 Feature 2 Description', required: true },
        { name: 'block2Title3', type: 'text', label: 'Block 2 Feature 3 Title', required: true },
        { name: 'block2Desc3', type: 'textarea', label: 'Block 2 Feature 3 Description', required: true },
      ],
    },

    // ── FAQ ──
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Items',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
        { name: 'helpTitle', type: 'text', label: 'Help Box Title' },
        { name: 'helpDescription', type: 'textarea', label: 'Help Box Description' },
        { name: 'primaryCtaLabel', type: 'text', label: 'Primary CTA Label' },
        { name: 'primaryCtaHref', type: 'text', label: 'Primary CTA Href' },
        { name: 'secondaryCtaLabel', type: 'text', label: 'Secondary CTA Label' },
        { name: 'secondaryCtaHref', type: 'text', label: 'Secondary CTA Href' },
        { name: 'footerNote', type: 'text', label: 'Footer Note' },
      ],
    },
  ],
}
