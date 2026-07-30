"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { hospitalCardClassName } from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingServicesHeroData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesHeroStatsProps {
  data?: Pick<HospitalBillingServicesHeroData, "stats">;
}

export default function HospitalBillingServicesHeroStats({
  data,
}: HospitalBillingServicesHeroStatsProps) {
  const stats =
    data?.stats && data.stats.length > 0
      ? data.stats
      : defaultHospitalBillingServicesData.hero.stats;

  return (
    <MotionWrapper variant="scaleUp" delay={0.15}>
      <div className={`${hospitalCardClassName} p-8 sm:p-9`}>
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[#475569]">
          Hospital Billing Outcomes
        </p>

        <div className="divide-y divide-[#E2E6EC]">
          {stats.map((stat, idx) => (
            <div key={stat.label || idx} className="py-5 first:pt-0 last:pb-0">
              <p className="text-3xl font-extrabold tracking-[-0.03em] text-[#1D4ED8] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
