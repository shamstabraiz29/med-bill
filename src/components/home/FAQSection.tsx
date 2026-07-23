"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
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
    <section className="relative w-full py-20 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge="Objection Handling"
            badgeVariant="indigo"
            align="center"
            title={
              <>
                Frequently Asked{" "}
                <span className="text-blue-600">Questions</span>
              </>
            }
            description="Find clear answers to common questions regarding our medical billing process, software integration, fee structure, and onboarding schedule."
            className="space-y-4"
          />
        </div>

        {/* Full-Width FAQ Accordion List */}
        <div className="w-full">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.05}
            className="divide-y divide-[#E2E6EC]"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const controlsId = `faq-content-${idx}`;
              const headerId = `faq-header-${idx}`;

              return (
                <MotionWrapper
                  key={idx}
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

        {/* Centered Help Panel at the Bottom */}
        <div className="mt-16 sm:mt-24 text-center border-t border-[#E2E6EC] pt-16 max-w-xl mx-auto flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1D4ED8]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0F172A] tracking-[-0.02em]">
              Still have questions?
            </h4>
          </div>
          <p className="text-[#475569] text-sm sm:text-base leading-[1.6]">
            Contact our medical billing specialists for a customized walkthrough and a free EHR integration check.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <AppButton
              variant="primary"
              size="lg"
              href="/contact-us"
              className="w-full sm:w-auto text-center"
            >
              Contact Our Team
            </AppButton>
            <AppButton
              variant="secondary"
              size="lg"
              href="/contact-us"
              className="w-full sm:w-auto text-center"
            >
              Schedule a Free Consultation
            </AppButton>
          </div>
          <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
            Free Consultation • No Obligation
          </p>
        </div>

      </div>
    </section>
  );
}
