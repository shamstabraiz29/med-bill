"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type {
  HospitalBillingFaqItem,
  HospitalBillingFaqSectionData,
} from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesFaqSectionProps {
  data?: HospitalBillingFaqSectionData;
}

function FaqColumn({
  items,
  openIndex,
  onToggle,
  indexOffset,
}: {
  items: HospitalBillingFaqItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  indexOffset: number;
}) {
  return (
    <div className="divide-y divide-[#E2E6EC]">
      {items.map((faq, idx) => {
        const globalIndex = indexOffset + idx;
        const isOpen = openIndex === globalIndex;
        const controlsId = `hospital-billing-faq-content-${globalIndex}`;
        const headerId = `hospital-billing-faq-header-${globalIndex}`;

        return (
          <MotionWrapper key={faq.question || globalIndex} variant="staggerItem" className="py-5 first:pt-0 last:pb-0 sm:py-6">
            <div className="-mx-4 rounded-2xl px-4 transition-colors duration-300 hover:bg-[#F5F7FA]">
              <button
                id={headerId}
                type="button"
                onClick={() => onToggle(globalIndex)}
                aria-expanded={isOpen}
                aria-controls={controlsId}
                className="group flex w-full cursor-pointer items-center justify-between rounded-lg py-4 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100"
              >
                <span className="pr-4 text-base leading-[1.18] font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#1D4ED8] sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#475569] transition-transform duration-300 group-hover:text-[#1D4ED8] ${
                    isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={controlsId}
                    role="region"
                    aria-labelledby={headerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-0.5 pr-4 text-left text-sm leading-[1.6] text-[#475569] sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </MotionWrapper>
        );
      })}
    </div>
  );
}

export default function HospitalBillingServicesFaqSection({
  data,
}: HospitalBillingServicesFaqSectionProps) {
  const content = data || defaultHospitalBillingServicesData.faq;
  const items =
    content.items && content.items.length > 0
      ? content.items
      : defaultHospitalBillingServicesData.faq.items;

  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  const [openIndex, setOpenIndex] = useState<number | null>(
    content.defaultOpenIndex ?? 3
  );

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className={`${hospitalSectionClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="hospital-billing-services-faq-heading"
    >
      <div className={hospitalContainerClassName}>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            badge={content.badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="hospital-billing-services-faq-heading">
                {content.titlePlain}
                <span className="font-bold text-blue-600">{content.titleHighlight}</span>
              </span>
            }
           
          />
        </div>

        <MotionWrapper variant="stagger" staggerDelay={0.05} className="grid grid-cols-1 gap-x-10 gap-y-0 lg:grid-cols-2 lg:gap-x-12">
          <FaqColumn
            items={leftColumn}
            openIndex={openIndex}
            onToggle={toggleFAQ}
            indexOffset={0}
          />
          <FaqColumn
            items={rightColumn}
            openIndex={openIndex}
            onToggle={toggleFAQ}
            indexOffset={midpoint}
          />
        </MotionWrapper>

      
      </div>
    </section>
  );
}
