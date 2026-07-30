"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import HospitalBillingServicesHeroHeader from "./HospitalBillingServicesHeroHeader";
import HospitalBillingServicesHeroStats from "./HospitalBillingServicesHeroStats";
import {
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingServicesHeroData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesHeroProps {
  data?: HospitalBillingServicesHeroData;
}

export default function HospitalBillingServicesHero({ data }: HospitalBillingServicesHeroProps) {
  const content = data || defaultHospitalBillingServicesData.hero;

  return (
    <section
      className={hospitalSectionClassName}
      aria-labelledby="hospital-billing-services-hero-heading"
    >
      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <HospitalBillingServicesHeroHeader
              headingId="hospital-billing-services-hero-heading"
              data={content}
            />

            <MotionWrapper variant="fadeUp" delay={0.15}>
              <AppButton
                href={content.ctaHref || "/contact-us"}
                variant="primary"
                size="lg"
                showArrow
                className="w-full shadow-lg shadow-blue-600/15 sm:w-auto"
              >
                {content.ctaText || "Contact Us"}
              </AppButton>
            </MotionWrapper>
          </div>

          <div className="w-full lg:col-span-5">
            <HospitalBillingServicesHeroStats data={content} />
          </div>
        </div>
      </div>
    </section>
  );
}
