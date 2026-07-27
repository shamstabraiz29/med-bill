"use client";

import React from "react";
import { Gauge, LucideIcon, Phone, Settings } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  fusionediCardClassName,
  fusionediContainerClassName,
  fusionediSectionAltClassName,
} from "./fusionediSectionLayout";

interface FusionediStep {
  stepLabel: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const FUSIONEDI_STEPS: FusionediStep[] = [
  {
    stepLabel: "Step 1",
    icon: Phone,
    title: "Reach Out to Us",
    description:
      "We are all ears. Send us an email or ring us up, and let us know about your practice and the medical billing software you have.",
  },
  {
    stepLabel: "Step 2",
    icon: Settings,
    title: "Get FusionEDI Set UP",
    description:
      "Our expert will configure FusionEDI clearinghouse software and make it fit like a glove with your medical billing software.",
  },
  {
    stepLabel: "Step 3",
    icon: Gauge,
    title: "Enjoy Fast Claims",
    description:
      "FusionEDI will now start acting as a bridge between you and the payer, and ensure you get your fair share of the pie.",
  },
];

function FusionediStepCard({ step }: { step: FusionediStep }) {
  return (
    <div className={fusionediCardClassName}>
      <span className="mb-4 block text-[10px] font-bold uppercase tracking-widest text-blue-600">
        {step.stepLabel}
      </span>

      <IconWrapper
        icon={step.icon}
        size="md"
        variant="surface"
        className="mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
      />

      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {step.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:text-sm">
        {step.description}
      </p>
    </div>
  );
}

import { FusionediGetStartedStepsData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

const iconMap: Record<string, any> = {
  Phone,
  Settings,
  Gauge,
};

interface FusionediClearinghouseGetStartedStepsProps {
  data?: FusionediGetStartedStepsData;
}

export default function FusionediClearinghouseGetStartedSteps({ data }: FusionediClearinghouseGetStartedStepsProps) {
  const content = data || defaultFusionediClearinghouseData.getStartedSteps;
  const stepsList = content.steps && content.steps.length > 0 ? content.steps : defaultFusionediClearinghouseData.getStartedSteps.steps;

  return (
    <section
      className={fusionediSectionAltClassName}
      aria-labelledby="fusionedi-clearinghouse-get-started-heading"
    >
      <div className={fusionediContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl space-y-4 sm:mb-16"
          title={
            <span id="fusionedi-clearinghouse-get-started-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {stepsList.map((step, idx) => {
            const IconComponent = (step.iconName && iconMap[step.iconName]) || Phone;
            return (
              <MotionWrapper key={step.stepLabel || idx} variant="staggerItem" className="h-full">
                <FusionediStepCard
                  step={{
                    stepLabel: step.stepLabel,
                    icon: IconComponent,
                    title: step.title,
                    description: step.description,
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
