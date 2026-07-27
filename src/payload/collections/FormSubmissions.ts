import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'Form Submissions',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'formName', 'sourcePage', 'status', 'createdAt'],
    group: 'Submissions',
  },
  access: {
    // Anyone on the web can submit a form
    create: () => true,
    // Only authenticated admin users can read, update, or delete submissions
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
      admin: {
        description: 'Which form was submitted (e.g. Home Hero Form, Medical Billing Audit Form)',
      },
    },
    {
      name: 'sourcePage',
      type: 'text',
      label: 'Source Page URL',
      required: true,
      admin: {
        description: 'The page path where the form was submitted (e.g. /, /medical-billing-audit)',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
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
      required: true,
    },
    {
      name: 'monthlyCollections',
      type: 'text',
      label: 'Monthly Collections ($)',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Notes',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Lead Status',
      options: [
        { label: 'New Lead', value: 'new' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed / Qualified', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
