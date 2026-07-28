"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  fusionediContainerClassName,
  fusionediSectionClassName,
} from "./fusionediSectionLayout";

const CTA_HIGHLIGHTS = [
  "Easy registration",
  "Access 24/7",
  "Specialty specific",
];

import { FusionediGetStartedCtaData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

interface FusionediClearinghouseGetStartedCtaProps {
  data?: FusionediGetStartedCtaData;
}

export default function FusionediClearinghouseGetStartedCta({ data }: FusionediClearinghouseGetStartedCtaProps) {
  const content = data || defaultFusionediClearinghouseData.getStartedCta;
  const highlightsList = content.highlights && content.highlights.length > 0 ? content.highlights : defaultFusionediClearinghouseData.getStartedCta.highlights;

  return (
    <section
      className={`${fusionediSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="fusionedi-clearinghouse-get-started-cta-heading"
    >
      <div className={fusionediContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_40%)]"
            />

            <div className="relative z-10">
              <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mb-10 sm:gap-x-10">
                {highlightsList.map((item: any, idx: number) => {
                  const label = typeof item === 'string' ? item : item?.label || '';
                  return (
                    <li
                      key={label || idx}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-100 sm:text-sm"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                      {label}
                    </li>
                  );
                })}
              </ul>

              <h2
                id="fusionedi-clearinghouse-get-started-cta-heading"
                className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
              >
                {content.titlePlain}
                <br />
                <span className="text-amber-300">{content.titleHighlight}</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.6] text-blue-200 sm:mt-5 sm:text-base">
                {content.subtitle}
              </p>

              <div className="mt-8 flex justify-center sm:mt-10">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {content.buttonText || "Get Started For Free"}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
