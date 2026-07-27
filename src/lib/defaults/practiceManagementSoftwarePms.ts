import { PracticeManagementSoftwarePmsPageData } from "@/payload/types/practiceManagementSoftwarePms";

export const defaultPracticeManagementSoftwarePmsData: PracticeManagementSoftwarePmsPageData = {
  hero: {
    badge: "Practice Management Software.",
    titlePlain: "Practice Management Software x EHR = a ",
    titleHighlight: "potent force for practice growth!",
    subtitle:
      "Free medical practice management software that simplifies practice and amplifies results. A dynamic healthcare solution that merges EHR, billing, and clinic management for physicians who seek better patient care, and better RCM.",
    buttonText: "Start My Free Trial",
    buttonLink: "/schedule-a-demo",
  },
  about: {
    badge: "About PMS",
    title: "About PMS",
    description:
      "BellMedEx practice management software (PMS) is a blessing for doctors who yearn to oversee their healthcare operations effectively. It covers all the bases from arranging appointments, issuing bills, and processing claims, to logging patient visits and keeping track of insurance payers. It also links with EHR, which enables patient information to be stored and transferred across different settings.",
    imageSrc: "/rcm-dashboard-laptop1.png",
    imageAlt: "Medical professionals reviewing practice management dashboards on a monitor",
    buttonText: "Let's Get Started",
    buttonLink: "/schedule-a-demo",
  },
  balance: {
    titlePlain: "Balance the ",
    titleHighlight: "Art of Medicine",
    titleSuffix: " & the Science of Business",
    description:
      "BellMedEx Practice Management Software helps you balance the art of medicine and the science of business, by providing you with the tools and resources you need to succeed.",
  },
  features: {
    features: [
      {
        label: "ICD 10 Compatible",
        title: "ICD 10 at Your Fingertips",
        paragraphs: [
          "BellMedEx PMS includes an integrated ICD 10 converter that helps you translate clinical documentation into accurate codes without leaving your workflow.",
          "A built-in claim validation tool checks submissions against payer rules before they leave your office, reducing rejections and speeding reimbursements.",
        ],
        imageSrc: "/clearinghouse-nurse-hero.png",
        imageAlt: "Healthcare provider reviewing ICD-10 codes on a tablet",
        reverse: false,
      },
      {
        label: "Manage Patients",
        title: "Patient Management Made Simple",
        paragraphs: [
          "Organize patients into groups, track visits, and access clinical decision support tools that keep care coordinated across your team.",
          "Built-in communication tools help you share updates, reminders, and follow-up instructions so every patient stays informed and engaged.",
        ],
        imageSrc: "/consultants-laptop.png",
        imageAlt: "Patient management workflow dashboard",
        reverse: true,
      },
      {
        label: "Manage Claims",
        title: "Claim More, Worry Less",
        paragraphs: [
          "Submit claims electronically and track status in real time from a single dashboard designed for busy practices.",
          "The Claim Wizard walks you through each step of submission, scrubbing errors and helping you collect more of what you've earned with less manual work.",
        ],
        imageSrc: "/medical-billing-software-dashboard.png",
        imageAlt: "Claim management dashboard and wizard",
        reverse: false,
      },
    ],
  },
  manage: {
    badge: "Practice Management.",
    titlePlain: "Manage your practice with ease and grace, because we ",
    titleHighlight: "help you ace the medical space!",
    description:
      "The Practice Management System by BellMedEx automates clinical workflows and patient records, giving you one platform to schedule appointments, manage billing, and deliver better care with less administrative burden.",
    howItConnectsLabel: "How it connects",
    items: [
      {
        title: "Engage your patient to enhance your practice.",
        content:
          "Interact with patients, remind them of appointments, get feedback, and offer online access to health records and resources with patient engagement features.",
        summary: "Better outcomes through patient engagement",
        iconName: "Users",
      },
      {
        title: "Optimize your billing to maximize your profits.",
        content:
          "Streamline billing, reduce errors, and improve cash flow for healthcare providers with billing and revenue cycle management features. It also manages claims, verifies insurance, and processes payments.",
        summary: "Higher revenue with billing and RCM",
        iconName: "TrendingUp",
      },
      {
        title: "Explore your data to uncover new opportunities.",
        content:
          "Monitor performance, find improvement areas, and support data-driven decisions for healthcare providers with reporting and analytics features. It also reports compliance, measures quality and compares benchmarks.",
        summary: "Smarter decisions via reporting and analytics",
        iconName: "BarChart3",
      },
    ],
  },
  telemedicineRcm: {
    features: [
      {
        label: "Telemedicine Feature",
        title: "Connect, Care, and Cure",
        paragraphs: [
          "Schedule virtual visits, send patient reminders, and document telehealth encounters in the same workflow you use for in-office care. BellMedEx PMS keeps appointments, billing, and records aligned so remote care feels seamless for your team and your patients.",
          "Measure telehealth performance with built-in analytics that track visit volume, engagement, and outcomes—helping you expand virtual services with clarity and control.",
        ],
        imageSrc: "/pms-connect-care-cure.png",
        imageAlt: "BellMedEx telemedicine feature with video consult and patient chat",
        reverse: true,
      },
      {
        label: "Revenue Cycle Reports",
        title: "Score Billing and RCM Wins",
        paragraphs: [
          "Cloud-based practice management software puts billing performance at your fingertips. Generate invoices, monitor collections, and stay on top of every claim without juggling spreadsheets or disconnected tools.",
          "Build revenue cycle reports that surface gross charges, net collections, top payers, and aging AR—so you can spot trends early, reduce leakage, and celebrate measurable RCM wins.",
        ],
        imageSrc: "/pms-score-billing-rcm-wins.png",
        imageAlt: "Physician reviewing BellMedEx billing and RCM dashboard reports",
        reverse: false,
      },
    ],
  },
  specialtyCta: {
    badgeTag: "New",
    badgeText: "Specialty Specific PMS.",
    titlePlain: "Don't settle for a generic PMS. Get one that works for your ",
    titleHighlight: "specialty!",
    subtitle:
      "Every specialty runs differently. BellMedEx specialty-specific PMS adapts to your workflows with tailored templates, billing rules, and reporting—so you spend less time configuring software and more time delivering care.",
    buttonText: "Request Free Customization",
    buttonLink: "/schedule-a-demo",
    imageSrc: "/pms-specialty-dashboard.png",
    imageAlt: "BellMedEx specialty-specific practice management software dashboard",
  },
  highlights: {
    highlights: [
      {
        title: "Cloud Based",
        description:
          "Access your practice management software anytime, anywhere, on any device. Secure cloud hosting keeps your team connected whether you are in the office, at home, or on the go.",
        iconName: "Cloud",
      },
      {
        title: "Reliable Support",
        description:
          "Get help from our friendly support team whenever you need it. From onboarding and training to day-to-day troubleshooting, we are here before, during, and after implementation.",
        iconName: "Headphones",
      },
      {
        title: "Scalable Solution",
        description:
          "Customize and scale your PMS as your practice grows. Whether you are a solo provider or a multi-location network, BellMedEx adapts to your workflows without forcing a platform change.",
        iconName: "Layers",
      },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions.",
    titlePlain: "Frequently Asked ",
    titleHighlight: "Questions",
    description:
      "Find clear answers about implementing, customizing, integrating, and getting the most from BellMedEx practice management software.",
    faqs: [
      {
        question: "How to implement and use this practice management software?",
        answer:
          "Our PMS is easy to implement and use in your daily workflow. We provide step-by-step guidance to install and configure the software on your systems and devices, plus comprehensive training so your team can schedule, bill, and manage patients effectively.",
      },
      {
        question: "Does this software comply with the healthcare laws?",
        answer:
          "BellMedEx PMS meets the standards and requirements that apply to your practice, including HIPAA and other healthcare regulations. We help you follow best practices for data privacy, security, and compliant clinical and billing workflows.",
      },
      {
        question: "How to migrate data to BellMedEx PMS?",
        answer:
          "We make it easy to transfer your existing data from paper records or another system to our practice management software. Our team consults with you on a safe, accurate migration plan and verifies that your data is complete after the process.",
      },
      {
        question: "Is this PMS customizable for my specialty?",
        answer:
          "Our PMS is flexible and customizable to suit your specialty, preferences, and goals. You can configure templates, workflows, and settings to match your practice, and request additional features or modules when needed.",
      },
      {
        question: "How can I integrate this PMS with EHR and billing?",
        answer:
          "BellMedEx PMS is compatible with the systems you already use—EHR, labs, pharmacies, clearinghouses, and telehealth. We help you connect and sync them seamlessly so scheduling, documentation, and billing stay in one flow.",
      },
      {
        question: "What kind of support and training do you provide?",
        answer:
          "We provide comprehensive support and training before, during, and after implementation. Dedicated customer service, technical support, documentation, tutorials, webinars, and onboarding resources are available whenever you need them.",
      },
    ],
  },
  getStartedCta: {
    highlights: [
      { label: "Easy registration" },
      { label: "Access 24/7" },
      { label: "Specialty specific" },
    ],
    titleLine1: "Free PMS? We Know You Want It.",
    titleHighlight: "Try It Now for FREE!",
    subtitle:
      "You have nothing to lose and everything to gain with our free practice management software. Contact us today for free access and discover how premium features make running your practice easier.",
    buttonText: "Get Started For Free",
    buttonLink: "/schedule-a-demo",
  },
};
