import type { Field } from 'payload'

/**
 * Standard SEO & Meta field group for all CMS-managed pages.
 * Identical structure, validation, and behavior to the Homepage implementation.
 */
export const seoFields: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO & Meta',
  fields: [
    { name: 'metaTitle', type: 'text', label: 'Meta Title', required: true, defaultValue: '' },
    { name: 'metaDescription', type: 'textarea', label: 'Meta Description', required: true, defaultValue: '' },
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
}
