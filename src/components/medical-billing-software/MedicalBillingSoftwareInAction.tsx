"use client";

import React from "react";
import {
  BarChart3,
  Bell,
  ClipboardCheck,
  Laptop,
  LucideIcon,
  Receipt,
  Workflow,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SoftwareSectionHeader from "./SoftwareSectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SoftwareHomeCard from "./SoftwareHomeCard";
import {
  softwareContainerClassName,
  softwareSectionAltClassName,
} from "./softwareSectionLayout";

interface SoftwareActionFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SOFTWARE_ACTION_FEATURES: SoftwareActionFeature[] = [
  {
    icon: ClipboardCheck,
    title: "Electronic Claims Submission",
    description:
      "Submit your claims electronically to the insurance companies and get paid faster and easier.",
  },
  {
    icon: Laptop,
    title: "Web Based",
    description:
      "Access medical data and patient charts from any device and any location with an internet connection and a web browser.",
  },
  {
    icon: Bell,
    title: "Appointment Reminder",
    description:
      "Send automated reminders to your patients via email, text, or phone call and reduce no-shows and cancellations.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting",
    description:
      "Track and analyze your practice performance with real-time reports and dashboards that show key metrics and trends.",
  },
  {
    icon: Workflow,
    title: "Automate Workflows",
    description:
      "Streamline your daily tasks and workflows with automation features that save you time and effort.",
  },
  {
    icon: Receipt,
    title: "Patient Invoicing",
    description:
      "Generate and send professional invoices to your patients with customizable templates and payment options.",
  },
];

export default function MedicalBillingSoftwareInAction() {
  return (
    <section
      className={softwareSectionAltClassName}
      aria-labelledby="medical-billing-software-in-action-heading"
    >
      <div className={softwareContainerClassName}>
        <SoftwareSectionHeader
          headingId="medical-billing-software-in-action-heading"
          badge="Software In Action"
          titlePlain="Billing made"
          titleHighlight="fast, easy, and accurate"
          endPeriod
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {SOFTWARE_ACTION_FEATURES.map((feature) => (
            <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
              <SoftwareHomeCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>

        <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
          <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
            There&apos;s never been a better time to switch to our software and take
            advantage of our unbeatable features and benefits. For a limited time only,
            get a free installation, a free upgrade, and a free month of service when
            you sign up now.
          </p>

          <div className="mt-8">
            <AppButton
              href="#medical-billing-software-hero-heading"
              variant="primary"
              size="lg"
              showArrow
            >
              Get Started for Free
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
