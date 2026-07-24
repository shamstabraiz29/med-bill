"use client";

import React from "react";
import {
  Send,
  FileCheck,
  AlertTriangle,
  Printer,
  Layers,
  Receipt,
  CreditCard,
  BarChart2,
  SlidersHorizontal,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";

export interface RcmFunctionItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function ClearinghouseRCMFunctions() {
  const rcmFunctions: RcmFunctionItem[] = [
    {
      icon: Send,
      title: "Sent File Status",
      description:
        "BellMedEx’s clearinghouse provides real-time updates on the status of sent files, ensuring transparency and accountability.",
    },
    {
      icon: FileCheck,
      title: "Claim Status Reports",
      description:
        "With comprehensive claim status reports, you can track the progress of your claims, identify any issues, and take timely action.",
    },
    {
      icon: AlertTriangle,
      title: "Rejection Analysis",
      description:
        "BellMedEx’s intelligent system analyzes claim rejections, pinpointing common errors or patterns to fix medical billing issues before they become roadblocks.",
    },
    {
      icon: Printer,
      title: "Paper Claims",
      description:
        "Even in today’s digital age, paper claims are sometimes necessary. BellMedEx handles paper claims efficiently, ensuring prompt processing.",
    },
    {
      icon: Layers,
      title: "Secondary Claims Processing",
      description:
        "When secondary insurance comes into play, BellMedEx streamlines the process, minimizing delays and maximizing reimbursements.",
    },
    {
      icon: Receipt,
      title: "Patient Statement Services",
      description:
        "Clear communication with patients is crucial. BellMedEx generates clear and concise patient statements, enhancing patient satisfaction.",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description:
        "Efficient payment processing ensures timely revenue collection. BellMedEx’s system handles payments securely and accurately.",
    },
    {
      icon: BarChart2,
      title: "Transaction Summaries",
      description:
        "Get a consolidated view of all your clearinghouse activity. Transaction summaries help you stay organized and make informed decisions.",
    },
    {
      icon: SlidersHorizontal,
      title: "Error Reports & Control Panel",
      description:
        "We don’t sweep issues under the rug; we spotlight them. A user-friendly control panel provides detailed error reports to address issues promptly.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-slate-50/50 border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancement */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header matching Home page typography */}
        <SectionHeader
          badge="Clearinghouse RCM Functions"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Our <span className="text-[#1D4ED8]">Clearinghouse</span> Intelligently Manages Your Revenue Cycle
            </>
          }
          description="At BellMedEx, we don’t just process claims; we weave financial tapestries for your medical practice. Our clearinghouse is more than a bridge—it’s a smart conductor that harmonizes your financial operations. Let’s dive into the special RCM features of our clearinghouse that sets it apart:"
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 3x3 Responsive RCM Functions Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {rcmFunctions.map((item, idx) => {
            const Icon = item.icon;

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <Card className="group relative flex flex-col h-full bg-white border border-[#E2E6EC] border-l-4 border-l-[#1D4ED8] rounded-2xl p-6 sm:p-7 hover:-translate-y-1.5 hover:border-r-[#1D4ED8]/30 hover:border-t-[#1D4ED8]/30 hover:border-b-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col flex-1 items-start text-left">
                    
                    {/* Minimalist Icon */}
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6]">
                      {item.description}
                    </p>

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
