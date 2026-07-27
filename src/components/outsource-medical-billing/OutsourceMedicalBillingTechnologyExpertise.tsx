"use client";

import React from "react";
import {
  ClipboardCheck,
  Cloud,
  Cpu,
  Database,
  FileSearch,
  LucideIcon,
  MessageSquare,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  outsourceCardClassName,
  outsourceContainerClassName,
  outsourceSectionClassName,
} from "./outsourceSectionLayout";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TECHNOLOGY_FEATURES: FeatureItem[] = [
  {
    icon: Database,
    title: "Collects Important Data",
    description:
      "Captures all the necessary information and data, and keeps it safe without any trust breach.",
  },
  {
    icon: MonitorSmartphone,
    title: "Foolproof EHRs",
    description:
      "Our cloud-based EHRs are foolproof and come with revenue cycle management software to help your staff streamline billing operations.",
  },
  {
    icon: Cloud,
    title: "Access Data Any Time",
    description:
      "Includes little to no downtime, secure data backup, and you can access patient data from anywhere at any time.",
  },
];

const EXPERTISE_FEATURES: FeatureItem[] = [
  {
    icon: MessageSquare,
    title: "Upfront Communication",
    description:
      "Establishes good communication pathways with the payer, provider, and patient.",
  },
  {
    icon: ClipboardCheck,
    title: "Precise Submission",
    description:
      "Accurately submits claims to lower the percentage of claims being denied.",
  },
  {
    icon: ShieldCheck,
    title: "Familiarity with Payers",
    description:
      "Has a strong client base and is familiar with payers and their constantly changing policies and handles all types of specialties.",
  },
  {
    icon: FileSearch,
    title: "Performs Audits and Analyses",
    description:
      "Audits and identifies areas where your billing needs improvement.",
  },
];

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <div className={cn(outsourceCardClassName, "h-full")}>
      <div className="flex items-start gap-4 sm:gap-5">
        <IconWrapper
          icon={feature.icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="min-w-0">
          <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
            {feature.title}
          </h3>
          <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function SubsectionBanner({
  badge,
  icon: Icon,
  description,
}: {
  badge: string;
  icon: LucideIcon;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E6EC] bg-gradient-to-r from-blue-50/70 via-white to-white px-6 py-6 sm:px-8 sm:py-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#1D4ED8]/5 blur-2xl"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <IconWrapper icon={Icon} size="md" variant="primary" className="shrink-0" />
        <div className="min-w-0 text-left">
          <SectionBadge variant="indigo" pulse className="mb-3">
            {badge}
          </SectionBadge>
          <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function OutsourceMedicalBillingTechnologyExpertise() {
  return (
    <section
      className={cn(outsourceSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="outsource-medical-billing-technology-expertise-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-20"
      />

      <div className={`${outsourceContainerClassName} relative z-10`}>
        <SectionHeader
          badge="Technology & Expertise."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-14 max-w-4xl sm:mb-16"
          title={
            <span id="outsource-medical-billing-technology-expertise-heading">
              At <span className="text-blue-600">BellMedEx</span> We have Both; The Technology
              and The Expertise to Navigate your{" "}
              <span className="text-blue-600">Practice&apos;s Bottom Line</span>
            </span>
          }
        />

        <div className="space-y-10 sm:space-y-12">
          <MotionWrapper variant="fadeUp" className="space-y-6">
            <SubsectionBanner
              badge="Technology"
              icon={Cpu}
              description="The technology we use comes with advanced features to cater to your billing needs. Here's how these advanced features help you compete with the best. Our cloud-based HIPAA-compliant PMS:"
            />

            <MotionWrapper
              variant="stagger"
              staggerDelay={0.07}
              className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
            >
              {TECHNOLOGY_FEATURES.map((feature) => (
                <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
                  <FeatureCard feature={feature} />
                </MotionWrapper>
              ))}
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" className="space-y-6">
            <SubsectionBanner
              badge="Expertise"
              icon={Users}
              description="BellMedEx brings you not only their technology but experience as well. When the two join with your healthcare practice it will enhance patient experience and payment collections. Our adept team:"
            />

            <MotionWrapper
              variant="stagger"
              staggerDelay={0.07}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
            >
              {EXPERTISE_FEATURES.map((feature) => (
                <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
                  <FeatureCard feature={feature} />
                </MotionWrapper>
              ))}
            </MotionWrapper>
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp" className="mt-12 flex justify-center sm:mt-14">
          <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
            Request Demo
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
