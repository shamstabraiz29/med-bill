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

export default function FusionediClearinghouseGetStartedSteps() {
  return (
    <section
      className={fusionediSectionAltClassName}
      aria-labelledby="fusionedi-clearinghouse-get-started-heading"
    >
      <div className={fusionediContainerClassName}>
        <SectionHeader
          badge="Get Started for Free."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl space-y-4 sm:mb-16"
          title={
            <span id="fusionedi-clearinghouse-get-started-heading">
              Get Started for Free in{" "}
              <span className="text-blue-600">3 Easy Steps</span>
            </span>
          }
          description={
            <>
              Our software is the most affordable EDI solution for healthcare.
              <br className="hidden sm:inline" /> It&apos;s free to use and has no
              hidden fees.
            </>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {FUSIONEDI_STEPS.map((step) => (
            <MotionWrapper key={step.stepLabel} variant="staggerItem" className="h-full">
              <FusionediStepCard step={step} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
