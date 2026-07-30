import type { GlobalConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const DenialManagementServices: GlobalConfig = {
  slug: 'denial-management-services',
  dbName: 'denial_ms',
  label: 'Denial Management Services Page',
  admin: {
    group: 'Solutions',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    seoFields,
    // 1. Hero Group
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Denial Management Services.' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Denial Management' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Services' },
        { name: 'subtitle', type: 'textarea', defaultValue: 'Get Paid for Denied Medical Coding Claims and Patient Bills' },
        { name: 'description1', type: 'textarea' },
        { name: 'description2', type: 'textarea' },
        { name: 'featuresTitlePlain', type: 'text' },
        { name: 'featuresTitleHighlight', type: 'text' },
        {
          name: 'featureBullets',
          type: 'array',
          label: 'Feature Bullets',
          dbName: 'dms_h_fb',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'formTitle', type: 'text', defaultValue: 'Schedule a Free Demo' },
        { name: 'phoneText', type: 'text', defaultValue: '+1 (888) 987-6250' },
        { name: 'phoneLink', type: 'text', defaultValue: 'tel:+18889876250' },
        { name: 'imageSrc', type: 'text', defaultValue: '/doctor-hero.png' },
        { name: 'imageAlt', type: 'text', defaultValue: 'Healthcare professional providing denial management services' },
        { name: 'spinningText', type: 'text' },
      ],
    },

    // 2. Stats Group
    {
      name: 'stats',
      type: 'group',
      label: 'Stats Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Stats of our ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Claim Denial Management Services' },
        {
          name: 'mainStats',
          type: 'array',
          label: 'Main Stats',
          dbName: 'dms_st_ms',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'subLabel', type: 'text' },
            { name: 'iconName', type: 'text' },
          ],
        },
        {
          name: 'ratingBadges',
          type: 'array',
          label: 'Rating Badges',
          dbName: 'dms_st_rb',
          fields: [
            { name: 'platform', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
            { name: 'color', type: 'text' },
            { name: 'subLabel', type: 'text' },
          ],
        },
        { name: 'bottomTitlePlain', type: 'text' },
        { name: 'bottomTitleHighlight', type: 'text' },
        { name: 'bottomDescription', type: 'textarea' },
        {
          name: 'checklist',
          type: 'array',
          label: 'Checklist Items',
          dbName: 'dms_st_cl',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'ctaText', type: 'text' },
        { name: 'ctaHref', type: 'text' },
        {
          name: 'happinessScore',
          type: 'group',
          label: 'Happiness Score Card',
          fields: [
            { name: 'badge', type: 'text', defaultValue: 'Happiness Score' },
            { name: 'value', type: 'text', defaultValue: '99%' },
            { name: 'description', type: 'textarea' },
            { name: 'linkLabel', type: 'text', defaultValue: 'See testimonials' },
            { name: 'linkHref', type: 'text', defaultValue: '/testimonials' },
          ],
        },
        {
          name: 'payorSpeed',
          type: 'group',
          label: 'Payor Speed Card',
          fields: [
            { name: 'badge', type: 'text', defaultValue: 'Payor Speed' },
            { name: 'value', type: 'text', defaultValue: '2.00x' },
            { name: 'description', type: 'textarea' },
            { name: 'linkLabel', type: 'text', defaultValue: 'See how' },
            { name: 'linkHref', type: 'text', defaultValue: '/schedule-a-demo' },
          ],
        },
      ],
    },

    // 3. About Group
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'About Us' },
        { name: 'titlePlain', type: 'text', defaultValue: 'Choosing BellMedEx ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Denial Management Services' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/faq-doctor.png' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // 4. Help Group
    {
      name: 'help',
      type: 'group',
      label: 'How Do We Help Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'How Do We Help You?' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'imageSrc', type: 'text', defaultValue: '/consultants-laptop.png' },
        { name: 'imageAlt', type: 'text' },
        { name: 'accordionHeading', type: 'text', defaultValue: 'Do any of these feel familiar?' },
        {
          name: 'accordionItems',
          type: 'array',
          label: 'Help Accordion Items',
          dbName: 'dms_hp_acc',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'problem', type: 'textarea', required: true },
            { name: 'solution', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // 5. Who We Serve Group
    {
      name: 'whoWeServe',
      type: 'group',
      label: 'Who We Serve Section',
      fields: [
        { name: 'titlePlain', type: 'text', defaultValue: 'Who Do ' },
        { name: 'titleHighlight', type: 'text', defaultValue: 'We Serve?' },
        { name: 'description', type: 'textarea' },
        {
          name: 'items',
          type: 'array',
          label: 'Who We Serve Items',
          dbName: 'dms_wws_i',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 6. Revenue Group
    {
      name: 'revenue',
      type: 'group',
      label: 'Revenue Leakage Prevention Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Revenue Leakage Prevention' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'gridSubheading', type: 'text' },
        {
          name: 'cards',
          type: 'array',
          label: 'Revenue Cards',
          dbName: 'dms_rev_c',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            {
              name: 'bullets',
              type: 'array',
              label: 'Bullets',
              dbName: 'dms_rev_c_b',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
          ],
        },
      ],
    },

    // 7. Underpayment Recovery Group
    {
      name: 'underpaymentRecovery',
      type: 'group',
      label: 'Underpayment Recovery Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Underpayment Recovery' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'paragraph3', type: 'textarea' },
        { name: 'imageSrc', type: 'text' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // 8. Service Offerings Group
    {
      name: 'serviceOfferings',
      type: 'group',
      label: 'Service Offerings Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Denial Management Offerings' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        {
          name: 'items',
          type: 'array',
          label: 'Service Offering Items',
          dbName: 'dms_so_i',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 9. Outsource Group
    {
      name: 'outsource',
      type: 'group',
      label: 'Outsource Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Outsource Denial Management' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'paragraph3', type: 'textarea' },
        {
          name: 'accordionItems',
          type: 'array',
          label: 'Outsource Accordion Items',
          dbName: 'dms_out_acc',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'content', type: 'textarea', required: true },
          ],
        },
        { name: 'imageSrc', type: 'text' },
        { name: 'imageAlt', type: 'text' },
      ],
    },

    // 10. Workflow Group
    {
      name: 'workflow',
      type: 'group',
      label: 'Workflow Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'stepsSubheading', type: 'text' },
        {
          name: 'steps',
          type: 'array',
          label: 'Workflow Steps',
          dbName: 'dms_wf_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 11. Code Insight Group
    {
      name: 'codeInsight',
      type: 'group',
      label: 'Code Insight Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Advanced Analytics' },
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonHref', type: 'text' },
        { name: 'imageSrc', type: 'text' },
        { name: 'imageAlt', type: 'text' },
        {
          name: 'features',
          type: 'array',
          label: 'Code Insight Features',
          dbName: 'dms_ci_f',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'gettingTitlePlain', type: 'text' },
        { name: 'gettingTitleHighlight', type: 'text' },
        { name: 'gettingTitleSuffix', type: 'text' },
        { name: 'gettingParagraph1', type: 'textarea' },
        { name: 'gettingParagraph2', type: 'textarea' },
      ],
    },

    // 12. Code Insight How It Works Group
    {
      name: 'codeInsightHowItWorks',
      type: 'group',
      label: 'Code Insight How It Works Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'intro', type: 'textarea' },
        { name: 'imageSrc', type: 'text' },
        { name: 'imageAlt', type: 'text' },
        {
          name: 'steps',
          type: 'array',
          label: 'How Steps',
          dbName: 'dms_cih_s',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'highlightPhrase', type: 'text' },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 13. Code Insight CTA Group
    {
      name: 'codeInsightCta',
      type: 'group',
      label: 'Code Insight CTA Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonHref', type: 'text' },
      ],
    },

    // 14. Benefits Group
    {
      name: 'benefits',
      type: 'group',
      label: 'Benefits Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefit Items',
          dbName: 'dms_bn_i',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'iconName', type: 'text' },
          ],
        },
      ],
    },

    // 15. Denials CTA Group
    {
      name: 'denialsCta',
      type: 'group',
      label: 'Denials CTA Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'descriptionPlain', type: 'text' },
        { name: 'descriptionHighlight', type: 'text' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonHref', type: 'text' },
      ],
    },

    // 16. Appeal CTA Group
    {
      name: 'appealCta',
      type: 'group',
      label: 'Appeal CTA Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonHref', type: 'text' },
      ],
    },

    // 17. Physician Testimonials Group
    {
      name: 'physicianTestimonials',
      type: 'group',
      label: 'Physician Testimonials Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        {
          name: 'items',
          type: 'array',
          label: 'Testimonial Items',
          dbName: 'dms_pt_i',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'specialty', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
            { name: 'avatarPath', type: 'text' },
            { name: 'rating', type: 'number' },
          ],
        },
      ],
    },

    // 18. Denied Services Banner Group
    {
      name: 'deniedServicesBanner',
      type: 'group',
      label: 'Denied Services Banner Section',
      fields: [
        { name: 'title', type: 'text' },
        {
          name: 'pills',
          type: 'array',
          label: 'Service Pills',
          dbName: 'dms_dsb_p',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'colorClass', type: 'text' },
          ],
        },
      ],
    },

    // 19. Contact Support Group
    {
      name: 'contactSupport',
      type: 'group',
      label: 'Contact Support Section',
      fields: [
        { name: 'titlePlain', type: 'text' },
        { name: 'titleHighlight', type: 'text' },
        { name: 'paragraph1', type: 'textarea' },
        { name: 'paragraph2', type: 'textarea' },
        { name: 'paragraph3BeforePhone', type: 'text' },
        { name: 'paragraph3AfterPhone', type: 'text' },
        { name: 'phoneText', type: 'text', defaultValue: '+1 (888) 987-6250' },
        { name: 'phoneLink', type: 'text', defaultValue: 'tel:+18889876250' },
        { name: 'buttonText', type: 'text', defaultValue: 'Contact Support' },
        { name: 'buttonHref', type: 'text', defaultValue: '/contact-us' },
      ],
    },
  ],
}
