"use client";

import React from "react";
import {
  Award,
  Calendar,
  CreditCard,
  Receipt,
  Settings2,
  TrendingUp,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { softwareContainerClassName } from "./softwareSectionLayout";
import { MedicalBillingSoftwareSignUpCtaData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

const iconMap: Record<string, any> = {
  Receipt,
  Calendar,
  CreditCard,
  TrendingUp,
  Award,
  Settings2,
};

interface MedicalBillingSoftwareSignUpCtaProps {
  data?: MedicalBillingSoftwareSignUpCtaData;
}

export default function MedicalBillingSoftwareSignUpCta({ data }: MedicalBillingSoftwareSignUpCtaProps) {
  const content = data || defaultMedicalBillingSoftwareData.signUpCta;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultMedicalBillingSoftwareData.signUpCta.features;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="medical-billing-software-signup-cta-heading"
    >
      <div className={softwareContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            {/* Top Row: Copy & CTA Button */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
              <div className="max-w-3xl text-left space-y-3.5">
                <SectionBadge variant="dark">
                  {content.badge || "MEDICAL BILLING SOFTWARE"}
                </SectionBadge>

                <h2
                  id="medical-billing-software-signup-cta-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug"
                >
                  {content.titlePlain}{" "}
                  <span className="text-amber-300 font-bold">{content.titleHighlight}</span>
                </h2>

                <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                  {content.subtitle || "Transform your practice billing with our intuitive medical billing software. Zero upfront costs, 100% HIPAA compliant, and instant setup."}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-start lg:items-center justify-start lg:justify-end">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {content.buttonText || "Get Started For Free"}
                </AppButton>
              </div>
            </div>

            {/* Features / Highlights Grid */}
            {featuresList.length > 0 && (
              <>
                <div className="w-full border-t border-white/10 my-8 sm:my-10" />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
                  {featuresList.map((feature, idx) => {
                    const Icon = (feature.iconName && iconMap[feature.iconName]) || Receipt;

                    return (
                      <div
                        key={feature.label || idx}
                        className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 transition-colors duration-200 hover:bg-white/[0.08] sm:px-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
