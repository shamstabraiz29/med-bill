"use client";

import React from "react";
import {
  BriefcaseMedical,
  FileBarChart,
  LucideIcon,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  ehrCardClassName,
  ehrContainerClassName,
  ehrSectionClassName,
} from "./ehrSectionLayout";

interface EhrBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const EHR_BENEFITS: EhrBenefit[] = [
  {
    icon: SlidersHorizontal,
    title: "Scale As You Need",
    description:
      "Customize and scale your EHR software according to your changing needs and growth. Whether you have a small practice or a large network, you can always rely on our free EHR Software to deliver optimal performance and functionality.",
  },
  {
    icon: FileBarChart,
    title: "Gain Valuable Insights",
    description:
      "Analyze and report your data from various sources and generate insights for improving your clinical, operational, and financial performance. Identify trends, patterns, gaps, risks, and opportunities for improvement with this online EHR software.",
  },
  {
    icon: BriefcaseMedical,
    title: "Meet Your Specialty Needs",
    description:
      "Tailor your EHR software to your specific specialty needs and preferences. Whether you are a cardiologist, dermatologist, dentist, or any other specialty, you can find the features and workflows that suit your practice best.",
  },
];

function EhrBenefitCard({ benefit }: { benefit: EhrBenefit }) {
  return (
    <div
      className={cn(
        ehrCardClassName,
        "items-center text-center"
      )}
    >
      <IconWrapper
        icon={benefit.icon}
        size="md"
        variant="surface"
        className="mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
      />

      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {benefit.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:mt-4 sm:text-sm">
        {benefit.description}
      </p>
    </div>
  );
}

export default function ElectronicHealthRecordsEhrBenefits() {
  return (
    <section
      className={ehrSectionClassName}
      aria-labelledby="electronic-health-records-ehr-benefits-heading"
    >
      <div className={ehrContainerClassName}>
        <h2 id="electronic-health-records-ehr-benefits-heading" className="sr-only">
          EHR software benefits
        </h2>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {EHR_BENEFITS.map((benefit) => (
            <MotionWrapper key={benefit.title} variant="staggerItem" className="h-full">
              <EhrBenefitCard benefit={benefit} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
