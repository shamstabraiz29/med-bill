"use client";

import React from "react";
import Link from "next/link";
import { Globe, Laptop, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export interface CapabilityItem {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlights: string[];
  link: string;
  linkLabel: string;
}

export default function ClearinghouseCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      id: "nationwide",
      category: "Payer Connectivity",
      icon: Globe,
      title: "Nationwide Clearinghouse",
      description:
        "Our medical claims clearinghouse supports payers nationwide. A provider can submit claims to any commercial or private payer in the country.",
      highlights: [
        "1,000+ Commercial & Private Payers",
        "Real-Time Eligibility Verification",
        "Direct Nationwide EDI Network",
      ],
      link: "/schedule-a-demo",
      linkLabel: "Explore Payer Network",
    },
    {
      id: "software-support",
      category: "Interoperability",
      icon: Laptop,
      title: "All Software Support",
      description:
        "Our medical billing clearinghouse solution works seamlessly with your preferred medical billing software. Plus, a dedicated support staff is available to assist you.",
      highlights: [
        "Seamless EHR & PMS Integration",
        "Zero Workflow Disruption",
        "Dedicated Technical Support Team",
      ],
      link: "/medical-billing-software",
      linkLabel: "Check Software Compatibility",
    },
    {
      id: "rcm-intelligence",
      category: "Analytics & Insights",
      icon: BarChart3,
      title: "RCM Intelligence",
      description:
        "Doctors can access real-time data and reports on their claims status, denial reasons, rejection rates, and payment trends via our healthcare clearinghouse.",
      highlights: [
        "Real-Time Denial & Rejection Tracking",
        "Interactive Financial Dashboards",
        "Actionable Revenue Cycle Metrics",
      ],
      link: "/revenue-cycle-management-rcm",
      linkLabel: "View RCM Intelligence",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-[#E2E6EC] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <SectionHeader
          badge="Clearinghouse Capabilities"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <>
              Enterprise Clearinghouse{" "}
              <span className="text-[#1D4ED8]">Built for Healthcare</span>
            </>
          }
          description="Streamline claims submission, automate eligibility checks, and optimize payer workflows with our high-performance EDI engine."
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* 3-Column Feature Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <MotionWrapper key={item.id} variant="staggerItem" className="h-full">
                <Card className="group relative flex flex-col h-full bg-white border border-[#E2E6EC] rounded-2xl p-8 hover:-translate-y-1.5 hover:border-[#1D4ED8]/40 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col flex-1 items-start text-left">

                    {/* Header Row: Icon & Category Badge */}
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-colors duration-300">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>

                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-[#475569] group-hover:bg-blue-50 group-hover:text-[#1D4ED8] transition-colors">
                        {item.category}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-[-0.02em] leading-snug group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.65] mb-6">
                      {item.description}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="w-full space-y-2.5 pt-4 border-t border-[#E2E6EC] mb-6 mt-auto">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                          <span className="text-xs font-medium text-[#0F172A]">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="w-full pt-2">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

      </div>
    </section>
  );
}
