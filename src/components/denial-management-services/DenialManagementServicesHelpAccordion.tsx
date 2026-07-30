"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import {
  denialManagementCardClassName,
  denialManagementSectionBodyClassName,
  denialManagementSectionLeadClassName,
} from "./denialManagementSectionLayout";
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
      <p className={`mb-5 sm:mb-6 ${denialManagementSectionLeadClassName}`}>{heading}</p>

      <div className="space-y-3 sm:space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `denial-management-help-accordion-${index}`;

          return (
            <div key={item.title || index} className={`overflow-hidden ${denialManagementCardClassName}`}>
              <button
                type="button"
                id={`${panelId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]/40 sm:px-5 sm:py-5 ${
                  isOpen ? "bg-blue-50/40 hover:bg-blue-50/40" : "bg-slate-50 hover:bg-blue-50/40"
                }`}
              >
                <span className="text-sm font-semibold leading-snug text-[#0F172A] sm:text-base">
                  {item.title}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D4ED8]/20 bg-white text-[#1D4ED8] shadow-sm"
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
                    <div className="space-y-3 border-t border-[#E2E6EC] bg-white px-4 py-4 sm:px-5 sm:py-5">
                      <p className={denialManagementSectionBodyClassName}>{item.problem}</p>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A] sm:text-base">The solution:</p>
                        <p className={`mt-1.5 ${denialManagementSectionBodyClassName}`}>{item.solution}</p>
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
