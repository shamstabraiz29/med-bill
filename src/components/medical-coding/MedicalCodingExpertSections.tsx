"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingExpertBlock from "./MedicalCodingExpertBlock";

const EXPERT_BLOCKS = [
  {
    title: (
      <>
        Hire{" "}
        <span className="font-bold text-blue-600">
          AHIMA &amp; AAPC Certified Medical Coding Experts
        </span>
      </>
    ),
    description:
      "BellMedEx medical coding experts analyze patient records and assign diagnosis + procedure codes to them with 98% accuracy. This CPT coding helps healthcare providers receive proper reimbursement from insurance companies. Our skilled coding managers thoroughly review all charts to ensure compliance with ICD-10, CPT and HCPCS standards. You can trust BellMedEx to capture every diagnosis, test, and treatment with the right codes for optimal revenue cycle management.",
    ctaLabel: "Contact us now to hire the best medical coding experts",
    imageSrc: "/doctors-team.png",
    imageAlt: "BellMedEx certified medical coding experts reviewing patient records together",
    imagePosition: "right" as const,
  },
  {
    title: (
      <>
        Custom coding solutions for{" "}
        <span className="font-bold text-blue-600">every healthcare facility</span>
      </>
    ),
    description:
      "Medical coding is the key to payment and compliance, but not all facilities code the same. Whether you need ICD-10-CM codes for oncology, CPT codes for orthopedics, or HCPCS level II codes for DME, BellMedEx has dedicated coding experts for every medical domain. We match knowledgeable coders and auditors to handle your unique caseload. For medical coding done right, our custom medical coding solutions make all the difference.",
    ctaLabel: "Contact us now for specialty-specific coding solutions",
    imageSrc: "/doctor-hero.png",
    imageAlt: "BellMedEx coding specialist working on specialty-specific medical documentation",
    imagePosition: "left" as const,
  },
  {
    title: (
      <>
        Unlock billing via{" "}
        <span className="font-bold text-blue-600">
          medical coding and documentation services
        </span>
      </>
    ),
    description:
      "BellMedEx medical coding service relies on specialized software that scans medical records and provides an initial set of suggested codes. Our medical coders then review the records, analyze the suggestions, and finalize the codes based on their in-depth understanding of coding rules. This audit results in highly accurate coding that translates health records into the proper billable codes insurance companies require.",
    ctaLabel: "Contact us now to code clinical statements",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "BellMedEx medical coders reviewing clinical statements on monitor",
    imagePosition: "right" as const,
  },
];

export default function MedicalCodingExpertSections() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-label="Medical coding expert services"
    >
      <div className="mx-auto max-w-7xl">
        <MotionWrapper variant="stagger" staggerDelay={0.1} className="space-y-6 sm:space-y-8">
          {EXPERT_BLOCKS.map((block) => (
            <MotionWrapper key={block.ctaLabel} variant="staggerItem">
              <MedicalCodingExpertBlock
                title={block.title}
              description={block.description}
              ctaLabel={block.ctaLabel}
              ctaHref="/contact-us"
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
