import type { GlobalConfig } from 'payload'

export const ProviderCredentialing: GlobalConfig = {
  slug: 'provider-credentialing',
  label: 'Provider Credentialing Page',
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
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'description3', type: 'textarea', label: 'Description Paragraph 3', required: true },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formDescription', type: 'text', label: 'Form Description', required: true },
        { name: 'formBadge', type: 'text', label: 'Form Badge', required: true },
        { name: 'formCtaLabel', type: 'text', label: 'Form Submit Label', required: true },
        { name: 'successMessage', type: 'textarea', label: 'Success Message', required: true },
        { name: 'imageSrc', type: 'text', label: 'Hero Image Path' },
        { name: 'cardTitle', type: 'text', label: 'Card Title' },
        { name: 'cardSubtitle', type: 'text', label: 'Card Subtitle' },
      ],
    },

    // ── WHAT TO EXPECT ──
    {
      name: 'whatToExpect',
      type: 'group',
      label: 'What To Expect Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'expectations',
          type: 'array',
          label: 'Expectation Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── SOLO PRACTITIONER CTA ──
    {
      name: 'soloPractitionerCta',
      type: 'group',
      label: 'Solo Practitioner CTA',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Tiles',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── PREMIUM PAYER NETWORKS ──
    {
      name: 'premiumPayerNetworks',
      type: 'group',
      label: 'Premium Payer Networks Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        { name: 'description3', type: 'textarea', label: 'Description Paragraph 3', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Image Path' },
        { name: 'cardTitle', type: 'text', label: 'Card Title' },
        { name: 'cardSubtitle', type: 'text', label: 'Card Subtitle' },
      ],
    },

    // ── WORKFLOW STEPS ──
    {
      name: 'workflowSteps',
      type: 'group',
      label: 'Credentialing Workflow Steps Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps Timeline',
          fields: [
            { name: 'stepNumber', type: 'number', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── EXPEDITED SERVICES ──
    {
      name: 'expeditedServices',
      type: 'group',
      label: 'Expedited Credentialing Services Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },

        // Block 1
        {
          name: 'block1Features',
          type: 'array',
          label: 'Block 1 Features',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'block1ImageSrc', type: 'text', label: 'Block 1 Image' },
        { name: 'block1CardTitle', type: 'text', label: 'Block 1 Card Title' },
        { name: 'block1CardSubtitle', type: 'text', label: 'Block 1 Card Subtitle' },
        { name: 'banner1TextPlain', type: 'text', label: 'Banner 1 Text (Plain)' },
        { name: 'banner1TextHighlight', type: 'text', label: 'Banner 1 Text (Highlight)' },
        { name: 'banner1CtaLabel', type: 'text', label: 'Banner 1 CTA Label' },
        { name: 'banner1CtaHref', type: 'text', label: 'Banner 1 CTA Href' },

        // Block 2
        {
          name: 'block2Features',
          type: 'array',
          label: 'Block 2 Features',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'block2ImageSrc', type: 'text', label: 'Block 2 Image' },
        { name: 'block2CardTitle', type: 'text', label: 'Block 2 Card Title' },
        { name: 'block2CardSubtitle', type: 'text', label: 'Block 2 Card Subtitle' },
        { name: 'banner2TextPlain', type: 'text', label: 'Banner 2 Text (Plain)' },
        { name: 'banner2TextHighlight', type: 'text', label: 'Banner 2 Text (Highlight)' },
        { name: 'banner2CtaLabel', type: 'text', label: 'Banner 2 CTA Label' },
        { name: 'banner2CtaHref', type: 'text', label: 'Banner 2 CTA Href' },

        // Block 3
        {
          name: 'block3Features',
          type: 'array',
          label: 'Block 3 Features',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'block3ImageSrc', type: 'text', label: 'Block 3 Image' },
        { name: 'block3CardTitle', type: 'text', label: 'Block 3 Card Title' },
        { name: 'block3CardSubtitle', type: 'text', label: 'Block 3 Card Subtitle' },
        { name: 'banner3TextPlain', type: 'text', label: 'Banner 3 Text (Plain)' },
        { name: 'banner3TextHighlight', type: 'text', label: 'Banner 3 Text (Highlight)' },
        { name: 'banner3CtaLabel', type: 'text', label: 'Banner 3 CTA Label' },
        { name: 'banner3CtaHref', type: 'text', label: 'Banner 3 CTA Href' },
      ],
    },

    // ── BENEFITS OF OUTSOURCING ──
    {
      name: 'benefitsOfOutsourcing',
      type: 'group',
      label: 'Benefits of Outsourcing Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefits List',
          fields: [{ name: 'label', type: 'textarea', required: true }],
        },
        { name: 'ctaLabel', type: 'text', label: 'CTA Link Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Link Href', required: true },
        { name: 'imageSrc', type: 'text', label: 'Image Path' },
        { name: 'cardTitle', type: 'text', label: 'Card Title' },
        { name: 'cardSubtitle', type: 'text', label: 'Card Subtitle' },
      ],
    },

    // ── HEALTHCARE ENTITIES ──
    {
      name: 'healthcareEntities',
      type: 'group',
      label: 'Healthcare Entities Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'entities',
          type: 'array',
          label: 'Specialty Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── ENROLL FAVORITE PAYERS ──
    {
      name: 'enrollFavoritePayers',
      type: 'group',
      label: 'Enroll Favorite Payers Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'payerTypes',
          type: 'array',
          label: 'Payer Types',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'examples', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── PRICING PACKAGES ──
    {
      name: 'pricingPackages',
      type: 'group',
      label: 'Credentialing Pricing Packages Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'tiers',
          type: 'array',
          label: 'Pricing Tiers',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'popular', type: 'checkbox', label: 'Popular Tier?' },
            {
              name: 'coreFeatures',
              type: 'array',
              label: 'Core Features',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'included', type: 'checkbox', required: true },
              ],
            },
            {
              name: 'detailChecklist',
              type: 'array',
              label: 'Detail Checklist',
              fields: [{ name: 'label', type: 'textarea', required: true }],
            },
          ],
        },
      ],
    },

    // ── RED TAPE CTA ──
    {
      name: 'redTapeCta',
      type: 'group',
      label: 'Red Tape CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Tiles',
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
