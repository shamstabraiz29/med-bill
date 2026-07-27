import type { CollectionConfig } from 'payload'

export const ConsultationSubmissions: CollectionConfig = {
  slug: 'consultation-submissions',
  labels: {
    singular: 'Consultation & Quote',
    plural: 'Consultations & Quotes',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'monthlyCollections', 'formName', 'status', 'createdAt'],
    group: 'Submissions',
    description: 'Dedicated list of consultation requests and billing quote inquiries.',
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
      name: 'monthlyCollections',
      type: 'text',
      label: 'Monthly Collections ($)',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Specialization Details',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Lead Status',
      options: [
        { label: 'New Inquiry', value: 'new' },
        { label: 'In Contact', value: 'in_progress' },
        { label: 'Proposal Sent', value: 'contacted' },
        { label: 'Client Onboarded', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
