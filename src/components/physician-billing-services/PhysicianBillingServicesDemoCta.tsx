"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
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
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="physician-billing-demo-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              <PhysicianBillingServicesDemoForm />

              <div
                className="flex h-full flex-col items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 text-center sm:p-10"
              >
                <p className="text-sm font-medium text-blue-200 sm:text-base">
                  {content.rateLabel}
                </p>

                <p
                  id="physician-billing-demo-cta-heading"
                  className="mt-3 text-5xl font-extrabold leading-none tracking-[-0.03em] text-amber-300 sm:text-6xl"
                >
                  {content.rateValue}
                </p>

                <p className="mt-3 text-sm text-blue-200 sm:text-base">{content.rateSubtext}</p>

                <div className="mt-8 w-full max-w-xs border-t border-white/10 pt-8">
                  <AppButton
                    href={content.buttonHref || "/schedule-a-demo"}
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                    className="w-full"
                  >
                    {content.buttonText || "Take Advantage Now!"}
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

