"use client";

import React from "react";
import {
  Award,
  Calendar,
  CreditCard,
  LucideIcon,
  Receipt,
  Settings2,
  TrendingUp,
} from "lucide-react";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  softwareContainerClassName,
  softwareSectionClassName,
} from "./softwareSectionLayout";

interface SignUpFeature {
  label: string;
  icon: LucideIcon;
}

const SIGNUP_FEATURES: SignUpFeature[] = [
  { label: "Invoicing", icon: Receipt },
  { label: "Appointments", icon: Calendar },
  { label: "Billing", icon: CreditCard },
  { label: "RCM", icon: TrendingUp },
  { label: "Credentialing", icon: Award },
  { label: "Management", icon: Settings2 },
];

import { MedicalBillingSoftwareSignUpCtaData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

const iconMap: Record<string, any> = {
  Receipt,
  Calendar,
  CreditCard,
  TrendingUp,
  Award,
  Settings2,
};

interface MedicalBillingSoftwareSignUpCtaProps {
  data?: MedicalBillingSoftwareSignUpCtaData;
}

export default function MedicalBillingSoftwareSignUpCta({ data }: MedicalBillingSoftwareSignUpCtaProps) {
  const content = data || defaultMedicalBillingSoftwareData.signUpCta;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultMedicalBillingSoftwareData.signUpCta.features;

  return (
    <section
      className={`${softwareSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="medical-billing-software-signup-cta-heading"
    >
      <div className={softwareContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-12">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <h2
                id="medical-billing-software-signup-cta-heading"
                className="text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
              >
                {content.titlePlain}{" "}
                <span className="font-bold text-amber-300">{content.titleHighlight}</span>
              </h2>

              <div className="mt-8 w-full">
                <CommandCapsuleForm
                  formTitle="Software Free Sign Up"
                  buttonLabel="SIGN UP – IT'S FREE!"
                  namePlaceholder="Name"
                  emailPlaceholder="Email"
                  phonePlaceholder="Phone Number"
                  showFooter={false}
                  successTitle="You're signed up!"
                  successDescription="Our team will reach out shortly to help you get started."
                />
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 sm:mt-12 sm:pt-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
                {featuresList.map((feature, idx) => {
                  const Icon = (feature.iconName && iconMap[feature.iconName]) || Receipt;

                  return (
                    <div
                      key={feature.label || idx}
                      className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 transition-colors duration-200 hover:bg-white/[0.08] sm:px-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
