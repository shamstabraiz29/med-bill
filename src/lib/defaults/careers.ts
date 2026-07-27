import type { CareersData } from "@/payload/types/careers";

export const defaultCareersData: CareersData = {
  hero: {
    badge: "Join The BellMedEx Team",
    titlePlain: "Build Your Career in",
    titleHighlight: "Healthcare & RCM Innovation",
    description: "We are looking for passionate billing specialists, coders, marketers, and technology innovators to shape the future of medical revenue cycle management.",
    perks: [
      { id: "1", iconName: "Globe", label: "Remote & Hybrid Work" },
      { id: "2", iconName: "Heart", label: "Comprehensive Health Benefits" },
      { id: "3", iconName: "Award", label: "Career Growth & Mentorship" },
      { id: "4", iconName: "Sparkles", label: "Competitive Salaries & Bonuses" },
    ],
  },
  formSection: {
    title: "Submit Your Application",
    subtitle: "Fill in your details and select your departments of interest to apply for career opportunities.",
    successTitle: "Application Received!",
    successDescription: "Thank you for applying. Our HR and recruitment team has received your application and will review your profile shortly.",
    departments: [
      "Sales",
      "Marketing",
      "Admin",
      "IT",
      "Business Development",
      "HR",
      "Medical Billing",
      "Medical Coding",
      "Credentialing",
      "A/R Specialist",
      "Team Lead",
      "Management",
      "Others",
    ],
  },
  seo: {
    metaTitle: "Careers & Job Opportunities | BellMedEx Healthcare RCM",
    metaDescription: "Join the BellMedEx team. Explore career opportunities in medical billing, coding, credentialing, IT, sales, and healthcare revenue cycle management.",
    keywords: "BellMedEx careers, medical billing jobs, RCM careers, healthcare billing jobs",
    robots: "index, follow",
    canonicalUrl: "https://bellmedex.com/careers",
  },
};
