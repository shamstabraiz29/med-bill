"use client";

import React from "react";
import Image from "next/image";
import {
  BarChart3,
  BriefcaseMedical,
  FileStack,
  LucideIcon,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "./MedicalCodingServiceCard";

interface ModernSolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const MODERN_SOLUTIONS: ModernSolutionItem[] = [
  {
    icon: ScanSearch,
    title: "Managing Overlook for Coding (OFC)",
    description:
      "This is a proprietary algorithm that we use to measure and manage the productivity and quality of our coding team. It allows us to monitor the coding process in real-time, identify and correct errors, and generate reports and analytics.",
  },
  {
    icon: TrendingUp,
    title: "Calculating Risk Adjustment Factor (RAF) Score",
    description:
      "This is a measure of the expected health care costs for a patient based on their diagnoses and demographic factors. A higher RAF score indicates a higher risk and complexity of the patient's condition. We use our expertise in coding and documentation to ensure that your RAF scores accurately reflect the severity of your patient population and maximize your reimbursement from Medicare Advantage plans.",
  },
  {
    icon: ShieldCheck,
    title: "Improving Discharged Not Final Billed (DNFB) Rate",
    description:
      "This is a proprietary algorithm that we use to measure and manage the productivity and quality of our coding team. It allows us to monitor the coding process in real-time, identify and correct errors, and generate reports and analytics.",
  },
  {
    icon: FileStack,
    title: "Managing Discharged Not Finally Coded (DNFC) Cases",
    description:
      "This is the number of days a case remains before being finally coded after discharge. A high DNFC can delay your claim submission and reimbursement, as well as increase your coding backlog and workload. We help you lower your DNFC by providing fast and affordable coding services, using our OFC software and our skilled coders.",
  },
  {
    icon: BriefcaseMedical,
    title: "Optimizing Diagnosis-Related Group (DRG)",
    description:
      "This is a system that classifies hospital cases into groups that have similar clinical characteristics and resource use. Each DRG has a relative weight that reflects the average cost of treating a patient in that group. DRGs are used by Medicare and other payers to determine the payment rates for inpatient hospital services. We help you optimize your DRG assignment by applying our knowledge of the MS-DRG system, the coding rules, and the documentation requirements.",
  },
  {
    icon: BarChart3,
    title: "Increasing Case Mix Index (CMI)",
    description:
      "This is the average relative weight of the diagnosis-related groups (DRGs) for all patients treated at your facility. A higher CMI indicates that you have treated more complex and resource-intensive patients, which may result in higher reimbursement rates from Medicare and other payers. We help you improve your CMI by assigning the most appropriate DRGs for your cases, based on the ICD-10-CM and PCS codes and the MS-DRG system.",
  },
];

export default function MedicalCodingModernSolutions() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
      aria-labelledby="medical-coding-modern-solutions-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <MotionWrapper variant="slideRight" className="lg:col-span-6">
            <SectionHeader
              badge="Modern Solutions"
              badgeVariant="indigo"
              badgePulse
              align="left"
              title={
                <span id="medical-coding-modern-solutions-heading">
                  BellMedEx offers{" "}
                  <span className="font-bold text-blue-600">Modern Coding Solutions</span>{" "}
                  for the American Healthcare System, like:
                </span>
              }
              className="mb-6 sm:mb-8"
            />

            <AppButton href="/medical-billing-audit" variant="primary" size="lg" showArrow>
              Get Your Free Audit Report
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                className="absolute -right-3 top-8 -z-10 hidden h-24 w-24 rounded-full bg-primary/10 blur-2xl sm:block"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-3xl border border-border shadow-md">
                <div className="relative aspect-[5/4] min-h-[280px] sm:min-h-[340px]">
                  <Image
                    src="/doctor-hero.png"
                    alt="BellMedEx medical coding specialist supporting American healthcare providers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {MODERN_SOLUTIONS.map((solution) => (
            <MotionWrapper key={solution.title} variant="staggerItem" className="h-full">
              <MedicalCodingServiceCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
