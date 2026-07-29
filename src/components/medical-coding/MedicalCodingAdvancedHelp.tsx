"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingAdvancedHelpBlock from "./MedicalCodingAdvancedHelpBlock";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingAdvancedHelpProps {
  data?: typeof defaultMedicalCodingData.advancedHelp;
}

export default function MedicalCodingAdvancedHelp({ data }: MedicalCodingAdvancedHelpProps) {
  const helpData = data || defaultMedicalCodingData.advancedHelp;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-advanced-help-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={helpData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-advanced-help-heading">
              {helpData.titlePrefix}{" "}
              <span className="font-bold text-blue-600">{helpData.titleHighlight}</span>
            </span>
          }
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-6 sm:space-y-8"
        >
          {helpData.blocks.map((block, index) => {
            const Icon = getIcon(block.iconName);
            return (
              <MotionWrapper key={index} variant="staggerItem">
                <MedicalCodingAdvancedHelpBlock
                  icon={Icon}
                  title={
                    <>
                      {block.titlePrefix && `${block.titlePrefix} `}
                      <span className="font-bold text-blue-600">{block.titleHighlight}</span>
                    </>
                  }
                  description={block.description}
                  imageSrc={block.imageSrc}
                  imageAlt={block.imageAlt}
                  imagePosition={(block.imagePosition as "left" | "right") || "right"}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
