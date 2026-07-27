"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PmsFeatureRow, {
  PmsAssetVisual,
  PmsClaimsVisual,
  PmsIcd10Visual,
  PmsPatientManagementVisual,
} from "./PmsFeatureRow";
import { pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsFeaturesData } from "@/payload/types/practiceManagementSoftwarePms";

const DEFAULT_VISUALS = [<PmsIcd10Visual key="icd10" />, <PmsPatientManagementVisual key="patient" />, <PmsClaimsVisual key="claims" />];

interface PracticeManagementSoftwarePmsFeaturesProps {
  data?: PmsFeaturesData;
}

export default function PracticeManagementSoftwarePmsFeatures({ data }: PracticeManagementSoftwarePmsFeaturesProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.features;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultPracticeManagementSoftwarePmsData.features.features;

  return (
    <section
      id="pms-features"
      className={pmsSectionAltClassName}
      aria-labelledby="practice-management-software-pms-features-heading"
    >
      <div className={pmsContainerClassName}>
        <h2 id="practice-management-software-pms-features-heading" className="sr-only">
          Practice management software features
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

            const visual = feature.imageSrc ? (
              <PmsAssetVisual src={feature.imageSrc} alt={feature.imageAlt || feature.title} />
            ) : (
              DEFAULT_VISUALS[idx % DEFAULT_VISUALS.length]
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
