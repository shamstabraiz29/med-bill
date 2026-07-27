"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

const HERO_FAQ_ITEMS = [
  {
    question: "What is physician billing?",
    answer:
      "Physician billing is the process of coding patient encounters, submitting claims to payers, posting payments, and following up on denials so physicians receive accurate reimbursement for care delivered.",
  },
  {
    question: "How Physician Billing Services help?",
    answer:
      "Outsourced physician billing reduces administrative burden, improves clean-claim rates, accelerates collections, and gives your team more time to focus on patient care instead of revenue cycle tasks.",
  },
  {
    question: "How will physician billing be impacted by MIPS?",
    answer:
      "MIPS ties a portion of physician reimbursement to quality and cost metrics. Strong billing workflows help capture accurate data, report performance correctly, and protect revenue under value-based payment models.",
  },
];

export default function PhysicianBillingServicesHeroAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-xl divide-y divide-[#E2E6EC] border-t border-[#E2E6EC]">
      {HERO_FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `physician-billing-hero-faq-${index}`;

        return (
          <div key={item.question} className="py-1">
            <button
              type="button"
              id={`${panelId}-trigger`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:text-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-lg"
            >
              <span className="text-sm font-semibold text-[#0F172A] sm:text-base">
                {item.question}
              </span>
              <Plus
                className={`h-4 w-4 shrink-0 text-[#475569] transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-[#1D4ED8]" : ""
                }`}
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
                  <p className="pb-3 text-xs leading-[1.65] text-[#475569] sm:text-sm">
                    {item.answer}
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
