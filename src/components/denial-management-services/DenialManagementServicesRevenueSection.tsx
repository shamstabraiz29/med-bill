"use client";

import React from "react";
import { Plus } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementRevenueCard,
  DenialManagementRevenueSectionData,
} from "@/payload/types/denialManagementServices";

function RevenueCard({ card }: { card: DenialManagementRevenueCard }) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-[#E2E6EC] border-l-4 border-l-[#1D4ED8] bg-white p-6 shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-7"
      )}
    >
      <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] transition-colors group-hover:text-[#1D4ED8] sm:text-lg">
        {card.title}
      </h3>
      <p className="mt-3 text-xs leading-[1.65] text-[#475569] sm:text-sm">
        {card.description}
      </p>
      <ul className="mt-4 space-y-2.5">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-left">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]"
              aria-hidden="true"
            >
              <Plus className="h-3 w-3 stroke-[2.5]" />
            </span>
            <span className="text-xs leading-[1.6] text-[#475569] sm:text-sm">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface DenialManagementServicesRevenueSectionProps {
  data?: DenialManagementRevenueSectionData;
}

export default function DenialManagementServicesRevenueSection({
  data,
}: DenialManagementServicesRevenueSectionProps) {
  const content = data || defaultDenialManagementServicesData.revenue;
  const cards =
    content.cards && content.cards.length > 0
      ? content.cards
      : defaultDenialManagementServicesData.revenue.cards;

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-revenue-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge variant="indigo" pulse className="mx-auto mb-4">
            {content.badge}
          </SectionBadge>

          <SectionHeader
            align="center"
            title={
              <span id="denial-management-services-revenue-heading">
                {content.titlePlain}
                <span className="text-blue-600">{content.titleHighlight}</span>
                {content.titleSuffix}
              </span>
            }
            className="mx-auto mb-0"
          />

          <div className="mx-auto mt-5 max-w-3xl space-y-4 sm:mt-6">
            <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.paragraph1}
            </p>
            <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.paragraph2}
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-sm font-semibold text-[#0F172A] sm:mt-10 sm:text-base">
            {content.gridSubheading}
          </p>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.07}
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <MotionWrapper key={`${card.title}-${index}`} variant="staggerItem" className="h-full">
              <RevenueCard card={card} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
