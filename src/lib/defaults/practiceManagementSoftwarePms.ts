import { PracticeManagementSoftwarePmsPageData } from "@/payload/types/practiceManagementSoftwarePms";

export const defaultPracticeManagementSoftwarePmsData: PracticeManagementSoftwarePmsPageData = {
  seo: {
    metaTitle: "Practice Management Software (PMS) | BellMedEx",
    metaDescription: "All-in-one Practice Management Software (PMS) for patient scheduling, eligibility verification, and financial reporting.",
    keywords: "practice management software, PMS software, patient scheduling software, medical practice management",
    canonicalUrl: "https://bellmedex.com/practice-management-software-pms",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Practice Management Software (PMS) | BellMedEx",
      ogDescription: "All-in-one Practice Management Software (PMS) for patient scheduling, eligibility verification, and financial reporting.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/practice-management-software-pms",
    },
  },
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
          "Our online PMS has an integrated ICD 10 converter that automatically translates existing ICD 9 codes to the corresponding ICD 10 codes. You can use the smart search function to find the most appropriate ICD 10 code for any diagnosis or procedure, using keywords, synonyms, or abbreviations.",
          "There's also a built-in claim validation tool that can check a physician's claims for any errors before submitting them to the payer, ensuring that they are compliant with the ICD 10 coding standards.",
        ],
        imageSrc: "/clearinghouse-nurse-hero.png",
        imageAlt: "Healthcare provider reviewing ICD-10 codes on a tablet",
        reverse: false,
      },
      {
        label: "Manage Patients",
        title: "Patient Management Made Simple",
        paragraphs: [
          "Manage patient groups across different clinical measures and get alerts to any gaps in care, or opportunities for improvement with clinical decision support notifications. Doctors can use the automated patient communication tool to send reminders, alerts, educational materials, and satisfaction surveys to patients via email, text, or phone.",
          "Our web-based PMS lets providers create and manage population health management groups that segment patients based on various criteria, such as age, gender, condition, or location. Physicians can customize care plans and interventions for each group, and monitor their progress and outcomes.",
        ],
        imageSrc: "/consultants-laptop.png",
        imageAlt: "Patient management workflow dashboard",
        reverse: true,
      },
      {
        label: "Manage Claims",
        title: "Claim More, Worry Less",
        paragraphs: [
          "Our clinic management software helps medical facilities with electronic claim submission. You can submit claims to any payer in any format, and track the status of your claims in real-time. You can also verify eligibility, check for errors, and generate reports to monitor your revenue cycle.",
          "Use the Claim Wizard to fill out the correct fields for each claim. Then, you can run the Claim Scrubber to check for any errors or warnings before submitting your claims. Finally, you can get tips and feedback from the Claim Analyzer to improve your claim performance and reimbursement.",
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
          "With our healthcare Practice Management Software, you can easily conduct telemedicine sessions with your patients. You can do everything from scheduling, reminding, and billing, to document sharing. You can also talk to your patients through our secure video conferencing platform as if they were in your office.",
          "The Telehealth Dashboard lets you manage your telemedicine sessions, records, reports, and settings. Telehealth Analytics evaluates your telemedicine performance, based on patient satisfaction, clinical outcomes, and revenue.",
        ],
        imageSrc: "/pms-connect-care-cure.png",
        imageAlt: "BellMedEx telemedicine feature with video consult and patient chat",
        reverse: true,
      },
      {
        label: "Revenue Cycle Reports",
        title: "Score Billing and RCM Wins",
        paragraphs: [
          "This cloud-based PMS helps clinicians with all aspects of billing and revenue cycle management. Invoice Generator creates professional invoices for your patients and insurance companies, with customizable templates and automatic calculations. The Reimbursement Tracker monitors reimbursements from insurance companies, with timely notifications and reminders.",
          "You can also use the Report Builder to generate various reports and analytics for your billing and financial performance, such as revenue, collections, aging, and profitability. Plus, doctors can customize the invoicing reports and export them in different formats.",
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
