"use client";

import React, { useCallback, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultingFeaturedPanel from "@/components/medical-billing/BillingConsultingFeaturedPanel";
import BillingConsultingServiceCard from "@/components/medical-billing/BillingConsultingServiceCard";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditChartReviewsProps {
  data?: typeof defaultMedicalBillingAuditData.chartReviews;
}

export default function MedicalBillingAuditChartReviews({ data }: MedicalBillingAuditChartReviewsProps) {
  const chartData = data || defaultMedicalBillingAuditData.chartReviews;
  const services = chartData.services;

  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex] || services[0];

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      Math.min(current + 1, services.length - 1)
    );
  }, [services.length]);

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const { key } = event;
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) return;

      event.preventDefault();

      if (key === "Home") {
        setActiveIndex(0);
        return;
      }

      if (key === "End") {
        setActiveIndex(services.length - 1);
        return;
      }

      setActiveIndex((current) => {
        if (key === "ArrowDown") {
          return Math.min(current + 1, services.length - 1);
        }
        return Math.max(current - 1, 0);
      });
    },
    [services.length]
  );

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-chart-reviews-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge={chartData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-chart-reviews-heading">
              <span className="font-bold text-blue-600">{chartData.titlePlain}</span>{" "}
              {chartData.titleHighlight}
            </span>
          }
          description={chartData.description}
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper variant="fadeUp">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6 lg:min-h-[26rem]">
            <nav
              className="flex flex-col gap-3 lg:col-span-4 lg:h-full"
              aria-label="Medical chart review services"
            >
              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:h-full lg:flex-col"
                role="tablist"
                onKeyDown={handleTabKeyDown}
              >
                {services.map((service, idx) => {
                  const Icon = getIcon(service.iconName);
                  return (
                    <BillingConsultingServiceCard
                      key={service.id}
                      id={`chart-review-tab-${service.id}`}
                      panelId={`chart-review-panel-${service.id}`}
                      icon={Icon}
                      title={service.title}
                      index={idx}
                      isActive={activeIndex === idx}
                      onClick={() => setActiveIndex(idx)}
                      className="lg:flex-1 lg:min-h-0"
                    />
                  );
                })}
              </div>
            </nav>

            <div className="h-full lg:col-span-8">
              {activeService && (
                <MotionWrapper key={activeService.id} variant="fadeUp" className="h-full">
                  <BillingConsultingFeaturedPanel
                    id={`chart-review-panel-${activeService.id}`}
                    tabId={`chart-review-tab-${activeService.id}`}
                    icon={getIcon(activeService.iconName)}
                    title={activeService.title}
                    description={activeService.description}
                    index={activeIndex}
                    total={services.length}
                    onPrevious={goPrevious}
                    onNext={goNext}
                    className="h-full"
                  />
                </MotionWrapper>
              )}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
