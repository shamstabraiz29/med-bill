"use client";

import React from "react";
import { Award, LucideIcon, RefreshCcw, Settings2 } from "lucide-react";
import SoftwareSectionHeader from "./SoftwareSectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SoftwareHomeCard from "./SoftwareHomeCard";
import {
  softwareContainerClassName,
  softwareSectionAltClassName,
} from "./softwareSectionLayout";

interface GrowthTool {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const GROWTH_TOOLS: GrowthTool[] = [
  {
    icon: Award,
    title: "Credentialing",
    description:
      "Ensures your eligibility to participate in various health plans and networks, and avoid delays or denials of reimbursement.",
    href: "/credentialing",
  },
  {
    icon: RefreshCcw,
    title: "Clearinghouse",
    description:
      "Facilitates the exchange and settlement of payments, claims, and other transactions between medical providers and payers.",
    href: "/clearinghouse",
  },
  {
    icon: Settings2,
    title: "Practice Management",
    description:
      "Manages the administrative, financial, and operational aspects of your practice, such as scheduling, billing, reporting, and marketing.",
    href: "/practice-management-software-pms",
  },
];

export default function MedicalBillingSoftwareGrowthTools() {
  return (
    <section
      className={softwareSectionAltClassName}
      aria-labelledby="medical-billing-software-growth-tools-heading"
    >
      <div className={softwareContainerClassName}>
        <SoftwareSectionHeader
          headingId="medical-billing-software-growth-tools-heading"
          badge="Growth Driven Billing Software"
          titleHighlight="Do more"
          titleSuffix="than just billing."
          description="This medical billing software is a collaborator for excellence with support for credentialing, clearinghouse, and practice management tools."
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {GROWTH_TOOLS.map((tool) => (
            <MotionWrapper key={tool.title} variant="staggerItem" className="h-full">
              <SoftwareHomeCard
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                linkLabel="Learn More"
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
