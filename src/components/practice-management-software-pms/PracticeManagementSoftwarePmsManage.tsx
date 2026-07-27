"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, ChevronDown, LucideIcon, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";

interface ManageItem {
  title: string;
  content: string;
  icon: LucideIcon;
  summary: string;
}

const MANAGE_ITEMS: ManageItem[] = [
  {
    title: "Engage your patient to enhance your practice.",
    content:
      "Interact with patients, remind them of appointments, get feedback, and offer online access to health records and resources with patient engagement features.",
    icon: Users,
    summary: "Better outcomes through patient engagement",
  },
  {
    title: "Optimize your billing to maximize your profits.",
    content:
      "Streamline billing, reduce errors, and improve cash flow for healthcare providers with billing and revenue cycle management features. It also manages claims, verifies insurance, and processes payments.",
    icon: TrendingUp,
    summary: "Higher revenue with billing and RCM",
  },
  {
    title: "Explore your data to uncover new opportunities.",
    content:
      "Monitor performance, find improvement areas, and support data-driven decisions for healthcare providers with reporting and analytics features. It also reports compliance, measures quality and compares benchmarks.",
    icon: BarChart3,
    summary: "Smarter decisions via reporting and analytics",
  },
];

export default function PracticeManagementSoftwarePmsManage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className={pmsSectionAltClassName}
      aria-labelledby="practice-management-software-pms-manage-heading"
    >
      <div className={pmsContainerClassName}>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            badge="Practice Management."
            badgeVariant="indigo"
            badgePulse
            align="center"
            className="space-y-4"
            title={
              <span id="practice-management-software-pms-manage-heading">
                Manage your practice with ease and grace, because we{" "}
                <span className="text-blue-600">help you ace the medical space!</span>
              </span>
            }
            description="The Practice Management System by BellMedEx automates clinical workflows and patient records, giving you one platform to schedule appointments, manage billing, and deliver better care with less administrative burden."
          />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <MotionWrapper variant="slideRight">
            <div className="space-y-3 lg:sticky lg:top-24">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#475569]">
                How it connects
              </p>

              {MANAGE_ITEMS.map((item, idx) => {
                const isActive = openIndex === idx;
                const ItemIcon = item.icon;

                return (
                  <button
                    key={item.summary}
                    type="button"
                    onClick={() => setOpenIndex(idx)}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 sm:px-5 sm:py-5",
                      isActive
                        ? "border-[#1D4ED8]/30 bg-white shadow-sm"
                        : "border-[#E2E6EC] bg-white/70 hover:border-[#1D4ED8]/20 hover:bg-white"
                    )}
                  >
                    <IconWrapper
                      icon={ItemIcon}
                      size="sm"
                      variant="surface"
                      className={cn(
                        "transition-opacity duration-300",
                        !isActive && "opacity-70"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm leading-snug sm:text-[15px]",
                        isActive
                          ? "font-semibold text-[#0F172A]"
                          : "font-medium text-[#475569]"
                      )}
                    >
                      {item.summary}
                    </span>
                  </button>
                );
              })}
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" delay={0.08}>
            <div className="divide-y divide-[#E2E6EC]">
              {MANAGE_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                const controlsId = `pms-manage-content-${idx}`;
                const headerId = `pms-manage-header-${idx}`;

                return (
                  <div key={item.title} className="first:pt-0 last:pb-0 py-5 sm:py-6">
                    <div className="-mx-4 rounded-2xl px-4 transition-colors duration-300 hover:bg-[#F5F7FA]">
                      <button
                        id={headerId}
                        type="button"
                        onClick={() => toggleItem(idx)}
                        aria-expanded={isOpen}
                        aria-controls={controlsId}
                        className="group flex w-full items-center justify-between gap-4 py-3 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-lg"
                      >
                        <span
                          className={cn(
                            "text-base font-bold leading-[1.2] transition-colors duration-200 sm:text-lg",
                            isOpen
                              ? "text-[#1D4ED8]"
                              : "text-[#0F172A] group-hover:text-[#1D4ED8]"
                          )}
                        >
                          {item.title}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-[#475569] transition-transform duration-300 group-hover:text-[#1D4ED8]",
                            isOpen && "rotate-180 text-[#1D4ED8]"
                          )}
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
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-3 text-sm leading-[1.6] text-[#475569] sm:text-base">
                              {item.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
