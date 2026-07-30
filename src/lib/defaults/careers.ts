import type { CareersData } from "@/payload/types/careers";

export const defaultCareersData: CareersData = {
  hero: {
    badge: "Join The BellMedEx Team",
    titlePlain: "Build Your Career in",
    titleHighlight: "Healthcare & RCM Innovation",
    description: "We are looking for passionate billing specialists, coders, marketers, and technology innovators to shape the future of medical revenue cycle management.",
    perks: [
      { id: "1", iconName: "Globe", label: "Remote & Hybrid Work Options" },
      { id: "2", iconName: "Heart", label: "Comprehensive Health Benefits" },
      { id: "3", iconName: "Award", label: "Career Growth & Mentorship" },
      { id: "4", iconName: "Sparkles", label: "Competitive Salaries & Bonuses" },
    ],
  },
  formSection: {
    title: "Submit Your Job Application",
    subtitle: "Fill in your personal details, select your departments of interest, and attach your resume to apply.",
    successTitle: "Application Received!",
    successDescription: "Thank you for applying. Our recruitment team will review your application profile and contact you shortly.",
    departments: [
      "Medical Billing",
      "Medical Coding",
      "Provider Credentialing",
      "Accounts Receivable (A/R)",
      "Sales & Business Development",
      "Digital Marketing & SEO",
      "IT & Software Engineering",
      "Human Resources (HR)",
      "Team Leadership & Ops",
    ],
  },
  faq: {
    badge: "CAREERS FAQ",
    titlePlain: "Frequently Asked",
    titleHighlight: "Career Questions",
    description: "Have questions about working at BellMedEx? Find answers about our application process, culture, benefits, and remote work policy.",
    faqs: [
      {
        q: "What job positions are currently available at BellMedEx?",
        a: "We regularly hire Medical Billing Specialists, Certified Professional Coders (CPC), Credentialing Managers, AR Follow-up Officers, Healthcare Sales Representatives, and IT/Software Engineers.",
      },
      {
        q: "Does BellMedEx offer remote or work-from-home positions?",
        a: "Yes! We offer flexible remote, hybrid, and in-office positions depending on the role, team requirements, and your location.",
      },
      {
        q: "What is the hiring and interview process like?",
        a: "After submitting your application and resume, our HR team reviews your qualifications. Selected candidates go through an initial HR screening call, followed by a technical/domain interview and final leadership interaction.",
      },
      {
        q: "What employee benefits and perks does BellMedEx provide?",
        a: "We offer market-competitive salaries, annual performance bonuses, comprehensive health coverage, paid time off (PTO), professional development stipends, and clear career growth pathways.",
      },
      {
        q: "How can I check the status of my application?",
        a: "Once you submit your application form, you will receive an automatic email confirmation. Our recruitment team typically responds within 3 to 5 business days regarding next steps.",
      },
    ],
  },
  cta: {
    badge: "JOIN OUR REVENUE CYCLE TEAM",
    title: "Ready to Shape the Future of Healthcare RCM?",
    description: "Take the next step in your career. Join a high-performing team dedicated to empowering medical practices nationwide.",
    highlights: ["Remote & Hybrid Roles", "Market-Leading Pay", "Continuous Learning & Upskilling"],
    primaryBtnText: "Explore Openings & Apply",
    primaryBtnLink: "#careers-apply-form",
    secondaryBtnText: "Contact HR Team",
    secondaryBtnLink: "mailto:careers@bellmedex.com",
  },
  seo: {
    metaTitle: "Careers & Job Opportunities | BellMedEx Healthcare RCM",
    metaDescription: "Join the BellMedEx team. Explore career opportunities in medical billing, coding, credentialing, IT, sales, and healthcare revenue cycle management.",
    keywords: "BellMedEx careers, medical billing jobs, RCM careers, healthcare billing jobs",
    robots: "index, follow",
    canonicalUrl: "https://bellmedex.com/careers",
    openGraph: {
      ogTitle: "Careers & Job Opportunities | BellMedEx Healthcare RCM",
      ogDescription: "Join the BellMedEx team. Explore career opportunities in medical billing, coding, credentialing, IT, sales, and healthcare revenue cycle management.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/careers",
    },
  },
};

