import { ContactUsPageData } from "@/payload/types/contactUs";

export const defaultContactUsData: ContactUsPageData = {
  seo: {
    metaTitle: "Contact Us | BellMedEx Medical Billing & RCM Support",
    metaDescription: "Get in touch with BellMedEx healthcare billing experts. Schedule a free consultation, request an audit, or call our support team.",
    keywords: "contact bellmedex, medical billing consultation, RCM support, healthcare billing helpline",
    canonicalUrl: "https://bellmedex.com/contact-us",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Contact Us | BellMedEx Medical Billing & RCM Support",
      ogDescription: "Get in touch with BellMedEx healthcare billing experts. Schedule a free consultation, request an audit, or call our support team.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/contact-us",
    },
  },
  hero: {
    badge: "Get In Touch With BellMedEx",
    titlePlain: "We're Here to Help Your Practice ",
    titleHighlight: "Thrive Financially",
    description:
      "Have questions about our medical billing, AAPC-certified coding, or provider credentialing services? Connect with our team of RCM experts today.",
    highlights: [
      {
        iconName: "Clock",
        title: "< 1 Hour Response",
        desc: "Fast turnaround on all billing inquiries",
      },
      {
        iconName: "Headphones",
        title: "Dedicated RCM Experts",
        desc: "Direct access to billing specialists",
      },
      {
        iconName: "ShieldCheck",
        title: "100% HIPAA Compliant",
        desc: "Secure end-to-end communication",
      },
    ],
  },
  formSection: {
    badge: "Direct Channels",
    titlePlain: "Connect With Our ",
    titleHighlight: "Billing Specialists",
    description:
      "We work closely with physicians, clinics, and hospital administrators across the nation to streamline practice revenue. Reach out directly or send us a message.",
    channels: [
      {
        iconName: "Phone",
        title: "Call Us Direct",
        details: "(888) 500-BILL / (888) 500-2455",
        subtext: "Toll-free customer support & consultation",
        href: "tel:8885002455",
      },
      {
        iconName: "Mail",
        title: "Email Inquiries",
        details: "info@bellmedex.com",
        subtext: "Guaranteed response within 1 business hour",
        href: "mailto:info@bellmedex.com",
      },
      {
        iconName: "MapPin",
        title: "Headquarters Address",
        details: "100 N Howard St, Ste R",
        subtext: "Spokane, WA 99201, United States",
        href: "https://maps.google.com/?q=100+N+Howard+St,+Spokane,+WA+99201",
      },
      {
        iconName: "Clock",
        title: "Operating Hours",
        details: "Monday – Friday: 8:00 AM – 6:00 PM EST",
        subtext: "24/7 client portal & emergency billing support",
        href: null,
      },
    ],
    guaranteeTitle: "Privacy & Security Guaranteed",
    guaranteeDescription:
      "All inquiries submitted through our portal are protected by HIPAA-compliant security standards and standard non-disclosure agreements.",
    formBadge: "Free Consultation & Inquiry",
    formTitlePlain: "Send Us a ",
    formTitleHighlight: "Message",
    formSubtitle:
      "Fill out the form below and an RCM consultant will reach out within 1 business hour.",
    serviceOptions: [
      { label: "Revenue Cycle Management (RCM)" },
      { label: "Medical Billing & Coding" },
      { label: "Provider Credentialing" },
      { label: "EDI Clearinghouse Integration" },
      { label: "Medical Billing Audit" },
      { label: "Free EHR / Practice Management" },
      { label: "General Inquiry / Support" },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions",
    titlePlain: "Got Questions Before ",
    titleHighlight: "Reaching Out?",
    description:
      "Find quick answers to common questions about our medical billing services, software integrations, and onboarding process.",
    faqs: [
      {
        q: "How quickly can BellMedEx onboard our medical practice?",
        a: "Our standard onboarding takes between 7 to 14 business days. We handle provider setup, clearinghouse EDI enrollment, and EHR/PMS integration with zero disruption to your daily operations.",
      },
      {
        q: "Does BellMedEx require long-term contracts?",
        a: "No. We believe in earning your trust every month through performance. We offer flexible, performance-driven service agreements designed to fit your practice size.",
      },
      {
        q: "Can you integrate with our existing EHR or Practice Management Software?",
        a: "Yes! BellMedEx integrates seamlessly with 50+ major EHR and PMS platforms including Epic, Cerner, eClinicalWorks, Kareo, AthenaHealth, Practice Fusion, and AdvancedMD.",
      },
      {
        q: "What medical specialties does BellMedEx support?",
        a: "We support over 50 medical specialties including Cardiology, Orthopedics, Mental Health, Family Medicine, Radiology, Internal Medicine, Pediatrics, Urgent Care, and Surgical Specialties.",
      },
      {
        q: "How does BellMedEx charge for revenue cycle services?",
        a: "Our pricing is transparent and performance-based—typically a small percentage of net revenue collected. You only pay when you get paid.",
      },
    ],
  },
  cta: {
    badge: "Partner With BellMedEx",
    title: "Ready to Boost Practice Revenue by Up to 35%?",
    description:
      "Schedule a free 1-on-1 consultation with our senior medical billing specialists today. We will analyze your practice claims data and show you how to eliminate rejections.",
    highlights: [
      { label: "Free Practice Billing Audit" },
      { label: "No Upfront Setup Fees" },
      { label: "100% HIPAA Compliant" },
    ],
    primaryBtnText: "Schedule Free Audit",
    primaryBtnLink: "/schedule-a-demo",
    phoneText: "(888) 500-2455",
    phoneLink: "tel:8885002455",
  },
};
