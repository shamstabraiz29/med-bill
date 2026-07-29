"use client";

import React from "react";
import {
  CircleDollarSign,
  LucideIcon,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHeroData } from "@/payload/types/denialManagementServices";

const BULLET_ICONS: LucideIcon[] = [CircleDollarSign, ShieldCheck, TrendingUp, Zap];

interface DenialManagementServicesHeroFeaturesProps {
  data?: Pick<
    DenialManagementHeroData,
    "featuresTitlePlain" | "featuresTitleHighlight" | "featureBullets"
  >;
}

export default function DenialManagementServicesHeroFeatures({
  data,
}: DenialManagementServicesHeroFeaturesProps) {
  const content = data || defaultDenialManagementServicesData.hero;
  const bullets =
    content.featureBullets && content.featureBullets.length > 0
      ? content.featureBullets
      : defaultDenialManagementServicesData.hero.featureBullets;

  return (
    <MotionWrapper variant="fadeUp" delay={0.1}>
      <div
        className="w-full overflow-hidden rounded-3xl border border-[#E2E6EC] bg-white shadow-xs"
        aria-labelledby="denial-management-services-features-heading"
      >
        {/* Header Section matching screenshot */}
        <div className="border-b border-[#E2E6EC] p-6 sm:p-8 text-left bg-white">
          <h2
            id="denial-management-services-features-heading"
            className="text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight text-[#0F172A]"
          >
            {content.featuresTitlePlain}{" "}
            <span className="text-[#1D4ED8] font-bold">
              {content.featuresTitleHighlight}
            </span>
          </h2>
        </div>

        {/* 2x2 Feature Grid matching screenshot */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2"
        >
          {bullets.map((bullet, idx) => {
            const Icon = BULLET_ICONS[idx] || ShieldCheck;

            return (
              <MotionWrapper
                key={bullet || idx}
                variant="staggerItem"
                className={`group flex items-center gap-4 p-5 sm:p-7 transition-colors duration-300 hover:bg-slate-50/50 ${
                  idx > 0 ? "border-t border-[#E2E6EC]" : ""
                } ${
                  idx % 2 === 1 ? "sm:border-l sm:border-[#E2E6EC]" : ""
                } ${idx === 1 ? "sm:border-t-0" : ""}`}
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5.5 w-5.5 stroke-[2]" />
                </div>
                <p className="text-left text-xs sm:text-sm font-semibold leading-relaxed text-[#0F172A]">
                  {bullet}
                </p>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
}

