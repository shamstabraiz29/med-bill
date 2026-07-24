"use client";

import React from "react";
import { Clock3, ShieldAlert, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingAdvancedHelpBlock from "./MedicalCodingAdvancedHelpBlock";

const ADVANCED_HELP_BLOCKS = [
  {
    icon: Users,
    title: (
      <>
        <span className="font-bold text-blue-600">0% Staffing Burden</span>
      </>
    ),
    description:
      "Don't stretch your staff thin with coding. Our service analyzes records and assigns precise codes for you. No need to hire, train and manage additional in-house coders. Outsource to us and reduce staffing burdens.",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "BellMedEx medical coder working at a computer station",
    imagePosition: "right" as const,
  },
  {
    icon: ShieldAlert,
    title: (
      <>
        Complete{" "}
        <span className="font-bold text-blue-600">Denial Assistance</span>
      </>
    ),
    description:
      "Stop losing hard-earned income. Our coders' hawk eyes spot deficiencies leading to denials. We optimize records so you get paid for all you do. No more lost revenue.",
    imageSrc: "/doctor-hero.png",
    imageAlt: "BellMedEx physician reviewing medical coding documentation on a laptop",
    imagePosition: "left" as const,
  },
  {
    icon: Clock3,
    title: (
      <>
        Reduction in{" "}
        <span className="font-bold text-blue-600">DNFB and Backlogs</span>
      </>
    ),
    description:
      "Backlog refers to the number of cases pending to be coded after discharge. DNFB refers to the ratio of accounts that are not final billed due to incomplete or inaccurate coding or documentation. BellMedEx eliminates the backlog of uncoded cases and decreases DNFB ratio.",
    imageSrc: "/doctors-team.png",
    imageAlt: "BellMedEx medical coding team collaborating to reduce backlogs and DNFB",
    imagePosition: "right" as const,
  },
];

export default function MedicalCodingAdvancedHelp() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
      aria-labelledby="medical-coding-advanced-help-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Advanced Support"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-advanced-help-heading">
              Get advanced help with{" "}
              <span className="font-bold text-blue-600">Medical Coding</span>
            </span>
          }
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-6 sm:space-y-8"
        >
          {ADVANCED_HELP_BLOCKS.map((block, index) => (
            <MotionWrapper key={index} variant="staggerItem">
              <MedicalCodingAdvancedHelpBlock
                icon={block.icon}
                title={block.title}
                description={block.description}
                imageSrc={block.imageSrc}
                imageAlt={block.imageAlt}
                imagePosition={block.imagePosition}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
