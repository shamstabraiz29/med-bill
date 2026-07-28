import type { GlobalConfig } from 'payload'

export const Careers: GlobalConfig = {
  slug: 'careers',
  label: 'Careers Page',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: 'Resources',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Badge Label', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain Text)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlighted Text)', required: true },
        { name: 'description', type: 'textarea', label: 'Description Paragraph', required: true },
        {
          name: 'perks',
          type: 'array',
          label: 'Perks / Benefits Badges',
          fields: [
            { name: 'iconName', type: 'text', label: 'Lucide Icon Name (e.g. Globe, Heart, Award, Sparkles)', required: true },
            { name: 'label', type: 'text', label: 'Perk Label', required: true },
          ],
        },
      ],
    },
    {
      name: 'formSection',
      type: 'group',
      label: 'Application Form Section',
      fields: [
        { name: 'title', type: 'text', label: 'Form Section Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Form Subtitle', required: true },
        { name: 'successTitle', type: 'text', label: 'Submission Success Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Submission Success Description', required: true },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Metadata',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title', required: true },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description', required: true },
        { name: 'keywords', type: 'text', label: 'Keywords' },
        { name: 'robots', type: 'text', label: 'Robots Tag', defaultValue: 'index, follow' },
        { name: 'canonicalUrl', type: 'text', label: 'Canonical URL' },
      ],
    },
  ],
}
