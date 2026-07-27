import type { CollectionConfig } from 'payload'

export const CareersSubmissions: CollectionConfig = {
  slug: 'careers-submissions',
  labels: {
    singular: 'Job Application',
    plural: 'Job Applications (Careers)',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'resumeMedia', 'resumeUrl', 'status', 'createdAt'],
    group: 'Submissions',
    description: 'Dedicated list of job applications and CV submissions from the Careers page.',
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
      defaultValue: 'Careers Job Application Form',
    },
    {
      name: 'sourcePage',
      type: 'text',
      label: 'Source Page URL',
      defaultValue: '/bellmedex-careers',
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
      name: 'resumeMedia',
      type: 'upload',
      relationTo: 'media',
      label: 'Uploaded Resume / CV Document (Clickable File)',
      admin: {
        description: 'Click to view, preview, or download candidate CV document directly',
      },
    },
    {
      name: 'resumeUrl',
      type: 'text',
      label: 'Uploaded Resume / CV (File Path)',
      admin: {
        description: 'Direct file path or URL to candidate CV',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Applicant Details & Departments',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Application Status',
      options: [
        { label: 'New Application', value: 'new' },
        { label: 'Under Review', value: 'in_progress' },
        { label: 'Interview Scheduled', value: 'contacted' },
        { label: 'Hired / Archived', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
