"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import HeroHeader from "@/components/home/HeroHeader";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";
import { TrendingUp, ShieldCheck, FileCheck, Lock, DollarSign, Clock, Award } from "lucide-react";

interface RcmHeroProps {
  data?: typeof defaultRevenueCycleManagementData.hero;
}

export default function RcmHero({ data }: RcmHeroProps) {
  const heroData = data || defaultRevenueCycleManagementData.hero;

  const featureBullets = [
    { title: "End-to-End RCM", desc: "Complete billing & coding management", icon: ShieldCheck },
    { title: "98%+ Clean Claims", desc: "Fast first-pass reimbursements", icon: TrendingUp },
    { title: "Eligibility Check", desc: "Instant patient verification", icon: FileCheck },
    { title: "HIPAA Compliant", desc: "SOC2 secure data handling", icon: Lock },
  ];

  return (
    <section className="relative w-full bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Custom float animations identical to Home page Hero */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-1.5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Content & Form */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Home Page HeroHeader */}
            <HeroHeader
              eyebrow={heroData.badge}
              titlePrefix={heroData.titlePrefix}
              titleHighlight={heroData.titleHighlight}
              description1={heroData.description}
              description2="Our RCM billing company optimizes the revenue cycle for better financial outcomes across all specialties and health centers."
            />

            {/* Home Page CommandCapsuleForm */}
            <CommandCapsuleForm
              buttonLabel={heroData.formButtonLabel || "Request RCM Audit"}
              formTitle={heroData.formTitle}
              successTitle={heroData.successTitle}
              successDescription={heroData.successDescription}
              trustBadges={[
                "HIPAA Compliant",
                "SOC2 Secure",
                "No Upfront Cost",
                "24-Hour Callback",
              ]}
            />

            {/* Minimalist Highlights Feature Bar (NOT CARDS) */}
            <div className="w-full pt-3 border-t border-[#E2E6EC]/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EC]">
                {featureBullets.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        idx !== 0 ? "sm:pl-4 pt-2 sm:pt-0" : ""
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                        <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A] tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#475569] leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RCM Custom Doctor Visuals */}
          <DoctorVisuals
            pathId="rcm"
            imageSrc="/clearinghouse-nurse-hero.png"
            imageAlt="Revenue Cycle Management Specialist BellMedEx"
            spinningText="COMPLETE REVENUE CYCLE MANAGEMENT • 30% REVENUE INCREASE • COMPLETE REVENUE CYCLE MANAGEMENT • 30% REVENUE INCREASE •"
            widgets={[
              { icon: DollarSign, positionClassName: "top-[18%] right-[-3%]", delay: 0.25 },
              { icon: Clock, positionClassName: "top-[48%] left-[-8%]", delay: 0.35 },
              { icon: Award, positionClassName: "bottom-[10%] right-[2%]", delay: 0.45 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
