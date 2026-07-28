import { ScheduleDemoPageData } from "@/payload/types/scheduleDemo";

export const defaultScheduleDemoData: ScheduleDemoPageData = {
  hero: {
    badge: "Claim Your Free Demo",
    titlePlain: "Claim Your ",
    titleHighlight: "Free Demo",
    description:
      "Practices achieve a record revenue growth of up to 30% in the first 90 days with BellMedEx. Schedule a free 1-on-1 consultation with our senior RCM specialists today.",
    highlights: [
      { label: "30% Average Revenue Increase" },
      { label: "1-on-1 Expert Consultation" },
      { label: "No Upfront Setup Fees" },
    ],
  },
  formSection: {
    badge: "Request a Call Back",
    titlePlain: "Request a ",
    titleHighlight: "Call Back",
    description:
      "Fill in the form below to lock in your preferred demo slot and see how we streamline medical billing for your practice.",
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
    submitBtnText: "SUBMIT DEMO REQUEST",
  },
};
