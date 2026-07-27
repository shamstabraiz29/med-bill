"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingPartnersSuccessProps {
  data?: typeof defaultMedicalBillingData.partnersSuccess;
}

export default function MedicalBillingPartnersSuccess({ data }: MedicalBillingPartnersSuccessProps) {
  const partnersData = data || defaultMedicalBillingData.partnersSuccess;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="partners-success-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          badge={partnersData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="partners-success-heading">
              {partnersData.titlePlain}{" "}
              <span className="font-bold text-blue-600">{partnersData.titleHighlight}</span>
            </span>
          }
          description={partnersData.description}
          className="mx-auto mb-12 max-w-3xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {partnersData.features.map((feature) => {
            const Icon = getIcon(feature.iconName);
            return (
              <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
                <Card className="group flex h-full flex-col rounded-2xl border border-[#E2E6EC] bg-white p-6 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8">
                  <CardContent className="flex h-full flex-col p-0 text-left">
                    <IconWrapper
                      icon={Icon}
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
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
