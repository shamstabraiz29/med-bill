"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmFAQProps {
  data?: typeof defaultRevenueCycleManagementData.faq;
}

export default function RcmFAQ({ data }: RcmFAQProps) {
  const faqData = data || defaultRevenueCycleManagementData.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-20 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block - Centered matching Home Page style */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge={faqData.badge}
            badgeVariant="indigo"
            align="center"
            title={
              <>
                {faqData.titlePlain}{" "}
                <span className="text-blue-600">{faqData.titleHighlight}</span>
              </>
            }
            description={faqData.description}
            className="space-y-4"
          />
        </div>

        {/* Full-Width FAQ Accordion List matching Home Page */}
        <div className="w-full">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.05}
            className="divide-y divide-[#E2E6EC]"
          >
            {faqData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const controlsId = `rcm-faq-content-${idx}`;
              const headerId = `rcm-faq-header-${idx}`;

              return (
                <MotionWrapper
                  key={faq.question}
                  variant="staggerItem"
                  className="py-5 sm:py-6 first:pt-0 last:pb-0"
                >
                  {/* Accordion Container with Hover Highlight */}
                  <div className="hover:bg-[#F5F7FA] rounded-2xl px-4 -mx-4 transition-colors duration-300">
                    {/* Accordion Trigger */}
                    <button
                      id={headerId}
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      aria-controls={controlsId}
                      className="w-full flex items-center justify-between text-left py-4 group select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-lg"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors duration-200 pr-4 leading-[1.18]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#475569] shrink-0 group-hover:text-[#1D4ED8] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion Content with Custom easeOutExpo Curve */}
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
                          <div className="text-[#475569] text-sm sm:text-base leading-[1.6] pb-5 pr-4 pl-0.5 text-left">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        {/* Centered Help Panel at the Bottom matching Home Page */}
        <div className="mt-16 sm:mt-24 text-center border-t border-[#E2E6EC] pt-16 max-w-xl mx-auto flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1D4ED8]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0F172A] tracking-[-0.02em]">
              {faqData.helpTitle}
            </h4>
          </div>
          <p className="text-[#475569] text-sm sm:text-base leading-[1.6]">
            {faqData.helpDescription}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full justify-center">
            {faqData.primaryCtaLabel && (
              <AppButton
                variant="primary"
                size="lg"
                href={faqData.primaryCtaHref || "#contact"}
                className="w-full sm:w-auto text-center"
              >
                {faqData.primaryCtaLabel}
              </AppButton>
            )}
            {faqData.secondaryCtaLabel && (
              <AppButton
                variant="secondary"
                size="lg"
                href={faqData.secondaryCtaHref || "tel:8444823556"}
                className="w-full sm:w-auto text-center"
              >
                {faqData.secondaryCtaLabel}
              </AppButton>
            )}
          </div>
          {faqData.footerNote && (
            <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              {faqData.footerNote}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
