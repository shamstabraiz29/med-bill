"use client";

import React from "react";
import { BlogStyleCard } from "@/components/blog/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionAltClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_SERVICES = [
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

interface SmallPracticesCollaborateSectionProps {
  data?: SmallPracticesPageData["collaborate"];
}

export default function SmallPracticesCollaborateSection({ data }: SmallPracticesCollaborateSectionProps) {
  const badge = data?.badge ?? "Customized Billing.";
  const titlePlain = data?.titlePlain ?? "Collaborate with BellMedEx and Get ";
  const titleHighlight = data?.titleHighlight ?? "Customized Billing Services";
  const titleSuffix = data?.titleSuffix ?? " for Your Small Practice";
  const services = data?.services && data.services.length > 0 ? data.services : DEFAULT_SERVICES;

  return (
    <section
      className={smallPracticeSectionAltClassName}
      aria-labelledby="small-practices-collaborate-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <SectionHeader
          badge={badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="small-practices-collaborate-heading">
              {titlePlain}
              <span className="text-blue-600">{titleHighlight}</span>
              {titleSuffix}
            </span>
          }
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.map((service, idx) => (
            <BlogStyleCard
              key={service.title}
              href={service.href}
              imageSrc={service.imageSrc}
              fallbackSrc={DEFAULT_SERVICES[idx]?.imageSrc ?? "/consultants-laptop.png"}
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
