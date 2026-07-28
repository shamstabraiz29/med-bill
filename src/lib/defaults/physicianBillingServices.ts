import { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

export const defaultPhysicianBillingServicesData: PhysicianBillingServicesPageData = {
  hero: {
    badge: "Physician Billing Services.",
    titlePlain: "Physician ",
    titleHighlight: "Billing Services",
    description:
      "BellMedEx Physician Billing Services ensure physicians obtain rightful payments for caring for patients via accurate claim filing, coding, denial resolution, and unpaid claim follow-up. We serve as your outsourced billing team, multiplying income so your medical practice thrives.",
    ctaText: "Get A Demo",
    ctaHref: "/schedule-a-demo",
    faqItems: [
      {
        question: "What is physician billing?",
        answer:
          "Physician billing is the process of coding patient encounters, submitting claims to payers, posting payments, and following up on denials so physicians receive accurate reimbursement for care delivered.",
      },
      {
        question: "How Physician Billing Services help?",
        answer:
          "Outsourced physician billing reduces administrative burden, improves clean-claim rates, accelerates collections, and gives your team more time to focus on patient care instead of revenue cycle tasks.",
      },
      {
        question: "How will physician billing be impacted by MIPS?",
        answer:
          "MIPS ties a portion of physician reimbursement to quality and cost metrics. Strong billing workflows help capture accurate data, report performance correctly, and protect revenue under value-based payment models.",
      },
    ],
  },
  splitSections: [
    {
      badge: "Physician Billing Company.",
      headingId: "physician-billing-trust-heading",
      titlePlain: "The Physician Billing Company You Can ",
      titleHighlight: "Trust",
      paragraphs: [
        {
          text: "Physician billing is a maze of rules, codes, and payer requirements that change constantly. Without the right systems and expertise, practices lose time and money on rejected claims and delayed reimbursements.",
        },
        {
          text: "BellMedEx combines intelligent billing software with certified expert billers to reduce your administrative stress, improve clean-claim rates, and boost revenue—so you can focus on patient care.",
        },
      ],
      imageSrc: "/consultants-laptop.png",
      imageAlt: "Medical billing specialist reviewing physician billing workflows on a laptop",
      ctaLabel: "Outsource Your Billing",
      ctaHref: "/outsource-medical-billing",
      imagePosition: "left",
    },
    {
      badge: "Claims & Reimbursement.",
      headingId: "physician-billing-claims-heading",
      titlePlain: "Billing Experts for Physician ",
      titleHighlight: "Claims Filing & Reimbursement",
      paragraphs: [
        {
          text: "Late payments and rejected claims drain practice revenue and create uncertainty for your team. Every denied claim represents money left on the table.",
        },
        {
          text: "Our team manages the full physician billing cycle with 99%+ precision—from eligibility verification and coding to claim submission, payment posting, and follow-up—so reimbursements arrive faster.",
        },
      ],
      imageSrc: "/rcm-card-billing.png",
      imageAlt: "Physician claim form and billing workflow on a tablet",
      ctaLabel: "Get Started",
      ctaHref: "/schedule-a-demo",
      imagePosition: "right",
    },
    {
      badge: "RCM Support.",
      headingId: "physician-billing-rcm-heading",
      titlePlain: "Gain Financial Peace of Mind with Our ",
      titleHighlight: "RCM Support",
      paragraphs: [
        {
          text: "Revenue cycle management touches every part of your practice's financial health. Gaps in billing workflows silently erode collections and cash flow.",
        },
        {
          text: "BellMedEx RCM support uses data-driven technology and dedicated billing specialists to capture lost revenue, streamline operations, and give you clear visibility into your practice's financial performance.",
        },
      ],
      imageSrc: "/rcm-dashboard-laptop1.png",
      imageAlt: "Revenue cycle management dashboard showing physician practice analytics",
      ctaLabel: "Improve Your Revenue",
      ctaHref: "/schedule-a-demo",
      imagePosition: "left",
    },
  ],
  mipsSection: {
    badge: "MIPS Performance.",
    titlePlain: "Optimize MIPS by ",
    titleHighlight: "Over 75 Points",
    paragraphs: [
      { text: "Medicare’s MIPS program continues incentivizing high-quality care in 2024." },
      { text: "For the 2024 period, the performance threshold remains at 75 points, with scores below leading to negative adjustments and scores above resulting in positive adjustments by Medicare." },
      { text: "Miss the mark, and you lose up to 9% of reimbursements." },
      { text: "Hit it, and you gain up to 9%." },
      { text: "It’s a big swing." },
      { text: "Let BellMedEx Physician Billing Team take charge of your MIPS performance." },
      { text: "We know the program inside out and will help you hit over 75% in quality reporting. Our tech integrates EHR and billing for seamless workflows that prevent denials. And our experts work tirelessly to optimize your scores." },
    ],
    ctaText: "Yes, I'm Interested",
    ctaHref: "/schedule-a-demo",
    imageSrc: "/faq-doctor.png",
    imageAlt: "Experienced physician supported by BellMedEx MIPS billing solutions",
  },
  exploreFeatures: {
    badge: "Physician Billing Features.",
    titlePlain: "Explore More ",
    titleHighlight: "Features",
    description:
      "BellMedEx Physician Billing Services Company supports physician practices with reliable billing workflows across verification, charge entry, collections, and reporting.",
    features: [
      {
        iconName: "ShieldCheck",
        title: "Insurance Verification + Eligibility Check",
        description: "We investigate coverage details upfront so you can deliver care with confidence and receive accurate reimbursement without last-minute surprises.",
      },
      {
        iconName: "ClipboardList",
        title: "Charge Entry Support",
        description: "We capture every service, diagnosis, and code correctly to stop leaky billing operations and help your practice keep more of what it earns.",
      },
      {
        iconName: "RefreshCw",
        title: "AR Follow-Up (Accounts Receivable)",
        description: "Our team follows up on unpaid claims, reverses denials, and resolves underpayments so aged accounts receivable do not drain your revenue.",
      },
      {
        iconName: "CreditCard",
        title: "Payment Posting",
        description: "Payments from insurers and patients are posted accurately, balances are updated automatically, and your financial records stay organized.",
      },
      {
        iconName: "FileText",
        title: "Patient Billing and Collections",
        description: "We manage patient accounts end to end, including statements, payment plans, and follow-up on outstanding balances for timely collections.",
      },
      {
        iconName: "BarChart3",
        title: "Reporting and Analytics",
        description: "Clear reports reveal billing trends, performance gaps, and opportunities to improve collections and grow practice revenue.",
      },
    ],
  },
  demoCta: {
    rateLabel: "New Low Rates From",
    rateValue: "2.49%",
    rateSubtext: "of your monthly collections",
    buttonText: "Take Advantage Now!",
    buttonHref: "/schedule-a-demo",
  },
};
