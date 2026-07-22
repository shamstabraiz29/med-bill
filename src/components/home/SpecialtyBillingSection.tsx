"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";

export default function SpecialtyBillingSection() {
  const specialties = [
    "Laboratory Billing",
    "Urology",
    "Cardiology",
    "Behavioral Health",
    "Urgent Care",
    "Orthopedics"
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start text-left">
          
          {/* Left Side: Title & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <SectionBadge variant="indigo">
              Comprehensive Specialties
            </SectionBadge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1a45] tracking-tight leading-tight">
              Specialty{" "}
              <span className="text-blue-600">
                Medical Billing
              </span>
            </h2>

            <div className="pt-2">
              <AppButton
                href="/medical-billing-pricing-bellmedex"
                variant="primary"
                size="md"
                showArrow
              >
                View all specialties
              </AppButton>
            </div>
          </div>

          {/* Right Side: Paragraph Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-2 lg:pt-8">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Our tailored medical billing services boost reimbursements through specialty-focused billing teams adept at ICD-10 coding rules and protocols unique to your medical niche. And we customize your EHR to match your specialty&apos;s workflows.
            </p>
          </div>

        </div>

        {/* Specialties Container Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 mt-12 sm:mt-16 shadow-sm">

          {/* Specialty cards grid */}
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {specialties.map((specialty, idx) => (
              <MotionWrapper key={idx} variant="staggerItem">
                <div
                  className="bg-white border border-slate-200 rounded-xl py-4 px-6 hover:shadow-sm hover:-translate-y-0.5 hover:border-indigo-300 transition-all duration-200 cursor-pointer text-center flex items-center justify-center min-h-[60px]"
                >
                  <span className="text-[#1c1a45] text-sm font-semibold tracking-tight">
                    {specialty}
                  </span>
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
