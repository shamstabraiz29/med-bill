"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

export interface WidgetItem {
  icon: React.ComponentType<{ className?: string }>;
  positionClassName?: string;
  delay?: number;
}

export interface DoctorVisualsProps {
  imageSrc?: string;
  imageAlt?: string;
  spinningText?: string;
  widgets?: WidgetItem[];
  pathId?: string;
}

export default function DoctorVisuals({
  imageSrc = "/doctor-hero.png",
  imageAlt = "Confident Healthcare Professional - BellMedEx",
  widgets,
}: DoctorVisualsProps) {
  const hasCustomWidgets = widgets && widgets.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOutExpo }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/50 via-cyan-100/30 to-rose-100/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-sky-200/60">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sky-50">
          <AppImage
            src={imageSrc}
            fallbackSrc="/doctor-hero.png"
            alt={imageAlt}
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {hasCustomWidgets &&
        widgets!.map((widget, idx) => {
          const Icon = widget.icon;
          const posClass = widget.positionClassName || "top-[18%] right-[-3%]";
          return (
            <div
              key={idx}
              className={`absolute ${posClass} z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-100 bg-white text-sky-600 shadow-lg`}
            >
              <Icon className="h-5 w-5" />
            </div>
          );
        })}
    </motion.div>
  );
}
