"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { FileText, LucideIcon, TrendingUp, Users } from "lucide-react";
import SoftwareSectionHeader from "./SoftwareSectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SoftwareHomeCard from "./SoftwareHomeCard";
import {
  softwareContainerClassName,
  softwareSectionClassName,
} from "./softwareSectionLayout";

interface SoftwareFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SOFTWARE_FEATURES: SoftwareFeature[] = [
  {
    icon: FileText,
    title: "Medical Billing",
    description:
      "The process of submitting and following up on claims with health insurance companies. You can generate invoices, track payments, and manage collections. You can also use the Billing Reports to analyze your revenue & performance.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    description:
      "The strategy of optimizing the financial health of your medical practice. This feature helps you to streamline your workflows, reduce errors, and increase reimbursements. Medical facilities can use the RCM Dashboard to monitor their key metrics and identify areas for improvement.",
  },
  {
    icon: Users,
    title: "Patient Management",
    description:
      "The practice of providing quality care and enhancing patient satisfaction. You can store and access patient records, schedule appointments, and communicate with patients. Patient Portal allows patients to view their health information, pay bills, and request appointments online.",
  },
];

import { MedicalBillingSoftwareDeliversData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

const iconMap: Record<string, any> = {
  FileText,
  TrendingUp,
  Users,
};

interface MedicalBillingSoftwareDeliversProps {
  data?: MedicalBillingSoftwareDeliversData;
}

export default function MedicalBillingSoftwareDelivers({ data }: MedicalBillingSoftwareDeliversProps) {
  const content = data || defaultMedicalBillingSoftwareData.delivers;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultMedicalBillingSoftwareData.delivers.features;

  return (
    <section
      className={softwareSectionClassName}
      aria-labelledby="medical-billing-software-delivers-heading"
    >
      <div className={softwareContainerClassName}>
        <SoftwareSectionHeader
          headingId="medical-billing-software-delivers-heading"
          badge={content.badge}
          titlePlain={content.titlePlain}
          titleHighlight={content.titleHighlight}
          endPeriod
          description={content.description}
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.12}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {featuresList.map((feature, idx) => {
              const IconComponent = (feature.iconName && iconMap[feature.iconName]) || FileText;
              return (
                <MotionWrapper key={feature.title || idx} variant="staggerItem">
                  <SoftwareHomeCard
                    icon={IconComponent}
                    title={feature.title}
                    description={feature.description}
                  />
                </MotionWrapper>
              );
            })}
          </MotionWrapper>

          <MotionWrapper variant="slideLeft">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:aspect-16/11">
              <AppImage
                src={content.imageSrc || "/consultants-laptop.png"}
                alt="BellMedEx medical billing software dashboard on laptop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
