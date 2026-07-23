import type { GlobalConfig } from 'payload'

/** Reusable CTA (call-to-action) field group */
const ctaFields = (prefix: string) => [
  {
    name: `${prefix}Label`,
    type: 'text' as const,
    required: true,
  },
  {
    name: `${prefix}Href`,
    type: 'text' as const,
    required: true,
  },
]

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    group: 'Content',
  },
  fields: [
    // ─────────────────────────────────────
    // SEO
    // ─────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Meta',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title', required: true },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description', required: true },
        { name: 'keywords', type: 'text', label: 'Keywords (comma-separated)' },
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

    // ─────────────────────────────────────
    // HERO SECTION
    // ─────────────────────────────────────
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'eyebrow', type: 'text', label: 'Eyebrow Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (before highlight)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted text)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (after highlight)' },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'formButtonLabel', type: 'text', label: 'Form Submit Button Label', defaultValue: 'Free Audit' },
        { name: 'successTitle', type: 'text', label: 'Success Message Title', defaultValue: 'Consultation Request Booked!' },
        { name: 'successDescription', type: 'text', label: 'Success Message Description', defaultValue: 'We will reach out to you within the next 15 minutes.' },
        {
          name: 'trustBadges',
          type: 'array',
          label: 'Trust Badges',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // ─────────────────────────────────────
    // STATS CARDS
    // ─────────────────────────────────────
    {
      name: 'statsCards',
      type: 'group',
      label: 'Stats Cards Section',
      fields: [
        {
          name: 'items',
          type: 'array',
          label: 'Stat Items',
          maxRows: 6,
          fields: [
            { name: 'value', type: 'text', required: true, label: 'Value (e.g. "1,500+")' },
            { name: 'label', type: 'text', required: true, label: 'Label' },
            { name: 'subLabel', type: 'text', required: true, label: 'Sub Label' },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────
    // SERVICES OVERVIEW
    // ─────────────────────────────────────
    {
      name: 'servicesOverview',
      type: 'group',
      label: 'Services Overview Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (suffix)' },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Services',
          maxRows: 8,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'link', type: 'text', required: true, label: 'Link URL' },
            { name: 'linkLabel', type: 'text', defaultValue: 'Explore More', label: 'Link Label' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────
    // MEDICAL CLAIMS SERVICE
    // ─────────────────────────────────────
    {
      name: 'medicalClaims',
      type: 'group',
      label: 'Medical Claims Service Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          maxRows: 8,
          fields: [
            { name: 'stepLabel', type: 'text', required: true, label: 'Step Label (e.g. "Step 01")' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        {
          name: 'metrics',
          type: 'array',
          label: 'Performance Metrics',
          maxRows: 6,
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
        {
          name: 'primaryCta',
          type: 'group',
          label: 'Primary CTA',
          fields: ctaFields('primary'),
        },
        {
          name: 'secondaryCta',
          type: 'group',
          label: 'Secondary CTA',
          fields: ctaFields('secondary'),
        },
      ],
    },

    // ─────────────────────────────────────
    // TRUST STATS SECTION
    // ─────────────────────────────────────
    {
      name: 'trustStats',
      type: 'group',
      label: 'Trust Stats Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'mainStats',
          type: 'array',
          label: 'Main Stats',
          maxRows: 6,
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'subLabel', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        {
          name: 'ratingBadges',
          type: 'array',
          label: 'Rating Badges',
          maxRows: 6,
          fields: [
            { name: 'platform', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
            { name: 'subLabel', type: 'text' },
            { name: 'color', type: 'text', label: 'Color (hex)', defaultValue: '#EAB308' },
          ],
        },
        { name: 'bottomTitle', type: 'text', label: 'Bottom Title (plain)' },
        { name: 'bottomTitleHighlight', type: 'text', label: 'Bottom Title (highlighted)' },
        { name: 'bottomTitleSuffix', type: 'text', label: 'Bottom Title (suffix)' },
        { name: 'bottomDescription', type: 'textarea', label: 'Bottom Description' },
        {
          name: 'checklist',
          type: 'array',
          label: 'Features Checklist',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'happinessScore',
          type: 'group',
          label: 'Happiness Score Card',
          fields: [
            { name: 'badge', type: 'text', defaultValue: 'Happiness Score' },
            { name: 'value', type: 'text', required: true },
            { name: 'description', type: 'text' },
            { name: 'linkLabel', type: 'text', defaultValue: 'See testimonials' },
            { name: 'linkHref', type: 'text', defaultValue: '/testimonials' },
          ],
        },
        {
          name: 'billingExperts',
          type: 'group',
          label: 'Billing Experts Card',
          fields: [
            { name: 'badge', type: 'text', defaultValue: 'Billing Experts' },
            { name: 'value', type: 'text', required: true },
            { name: 'description', type: 'text' },
            { name: 'linkLabel', type: 'text', defaultValue: 'About us' },
            { name: 'linkHref', type: 'text', defaultValue: '/about-us' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────
    // BILLING CTA SECTION
    // ─────────────────────────────────────
    {
      name: 'billingCta',
      type: 'group',
      label: 'Billing CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Link', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          maxRows: 8,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────
    // DOCTORS TEAM SECTION
    // ─────────────────────────────────────
    {
      name: 'doctorsTeam',
      type: 'group',
      label: 'Doctors Team Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        { name: 'floatingWidget1', type: 'text', label: 'Floating Widget 1 Text' },
        { name: 'floatingWidget2', type: 'text', label: 'Floating Widget 2 Text' },
        { name: 'traditionalAgencyText', type: 'textarea', label: 'Traditional Agency Comparison Text' },
        { name: 'bellmedexText', type: 'textarea', label: 'BellMedEx Comparison Text' },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Link', required: true },
      ],
    },

    // ─────────────────────────────────────
    // PROVIDER CHALLENGES SECTION
    // ─────────────────────────────────────
    {
      name: 'providerChallenges',
      type: 'group',
      label: 'Provider Challenges Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'challenges',
          type: 'array',
          label: 'Challenge Items',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'formTitle', type: 'text', label: 'Form Title', defaultValue: 'Request Consultation' },
        { name: 'formDescription', type: 'text', label: 'Form Description' },
        { name: 'formCtaLabel', type: 'text', label: 'Form CTA Label', defaultValue: 'Request Consultation' },
      ],
    },

    // ─────────────────────────────────────
    // SPECIALTY BILLING SECTION
    // ─────────────────────────────────────
    {
      name: 'specialtyBilling',
      type: 'group',
      label: 'Specialty Billing Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'specialties',
          type: 'array',
          label: 'Specialties',
          maxRows: 12,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'link', type: 'text', required: true },
            { name: 'popular', type: 'checkbox', label: 'Popular?', defaultValue: false },
          ],
        },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Link', required: true },
      ],
    },

    // ─────────────────────────────────────
    // NATIONWIDE PRICING SECTION
    // ─────────────────────────────────────
    {
      name: 'nationwidePricing',
      type: 'group',
      label: 'Nationwide Pricing Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefits',
          maxRows: 9,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        {
          name: 'primaryCta',
          type: 'group',
          label: 'Primary CTA',
          fields: ctaFields('primary'),
        },
        {
          name: 'secondaryCta',
          type: 'group',
          label: 'Secondary CTA',
          fields: ctaFields('secondary'),
        },
        { name: 'footerNote', type: 'text', label: 'Footer Note' },
      ],
    },

    // ─────────────────────────────────────
    // PRICING QUOTE SECTION
    // ─────────────────────────────────────
    {
      name: 'pricingQuote',
      type: 'group',
      label: 'Pricing Quote Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'specialties',
          type: 'array',
          label: 'Specialty Options',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'providerCounts',
          type: 'array',
          label: 'Provider Count Options',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'claimVolumes',
          type: 'array',
          label: 'Claim Volume Options',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'services',
          type: 'array',
          label: 'Service Options',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        {
          name: 'highlights',
          type: 'array',
          label: 'Highlights',
          maxRows: 6,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        {
          name: 'trustBadges',
          type: 'array',
          label: 'Trust Badges',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // ─────────────────────────────────────
    // TESTIMONIALS SECTION
    // ─────────────────────────────────────
    {
      name: 'testimonials',
      type: 'group',
      label: 'Testimonials Section',
      fields: [
        { name: 'preHeader', type: 'text', label: 'Pre-header Text' },
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (suffix)' },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Testimonials',
          maxRows: 20,
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'specialty', type: 'text', required: true },
            { name: 'clinicName', type: 'text' },
            { name: 'text', type: 'textarea', required: true },
            { name: 'avatarPath', type: 'text', label: 'Avatar Image Path (e.g. /julia-will.png)' },
            { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
          ],
        },
      ],
    },

    // ─────────────────────────────────────
    // FAQ SECTION
    // ─────────────────────────────────────
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (plain part)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted part)', required: true },
        { name: 'description', type: 'textarea', label: 'Section Description', required: true },
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Items',
          maxRows: 20,
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
        { name: 'helpTitle', type: 'text', label: 'Help Panel Title', defaultValue: 'Still have questions?' },
        { name: 'helpDescription', type: 'textarea', label: 'Help Panel Description' },
        {
          name: 'primaryCta',
          type: 'group',
          label: 'Primary CTA',
          fields: ctaFields('primary'),
        },
        {
          name: 'secondaryCta',
          type: 'group',
          label: 'Secondary CTA',
          fields: ctaFields('secondary'),
        },
        { name: 'footerNote', type: 'text', label: 'Footer Note' },
      ],
    },
  ],
}
