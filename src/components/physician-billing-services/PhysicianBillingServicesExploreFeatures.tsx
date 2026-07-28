"use client";

import React from "react";
import {
  BarChart3,
  ClipboardList,
  CreditCard,
  FileText,
  LucideIcon,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  physicianContainerClassName,
  physicianSectionBlockClassName,
} from "./physicianSectionLayout";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardList,
  RefreshCw,
  CreditCard,
  FileText,
  BarChart3,
};

interface PhysicianBillingServicesExploreFeaturesProps {
  data?: PhysicianBillingServicesPageData["exploreFeatures"];
}

export default function PhysicianBillingServicesExploreFeatures({ data }: PhysicianBillingServicesExploreFeaturesProps) {
  const content = data || defaultPhysicianBillingServicesData.exploreFeatures;
  const rawFeatures = content.features && content.features.length > 0 ? content.features : defaultPhysicianBillingServicesData.exploreFeatures.features;

  return (
    <section
      className={`${physicianSectionBlockClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="physician-billing-explore-features-heading"
    >
      <div className={physicianContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="physician-billing-explore-features-heading">
              {content.titlePlain} <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rawFeatures.map((feature, idx) => {
            const Icon = (feature.iconName && ICON_MAP[feature.iconName]) || ShieldCheck;
            return (
              <div key={feature.title || idx} className="h-full rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-7">
                <IconWrapper icon={Icon} size="md" variant="surface" className="mb-4" />
                <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-[#475569]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
