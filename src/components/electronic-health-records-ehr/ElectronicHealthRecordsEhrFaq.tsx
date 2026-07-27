"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  ehrContainerClassName,
  ehrSectionAltClassName,
} from "./ehrSectionLayout";

const EHR_FAQS = [
  {
    question: "How to implement and use this EHR software?",
    answer:
      "Our EHR software is easy to implement and use in your daily workflow. We provide you with the steps and guidance to install and configure the software on your system and devices. We also offer you comprehensive & personalized training on how to use the software effectively and efficiently.",
  },
  {
    question: "Does this software comply with the healthcare laws?",
    answer:
      "Our EHR software is certified by the relevant authorities and meets the standards and requirements of the laws and regulations that apply to your practice, such as HIPAA, Meaningful Use, and MACRA. We also help you follow the best practices and policies for data privacy and security.",
  },
  {
    question: "How to migrate data to BellMedEx EHR software?",
    answer:
      "We make it easy for you to transfer your existing data from paper records or another system to our EHR software. We consult with you on how to migrate your data safely and accurately. We also verify that the data is complete and correct after the migration process.",
  },
  {
    question: "Is this EHR software customizable?",
    answer:
      "Our EHR software is flexible and customizable to suit your specialty, preferences, and goals. You can explore the options and settings available in the software to tailor it to your needs. You can also request additional features or modules from us if needed.",
  },
  {
    question: "How can I integrate this EHR software?",
    answer:
      "Our EHR software is compatible and interoperable with all systems and devices that you use in your practice, such as labs, pharmacies, billing, and telehealth. We help you connect and sync them with the software seamlessly and securely.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We provide comprehensive and timely support and training for our EHR software before, during, and after the implementation process. We have a dedicated customer service, technical support, documentation, tutorials, webinars, forums, etc. available for you anytime you need them.",
  },
];

export default function ElectronicHealthRecordsEhrFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className={ehrSectionAltClassName}
      aria-labelledby="electronic-health-records-ehr-faq-heading"
    >
      <div className={ehrContainerClassName}>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            badge="Frequently Asked Questions."
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="electronic-health-records-ehr-faq-heading">
                Frequently Asked{" "}
                <span className="font-bold text-blue-600">Questions</span>
              </span>
            }
            description="Find clear answers about implementing, customizing, integrating, and getting the most from BellMedEx EHR software."
            className="space-y-4"
          />
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="mx-auto max-w-4xl divide-y divide-[#E2E6EC]"
        >
          {EHR_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const controlsId = `electronic-health-records-ehr-faq-content-${idx}`;
            const headerId = `electronic-health-records-ehr-faq-header-${idx}`;

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
