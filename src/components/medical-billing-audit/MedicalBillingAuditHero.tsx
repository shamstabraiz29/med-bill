"use client";

import React from "react";
import HeroHeader from "@/components/home/HeroHeader";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";
import { ClipboardCheck, ShieldCheck, TrendingUp, Target, Lock } from "lucide-react";

interface MedicalBillingAuditHeroProps {
  data?: typeof defaultMedicalBillingAuditData.hero;
}

export default function MedicalBillingAuditHero({ data }: MedicalBillingAuditHeroProps) {
  const heroData = data || defaultMedicalBillingAuditData.hero;

  const featureBullets = [
    { title: "Audit Accuracy", desc: "Comprehensive chart & claim inspection", icon: ClipboardCheck },
    { title: "Compliance Protected", desc: "Head off billing violations & fines", icon: ShieldCheck },
    { title: "Revenue Recovery", desc: "Uncover & fix hidden billing leaks", icon: TrendingUp },
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
              titlePrefix={heroData.titlePlain}
              titleHighlight={heroData.titleHighlight}
              description1={heroData.description1}
              description2={heroData.description2}
            />

            {/* Home Page CommandCapsuleForm */}
            <CommandCapsuleForm
              buttonLabel={heroData.formButtonLabel || "BOOK NOW"}
              formTitle={heroData.formTitle || "Schedule Free Medical Billing Audit"}
              successTitle="Audit Request Received!"
              successDescription="Our senior auditors will review your practice charts and get back to you shortly."
              trustBadges={[
                "HIPAA Compliant",
                "SOC2 Secure",
                "No Upfront Cost",
                "24-Hour Callback",
              ]}
            />

            {/* Minimalist Highlights Feature Bar (NOT CARDS) */}
            <div className="w-full pt-3 border-t border-[#E2E6EC]/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EC]">
                {featureBullets.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${
                        idx !== 0 ? "sm:pl-4 pt-3 sm:pt-0" : ""
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Medical Billing Audit Custom Doctor Visuals */}
          <DoctorVisuals
            pathId="audit"
            imageSrc="/faq-doctor.png"
            imageAlt="Senior Billing Compliance Auditor BellMedEx"
            spinningText="COMPREHENSIVE BILLING AUDITS • 100% COMPLIANCE ASSURANCE • COMPREHENSIVE BILLING AUDITS • 100% COMPLIANCE ASSURANCE •"
            widgets={[
              { icon: ClipboardCheck, positionClassName: "top-[18%] right-[-3%]", delay: 0.25 },
              { icon: Target, positionClassName: "top-[48%] left-[-8%]", delay: 0.35 },
              { icon: Lock, positionClassName: "bottom-[10%] right-[2%]", delay: 0.45 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
