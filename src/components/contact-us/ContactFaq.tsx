"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactFaqData } from "@/payload/types/contactUs";

interface ContactFaqProps {
  data?: ContactFaqData;
}

export default function ContactFaq({ data }: ContactFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const content = data || defaultContactUsData.faq;
  const faqsList = content.faqs && content.faqs.length > 0 ? content.faqs : defaultContactUsData.faq.faqs;

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            badge={content.badge}
            badgeVariant="indigo"
            align="center"
            title={
              <>
                {content.titlePlain}{" "}
                <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              </>
            }
            description={content.description}
            className="space-y-4"
          />
        </div>

        {/* Full-Width FAQ Accordion List (max-w-7xl) */}
        <div className="w-full">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.05}
            className="divide-y divide-[#E2E6EC]"
          >
            {faqsList.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const controlsId = `contact-faq-content-${idx}`;
              const headerId = `contact-faq-header-${idx}`;

              return (
                <MotionWrapper
                  key={faq.q || idx}
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
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#475569] shrink-0 group-hover:text-[#1D4ED8] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion Content with Motion Animation */}
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
                            {faq.a}
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

      </div>
    </section>
  );
}
