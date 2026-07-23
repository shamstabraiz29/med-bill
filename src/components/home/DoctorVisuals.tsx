"use client";

import Image from "next/image";
import { Zap, Stethoscope, Shield } from "lucide-react";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

export default function DoctorVisuals() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOutExpo,
      },
    },
  };

  const widgetVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.45,
        ease: easeOutExpo,
      },
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="lg:col-span-5 relative flex justify-center items-center"
    >
      {/* Outer dotted/glow border */}
      <div className="relative w-[280px] h-[280px] min-[375px]:w-[340px] min-[375px]:h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#1D4ED8]/25 p-2 flex items-center justify-center transition-all duration-500 hover:border-[#1D4ED8]/50">

        {/* Inner ring */}
        <div className="relative w-full h-full rounded-full border border-[#E2E6EC] bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-blue-900/5">

          {/* Spinning circular text */}
          <div className="absolute inset-[-10px] animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="textPathCurve"
                d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                fill="none"
                stroke="none"
              />
              <text className="fill-[#0F172A]/70 text-[5px] font-extrabold tracking-[0.25em] uppercase">
                <textPath href="#textPathCurve" startOffset="0%">
                  Specialty-Specific Coding • 99% Clean Claims Guarantee • Specialty-Specific Coding • 99% Clean Claims Guarantee •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Inner Decorative Ring */}
          <div className="absolute w-[86%] h-[86%] rounded-full border border-[#E2E6EC]" />

          {/* Central Doctor Portrait (Image) */}
          <div className="absolute w-[90%] h-[90%] rounded-full overflow-hidden bg-slate-50 border border-[#E2E6EC] flex items-end">
            <Image
              src="/doctor-hero.png"
              alt="Confident Healthcare Professional - BellMedEx"
              width={400}
              height={440}
              priority
              className="object-cover object-bottom scale-[1.08] translate-y-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.12]"
            />
          </div>

          {/* Floating Widget 1: 99.2% Clean Claims */}
          <motion.div
            variants={widgetVariants(0.25)}
            className="absolute top-[18%] right-[-3%] bg-white border border-[#E2E6EC] p-2 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 hover:border-[#1D4ED8]/30 transition-all duration-300 z-10 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[15px] bg-[#1D4ED8] flex items-center justify-center text-white shadow-sm">
              <Zap className="w-5 h-5 fill-white/10" />
            </div>
          </motion.div>

          {/* Floating Widget 2: Specialty-Specific */}
          <motion.div
            variants={widgetVariants(0.35)}
            className="absolute top-[48%] left-[-8%] bg-white border border-[#E2E6EC] p-2 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 hover:border-[#1D4ED8]/30 transition-all duration-300 z-10 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[15px] bg-[#1D4ED8] flex items-center justify-center text-white shadow-sm">
              <Stethoscope className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Floating Widget 3: HIPAA Compliant */}
          <motion.div
            variants={widgetVariants(0.45)}
            className="absolute bottom-[10%] right-[2%] bg-white border border-[#E2E6EC] p-2 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 hover:border-[#1D4ED8]/30 transition-all duration-300 z-10 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[15px] bg-[#1D4ED8] flex items-center justify-center text-white shadow-sm">
              <Shield className="w-5 h-5 fill-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
