"use client";

import React from "react";
import HeroHeader from "@/components/home/HeroHeader";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import type { HealthcareSeoHeroData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";
import { Search, TrendingUp, ShieldCheck, Globe } from "lucide-react";

interface HealthcareSeoHeroProps {
  data?: HealthcareSeoHeroData;
}

export default function HealthcareSeoHero({ data }: HealthcareSeoHeroProps) {
  const content = data || defaultHealthcareSeoData.hero;

  const featureBullets = [
    { title: "#1 Google Rank", desc: "Dominate local search map packs", icon: Search },
    { title: "Patient Growth", desc: "350%+ increase in patient reach", icon: TrendingUp },
    { title: "HIPAA Marketing", desc: "100% compliant ad campaigns", icon: ShieldCheck },
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
              eyebrow={content.badge}
              titlePrefix={content.titlePrefix}
              titleHighlight={content.titleHighlight}
              description1={content.subtitle}
              description2="Trust our medical marketing team to build your practice authority, drive qualified patient inquiries, and dominate search results."
            />

            {/* Home Page CommandCapsuleForm */}
            <CommandCapsuleForm
              buttonLabel={content.formButtonLabel || "GET FREE PROPOSAL"}
              formTitle="Request Your Free Healthcare SEO Proposal"
              successTitle={content.successTitle || "Proposal Request Received!"}
              successDescription={
                content.successDescription ||
                "Our Healthcare SEO experts are preparing your custom audit report and will reach out shortly."
              }
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

          {/* RIGHT COLUMN: Healthcare SEO Custom Doctor Visuals */}
          <DoctorVisuals
            pathId="seo"
            imageSrc="/consultants-laptop.png"
            imageAlt="Healthcare SEO Digital Specialist BellMedEx"
            spinningText="HEALTHCARE DIGITAL MARKETING • #1 GOOGLE RANK GUARANTEE • HEALTHCARE DIGITAL MARKETING • #1 GOOGLE RANK GUARANTEE •"
            widgets={[
              { icon: Search, positionClassName: "top-[18%] right-[-3%]", delay: 0.25 },
              { icon: TrendingUp, positionClassName: "top-[48%] left-[-8%]", delay: 0.35 },
              { icon: Globe, positionClassName: "bottom-[10%] right-[2%]", delay: 0.45 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
