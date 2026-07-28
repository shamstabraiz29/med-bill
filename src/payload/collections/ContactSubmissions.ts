import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: 'Contact Us Inquiry',
    plural: 'Contact Us Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'organization', 'serviceInterest', 'formName', 'status', 'createdAt'],
    group: 'Submissions',
    description: 'Dedicated list of contact inquiries submitted from the Contact Us page.',
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
      name: 'organization',
      type: 'text',
      label: 'Practice / Organization Name',
    },
    {
      name: 'serviceInterest',
      type: 'text',
      label: 'Service Interested In',
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
