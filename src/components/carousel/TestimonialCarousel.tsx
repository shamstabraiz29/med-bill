"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

import SectionHeader from "@/components/ui/SectionHeader";

export default function TestimonialCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const testimonials = [
    {
      avatar: "/julia-will.png",
      name: "Dr. Julia Will***",
      specialty: "Licensed Professional Counselor",
      text: "I would like to send out a heartfelt appreciation for all of your hard work in helping my Health Counselling clinic take care of our billing and credentialing needs. You have made my job as a practice owner much easier."
    },
    {
      avatar: "/gennaya-matt.png",
      name: "Dr. Gennaya Matt***",
      specialty: "Plastic Surgeon",
      text: "We are more than satisfied with BellMedEx and would highly recommend them to anyone searching for an efficient billing company. Working with BellMedEx has felt effortless and we are vastly thankful for their services."
    },
    {
      avatar: "/mike-lan.png",
      name: "Dr. Mike Lan***",
      specialty: "Internal Specialist Medicine",
      text: "BellMedEx has been a phenomenal asset to our company. Assisting with billing, credentialing and enrollment, BellMedex has been consistently reliable from the first day of our relationship."
    },
    {
      avatar: "/dr-nicole.png",
      name: "Dr. Sarah Jenkins***",
      specialty: "Pediatrician",
      text: "We love their 1:1 technical support and dedicated accounts management. Whenever we have a question about a claim submission, they respond instantly. A highly reliable company."
    },
    {
      avatar: "/doctor-hero.png",
      name: "Dr. Arthur Pendelton***",
      specialty: "Orthopedic Specialist",
      text: "The billing transition was completely seamless. Their team handled our old aging accounts receivable and improved our collections within the first month. Excellent reporting features."
    }
  ];

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

  // Safe checks to avoid activeIndex out of bounds after resize
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex >= 0 ? maxIndex : 0);
    }
  }, [visibleCount, activeIndex, maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? (maxIndex >= 0 ? maxIndex : 0) : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleCardClick = (idx: number) => {
    if (visibleCount === 3) {
      if (idx === activeIndex) {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }
      if (idx === activeIndex + 2) {
        setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Client Reviews"
          badgeVariant="indigo"
          title={
            <>
              Trusted by{" "}
              <span className="text-blue-600 font-bold">
                300+ Verified
              </span>{" "}
              Practices
            </>
          }
          description="Hear directly from physicians, clinical directors, and practice administrators across the country about how BellMedEx transformed their billing outcomes."
          className="mb-10 sm:mb-12"
        />

        {/* Carousel Slider Wrap */}
        <MotionWrapper variant="fadeUp" className="relative w-full flex flex-col items-center group">
          
          {/* Slider track viewport */}
          <div className="relative w-full overflow-hidden pt-12 pb-4 px-1">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / (isMounted ? visibleCount : 3))}%)` 
              }}
            >
              {testimonials.map((test, idx) => {
                const isCenter = isMounted && (
                  (visibleCount === 3 && idx === activeIndex + 1) ||
                  (visibleCount === 1 && idx === activeIndex) ||
                  (visibleCount === 2 && idx === activeIndex)
                );

                return (
                  <div 
                    key={idx} 
                    onClick={() => handleCardClick(idx)}
                    className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex flex-col transition-all duration-500 cursor-pointer ${
                      isCenter 
                        ? "scale-[1.03] opacity-100 z-10" 
                        : "scale-[0.97] opacity-60 z-0 hover:opacity-85"
                    }`}
                  >
                    <TestimonialCard {...test} highlighted={isCenter} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Navigation Chevron */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-16px] sm:left-[-20px] top-[45%] -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2A2374] dark:text-indigo-300 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-all z-20 cursor-pointer active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5.5 h-5.5 stroke-[2.5]" />
          </button>
          
          {/* Right Navigation Chevron */}
          <button 
            onClick={handleNext}
            className="absolute right-[-16px] sm:right-[-20px] top-[45%] -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2A2374] dark:text-indigo-300 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-all z-20 cursor-pointer active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5.5 h-5.5 stroke-[2.5]" />
          </button>

          {/* Dot Indicator Navigation */}
          <div className="flex gap-2.5 mt-8 justify-center items-center">
            {Array.from({ length: isMounted ? (maxIndex >= 0 ? maxIndex + 1 : 1) : 3 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? "w-6 bg-[#2D2C70] dark:bg-indigo-400" 
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </MotionWrapper>

      </div>
    </section>
  );
}
