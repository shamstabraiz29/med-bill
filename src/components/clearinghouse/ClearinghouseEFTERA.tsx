"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, CreditCard } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

export interface EftEraFeature {
  title: string;
  description: string;
}

export default function ClearinghouseEFTERA() {
  const points: EftEraFeature[] = [
    {
      title: "Multi-Payer Enrollment",
      description: "Providers can easily enroll with various commercial and government payers through our software.",
    },
    {
      title: "Electronic Remittances",
      description: "Receive direct ACH payments and electronic remittance advices automatically into your bank account.",
    },
    {
      title: "Multi-Format ERA Export",
      description: "View, print, download, and export ERAs in multiple standard formats for seamless accounting.",
    },
    {
      title: "CARC & RARC Breakdown",
      description: "Access operating rules, Claim Adjustment Reason Codes (CARCs), and Remittance Advice Remark Codes (RARCs) explaining payment decisions.",
    },
    {
      title: "Real-Time Payment Tracking",
      description: "Track the status of payments in real-time and generate actionable financial performance analytics.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header matching Home page typography */}
        <SectionHeader
          badge="EFT & ERA Support"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Billing and Payments Made Easy with <span className="text-[#1D4ED8]">EFT + ERA Excellence</span>
            </>
          }
          description="Electronic Funds Transfer (EFT) sends direct ACH bank deposits while Electronic Remittance Advice (ERA) provides digital payment breakdowns. Our clearinghouse software simplifies compliance with HIPAA and PPACA Administrative Simplification rules:"
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 2-Column Split: Laptop Dashboard Mockup on Left, Clean Cardless Checklist on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Laptop Software Showcase Visual */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto lg:mr-auto aspect-[4/3] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 sm:p-3.5 overflow-hidden group">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]">
                {/* Laptop / Software Screen Image */}
                <Image
                  src="/consultants-laptop.png"
                  alt="BellMedEx EFT and ERA Electronic Payment Clearinghouse Software"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/95 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center justify-between text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <CreditCard className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                        Direct ACH & Automated ERA
                      </span>
                      <span className="text-[10px] text-blue-200 font-medium">
                        HIPAA & PPACA Compliant Transfers
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: Clean Cardless Feature Checklist */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-4.5 text-left w-full">
            {points.map((item, idx) => (
              <MotionWrapper key={idx} variant="staggerItem">
                <div className="flex items-start gap-3 text-left group">
                  {/* Clean Indigo Checkmark Badge */}
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Inline Title & Description */}
                  <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                    <span className="font-bold text-[#0F172A] text-sm sm:text-[15px] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                      {item.title} –{" "}
                    </span>
                    <span className="text-[#475569]">
                      {item.description}
                    </span>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
