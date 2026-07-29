"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Plus, X } from "lucide-react";
import type { DenialManagementHelpAccordionItem } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesHelpAccordionProps {
  heading: string;
  items: DenialManagementHelpAccordionItem[];
}

export default function DenialManagementServicesHelpAccordion({
  heading,
  items,
}: DenialManagementServicesHelpAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <p className="mb-5 flex items-center justify-center gap-2 text-center text-sm font-semibold text-[#0F172A] sm:mb-6 sm:text-base">
        <ChevronDown className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
        {heading}
        <ChevronDown className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
      </p>

      <div className="space-y-3 sm:space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `denial-management-help-accordion-${index}`;

          return (
            <div
              key={item.title || index}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0F172A] shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                type="button"
                id={`${panelId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 sm:px-5 sm:py-5"
              >
                <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                  {item.title}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isOpen
                      ? "border-white/30 bg-white/15 text-white"
                      : "border-white/20 bg-white/10 text-white/90"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={`${panelId}-trigger`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 border-t border-white/10 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                      <p className="text-xs leading-[1.65] text-blue-100 sm:text-sm">
                        {item.problem}
                      </p>
                      <div>
                        <p className="text-xs font-bold text-white sm:text-sm">The solution:</p>
                        <p className="mt-1.5 text-xs leading-[1.65] text-blue-100 sm:text-sm">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
