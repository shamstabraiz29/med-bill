"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesWorkProcessStep from "./LargePracticesWorkProcessStep";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";

const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "24/7 Access to Technology and Infrastructure",
    description:
      "Advanced billing technology, coding tools, and infrastructure efficiently support operations and personalize billing and RCM for large practices. When you outsource billing with BellMedEx, you can leverage these technological resources without spending on software or hardware.",
  },
  {
    step: "02",
    title: "Regular Auditing and Quality Control",
    description:
      "We ensure regular internal audits to scan inaccuracies and point out areas for improvement in the billing processes. Not only that, we rectify the patterns and ensure quality control measures, such as double-checking claims and conducting reviews. This allows a reduction in revenue holes and inaccuracies.",
  },
  {
    step: "03",
    title: "Upfront Communication",
    description:
      "Clear and effective communication between insurers, administrative staff, and billing personnel is essential for long-term work partnerships. It improves the trust level among all the parties involved and prevents misunderstandings and errors.",
  },
  {
    step: "04",
    title: "Expertise and Specialization",
    description:
      "Experience and professionalism are key metrics to ensure fewer denials. We have a team of trained experts skilled in coding, billing, and claims submission. Your large practice can tap into this knowledge to access compliant billing practices.",
  },
  {
    step: "05",
    title: "Simplifying Complex Coding System (ICD-10, CPT, HCPCS)",
    description:
      "We stay updated with the latest regulatory changes, coding guidelines in diagnostic procedures, and insurance requirements and employ coders who are well-versed in ICD-10, CPT, and HCPCS coding systems to ensure accuracy and faster collection.",
  },
] as const;

export default function LargePracticesWorkProcessSection() {
  return (
    <section
      className={`${largePracticeSectionClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="large-practices-work-process-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Efficient Work Process."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-work-process-heading">
              Our Efficient Work Process to Achieve These Goals Faster
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mx-auto flex max-w-4xl flex-col gap-5 sm:gap-6"
        >
          {WORK_PROCESS_STEPS.map((item) => (
            <MotionWrapper key={item.step} variant="staggerItem">
              <LargePracticesWorkProcessStep
                step={item.step}
                title={item.title}
                description={item.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
