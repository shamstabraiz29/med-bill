"use client";

import { useState } from "react";
import { User, Mail, Phone, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProviderChallengesSection() {
  const challengesList = [
    "Inadequate follow-up on claims and payments.",
    "Accounts receivable aging past 90/120+ days.",
    "Rising patient balances causing financial strain.",
    "Frustration due to lack of transparency and reporting.",
    "Overall decline in collections impacting practice revenue."
  ];

  const [selected, setSelected] = useState<boolean[]>(new Array(challengesList.length).fill(false));

  const handleToggle = (index: number) => {
    setSelected(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <section className="w-full bg-[#0F172A] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Interactive Checklist */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <SectionHeader
              theme="dark"
              badge="Provider Assessment"
              badgeVariant="dark"
              title={
                <>
                  Which of these challenges are you facing as a{" "}
                  <span className="text-sky-300 font-bold">
                    provider?
                  </span>
                </>
              }
              description="Select the administrative bottlenecks affecting your practice to receive a customized revenue recovery assessment and actionable solution."
              className="max-w-xl"
            />

            {/* Checklist items with refined spacing and separators */}
            <div className="flex flex-col gap-4 w-full pt-4 divide-y divide-white/[0.04]">
              {challengesList.map((challenge, idx) => (
                <div
                  key={idx}
                  onClick={() => handleToggle(idx)}
                  className={`flex items-center gap-4 group/check cursor-pointer select-none py-3.5 first:pt-0 ${
                    selected[idx] ? "text-white" : "text-slate-300 hover:text-white"
                  } transition-colors duration-200`}
                >
                  {/* Custom Checkbox */}
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-200 shrink-0 ${
                    selected[idx]
                      ? "bg-blue-500 border-blue-500 shadow-sm shadow-blue-500/20 scale-102"
                      : "border-white/20 bg-white/5 group-hover/check:border-white/40"
                  }`}>
                    {selected[idx] && <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />}
                  </div>
                  
                  <span className="text-xs sm:text-[14px] leading-relaxed font-medium">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Right Column: Request Form Card */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 p-6 sm:p-8 md:p-10 shadow-lg flex flex-col gap-6 w-full">
              <div className="text-left space-y-1.5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Request Consultation
                </h3>
                <p className="text-indigo-200/60 text-xs sm:text-[13px] leading-relaxed">
                  Submit your challenges to receive tailored advice.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  icon={User}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  icon={Mail}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  icon={Phone}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                />

                <AppButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full mt-2"
                >
                  Request Consultation
                </AppButton>
              </form>
            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
