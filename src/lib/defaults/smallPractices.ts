import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

export const defaultSmallPracticesData: SmallPracticesPageData = {
  hero: {
    badge: "Small Practice Billing.",
    titlePlain: "Medical Billing Services for ",
    titleHighlight: "Small Practices",
    descriptionParagraph1:
      "Medical billing for small practices is an expert service that transforms each patient encounter in a small clinic or solo provider's office into a clean, payer-ready claim. This service makes sure that each patient visit gets the right ICD-10 code. It follows up on every Medicare or private healthcare insurance claim. This way, small physician groups and micro clinics receive payments for the services given to patients.",
    descriptionParagraph2:
      "BellMedEx provides medical billing services for small healthcare practices. We act as a complete revenue cycle partner. We turn every chart into a claim that meets payer requirements and deposit the reimbursements directly into your account. You don't need to hire more staff or deal with software problems.",
    trustStats: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "1,500+", label: "Practices Supported" },
      { value: "$125B", label: "Annual Loss Prevented" },
    ],
    benefits: [
      {
        title: "Dedicated RCM Manager",
        description: "Direct point of contact who understands your small practice needs.",
      },
      {
        title: "Direct Account Deposit",
        description: "Reimbursements deposited straight into your business account.",
      },
      {
        title: "24/7 Portal Access",
        description: "Real-time visibility into claim status and financial reports.",
      },
      {
        title: "Zero Setup Cost",
        description: "Get started without heavy upfront software or staffing investment.",
      },
    ],
    formTitle: "Request a Free Small Practice Billing Audit",
    formSubtitle:
      "See how much revenue your clinic is missing out on with a complimentary 30-minute analysis.",
  },
  collaborate: {
    badge: "Customized Billing.",
    titlePlain: "Collaborate with BellMedEx and Get ",
    titleHighlight: "Customized Billing Services",
    titleSuffix: " for Your Small Practice",
    services: [
      {
        title: "Cloud-Based HIPAA-Compliant PMS",
        description:
          "Saves your practice from penalties, and keeps the patient's confidential data secure.",
        href: "/practice-management-software-pms",
        imageSrc: "/pms-specialty-dashboard.png",
      },
      {
        title: "Automated Claims Scrubber EHR Software",
        description: "Runs the data through algorithms, scans, and rectifies errors.",
        href: "/electronic-health-records-ehr",
        imageSrc: "/medical-billing-software-dashboard.png",
      },
      {
        title: "Own Clearinghouse",
        description:
          "Verifies and processes claims with accuracy & transmits electronic claims to insurers.",
        href: "/clearinghouse",
        imageSrc: "/fusionedi-dashboard.png",
      },
    ],
  },
  affordableBilling: {
    badge: "Revenue & Profit.",
    titlePlain: "Are You Making More Revenue but ",
    titleHighlight: "Lesser Profits?",
    description:
      "Guess what, higher billing costs could be taking away a big chunk of your revenue, leaving crumbs behind.",
    mainTitlePlain:
      "Outsourcing with BellMedEx Is Inexpensive Because We Make Billing ",
    mainTitleHighlight: "Affordable for Your Individual Practice",
    paragraph1:
      "At BellMedEx, we have helped over 1,500 small and mid-sized practices with billing & collections + coding assistance for independent practices. These include family medicine offices, low-volume practices, and rural health clinics. Our medical billing solutions increase their revenue by an average of 30% in a cost-effective way.",
    paragraph2:
      "A small-budget clinic faces challenges like accounts management and claim denials. It works hard to provide quality care while managing many tasks and tight budgets. Our accounts management team provides affordable and effective medical billing support. We help small healthcare practices grow from just surviving to thriving.",
    imageSrc: "/consultants-laptop.png",
    imageAlt:
      "Healthcare professional reviewing medical billing analytics on a laptop",
    benefits: [
      { text: "BellMedEx's certified billing team helps independent doctors and small practices make more money." },
      { text: "Grow your clinic without needing to hire more staff or buy costly software." },
      { text: "Keep coding accurate (CPT/ICD-10) and save time and costs for small healthcare providers." },
      { text: "Make your entire RCM simple. Check eligibility, scrub claims, manage denials, and post payments all in one affordable workflow." },
      { text: "Handle patient visits easily, making sure each small-practice appointment turns into a clear, payer-compliant claim." },
    ],
  },
  specialtyForm: {
    badge: "Specialty Billing.",
    titlePlain: "Billing Services Customized for ",
    titleHighlight: "Your Specialty",
    description: "We Cover 75+ Specialties.",
  },
  revenueLoss: {
    badge: "According to Recent Reports.",
    titlePlain:
      "Medical Billing Complexities Such as Denied Claims and Poor Billing Practices Result in ",
    titleHighlight: "Massive Revenue Loss",
    stats: [
      {
        iconName: "TrendingDown",
        description: "Poor billing causes practices to lose around $125 billion each year",
      },
      {
        iconName: "FileWarning",
        description: "Lost revenue in Denied Claims is approx. $5 million per provider",
      },
      {
        iconName: "AlertTriangle",
        description: "Around 80% of bills contain errors",
      },
    ],
  },
  billingProcess: {
    badge: "End-to-End Workflow.",
    titlePlain: "Our Streamlined Medical Billing Process for ",
    titleHighlight: "Small Practices",
    description:
      "We simplify every step of your revenue cycle so you can focus on patient care.",
    ctaText: "SCHEDULE A FREE DEMO",
    ctaHref: "/schedule-a-demo",
    steps: [
      {
        iconName: "UserCheck",
        title: "Patient Registration",
        items: [
          { text: "Accurate patient data collection i.e., demographics, medical history" },
          { text: "Verification of patient details" },
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Prior Authorization & Eligibility Verification",
        items: [
          { text: "Prior authorization from the insurance company" },
          { text: "Efficient charge posting to expedite reimbursements" },
        ],
      },
      {
        iconName: "Code2",
        title: "Medical Coding",
        items: [
          { text: "An absolute error-free standardized coding" },
          { text: "Identification of errors if any, and immediate rectification" },
        ],
      },
      {
        iconName: "Receipt",
        title: "Charge Entry",
        items: [
          { text: "Promptly charge patient accounts to prevent surprise billing" },
          { text: "Efficient charge posting to expedite reimbursements" },
        ],
      },
      {
        iconName: "Send",
        title: "Claims Submission",
        items: [
          { text: "Submit claims electronically" },
          { text: "Ensure fast and clean claims submissions" },
          { text: "Maintain the accuracy and industry-standard protocols" },
        ],
      },
      {
        iconName: "RefreshCw",
        title: "Denial Management",
        items: [
          { text: "Constant follow-up of the status of the submitted claim" },
          { text: "Identify causes of denial & rectify errors instantly" },
          { text: "Resubmit claims promptly for fast reimbursement" },
        ],
      },
    ],
  },
  easeBilling: {
    badge: "Small Practice Support.",
    titlePlain: "Here's How We Ease Billing for ",
    titleHighlight: "Small Practices!",
    features: [
      {
        iconName: "Handshake",
        description: "We take up all your non-clinical burdens",
      },
      {
        iconName: "RefreshCw",
        description: "Proactively handle constantly changing billing & coding rules",
      },
      {
        iconName: "CircleDollarSign",
        description: "Affordable for your specialty",
      },
      {
        iconName: "Zap",
        description: "Faster reimbursements",
      },
      {
        iconName: "Eye",
        description: "Transparent in our reporting",
      },
      {
        iconName: "FileCheck",
        description: "Cater end-to-end denial management",
      },
    ],
  },
  transparency: {
    titlePlain: "100% Transparency ",
    titleHighlight: "and No Hidden Fees",
    description:
      "We offer high-end services for your small practice. Our team at BellMedEx believes in clear communication and making informed decisions to ensure efficiency in all areas of our billing services.",
    ctaText: "Schedule a Demo",
    ctaHref: "/schedule-a-demo",
    imageSrc: "/rcm-dashboard-laptop1.png",
    imageAlt:
      "Healthcare professional reviewing transparent medical billing reports on a tablet",
  },
  partnerCta: {
    badge: "Partner With BellMedEx.",
    titlePlain: "Partner with BellMedEx and ",
    titleHighlight: "Experience the Difference",
    description:
      "We prioritize high-touch, personalized service, clear communication and transparency, keeping you informed every step of the way. Our team possesses in-depth knowledge of the latest billing regulations and coding guidelines, ensuring compliance and maximizing your practice's financial performance. We provide complete reports and analytics to empower you to make informed decisions about your healthcare.",
    ctaText: "Schedule a Quick Call",
    ctaHref: "/schedule-a-demo",
  },
};
