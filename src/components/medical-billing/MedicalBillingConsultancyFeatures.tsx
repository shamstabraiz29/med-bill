"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultancyFeatureCard from "./BillingConsultancyFeatureCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingConsultancyFeaturesProps {
  data?: typeof defaultMedicalBillingData.consultancyFeatures;
}

export default function MedicalBillingConsultancyFeatures({ data }: MedicalBillingConsultancyFeaturesProps) {
  const featuresData = data || defaultMedicalBillingData.consultancyFeatures;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="consultancy-features-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge={featuresData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="consultancy-features-heading">
              {featuresData.titlePlain}{" "}
              <span className="font-bold text-blue-600">
                {featuresData.titleHighlight}
              </span>
            </span>
          }
          className="mb-10 mx-auto max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {featuresData.features.map((feature, idx) => {
            const Icon = getIcon(feature.iconName);
            return (
              <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
                <BillingConsultancyFeatureCard
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                  index={idx}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
