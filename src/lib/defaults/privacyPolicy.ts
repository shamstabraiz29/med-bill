import { PrivacyPolicyData } from "@/payload/types/privacyPolicy";

export const defaultPrivacyPolicyData: PrivacyPolicyData = {
  seo: {
    metaTitle: "Privacy Policy | BellMedEx Healthcare RCM",
    metaDescription: "BellMedEx Privacy Policy detailing how we collect, protect, and process user information and healthcare data.",
    keywords: "bellmedex privacy policy, data privacy, HIPAA compliance",
    canonicalUrl: "https://bellmedex.com/privacy-policy",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Privacy Policy | BellMedEx Healthcare RCM",
      ogDescription: "BellMedEx Privacy Policy detailing how we collect, protect, and process user information and healthcare data.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/privacy-policy",
    },
  },
  hero: {
    badge: "HIPAA & Data Protection",
    titlePlain: "BellMedEx ",
    titleHighlight: "Privacy Policy",
    description:
      "We are committed to safeguarding healthcare data, maintaining strict HIPAA compliance, and protecting provider and patient privacy.",
    lastUpdated: "July 2026",
  },
  sections: [
    {
      title: "1. Information We Collect",
      content:
        "BellMedEx collects information to provide efficient revenue cycle management, medical billing, and practice management services. This includes personal identifiers (such as name, email address, phone number), practice metadata, and protected health information (PHI) submitted strictly under Business Associate Agreements (BAAs) in accordance with HIPAA rules.",
    },
    {
      title: "2. How We Use Information",
      content:
        "Information collected is utilized exclusively to deliver billing audits, claims processing, provider credentialing, EHR integrations, and practice performance reporting. We do not sell, rent, or trade personal data or PHI to third parties for marketing purposes.",
    },
    {
      title: "3. HIPAA Compliance & Protected Health Information (PHI)",
      content:
        "As a Business Associate to covered entities under HIPAA regulations, BellMedEx enforces stringent administrative, physical, and technical safeguards. All electronic PHI (ePHI) is encrypted at rest using AES 256-bit encryption and in transit via TLS 1.3 protocol standards.",
    },
    {
      title: "4. Information Sharing & Third-Party Vendors",
      content:
        "We share data only with authorized clearinghouses, insurance payers, and secure technology partners necessary to execute claims processing and billing operations on your behalf, or as mandated by federal and state laws.",
    },
    {
      title: "5. Data Security & Storage",
      content:
        "BellMedEx maintains SOC 2 Type II compliant cloud infrastructure with 24/7 continuous security monitoring, role-based access control (RBAC), multi-factor authentication (MFA), and automated backup recovery systems.",
    },
    {
      title: "6. Your Privacy Rights & Choices",
      content:
        "Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal information. To submit a privacy request, please contact our Privacy Office at privacy@bellmedex.com or call (888) 500-2455.",
    },
    {
      title: "7. Updates to This Policy",
      content:
        "We may update this Privacy Policy periodically to reflect changes in regulatory standards or service offerings. Any revisions will be published on this page with an updated effective date.",
    },
  ],
  contactInfo: {
    heading: "Questions Regarding Privacy?",
    email: "privacy@bellmedex.com",
    phone: "(888) 500-2455",
  },
};
