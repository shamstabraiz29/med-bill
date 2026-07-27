"use client";

import React, { useCallback, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultingFeaturedPanel from "./BillingConsultingFeaturedPanel";
import BillingConsultingServiceCard from "./BillingConsultingServiceCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingConsultingServicesProps {
  data?: typeof defaultMedicalBillingData.consultingServices;
}

export default function MedicalBillingConsultingServices({ data }: MedicalBillingConsultingServicesProps) {
  const advisoryData = data || defaultMedicalBillingData.consultingServices;
  const services = advisoryData.services;

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
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="billing-advisory-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge={advisoryData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="billing-advisory-heading">
              {advisoryData.titlePrefix}{" "}
              <span className="font-bold text-blue-600">
                {advisoryData.titleHighlight}
              </span>
            </span>
          }
          description={advisoryData.description}
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <MotionWrapper variant="fadeUp">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6 lg:min-h-[26rem]">
            <nav
              className="flex flex-col gap-3 lg:col-span-4 lg:h-full"
              aria-label="Billing advisory services"
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
                      id={`consulting-tab-${service.id}`}
                      panelId={`consulting-panel-${service.id}`}
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
                    id={`consulting-panel-${activeService.id}`}
                    tabId={`consulting-tab-${activeService.id}`}
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
