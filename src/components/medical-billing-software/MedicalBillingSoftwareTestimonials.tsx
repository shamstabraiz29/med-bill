"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  softwareContainerClassName,
  softwareSectionClassName,
} from "./softwareSectionLayout";

interface SoftwareTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  highlight: React.ReactNode;
}

const SOFTWARE_TESTIMONIALS: SoftwareTestimonial[] = [
  {
    id: "dr-carolyn",
    quote:
      "[BellMedEx Medical Billing Software] has been an integral part of our business's success since we signed on. We are grateful to have access to such awesome service and accurate claim submission and accounting.",
    name: "Dr. Carolyn",
    role: "Healer & Acupuncturist",
    highlight: (
      <>
        Our software can boost your medical revenue by an average of{" "}
        <span className="font-bold text-amber-300">up to 30%</span> within the first{" "}
        <span className="font-bold text-amber-300">90 days</span>.
      </>
    ),
  },
  {
    id: "dr-julia",
    quote:
      "You have made my job as a practice owner much easier. I can relax a bit more knowing that you all have things handled.",
    name: "Dr. Julia",
    role: "Psychotherapist in the USA",
    highlight: (
      <>
        Providers can save up to{" "}
        <span className="font-bold text-amber-300">20 hours per week</span> by automating
        their billing workflows.
      </>
    ),
  },
  {
    id: "dr-melissa",
    quote:
      "[This software] has helped us recover and clean up our account receivables within a matter of weeks, which would have taken us months to accomplish on our own. I highly recommend it for any of your billing needs!",
    name: "Dr. Melissa",
    role: "Speech Pathologist",
    highlight: (
      <>
        Cut your denials by{" "}
        <span className="font-bold text-amber-300">50%</span> with BellMedEx
        specialty-specific billing software.
      </>
    ),
  },
];

export default function MedicalBillingSoftwareTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = SOFTWARE_TESTIMONIALS[activeIndex];
  const total = SOFTWARE_TESTIMONIALS.length;

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    },
    [goPrevious, goNext]
  );

  return (
    <section
      className={softwareSectionClassName}
      aria-labelledby="medical-billing-software-testimonials-heading"
      aria-roledescription="carousel"
    >
      <div className={softwareContainerClassName}>
        <h2 id="medical-billing-software-testimonials-heading" className="sr-only">
          Client testimonials
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <MotionWrapper key={activeTestimonial.id} variant="fadeUp">
            <div className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] sm:rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                  <div>
                    <IconWrapper
                      icon={Quote}
                      size="sm"
                      variant="surface"
                      className="mb-6"
                    />

                    <blockquote className="text-sm leading-[1.7] text-[#475569] sm:text-base">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-8 border-t border-[#E2E6EC] pt-6">
                    <p className="text-base font-bold tracking-[-0.02em] text-[#0F172A]">
                      {activeTestimonial.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#475569] sm:text-sm">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center border-t border-[#E2E6EC] bg-[#0F172A] p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
                  <p className="text-lg font-bold leading-snug tracking-[-0.02em] text-white sm:text-xl lg:text-2xl">
                    {activeTestimonial.highlight}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-2.5">
              {SOFTWARE_TESTIMONIALS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 bg-[#1D4ED8]"
                      : "w-2 bg-[#E2E6EC] hover:bg-[#475569]"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E6EC] bg-white text-[#475569] transition-all hover:border-blue-100 hover:text-[#1D4ED8] hover:shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100"
              >
                <ChevronLeft className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E6EC] bg-white text-[#475569] transition-all hover:border-blue-100 hover:text-[#1D4ED8] hover:shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100"
              >
                <ChevronRight className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
