"use client";

import React from "react";
import BillingOfferCard from "@/components/medical-billing/BillingOfferCard";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionAltClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_STEPS = [
  {
    iconName: "UserCheck",
    title: "Patient Registration",
    items: [
      "Accurate patient data collection i.e., demographics, medical history",
      "Verification of patient details",
    ],
  },
  {
    iconName: "ShieldCheck",
    title: "Prior Authorization & Eligibility Verification",
    items: [
      "Prior authorization from the insurance company",
      "Efficient charge posting to expedite reimbursements",
    ],
  },
  {
    iconName: "Code2",
    title: "Medical Coding",
    items: [
      "An absolute error-free standardized coding",
      "Identification of errors if any, and immediate rectification",
    ],
  },
  {
    iconName: "Receipt",
    title: "Charge Entry",
    items: [
      "Promptly charge patient accounts to prevent surprise billing",
      "Efficient charge posting to expedite reimbursements",
    ],
  },
  {
    iconName: "Send",
    title: "Claims Submission",
    items: [
      "Submit claims electronically",
      "Ensure fast and clean claims submissions",
      "Maintain the accuracy and industry-standard protocols",
    ],
  },
  {
    iconName: "RefreshCw",
    title: "Denial Management",
    items: [
      "Constant follow-up of the status of the submitted claim",
      "Address old claims, rejections, denials, and delays",
      "Minimize A/R aging cycles to improve collections",
    ],
  },
  {
    iconName: "CreditCard",
    title: "Payment Posting",
    items: [
      "Post payment after successful claims processing i.e., co-pays, deductibles, insurance payments",
      "Ensure financial transparency",
    ],
  },
  {
    iconName: "ClipboardCheck",
    title: "Medical Billing Audit",
    items: [
      "Regular billing audit identifies discrepancies in incorrect submission patterns",
      "Thorough tracking of the steps improves the potential RCM",
    ],
  },
];

interface SmallPracticesBillingProcessSectionProps {
  data?: SmallPracticesPageData["billingProcess"];
}

export default function SmallPracticesBillingProcessSection({ data }: SmallPracticesBillingProcessSectionProps) {
  const badge = data?.badge ?? "Billing Process.";
  const titlePlain = data?.titlePlain ?? "Our Medical Billing Process to Prevent Revenue Loss and ";
  const titleHighlight = data?.titleHighlight ?? "Minimize A/R Aging Cycles";
  const description =
    data?.description ??
    "Our medical billing services flowchart helps you take a progressive approach toward maintaining efficient revenue cycle management. We assist you in transforming your healthcare practice by combating claim denials, enhancing practice revenue, and taking non-clinical burdens off your shoulders.";
  const ctaText = data?.ctaText ?? "Get FREE Consultation, No Obligations";
  const ctaHref = data?.ctaHref ?? "/schedule-a-demo";

  const stepsList = data?.steps && data.steps.length > 0
    ? data.steps.map((step) => ({
        iconName: step.iconName,
        title: step.title,
        items: step.items.map((it) => (typeof it === "string" ? it : it.text)),
      }))
    : DEFAULT_STEPS;

  return (
    <section
      className={smallPracticeSectionAltClassName}
      aria-labelledby="small-practices-billing-process-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <SectionHeader
          badge={badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="small-practices-billing-process-heading">
              {titlePlain}
              <span className="text-blue-600">{titleHighlight}</span>
            </span>
          }
          description={description}
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
        >
          {stepsList.map((step, index) => {
            const Icon = getIcon(step.iconName);

            return (
              <MotionWrapper key={step.title} variant="staggerItem" className="h-full">
                <BillingOfferCard
                  step={index + 1}
                  icon={Icon}
                  title={step.title}
                  items={[...step.items]}
                  className="h-full"
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" className="mt-10 flex justify-center sm:mt-12">
          <AppButton href={ctaHref} variant="primary" size="lg" showArrow>
            {ctaText}
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
