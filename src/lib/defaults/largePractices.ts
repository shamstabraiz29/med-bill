import { LargePracticesPageData } from "@/payload/types/largePractices";

export const defaultLargePracticesData: LargePracticesPageData = {
  hero: {
    badge: "Large Practice Billing.",
    titlePlain: "Billing Services for your ",
    titleHighlight: "Large Practice",
    descriptionParagraph1:
      "Save up to 30-60% on annual payroll with billing workflows built for high-volume large practices.",
    descriptionParagraph2:
      "Billing inaccuracies can be disastrous for your large practice's financial growth. For 10+ years in billing and denial management, BellMedEx is known for mitigating lost revenue and reducing claim denials by 97% for large practices. Available in all 50 States!",
    ctaText: "Contact BellMedEx Now",
    ctaHref: "/contact-bellmedex",
    stats: [
      { value: "30-60%", label: "Annual Payroll Savings" },
      { value: "97%", label: "Claim Denial Reduction" },
      { value: "50", label: "States Nationwide" },
    ],
  },
  commonGoals: {
    badge: "Shared Objectives.",
    titlePlain: "BellMedEx and Large Practices Share ",
    titleHighlight: "Common Goals",
    goals: [
      { label: "Faster and More Cash Inflow", iconName: "CircleDollarSign" },
      { label: "Billing and Coding Accuracy", iconName: "Target" },
      { label: "Improve Patient Experience", iconName: "Heart" },
      { label: "End-to-End Denial Management", iconName: "ShieldCheck" },
      { label: "Compliance Regulation", iconName: "Scale" },
      { label: "Cost Savings", iconName: "PiggyBank" },
    ],
  },
  infrastructure: {
    badge: "Enterprise Workflows.",
    titlePlain: "Optimized Billing Infrastructure for ",
    titleHighlight: "High-Volume Practices",
    description:
      "Our scalable technology platform and certified billing specialists handle multi-specialty, multi-provider operations seamlessly.",
    highlights: [
      {
        title: "Multi-Specialty Support",
        description: "Custom billing logic tailored to multi-specialty clinics and large hospital networks.",
      },
      {
        title: "Custom EHR Integration",
        description: "Seamless bi-directional interface with 50+ major EHR and PMS platforms.",
      },
      {
        title: "Automated Claim Scrubbing",
        description: "Pre-submission rule engines to detect coding errors before claims reach payers.",
      },
      {
        title: "Dedicated Account Management",
        description: "Senior RCM specialists dedicated exclusively to your practice's collection goals.",
      },
    ],
  },
  kpis: {
    badge: "Key Performance Indicators.",
    titlePlain: "Measuring Performance with ",
    titleHighlight: "Actionable KPIs",
    cards: [
      {
        number: "01",
        title: "98%+ Clean Claim Rate",
        description: "First-pass claim acceptance rates consistently exceeding industry benchmarks.",
        iconName: "CheckCircle2",
      },
      {
        number: "02",
        title: "<30 Days Average A/R",
        description: "Rapid claim turnaround and persistent follow-up to keep accounts receivable low.",
        iconName: "Clock",
      },
      {
        number: "03",
        title: "97% Denial Reduction",
        description: "Proactive denial management and rapid appeal workflows to recover maximum revenue.",
        iconName: "ShieldAlert",
      },
      {
        number: "04",
        title: "100% HIPAA Compliance",
        description: "SOC 2 Type II certified cloud security and strict compliance controls.",
        iconName: "Lock",
      },
    ],
  },
  auditMetrics: {
    badge: "Measurable Outcomes.",
    titlePlain: "Proven Audit Metrics & ",
    titleHighlight: "Results",
    metrics: [
      { value: "98.5%", label: "Clean Claim Ratio", subtitle: "Industry standard is <90%" },
      { value: "24-48 hrs", label: "Claims Processing Turnaround", subtitle: "Rapid electronic EDI submission" },
      { value: "30-60%", label: "Operating Cost Savings", subtitle: "Compared to internal billing staff" },
      { value: "99%", label: "Client Retention Rate", subtitle: "Trusted partnership model" },
    ],
  },
  personalizedServices: {
    badge: "Tailored Solutions.",
    titlePlain: "Personalized Billing Services for ",
    titleHighlight: "Your Practice",
    services: [
      {
        title: "AAPC-Certified Coding",
        description: "Expert coders versed in ICD-10/11, CPT, and specialty-specific modifier rules.",
        iconName: "Binary",
      },
      {
        title: "Accounts Receivable Recovery",
        description: "Dedicated pursuit of aged A/R and unresolved payer claims.",
        iconName: "TrendingUp",
      },
      {
        title: "Patient Billing & Support",
        description: "Clear, transparent patient statements and friendly customer service support.",
        iconName: "Users",
      },
      {
        title: "Compliance & Audit Defense",
        description: "Regular coding audits to protect against payer clawbacks and compliance risks.",
        iconName: "FileCheck",
      },
    ],
  },
  billingFlowchart: {
    badge: "Seamless Process.",
    titlePlain: "Our End-to-End Billing ",
    titleHighlight: "Flowchart",
    steps: [
      { stepNumber: "Step 1", title: "Patient Registration & Eligibility", description: "Real-time insurance verification prior to patient visits." },
      { stepNumber: "Step 2", title: "Charge Capture & Coding", description: "Precise code assignment verified by certified coding specialists." },
      { stepNumber: "Step 3", title: "Claim Scrubbing & Submission", description: "Automated pre-flight claim audits and EDI clearinghouse transmission." },
      { stepNumber: "Step 4", title: "Payment Posting & Reconciliation", description: "Electronic ERA auto-posting and manual check posting with full audit trails." },
      { stepNumber: "Step 5", title: "Denial Management & Appeals", description: "Immediate root-cause analysis and claim re-submission for denials." },
      { stepNumber: "Step 6", title: "Reporting & Analytics", description: "Monthly financial executive summaries and real-time dashboard analytics." },
    ],
  },
  workProcess: {
    badge: "Proven Method.",
    titlePlain: "Our Work Process for ",
    titleHighlight: "Large Practices",
    steps: [
      { stepNumber: "01", title: "Practice Audit & Discovery", description: "In-depth review of existing billing workflows, denial rates, and A/R health." },
      { stepNumber: "02", title: "EHR & Clearinghouse Integration", description: "Seamless software setup with zero downtime or disruption to clinical operations." },
      { stepNumber: "03", title: "Full-Scale Billing Execution", description: "Dedicated account management team handles end-to-end revenue operations." },
      { stepNumber: "04", title: "Continuous Optimization", description: "Monthly performance reviews and strategic financial guidance for growth." },
    ],
  },
  addOnServices: {
    badge: "Additional Support.",
    titlePlain: "Comprehensive Add-On ",
    titleHighlight: "Billing Services",
    services: [
      {
        title: "Provider Credentialing",
        description: "Fast-track insurance payer enrollment and CAQH profile maintenance.",
        iconName: "Award",
      },
      {
        title: "Fee Schedule Optimization",
        description: "Annual fee schedule reviews to ensure maximum payer reimbursement rates.",
        iconName: "Calculator",
      },
      {
        title: "Prior Authorization Management",
        description: "Pre-service prior authorization tracking to prevent procedure delays.",
        iconName: "ClipboardCheck",
      },
    ],
  },
};
