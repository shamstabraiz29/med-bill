import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'All Form Submissions',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'formCategory', 'formName', 'status', 'createdAt'],
    group: 'Submissions',
    description: 'Master list of all form submissions across the entire website.',
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
      name: 'formCategory',
      type: 'select',
      label: 'Form Category',
      options: [
        { label: 'Job Applications (Careers)', value: 'careers' },
        { label: 'Consultations & Quotes', value: 'consultation' },
        { label: 'Practice Audit Requests', value: 'audit' },
        { label: 'General Inquiries', value: 'general' },
      ],
      defaultValue: 'general',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'formName',
      type: 'text',
      label: 'Form Identifier',
      required: true,
      admin: {
        description: 'Which form was submitted (e.g. Home Hero Form, Careers Job Application Form)',
      },
    },
    {
      name: 'sourcePage',
      type: 'text',
      label: 'Source Page URL',
      required: true,
      admin: {
        description: 'The page path where the form was submitted (e.g. /, /bellmedex-careers)',
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
    },
    {
      name: 'resumeUrl',
      type: 'text',
      label: 'Uploaded Resume / CV (File Path)',
      admin: {
        description: 'Uploaded CV file name or URL link',
      },
    },
    {
      name: 'resumeMedia',
      type: 'upload',
      relationTo: 'media',
      label: 'Uploaded Resume / CV Document (Clickable File)',
      admin: {
        description: 'Click to view, preview, or download candidate CV document directly',
      },
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
