"use client";

import React from "react";
import {
  BadgeCheck,
  ClipboardList,
  FileCode2,
  LucideIcon,
  Receipt,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingHelpCard from "./MedicalCodingHelpCard";

interface HelpStep {
  icon: LucideIcon;
  title: string;
  description: string;
  layoutClass: string;
}

const HELP_STEPS: HelpStep[] = [
  {
    icon: ClipboardList,
    title: "Clinical Statement Analysis",
    description:
      "Our coders carefully analyze medical statements and documentation provided by healthcare providers. They classify this information using standardized classifications.",
    layoutClass: "lg:col-span-5",
  },
  {
    icon: FileCode2,
    title: "Medical Notes Coding",
    description:
      "Physician coders convert diagnosis procedures into codes that are easily readable by insurance companies and hassle-free for medical providers.",
    layoutClass: "lg:col-span-7",
  },
  {
    icon: Receipt,
    title: "Super-Bill Submission",
    description:
      "Our coders work with the billing team to generate a super bill that includes charges the payer is responsible for patient insurance coverage, and any co-payments.",
    layoutClass: "lg:col-span-7",
  },
  {
    icon: BadgeCheck,
    title: "Claim Approval",
    description:
      "Our coders advocate for the healthcare provider to ensure the claim is approved. They work to recover Aged Receivables and help ensure that denied claims are paid.",
    layoutClass: "lg:col-span-5",
  },
];

export default function MedicalCodingHowWeHelp() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-how-we-help-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Medical Coding Process"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-how-we-help-heading">
              How does{" "}
              <span className="font-bold text-blue-600">
                BellMedEx Medical Coding Company
              </span>{" "}
              help?
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

          {HELP_STEPS.map((step, index) => (
            <MotionWrapper
              key={step.title}
              variant="staggerItem"
              className={`h-full ${step.layoutClass}`}
            >
              <MedicalCodingHelpCard
                step={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
