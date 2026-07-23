"use client";

import React from "react";
import Image from "next/image";
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Award,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function MedicalBillingWhyChooseUs() {
  const topCards = [
    {
      icon: FileText,
      title: "Optimized RCM",
      desc: "BellMedEx's medical billing consultancy service optimizes the revenue cycle end-to-end to accelerate patient intake, expedite claims, and maximize collections. The result? More cash on hand, lower expenses, and happier patients.",
    },
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      desc: "BellMedEx's medical billing consultation group works closely with health centers to guarantee claims are submitted properly. With reimbursements coming in \"full\" and \"on time\", health facilities thrive. As consultants, we enable long-term revenue growth.",
    },
    {
      icon: Clock,
      title: "Fast Claim Processing",
      desc: "BellMedEx's medical billing consulting solutions optimize doctor's cash flow. Our consultants identify issues delaying payments and provide electronic claim processing solutions for faster payouts.",
    },
  ];

  const checklistItems = [
    "Help providers get paid and provide better patient care",
    "Improve cash flow by speeding up claims payments",
    "Identify and resolve any billing issues that may be delaying payments.",
    "Reduce administrative burdens by automating claim processing.",
    "Avoid revenue leakage by identifying and correcting any errors in billing.",
    "Help practices meet compliance and regulatory requirements.",
    "Reduce claim processing time for quick reimbursements.",
    "Reduce the costs of hiring and training a medical biller.",
    "Zero out the cost of buying expensive medical billing softwares.",
  ];

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        
        {/* Top 3 Column Cards Grid */}
        <MotionWrapper variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <MotionWrapper key={idx} variant="staggerItem">
                <Card 
                  glass={false} 
                  hoverEffect="both" 
                  className="h-full bg-white border border-[#E2E6EC] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-[0_4px_24px_rgba(29,78,216,0.04)] hover:border-[#1D4ED8]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start group"
                >
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-[#1D4ED8] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 stroke-[1.75]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-[-0.02em]">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6]">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        {/* Bottom Split Section: Image + Why Choose Us Copy & List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Consultants Laptop Image */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden border border-[#E2E6EC] shadow-md group">
              <Image
                src="/consultants-laptop.png"
                alt="BellMedEx medical billing consultants reviewing practice analytics on laptop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Certification Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">
                    Certified Medical Billing Experts
                  </h4>
                  <p className="text-[11px] text-[#475569]">
                    100% Accuracy &amp; Accelerated Collections
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column: Why Choose Us Content & Checklist */}
          <MotionWrapper variant="slideRight" className="lg:col-span-6 space-y-6 text-left">
            
            {/* Section Badge */}
            <div>
              <SectionBadge variant="indigo" icon={Sparkles} pulse>
                WHY CHOOSE US
              </SectionBadge>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.2]">
              BellMedEx&apos;s Medical Billing Consulting Service Gets Doctors Paid On Time
            </h2>

            {/* Paragraph Copies */}
            <div className="space-y-4 text-xs sm:text-[14px] text-[#475569] leading-[1.6]">
              <p>
                BellMedEx medical billing consulting company has subject-matter experts for every specialty&apos;s billing and coding workflows. By leveraging efficient claim filing, precise coding, vigilant A/R follow-up, mastery of ICD-10 billing, and proper auditing &ndash; BellMedEx&apos;s medical billing audit consultants help healthcare providers receive every dollar they&apos;ve earned when they&apos;ve earned it.
              </p>
              <p>
                We assist practices large and small in overcoming lost, delayed, or underpaid claims. Engage our 24/7 medical billing and coding consultancy for the medical billing help your practice needs.
              </p>
            </div>

            {/* 9-Point Checklist */}
            <div className="pt-2 flex flex-col gap-2.5">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-[#475569] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
