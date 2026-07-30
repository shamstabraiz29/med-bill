"use client";

import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import TrustpilotReviewCard from "./TrustpilotReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import type { HomepageTestimonials } from "@/payload/types/homepage";

interface TestimonialCarouselProps {
  data: HomepageTestimonials;
  variant?: "default" | "trustpilot";
}

function TrustpilotMark() {
  return (
    <svg className="h-4 w-4 shrink-0 fill-[#00B67A]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0l3.692 7.478 8.308 1.207-6.008 5.856 1.419 8.273-7.411-3.897-7.412 3.897 1.419-8.273-6.008-5.856 8.308-1.207z" />
    </svg>
  );
}

function TrustpilotSummary({
  rating,
  reviewCount,
}: {
  rating: string;
  reviewCount: string;
}) {
  return (
    <p className="text-sm text-[#475569] sm:text-base">
      Rated {rating} based on{" "}
      <span className="underline decoration-[#475569]/40 underline-offset-2">{reviewCount}</span>{" "}
      reviews on{" "}
      <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
        <TrustpilotMark />
        Trustpilot
      </span>
    </p>
  );
}

export default function TestimonialCarousel({
  data,
  variant = "default",
}: TestimonialCarouselProps) {
  const isTrustpilot = variant === "trustpilot";
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = data.items;

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

  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex >= 0 ? maxIndex : 0);
    }
  }, [visibleCount, activeIndex, maxIndex]);

  useEffect(() => {
    if (!isMounted || isPaused || isDragging.current) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted, isPaused, maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? (maxIndex >= 0 ? maxIndex : 0) : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 55;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 55;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const navButtonClassName =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2E6EC] bg-white text-[#475569] transition-all hover:border-blue-100 hover:text-[#1D4ED8] hover:shadow-sm active:scale-95 outline-none focus:ring-2 focus:ring-blue-100 sm:h-11 sm:w-11";

  const description =
    isTrustpilot && data.trustpilotRating && data.trustpilotReviewCount ? (
      <TrustpilotSummary
        rating={data.trustpilotRating}
        reviewCount={data.trustpilotReviewCount}
      />
    ) : (
      data.description
    );

  const sliderViewport = (
    <div
      ref={trackRef}
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(-${activeIndex * (100 / (isMounted ? visibleCount : 3))}% + ${dragOffset}px))`,
        }}
      >
        {testimonials.map((test, idx) => (
          <div
            key={test.id || idx}
            className="w-full flex-shrink-0 px-3 flex flex-col"
            style={{ width: `${100 / (isMounted ? visibleCount : 3)}%` }}
          >
            {isTrustpilot ? (
              <TrustpilotReviewCard
                reviewTitle={test.reviewTitle || test.name}
                name={test.name}
                text={test.text}
                date={test.date || ""}
                rating={test.rating}
              />
            ) : (
              <TestimonialCard
                avatar={test.avatarPath || "/doctor-hero.png"}
                name={test.name}
                specialty={test.specialty || ""}
                clinicName={test.clinicName}
                text={test.text}
                rating={test.rating}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="relative w-full overflow-hidden border-y border-[#E2E6EC] bg-[#F5F7FA] py-16 sm:py-20"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Client Testimonials Section"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {data.preHeader && (
          <div className="mb-3 text-center">
            <span className="text-[11px] font-bold uppercase leading-none tracking-widest text-[#1D4ED8]">
              {data.preHeader}
            </span>
          </div>
        )}

        <SectionHeader
          badge={isTrustpilot ? undefined : data.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {data.titlePlain}
              <span className="font-bold text-blue-600">{data.titleHighlight}</span>
              {data.titleSuffix}
            </>
          }
          description={description}
          className="mb-10 sm:mb-12"
        />

        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {isTrustpilot ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className={navButtonClassName}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 stroke-[2]" />
              </button>
              {sliderViewport}
              <button
                type="button"
                onClick={handleNext}
                className={navButtonClassName}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          ) : (
            <>
              {sliderViewport}
              <div className="mt-10 flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="order-2 flex items-center gap-2.5 sm:order-1">
                  {Array.from({ length: isMounted ? (maxIndex >= 0 ? maxIndex + 1 : 1) : 3 }).map(
                    (_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                          idx === activeIndex
                            ? "w-6 bg-[#1D4ED8]"
                            : "w-2 bg-[#E2E6EC] hover:bg-[#475569]"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    )
                  )}
                </div>

                <div className="order-1 flex items-center gap-3 sm:order-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={navButtonClassName}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5 stroke-[2]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={navButtonClassName}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5 stroke-[2]" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
