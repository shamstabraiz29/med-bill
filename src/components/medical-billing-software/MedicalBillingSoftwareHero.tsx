"use client";

import React from "react";
import { Star } from "lucide-react";
import HeroHeader from "@/components/home/HeroHeader";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import MedicalBillingSoftwareTrustBar from "./MedicalBillingSoftwareTrustBar";

import { MedicalBillingSoftwareHeroData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

interface MedicalBillingSoftwareHeroProps {
  data?: MedicalBillingSoftwareHeroData;
}

export default function MedicalBillingSoftwareHero({ data }: MedicalBillingSoftwareHeroProps) {
  const content = data || defaultMedicalBillingSoftwareData.hero;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20"
      aria-labelledby="medical-billing-software-hero-heading"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <HeroHeader
              headingId="medical-billing-software-hero-heading"
              eyebrow={content.eyebrow}
              titlePrefix={content.titlePrefix}
              titleHighlight={content.titleHighlight}
              description1={content.description1}
              description2={content.description2}
            />

            <CommandCapsuleForm
              formTitle="Medical Billing Software Sign Up"
              buttonLabel="Sign Up For Free"
              namePlaceholder="Name"
              emailPlaceholder="Email"
              phonePlaceholder="Phone"
              successTitle="Sign Up Request Received!"
              successDescription="A BellMedEx specialist will contact you shortly to get you started."
              trustBadges={["100% Free to Try", "No Credit Card Required", "HIPAA Compliant"]}
            />

            <figure className="w-full max-w-2xl rounded-2xl border border-[#E2E6EC] bg-white p-5 shadow-[0_4px_24px_rgba(29,78,216,0.04)] sm:p-6">
              <div
                className="mb-3 flex items-center gap-0.5 text-[#EAB308]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-[#EAB308] text-[#EAB308]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                &ldquo;{content.testimonialQuote}&rdquo;
              </blockquote>

              <figcaption className="mt-4 text-xs font-bold text-[#0F172A] sm:text-sm">
                {content.testimonialAuthor} &ndash; {content.testimonialRole}
              </figcaption>
            </figure>
          </div>

          <DoctorVisuals />
        </div>

        <div className="mt-12 border-t border-[#E2E6EC] pt-8 sm:mt-14 sm:pt-10 lg:mt-16">
          <MedicalBillingSoftwareTrustBar />
        </div>
      </div>
    </section>
  );
}
