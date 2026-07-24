"use client";

import React from "react";
import { Globe, Headphones, Network, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";

interface PartnerFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PARTNER_FEATURES: PartnerFeature[] = [
  {
    icon: Headphones,
    title: "24/7 Medical Billers Support",
    description:
      "Our dedicated account managers are available 24/7 to provide you with personal attention and support. They work with you to ensure that your claims are processed correctly and on time.",
  },
  {
    icon: Globe,
    title: "Out of State Medicaid Billing",
    description:
      "We understand the complexities of billing out-of-state Medicaid. And can help you navigate the process to ensure you get paid. We have experience billing out-of-state Medicaid for specialties like family medicine, pediatrics, and oncology.",
  },
  {
    icon: Network,
    title: "Clearinghouse Support",
    description:
      "Our medical coding consultants have engineered a high-performance clearinghouse connecting seamlessly to top insurers such as Aetna, UnitedHealthcare, and Blue Cross Blue Shield. This direct integration empowers rapid claim submission and prompt reimbursement, fueling your revenue cycle efficiency.",
  },
];

export default function MedicalBillingPartnersSuccess() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="partners-success-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          badge="Partners in Success"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="partners-success-heading">
              We&apos;re your{" "}
              <span className="font-bold text-blue-600">partners in success.</span>
            </span>
          }
          description="BellMedEx is here to help you achieve practice success. Our billing experts have deep knowledge of the medical billing and coding regulations for all specialties, and we use the latest technology to ensure accurate claim processing with quick payments."
          className="mx-auto mb-12 max-w-3xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {PARTNER_FEATURES.map((feature) => (
            <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
              <Card className="group flex h-full flex-col rounded-2xl border border-[#E2E6EC] bg-white p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8">
                <CardContent className="flex h-full flex-col p-0 text-left">
                  <IconWrapper
                    icon={feature.icon}
                    size="md"
                    variant="surface"
                    className="mb-5 transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="mb-3 text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A]">
                    {feature.title}
                  </h3>

                  <p className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
