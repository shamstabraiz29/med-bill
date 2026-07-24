"use client";

import React from "react";
import Image from "next/image";
import {
  FileSignature,
  Laptop,
  LucideIcon,
  ScanSearch,
  ShieldCheck,
  Users,
  ClipboardCheck,
  DollarSign,
  Bug,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface AuditStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface ComplianceArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIT_STATS: AuditStat[] = [
  { value: "1,500+", label: "Satisfied Providers", icon: Users },
  { value: "30k+", label: "Audits Performed", icon: ClipboardCheck },
  { value: "90,779", label: "Coding Errors Resolved", icon: Bug },
  { value: "$56,93,122+", label: "Lost Revenue Recovered", icon: DollarSign },
];

const COMPLIANCE_AREAS: ComplianceArea[] = [
  {
    icon: ScanSearch,
    title: "Auditing your coding accuracy",
    description:
      "Assessing coding accuracy is a principal objective of our medical coding audit company. We thoroughly investigate medical charts to ensure codes mirror the diagnosis, completed procedures, and complexity level. Proper coding is vital for correct reimbursement and adherence to guidelines. Our audits identify any upcoding or undercoding issues and recommend remedial actions. With our assistance, doctors can have confidence their coding satisfies standards and captures the total value due.",
  },
  {
    icon: Laptop,
    title: "Improving your charge capture accuracy",
    description:
      "Another essential element we examine is charge capture. We validate that all services rendered and supplies used are captured in the billing at the appropriate rates. Missed charges lead to lost revenue. Our auditors diligently compare the documentation in the medical record to the itemized billing statement. We identify any missed charges and recommend improvements to charge capture processes. Our goal is to maximize your reimbursement by closing gaps where legitimate charges are overlooked.",
  },
  {
    icon: ShieldCheck,
    title: "Auditing your billing documentation for compliance",
    description:
      "Thorough documentation review is also part of our billing audit process. We assess whether the medical record provides clear, consistent documentation that supports the coded claims. Complete, accurate documentation is required to justify charges and pass payer scrutiny. Our team flags any documentation issues like vagueness, inconsistency, missing signatures/credentials, or lack of medical necessity. We provide guidance to strengthen documentation practices for better claim defense and audit survival.",
  },
  {
    icon: FileSignature,
    title: "Performing audits of provider-payor contracts",
    description:
      "Some other areas we examine are proper application of insurance payor contracts and fee schedules as well as accuracy of data entered into the billing system. Invalid fee schedules and data entry errors can sabotage reimbursement. We verify compliance with payer contracts and recommend process improvements to enhance billing system accuracy. Our comprehensive audits cover all key facets to maximize claim quality and revenue integrity.",
  },
];

export default function MedicalBillingAuditSolutionsToDate() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-solutions-to-date-heading"
    >
      <div className={`${auditContainerClassName} space-y-12 sm:space-y-16 lg:space-y-20`}>
        <div>
          <SectionHeader
            badge="Track Record"
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="medical-billing-audit-solutions-to-date-heading">
                BellMedEx{" "}
                <span className="font-bold text-blue-600">Auditing Solutions To Date</span>
              </span>
            }
            className="mx-auto mb-8 max-w-4xl sm:mb-12"
          />

          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid w-full grid-cols-2 gap-8 divide-y divide-[#E2E6EC] md:grid-cols-4 md:gap-0 md:divide-x md:divide-y-0"
          >
            {AUDIT_STATS.map((stat) => {
              const Icon = stat.icon;

              return (
                <MotionWrapper
                  key={stat.label}
                  variant="staggerItem"
                  className="group flex flex-col items-center py-6 text-center first:pt-0 last:pb-0 md:py-2 md:px-4 lg:px-6"
                >
                  <div className="mb-4 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 stroke-[1.25]" aria-hidden="true" />
                  </div>

                  <div className="text-2xl font-extrabold leading-none tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>

                  <span className="mt-3 max-w-[180px] text-xs font-bold uppercase tracking-wide text-[#0F172A] sm:text-sm">
                    {stat.label}
                  </span>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp">
          <Card
            glass={false}
            hoverEffect="none"
            className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:rounded-3xl"
          >
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch p-0">
              <div className="flex flex-col justify-center gap-5 bg-[#F5F7FA] p-6 sm:gap-6 sm:p-8 lg:p-10">
                <IconWrapper icon={ShieldCheck} size="lg" variant="surface" />

                <h2 className="max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
                  Our Coding Audit Service Promises{" "}
                  <span className="font-bold text-blue-600">Billing Compliance:</span>{" "}
                  Here&apos;s How?
                </h2>

                <div className="pt-1">
                  <AppButton
                    href="#claim-free-medical-audit"
                    variant="primary"
                    size="lg"
                    showArrow
                  >
                    Get Your Free Audit Report
                  </AppButton>
                </div>
              </div>

              <div className="relative min-h-[260px] sm:min-h-[320px]">
                <Image
                  src="/doctor-hero.png"
                  alt="BellMedEx medical coding audit specialist supporting billing compliance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0F172A]/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        <div>
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            {COMPLIANCE_AREAS.map((area) => (
              <MotionWrapper key={area.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                />
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
