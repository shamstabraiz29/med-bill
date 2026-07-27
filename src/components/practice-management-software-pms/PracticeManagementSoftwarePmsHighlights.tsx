"use client";

import React from "react";
import { Cloud, Headphones, Layers, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsCardClassName, pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsHighlightsData } from "@/payload/types/practiceManagementSoftwarePms";

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  Headphones,
  Layers,
};

interface PracticeManagementSoftwarePmsHighlightsProps {
  data?: PmsHighlightsData;
}

export default function PracticeManagementSoftwarePmsHighlights({ data }: PracticeManagementSoftwarePmsHighlightsProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.highlights;
  const highlightsList = content.highlights && content.highlights.length > 0 ? content.highlights : defaultPracticeManagementSoftwarePmsData.highlights.highlights;

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
          {highlightsList.map((highlight, idx) => {
            const Icon = (highlight.iconName && ICON_MAP[highlight.iconName]) || Cloud;

            return (
              <MotionWrapper key={highlight.title || idx} variant="staggerItem" className="h-full">
                <div className={cn(pmsCardClassName, "items-center text-center")}>
                  <IconWrapper
                    icon={Icon}
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
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
