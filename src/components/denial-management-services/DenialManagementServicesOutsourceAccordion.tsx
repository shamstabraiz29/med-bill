"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DenialManagementOutsourceAccordionItem } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesOutsourceAccordionProps {
  items: DenialManagementOutsourceAccordionItem[];
}

export default function DenialManagementServicesOutsourceAccordion({
  items,
}: DenialManagementServicesOutsourceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E2E6EC] rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `denial-management-outsource-accordion-${index}`;

        return (
          <div key={item.title || index}>
            <button
              type="button"
              id={`${panelId}-trigger`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 sm:px-6 sm:py-5",
                isOpen && "border-l-4 border-l-[#1D4ED8] bg-blue-50/40"
              )}
            >
              <span
                className={cn(
                  "text-sm font-semibold leading-snug sm:text-base",
                  isOpen ? "text-[#1D4ED8]" : "text-[#0F172A]"
                )}
              >
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[#475569] transition-transform duration-300",
                  isOpen && "rotate-180 text-[#1D4ED8]"
                )}
                aria-hidden="true"
              />
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
                  <p className="border-t border-[#E2E6EC] px-5 pb-5 pt-4 text-xs leading-[1.65] text-[#475569] sm:px-6 sm:pb-6 sm:text-sm">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
