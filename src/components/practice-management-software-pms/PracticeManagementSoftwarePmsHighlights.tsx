"use client";

import React from "react";
import { Cloud, Headphones, Layers, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsCardClassName, pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";

interface PmsHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PMS_HIGHLIGHTS: PmsHighlight[] = [
  {
    icon: Cloud,
    title: "Cloud Based",
    description:
      "Access your practice management software anytime, anywhere, on any device. Secure cloud hosting keeps your team connected whether you are in the office, at home, or on the go.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "Get help from our friendly support team whenever you need it. From onboarding and training to day-to-day troubleshooting, we are here before, during, and after implementation.",
  },
  {
    icon: Layers,
    title: "Scalable Solution",
    description:
      "Customize and scale your PMS as your practice grows. Whether you are a solo provider or a multi-location network, BellMedEx adapts to your workflows without forcing a platform change.",
  },
];

function PmsHighlightCard({ highlight }: { highlight: PmsHighlight }) {
  return (
    <div className={cn(pmsCardClassName, "items-center text-center")}>
      <IconWrapper
        icon={highlight.icon}
        size="md"
        variant="surface"
        className="mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
      />

      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {highlight.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:mt-4 sm:text-sm">
        {highlight.description}
      </p>
    </div>
  );
}

export default function PracticeManagementSoftwarePmsHighlights() {
  return (
    <section
      className={pmsSectionAltClassName}
      aria-labelledby="practice-management-software-pms-highlights-heading"
    >
      <div className={pmsContainerClassName}>
        <h2 id="practice-management-software-pms-highlights-heading" className="sr-only">
          Practice management software highlights
        </h2>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PMS_HIGHLIGHTS.map((highlight) => (
            <MotionWrapper key={highlight.title} variant="staggerItem" className="h-full">
              <PmsHighlightCard highlight={highlight} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
