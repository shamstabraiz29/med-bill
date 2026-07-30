"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultancyStatCard from "./BillingConsultancyStatCard";
import BillingConsultancyFeatureBlock from "./BillingConsultancyFeatureBlock";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingConsultancyBenefitsProps {
  data?: typeof defaultMedicalBillingData.consultancyBenefits;
}

export default function MedicalBillingConsultancyBenefits({ data }: MedicalBillingConsultancyBenefitsProps) {
  const benefitsData = data || defaultMedicalBillingData.consultancyBenefits;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="consultancy-benefits-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge={benefitsData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="consultancy-benefits-heading">
              {benefitsData.titlePlain}{" "}
              <span className="font-bold text-blue-600">{benefitsData.titleHighlight}</span>
            </span>
          }
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <MotionWrapper variant="fadeUp" className="space-y-8 sm:space-y-10">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {benefitsData.stats.map((stat, idx) => {
              const Icon = getIcon(stat.iconName);
              return (
                <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                  <BillingConsultancyStatCard
                    icon={Icon}
                    value={stat.value}
                    label={stat.label}
                  />
                </MotionWrapper>
              );
            })}
          </MotionWrapper>

          <BillingConsultancyFeatureBlock
            imageSrc={benefitsData.blockImageSrc}
            imageAlt={benefitsData.blockImageAlt || "BellMedEx billing consultant reviewing clinic revenue cycle analytics"}
            description={benefitsData.blockDescription}
            ctaLabel={benefitsData.blockCtaLabel}
            ctaHref={benefitsData.blockCtaHref}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
