"use client";

import React, { useCallback, useState } from "react";
import {
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Laptop,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultingFeaturedPanel from "./BillingConsultingFeaturedPanel";
import BillingConsultingServiceCard from "./BillingConsultingServiceCard";

interface ConsultingServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const CONSULTING_SERVICES: ConsultingServiceItem[] = [
  {
    id: "medicare-billing",
    icon: FileText,
    title: "Medicare Billing Services",
    description:
      "Medicare billing is complex, but profitability is simple with our consultants. We combine billing expertise with practice-specific revenue solutions. The result? Maximum, hassle-free Medicare reimbursements. Let us design a roadmap to financial success for your practice.",
  },
  {
    id: "provider-enrollment",
    icon: BadgeCheck,
    title: "Provider Enrollment Consultancy",
    description:
      "BellMedEx\u2019s superior medical billing consulting service knows the difficulties of provider enrollment firsthand. Therefore, we aid practices in joining insurance networks, steering applications, credentialing, and payor contract negotiations. We target plans benefiting practice and patients equally, allowing stable growth and success. Our aim is your prosperity and peace.",
  },
  {
    id: "reimbursement-forms",
    icon: ClipboardCheck,
    title: "Reimbursement Forms Filing Support",
    description:
      "File claims confidently with our CMS reimbursement consultants. Our billing experts provide personalized guidance on CMS 1500 and UB-04 forms, code auditing, and timely submission. We optimize reimbursement by managing your CMS paperwork.",
  },
  {
    id: "ehr-adoption",
    icon: Laptop,
    title: "Consultation on EHR Adoption and Integration",
    description:
      "As certified EHR implementation specialists, BellMedEx\u2019s 24/7 medical billing consultants advise on system selection, data migration, and workflow redesign to facilitate seamless EHR adoption and electronic billing integration in your practice.",
  },
];

export default function MedicalBillingConsultingServices() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeService = CONSULTING_SERVICES[activeIndex];

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      Math.min(current + 1, CONSULTING_SERVICES.length - 1)
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
        setActiveIndex(CONSULTING_SERVICES.length - 1);
        return;
      }

      setActiveIndex((current) => {
        if (key === "ArrowDown") {
          return Math.min(current + 1, CONSULTING_SERVICES.length - 1);
        }
        return Math.max(current - 1, 0);
      });
    },
    []
  );

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="billing-advisory-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge="Smart Billing Advisory"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="billing-advisory-heading">
              Maximize Your Clinic&apos;s Revenue with BellMedEx&apos;s Smart{" "}
              <span className="font-bold text-blue-600">
                Billing Advisory Services
              </span>
            </span>
          }
          description="Healthcare providers turn to BellMedEx for medical billing consulting mastery. Our consultancy helps clients gain control of their revenue cycle management, including patient billing, collections, denials management, and accounts receivable. BellMedEx guides you to revenue growth through its customized consulting services."
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
                {CONSULTING_SERVICES.map((service, idx) => (
                  <BillingConsultingServiceCard
                    key={service.id}
                    id={`consulting-tab-${service.id}`}
                    panelId={`consulting-panel-${service.id}`}
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
                  id={`consulting-panel-${activeService.id}`}
                  tabId={`consulting-tab-${activeService.id}`}
                  icon={activeService.icon}
                  title={activeService.title}
                  description={activeService.description}
                  index={activeIndex}
                  total={CONSULTING_SERVICES.length}
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
