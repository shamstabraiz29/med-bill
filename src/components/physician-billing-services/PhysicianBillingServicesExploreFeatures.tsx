"use client";

import React from "react";
import {
  BarChart3,
  ClipboardList,
  CreditCard,
  FileText,
  LucideIcon,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  physicianContainerClassName,
  physicianSectionBlockClassName,
} from "./physicianSectionLayout";

interface ExploreFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const EXPLORE_FEATURES: ExploreFeature[] = [
  {
    icon: ShieldCheck,
    title: "Insurance Verification + Eligibility Check",
    description:
      "We investigate coverage details upfront so you can deliver care with confidence and receive accurate reimbursement without last-minute surprises.",
  },
  {
    icon: ClipboardList,
    title: "Charge Entry Support",
    description:
      "We capture every service, diagnosis, and code correctly to stop leaky billing operations and help your practice keep more of what it earns.",
  },
  {
    icon: RefreshCw,
    title: "AR Follow-Up (Accounts Receivable)",
    description:
      "Our team follows up on unpaid claims, reverses denials, and resolves underpayments so aged accounts receivable do not drain your revenue.",
  },
  {
    icon: CreditCard,
    title: "Payment Posting",
    description:
      "Payments from insurers and patients are posted accurately, balances are updated automatically, and your financial records stay organized.",
  },
  {
    icon: FileText,
    title: "Patient Billing and Collections",
    description:
      "We manage patient accounts end to end, including statements, payment plans, and follow-up on outstanding balances for timely collections.",
  },
  {
    icon: BarChart3,
    title: "Reporting and Analytics",
    description:
      "Clear reports reveal billing trends, performance gaps, and opportunities to improve collections and grow practice revenue.",
  },
];

function ExploreFeatureCard({ feature }: { feature: ExploreFeature }) {
  return (
    <div className="h-full rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-7">
      <IconWrapper icon={feature.icon} size="md" variant="surface" className="mb-4" />
      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-[1.65] text-[#475569]">{feature.description}</p>
    </div>
  );
}

export default function PhysicianBillingServicesExploreFeatures() {
  return (
    <section
      className={`${physicianSectionBlockClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="physician-billing-explore-features-heading"
    >
      <div className={physicianContainerClassName}>
        <SectionHeader
          badge="Physician Billing Features."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="physician-billing-explore-features-heading">
              Explore More <span className="text-blue-600">Features</span>
            </span>
          }
          description="BellMedEx Physician Billing Services Company supports physician practices with reliable billing workflows across verification, charge entry, collections, and reporting."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {EXPLORE_FEATURES.map((feature) => (
            <ExploreFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
