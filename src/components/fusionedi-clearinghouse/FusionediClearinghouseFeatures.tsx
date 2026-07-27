"use client";

import React from "react";
import Image from "next/image";
import { FileText, LucideIcon, Send, ShieldCheck } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  fusionediCardClassName,
  fusionediContainerClassName,
  fusionediSectionClassName,
} from "./fusionediSectionLayout";

interface FusionediFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FUSIONEDI_FEATURES: FusionediFeature[] = [
  {
    icon: ShieldCheck,
    title: "Claim Quality Assurance",
    description:
      "Scrub claims before they leave your office to catch coding errors, missing fields, and payer-specific issues—so more claims pass on the first submission.",
    imageSrc: "/clearinghouse-nurse-hero.png",
    imageAlt: "Healthcare professional using FusionEDI claim quality assurance tools",
  },
  {
    icon: FileText,
    title: "Data Format Alignment",
    description:
      "Transform non-standard billing data into compliant EDI formats such as 837 and 835, keeping exchanges accurate and consistent across payers and systems.",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "Specialist aligning healthcare data formats with FusionEDI software",
  },
  {
    icon: Send,
    title: "Instant Claim Submission",
    description:
      "Send electronic claims to insurance carriers in seconds, track status in real time, and accelerate reimbursements for a healthier revenue cash flow.",
    imageSrc: "/rcm-doctor-importance.png",
    imageAlt: "Provider submitting claims instantly through FusionEDI clearinghouse",
  },
];

function FusionediFeatureCard({ feature }: { feature: FusionediFeature }) {
  return (
    <div
      className={cn(
        fusionediCardClassName,
        "overflow-hidden p-0 hover:-translate-y-1.5"
      )}
    >
      <div className="flex flex-1 flex-col p-6 text-center sm:p-8">
        <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
          {feature.title}
        </h3>
        <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:text-sm">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-auto aspect-4/3 w-full overflow-hidden border-t border-[#E2E6EC]">
        <Image
          src={feature.imageSrc}
          alt={feature.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <IconWrapper
            icon={feature.icon}
            size="sm"
            variant="surface"
            className="border border-[#E2E6EC] bg-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default function FusionediClearinghouseFeatures() {
  return (
    <section
      className={fusionediSectionClassName}
      aria-labelledby="fusionedi-clearinghouse-features-heading"
    >
      <div className={fusionediContainerClassName}>
        <SectionHeader
          badge="Health Institute EDI Software Features."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl space-y-4 sm:mb-16"
          title={
            <span id="fusionedi-clearinghouse-features-heading">
              The <span className="text-blue-600">No.1 Solution</span> For The
              Billing Evolution
            </span>
          }
          description="FusionEDI brings together claim scrubbing, standardized EDI formats, and instant payer submission—giving healthcare institutes a single platform built for faster, cleaner billing."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {FUSIONEDI_FEATURES.map((feature) => (
            <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
              <FusionediFeatureCard feature={feature} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
