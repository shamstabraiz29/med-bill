"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { HomepageFaq } from "@/payload/types/homepage";

interface FAQSectionProps {
  data: HomepageFaq;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="hp-section overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge={data.badge}
            badgeVariant="indigo"
            align="center"
            title={
              <>
                {data.titlePlain}{" "}
                <span className="text-primary">{data.titleHighlight}</span>
              </>
            }
            description={data.description}
            className="space-y-4"
          />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.05}
            className="divide-y divide-border border-y border-border"
          >
            {data.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const controlsId = `faq-content-${idx}`;
              const headerId = `faq-header-${idx}`;

              return (
                <MotionWrapper
                  key={faq.id || idx}
                  variant="staggerItem"
                  className="py-1 first:pt-0 last:pb-0"
                >
                  <div className="hover:bg-muted/50 rounded-lg px-4 -mx-4 transition-colors duration-200">
                    <button
                      id={headerId}
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      aria-controls={controlsId}
                      className="w-full flex items-center justify-between text-left py-5 group select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                    >
                      <span className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
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
                          <div className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 pr-4 text-left">
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

        <div className="mt-16 sm:mt-24 text-center border-t border-border pt-16 max-w-xl mx-auto flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-primary">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-semibold text-foreground">
              {data.helpTitle}
            </h4>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {data.helpDescription}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <AppButton
              variant="primary"
              size="lg"
              href={data.primaryCta.primaryHref}
              className="w-full sm:w-auto text-center"
            >
              {data.primaryCta.primaryLabel}
            </AppButton>
            <AppButton
              variant="secondary"
              size="lg"
              href={data.secondaryCta.secondaryHref}
              className="w-full sm:w-auto text-center"
            >
              {data.secondaryCta.secondaryLabel}
            </AppButton>
          </div>
          {data.footerNote && (
            <p className="text-[10px] text-muted-foreground font-semibold tracking-[0.12em] uppercase">
              {data.footerNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
