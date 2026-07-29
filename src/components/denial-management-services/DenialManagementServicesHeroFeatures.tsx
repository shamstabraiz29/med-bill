"use client";

import React from "react";
import {
  CircleDollarSign,
  LucideIcon,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import { denialManagementCardClassName } from "./denialManagementSectionLayout";
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
        className={cn(
          denialManagementCardClassName,
          "overflow-hidden"
        )}
        aria-labelledby="denial-management-services-features-heading"
      >
        <div className="border-b border-[#E2E6EC] bg-slate-50/50 px-6 py-5 sm:px-8 sm:py-6">
          <h2
            id="denial-management-services-features-heading"
            className="max-w-4xl text-left text-base font-bold leading-[1.55] tracking-[-0.01em] text-[#0F172A] sm:text-lg"
          >
            {content.featuresTitlePlain}
            <span className="text-[#1D4ED8]">{content.featuresTitleHighlight}</span>
          </h2>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2"
        >
          {bullets.map((bullet, idx) => {
            const Icon = BULLET_ICONS[idx] || ShieldCheck;

            return (
              <MotionWrapper
                key={bullet}
                variant="staggerItem"
                className={cn(
                  "group flex items-start gap-4 p-5 transition-colors duration-300 hover:bg-blue-50/30 sm:gap-5 sm:p-6",
                  idx > 0 && "border-t border-[#E2E6EC]",
                  idx % 2 === 1 && "sm:border-l sm:border-[#E2E6EC]",
                  idx === 1 && "sm:border-t-0"
                )}
              >
                <IconWrapper
                  icon={Icon}
                  size="md"
                  variant="surface"
                  className="shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="pt-0.5 text-sm font-semibold leading-[1.65] text-[#0F172A] sm:text-[15px]">
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
