"use client";

import { Users, Stethoscope, Trophy, LucideIcon } from "lucide-react";
import HeroHeader from "./home/HeroHeader";
import CommandCapsuleForm from "./home/CommandCapsuleForm";
import DoctorVisuals from "./home/DoctorVisuals";
import StatsCards from "./home/StatsCards";

interface HeroProps {
  eyebrow?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description1?: string;
  description2?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon: LucideIcon;
  }>;
}

export default function Hero({
  eyebrow = "MEDICAL BILLING SERVICES",
  titlePrefix = "The Medical Billing Service Provider for",
  titleHighlight = "USA Healthcare",
  titleSuffix = "",
  description1 = "BellMedEx is the USA's top medical billing firm – deploying the best practices in medical billing and coding for physicians looking to outsource billing and coding to an expert 3rd party billing agency.",
  description2 = "Our certified medical coders and billers help healthcare organizations recover Aged Receivables and resolve insurance Claim Denials, as well.",
  stats = [
    { value: "1500+", label: "Satisfied Providers", icon: Users },
    { value: "75+", label: "Specialties Served", icon: Stethoscope },
    { value: "1200+", label: "Billing & Coding Experts", icon: Trophy },
  ]
}: HeroProps) {
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
              eyebrow={eyebrow}
              titlePrefix={titlePrefix}
              titleHighlight={titleHighlight}
              titleSuffix={titleSuffix}
              description1={description1}
              description2={description2}
            />
            
            <CommandCapsuleForm />
          </div>

          {/* RIGHT COLUMN: Interactive Doctor Visuals */}
          <DoctorVisuals />
          
        </div>
      </div>

      {/* STATS BANNER BAR at the bottom */}
      <StatsCards stats={stats} />
    </section>
  );
}
