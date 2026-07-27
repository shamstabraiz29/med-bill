"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";

export default function PracticeManagementSoftwarePmsBalance() {
  return (
    <section
      className={pmsSectionClassName}
      aria-labelledby="practice-management-software-pms-balance-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="fadeUp">
          <SectionHeader
            align="center"
            className="mx-auto max-w-4xl space-y-4"
            title={
              <span id="practice-management-software-pms-balance-heading">
                Balance the{" "}
                <span className="font-bold text-blue-600">Art of Medicine</span> &amp; the
                Science of Business
              </span>
            }
            description="BellMedEx Practice Management Software helps you balance the art of medicine and the science of business, by providing you with the tools and resources you need to succeed."
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
