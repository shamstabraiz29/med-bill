"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import {
  physicianContainerClassName,
  physicianSectionBlockClassName,
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
      className={`${physicianSectionBlockClassName} border-t border-[#E2E6EC] bg-[#0F172A] py-16 sm:py-20 lg:py-24`}
      aria-labelledby="physician-billing-demo-cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_40%)]"
      />

      <div className={`${physicianContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <PhysicianBillingServicesDemoForm />

          <div className="flex flex-col items-start space-y-6 text-left text-white lg:pl-4">
            <p className="text-sm text-blue-200 sm:text-base">{content.rateLabel}</p>

            <p
              id="physician-billing-demo-cta-heading"
              className="text-5xl font-extrabold leading-none tracking-[-0.03em] text-amber-300 sm:text-6xl lg:text-7xl"
            >
              {content.rateValue}
            </p>

            <p className="text-sm text-blue-200 sm:text-base">{content.rateSubtext}</p>

            <div className="w-full max-w-xs border-t border-white/15 pt-6">
              <AppButton href={content.buttonHref || "/schedule-a-demo"} variant="secondary-dark" size="lg" showArrow>
                {content.buttonText || "Take Advantage Now!"}
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
