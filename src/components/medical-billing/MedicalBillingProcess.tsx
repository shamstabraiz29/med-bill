"use client";

import React from "react";
import { CheckCircle2, Rocket, Search, Settings } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Practice & Revenue Audit",
    desc: "We analyze your existing claims history, denial rates, and workflow bottlenecks to pinpoint lost revenue opportunities.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Billing Setup",
    desc: "Our team integrates seamlessly with your existing EHR/PMS software and configures automated clean-claim rules.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Active Claims Management",
    desc: "Certified consultants handle daily charge capture, claim submission, payment posting, and denial resolution.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Continuous Optimization",
    desc: "Monthly performance reviews and dedicated support ensure your practice maintains maximum profitability.",
  },
];

export default function MedicalBillingProcess() {
  return (
    <section className="relative border-y border-[#E2E6EC] bg-[#F5F7FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Simple Process"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <>
              How We Optimize Your Practice&apos;s{" "}
              <span className="font-bold text-blue-600">Billing Operations</span>
            </>
          }
          description="A seamless, hassle-free transition to high-performing medical billing consultancy."
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <MotionWrapper key={step.number} variant="fadeUp" delay={idx * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-[#E2E6EC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-2xl font-extrabold tracking-[-0.03em] text-[#1D4ED8]/30">
                    {step.number}
                  </span>
                  <IconWrapper
                    icon={step.icon}
                    size="sm"
                    variant="surface"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                  {step.desc}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
