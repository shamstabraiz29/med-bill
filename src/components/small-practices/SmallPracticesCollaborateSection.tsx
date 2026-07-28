"use client";

import React from "react";
import { BlogStyleCard } from "@/components/blog/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionAltClassName,
} from "./smallPracticeSectionLayout";

const COLLABORATE_SERVICES = [
  {
    title: "Cloud-Based HIPAA-Compliant PMS",
    description:
      "Saves your practice from penalties, and keeps the patient's confidential data secure.",
    href: "/practice-management-software-pms",
    imageSrc: "/pms-specialty-dashboard.png",
  },
  {
    title: "Automated Claims Scrubber EHR Software",
    description: "Runs the data through algorithms, scans, and rectifies errors.",
    href: "/electronic-health-records-ehr",
    imageSrc: "/medical-billing-software-dashboard.png",
  },
  {
    title: "Own Clearinghouse",
    description:
      "Verifies and processes claims with accuracy & transmits electronic claims to insurers.",
    href: "/clearinghouse",
    imageSrc: "/fusionedi-dashboard.png",
  },
];

export default function SmallPracticesCollaborateSection() {
  return (
    <section
      className={smallPracticeSectionAltClassName}
      aria-labelledby="small-practices-collaborate-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <SectionHeader
          badge="Customized Billing."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="small-practices-collaborate-heading">
              Collaborate with BellMedEx and Get{" "}
              <span className="text-blue-600">Customized Billing Services</span> for Your Small
              Practice
            </span>
          }
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {COLLABORATE_SERVICES.map((service) => (
            <BlogStyleCard
              key={service.title}
              href={service.href}
              imageSrc={service.imageSrc}
              imageAlt={service.title}
              title={service.title}
              excerpt={service.description}
              ctaLabel="LEARN MORE"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
