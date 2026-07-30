import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const MedicalBilling: GlobalConfig = {
  slug: 'medical-billing',
  label: 'Medical Billing Page',
  admin: {
    group: 'Services',
  },
  fields: [
    seoFields,

    // ── CONSULTATION SECTION ──
    {
      name: 'consultation',
      type: 'group',
      label: 'Schedule Free Consultation Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Eyebrow Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        {
          name: 'highlights',
          type: 'array',
          label: 'Feature Highlights',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'desc', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
          ],
        },
        { name: 'formTitle', type: 'text', label: 'Form Title', required: true },
        { name: 'formDescription', type: 'text', label: 'Form Description', required: true },
        { name: 'formButtonLabel', type: 'text', label: 'Form Submit Label', required: true },
        { name: 'successTitle', type: 'text', label: 'Success Title', required: true },
        { name: 'successDescription', type: 'textarea', label: 'Success Description', required: true },
      ],
    },

    // ── WHY CHOOSE US ──
    {
      name: 'whyChooseUs',
      type: 'group',
      label: 'Why Choose Us Section',
      fields: [
        {
          name: 'topCards',
          type: 'array',
          label: 'Top Feature Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'desc', type: 'textarea', required: true },
          ],
        },
        { name: 'imageSrc', type: 'text', label: 'Laptop Image Path' },
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'titleSuffix', type: 'text', label: 'Title (Suffix)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        {
          name: 'checklist',
          type: 'array',
          label: 'Checklist Bullet Points',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // ── WORKFLOW ──
    {
      name: 'workflow',
      type: 'group',
      label: 'Billing Process Workflow Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'steps',
          type: 'array',
          label: 'Workflow Steps',
          fields: [
            { name: 'id', type: 'number', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ],
        },
      ],
    },

    // ── WHAT WE OFFER ──
    {
      name: 'whatWeOffer',
      type: 'group',
      label: 'What Do We Offer Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description1', type: 'textarea', label: 'Description Paragraph 1', required: true },
        { name: 'description2', type: 'textarea', label: 'Description Paragraph 2', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Offer Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
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

    // ── CONSULTING SERVICES ──
    {
      name: 'consultingServices',
      type: 'group',
      label: 'Smart Billing Advisory Services Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Advisory Services Tabs',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── CONSULTANCY BENEFITS ──
    {
      name: 'consultancyBenefits',
      type: 'group',
      label: 'Consultancy Benefits Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'stats',
          type: 'array',
          label: 'Benefit Stat Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'value', type: 'number', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
        { name: 'blockImageSrc', type: 'text', label: 'Feature Block Image Path' },
        { name: 'blockImageAlt', type: 'text', label: 'Feature Block Image Alt' },
        { name: 'blockDescription', type: 'textarea', label: 'Feature Block Description', required: true },
        { name: 'blockCtaLabel', type: 'text', label: 'CTA Label', required: true },
        { name: 'blockCtaHref', type: 'text', label: 'CTA Href', required: true },
      ],
    },

    // ── CONSULTANCY FEATURES ──
    {
      name: 'consultancyFeatures',
      type: 'group',
      label: 'Consultancy Features Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Grid Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── CODING CONSULTANTS ──
    {
      name: 'codingConsultants',
      type: 'group',
      label: 'Medical Coding Consultants Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Consultant Feature Items',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'imageSrc', type: 'text', label: 'Side Image Path' },
        { name: 'imageAlt', type: 'text', label: 'Side Image Alt' },
      ],
    },

    // ── SPECIALTY SOLUTIONS ──
    {
      name: 'specialtySolutions',
      type: 'group',
      label: 'All Specialties Lead Capture Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'options',
          type: 'array',
          label: 'Specialty Dropdown Options',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
    },

    // ── PARTNERS IN SUCCESS ──
    {
      name: 'partnersSuccess',
      type: 'group',
      label: 'Partners in Success Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePlain', type: 'text', label: 'Title (Plain)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Partner Feature Cards',
          fields: [
            { name: 'iconName', type: 'text', required: true, label: 'Icon Name (Lucide)' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── REVENUE CTA ──
    {
      name: 'revenueCta',
      type: 'group',
      label: 'Revenue Recovery CTA Section',
      fields: [
        { name: 'badge', type: 'text', label: 'Section Badge', required: true },
        { name: 'titlePrefix', type: 'text', label: 'Title (Prefix)', required: true },
        { name: 'titleHighlight', type: 'text', label: 'Title (Highlight)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', required: true },
        { name: 'ctaHref', type: 'text', label: 'CTA Button Href', required: true },
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
          label: 'FAQ Accordion Items',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
}
