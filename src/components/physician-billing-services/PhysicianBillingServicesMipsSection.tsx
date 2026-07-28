"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  physicianContainerClassName,
  physicianSectionAltClassName,
} from "./physicianSectionLayout";

const MIPS_COPY = [
  "Medicare\u2019s MIPS program continues incentivizing high-quality care in 2024.",
  "For the 2024 period, the performance threshold remains at 75 points, with scores below leading to negative adjustments and scores above resulting in positive adjustments by Medicare.",
  "Miss the mark, and you lose up to 9% of reimbursements.",
  "Hit it, and you gain up to 9%.",
  "It\u2019s a big swing.",
  "Let BellMedEx Physician Billing Team take charge of your MIPS performance.",
  "We know the program inside out and will help you hit over 75% in quality reporting. Our tech integrates EHR and billing for seamless workflows that prevent denials. And our experts work tirelessly to optimize your scores.",
];

export default function PhysicianBillingServicesMipsSection() {
  return (
    <section
      className={physicianSectionAltClassName}
      aria-labelledby="physician-billing-mips-heading"
    >
      <div className={physicianContainerClassName}>
        <SectionHeader
          badge="MIPS Performance."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="physician-billing-mips-heading">
              Optimize MIPS by{" "}
              <span className="text-blue-600">Over 75 Points</span> with BellMedEx Physician
              Billing Solutions
            </span>
          }
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="max-w-2xl space-y-4">
              {MIPS_COPY.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-[1.65] text-[#475569] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
              Yes, I&apos;m Interested
            </AppButton>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white sm:aspect-16/11">
            <Image
              src="/faq-doctor.png"
              alt="Experienced physician supported by BellMedEx MIPS billing solutions"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
