"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function MedicalBillingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What medical billing consulting services does BellMedEx provide?",
      a: "BellMedEx offers comprehensive revenue cycle management, clean claim submissions, denial management & appeals, AR recovery, eligibility verification, coding audits, and dedicated practice consultancy tailored to your medical specialty.",
    },
    {
      q: "How does BellMedEx help reduce claim denials?",
      a: "We perform automated front-end scrubbing before submission to catch errors in coding, patient demographics, and authorization details. Our certified billing experts work side-by-side with your staff to eliminate recurring rejection causes.",
    },
    {
      q: "Will we need to change our existing EHR or PMS software?",
      a: "No! BellMedEx integrates seamlessly with all major Electronic Health Record (EHR) and Practice Management Software (PMS) platforms, including Kareo, eClinicalWorks, AdvancedMD, AthenaHealth, Epic, and more.",
    },
    {
      q: "How much does medical billing consulting cost?",
      a: "Our pricing is transparent and performance-based. We charge a small percentage of successfully collected revenue (as low as 2.49%), meaning we only earn when your practice gets paid.",
    },
    {
      q: "How quickly can we get started with BellMedEx?",
      a: "Onboarding typically takes less than 5 to 7 business days. Our dedicated transition team handles setup, clearinghouse configuration, and credentialing verification with zero disruption to your daily operations.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="FREQUENTLY ASKED QUESTIONS"
          badgeVariant="indigo"
          align="center"
          title="Got Questions About Medical Billing?"
          description="Find answers to common questions about our medical billing consulting services."
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <MotionWrapper key={idx} variant="fadeUp" delay={idx * 0.05}>
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 shadow-md" 
                      : "bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-white/10 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base sm:text-lg focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#1D4ED8] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                      }`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
