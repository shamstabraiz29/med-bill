"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditSplitBlock from "./MedicalBillingAuditSplitBlock";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditOverviewProps {
  data?: typeof defaultMedicalBillingAuditData.overview;
}

export default function MedicalBillingAuditOverview({ data }: MedicalBillingAuditOverviewProps) {
  const overviewData = data || defaultMedicalBillingAuditData.overview;

  return (
    <section className={auditSectionClassName} aria-label="Medical billing audit overview">
      <div className={auditContainerClassName}>
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-6 sm:space-y-8"
        >
          {overviewData.blocks.map((block, index) => {
            const Icon = getIcon(block.iconName);
            const paragraphStrings = block.paragraphs.map((p) => p.text);

            return (
              <MotionWrapper key={index} variant="staggerItem">
                <MedicalBillingAuditSplitBlock
                  icon={Icon}
                  title={
                    <>
                      {block.titlePlain}{" "}
                      <span className="font-bold text-blue-600">{block.titleHighlight}</span>
                      {block.titleSuffix || ""}
                    </>
                  }
                  paragraphs={paragraphStrings}
                  imageSrc={block.imageSrc}
                  imageAlt={block.imageAlt}
                  fallbackSrc={defaultMedicalBillingAuditData.overview.blocks[index]?.imageSrc ?? "/consultants-laptop.png"}
                  imagePosition={(block.imagePosition as "left" | "right") || "left"}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
