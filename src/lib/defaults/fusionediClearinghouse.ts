import { FusionediClearinghousePageData } from "@/payload/types/fusionediClearinghouse";

export const defaultFusionediClearinghouseData: FusionediClearinghousePageData = {
  seo: {
    metaTitle: "FusionEDI Clearinghouse Software | BellMedEx",
    metaDescription: "High-speed electronic claims clearinghouse software for seamless EDI 837 claim submission and 835 ERA processing.",
    keywords: "FusionEDI clearinghouse, medical clearinghouse software, EDI 837, ERA processing, electronic claim submission",
    canonicalUrl: "https://bellmedex.com/fusionedi-clearinghouse",
    robots: "index, follow",
    openGraph: {
      ogTitle: "FusionEDI Clearinghouse Software | BellMedEx",
      ogDescription: "High-speed electronic claims clearinghouse software for seamless EDI 837 claim submission and 835 ERA processing.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/fusionedi-clearinghouse",
    },
  },
  hero: {
    badge: "Healthcare Fusion EDI Software.",
    titlePlain: "A fusion of EDI and Healthcare Billing for practices that want ",
    titleHighlight: "Speedy Rewards!",
    subtitle:
      "FusionEDI® is a healthcare clearinghouse EDI software for an \"instant\" transmission of claims with absolute accuracy. Our scalable medical billing EDI solution scrubs claims, resolves denials, and verifies patient eligibility for a better medical revenue cash flow.",
    buttonText: "Get Started For Free",
    buttonLink: "/schedule-a-demo",
  },
  dashboard: {
    imageSrc: "/fusionedi-dashboard.png",
    imageAlt:
      "FusionEDI clearinghouse dashboard showing claim balance, ERA payments, enrollments, transactions, and claim submission trends",
  },
  features: {
    badge: "Health Institute EDI Software Features.",
    titlePlain: "The ",
    titleHighlight: "No.1 Solution For The Billing Evolution",
    description:
      "FusionEDI brings together claim scrubbing, standardized EDI formats, and instant payer submission—giving healthcare institutes a single platform built for faster, cleaner billing.",
    features: [
      {
        iconName: "ShieldCheck",
        title: "Claim Quality Assurance",
        description:
          "Scrub claims before they leave your office to catch coding errors, missing fields, and payer-specific issues—so more claims pass on the first submission.",
        imageSrc: "/clearinghouse-nurse-hero.png",
        imageAlt: "Healthcare professional using FusionEDI claim quality assurance tools",
      },
      {
        iconName: "FileText",
        title: "Data Format Alignment",
        description:
          "Transform non-standard billing data into compliant EDI formats such as 837 and 835, keeping exchanges accurate and consistent across payers and systems.",
        imageSrc: "/consultants-laptop.png",
        imageAlt: "Specialist aligning healthcare data formats with FusionEDI software",
      },
      {
        iconName: "Send",
        title: "Instant Claim Submission",
        description:
          "Send electronic claims to insurance carriers in seconds, track status in real time, and accelerate reimbursements for a healthier revenue cash flow.",
        imageSrc: "/rcm-doctor-importance.png",
        imageAlt: "Provider submitting claims instantly through FusionEDI clearinghouse",
      },
    ],
  },
  getStartedSteps: {
    badge: "Get Started for Free.",
    titlePlain: "Get Started for Free in ",
    titleHighlight: "3 Easy Steps",
    description:
      "Our software is the most affordable EDI solution for healthcare. It's free to use and has no hidden fees.",
    steps: [
      {
        stepLabel: "Step 1",
        iconName: "Phone",
        title: "Reach Out to Us",
        description:
          "We are all ears. Send us an email or ring us up, and let us know about your practice and the medical billing software you have.",
      },
      {
        stepLabel: "Step 2",
        iconName: "Settings",
        title: "Get FusionEDI Set UP",
        description:
          "Our expert will configure FusionEDI clearinghouse software and make it fit like a glove with your medical billing software.",
      },
      {
        stepLabel: "Step 3",
        iconName: "Gauge",
        title: "Enjoy Fast Claims",
        description:
          "FusionEDI will now start acting as a bridge between you and the payer, and ensure you get your fair share of the pie.",
      },
    ],
  },
  whatWeOffer: {
    badge: "What We Offer.",
    titlePlain: "More Features, More Efficiency, and ",
    titleHighlight: "More Profitability.",
    offers: [
      {
        iconName: "ScanSearch",
        title: "Claim Polisher",
        description:
          "Cleanses and polishes claim data before sending it to payers, dodging penalties and denials.",
      },
      {
        iconName: "ClipboardCheck",
        title: "Claim Auditor",
        description:
          "Gives feedback on the quality of claims, making sure all required fields are filled and no cracks are found.",
      },
      {
        iconName: "Rocket",
        title: "Claim Accelerator",
        description:
          "Accelerates the claim processing cycle, resulting in faster payments and smoother cash flow for the provider.",
      },
      {
        iconName: "CircleDollarSign",
        title: "Payment Automator",
        description:
          "Enables automatic posting of payments to patient accounts, minimizing errors and easing reconciliation.",
      },
      {
        iconName: "UserCheck",
        title: "Eligibility Checker",
        description:
          "Verifies the patient's insurance coverage before the service is rendered, avoiding eligibility-related rejections.",
      },
      {
        iconName: "FileSearch",
        title: "Billing Analyzer",
        description:
          "Offers valuable insights into billing trends, patterns, issues, and opportunities, supporting wise decision making.",
      },
    ],
  },
  solutions: {
    badge: "Medical EDI Solutions.",
    titlePlain: "Clear the way for Better Healthcare with our ",
    titleHighlight: "Clearinghouse Solutions.",
    subtitle:
      "FusionEDI connects your practice to payers with fast claim submission, real-time eligibility checks, and built-in quality control—so billing runs cleaner and reimbursements arrive sooner.",
    solutions: [
      {
        iconName: "Send",
        title: "Fast Claim Submission",
        description: "Your claims are sent to the payers within 24 hours.",
      },
      {
        iconName: "UserCheck",
        title: "Instant Eligibility Check",
        description:
          "Advanced algorithms verify the patient's insurance coverage in a few seconds.",
      },
      {
        iconName: "Plug",
        title: "Seamless Integration",
        description: "Compatible with all medical billing systems.",
      },
      {
        iconName: "ShieldCheck",
        title: "Claim Quality Control",
        description:
          "Our software performs the QC of claims to prevent possible denials.",
      },
    ],
  },
  ediTransfers: {
    badge: "HIPAA Compliant Electronic Data Exchanges.",
    titlePlain: "The Next Generation Of ",
    titleHighlight: "Electronic Data Transfers",
    titleSuffix: " In Healthcare",
    description:
      "FusionEDI is powerful software that can handle various data types that are vital for the healthcare industry. Whether you need to submit, process, receive, or verify healthcare data, FusionEDI can do it all for you electronically.",
    transfers: [
      {
        title: "Retail Pharmacy Claim",
        description:
          "Submit and Process retail pharmacy claims electronically. This will save you time and money, and reduce errors and rejections.",
        iconName: "Pill",
        side: "left",
      },
      {
        title: "EDI 837",
        description:
          "Submit and process healthcare claims and encounters electronically. This will improve your cash flow, compliance, and accuracy.",
        iconName: "ShieldCheck",
        side: "right",
      },
      {
        title: "EDI 835",
        description:
          "Receive and process payments and remittance advice electronically. This will help you reconcile your accounts, track revenue, and manage denials.",
        iconName: "Wallet",
        side: "left",
      },
      {
        title: "EDI 834",
        description:
          "Enroll and manage members in a healthcare benefit plan electronically. This will streamline your enrollment process and reduce administrative costs.",
        iconName: "BarChart3",
        side: "right",
      },
      {
        title: "EDI 270",
        description:
          "Inquire and verify eligibility and benefits of subscriber electronically. This helps you avoid unnecessary claims denials and verify coverage details.",
        iconName: "FileText",
        side: "left",
      },
      {
        title: "EDI 271",
        description:
          "Receive and process the responses to inquiries about the eligibility and benefits of subscriber electronically. This will help to understand the plan limitations.",
        iconName: "ListChecks",
        side: "right",
      },
      {
        title: "EDI 277",
        description:
          "Receive and process the notifications about status of previously submitted EDI 837 claim electronically. This help you monitor the progress of your claims.",
        iconName: "MessageSquare",
        side: "left",
      },
      {
        title: "EDI 278",
        description:
          "Request and receive authorization for healthcare service electronically. This helps to ensure compliance with plan policies, and avoid claim rejections.",
        iconName: "ClipboardCheck",
        side: "right",
      },
    ],
  },
  getStartedCta: {
    highlights: [
      { label: "Easy registration" },
      { label: "Access 24/7" },
      { label: "Specialty specific" },
    ],
    titlePlain: "Free Today, Premium All The Way. ",
    titleHighlight: "Let's Get Started!",
    subtitle:
      "You have nothing to lose and everything to gain with our healthcare clearinghouse software. Contact us today for free access and discover how premium features can boost your efficiency and profitability.",
    buttonText: "Get Started For Free",
    buttonLink: "/schedule-a-demo",
  },
};
