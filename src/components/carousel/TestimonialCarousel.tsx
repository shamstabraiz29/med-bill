"use client";

import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import TrustpilotReviewCard from "./TrustpilotReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import type { HomepageTestimonials } from "@/payload/types/homepage";

interface TestimonialCarouselProps {
  data: HomepageTestimonials;
  variant?: "default" | "trustpilot";
}

export default function TestimonialCarousel({ data, variant = "default" }: TestimonialCarouselProps) {
  const isTrustpilot = variant === "trustpilot";
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = data.items;

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex >= 0 ? maxIndex : 0);
  }, [visibleCount, activeIndex, maxIndex]);

  useEffect(() => {
    if (!isMounted || isPaused || isDragging.current) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted, isPaused, maxIndex]);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? (maxIndex >= 0 ? maxIndex : 0) : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const navBtn = "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-sky-300 hover:text-sky-600 hover:shadow-md";

  return (
    <HomeSection tone="white">
      {data.preHeader && (
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-sky-600">
          {data.preHeader}
        </p>
      )}

      <HomeSectionHeader
        label={isTrustpilot ? undefined : data.badge}
        align="center"
        title={
          <>
            {data.titlePlain}
            <HomeAccent>{data.titleHighlight}</HomeAccent>
            {data.titleSuffix}
          </>
        }
        description={data.description}
        className="mb-8"
      />

      <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div
          className="overflow-hidden"
          onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; isDragging.current = true; }}
          onTouchMove={(e) => isDragging.current && setDragOffset(e.touches[0].clientX - dragStartX.current)}
          onTouchEnd={() => {
            if (!isDragging.current) return;
            isDragging.current = false;
            if (dragOffset < -55) handleNext();
            else if (dragOffset > 55) handlePrev();
            setDragOffset(0);
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${activeIndex * (100 / (isMounted ? visibleCount : 3))}% + ${dragOffset}px))` }}
          >
            {testimonials.map((test, idx) => (
              <div key={test.id || idx} className="flex-shrink-0 px-2" style={{ width: `${100 / (isMounted ? visibleCount : 3)}%` }}>
                {isTrustpilot ? (
                  <TrustpilotReviewCard reviewTitle={test.reviewTitle || test.name} name={test.name} text={test.text} date={test.date || ""} rating={test.rating} />
                ) : (
                  <TestimonialCard avatar={test.avatarPath || "/doctor-hero.png"} name={test.name} specialty={test.specialty || ""} clinicName={test.clinicName} text={test.text} rating={test.rating} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            {Array.from({ length: isMounted ? (maxIndex >= 0 ? maxIndex + 1 : 1) : 3 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full ${idx === activeIndex ? "w-5 bg-sky-600" : "w-1.5 bg-slate-300"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={handlePrev} className={navBtn} aria-label="Previous"><ChevronLeft className="h-4 w-4" /></button>
            <button type="button" onClick={handleNext} className={navBtn} aria-label="Next"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
