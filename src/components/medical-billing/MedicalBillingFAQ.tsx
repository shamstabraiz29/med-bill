"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

const FAQS = [
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

export default function MedicalBillingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
      aria-labelledby="medical-billing-faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            badge="Frequently Asked Questions"
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="medical-billing-faq-heading">
                Got Questions About{" "}
                <span className="font-bold text-blue-600">Medical Billing?</span>
              </span>
            }
            description="Find answers to common questions about our medical billing consulting services."
          />
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="mx-auto max-w-4xl divide-y divide-[#E2E6EC]"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const controlsId = `medical-billing-faq-content-${idx}`;
            const headerId = `medical-billing-faq-header-${idx}`;

            return (
              <MotionWrapper
                key={faq.q}
                variant="staggerItem"
                className="py-5 first:pt-0 last:pb-0 sm:py-6"
              >
                <div className="-mx-4 rounded-2xl px-4 transition-colors duration-300 hover:bg-[#F5F7FA]">
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={controlsId}
                    className="group flex w-full cursor-pointer items-center justify-between py-4 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-lg"
                  >
                    <span className="pr-4 text-base leading-[1.18] font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#1D4ED8] sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#475569] transition-transform duration-300 group-hover:text-[#1D4ED8] ${
                        isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                      }`}
                      aria-hidden="true"
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
                        <p className="pb-5 pl-0.5 text-left text-sm leading-[1.6] text-[#475569] sm:text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
