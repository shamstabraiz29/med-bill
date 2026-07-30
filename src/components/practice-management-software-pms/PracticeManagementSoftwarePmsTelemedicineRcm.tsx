"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PmsFeatureRow, { PmsAssetVisual } from "./PmsFeatureRow";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsTelemedicineRcmData } from "@/payload/types/practiceManagementSoftwarePms";

const DEFAULT_IMAGES = [
  { src: "/pms-connect-care-cure.png", alt: "BellMedEx telemedicine feature with video consult and patient chat" },
  { src: "/pms-score-billing-rcm-wins.png", alt: "Physician reviewing BellMedEx billing and RCM dashboard reports" },
];

interface PracticeManagementSoftwarePmsTelemedicineRcmProps {
  data?: PmsTelemedicineRcmData;
}

export default function PracticeManagementSoftwarePmsTelemedicineRcm({ data }: PracticeManagementSoftwarePmsTelemedicineRcmProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.telemedicineRcm;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultPracticeManagementSoftwarePmsData.telemedicineRcm.features;

  return (
    <section
      className={pmsSectionClassName}
      aria-labelledby="practice-management-software-pms-telemedicine-rcm-heading"
    >
      <div className={pmsContainerClassName}>
        <h2 id="practice-management-software-pms-telemedicine-rcm-heading" className="sr-only">
          Telemedicine and revenue cycle reporting features
        </h2>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-10 sm:space-y-12 lg:space-y-16"
        >
          {featuresList.map((feature, idx) => {
            const paragraphs = Array.isArray(feature.paragraphs)
              ? feature.paragraphs.map((p: any) => (typeof p === "string" ? p : p.text || ""))
              : [];

            const fallbackImg = DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length];
            const visual = (
              <PmsAssetVisual
                src={feature.imageSrc}
                fallbackSrc={fallbackImg.src}
                alt={feature.imageAlt || fallbackImg.alt}
              />
            );

            return (
              <MotionWrapper key={feature.title || idx} variant="staggerItem">
                <PmsFeatureRow
                  label={feature.label}
                  title={feature.title}
                  paragraphs={paragraphs}
                  visual={visual}
                  reverse={feature.reverse}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
