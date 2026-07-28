import { MedicalBillingPricingPageData } from "@/payload/types/medicalBillingPricing";

export const defaultMedicalBillingPricingData: MedicalBillingPricingPageData = {
  hero: {
    badge: "Unlock Pricing Details",
    titlePlain: "Drop Your Details to ",
    titleHighlight: "Unlock Pricing Details Now",
    description:
      "Get instant access to BellMedEx competitive medical billing rates starting as low as 2.49%. Flexible, performance-based pricing tailored to your practice size with zero hidden fees.",
    highlights: [
      { label: "100% Confidential & Secure" },
      { label: "No Setup Fees or Lock-in Contracts" },
      { label: "Instant Access via Email" },
    ],
  },
  unlockForm: {
    badge: "Instant Pricing Access",
    titlePlain: "Fill In To ",
    titleHighlight: "Unlock Pricing Plans",
    description:
      "Complete the short form below to view our custom pricing structures and receive a personalized fee schedule tailored to your practice.",
    roleOptions: [
      { label: "Solo Practitioner" },
      { label: "Group Practice (2-10 Physicians)" },
      { label: "Large Medical Group (10+ Physicians)" },
      { label: "Hospital / Health System" },
      { label: "Urgent Care Center" },
      { label: "Medical Billing Company / Partner" },
      { label: "Other Healthcare Entity" },
    ],
    collectionsOptions: [
      { label: "Under $25,000 / month" },
      { label: "$25,000 – $50,000 / month" },
      { label: "$50,000 – $100,000 / month" },
      { label: "$100,000 – $250,000 / month" },
      { label: "$250,000 – $500,000 / month" },
      { label: "$500,000+ / month" },
    ],
    submitBtnText: "UNLOCK PRICING NOW",
  },
};
