"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { cn } from "@/lib/utils";
import type { HomepageFaq } from "@/payload/types/homepage";

interface FAQSectionProps {
  data: HomepageFaq;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <HomeSection tone="white" className="pb-24">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <HomeSectionHeader
            label={data.badge}
            title={
              <>
                {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
              </>
            }
            description={data.description}
          />
          <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-6 text-white shadow-xl shadow-slate-900/20">
            <h4 className="text-lg font-semibold">{data.helpTitle}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{data.helpDescription}</p>
            <div className="mt-5 flex flex-col gap-2.5">
              <HomeButton href={data.primaryCta.primaryHref} variant="accent" size="md" className="w-full justify-center">
                {data.primaryCta.primaryLabel}
              </HomeButton>
              <HomeButton href={data.secondaryCta.secondaryHref} variant="outline" inverted size="md" className="w-full justify-center">
                {data.secondaryCta.secondaryLabel}
              </HomeButton>
            </div>
            {data.footerNote && (
              <p className="mt-4 text-center text-xs text-slate-400">{data.footerNote}</p>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-2">
            {data.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id || idx}
                  className={cn(
                    "overflow-hidden rounded-3xl border transition-all duration-200",
                    isOpen ? "border-sky-200 bg-sky-50/50 shadow-sm" : "border-slate-100 bg-white"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className={cn("font-medium", isOpen ? "text-slate-900" : "text-slate-800")}>{faq.question}</span>
                    <span className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen ? "bg-sky-100 text-sky-600" : "bg-slate-50 text-slate-400"
                    )}>
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
