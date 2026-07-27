"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PmsFeatureRow, {
  PmsClaimsVisual,
  PmsIcd10Visual,
  PmsPatientManagementVisual,
} from "./PmsFeatureRow";
import { pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";

const PMS_FEATURES = [
  {
    label: "ICD 10 Compatible",
    title: "ICD 10 at Your Fingertips",
    paragraphs: [
      "BellMedEx PMS includes an integrated ICD 10 converter that helps you translate clinical documentation into accurate codes without leaving your workflow.",
      "A built-in claim validation tool checks submissions against payer rules before they leave your office, reducing rejections and speeding reimbursements.",
    ],
    visual: <PmsIcd10Visual />,
    reverse: false,
  },
  {
    label: "Manage Patients",
    title: "Patient Management Made Simple",
    paragraphs: [
      "Organize patients into groups, track visits, and access clinical decision support tools that keep care coordinated across your team.",
      "Built-in communication tools help you share updates, reminders, and follow-up instructions so every patient stays informed and engaged.",
    ],
    visual: <PmsPatientManagementVisual />,
    reverse: true,
  },
  {
    label: "Manage Claims",
    title: "Claim More, Worry Less",
    paragraphs: [
      "Submit claims electronically and track status in real time from a single dashboard designed for busy practices.",
      "The Claim Wizard walks you through each step of submission, scrubbing errors and helping you collect more of what you've earned with less manual work.",
    ],
    visual: <PmsClaimsVisual />,
    reverse: false,
  },
];

export default function PracticeManagementSoftwarePmsFeatures() {
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
          {PMS_FEATURES.map((feature) => (
            <MotionWrapper key={feature.title} variant="staggerItem">
              <PmsFeatureRow
                label={feature.label}
                title={feature.title}
                paragraphs={feature.paragraphs}
                visual={feature.visual}
                reverse={feature.reverse}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
