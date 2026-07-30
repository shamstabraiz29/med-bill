import { AboutUsPageData } from "@/payload/types/aboutUs";

export const defaultAboutUsData: AboutUsPageData = {
  seo: {
    metaTitle: "About Us | BellMedEx Healthcare Revenue Cycle Management",
    metaDescription: "Discover BellMedEx, America's leading healthcare revenue cycle management partner offering AAPC-certified medical coding, billing, and provider credentialing.",
    keywords: "about bellmedex, medical billing company, AAPC certified coders, RCM partner, healthcare billing team",
    canonicalUrl: "https://bellmedex.com/about-us",
    robots: "index, follow",
    openGraph: {
      ogTitle: "About Us | BellMedEx Healthcare Revenue Cycle Management",
      ogDescription: "Discover BellMedEx, America's leading healthcare revenue cycle management partner offering AAPC-certified medical coding, billing, and provider credentialing.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/about-us",
    },
  },
  hero: {
    badge: "About BellMedEx Healthcare RCM",
    titlePlain: "Pioneering the Future of ",
    titleHighlight: "Healthcare Revenue Operations",
    description:
      "At BellMedEx, we empower medical practices, clinics, and healthcare institutions across the United States to achieve financial freedom. By combining AAPC-certified medical coding, automated clearinghouse EDI, and end-to-end RCM operations, we eliminate claim denials and maximize practice cash flow.",
    checklist: [
      { label: "98.4% Clean Claims Acceptance" },
      { label: "50+ Medical Specialties Served" },
      { label: "HIPAA Compliant & Secure" },
      { label: "Dedicated Billing Account Managers" },
    ],
    primaryBtnText: "Schedule Free Audit",
    primaryBtnLink: "/schedule-a-demo",
    secondaryBtnText: "Contact Our Team",
    secondaryBtnLink: "/contact-us",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "BellMedEx Healthcare RCM Team",
    topBadgeLabel: "Trusted RCM Partner",
    topBadgeTitle: "500+ Clinics & Physicians",
    bottomStatLabel: "Annual Collections",
    bottomStatValue: "$250M+",
    bottomStatSubtext: "processed annually",
    bottomBadgeText: "+30% Avg Boost",
  },
  missionVision: {
    badge: "Mission & Vision",
    titlePlain: "Empowering Healthcare Practices ",
    titleHighlight: "To Thrive Financially",
    description:
      "Our purpose is to eliminate administrative friction for healthcare providers, ensuring maximum revenue collection and total peace of mind.",
    missionBadge: "Our Mission",
    missionTitle: "Maximizing Provider Collections With Zero Administrative Stress",
    missionDescription:
      "Our mission is to relieve healthcare providers of complex billing burdens so they can focus on delivering exceptional patient care. We deliver end-to-end RCM solutions that reduce claim denial rates below 2% and improve monthly practice revenue.",
    visionBadge: "Our Vision",
    visionTitle: "Setting the Industry Benchmark for Modern RCM Services",
    visionDescription:
      "We envision a future where healthcare billing is completely seamless, transparent, and automated. Through relentless innovation and dedicated specialty expertise, BellMedEx strives to be the nation's premier revenue cycle management partner.",
    valuesBadge: "Core Values",
    valuesTitlePlain: "Guided By ",
    valuesTitleHighlight: "Uncompromising Standards",
    valuesDescription:
      "Every decision we make is guided by four foundational pillars of healthcare revenue management.",
    values: [
      {
        iconName: "ShieldCheck",
        title: "Integrity & Compliance",
        description: "Strict adherence to HIPAA guidelines, Medicare rules, and billing ethics ensures zero compliance risk for your practice.",
      },
      {
        iconName: "Cpu",
        title: "Technology Innovation",
        description: "Leveraging cloud PMS/EHR integration and automated EDI clearinghouse technology to accelerate claim processing speed.",
      },
      {
        iconName: "Target",
        title: "Precision Coding",
        description: "AAPC-certified medical coders ensuring every encounter is coded to maximum specificity for prompt, accurate reimbursement.",
      },
      {
        iconName: "HeartHandshake",
        title: "Client-Centric Support",
        description: "Dedicated account managers and transparent reporting dashboards so you always know your practice's financial health.",
      },
    ],
  },
  capabilities: {
    badge: "Comprehensive Solutions",
    titlePlain: "Our Core RCM Capabilities & ",
    titleHighlight: "Expertise",
    description:
      "We manage the complete revenue cycle lifecycle so healthcare providers can focus 100% of their energy on patient care.",
    capabilities: [
      {
        iconName: "FileCode2",
        title: "AAPC-Certified Coding",
        description: "Our certified coding team ensures precise CPT, ICD-10, and HCPCS code selection to prevent rejections and maximize compliant reimbursement.",
      },
      {
        iconName: "ShieldAlert",
        title: "Proactive Denial Management",
        description: "Root-cause analysis and automated appeal workflows to recover written-off claims and reduce aging A/R beyond 90 days.",
      },
      {
        iconName: "Cpu",
        title: "EDI Clearinghouse Integration",
        description: "Seamless clearinghouse automation for real-time electronic claims submission, ERAs, and instant eligibility verification.",
      },
      {
        iconName: "Award",
        title: "Provider Credentialing",
        description: "Accelerated payer enrollment with commercial carriers, Medicare, and Medicaid to get new providers billing in under 60 days.",
      },
      {
        iconName: "UserCheck",
        title: "Patient Eligibility & Billing",
        description: "Front-desk insurance verification, co-pay calculation, and patient billing statement generation to prevent front-end errors.",
      },
      {
        iconName: "BarChart3",
        title: "Real-Time RCM Analytics",
        description: "Custom practice performance dashboards providing full visibility into collection velocity, net collection ratios, and A/R trends.",
      },
    ],
  },
  whyUs: {
    badge: "Why Practices Trust Us",
    titlePlain: "The BellMedEx Advantage",
    subtitle:
      "We don't just submit claims—we function as an extension of your practice, optimizing every touchpoint of your revenue cycle.",
    pillars: [
      {
        iconName: "DollarSign",
        title: "Zero Upfront Software Costs",
        desc: "We integrate seamlessly with your existing EHR/PMS or offer free EHR & practice management software without setup fees.",
      },
      {
        iconName: "Zap",
        title: "98.4% Clean Claim Acceptance",
        desc: "Multi-level claim scrubbing and certified AAPC coding ensure your claims get accepted and paid on the first submission.",
      },
      {
        iconName: "Headphones",
        title: "Dedicated RCM Account Team",
        desc: "Direct access to dedicated account managers and billing specialists who understand your practice's specific medical specialty.",
      },
      {
        iconName: "ShieldCheck",
        title: "100% HIPAA & Regulatory Compliance",
        desc: "Full compliance with CMS regulations, Medicare fee schedules, and HIPAA security standards to protect your practice.",
      },
    ],
    impactBadge: "Average Practice Impact",
    impactTitle: "Proven Revenue Uplift",
    metrics: [
      { label: "Clean Claims Rate", value: "98.4%", badgeText: "Top 1%" },
      { label: "A/R Days Reduction", value: "Under 30 Days", badgeText: "-85% Faster" },
      { label: "Net Collection Boost", value: "+25% - 35%", badgeText: "Guaranteed" },
    ],
  },
  cta: {
    badge: "Partner With BellMedEx",
    title: "Ready to Experience Stress-Free Revenue Cycle Management?",
    titlePlain: "Ready to Experience Stress-Free ",
    titleHighlight: "Revenue Cycle Management?",
    description:
      "Schedule a free 1-on-1 consultation with our medical billing specialists today. We will audit your current collection performance and show you how to boost clean claims to 98%+.",
    highlights: [
      { label: "Free Billing Audit" },
      { label: "No Upfront Software Fees" },
      { label: "HIPAA Compliant Guarantee" },
    ],
    buttonText: "Schedule Free Audit",
    buttonLink: "/schedule-a-demo",
  },
};
