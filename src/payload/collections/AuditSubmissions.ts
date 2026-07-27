import type { CollectionConfig } from 'payload'

export const AuditSubmissions: CollectionConfig = {
  slug: 'audit-submissions',
  labels: {
    singular: 'Audit Request',
    plural: 'Audit & Practice Requests',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'formName', 'sourcePage', 'status', 'createdAt'],
    group: 'Submissions',
    description: 'Dedicated list of Medical Billing, RCM, and Healthcare SEO Audit requests.',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'formName',
      type: 'text',
      label: 'Form Identifier',
      required: true,
    },
    {
      name: 'sourcePage',
      type: 'text',
      label: 'Source Page URL',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Full Name / Practice Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'monthlyCollections',
      type: 'text',
      label: 'Monthly Collections ($)',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Audit Requirements / Notes',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Audit Status',
      options: [
        { label: 'Audit Requested', value: 'new' },
        { label: 'Audit In Progress', value: 'in_progress' },
        { label: 'Audit Delivered', value: 'contacted' },
        { label: 'Completed', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
