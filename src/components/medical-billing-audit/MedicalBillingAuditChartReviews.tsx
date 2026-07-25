"use client";

import React, { useCallback, useState } from "react";
import {
  ClipboardCheck,
  Database,
  Laptop,
  LucideIcon,
  ShieldCheck,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultingFeaturedPanel from "@/components/medical-billing/BillingConsultingFeaturedPanel";
import BillingConsultingServiceCard from "@/components/medical-billing/BillingConsultingServiceCard";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface ChartReviewItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const CHART_REVIEW_SERVICES: ChartReviewItem[] = [
  {
    id: "medical-chart-reviews",
    icon: ClipboardCheck,
    title: "Medical Chart Reviews",
    description:
      "Our clinical auditors performs various types of medical chart reviews, such as inpatient, outpatient, radiology, DME audit, mammography audit, etc. We assess the quality of the care provided, the compliance with the coding and documentation standards, and the adherence to the clinical guidelines.",
  },
  {
    id: "risk-adjustment-validation",
    icon: ShieldCheck,
    title: "Risk Adjustment Data Validation",
    description:
      "We can verify the accuracy of your risk adjustment data, such as diagnosis codes, hierarchical condition categories (HCCs), and risk scores. This can help you optimize your reimbursement, avoid penalties, and improve patient outcomes.",
  },
  {
    id: "data-abstraction-review",
    icon: Database,
    title: "Data Abstraction Review",
    description:
      "We extract and abstract relevant data from your medical charts, such as diagnosis, procedures, medications, lab results, and quality measures. We also verify the accuracy of data entry in your EHR or other systems.",
  },
  {
    id: "charge-validation",
    icon: Laptop,
    title: "Charge Validation",
    description:
      "We review your charge capture process to ensure the charges billed to the payers are accurate and supported by the documentation in the medical chart. We also identify and resolve any undercharges or overcharges that may affect your revenue cycle.",
  },
];

export default function MedicalBillingAuditChartReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = CHART_REVIEW_SERVICES[activeIndex];

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      Math.min(current + 1, CHART_REVIEW_SERVICES.length - 1)
    );
  }, []);

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
        setActiveIndex(CHART_REVIEW_SERVICES.length - 1);
        return;
      }

      setActiveIndex((current) => {
        if (key === "ArrowDown") {
          return Math.min(current + 1, CHART_REVIEW_SERVICES.length - 1);
        }
        return Math.max(current - 1, 0);
      });
    },
    []
  );

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-chart-reviews-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge="Enhance Your Data Quality and Compliance"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-chart-reviews-heading">
              <span className="font-bold text-blue-600">Medical Chart Reviews</span>{" "}
              and Validations
            </span>
          }
          description="BellMedEx has certified doctors, auditors, and clinicians who can perform various types of reviews on your medical charts, such as:"
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
                {CHART_REVIEW_SERVICES.map((service, idx) => (
                  <BillingConsultingServiceCard
                    key={service.id}
                    id={`chart-review-tab-${service.id}`}
                    panelId={`chart-review-panel-${service.id}`}
                    icon={service.icon}
                    title={service.title}
                    index={idx}
                    isActive={activeIndex === idx}
                    onClick={() => setActiveIndex(idx)}
                    className="lg:flex-1 lg:min-h-0"
                  />
                ))}
              </div>
            </nav>

            <div className="h-full lg:col-span-8">
              <MotionWrapper key={activeService.id} variant="fadeUp" className="h-full">
                <BillingConsultingFeaturedPanel
                  id={`chart-review-panel-${activeService.id}`}
                  tabId={`chart-review-tab-${activeService.id}`}
                  icon={activeService.icon}
                  title={activeService.title}
                  description={activeService.description}
                  index={activeIndex}
                  total={CHART_REVIEW_SERVICES.length}
                  onPrevious={goPrevious}
                  onNext={goNext}
                  className="h-full"
                />
              </MotionWrapper>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
