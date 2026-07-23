import type { HomepageData } from '@/payload/types/homepage'

/**
 * Default homepage content — mirrors all current hardcoded values.
 * Used as fallback when CMS data is unavailable (first deploy, DB errors, etc.)
 * to ensure the site never renders empty content.
 */
export const defaultHomepageData: HomepageData = {
  // ─── SEO ──────────────────────────────────────────────
  seo: {
    metaTitle: 'BellMedEx - Premium Medical Billing & Coding Services',
    metaDescription:
      'Official BellMedEx platform for professional revenue cycle management, healthcare SEO, provider credentialing, and medical billing solutions.',
    keywords: 'medical billing, medical coding, revenue cycle management, healthcare billing, provider credentialing',
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://bellmedex.com',
    robots: 'index, follow',
    openGraph: {
      ogTitle: 'BellMedEx - Premium Medical Billing & Coding Services',
      ogDescription:
        'Official BellMedEx platform for professional revenue cycle management, healthcare SEO, provider credentialing, and medical billing solutions.',
      ogType: 'website',
      ogUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://bellmedex.com',
    },
  },

  // ─── HERO ─────────────────────────────────────────────
  hero: {
    eyebrow: 'MEDICAL BILLING SERVICES',
    titlePrefix: 'The Medical Billing Service Provider for',
    titleHighlight: 'USA Healthcare',
    titleSuffix: '',
    description1:
      "BellMedEx is the USA's top medical billing firm – deploying the best practices in medical billing and coding for physicians looking to outsource billing and coding to an expert 3rd party billing agency.",
    description2:
      'Our certified medical coders and billers help healthcare organizations recover Aged Receivables and resolve insurance Claim Denials, as well.',
    formButtonLabel: 'Free Audit',
    successTitle: 'Consultation Request Booked!',
    successDescription: 'We will reach out to you within the next 15 minutes.',
    trustBadges: [
      { label: 'HIPAA Compliant' },
      { label: 'SOC2 Secure' },
      { label: 'No Obligation' },
    ],
  },

  // ─── STATS CARDS ──────────────────────────────────────
  statsCards: {
    items: [
      { value: '1,500+', label: 'Satisfied Providers', subLabel: 'Trusted by top clinics across 50 states', iconName: 'Users' },
      { value: '75+', label: 'Specialties Served', subLabel: 'Certified medical coders & billers', iconName: 'Stethoscope' },
      { value: '1,200+', label: 'Billing & Coding Experts', subLabel: '98%+ Average Clean Claim rate', iconName: 'Trophy' },
    ],
  },

  // ─── SERVICES OVERVIEW ────────────────────────────────
  servicesOverview: {
    badge: 'Core Competencies',
    titlePlain: 'Overview of',
    titleHighlight: 'Medical Billing Services',
    titleSuffix: 'in the USA',
    description:
      'We provide comprehensive and organized solutions to assist with billing for healthcare providers. Through electronic medical billing and structured clinical billing processes, we accurately capture diagnoses, procedures, and charges to improve Revenue Cycle Management.',
    services: [
      {
        title: 'Medical Billing Consultation',
        description:
          'Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers.',
        iconName: 'ClipboardSignature',
        link: '/medical-billing-audit',
        linkLabel: 'Explore More',
      },
      {
        title: 'Medical Coding',
        description:
          "Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean 'super-bill' for the biller to submit to the insurance payer.",
        iconName: 'CodeXml',
        link: '/medical-coding',
        linkLabel: 'Explore More',
      },
      {
        title: 'Provider Credentialing',
        description:
          'Provider enrollment services by our credentialing specialists help healthcare providers join the network of desirable payors with maximum privileges.',
        iconName: 'BadgeCheck',
        link: '/provider-credentialing',
        linkLabel: 'Explore More',
      },
      {
        title: 'Healthcare RCM',
        description:
          "Revenue cycle management services are specialty-specific, which means a physician's bespoke demands are met by a dedicated medical biller.",
        iconName: 'BriefcaseMedical',
        link: '/revenue-cycle-management-rcm',
        linkLabel: 'Explore More',
      },
    ],
  },

  // ─── MEDICAL CLAIMS SERVICE ───────────────────────────
  medicalClaims: {
    badge: 'Claims Processing',
    titlePlain: 'The Medical Claims Lifecycle,',
    titleHighlight: 'Handled with Precision',
    description:
      'We manage every phase of the claims lifecycle to eliminate friction, minimize denials, and secure your full reimbursement.',
    steps: [
      { stepLabel: 'Step 01', title: 'Eligibility Verification', description: 'Verifying patient insurance benefits and coverage details prior to service to prevent downstream eligibility denials.', iconName: 'ShieldCheck' },
      { stepLabel: 'Step 02', title: 'Coding & Documentation', description: 'Translating patient charts into ICD-10, CPT, and HCPCS codes with certified accuracy to guarantee coding compliance.', iconName: 'FileText' },
      { stepLabel: 'Step 03', title: 'Scrubbing & Submission', description: 'Automated claim scrubbing and real-time electronic submission to clearinghouses to accelerate the adjudication process.', iconName: 'Send' },
      { stepLabel: 'Step 04', title: 'Denial & Appeal Management', description: 'Proactive follow-up on delayed claims and rapid appeal processing to recover aged receivables successfully.', iconName: 'RefreshCw' },
    ],
    metrics: [
      { value: '99%', label: 'Clean Claim Rate' },
      { value: '< 24h', label: 'Submission Speed' },
      { value: '100%', label: 'HIPAA Secure' },
      { value: '24/7', label: 'Denial Oversight' },
    ],
    primaryCta: { primaryLabel: 'Book Free Consultation', primaryHref: '/request-audit' },
    secondaryCta: { secondaryLabel: 'Request Free Demo', secondaryHref: '/free-demo' },
  },

  // ─── TRUST STATS ──────────────────────────────────────
  trustStats: {
    badge: 'Proven Success',
    titlePlain: 'Trust Your Billing To The Company That Ranks Among',
    titleHighlight: '\u201cThe Best Medical Billing Companies\u201d',
    description:
      'With a 4.8-star Trustpilot rating from more than 200 reviews, a 4.8-star Google rating from 340+ reviews, and an A+ rating from the Better Business Bureau, BellMedEx is widely recognized as one of the best medical billing service providers in the United States.',
    mainStats: [
      { value: '99%', label: 'Clean Claim Ratio', subLabel: 'Industry-leading accuracy to prevent billing errors.', iconName: 'Target' },
      { value: '97.35%', label: 'First Submission Pass Rate', subLabel: 'Ensuring claims get processed successfully on first pass.', iconName: 'BarChart3' },
      { value: '30%', label: 'Revenue Increase', subLabel: 'Average practice revenue growth within 12 months.', iconName: 'TrendingUp' },
    ],
    ratingBadges: [
      { platform: 'Google Rating', label: 'Google Rating', value: '4.8', color: '#EAB308' },
      { platform: 'Trustpilot', label: 'Trustpilot', value: '4.8', color: '#22C55E' },
      { platform: 'BBB ACCREDITED', label: 'A+ Rated Business', value: 'A+', color: '#0F172A' },
      { platform: 'ONC CERTIFIED', label: 'Authorized Body', value: 'ONC', color: '#475569' },
    ],
    bottomTitle: 'Medical Billing Service in the USA that',
    bottomTitleHighlight: 'Unites Tech & Expertise',
    bottomTitleSuffix: "to Meet Every Doctor's Vision",
    bottomDescription:
      'Our USA-based healthcare revenue cycle management company helps individual and institutional providers navigate the tight spots of patient billing and coding via modern medical billing services.',
    checklist: [
      { label: 'Patient Verification' },
      { label: 'Revenue Cycle Management' },
      { label: 'Claim Scrubbing' },
      { label: 'A/R Recovery' },
      { label: 'Claim Submission' },
      { label: 'Fast Reimbursement' },
    ],
    happinessScore: {
      badge: 'Happiness Score',
      value: '96%',
      description: 'Based on a 4.8-star rating from 350+ providers across the states.',
      linkLabel: 'See testimonials',
      linkHref: '/testimonials',
    },
    billingExperts: {
      badge: 'Billing Experts',
      value: '1,200+',
      description: 'CMRS, RHIA, CPB certified medical billers and coders for every specialty.',
      linkLabel: 'About us',
      linkHref: '/about-us',
    },
  },

  // ─── BILLING CTA ──────────────────────────────────────
  billingCta: {
    badge: 'Billing Special Offer',
    titlePlain: "Let's experience our medical billing services for",
    titleHighlight: 'as low as 2.49%',
    description:
      "Over 1,500+ practices trust Bellmedex medical billing services company, so let's have a chat.",
    ctaLabel: 'Book a demo',
    ctaHref: '/schedule-a-demo',
    features: [
      { title: 'Instant Verification', description: "Patient's insurance coverage verification on the spot.", iconName: 'UserCheck' },
      { title: 'HIPAA-Compliant Safety', description: 'HIPAA-compliant medical billing services for data safety.', iconName: 'ShieldCheck' },
      { title: '24/7 Claim Submission', description: '24/7 medical billing services to handle every claim submission.', iconName: 'Clock' },
      { title: '98% Success Rate', description: '98% claim reimbursement rate for healthy cash flow.', iconName: 'TrendingUp' },
    ],
  },

  // ─── DOCTORS TEAM ─────────────────────────────────────
  doctorsTeam: {
    badge: 'Expert Assistance',
    titlePlain: 'Dedicated Accounts Managers &',
    titleHighlight: 'Expert Medical Billers for Health Centers',
    description:
      'Healthcare organizations are at the heart of our medical billing and collections team. From primary care physicians to specialty clinics, our dedicated clinical coding officers and claims examiners implement a precision-driven approach so that revenue flows smoothly and claim denials fade away.',
    floatingWidget1: 'CMRS & CPB Certified',
    floatingWidget2: '97% First-Pass Claims',
    traditionalAgencyText:
      'Traditional agencies have a 50% failure rate with provider credentialing and patient billing.',
    bellmedexText:
      'BellMedEx medical billing organization has a 97% pass rate with support for denied claims as well.',
    ctaLabel: 'Claim Free Practice Audit',
    ctaHref: '/medical-billing-audit',
  },

  // ─── PROVIDER CHALLENGES ──────────────────────────────
  providerChallenges: {
    badge: 'Provider Assessment',
    titlePlain: 'Which of these challenges are you facing as a',
    titleHighlight: 'provider?',
    description:
      'Select the administrative bottlenecks affecting your practice to receive a customized revenue recovery assessment and actionable solution.',
    challenges: [
      { label: 'Inadequate follow-up on claims and payments.' },
      { label: 'Accounts receivable aging past 90/120+ days.' },
      { label: 'Rising patient balances causing financial strain.' },
      { label: 'Frustration due to lack of transparency and reporting.' },
      { label: 'Overall decline in collections impacting practice revenue.' },
    ],
    formTitle: 'Request Consultation',
    formDescription: 'Submit your challenges to receive tailored advice.',
    formCtaLabel: 'Request Consultation',
  },

  // ─── SPECIALTY BILLING ────────────────────────────────
  specialtyBilling: {
    badge: 'Comprehensive Specialties',
    titlePlain: 'Specialty',
    titleHighlight: 'Medical Billing',
    description:
      'Our tailored medical billing services boost reimbursements through specialty-focused billing teams adept at ICD-10 coding rules and protocols unique to your medical niche. We align your billing and EHR workflows to maximize efficiency.',
    specialties: [
      { title: 'Laboratory Billing', description: 'Optimizing toxicology, pathology, and molecular lab claims with strict regulatory oversight.', iconName: 'FlaskConical', link: '/laboratory-billing', popular: false },
      { title: 'Urology Billing', description: 'Expert billing for specialized clinical procedures, surgeries, and urological diagnostics.', iconName: 'Activity', link: '/specialties/urology-billing', popular: false },
      { title: 'Cardiology Billing', description: 'Accurate coding for complex cardiovascular procedures, diagnostic imaging, and therapy.', iconName: 'Heart', link: '/specialties/cardiology-billing', popular: false },
      { title: 'Behavioral Health', description: 'Managing complex billing regulations for therapy, mental health, and psychiatric clinics.', iconName: 'Brain', link: '/specialties/mental-behavioral-health-billing', popular: true },
      { title: 'Urgent Care Billing', description: 'High-volume coding and rapid claim submissions tailored to outpatient medical settings.', iconName: 'ShieldAlert', link: '/specialties/urgent-care-billing', popular: true },
      { title: 'Orthopedics Billing', description: 'Accurate musculoskeletal, physical therapy, and surgical coding to prevent payor denials.', iconName: 'Bone', link: '/specialties/orthopedics-billing', popular: false },
    ],
    ctaLabel: 'View All Specialties',
    ctaHref: '/medical-billing-pricing-bellmedex',
  },

  // ─── NATIONWIDE PRICING ───────────────────────────────
  nationwidePricing: {
    badge: 'Simple, Transparent Fees',
    titlePlain: 'Customized Pricing for',
    titleHighlight: 'Your Practice',
    description:
      "We don't believe in rigid, one-size-fits-all packages. Our flexible pricing models are structured around your specific practice needs, helping you reduce overhead and maximize net collections.",
    benefits: [
      { title: 'Custom Pricing', description: 'Tailored rates based on your medical specialty, active provider volume, and monthly claim numbers.', iconName: 'DollarSign' },
      { title: 'No Long-Term Contracts', description: 'We earn your business month-to-month. Cancel anytime if you are not fully satisfied.', iconName: 'ShieldCheck' },
      { title: 'Transparent Billing', description: 'Clear monthly statements with no hidden fees, set-up costs, or administrative surcharges.', iconName: 'Eye' },
      { title: 'Scalable for Any Practice Size', description: 'Seamlessly scales from solo practitioners to large multi-specialty healthcare networks.', iconName: 'TrendingUp' },
      { title: 'Dedicated Account Manager', description: "A single point of contact who understands your practice's specific billing workflows.", iconName: 'UserCheck' },
      { title: 'Free Initial Consultation', description: 'Get a comprehensive audit of your current EHR setup and billing efficiency at zero cost.', iconName: 'Calendar' },
    ],
    primaryCta: { primaryLabel: 'Request a Personalized Quote', primaryHref: '/contact-us' },
    secondaryCta: { secondaryLabel: 'Speak to an Expert', secondaryHref: '/contact-us' },
    footerNote: 'Free consultation • No obligation • Customized pricing for every healthcare practice',
  },

  // ─── PRICING QUOTE ────────────────────────────────────
  pricingQuote: {
    badge: 'Request a Proposal',
    titlePlain: 'Get Your Customized',
    titleHighlight: 'Billing Quote',
    description:
      'Empower your medical practice with custom pricing built around your operational volume and EHR integration needs. Complete our interactive flow, and our regional specialists will construct your proposal.',
    specialties: [
      { label: 'Laboratory' }, { label: 'Urology' }, { label: 'Cardiology' }, { label: 'Behavioral Health' },
      { label: 'Urgent Care' }, { label: 'Orthopedics' }, { label: 'General Practice' }, { label: 'Other' },
    ],
    providerCounts: [
      { label: '1 Provider' }, { label: '2-5 Providers' }, { label: '6-10 Providers' }, { label: '11+ Providers' },
    ],
    claimVolumes: [
      { label: 'Under $50k' }, { label: '$50k - $100k' }, { label: '$100k - $500k' }, { label: 'Over $500k' },
    ],
    services: [
      { label: 'Full-Service Billing' }, { label: 'EMR/EHR Solutions' }, { label: 'Credentialing' },
      { label: 'Prior Authorization' }, { label: 'Patient Billing' }, { label: 'Audit & Compliance' },
    ],
    highlights: [
      { title: 'Personalized Pricing', description: 'Custom quotes designed to fit your unique medical specialty and volume.', iconName: 'DollarSign' },
      { title: 'No Long-Term Contracts', description: 'Month-to-month contracts so we continuously earn your business.', iconName: 'ShieldCheck' },
      { title: 'Fast Response Time', description: 'Get a dedicated proposal back in less than 24 business hours.', iconName: 'Clock' },
    ],
    trustBadges: [
      { label: 'Free Consultation' }, { label: 'No Hidden Fees' }, { label: 'Customized Solutions' },
      { label: 'Secure & Confidential' }, { label: 'Trusted by Providers' },
    ],
  },

  // ─── TESTIMONIALS ─────────────────────────────────────
  testimonials: {
    preHeader: 'Trusted by Leading Clinics Nationwide',
    badge: 'Client Reviews',
    titlePlain: 'Trusted by',
    titleHighlight: '300+ Verified',
    titleSuffix: 'Practices',
    description:
      'Hear directly from physicians, clinical directors, and practice administrators across the country about how BellMedEx transformed their billing outcomes.',
    items: [
      { name: 'Dr. Julia Will', specialty: 'Licensed Professional Counselor', clinicName: 'Health Counselling Clinic', text: 'I would like to send out a heartfelt appreciation for all of your hard work in helping my Health Counselling clinic take care of our billing and credentialing needs. You have made my job as a practice owner much easier.', avatarPath: '/julia-will.png', rating: 5 },
      { name: 'Dr. Gennaya Matt', specialty: 'Plastic Surgeon', clinicName: 'Matt Aesthetics Center', text: 'We are more than satisfied with BellMedEx and would highly recommend them to anyone searching for an efficient billing company. Working with BellMedEx has felt effortless and we are vastly thankful for their services.', avatarPath: '/gennaya-matt.png', rating: 5 },
      { name: 'Dr. Mike Lan', specialty: 'Internal Specialist Medicine', clinicName: 'Lan Internal Medicine', text: 'BellMedEx has been a phenomenal asset to our company. Assisting with billing, credentialing and enrollment, BellMedex has been consistently reliable from the first day of our relationship.', avatarPath: '/mike-lan.png', rating: 5 },
      { name: 'Dr. Sarah Jenkins', specialty: 'Pediatrician', clinicName: 'Jenkins Pediatrics', text: 'We love their 1:1 technical support and dedicated accounts management. Whenever we have a question about a claim submission, they respond instantly. A highly reliable company.', avatarPath: '/dr-nicole.png', rating: 5 },
      { name: 'Dr. Arthur Pendelton', specialty: 'Orthopedic Specialist', clinicName: 'Pendelton Bone Joint Clinic', text: 'The billing transition was completely seamless. Their team handled our old aging accounts receivable and improved our collections within the first month. Excellent reporting features.', avatarPath: '/doctor-hero.png', rating: 5 },
    ],
  },

  // ─── FAQ ──────────────────────────────────────────────
  faq: {
    badge: 'Objection Handling',
    titlePlain: 'Frequently Asked',
    titleHighlight: 'Questions',
    description:
      'Find clear answers to common questions regarding our medical billing process, software integration, fee structure, and onboarding schedule.',
    faqs: [
      { question: 'What is a medical billing company and how can it help me?', answer: 'A medical billing company handles the submission and tracking of medical claims to insurance companies on behalf of healthcare providers. Outsourcing to BellMedEx helps reduce administrative overhead, minimize billing errors, and accelerate claim reimbursements so you can focus on patient care.' },
      { question: 'What is a medical billing service?', answer: 'Medical billing services encompass coding verification, electronic claims submission, denial management, accounts receivable follow-up, and patient statement generation. We handle the entire revenue cycle from start to finish to ensure maximum reimbursement.' },
      { question: 'What are the services offered by your medical billing company?', answer: 'We offer end-to-end medical billing, specialty-specific coding (ICD-10, CPT, HCPCS), EHR/EMR customization, provider credentialing, patient billing support, advanced collections follow-up, and detailed financial reporting dashboards.' },
      { question: 'How does your medical billing company handle medical claims reimbursement and denial management?', answer: 'We proactively scrub claims before submission to ensure a 97%+ clean claim pass rate. If a claim is denied, our dedicated appeals team immediately reviews, corrects, and resubmits it, tracking it to resolution to prevent lost revenue.' },
      { question: 'Can I monitor the performance and quality of the medical billing service I hire?', answer: 'Yes! BellMedEx provides real-time access to detailed financial reporting dashboards. You can track claim statuses, collections rates, aging accounts receivable, and net billing efficiency at any time from any device.' },
      { question: 'Do you offer independent and advanced medical billing services?', answer: 'Absolutely. We provide advanced billing services tailored to the unique clinical workflows and rules of over 40 medical specialties, supporting independent practices, large clinical networks, and laboratory groups nationwide.' },
    ],
    helpTitle: 'Still have questions?',
    helpDescription: 'Contact our medical billing specialists for a customized walkthrough and a free EHR integration check.',
    primaryCta: { primaryLabel: 'Contact Our Team', primaryHref: '/contact-us' },
    secondaryCta: { secondaryLabel: 'Schedule a Free Consultation', secondaryHref: '/contact-us' },
    footerNote: 'Free Consultation • No Obligation',
  },
}
