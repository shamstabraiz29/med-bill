"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import DenialManagementServicesHeroFeatures from "./DenialManagementServicesHeroFeatures";
import DenialManagementServicesHeroHeader from "./DenialManagementServicesHeroHeader";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHeroData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesHeroProps {
  data?: DenialManagementHeroData;
}

export default function DenialManagementServicesHero({ data }: DenialManagementServicesHeroProps) {
  const content = data || defaultDenialManagementServicesData.hero;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-hero-heading"
    >
      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <DenialManagementServicesHeroHeader
              headingId="denial-management-services-hero-heading"
              data={content}
            />

            <MotionWrapper variant="fadeUp" delay={0.15}>
              <AppButton
                href={content.buttonLink || "/schedule-a-demo"}
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto shadow-lg shadow-blue-600/15"
              >
                {content.buttonText || "Schedule A Call"}
              </AppButton>
            </MotionWrapper>
          </div>

          <MotionWrapper variant="slideRight" delay={0.15} className="lg:col-span-5 w-full">
            <DenialManagementServicesHeroFeatures data={content} />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

