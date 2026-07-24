import type { ClearinghouseData } from '@/payload/types/clearinghouse'

export const defaultClearinghouseData: ClearinghouseData = {
  seo: {
    metaTitle: 'Medical Billing Clearinghouse Solution | BellMedEx',
    metaDescription:
      "Our clearinghouse service is a whole shebang for every provider's healthcare billing needs. Verify eligibility, check claims status, and submit claims electronically.",
    keywords:
      'medical billing clearinghouse, electronic data interchange, EDI 837 835, clean claims, real-time eligibility, RCM clearinghouse',
    canonicalUrl: 'https://bellmedex.com/clearinghouse',
    robots: 'index, follow',
    openGraph: {
      ogTitle: 'Medical Billing Clearinghouse Solution | BellMedEx',
      ogDescription:
        "Our clearinghouse service is a whole shebang for every provider's healthcare billing needs. Verify eligibility, check claims status, and submit claims electronically.",
      ogType: 'website',
      ogUrl: 'https://bellmedex.com/clearinghouse',
    },
  },

  hero: {
    badge: 'Medical Billing Clearinghouse Solution',
    titlePrefix: 'Clearinghouse Service that',
    titleHighlight: 'Clears Healthcare Billing Hurdles',
    description:
      'Our clearinghouse service is a whole shebang for every provider’s healthcare billing needs. We connect providers with hundreds of payers, verify eligibility, check claims status, and submit claims electronically. We also handle credentialing, enrollment, and compliance, so quality patient care takes center stage at every clinic.',
    primaryCtaLabel: 'Claim Free Clearinghouse',
    primaryCtaHref: '/schedule-a-demo',
    secondaryCtaLabel: 'Speak with an Expert',
    secondaryCtaHref: '/contact-us',
    imageSrc: '/clearinghouse-nurse-hero.png',
    badge1Value: '99.2% Clean Claims',
    badge1Label: 'First-Pass Approval',
    badge2Value: 'HIPAA Compliant',
    badge2Label: '100% Secured EDI',
  },

  capabilities: {
    badge: 'Clearinghouse Capabilities',
    titlePlain: 'Enterprise Clearinghouse',
    titleHighlight: 'Built for Healthcare',
    description:
      'Streamline claims submission, automate eligibility checks, and optimize payer workflows with our high-performance EDI engine.',
    items: [
      {
        id: 'nationwide',
        category: 'Payer Connectivity',
        iconName: 'Globe',
        title: 'Nationwide Clearinghouse',
        description:
          'Our medical claims clearinghouse supports payers nationwide. A provider can submit claims to any commercial or private payer in the country.',
        highlights: [
          { label: '1,000+ Commercial & Private Payers' },
          { label: 'Real-Time Eligibility Verification' },
          { label: 'Direct Nationwide EDI Network' },
        ],
        link: '/schedule-a-demo',
        linkLabel: 'Explore Payer Network',
      },
      {
        id: 'software-support',
        category: 'Interoperability',
        iconName: 'Laptop',
        title: 'All Software Support',
        description:
          'Our medical billing clearinghouse solution works seamlessly with your preferred medical billing software. Plus, a dedicated support staff is available to assist you.',
        highlights: [
          { label: 'Seamless EHR & PMS Integration' },
          { label: 'Zero Workflow Disruption' },
          { label: 'Dedicated Technical Support Team' },
        ],
        link: '/medical-billing-software',
        linkLabel: 'Check Software Compatibility',
      },
      {
        id: 'rcm-intelligence',
        category: 'Analytics & Insights',
        iconName: 'BarChart3',
        title: 'RCM Intelligence',
        description:
          'Doctors can access real-time data and reports on their claims status, denial reasons, rejection rates, and payment trends via our healthcare clearinghouse.',
        highlights: [
          { label: 'Real-Time Denial & Rejection Tracking' },
          { label: 'Interactive Financial Dashboards' },
          { label: 'Actionable Revenue Cycle Metrics' },
        ],
        link: '/revenue-cycle-management-rcm',
        linkLabel: 'View RCM Intelligence',
      },
    ],
  },

  whyChoose: {
    badge: 'Why Choose BellMedEx',
    titlePlain: 'Why Our',
    titleHighlight: 'Clearinghouse',
    titleSuffix: 'is the Top Choice for Medical Providers',
    description:
      'BellMedEx delivers high-performance clearinghouse technology to eliminate claim rejection delays and maximize practice revenue.',
    features: [
      {
        id: 'payers',
        badge: 'Payer Coverage',
        iconName: 'Globe',
        title: 'Connect with Over 2,000 Payers Nationwide',
        subtitle: 'Commercial & Government Payers',
        description:
          'Access Medicare, Medicaid, and commercial health plans across the United States for maximum payment opportunities with direct EDI connections.',
        statValue: '2,000+',
        statLabel: 'Active Nationwide Payers',
        imageSrc: '/consultants-laptop.png',
      },
      {
        id: 'validation',
        badge: 'Pre-Submission Scrubbing',
        iconName: 'ShieldCheck',
        title: 'Validate Claims for Accuracy & Compliance',
        subtitle: 'Zero-Rejection Guarantee',
        description:
          'Automated claim scrubbing inspects every code, modifier, and requirement prior to submission to eliminate rejections before they occur.',
        statValue: '99.2%',
        statLabel: 'Clean Claim Rate',
        imageSrc: '/clearinghouse-nurse-hero.png',
      },
      {
        id: 'hipaa',
        badge: 'Security & EDI',
        iconName: 'Lock',
        title: 'Convert Claims into HIPAA-Compliant Formats',
        subtitle: '100% Encrypted EDI 837/835',
        description:
          'Seamlessly translate billing records into standard ANSI 837/835 electronic formats ensuring full regulatory security and interoperability.',
        statValue: '100%',
        statLabel: 'HIPAA Compliant',
        imageSrc: '/dr-nicole.png',
      },
      {
        id: 'tracking',
        badge: 'Real-Time Visibility',
        iconName: 'Zap',
        title: 'Track Claims from Submission to Payment',
        subtitle: 'Instant 276/277 Status',
        description:
          'Real-time electronic tracking gives your billing team complete visibility into claim progress, adjudication decisions, and payment schedules.',
        statValue: '< 14 Days',
        statLabel: 'Average Days in A/R',
        imageSrc: '/faq-doctor.png',
      },
      {
        id: 'insights',
        badge: 'RCM Analytics',
        iconName: 'BarChart3',
        title: 'Actionable Insights & Performance Metrics',
        subtitle: 'Custom Financial Reports',
        description:
          'Access in-depth analytics on claim performance, denial drivers, and revenue trends to continually optimize your clinic’s financial health.',
        statValue: '+24%',
        statLabel: 'Revenue Acceleration',
        imageSrc: '/doctors-team.png',
      },
    ],
  },

  directPayersCta: {
    badge: 'Nationwide Payer Network',
    titlePlain: 'Direct to Your Favorite Payers',
    titleHighlight: 'Nationwide!',
    description:
      'Our Healthcare Clearinghouse empowers providers to submit claims directly to their preferred payers across the country—no middleman required!',
    ctaLabel: 'Submit Claims Now',
    ctaHref: '/schedule-a-demo',
    features: [
      {
        iconName: 'Globe',
        title: 'Direct Connections',
        description:
          'Direct EDI links to Medicare, Medicaid, and 1,000+ commercial payers nationwide.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Zero Middleman',
        description:
          'Eliminate third-party clearinghouse surcharges and unnecessary claim delays.',
      },
      {
        iconName: 'Zap',
        title: 'Real-Time Status',
        description:
          'Instant 270/271 eligibility verification and automated 276/277 claim tracking.',
      },
      {
        iconName: 'CheckCircle2',
        title: 'Clean Claim Rate',
        description:
          'Pre-submission scrubbing rules ensure 99.2% first-pass claim approval.',
      },
    ],
  },

  valueFeatures: {
    badge: 'Healthcare Insurance Claims Clearinghouse',
    titlePlain: 'The',
    titleHighlight: 'Clearinghouse',
    titleSuffix: 'With New Value-Added Features!',
    description:
      'BellMedEx Clearinghouse is a smart choice for medical facilities looking to improve their communication and relationship with the payers and the patients. Our free clearinghouse for medical claims presents a bounty of beneficial features to physicians:',
    features: [
      {
        iconName: 'ShieldCheck',
        title: 'Coverage Check',
        description:
          'Automatically checks the insurance coverage and patient benefits before the provider provides the service.',
      },
      {
        iconName: 'Activity',
        title: 'Claim Monitor',
        description:
          'Tracks claims in real-time & provides information on the payment, rejection, or adjustment of each claim.',
      },
      {
        iconName: 'AlertTriangle',
        title: 'Rejection Assistant',
        description:
          'Analyzes the reasons for claim rejections and provides suggestions on how to correct and resubmit them.',
      },
      {
        iconName: 'Cloud',
        title: 'Cloud Access',
        description:
          'Lets the medical facility securely access their claims billing dashboard online from any device and location.',
      },
      {
        iconName: 'Printer',
        title: 'Print Claim',
        description:
          'Prints claims on hard paper that a medical facility can later mail to the insurance payers if preferred.',
      },
      {
        iconName: 'FileText',
        title: 'Patient Invoice',
        description:
          'Lets providers send customized statements to their patients carrying details like outstanding balances.',
      },
      {
        iconName: 'Headphones',
        title: 'Live Support',
        description:
          'Provides reliable customer support experts who can answer any questions regarding the Clearinghouse software.',
      },
      {
        iconName: 'CircleDollarSign',
        title: 'Flat-Fee Billing',
        description:
          'Offers a low-cost billing solution that charges a flat fee per claim regardless of the payer or service type.',
      },
    ],
    metricValue: '99.2% Clean Claims Rate',
    metricLabel: 'Real-Time 276/277 Status & 24/7 Cloud Support',
  },

  eftEra: {
    badge: 'EFT & ERA Support',
    titlePlain: 'Billing and Payments Made Easy with',
    titleHighlight: 'EFT + ERA Excellence',
    description:
      'Electronic Funds Transfer (EFT) sends direct ACH bank deposits while Electronic Remittance Advice (ERA) provides digital payment breakdowns. Our clearinghouse software simplifies compliance with HIPAA and PPACA Administrative Simplification rules:',
    points: [
      {
        title: 'Multi-Payer Enrollment',
        description:
          'Providers can easily enroll with various commercial and government payers through our software.',
      },
      {
        title: 'Electronic Remittances',
        description:
          'Receive direct ACH payments and electronic remittance advices automatically into your bank account.',
      },
      {
        title: 'Multi-Format ERA Export',
        description:
          'View, print, download, and export ERAs in multiple standard formats for seamless accounting.',
      },
      {
        title: 'CARC & RARC Breakdown',
        description:
          'Access operating rules, Claim Adjustment Reason Codes (CARCs), and Remittance Advice Remark Codes (RARCs) explaining payment decisions.',
      },
      {
        title: 'Real-Time Payment Tracking',
        description:
          'Track the status of payments in real-time and generate actionable financial performance analytics.',
      },
    ],
    metricValue: 'Direct ACH & Automated ERA',
    metricLabel: 'HIPAA & PPACA Compliant Transfers',
  },

  stats: {
    badge: 'Key Statistics',
    titlePlain: 'BellMedEx',
    titleHighlight: 'Medical Clearinghouse',
    titleSuffix: 'By The Numbers',
    description:
      'BellMedEx clearinghouse technology delivers industry-leading clean claim accuracy, instant EDI payer connectivity, and 99.99% HIPAA compliance security for medical practices nationwide.',
    stats: [
      {
        value: '97.42%',
        label: 'Clean Claim Rate',
      },
      {
        value: '99.21%',
        label: 'Real-time Claim Processing',
      },
      {
        value: '98.76%',
        label: 'Payer Connectivity',
      },
      {
        value: '99.99%',
        label: 'Data Security Compliance',
      },
    ],
  },

  ediSecurity: {
    ediBadge: 'Secure EDI Clearinghouse',
    ediTitlePlain: 'How Does',
    ediTitleHighlight: 'EDI Fit In?',
    ediPoints: [
      { label: 'Electronic Data Interchange (EDI) is the backbone of our clearinghouse operations, transmitting standardized data securely and swiftly.' },
      { label: 'Through EDI, we convert complex healthcare information (claims, patient records, and billing details) into a common format all parties understand.' },
      { label: 'Our EDI processes adhere strictly to X12 and HL7 industry standards, ensuring total consistency across all payer transactions.' },
    ],
    ediBadgeValue: 'ANSI X12 & HL7 Standardized EDI',
    ediBadgeLabel: 'Fast, Secure Payer Data Transmission',
    hipaaBadge: 'HIPAA Data Security',
    hipaaTitlePlain: 'Protecting',
    hipaaTitleHighlight: 'Patient Privacy',
    hipaaDescription:
      'The Health Insurance Portability and Accountability Act (HIPAA) mandates strict privacy and security standards for healthcare data. Our clearinghouse ensures full HIPAA compliance by:',
    hipaaPoints: [
      { label: 'Encrypting all sensitive data during transit and at rest with bank-level 256-bit encryption.' },
      { label: 'Implementing strict role-based access controls to restrict unauthorized data exposure.' },
      { label: 'Regularly auditing systems and running vulnerability assessments to guarantee total security.' },
      { label: 'Safeguarding patient identifiers (Social Security numbers, DOBs) to prevent identity theft.' },
    ],
    hipaaBadgeValue: '256-Bit Encrypted Data Safeguard',
    hipaaBadgeLabel: 'Full HIPAA & PPACA Regulatory Compliance',
  },

  rcmFunctions: {
    badge: 'Clearinghouse RCM Functions',
    titlePlain: 'Our',
    titleHighlight: 'Clearinghouse',
    titleSuffix: 'Intelligently Manages Your Revenue Cycle',
    description:
      'At BellMedEx, we don’t just process claims; we weave financial tapestries for your medical practice. Our clearinghouse is more than a bridge—it’s a smart conductor that harmonizes your financial operations. Let’s dive into the special RCM features of our clearinghouse that sets it apart:',
    functions: [
      {
        iconName: 'Send',
        title: 'Sent File Status',
        description:
          'BellMedEx’s clearinghouse provides real-time updates on the status of sent files, ensuring transparency and accountability.',
      },
      {
        iconName: 'FileCheck',
        title: 'Claim Status Reports',
        description:
          'With comprehensive claim status reports, you can track the progress of your claims, identify any issues, and take timely action.',
      },
      {
        iconName: 'AlertTriangle',
        title: 'Rejection Analysis',
        description:
          'BellMedEx’s intelligent system analyzes claim rejections, pinpointing common errors or patterns to fix medical billing issues before they become roadblocks.',
      },
      {
        iconName: 'Printer',
        title: 'Paper Claims',
        description:
          'Even in today’s digital age, paper claims are sometimes necessary. BellMedEx handles paper claims efficiently, ensuring prompt processing.',
      },
      {
        iconName: 'Layers',
        title: 'Secondary Claims Processing',
        description:
          'When secondary insurance comes into play, BellMedEx streamlines the process, minimizing delays and maximizing reimbursements.',
      },
      {
        iconName: 'Receipt',
        title: 'Patient Statement Services',
        description:
          'Clear communication with patients is crucial. BellMedEx generates clear and concise patient statements, enhancing patient satisfaction.',
      },
      {
        iconName: 'CreditCard',
        title: 'Payment Processing',
        description:
          'Efficient payment processing ensures timely revenue collection. BellMedEx’s system handles payments securely and accurately.',
      },
      {
        iconName: 'BarChart2',
        title: 'Transaction Summaries',
        description:
          'Get a consolidated view of all your clearinghouse activity. Transaction summaries help you stay organized and make informed decisions.',
      },
      {
        iconName: 'SlidersHorizontal',
        title: 'Error Reports & Control Panel',
        description:
          'We don’t sweep issues under the rug; we spotlight them. A user-friendly control panel provides detailed error reports to address issues promptly.',
      },
    ],
  },

  reduceErrorRatesCta: {
    badge: 'Claim Denial Prevention',
    titlePlain: 'Reduce Your Claim Error Rates &',
    titleHighlight: 'Stop Denial Blockages!',
    description:
      'Did you know that the average error rate for paper claims hovers around 28%? With our Medical Billing Clearinghouse Solution, providers have slashed that error rate down to an impressive 2-3%! 📈',
    ctaLabel: 'Get Started Now',
    ctaHref: '/schedule-a-demo',
    features: [
      {
        iconName: 'TrendingDown',
        title: 'Error Rate Slashed',
        description:
          'Paper claim error rates dropped from 28% down to 2-3% with automated pre-scrubbing.',
      },
      {
        iconName: 'ShieldCheck',
        title: '99.2% Clean Claims',
        description:
          'First-pass approval rate ensures claims get accepted immediately on first submission.',
      },
      {
        iconName: 'Zap',
        title: 'Instant Denial Alert',
        description:
          'Receive instant notifications for any coding or demographic discrepancies prior to filing.',
      },
      {
        iconName: 'CheckCircle2',
        title: 'Faster Reimbursement',
        description:
          'Reduce average days in A/R to under 14 days with direct electronic EDI transfers.',
      },
    ],
  },
}
