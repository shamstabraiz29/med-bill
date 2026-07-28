"use client";

import React from "react";
import { cn } from "@/lib/utils";
import PhysicianBillingServicesSplitRow from "./PhysicianBillingServicesSplitRow";
import {
  physicianSectionAltClassName,
  physicianSectionBlockClassName,
} from "./physicianSectionLayout";

const SPLIT_SECTIONS = [
  {
    badge: "Physician Billing Company.",
    headingId: "physician-billing-trust-heading",
    heading: (
      <>
        The Physician Billing Company You Can{" "}
        <span className="text-blue-600">Trust</span>
      </>
    ),
    paragraphs: [
      "Physician billing is a maze of rules, codes, and payer requirements that change constantly. Without the right systems and expertise, practices lose time and money on rejected claims and delayed reimbursements.",
      "BellMedEx combines intelligent billing software with certified expert billers to reduce your administrative stress, improve clean-claim rates, and boost revenue—so you can focus on patient care.",
    ],
    imageSrc: "/consultants-laptop.png",
    imageAlt: "Medical billing specialist reviewing physician billing workflows on a laptop",
    ctaLabel: "Outsource Your Billing",
    ctaHref: "/outsource-medical-billing",
    imagePosition: "left" as const,
    sectionClassName: cn(physicianSectionBlockClassName, "border-t border-[#E2E6EC]"),
  },
  {
    badge: "Claims & Reimbursement.",
    headingId: "physician-billing-claims-heading",
    heading: (
      <>
        Billing Experts for Physician{" "}
        <span className="text-blue-600">Claims Filing &amp; Reimbursement</span>
      </>
    ),
    paragraphs: [
      "Late payments and rejected claims drain practice revenue and create uncertainty for your team. Every denied claim represents money left on the table.",
      "Our team manages the full physician billing cycle with 99%+ precision—from eligibility verification and coding to claim submission, payment posting, and follow-up—so reimbursements arrive faster.",
    ],
    imageSrc: "/rcm-card-billing.png",
    imageAlt: "Physician claim form and billing workflow on a tablet",
    ctaLabel: "Get Started",
    ctaHref: "/schedule-a-demo",
    secondaryLink: {
      label: "Download Physician CMS Form Guide",
      href: "/schedule-a-demo",
    },
    imagePosition: "right" as const,
    sectionClassName: physicianSectionAltClassName,
  },
  {
    badge: "RCM Support.",
    headingId: "physician-billing-rcm-heading",
    heading: (
      <>
        Gain Financial Peace of Mind with Our{" "}
        <span className="text-blue-600">RCM Support</span>
      </>
    ),
    paragraphs: [
      "Revenue cycle management touches every part of your practice's financial health. Gaps in billing workflows silently erode collections and cash flow.",
      "BellMedEx RCM support uses data-driven technology and dedicated billing specialists to capture lost revenue, streamline operations, and give you clear visibility into your practice's financial performance.",
    ],
    imageSrc: "/rcm-dashboard-laptop1.png",
    imageAlt: "Revenue cycle management dashboard showing physician practice analytics",
    ctaLabel: "Improve Your Revenue",
    ctaHref: "/schedule-a-demo",
    imagePosition: "left" as const,
    sectionClassName: cn(physicianSectionBlockClassName, "border-t border-[#E2E6EC]"),
  },
];

export default function PhysicianBillingServicesSplitSections() {
  return (
    <>
      {SPLIT_SECTIONS.map((section) => (
        <PhysicianBillingServicesSplitRow key={section.headingId} {...section} />
      ))}
    </>
  );
}
