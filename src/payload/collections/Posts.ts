import type { CollectionConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'readTime', 'slug'],
    group: 'Content',
  },
  access: {
    create: ({ req }) => Boolean(req.user),
    read: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    seoFields,
    {
      name: 'title',
      type: 'text',
      label: 'Article Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
      admin: {
        description: 'e.g. occupational-therapy-cpt-codes-reimbursement-2026',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt / Summary',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      options: [
        { label: 'Medical Billing', value: 'MEDICAL BILLING' },
        { label: 'Specialties', value: 'SPECIALTIES' },
        { label: 'RCM Strategy', value: 'RCM STRATEGY' },
        { label: 'Credentialing', value: 'CREDENTIALING' },
        { label: 'Healthcare SEO', value: 'HEALTHCARE SEO' },
      ],
      defaultValue: 'MEDICAL BILLING',
    },
    {
      name: 'author',
      type: 'group',
      label: 'Author Information',
      fields: [
        { name: 'name', type: 'text', label: 'Author Name', required: true },
        { name: 'role', type: 'text', label: 'Author Role / Title', required: true },
        { name: 'avatar', type: 'text', label: 'Avatar Image URL', required: true },
      ],
    },
    {
      name: 'publishedAt',
      type: 'text',
      label: 'Published Date',
      required: true,
      defaultValue: 'Jan 20, 2026',
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Read Time',
      required: true,
      defaultValue: '5 min read',
    },
    {
      name: 'imageSrc',
      type: 'text',
      label: 'Featured Image URL / Path',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Full Article Content',
    },
  ],
}
