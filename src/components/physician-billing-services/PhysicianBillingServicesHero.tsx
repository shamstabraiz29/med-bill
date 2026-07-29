"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PhysicianBillingServicesHeroAccordion from "./PhysicianBillingServicesHeroAccordion";
import PhysicianBillingServicesHeroHeader from "./PhysicianBillingServicesHeroHeader";
import {
  physicianContainerClassName,
  physicianSectionClassName,
} from "./physicianSectionLayout";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";
import { Award } from "lucide-react";

interface PhysicianBillingServicesHeroProps {
  data?: PhysicianBillingServicesPageData["hero"];
}

export default function PhysicianBillingServicesHero({ data }: PhysicianBillingServicesHeroProps) {
  const content = data || defaultPhysicianBillingServicesData.hero;

  return (
    <section
      className={physicianSectionClassName}
      aria-labelledby="physician-billing-services-hero-heading"
    >
      <div className={`${physicianContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Header & Primary CTA Button */}
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <PhysicianBillingServicesHeroHeader headingId="physician-billing-services-hero-heading" data={content} />

            <MotionWrapper variant="fadeUp" className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <AppButton href={content.ctaHref || "/schedule-a-demo"} variant="primary" size="lg" showArrow className="shadow-lg shadow-blue-600/15">
                {content.ctaText || "Get A Demo"}
              </AppButton>
            </MotionWrapper>
          </div>

          {/* RIGHT COLUMN: Key FAQ & Highlights Card Box */}
          <MotionWrapper variant="slideRight" delay={0.15} className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-[#E2E6EC] bg-white/95 p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xs transition-all duration-300 hover:border-[#1D4ED8]/30">
              <div className="mb-5 flex items-center justify-between border-b border-[#E2E6EC] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Key Physician Billing Insights
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-[#1D4ED8] border border-blue-100">
                  <Award className="h-3.5 w-3.5" />
                  Expert Guidance
                </span>
              </div>

              <PhysicianBillingServicesHeroAccordion items={content.faqItems} />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

