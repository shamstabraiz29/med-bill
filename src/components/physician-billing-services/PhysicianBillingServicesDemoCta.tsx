"use client";

import React from "react";
import { TrendingUp, Award, ShieldCheck } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import PhysicianBillingServicesDemoForm from "./PhysicianBillingServicesDemoForm";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

interface PhysicianBillingServicesDemoCtaProps {
  data?: PhysicianBillingServicesPageData["demoCta"];
}

export default function PhysicianBillingServicesDemoCta({ data }: PhysicianBillingServicesDemoCtaProps) {
  const content = data || defaultPhysicianBillingServicesData.demoCta;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="physician-billing-demo-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
            
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* Left Column: Offer Info & Content */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <SectionBadge variant="dark" pulse>
                  SPECIAL LIMITED-TIME OFFER
                </SectionBadge>

                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-300">
                    {content.rateLabel}
                  </p>
                  <h2
                    id="physician-billing-demo-cta-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-300"
                  >
                    {content.rateValue}
                  </h2>
                  <p className="text-blue-200 text-sm sm:text-base leading-relaxed max-w-xl">
                    {content.rateSubtext}
                  </p>
                </div>

                {/* Key Value Points */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <span>Boost practice collections by up to <strong>30%</strong></span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/20 shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <span><strong>98%+ first-pass clean claim</strong> acceptance rate</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/20 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Zero upfront setup fees & <strong>HIPAA Compliant</strong></span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form Inputs */}
              <div className="lg:col-span-6 w-full">
                <PhysicianBillingServicesDemoForm />
              </div>

            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

