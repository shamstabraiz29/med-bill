"use client";

import React from "react";
import Image from "next/image";
import { Calendar, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

const APPOINTMENT_DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export default function PmsHeroVisuals() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl sm:mt-12 lg:mt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-1/2 h-24 -translate-y-1/2 rounded-[100%] bg-[#1D4ED8]/12 blur-3xl sm:inset-x-8 sm:h-32 lg:h-40"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 900 120"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 text-[#1D4ED8]/20 sm:block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C120,20 240,100 360,55 C480,10 600,95 720,50 C810,18 870,62 900,70 L900,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative grid grid-cols-1 items-end gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.1 }}
          className="relative hidden sm:block"
        >
          <div className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-lg shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30">
            <Image
              src="/clearinghouse-nurse-hero.png"
              alt="Healthcare provider managing appointments with BellMedEx PMS"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>

          <div className="absolute -right-2 top-4 z-10 w-[min(100%,11rem)] rounded-xl border border-[#E2E6EC] bg-white p-3 shadow-lg shadow-blue-900/10 sm:-right-4 sm:top-6 sm:w-44">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                <Calendar className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-[#0F172A]">Appointments</span>
            </div>

            <div className="mb-3 grid grid-cols-7 gap-1 text-center">
              {APPOINTMENT_DAYS.map((day, dayIndex) => (
                <span
                  key={`${day}-${dayIndex}`}
                  className="text-[8px] font-bold uppercase tracking-wide text-[#475569]"
                >
                  {day}
                </span>
              ))}
              {Array.from({ length: 14 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 justify-self-center rounded-full ${
                    index === 4 || index === 9 ? "bg-[#1D4ED8]" : "bg-[#E2E6EC]"
                  }`}
                />
              ))}
            </div>

            <span className="inline-flex w-full items-center justify-center rounded-lg bg-[#1D4ED8] px-3 py-1.5 text-[10px] font-bold text-white">
              Book Now
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.2 }}
          className="relative z-1 sm:-mt-6 lg:-mt-10"
        >
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-xl shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 sm:aspect-16/12">
            <Image
              src="/consultants-laptop.png"
              alt="Medical team collaborating with BellMedEx practice management software"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.3 }}
          className="relative hidden sm:block"
        >
          <div className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-lg shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30">
            <Image
              src="/rcm-doctor-importance.png"
              alt="Physician celebrating improved practice outcomes with BellMedEx PMS"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>

          <div className="absolute -left-2 bottom-6 z-10 w-[min(100%,12rem)] rounded-xl border border-[#E2E6EC] bg-white p-3 shadow-lg shadow-blue-900/10 sm:-left-4 sm:bottom-8 sm:w-48">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span className="text-[10px] font-bold text-[#0F172A]">
                Mr. Adam just checked in!
              </span>
            </div>
            <p className="text-[10px] leading-normal text-[#475569] sm:text-[11px]">
              He was last diagnosed with fever.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
