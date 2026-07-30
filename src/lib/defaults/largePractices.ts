import { LargePracticesPageData } from "@/payload/types/largePractices";

export const defaultLargePracticesData: LargePracticesPageData = {
  seo: {
    metaTitle: "Large Practice Billing Solutions | BellMedEx",
    metaDescription: "Scalable revenue cycle management and enterprise billing services tailored for large medical groups and multi-specialty practices.",
    keywords: "large practice billing, enterprise RCM, multi specialty billing, group practice medical billing",
    canonicalUrl: "https://bellmedex.com/large-practices",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Large Practice Billing Solutions | BellMedEx",
      ogDescription: "Scalable revenue cycle management and enterprise billing services tailored for large medical groups and multi-specialty practices.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/large-practices",
    },
  },
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
    titlePlain: "BellMedEx and Large Practices Share ",
    titleHighlight: "Common Goals",
    goals: [
      { label: "Faster and More Cash Inflow", iconName: "CircleDollarSign" },
      { label: "Billing and Coding Accuracy", iconName: "Target" },
      { label: "Improve Patient Experience", iconName: "BarChart3" },
      { label: "End-to-End Denial Management", iconName: "FileCog" },
      { label: "Compliance Regulation", iconName: "ShieldCheck" },
      { label: "Cost Savings", iconName: "PiggyBank" },
    ],
  },
  infrastructure: {
    titlePlain: "Robust Billing Infrastructure is a Promising Feature of Our ",
    titleHighlight: "Medical Billing Services",
    descriptionParagraph1:
      "Large practices face myriad challenges from patient registration to claims submission and follow-up. One of the grand struggles is filing multiple claims above all the other administrative burdens.",
    descriptionParagraph2:
      "A solid billing infrastructure ensures transparency, affordability, and flexibility that fine-tunes the weak areas of billing processes and this is where BellMedEx comes in. Our billing services are handled by efficient systems — that have up-to-date denial management resources and experienced personnel — who provide solutions and 24/7 assistance.",
    ctaText: "Let's Hop on a Quick Call",
    ctaHref: "/schedule-a-demo",
  },
  kpis: {
    titlePlain: "8 Important KPIs ",
    titleHighlight: "to Ensure Faster and More ROI",
    description:
      "These metrics make up most of the revenue cycle management flowchart for the billing process and revenue cycle management of your large practice.",
    chartItems: [
      { label: "Reimbursement Accuracy", value: 7.1 },
      { label: "Compliance with Regulations", value: 5.1 },
      { label: "Charge Lag", value: 10.1 },
      { label: "First-Pass Claim Rate", value: 15.2 },
      { label: "Net Collection Ratio", value: 20.2 },
      { label: "Denial Rate", value: 12.1 },
      { label: "Clean Claims Ratio", value: 20.2 },
      { label: "Days in Accounts Receivables", value: 10.1 },
    ],
  },
  auditMetrics: {
    badge: "Billing Audit Metrics.",
    titlePlain: "It Takes us ",
    titleHighlight: "4 Metrics to Audit Billing",
    titleSuffix: " and Fix ROI for Your Large Practice",
    description:
      "These metrics make up 60% of your billing process's efficiency, productivity, and financial performance. The figures are taken from the first-hand experience of our clients.",
    metrics: [
      {
        title: "Days in Accounts Receivable – 30-40 days",
        description:
          "Accounts receivable is the process of tracking claims buy considering the average number of days practice takes to collect due payment. We have lower accounts receivables days ratio and ensure faster reimbursement",
      },
      {
        title: "First Pass Acceptance Rate – 97%",
        description:
          "Also known as the first pass clean claim rate, it measures the acceptance rate of the first submission of the claims. We provide quality revenue cycle management services for a high first-pass clean claim rate.",
      },
      {
        title: "Net Collection Rate – 98%",
        description:
          "The overall collection from the patient and the insurer makes the net collection rate. We make sure payment is timely received and the net collection rate is high.",
      },
      {
        title: "Denial Rate – 1%",
        description:
          "The ratio of claims denied by the insurer represents how effective is your revenue cycle management process. We follow up on denied claims, scan, and rectify the errors and maximize revenue generations.",
      },
    ],
  },
  personalizedServices: {
    badge: "Personalized Billing.",
    titlePlain: "Get Personalized Medical Billing Services to Refine your ",
    titleHighlight: "Billing, Coding, and overall RCM Strengths",
    paragraph1:
      "We understand one-size doesn't fit all and your large practice needs customized services that are transparent yet error-less. We audit your billing process, identify, and rectify errors and check all unpaid and aging claims.",
    paragraph2:
      "Your Large Practice is fighting multiple battles from patient registration to claims submission and denial management. We take over all your non-clinical burden to help you focus on delivering patient care.",
    paragraph3:
      "In fact, we have billing, coding, and RCM systems for your large practice in place. We submit clean claims more than 99% of the time, ensure timely submission of medical claims, follow up on aging A/R daily, and increase reimbursements.",
    ctaText: "Book Free Consultation Now",
    ctaHref: "/schedule-a-demo",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "Healthcare professional reviewing personalized medical billing services on a laptop",
  },
  billingFlowchart: {
    badge: "RCM Flowchart.",
    titlePlain: "Medical Billing Services to Streamline ",
    titleHighlight: "Revenue Cycle Management for Large Practices",
    description:
      "Simplify the complexities of medical billing and enhance your financial and healthcare productivity by opting the following billing flowchart for your large practice.",
    steps: [
      {
        iconName: "ShieldCheck",
        title: "Insurance Verification and Eligibility",
        description:
          "Ensure prior authorization and verify insurance eligibility for medical services such as diagnoses, procedures, and treatments.",
      },
      {
        iconName: "UserCheck",
        title: "Patient Registration",
        description:
          "Collect, verify, and enter the data into the system to ensure accuracy and error-free billing documentation.",
      },
      {
        iconName: "Send",
        title: "Claims Submission",
        description:
          "With a 99% clean claim rate we submit accurate claims to ensure a high first-time pass rate so you get the maximum collection rate.",
      },
      {
        iconName: "Code2",
        title: "Coding and Documentation",
        description:
          "We deploy expert coders and billers to prevent errors and inaccuracies in diagnostic and procedural coding.",
      },
      {
        iconName: "ShieldAlert",
        title: "Denial Management",
        description:
          "Rectification of the root cause of the denial leads to accuracy and successful denial management.",
      },
      {
        iconName: "CreditCard",
        title: "Payment posting",
        description:
          "Payments received from the insurer or the patient are posted into the system for record keeping and informing the patient if there's co-pay.",
      },
      {
        iconName: "Clock",
        title: "A/R Follow-up",
        description:
          "We follow-up on pending payments and accounts receivables for reimbursements and remaining collections.",
      },
      {
        iconName: "Receipt",
        title: "Patient Billing",
        description:
          "Patients are billed with accurate charges to cover their bills against the services they have availed.",
      },
      {
        iconName: "Megaphone",
        title: "Education and Outreach",
        description:
          "By proactively engaging with providers, we help to understand patient's financial obligations and encourage timely payments.",
      },
    ],
  },
  workProcess: {
    badge: "Efficient Workflow.",
    titlePlain: "Our Efficient Work Process to Achieve ",
    titleHighlight: "These Goals Faster",
    steps: [
      {
        stepNumber: "01",
        iconName: "Cpu",
        title: "24/7 Access to Technology and Infrastructure",
        description:
          "Advanced billing technology, coding tools, and infrastructure efficiently support operations and personalize billing and RCM for large practices. When you outsource billing with BellMedEx, you can leverage these technological resources without spending on software or hardware.",
      },
      {
        stepNumber: "02",
        iconName: "ClipboardCheck",
        title: "Regular Auditing and Quality Control",
        description:
          "We ensure regular internal audits to scan inaccuracies and point out areas for improvement in the billing processes. Not only that, we rectify the patterns and ensure quality control measures, such as double-checking claims and conducting reviews. This allows a reduction in revenue holes and inaccuracies.",
      },
      {
        stepNumber: "03",
        iconName: "Handshake",
        title: "Upfront Communication",
        description:
          "Clear and effective communication between insurers, administrative staff, and billing personnel is essential for long-term work partnerships. It improves the trust level among all the parties involved and prevents misunderstandings and errors.",
      },
      {
        stepNumber: "04",
        iconName: "Award",
        title: "Expertise and Specialization",
        description:
          "Experience and professionalism are key metrics to ensure fewer denials. We have a team of trained experts skilled in coding, billing, and claims submission. Your large practice can tap into this knowledge to access compliant billing practices.",
      },
      {
        stepNumber: "05",
        iconName: "Code2",
        title: "Simplifying Complex Coding System (ICD-10, CPT, HCPCS)",
        description:
          "We stay updated with the latest regulatory changes, coding guidelines in diagnostic procedures, and insurance requirements and employ coders who are well-versed in ICD-10, CPT, and HCPCS coding systems to ensure accuracy and faster collection.",
      },
    ],
  },
  addOnServices: {
    badge: "Add-On Services.",
    titlePlain: "Add on Services to Provide a ",
    titleHighlight: "One-Stop Solution for your Large Practice's Thorough Billing and RCM Needs",
    description:
      "Unlock your fullest revenue and care potential with these add-on services available individually as well as complete package.",
    services: [
      {
        title: "Prior Authorizations",
        description:
          "Get beforehand approval form the insurance company as to whether the service or treatment will be paid or not and avoid extra hassle, time, and cost.",
        iconName: "ClipboardCheck",
      },
      {
        title: "Eligibility & Benefits Verification",
        description:
          "We help you confirm the patient's insurance coverage, eligibility, and benefits to increase the chances of steady cash flow and avoid denials.",
        iconName: "ShieldCheck",
      },
      {
        title: "Comprehensive Analysis and Reporting",
        description:
          "Get regular reports and audits to monitor revenue cycle performance and make informed decisions.",
        iconName: "FileBarChart",
      },
      {
        title: "Credentialing",
        description:
          "We offer credentialing services to help practices avoid the trouble of assessing a physician's qualification, authenticity, and licensing.",
        iconName: "Award",
      },
    ],
  },
};
