"use client";

import React from "react";
import {
  BarChart3,
  ClipboardCheck,
  LucideIcon,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";

interface AddOnService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADD_ON_SERVICES: AddOnService[] = [
  {
    icon: ClipboardCheck,
    title: "Prior Authorizations",
    description:
      "Get beforehand approval form the insurance company as to whether the service or treatment will be paid or not and avoid extra hassle, time, and cost.",
  },
  {
    icon: ShieldCheck,
    title: "Eligibility & Benefits Verification",
    description:
      "We help you confirm the patient's insurance coverage, eligibility, and benefits to increase the chances of steady cash flow and avoid denials.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analysis and Reporting",
    description:
      "Get regular reports and audits to monitor revenue cycle performance and make informed decisions.",
  },
  {
    icon: UserCheck,
    title: "Credentialing",
    description:
      "We offer credentialing services to help practices avoid the trouble of assessing a physician's qualification, authenticity, and licensing.",
  },
];

function AddOnServiceCard({ service }: { service: AddOnService }) {
  return (
    <div
      className={cn(
        largePracticeCardClassName,
        "group h-full p-6 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-7"
      )}
    >
      <IconWrapper
        icon={service.icon}
        size="md"
        variant="surface"
        className="mb-4 transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-[1.65] text-[#475569]">{service.description}</p>
    </div>
  );
}

export default function LargePracticesAddOnServices() {
  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-add-on-services-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Add-On Services."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-add-on-services-heading">
              Add on Services to Provide a{" "}
              <span className="text-blue-600">
                One-Stop Solution for your Large Practice&apos;s Thorough Billing and RCM Needs
              </span>
            </span>
          }
          description="Unlock your fullest revenue and care potential with these add-on services available individually as well as complete package."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
        >
          {ADD_ON_SERVICES.map((service) => (
            <MotionWrapper key={service.title} variant="staggerItem" className="h-full">
              <AddOnServiceCard service={service} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
