"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";

const PMS_FAQS = [
  {
    question: "How to implement and use this practice management software?",
    answer:
      "Our PMS is easy to implement and use in your daily workflow. We provide step-by-step guidance to install and configure the software on your systems and devices, plus comprehensive training so your team can schedule, bill, and manage patients effectively.",
  },
  {
    question: "Does this software comply with the healthcare laws?",
    answer:
      "BellMedEx PMS meets the standards and requirements that apply to your practice, including HIPAA and other healthcare regulations. We help you follow best practices for data privacy, security, and compliant clinical and billing workflows.",
  },
  {
    question: "How to migrate data to BellMedEx PMS?",
    answer:
      "We make it easy to transfer your existing data from paper records or another system to our practice management software. Our team consults with you on a safe, accurate migration plan and verifies that your data is complete after the process.",
  },
  {
    question: "Is this PMS customizable for my specialty?",
    answer:
      "Our PMS is flexible and customizable to suit your specialty, preferences, and goals. You can configure templates, workflows, and settings to match your practice, and request additional features or modules when needed.",
  },
  {
    question: "How can I integrate this PMS with EHR and billing?",
    answer:
      "BellMedEx PMS is compatible with the systems you already use—EHR, labs, pharmacies, clearinghouses, and telehealth. We help you connect and sync them seamlessly so scheduling, documentation, and billing stay in one flow.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We provide comprehensive support and training before, during, and after implementation. Dedicated customer service, technical support, documentation, tutorials, webinars, and onboarding resources are available whenever you need them.",
  },
];

export default function PracticeManagementSoftwarePmsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className={pmsSectionClassName}
      aria-labelledby="practice-management-software-pms-faq-heading"
    >
      <div className={pmsContainerClassName}>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            badge="Frequently Asked Questions."
            badgeVariant="indigo"
            badgePulse
            align="center"
            className="space-y-4"
            title={
              <span id="practice-management-software-pms-faq-heading">
                Frequently Asked{" "}
                <span className="font-bold text-blue-600">Questions</span>
              </span>
            }
            description="Find clear answers about implementing, customizing, integrating, and getting the most from BellMedEx practice management software."
          />
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="mx-auto max-w-4xl divide-y divide-[#E2E6EC]"
        >
          {PMS_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const controlsId = `practice-management-software-pms-faq-content-${idx}`;
            const headerId = `practice-management-software-pms-faq-header-${idx}`;

            return (
              <MotionWrapper
                key={faq.question}
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
                    className="group flex w-full cursor-pointer items-center justify-between rounded-lg py-4 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100"
                  >
                    <span className="pr-4 text-base leading-[1.18] font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#1D4ED8] sm:text-lg">
                      {faq.question}
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
                          {faq.answer}
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
