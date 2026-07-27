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

import { MedicalBillingSoftwareInActionData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

const iconMap: Record<string, any> = {
  ClipboardCheck,
  Laptop,
  Bell,
  BarChart3,
  Workflow,
  Receipt,
};

interface MedicalBillingSoftwareInActionProps {
  data?: MedicalBillingSoftwareInActionData;
}

export default function MedicalBillingSoftwareInAction({ data }: MedicalBillingSoftwareInActionProps) {
  const content = data || defaultMedicalBillingSoftwareData.inAction;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultMedicalBillingSoftwareData.inAction.features;

  return (
    <section
      className={softwareSectionAltClassName}
      aria-labelledby="medical-billing-software-in-action-heading"
    >
      <div className={softwareContainerClassName}>
        <SoftwareSectionHeader
          headingId="medical-billing-software-in-action-heading"
          badge={content.badge}
          titlePlain={content.titlePlain}
          titleHighlight={content.titleHighlight}
          endPeriod
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {featuresList.map((feature, idx) => {
            const IconComponent = (feature.iconName && iconMap[feature.iconName]) || ClipboardCheck;
            return (
              <MotionWrapper key={feature.title || idx} variant="staggerItem" className="h-full">
                <SoftwareHomeCard
                  icon={IconComponent}
                  title={feature.title}
                  description={feature.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
          <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
            {content.descriptionText}
          </p>

          <div className="mt-8">
            <AppButton
              href="#medical-billing-software-hero-heading"
              variant="primary"
              size="lg"
              showArrow
            >
              {content.buttonText || "Get Started for Free"}
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
