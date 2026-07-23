"use client";

import React from "react";
import { Search, Settings, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function MedicalBillingProcess() {
  const steps = [
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

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="OUR SIMPLE PROCESS"
          badgeVariant="emerald"
          align="center"
          title={
            <>
              How We Optimize Your Practice&apos;s{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Billing Operations
              </span>
            </>
          }
          description="A seamless, hassle-free transition to high-performing medical billing consultancy."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <MotionWrapper key={idx} variant="fadeUp" delay={idx * 0.1}>
                <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-emerald-300 dark:hover:border-emerald-800 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 opacity-80">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
