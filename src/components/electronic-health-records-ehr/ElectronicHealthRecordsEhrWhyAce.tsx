"use client";

import React from "react";
import Image from "next/image";
import { Cloud, Headphones, LucideIcon, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ehrContainerClassName,
  ehrSectionAltClassName,
} from "./ehrSectionLayout";

interface WhyAceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WHY_ACE_FEATURES: WhyAceFeature[] = [
  {
    title: "Cloud Based",
    description:
      "Access your EHR software anytime, anywhere, on any device.",
    icon: Cloud,
  },
  {
    title: "Fast Support",
    description:
      "Get help from our friendly support team whenever you need it.",
    icon: Headphones,
  },
  {
    title: "Automatic Updates",
    description:
      "We keep your software up to date with the latest billing standards.",
    icon: RefreshCw,
  },
];

function WhyAceFeatureItem({
  feature,
  isLast,
}: {
  feature: WhyAceFeature;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-5 sm:gap-6">
      <div className="relative flex w-11 shrink-0 self-stretch justify-start">
        <IconWrapper icon={feature.icon} size="md" variant="primary" />
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-11 bottom-0 w-px -translate-x-1/2 bg-[#E2E6EC]"
          />
        )}
      </div>

      <div className={cn("pb-8 sm:pb-10", isLast && "pb-0")}>
        <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
          {feature.title}
        </h3>
        <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function ElectronicHealthRecordsEhrWhyAce() {
  return (
    <section
      className={ehrSectionAltClassName}
      aria-labelledby="electronic-health-records-ehr-why-ace-heading"
    >
      <div className={ehrContainerClassName}>
        <SectionHeader
          align="center"
          className="mb-12 sm:mb-16 max-w-4xl"
          title={
            <span id="electronic-health-records-ehr-why-ace-heading">
              Why do we ace the{" "}
              <span className="text-blue-600">EHR Software</span> race?
            </span>
          }
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideRight">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:aspect-16/11">
              <Image
                src="/consultants-laptop.png"
                alt="Healthcare provider using BellMedEx EHR software on a laptop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" delay={0.1}>
            <div role="list" className="max-w-xl lg:max-w-none">
              {WHY_ACE_FEATURES.map((feature, index) => (
                <div key={feature.title} role="listitem">
                  <WhyAceFeatureItem
                    feature={feature}
                    isLast={index === WHY_ACE_FEATURES.length - 1}
                  />
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
