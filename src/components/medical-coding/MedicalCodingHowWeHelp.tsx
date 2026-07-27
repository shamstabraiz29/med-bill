"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingHelpCard from "./MedicalCodingHelpCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingHowWeHelpProps {
  data?: typeof defaultMedicalCodingData.howWeHelp;
}

export default function MedicalCodingHowWeHelp({ data }: MedicalCodingHowWeHelpProps) {
  const helpData = data || defaultMedicalCodingData.howWeHelp;

  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-how-we-help-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={helpData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-how-we-help-heading">
              {helpData.titlePlain}{" "}
              <span className="font-bold text-blue-600">
                {helpData.titleHighlight}
              </span>{" "}
              {helpData.titleSuffix}
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="relative grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1D4ED8]/20 to-transparent lg:block"
            aria-hidden="true"
          />

          {helpData.steps.map((step, index) => {
            const Icon = getIcon(step.iconName);
            return (
              <MotionWrapper
                key={step.title}
                variant="staggerItem"
                className={`h-full ${step.layoutClass || ""}`}
              >
                <MedicalCodingHelpCard
                  step={index + 1}
                  icon={Icon}
                  title={step.title}
                  description={step.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
