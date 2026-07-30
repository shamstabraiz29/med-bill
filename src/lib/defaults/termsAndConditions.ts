import { TermsAndConditionsData } from "@/payload/types/termsAndConditions";

export const defaultTermsAndConditionsData: TermsAndConditionsData = {
  seo: {
    metaTitle: "Terms & Conditions | BellMedEx Healthcare RCM",
    metaDescription: "Terms and conditions governing the use of BellMedEx website, services, and software applications.",
    keywords: "bellmedex terms, terms of service, legal conditions",
    canonicalUrl: "https://bellmedex.com/terms-and-conditions",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Terms & Conditions | BellMedEx Healthcare RCM",
      ogDescription: "Terms and conditions governing the use of BellMedEx website, services, and software applications.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/terms-and-conditions",
    },
  },
  hero: {
    badge: "Legal Agreement",
    titlePlain: "Terms & ",
    titleHighlight: "Conditions",
    description:
      "Please review the terms governing the use of BellMedEx medical billing services, software solutions, and website platforms.",
    effectiveDate: "July 2026",
  },
  sections: [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the BellMedEx website, client portal, medical billing software, or RCM consultation services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations governing healthcare services.",
    },
    {
      title: "2. Services Overview",
      content:
        "BellMedEx provides professional medical billing, medical coding, revenue cycle optimization, practice management software, clearinghouse integration, and provider credentialing services to healthcare organizations. Service scopes and fee schedules are specified in individual client service agreements.",
    },
    {
      title: "3. Provider Responsibilities & Accuracy of Claims",
      content:
        "Clients and medical providers are responsible for ensuring the accuracy, completeness, and clinical documentation of patient claim data provided to BellMedEx. Providers retain full legal responsibility for patient clinical care and compliant coding documentation.",
    },
    {
      title: "4. Intellectual Property Rights",
      content:
        "All software engines, website content, proprietary billing workflows, code structures, designs, graphics, and trademarks are the exclusive property of BellMedEx, Inc. Users may not copy, reverse-engineer, or redistribute proprietary assets without express written authorization.",
    },
    {
      title: "5. Service Availability & SLA Guarantee",
      content:
        "BellMedEx endeavors to maintain 99.9% uptime for cloud software platforms and electronic EDI clearinghouse connections. Scheduled maintenance windows will be communicated in advance whenever feasible.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall BellMedEx be liable for indirect, consequential, incidental, or special damages arising out of software usage or billing delays caused by incorrect documentation, payer downtime, or external clearinghouse interruptions.",
    },
    {
      title: "7. Governing Law & Dispute Resolution",
      content:
        "These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Washington and federal healthcare statutes. Any disputes shall be resolved through binding arbitration in accordance with AAA commercial rules.",
    },
  ],
  contactInfo: {
    heading: "Legal Inquiries",
    email: "legal@bellmedex.com",
    phone: "(888) 500-2455",
  },
};
