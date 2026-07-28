"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesKpiCard from "./LargePracticesKpiCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";
import { CheckCircle2, Clock, LucideIcon, ShieldAlert, Lock } from "lucide-react";

const ICONS: LucideIcon[] = [CheckCircle2, Clock, ShieldAlert, Lock];

interface LargePracticesKpisSectionProps {
  data?: LargePracticesPageData["kpis"];
}

export default function LargePracticesKpisSection({ data }: LargePracticesKpisSectionProps) {
  const content = data || defaultLargePracticesData.kpis;
  const rawCards = content.cards && content.cards.length > 0 ? content.cards : defaultLargePracticesData.kpis.cards;

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-kpis-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-kpis-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {rawCards.map((kpi, idx) => {
            const numVal = parseFloat(kpi.title.replace(/[^0-9.]/g, "")) || 95.0 + idx;
            return (
              <MotionWrapper key={kpi.number || idx} variant="staggerItem" className="h-full">
                <LargePracticesKpiCard
                  icon={ICONS[idx % ICONS.length]}
                  label={kpi.title}
                  value={numVal}
                  index={idx}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
