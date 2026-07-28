import { CookiesPolicyData } from "@/payload/types/cookiesPolicy";

export const defaultCookiesPolicyData: CookiesPolicyData = {
  hero: {
    badge: "Web Technology & Security",
    titlePlain: "BellMedEx ",
    titleHighlight: "Cookies Policy",
    description:
      "Explaining how cookies and session technologies maintain portal security, data integrity, and system performance.",
    lastUpdated: "July 2026",
  },
  sections: [
    {
      title: "1. What Are Cookies?",
      content:
        "Cookies are small text files placed on your device by websites and web applications you visit. They are widely used to make web portals function securely, store session preferences, and provide analytics on user navigation.",
    },
    {
      title: "2. How BellMedEx Uses Cookies",
      content:
        "BellMedEx uses strictly necessary cookies to verify authorized provider portal logins, maintain secure active user sessions, enforce multi-factor authentication (MFA), and protect healthcare data. We also use performance cookies to monitor site speed and uptime.",
    },
    {
      title: "3. Categories of Cookies We Use",
      types: [
        {
          name: "Strictly Necessary Cookies",
          desc: "Required for core portal security, user authentication, session state, and HIPAA-compliant data routing.",
        },
        {
          name: "Functional Cookies",
          desc: "Remember user preferences such as selected practice view, dashboard filters, and notification settings.",
        },
        {
          name: "Analytics & Performance Cookies",
          desc: "Help us measure portal performance, load times, and usage patterns to optimize operational reliability.",
        },
      ],
    },
    {
      title: "4. Managing & Disabling Cookies",
      content:
        "You can control or disable cookies through your browser settings. However, please note that disabling strictly necessary cookies will prevent login access to the secure BellMedEx client portal and billing dashboards.",
    },
    {
      title: "5. Policy Revisions",
      content:
        "BellMedEx may update this Cookies Policy periodically to align with technical changes or browser security requirements. We encourage users to review this page periodically.",
    },
  ],
  contactInfo: {
    heading: "Cookie Settings & Inquiries",
    email: "support@bellmedex.com",
    phone: "(888) 500-2455",
  },
};
