"use client";

import React from "react";
import { BarChart3, LucideIcon, TrendingUp, Users } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { pmsCardClassName, pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsManageData } from "@/payload/types/practiceManagementSoftwarePms";

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  BarChart3,
};

interface PracticeManagementSoftwarePmsManageProps {
  data?: PmsManageData;
}

export default function PracticeManagementSoftwarePmsManage({ data }: PracticeManagementSoftwarePmsManageProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.manage;
  const itemsList =
    content.items && content.items.length > 0
      ? content.items
      : defaultPracticeManagementSoftwarePmsData.manage.items;

  return (
    <section
      className={pmsSectionAltClassName}
      aria-labelledby="practice-management-software-pms-manage-heading"
    >
      <div className={pmsContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="practice-management-software-pms-manage-heading">
              {content.titlePlain}
              <span className="text-primary">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

       

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {itemsList.map((item, idx) => {
            const ItemIcon = (item.iconName && ICON_MAP[item.iconName]) || Users;

            return (
              <MotionWrapper key={item.summary || idx} variant="staggerItem" className="h-full">
                <article className={`${pmsCardClassName} h-full`}>
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-widest text-primary">
                    {item.summary}
                  </span>

                  <IconWrapper
                    icon={ItemIcon}
                    size="md"
                    variant="surface"
                    className="mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
                  />

                  <h3 className="mb-3 text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-[1.6] text-muted-foreground sm:text-[14px]">
                    {item.content}
                  </p>
                </article>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
