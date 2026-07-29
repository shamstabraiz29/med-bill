"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import HospitalBillingServicesTestimonialCard from "./HospitalBillingServicesTestimonialCard";
import {
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingTestimonialsSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesTestimonialsSectionProps {
  data?: HospitalBillingTestimonialsSectionData;
}

function TrustpilotMark() {
  return (
    <svg className="h-4 w-4 shrink-0 fill-[#00B67A]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0l3.692 7.478 8.308 1.207-6.008 5.856 1.419 8.273-7.411-3.897-7.412 3.897 1.419-8.273-6.008-5.856 8.308-1.207z" />
    </svg>
  );
}

export default function HospitalBillingServicesTestimonialsSection({
  data,
}: HospitalBillingServicesTestimonialsSectionProps) {
  const content = data || defaultHospitalBillingServicesData.testimonials;
  const items = content.items?.length ? content.items : defaultHospitalBillingServicesData.testimonials.items;

  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [visibleCount, activeIndex, maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const navButtonClassName =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2E6EC] bg-white text-[#475569] transition-all hover:border-blue-100 hover:text-[#1D4ED8] hover:shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100";

  return (
    <section
      className={`${hospitalSectionClassName} border-y border-[#E2E6EC] bg-[#F5F7FA]`}
      aria-labelledby="hospital-billing-services-testimonials-heading"
    >
      <div className={hospitalContainerClassName}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-3xl sm:mb-12"
          title={
            <span id="hospital-billing-services-testimonials-heading">
              {content.titlePlain}
              <span className="font-bold text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={
            <p>
              Rated {content.trustpilotRating} based on{" "}
              <span className="underline decoration-[#475569]/40 underline-offset-2">
                {content.trustpilotReviewCount}
              </span>{" "}
              reviews on{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
                <TrustpilotMark />
                Trustpilot
              </span>
            </p>
          }
        />

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className={navButtonClassName}
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 stroke-2" />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / (isMounted ? visibleCount : 3))}%)`,
              }}
            >
              {items.map((item, idx) => (
                <div
                  key={item.id || item.reviewTitle || idx}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / (isMounted ? visibleCount : 3)}%` }}
                >
                  <HospitalBillingServicesTestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className={navButtonClassName}
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 stroke-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
