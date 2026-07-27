"use client";

import DoctorVisuals from "@/components/home/DoctorVisuals";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import MedicalCodingHeroHeader from "./MedicalCodingHeroHeader";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingHeroProps {
  data?: typeof defaultMedicalCodingData.hero;
}

export default function MedicalCodingHero({ data }: MedicalCodingHeroProps) {
  const heroData = data || defaultMedicalCodingData.hero;

  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20">
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
            <MedicalCodingHeroHeader data={heroData} />

            <CommandCapsuleForm
              formTitle={heroData.formTitle || "Schedule Online Appointment:"}
              namePlaceholder="Name"
              emailPlaceholder="Email"
              phonePlaceholder="Phone Number"
              buttonLabel={heroData.formButtonLabel || "BOOK NOW"}
              showFooter={false}
            />
          </div>

          <DoctorVisuals />
        </div>
      </div>
    </section>
  );
}
