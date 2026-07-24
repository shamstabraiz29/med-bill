import type { ProviderCredentialingData } from '@/payload/types/providerCredentialing'

export const defaultProviderCredentialingData: ProviderCredentialingData = {
  seo: {
    metaTitle: 'Medical Credentialing Services & Provider Enrollment | BellMedEx',
    metaDescription:
      'Expedited physician credentialing services and provider enrollment solutions. Stay in network, on schedule, and ahead with BellMedEx.',
    keywords:
      'medical credentialing services, provider enrollment, physician credentialing, CAQH setup, NPI registration, payer enrollment',
    canonicalUrl: 'https://bellmedex.com/provider-credentialing',
    robots: 'index, follow',
    openGraph: {
      ogTitle: 'Medical Credentialing Services & Provider Enrollment | BellMedEx',
      ogDescription:
        'Expedited physician credentialing services and provider enrollment solutions. Stay in network, on schedule, and ahead with BellMedEx.',
      ogType: 'website',
      ogUrl: 'https://bellmedex.com/provider-credentialing',
    },
  },

  hero: {
    badge: 'Medical Credentialing Services',
    titlePrefix: 'Medical Credentialing Services &',
    titleHighlight: 'Provider Enrollment',
    description1:
      'Credentialing is more than filling out forms. Each application has to match licensing data exactly. One wrong date or missing document can mean months of delay for the credentialing candidate. Payer rules shift often, and keeping up can be a full-time job. Without careful management, privileges stall, reimbursements slow down, and vital in-network access can slip away.',
    description2:
      'Medical Credentialing Services & Provider Enrollment handle the full process of a physician’s insurance enrollment setup from start to finish. This includes gathering and verifying licenses, certifications, and training records. They complete payer applications and track their progress until approvals are in place. The same vendor also maintains ongoing recredentialing so compliance never lapses.',
    description3:
      'Our expedited physician credentialing service works every file to payer standards, shortens approval timelines, and keeps your credentialing in sync with your healthcare practice goals. This way, you stay in network, on schedule, and ahead.',
    formTitle: 'Schedule Online Appointment',
    formDescription:
      'Speak with a credentialing specialist today for an expedited enrollment audit.',
    formBadge: 'Fast 24-Hour Callback',
    formCtaLabel: 'BOOK APPOINTMENT NOW',
    successMessage:
      'Thank you! Your appointment request has been submitted successfully. Our team will contact you shortly.',
    imageSrc: '/clearinghouse-nurse-hero.png',
    cardTitle: '100% Payer Approval',
    cardSubtitle: 'Expedited 30-Day Setup',
  },

  whatToExpect: {
    badge: 'What To Expect',
    titlePlain: 'Expedited Medical Credentialing Services:',
    titleHighlight: 'What to Expect?',
    description:
      'Partnering with BellMedEx gives your medical practice a streamlined, end-to-end credentialing process designed to maximize reimbursements and eliminate administrative delays.',
    expectations: [
      {
        iconName: 'TrendingUp',
        title: '1st Class Reimbursement',
        description:
          'Enjoy the advantage of first-preference reimbursement rates, maximizing your financial rewards. This means you get paid more for the same services, increasing your profitability and satisfaction.',
      },
      {
        iconName: 'Award',
        title: 'Maximum Privileges',
        description:
          'Our streamlined approach not only wins you contracts but also secures vital privileges. The credentialing applicant will be able to participate in innovative programs and earn incentives for quality performance.',
      },
      {
        iconName: 'FileCheck',
        title: 'Ready for Billing',
        description:
          "You'll be prepared to bill from day one, saving you precious time. You will receive a unique provider identification number that allows you to submit claims electronically and track them online.",
      },
      {
        iconName: 'Zap',
        title: 'Swift Reimbursement',
        description:
          "Faster reimbursements ensure a healthy cash flow for your practice. You won't have to wait for months to receive your payments, as we process claims within 15 to 30 days on average.",
      },
      {
        iconName: 'Headphones',
        title: 'Payer Support',
        description:
          'Our advocacy ensures insurance companies stand by you, supporting your needs. We negotiate on your behalf and resolve any issues that may arise, ensuring you get paid fairly and promptly.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Minimize Denials',
        description:
          'With our expertise, denials become a thing of the past, boosting your efficiency. We verify eligibility, obtain authorizations, and submit accurate claims, reducing errors and rejections.',
      },
    ],
  },

  soloPractitionerCta: {
    badge: 'In-Network Access',
    titlePlain: "We champion a solo practitioner's access to",
    titleHighlight: 'prized in-network contracts.',
    description:
      'Our physician credentialing service unlocks in-network contracts, no matter how exclusive the payor panel.',
    ctaLabel: 'Book a demo',
    ctaHref: '/schedule-a-demo',
    features: [
      {
        iconName: 'UserCheck',
        title: 'Provider Advocacy',
        description: 'Advocacy for healthcare providers',
      },
      {
        iconName: 'Handshake',
        title: 'Payer Collaboration',
        description: 'Collaborate with insurance companies',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Premium Networks',
        description: 'Secure your place in premium networks',
      },
      {
        iconName: 'Award',
        title: 'Hospital Privileges',
        description: 'Maximum hospital privileges',
      },
    ],
  },

  premiumPayerNetworks: {
    badge: 'Expedited Provider Enrollment',
    titlePlain: 'We enroll clinical providers into',
    titleHighlight: 'premium payer networks in record time!',
    description1:
      "Expedited physician credentialing services moves a medical practitioner's file from first form to final approval in a single, steady line. The physician shares their details once, we verify them at the source, correct what needs attention, and send a clean packet to each insurance payer plan. As the file travels, we keep your profile fresh with active attestations and current dates, so nothing goes stale.",
    description2:
      'We stay in touch with Medicare, Medicaid, Aetna, Cigna, Humana, UnitedHealthcare, and Blue Cross Blue Shield, and we coordinate with hospital staff offices so privileges land on time. Small slips create long waits because a digit off or a lapsed document can pause everything for the credentialing recipient. We prevent that by catching issues early, answering follow ups the same day, and keeping a clear trail that plans accept without fuss.',
    description3:
      'The result is simple and visible: faster approvals, clean start dates, true in-network status, and billing that begins on schedule. If you want a quiet, accountable path, start with our medical credentialing services, and keep your doors open for patients without insurance reimbursement delays.',
    ctaLabel: 'Get Credentialed Today',
    ctaHref: '/schedule-a-demo',
    imageSrc: '/consultants-laptop.png',
    cardTitle: 'Top Commercial & Government Networks',
    cardSubtitle: 'Medicare, Medicaid, Aetna, Cigna, BCBS & BCBS',
  },

  workflowSteps: {
    badge: 'Credentialing Process',
    titlePlain: 'Our Expedited',
    titleHighlight: 'Medical Credentialing Process',
    description:
      "BellMedEx's provider credentialing process is a validated, certified workflow ensuring maximum compliance and up to 100% approval rates across premium payer networks.",
    steps: [
      {
        stepNumber: 1,
        title: 'Surveying the provider',
        description:
          'Our credentialing process begins with an in-depth survey conducted by our credentialing specialists. This process involves comprehensive interviews with providers, gathering essential data such as license numbers, educational history, demographics, and professional background.',
      },
      {
        stepNumber: 2,
        title: 'Choosing the insurance company',
        description:
          'Our medical credentialing services guide providers in strategically choosing insurance partners aligned with their practice goals and license type, while also finalizing insurance panels based on practice location.',
      },
      {
        stepNumber: 3,
        title: 'Enrollment and management',
        description:
          'We take care of CAQH application submissions, manage doctor profiles, and keep credentials current for smooth primary source verification. We also assist with healthcare payer enrollments, ensuring quick insurance panel integration and accurate profiles that enhance network engagement and the quality of patient care.',
      },
      {
        stepNumber: 4,
        title: 'Fast approvals',
        description:
          'Although the typical timeline is 90-120 days, our medical credentialing experts take proactive steps to accelerate the process. Our team engages in weekly interactions with payers, advocating for the rapid processing and endorsement of your credentialing applications.',
      },
      {
        stepNumber: 5,
        title: 'In-network enrollment',
        description:
          'Upon completing credentialing, your application enters the contract phase. Here, an in-network contract may be offered, including fee schedules and eligible CPT billing codes. We handle closed panel challenges, advocating through appeals to secure your inclusion. With successful credentialing, direct billing becomes feasible, often with preferred reimbursement rates for in-network providers.',
      },
      {
        stepNumber: 6,
        title: 'Winning you privileges for hospital work',
        description:
          "As credentialing wraps up, our active involvement persists. We assist you in gaining all necessary hospital privileges: whether it's admitting, courtesy, or surgical rights.",
      },
      {
        stepNumber: 7,
        title: 'Ongoing monitoring',
        description:
          "Our continuous oversight ensures that your clinic's credentials remain current and that you (as a physician) stay credentialed without interruption. Our experts diligently track your credentialing expirations and conduct comprehensive daily and weekly reviews to maintain your active status. You can rest easy knowing that your credentials are in good hands with us.",
      },
    ],
  },

  expeditedServices: {
    badge: 'Expedited Credentialing Solutions',
    titlePlain: 'Expedited Help for',
    titleHighlight: 'Every Step of Medical Credentialing',
    description:
      "Medical Credentialing Services Company offers all-inclusive credentialing solutions for healthcare professionals and organizations (hospitals, clinics, therapy centers). Here's an overview of the physician credentialing and enrollment services we provide:",

    block1Features: [
      {
        title: 'Public Program Enrollment',
        description:
          'We help you join public health programs. First we gather your details, then we prepare the forms, check every line, and send them in. With expedited credentialing, approvals move faster, your patient reach grows, and your practice stays in step with state and national rules.',
      },
      {
        title: 'Private Plan Credentialing',
        description:
          'We guide your entry into private health plans. We match your profile to the right networks, complete the paperwork, and follow up until your status turns active. This fast track approach opens more patient access, steadies cash flow, and gives you room to plan your schedule with confidence.',
      },
      {
        title: 'Provider ID Number Setup',
        description:
          'Every clinician and group needs a national provider ID number to bill and share records. Our credentialing processor sets it up, updates it when anything changes, and aligns it with all enrollment files. Priority handling here prevents later slowdowns, so the rest of your credentialing keeps moving without friction.',
      },
    ],
    block1ImageSrc: '/clearinghouse-nurse-hero.png',
    block1CardTitle: 'NPI & Provider ID Setup',
    block1CardSubtitle: 'Fast-Track Public & Private Enrollment',

    banner1TextPlain: 'Get credentialed and enrolled',
    banner1TextHighlight: '2x faster.',
    banner1CtaLabel: 'Get Started Today',
    banner1CtaHref: '/schedule-a-demo',

    block2Features: [
      {
        title: 'Central Profile Setup and Upkeep',
        description:
          'We build and maintain your single online profile that many health plans use to check your details. With our Medical Credentialing Expedite Service, we load licenses, training, insurance, and work history, then cross check every line and keep attestations current. When something changes, we update it once and keep every plan in sync. This steady upkeep reduces repeat requests and moves decisions along faster.',
      },
      {
        title: 'Medical Supply Program Enrollment',
        description:
          'If you provide items like wheelchairs, oxygen gear, braces, or diabetic supplies, you need a separate enrollment before you can bill for them. We prepare the packet, match each item to the program rules, and track the file until approval posts. Provider Enrollment Expedited Service shortens the wait for the credentialing prospectee and keeps their payments on time.',
      },
      {
        title: 'Healthcare Facility Privileges',
        description:
          'To care for patients inside a facility, you must be granted privileges. We gather the required pieces, align them with your credentialing file, and coordinate with the staff office until dates are set. With Credentialing Fast Track Service, onboarding feels calm, access is granted sooner, and work begins without last minute scrambles.',
      },
    ],
    block2ImageSrc: '/consultants-laptop.png',
    block2CardTitle: 'CAQH Central Profile Upkeep',
    block2CardSubtitle: 'Healthcare Facility Privileges Granted',

    banner2TextPlain: 'We activate',
    banner2TextHighlight: 'high-paying contracts',
    banner2CtaLabel: 'Get Started Today',
    banner2CtaHref: '/schedule-a-demo',

    block3Features: [
      {
        title: 'Contract Setup and Terms',
        description:
          'We help providers reach fair contracts with health plans. First we review your needs, then we shape the terms, and we keep the talks moving with expedition so nothing sits idle. Our accelerated medical credentialing service presses the pace on rates, dispute steps, quality rules, and network entry. You get clear language, faster sign off, and a calm hand from first draft to final signature.',
      },
      {
        title: 'Revalidation and Recredentialing',
        description:
          'Staying active in a network is not a one time task. Dates expire, profiles need fresh attestations, and filings must land on time. We run the cycle on a schedule, send gentle prompts, and submit updates with speed so your eligibility never pauses. With credentialing expedition support, renewals feel routine, gaps are avoided, and participation continues without drama.',
      },
      {
        title: 'Reimbursement Review and Follow Up',
        description:
          'When payments lag or come in short, we trace the reason, correct the file, and pursue what is owed. We look at denials, delays, and underpayments, then fix and resend with priority handling. Our express credentialing and revenue check shortens the path from issue to resolution, improves cash flow, and keeps bad debt from building.',
      },
    ],
    block3ImageSrc: '/consultants-laptop.png',
    block3CardTitle: 'Revalidation & Recredentialing',
    block3CardSubtitle: 'Continuous Active Status Monitoring',

    banner3TextPlain: 'Get credentialed with',
    banner3TextHighlight: 'maximum privileges.',
    banner3CtaLabel: 'Get Started Today',
    banner3CtaHref: '/schedule-a-demo',
  },

  benefitsOfOutsourcing: {
    badge: 'Outsourcing Benefits',
    titlePlain: 'Benefits of Outsourcing Your',
    titleHighlight: 'Medical Credentialing Service',
    description1:
      'Looking for the best medical provider credentialing solutions by a top-rated medical credentialing service provider? With over a decade of experience, BellMedEx is the best solution for healthcare practices across all 50 states of the USA.',
    description2:
      'We start by thoroughly assessing your specific practice needs and the requirements of your state and the payers you want to work with. From there, we leverage our extensive payer contracts and relationships to compile and verify all necessary documents, licenses, certifications, insurance, and more to meet each payer’s distinct criteria.',
    benefits: [
      { label: "One team handles every state's rules" },
      { label: 'Intake is simple, with less repeat paperwork' },
      { label: 'Details are checked early to avoid returns' },
      { label: 'A single provider profile works for all plans' },
      { label: 'IDs and records stay aligned across systems' },
      { label: 'Enrollment moves from first form to approval without stalls' },
      { label: 'Facility privileges are arranged on time' },
      { label: 'Recredentialing is tracked and filed before deadlines' },
      { label: 'Contracts are reviewed for fair, clear terms' },
      { label: 'Short-term coverage is set up without billing gaps' },
      { label: 'Status updates are clear, with one contact throughout' },
    ],
    ctaLabel: 'Contact us to book credentialing service near you',
    ctaHref: '/contact-us',
    imageSrc: '/doctors-team.png',
    cardTitle: 'Nationwide Coverage',
    cardSubtitle: 'Practices Supported Across All 50 USA States',
  },

  healthcareEntities: {
    badge: 'Healthcare Specialties & Facilities',
    titlePlain: 'BellMedEx Expedites the',
    titleHighlight: 'Payer Enrollment Process',
    description:
      'Proper credentialing is essential for healthcare providers to deliver quality care, attract patients, and maintain compliance. Our comprehensive credentialing service helps providers of all specialties navigate these challenges. Our credentialing services are available for:',
    entities: [
      { iconName: 'Dumbbell', title: 'PT / OT / SLP' },
      { iconName: 'UserCheck', title: 'PAs / NPs' },
      { iconName: 'Building2', title: 'Hospitals' },
      { iconName: 'Stethoscope', title: 'Physicians' },
      { iconName: 'Activity', title: 'Podiatrists (DPM)' },
      { iconName: 'HeartPulse', title: 'Chiropractors (DC)' },
      { iconName: 'Building', title: 'Ambulatory Surgery Centers (ASC)' },
      { iconName: 'Cross', title: 'Urgent Care Facilities' },
      { iconName: 'FileBarChart', title: 'Diagnostic Testing Facilities' },
      { iconName: 'Eye', title: 'Optometrists, Audiologists' },
      { iconName: 'Brain', title: 'Behavioral Health Providers' },
      { iconName: 'User', title: 'Physical Therapists' },
    ],
  },

  enrollFavoritePayers: {
    badge: 'Payer Network Enrollment',
    titlePlain: 'Enroll With Your',
    titleHighlight: 'Favorite Payer',
    description:
      'We streamline provider enrollment across all major government and commercial health insurance networks nationwide, ensuring fast panel inclusion and zero billing delays.',
    payerTypes: [
      {
        iconName: 'Landmark',
        title: 'Government Payers',
        examples: 'Examples include – Medicare, Medicaid, and TRICARE.',
      },
      {
        iconName: 'Users',
        title: 'Commercial Payers',
        examples:
          'Examples include – Blue Cross Blue Shield, Kaiser Permanente, Anthem, United Healthcare, Aetna, Cigna, and Humana.',
      },
    ],
  },

  pricingPackages: {
    badge: 'Credentialing Packages',
    titlePlain: 'Our Packages and Features for',
    titleHighlight: 'Credentialing Applicants',
    description:
      'Choose the ideal credentialing package tailored to your medical practice size, specialty, and revenue cycle management needs.',
    tiers: [
      {
        name: 'Basic',
        coreFeatures: [
          { label: 'Medical Credentialing', included: true },
          { label: 'Provider Enrollment', included: true },
          { label: 'Continuous Support', included: false },
          { label: 'Medical Billing', included: false },
          { label: 'Specialty EHR', included: false },
        ],
        detailChecklist: [
          { label: 'Collect and verify your documents and information' },
          { label: 'Complete and submit applications and forms to your chosen payers' },
          { label: 'Follow up until you get approval and contract' },
          { label: 'Update you regularly on your status' },
          { label: 'Deliver your credentialing certification' },
        ],
      },
      {
        name: 'Advanced',
        popular: true,
        coreFeatures: [
          { label: 'Medical Credentialing', included: true },
          { label: 'Provider Enrollment', included: true },
          { label: 'Continuous Support', included: true },
          { label: 'Medical Billing', included: false },
          { label: 'Specialty EHR', included: false },
        ],
        detailChecklist: [
          { label: 'Attest to your information on payer portals as required' },
          { label: 'CAQH profile, Availity account, Optum ID' },
          { label: 'Update your information and documents as needed' },
          { label: 'Re-credential and re-enroll you periodically' },
          { label: 'Ensure your compliance with rules and regulations' },
          { label: 'Monitor changes in payer requirements and policies' },
        ],
      },
      {
        name: 'Premium',
        coreFeatures: [
          { label: 'Medical Credentialing', included: true },
          { label: 'Provider Enrollment', included: true },
          { label: 'Continuous Support', included: true },
          { label: 'Medical Billing', included: true },
          { label: 'Specialty EHR', included: true },
        ],
        detailChecklist: [
          { label: 'Provide you with a customized specialty-specific EHR system' },
          { label: 'Train you and your staff on how to use the EHR system' },
          { label: 'Integrate the EHR system with payer portals' },
          { label: 'Handle all your medical billing tasks' },
          { label: 'Optimize your revenue cycle management' },
          { label: 'Claim scrubbing and denial management' },
          { label: '24/7 dedicated support team' },
        ],
      },
    ],
  },

  redTapeCta: {
    badge: 'Seamless Credentialing',
    titlePlain: 'Don’t let the red tape',
    titleHighlight: 'stop your pace.',
    description:
      'Credentialing can be a hassle, but not with us. We have the skills, the tools, and the connections to get you credentialed and enrolled with any payer you want. No matter what your specialty or location, we will enable you to enjoy the benefits of being in-network!',
    ctaLabel: 'Get Started Today',
    ctaHref: '/schedule-a-demo',
    features: [
      {
        iconName: 'Zap',
        title: 'Zero Red Tape',
        description: 'Bypass administrative hurdles with our automated filing system.',
      },
      {
        iconName: 'ShieldCheck',
        title: '100% Compliant',
        description: 'Full primary source verification meeting state and national rules.',
      },
      {
        iconName: 'Clock',
        title: 'Expedited Approvals',
        description: 'Accelerated panel entries so you can start billing without delays.',
      },
      {
        iconName: 'CheckCircle2',
        title: 'All Payers Supported',
        description: 'Direct enrollment across commercial, Medicare, and Medicaid networks.',
      },
    ],
  },
}
