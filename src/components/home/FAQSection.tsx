"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, HelpCircle } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a medical billing company and how can it help me?",
      a: "A medical billing company handles the submission and tracking of medical claims to insurance companies on behalf of healthcare providers. Outsourcing to BellMedEx helps reduce administrative overhead, minimize billing errors, and accelerate claim reimbursements so you can focus on patient care."
    },
    {
      q: "What is a medical billing service?",
      a: "Medical billing services encompass coding verification, electronic claims submission, denial management, accounts receivable follow-up, and patient statement generation. We handle the entire revenue cycle from start to finish to ensure maximum reimbursement."
    },
    {
      q: "What are the services offered by your medical billing company?",
      a: "We offer end-to-end medical billing, specialty-specific coding (ICD-10, CPT, HCPCS), EHR/EMR customization, provider credentialing, patient billing support, advanced collections follow-up, and detailed financial reporting dashboards."
    },
    {
      q: "How does your medical billing company handle medical claims reimbursement and denial management?",
      a: "We proactively scrub claims before submission to ensure a 97%+ clean claim pass rate. If a claim is denied, our dedicated appeals team immediately reviews, corrects, and resubmits it, tracking it to resolution to prevent lost revenue."
    },
    {
      q: "Can I monitor the performance and quality of the medical billing service I hire?",
      a: "Yes! BellMedEx provides real-time access to detailed financial reporting dashboards. You can track claim statuses, collections rates, aging accounts receivable, and net billing efficiency at any time from any device."
    },
    {
      q: "Do you offer independent and advanced medical billing services?",
      a: "Absolutely. We provide advanced billing services tailored to the unique clinical workflows and rules of over 40 medical specialties, supporting independent practices, large clinical networks, and laboratory groups nationwide."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          badge="Objection Handling"
          badgeVariant="indigo"
          title={
            <>
              Frequently Asked{" "}
              <span className="text-blue-600">
                Questions
              </span>
            </>
          }
          description="Find clear answers to common questions regarding our medical billing process, software integration, fee structure, and onboarding schedule."
          className="mb-10 sm:mb-12 max-w-4xl"
        />

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionWrapper key={idx} variant="staggerItem">
                <div
                  className={`w-full rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-slate-300 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left font-medium text-sm sm:text-base text-[#1c1a45] hover:text-blue-600 transition-colors select-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="leading-snug flex items-center gap-3">
                      <HelpCircle
                        className={`w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 transition-colors ${
                          isOpen ? "text-blue-600" : "text-slate-400"
                        }`}
                      />
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                        isOpen
                          ? "bg-[#2A2374] text-white border-[#2A2374]"
                          : "bg-slate-100 border-slate-200 text-slate-500"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                          <p className="pt-3.5">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
