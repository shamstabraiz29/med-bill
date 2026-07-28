import type { GlobalConfig } from 'payload'

export const Clearinghouse: GlobalConfig = {
  slug: 'clearinghouse',
  label: 'Clearinghouse Page',
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
        { name: 'primaryCtaLabel', type: 'text', label: 'Primary CTA Label', required: true },
        { name: 'primaryCtaHref', type: 'text', label: 'Primary CTA Href', required: true },
        { name: 'secondaryCtaLabel', type: 'text', label: 'Secondary CTA Label', required: true },
        { name: 'secondaryCtaHref', type: 'text', label: 'Secondary CTA Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Hero Image Path' },
        { name: 'badge1Value', type: 'text', label: 'Badge 1 Value' },
        { name: 'badge1Label', type: 'text', label: 'Badge 1 Label' },
        { name: 'badge2Value', type: 'text', label: 'Badge 2 Value' },
        { name: 'badge2Label', type: 'text', label: 'Badge 2 Label' },
      ],
    },

    // ── CAPABILITIES ──
    {
      name: 'capabilities',
      type: 'group',
      label: 'Capabilities Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Capability Items',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'category', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            {
              name: 'highlights',
              type: 'array',
              label: 'Highlights',
              fields: [{ name: 'label', type: 'text', required: true }],
            },
            { name: 'link', type: 'text', required: true },
            { name: 'linkLabel', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── WHY CHOOSE ──
    {
      name: 'whyChoose',
      type: 'group',
      label: 'Why Choose Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'badge', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'statValue', type: 'text', required: true },
            { name: 'statLabel', type: 'text', required: true },
            { name: 'imageSrc', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── DIRECT PAYERS CTA ──
    {
      name: 'directPayersCta',
      type: 'group',
      label: 'Direct Payers CTA',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── VALUE FEATURES ──
    {
      name: 'valueFeatures',
      type: 'group',
      label: 'Value Added Features',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'metricValue', type: 'text', label: 'Metric Value' },
        { name: 'metricLabel', type: 'text', label: 'Metric Label' },
      ],
    },

    // ── EFT & ERA ──
    {
      name: 'eftEra',
      type: 'group',
      label: 'EFT & ERA Support Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'points',
          type: 'array',
          label: 'Points List',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'metricValue', type: 'text', label: 'Metric Value' },
        { name: 'metricLabel', type: 'text', label: 'Metric Label' },
      ],
    },

    // ── KEY STATS ──
    {
      name: 'stats',
      type: 'group',
      label: 'Key Statistics Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'stats',
          type: 'array',
          label: 'Stat Metrics',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── EDI & SECURITY ──
    {
      name: 'ediSecurity',
      type: 'group',
      label: 'EDI & HIPAA Security Section',
      fields: [
        { name: 'ediBadge', type: 'text', label: 'EDI Badge', required: true },
        { name: 'ediTitlePlain', type: 'text', label: 'EDI Title (Plain)', required: true },
        { name: 'ediTitleHighlight', type: 'text', label: 'EDI Title (Highlight)', required: true },
        {
          name: 'ediPoints',
          type: 'array',
          label: 'EDI Points',
          fields: [{ name: 'label', type: 'textarea', required: true }],
        },
        { name: 'ediBadgeValue', type: 'text', label: 'EDI Card Value' },
        { name: 'ediBadgeLabel', type: 'text', label: 'EDI Card Label' },
        { name: 'hipaaBadge', type: 'text', label: 'HIPAA Badge', required: true },
        { name: 'hipaaTitlePlain', type: 'text', label: 'HIPAA Title (Plain)', required: true },
        { name: 'hipaaTitleHighlight', type: 'text', label: 'HIPAA Title (Highlight)', required: true },
        { name: 'hipaaDescription', type: 'textarea', label: 'HIPAA Description', required: true },
        {
          name: 'hipaaPoints',
          type: 'array',
          label: 'HIPAA Points',
          fields: [{ name: 'label', type: 'textarea', required: true }],
        },
        { name: 'hipaaBadgeValue', type: 'text', label: 'HIPAA Card Value' },
        { name: 'hipaaBadgeLabel', type: 'text', label: 'HIPAA Card Label' },
      ],
    },

    // ── RCM FUNCTIONS ──
    {
      name: 'rcmFunctions',
      type: 'group',
      label: 'Clearinghouse RCM Functions Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'functions',
          type: 'array',
          label: 'RCM Functions',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── REDUCE ERROR RATES CTA ──
    {
      name: 'reduceErrorRatesCta',
      type: 'group',
      label: 'Reduce Error Rates CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features Grid',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
