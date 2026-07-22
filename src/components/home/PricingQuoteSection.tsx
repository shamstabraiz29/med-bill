"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Phone, Mail, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PricingQuoteSection() {
  const [sliderValue, setSliderValue] = useState(0);

  const steps = [
    { label: "$50k", tooltip: "Up to $50k Collections" },
    { label: "$100k", tooltip: "Up to $100k Collections" },
    { label: "$5 Million", tooltip: "Up to $5 Million" },
    { label: "$10 Million", tooltip: "Up to $10 Million" }
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Estimator & Form */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-8 flex flex-col justify-between items-start text-left space-y-8 bg-slate-50 border border-slate-200 p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm">
            
            {/* Content Title Header */}
            <SectionHeader
              badge="Pricing Quote"
              badgeVariant="indigo"
              title={
                <>
                  Get Instant{" "}
                  <span className="text-blue-600">
                    FREE
                  </span>{" "}
                  Pricing Quote
                </>
              }
              description="Adjust your practice's monthly billing volume below to calculate estimated costs and receive a custom, zero-obligation pricing proposal."
              className="w-full"
            />

            {/* Interactive Billing Range Slider */}
            <div className="relative w-full py-4 mt-12 mb-6 z-10">
              {/* Floating Tooltip */}
              <div
                className="absolute bottom-full mb-4 bg-white border border-slate-200 text-[#1c1a45] px-5 py-3 rounded-xl shadow-lg text-center -translate-x-1/2 transition-all duration-150 ease-out z-20 flex flex-col items-center min-w-[170px]"
                style={{ left: `${sliderValue * 33.33}%` }}
              >
                <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-widest leading-none mb-1">Practice Billing Volume</span>
                <span className="text-sm font-bold text-[#2A2374] tracking-tight leading-none">{steps[sliderValue].tooltip}</span>
                
                {/* Down Arrow Caret */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-r border-b border-slate-200 rotate-45 -mt-[7px]" />
              </div>

              {/* Slider Track */}
              <div className="relative w-full h-2 bg-slate-200 rounded-full">
                {/* Filled Track */}
                <div
                  className="absolute left-0 top-0 h-full bg-[#2A2374] rounded-full transition-all duration-150"
                  style={{ width: `${sliderValue * 33.33}%` }}
                />
                
                {/* Slider Thumb */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#2A2374] border-2 border-white flex items-center justify-center pointer-events-none shadow-md z-10 transition-all duration-150"
                  style={{ left: `calc(${sliderValue * 33.33}% - 14px)` }}
                >
                  <span className="text-[8px] font-bold text-white select-none">◀▶</span>
                </div>
                
                {/* Range Input */}
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
              </div>

              {/* Step labels */}
              <div className="flex justify-between w-full mt-4 text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                {steps.map((step, idx) => (
                  <span
                    key={idx}
                    onClick={() => setSliderValue(idx)}
                    className={`cursor-pointer transition-colors duration-200 ${idx === sliderValue ? "text-[#2A2374]" : ""}`}
                  >
                    {step.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing Estimator Form */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  icon={User}
                  required
                  className="bg-white text-slate-900 border-transparent placeholder:text-slate-400 focus:bg-white shadow-sm"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  icon={Phone}
                  required
                  className="bg-white text-slate-900 border-transparent placeholder:text-slate-400 focus:bg-white shadow-sm"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  icon={Mail}
                  required
                  className="bg-white text-slate-900 border-transparent placeholder:text-slate-400 focus:bg-white shadow-sm"
                />
                <Input
                  type="text"
                  placeholder="Practice Name"
                  icon={Building2}
                  required
                  className="bg-white text-slate-900 border-transparent placeholder:text-slate-400 focus:bg-white shadow-sm"
                />
              </div>

              <AppButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full uppercase tracking-widest"
              >
                Unlock Pricing Quote
              </AppButton>
            </form>

          </MotionWrapper>

          {/* Right Column: Testimonial Sidebar */}
          <MotionWrapper variant="slideRight" className="lg:col-span-4 w-full">
            <div className="relative overflow-hidden rounded-2xl bg-[#1c1a45] text-white p-8 sm:p-10 shadow-lg flex flex-col items-center justify-center text-center gap-6 h-full min-h-[360px] border border-white/10">

              {/* Doctor Headshot Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-md">
                <Image
                  src="/dr-nicole.png"
                  alt="Dr. Nicole - BellMedEx Medical Billing Client Testimonial"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Testimonial Copy */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Dr. Nicole
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic max-w-xs mx-auto">
                  &ldquo;Some billing companies bill once they submit a claim, but BellMedEx only bills for claims that are paid. We are very satisfied with the billing services provided to date.&rdquo;
                </p>
              </div>

            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
