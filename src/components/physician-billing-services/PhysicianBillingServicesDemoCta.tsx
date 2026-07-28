"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  physicianCardClassName,
  physicianContainerClassName,
  physicianSectionAltClassName,
} from "./physicianSectionLayout";
import PhysicianBillingServicesDemoForm from "./PhysicianBillingServicesDemoForm";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

interface PhysicianBillingServicesDemoCtaProps {
  data?: PhysicianBillingServicesPageData["demoCta"];
}

export default function PhysicianBillingServicesDemoCta({ data }: PhysicianBillingServicesDemoCtaProps) {
  const content = data || defaultPhysicianBillingServicesData.demoCta;

  return (
    <section
      className={physicianSectionAltClassName}
      aria-labelledby="physician-billing-demo-cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-25"
      />

      <div className={`${physicianContainerClassName} relative z-10`}>
        <MotionWrapper variant="fadeUp">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <PhysicianBillingServicesDemoForm />

            <div
              className={`${physicianCardClassName} flex h-full flex-col items-center justify-center p-8 text-center sm:p-10`}
            >
              <p className="text-sm font-medium text-[#475569] sm:text-base">
                {content.rateLabel}
              </p>

              <p
                id="physician-billing-demo-cta-heading"
                className="mt-3 text-5xl font-extrabold leading-none tracking-[-0.03em] text-[#1D4ED8] sm:text-6xl"
              >
                {content.rateValue}
              </p>

              <p className="mt-3 text-sm text-[#475569] sm:text-base">{content.rateSubtext}</p>

              <div className="mt-8 w-full max-w-xs border-t border-[#E2E6EC] pt-8">
                <AppButton
                  href={content.buttonHref || "/schedule-a-demo"}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full"
                >
                  {content.buttonText || "Take Advantage Now!"}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
