import type { GlobalConfig } from 'payload'

export const MedicalCoding: GlobalConfig = {
  slug: 'medical-coding',
  label: 'Medical Coding Page',
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
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'benefits',
          type: 'array',
          label: 'Checklist Benefits',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formButtonLabel', type: 'text', label: 'Form Button Label', required: true },
      ],
    },

    // ── HOW WE HELP ──
    {
      name: 'howWeHelp',
      type: 'group',
      label: 'How We Help Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)' },
        {
          name: 'steps',
          type: 'array',
          label: 'Help Step Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'layoutClass', type: 'text', label: 'Layout Class' },
          ],
        },
      ],
    },

    // ── WHY CHOOSE US ──
    {
      name: 'whyChooseUs',
      type: 'group',
      label: 'Why Choose Us Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'reasons',
          type: 'array',
          label: 'Numbered Reasons',
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
        { name: 'imageSrc', type: 'text', label: 'Doctor Image Path' },
        { name: 'imageAlt', type: 'text', label: 'Doctor Image Alt' },
      ],
    },

    // ── AFFORDABLE CTA ──
    {
      name: 'affordableCta',
      type: 'group',
      label: 'Affordable Service CTA Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Highlights',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── EXPERT SECTIONS ──
    {
      name: 'expertSections',
      type: 'group',
      label: 'Medical Coding Expert Sections',
      fields: [
        {
          name: 'blocks',
          type: 'array',
          label: 'Expert Blocks',
          fields: [
            { name: 'titlePlain', type: 'text', required: true },
            { name: 'titleHighlight', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'ctaLabel', type: 'text', required: true },
            { name: 'ctaHref', type: 'text', required: true },
            { name: 'imageSrc', type: 'text', required: true },
            { name: 'imageAlt', type: 'text', required: true },
            { name: 'imagePosition', type: 'select', options: ['left', 'right'], defaultValue: 'right' },
          ],
        },
      ],
    },

    // ── PROVEN PROCESS ──
    {
      name: 'provenProcess',
      type: 'group',
      label: 'Proven Process Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Step Cards',
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
      ],
    },

    // ── ICD-10 SERVICES ──
    {
      name: 'icd10Services',
      type: 'group',
      label: 'ICD-10 Services Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Coding Services Grid',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── FRUSTRATED CTA ──
    {
      name: 'frustratedCta',
      type: 'group',
      label: 'Frustrated With Errors CTA Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Side Image Path' },
        { name: 'imageAlt', type: 'text', label: 'Side Image Alt' },
      ],
    },

    // ── AUDITS & CONSULTANCY ──
    {
      name: 'auditsConsultancy',
      type: 'group',
      label: 'Audits & Consultancy Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Audit Service Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── FAIR REVENUE CTA ──
    {
      name: 'fairRevenueCta',
      type: 'group',
      label: 'Fair Revenue CTA Section',
      fields: [
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Badges',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── SECURITY & COMPLIANCE ──
    {
      name: 'securityCompliance',
      type: 'group',
      label: 'Security & Compliance Section',
      fields: [
        { name: 'qualityBadge', type: 'text', label: 'Quality Badge', required: true },
        { name: 'qualityTitlePlain', type: 'text', label: 'Quality Title (Plain)', required: true },
        { name: 'qualityTitleHighlight', type: 'text', label: 'Quality Title (Highlight)', required: true },
        {
          name: 'stats',
          type: 'array',
          label: 'Quality Stat Cards',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        { name: 'dataSecurityBadge', type: 'text', label: 'Data Security Badge', required: true },
        { name: 'dataSecurityTitlePlain', type: 'text', label: 'Data Security Title (Plain)', required: true },
        { name: 'dataSecurityTitleHighlight', type: 'text', label: 'Data Security Title (Highlight)', required: true },
        { name: 'dataSecurityDescription', type: 'textarea', label: 'Data Security Description', required: true },
        { name: 'complianceBadge', type: 'text', label: 'Compliance Badge', required: true },
        { name: 'complianceTitlePlain', type: 'text', label: 'Compliance Title (Plain)', required: true },
        { name: 'complianceTitleHighlight', type: 'text', label: 'Compliance Title (Highlight)', required: true },
        { name: 'complianceDescription', type: 'textarea', label: 'Compliance Description', required: true },
        {
          name: 'complianceBadges',
          type: 'array',
          label: 'Compliance Certification Badges',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'sublabel', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── ADVANCED HELP ──
    {
      name: 'advancedHelp',
      type: 'group',
      label: 'Advanced Support Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'blocks',
          type: 'array',
          label: 'Support Blocks',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)' },
            { name: 'titleHighlight', type: 'text', required: true, label: 'Title (Highlight)' },
            { name: 'description', type: 'textarea', required: true },
            { name: 'imageSrc', type: 'text', required: true },
            { name: 'imageAlt', type: 'text', required: true },
            { name: 'imagePosition', type: 'select', options: ['left', 'right'], defaultValue: 'right' },
          ],
        },
      ],
    },

    // ── AUDITS DEMO CTA ──
    {
      name: 'auditsDemoCta',
      type: 'group',
      label: 'Audits & Consultancy Demo CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
      ],
    },

    // ── MODERN SOLUTIONS ──
    {
      name: 'modernSolutions',
      type: 'group',
      label: 'Modern Solutions Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Doctor Image Path' },
        { name: 'imageAlt', type: 'text', label: 'Doctor Image Alt' },
        {
          name: 'solutions',
          type: 'array',
          label: 'Solution Grid Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── ERRORS REVENUE CTA ──
    {
      name: 'errorsRevenueCta',
      type: 'group',
      label: 'Errors Revenue CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'subtext', type: 'text', label: 'Subtext Banner', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
      ],
    },
  ],
}
