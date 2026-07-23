"use client";

import HeroHeader from "./home/HeroHeader";
import CommandCapsuleForm from "./home/CommandCapsuleForm";
import DoctorVisuals from "./home/DoctorVisuals";
import type { HomepageHero } from "@/payload/types/homepage";

interface HeroProps {
  data: HomepageHero;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Custom float animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-1.5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & Form */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <HeroHeader
               eyebrow={data.eyebrow}
               titlePrefix={data.titlePrefix}
               titleHighlight={data.titleHighlight}
               titleSuffix={data.titleSuffix}
               description1={data.description1}
               description2={data.description2}
            />
            
            <CommandCapsuleForm
              buttonLabel={data.formButtonLabel}
              successTitle={data.successTitle}
              successDescription={data.successDescription}
              trustBadges={data.trustBadges?.map((b) => b.label)}
            />
          </div>

          {/* RIGHT COLUMN: Interactive Doctor Visuals */}
          <DoctorVisuals />
          
        </div>
      </div>
    </section>
  );
}
