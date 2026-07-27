import { OutsourceMedicalBillingPageData } from "@/payload/types/outsourceMedicalBilling";

export const defaultOutsourceMedicalBillingData: OutsourceMedicalBillingPageData = {
  hero: {
    badge: "Outsource Medical Billing.",
    titlePlain: "Outsource Medical Billing Services at Just ",
    titleHighlight: "2.49%",
    subtitle: "Experience Thorough Compliance, Robust Technology, and Faster Reimbursements!",
    buttonText: "Let's Schedule a Quick Call",
    buttonLink: "/schedule-a-demo",
  },
  intro: {
    badge: "Reduce Revenue Leaks.",
    titlePlain: "Outsource Medical Billing ",
    titleHighlight: "today to Reduce Errors, Minimize Revenue Holes, and Maximize Collections",
    description:
      "Medical billing is a complex and dynamic process that requires constant attention and expertise. If you are struggling with billing errors, revenue leaks, or collection issues, you may be losing money and time that could be better spent on patient care.",
    commonProblemsTitle: "Common problems practices face with billing:",
    challenges: [
      { title: "Lost revenue in denied claims", iconName: "TrendingDown" },
      { title: "Unaddressed old claims", iconName: "FileWarning" },
      { title: "Delayed and denied claims", iconName: "Clock" },
    ],
    buttonText: "Set up a Discovery Call",
    buttonLink: "/schedule-a-demo",
    imageSrc: "/doctor-hero.png",
    imageAlt: "Physician reviewing medical billing workflows on a laptop",
    calloutTitle: "Maximize collections with expert billing support",
    calloutDescription: "Outsource billing to protect revenue and focus on patient care.",
  },
  comparison: {
    badge: "In-house Vs. Outsourced.",
    titlePlain: "Let's Compare ",
    titleHighlight: "In-house Medical Billing Vs. Outsourcing with BellMedEx",
    description:
      "See how outsourcing with BellMedEx stacks up against running billing entirely in-house—from revenue protection to compliance and claim turnaround.",
    items: [
      {
        inhouseText: "Loss of revenue due to billing errors and denials",
        outsourcingText: "No loss of revenue due to billing errors and denials",
      },
      {
        inhouseText: "Need to hire, train, and manage billing staff",
        outsourcingText: "Access to a team of experienced and certified billing professionals",
      },
      {
        inhouseText: "High overhead costs for software, hardware, and office space",
        outsourcingText: "Lower overhead costs with no need for software, hardware, or office space",
      },
      {
        inhouseText: "Difficulty keeping up with changing regulations and payer requirements",
        inhouseBullets: [
          { text: "Frequent changes in coding and billing rules" },
          { text: "Complex and varying payer policies" },
          { text: "Increased risk of audits and penalties" },
        ],
        outsourcingText: "Compliance with changing regulations and payer requirements",
      },
      {
        inhouseText: "Backlogs and delays in claim submission and follow-up",
        outsourcingText: "Faster and more efficient claim submission and follow-up",
      },
    ],
  },
  specialists: {
    badge: "Certified Medical Billing Specialists.",
    titlePlain: "Why Choose BellMedEx ",
    titleHighlight: "Outsourced Billing Specialists?",
    description:
      "You don't need to juggle multiple tasks at once. Hand over your medical billing process to BellMedEx while you focus on patient care. Our certified medical billers and coders optimize your revenue cycle management.",
    points: [
      { text: "Submit accurate claims, manage patient follow-ups, and communicate with the insurers" },
      { text: "Maintain the balance between patient care and the necessary administrative tasks to streamline the systems" },
      { text: "Reduce the overall stress levels in terms of billing complexities" },
      { text: "Gain access to trained billing and coding industry specialists" },
    ],
    metrics: [
      { label: "Successful Claims Submission", value: 98, iconName: "FileCheck" },
      { label: "Streamline Administrative Systems", value: 80, iconName: "Layers" },
      { label: "Reduce Billing Complexities", value: 95, iconName: "ShieldCheck" },
      { label: "Access to Industry Specialists", value: 100, iconName: "Users" },
    ],
    buttonText: "Schedule a Call",
    buttonLink: "/schedule-a-demo",
  },
  practiceEfficiency: {
    titlePlain: "Are You Steering the Wheel of Your ",
    titleHighlight: "Healthcare Practice Efficiently?",
    paragraphs: [
      { text: "Well, keep your hands on the wheel, but steer it in the right direction." },
      { text: "In the healthcare world, patient care and medical billing are co-dependent yet equally different and unique in essence. Therefore, both need relevant specialists." },
      { text: "Outsourcing billing might seem as if you're losing control over the RCM of your practice. However, in the real world, you are gaining more authority, power, and accuracy over your billing process and overall financial health." },
      { text: "We only take over the non-clinical burden; front and back-end medical billing services, while you stay laser-focused on your core area; patient care." },
    ],
    buttonText: "Get a Demo",
    buttonLink: "/schedule-a-demo",
    imageSrc: "/doctors-team.png",
    imageAlt: "Healthcare professionals reviewing practice performance on a tablet",
    calloutTitle: "Stay laser-focused on patient care",
    calloutDescription: "We take over front and back-end medical billing services.",
  },
  solutions: {
    badge: "Comprehensive Billing Solutions.",
    titlePlain: "We Deliver Comprehensive ",
    titleHighlight: "Medical Billing Solutions to Individual and Large practices",
    description: "Choose one or all of our billing services and manage billing smoothly.",
    solutions: [
      {
        iconName: "ShieldCheck",
        title: "Insurance Verification",
        description: "Verify patient insurance and eligibility to avoid any last minute surprise bills and ensure accurate billing and coding.",
      },
      {
        iconName: "UserRound",
        title: "Patient Demographics",
        description: "Collect patient data such as their name, location, age, sex, address, phone number, etc & patient history for record keeping.",
      },
      {
        iconName: "Code2",
        title: "Medical coding",
        description: "Accurately code medical procedures, diagnoses, and treatments to make sure claims are successfully submitted.",
      },
      {
        iconName: "ClipboardList",
        title: "Charge Entry",
        description: "Charges for medical services as well as other important accounting information is entered into the patient accounts.",
      },
      {
        iconName: "CreditCard",
        title: "Payment posting",
        description: "Payment details are posted into the system and financial status of the patient payments and insurance checks are examined.",
      },
      {
        iconName: "ShieldAlert",
        title: "Denial Management",
        description: "We audit, identify and correct the denial issues immediately and address any denied or delayed claims efficiently.",
      },
      {
        iconName: "RefreshCw",
        title: "Accounts Receivable Follow-up",
        description: "Minimize the A/R days by appealing the claims and pursuing end-to-end denial management.",
      },
      {
        iconName: "FileText",
        title: "Patient Statement",
        description: "Patient statement is created that holds pending patient payment to ensure timely and remaining collections.",
      },
    ],
  },
  getStartedCta: {
    badge: "Outsourcing Medical Billing.",
    titleLine1: "Let's Find Out if We are a ",
    titleHighlight: "Good Fit for Outsourcing Medical Billing",
    subtitle:
      "Outsourcing medical billing can be a stressful decision, considering who will be the best fit for the job. After all, this is your revenue and you want to make sure you're working with someone who is efficient and has the potential to not only streamline your RCM but also increase cash flow.",
    buttonText: "Get Started",
    buttonLink: "/schedule-a-demo",
  },
  technologyExpertise: {
    techBadge: "Robust Tech Stacks.",
    techTitlePlain: "The Right Technology Solution for Your ",
    techTitleHighlight: "Medical Practice",
    techFeatures: [
      {
        iconName: "Database",
        title: "Collects Important Data",
        description: "Captures all the necessary information and data, and keeps it safe without any trust breach.",
      },
      {
        iconName: "MonitorSmartphone",
        title: "Foolproof EHRs",
        description: "Our cloud-based EHRs are foolproof and come with revenue cycle management software to help your staff streamline billing operations.",
      },
      {
        iconName: "Cloud",
        title: "Access Data Any Time",
        description: "Includes little to no downtime, secure data backup, and you can access patient data from anywhere at any time.",
      },
    ],
    expBadge: "Proven Billing Expertise.",
    expTitlePlain: "The Right Medical Billing Team for ",
    expTitleHighlight: "Faster Reimbursements",
    expFeatures: [
      {
        iconName: "MessageSquare",
        title: "Upfront Communication",
        description: "Establishes good communication pathways with the payer, provider, and patient.",
      },
      {
        iconName: "ClipboardCheck",
        title: "Precise Submission",
        description: "Accurately submits claims to lower the percentage of claims being denied.",
      },
      {
        iconName: "ShieldCheck",
        title: "Familiarity with Payers",
        description: "Has a strong client base and is familiar with payers and their constantly changing policies and handles all types of specialties.",
      },
      {
        iconName: "FileSearch",
        title: "Performs Audits and Analyses",
        description: "Audits and identifies areas where your billing needs improvement.",
      },
    ],
    ctaTitlePlain: "Empower Your RCM with Advanced Technology and ",
    ctaTitleHighlight: "Proven Expertise",
    ctaSubtitle:
      "Transform your practice billing performance with cutting-edge tools and dedicated certified billing specialists.",
    ctaButtonText: "Schedule a Call",
    ctaButtonLink: "/schedule-a-demo",
  },
};
