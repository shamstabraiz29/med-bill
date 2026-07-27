"use client";

import React from "react";
import {
  LucideIcon,
  Plug,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import {
  fusionediCardClassName,
  fusionediContainerClassName,
} from "./fusionediSectionLayout";

interface FusionediSolution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FUSIONEDI_SOLUTIONS: FusionediSolution[] = [
  {
    icon: Send,
    title: "Fast Claim Submission",
    description: "Your claims are sent to the payers within 24 hours.",
  },
  {
    icon: UserCheck,
    title: "Instant Eligibility Check",
    description:
      "Advanced algorithms verify the patient's insurance coverage in a few seconds.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description: "Compatible with all medical billing systems.",
  },
  {
    icon: ShieldCheck,
    title: "Claim Quality Control",
    description:
      "Our software performs the QC of claims to prevent possible denials.",
  },
];

function FusionediSolutionCard({ solution }: { solution: FusionediSolution }) {
  return (
    <div className={cn(fusionediCardClassName, "h-full items-center text-center")}>
      <IconWrapper
        icon={solution.icon}
        size="md"
        variant="surface"
        className="mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
      />

      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {solution.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:text-sm">
        {solution.description}
      </p>
    </div>
  );
}

import { FusionediSolutionsData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

const iconMap: Record<string, any> = {
  Send,
  UserCheck,
  Plug,
  ShieldCheck,
};

interface FusionediClearinghouseSolutionsProps {
  data?: FusionediSolutionsData;
}

export default function FusionediClearinghouseSolutions({ data }: FusionediClearinghouseSolutionsProps) {
  const content = data || defaultFusionediClearinghouseData.solutions;
  const solutionsList = content.solutions && content.solutions.length > 0 ? content.solutions : defaultFusionediClearinghouseData.solutions.solutions;

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="fusionedi-clearinghouse-solutions-heading"
    >
      <div className="relative bg-[#0F172A] pt-16 pb-28 sm:pt-20 sm:pb-32 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_40%)]"
        />

        <div className={`${fusionediContainerClassName} relative z-10 text-center text-white`}>
          <div className="mb-4 flex justify-center sm:mb-5">
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>
          </div>

          <h2
            id="fusionedi-clearinghouse-solutions-heading"
            className="mx-auto max-w-4xl text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
          >
            {content.titlePlain}{" "}
            <span className="font-bold text-amber-300">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.6] text-blue-200 sm:mt-5 sm:text-base">
            {content.subtitle}
          </p>
        </div>
      </div>

      <div
        className={`${fusionediContainerClassName} relative z-10 -mt-20 pb-16 sm:-mt-24 sm:pb-20 lg:-mt-28 lg:pb-24`}
      >
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {solutionsList.map((solution, idx) => {
            const IconComponent = (solution.iconName && iconMap[solution.iconName]) || Send;
            return (
              <MotionWrapper key={solution.title || idx} variant="staggerItem" className="h-full">
                <FusionediSolutionCard
                  solution={{
                    icon: IconComponent,
                    title: solution.title,
                    description: solution.description,
                  }}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
