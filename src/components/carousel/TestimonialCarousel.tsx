"use client";

import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TestimonialCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Drag/Swipe State
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = [
    {
      avatar: "/julia-will.png",
      name: "Dr. Julia Will",
      specialty: "Licensed Professional Counselor",
      clinicName: "Health Counselling Clinic",
      text: "I would like to send out a heartfelt appreciation for all of your hard work in helping my Health Counselling clinic take care of our billing and credentialing needs. You have made my job as a practice owner much easier."
    },
    {
      avatar: "/gennaya-matt.png",
      name: "Dr. Gennaya Matt",
      specialty: "Plastic Surgeon",
      clinicName: "Matt Aesthetics Center",
      text: "We are more than satisfied with BellMedEx and would highly recommend them to anyone searching for an efficient billing company. Working with BellMedEx has felt effortless and we are vastly thankful for their services."
    },
    {
      avatar: "/mike-lan.png",
      name: "Dr. Mike Lan",
      specialty: "Internal Specialist Medicine",
      clinicName: "Lan Internal Medicine",
      text: "BellMedEx has been a phenomenal asset to our company. Assisting with billing, credentialing and enrollment, BellMedex has been consistently reliable from the first day of our relationship."
    },
    {
      avatar: "/dr-nicole.png",
      name: "Dr. Sarah Jenkins",
      specialty: "Pediatrician",
      clinicName: "Jenkins Pediatrics",
      text: "We love their 1:1 technical support and dedicated accounts management. Whenever we have a question about a claim submission, they respond instantly. A highly reliable company."
    },
    {
      avatar: "/doctor-hero.png",
      name: "Dr. Arthur Pendelton",
      specialty: "Orthopedic Specialist",
      clinicName: "Pendelton Bone Joint Clinic",
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

  // Autoplay Logic
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

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStartX.current);
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

  // Mouse Drag Handlers (Desktop)
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

  return (
    <section 
      className="relative w-full py-20 sm:py-24 bg-[#F5F7FA] border-y border-[#E2E6EC] overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Client Testimonials Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-header trust message */}
        <div className="text-center mb-3">
          <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-widest leading-none">
            Trusted by Leading Clinics Nationwide
          </span>
        </div>

        {/* Section Header */}
        <SectionHeader
          badge="Client Reviews"
          badgeVariant="indigo"
          align="center"
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
          className="mb-14 sm:mb-16"
        />

        {/* Carousel Container */}
        <div 
          className="relative w-full flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Viewport */}
          <div 
            ref={trackRef}
            className="relative w-full overflow-hidden pb-4 cursor-grab active:cursor-grabbing"
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
                transform: `translateX(calc(-${activeIndex * (100 / (isMounted ? visibleCount : 3))}% + ${dragOffset}px))` 
              }}
            >
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex flex-col"
                  style={{ width: `${100 / (isMounted ? visibleCount : 3)}%` }}
                >
                  <TestimonialCard {...test} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls & Pagination row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-10 gap-6">
            
            {/* Dots indicators */}
            <div className="flex gap-2.5 items-center order-2 sm:order-1">
              {Array.from({ length: isMounted ? (maxIndex >= 0 ? maxIndex + 1 : 1) : 3 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex 
                      ? "w-6 bg-[#1D4ED8]" 
                      : "w-2 bg-[#E2E6EC] hover:bg-[#475569]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-[#E2E6EC] flex items-center justify-center text-[#475569] hover:text-[#1D4ED8] hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer active:scale-95 outline-none focus:ring-2 focus:ring-blue-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2]" />
              </button>
              
              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-[#E2E6EC] flex items-center justify-center text-[#475569] hover:text-[#1D4ED8] hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer active:scale-95 outline-none focus:ring-2 focus:ring-blue-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
