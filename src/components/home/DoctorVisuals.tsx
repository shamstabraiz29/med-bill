"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { Zap, Stethoscope, Shield } from "lucide-react";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";

export interface WidgetItem {
  icon: React.ComponentType<{ className?: string }>;
  positionClassName?: string;
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
  spinningText = "Specialty-Specific Coding • 99% Clean Claims Guarantee • Specialty-Specific Coding • 99% Clean Claims Guarantee •",
  widgets,
  pathId = "hero",
}: DoctorVisualsProps) {
  const defaultWidgets: WidgetItem[] = [
    { icon: Zap, positionClassName: "top-[12%] -right-1 sm:right-1" },
    { icon: Stethoscope, positionClassName: "top-[48%] -left-4 sm:-left-5" },
    { icon: Shield, positionClassName: "bottom-[10%] right-[6%]" },
  ];

  const activeWidgets = widgets?.length ? widgets : defaultWidgets;
  const textPathId = `hero-orbit-${pathId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOutExpo }}
      className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square mx-auto lg:mx-0 lg:ml-auto"
    >
      {/* Soft outer ring */}
      <div className="absolute inset-[2%] rounded-full border border-primary/15" aria-hidden="true" />

      {/* Orbit label */}
      <div className="absolute inset-0 animate-spin-slow pointer-events-none opacity-40">
        <svg className="h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          <path
            id={textPathId}
            d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
            fill="none"
          />
          <text className="fill-primary/80 text-[4px] font-semibold tracking-[0.18em] uppercase">
            <textPath href={`#${textPathId}`} startOffset="0%">
              {spinningText}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Portrait ring */}
      <div className="absolute inset-[8%] rounded-full bg-card border border-border shadow-[0_24px_60px_-16px_rgba(29,78,216,0.2)] overflow-hidden">
        <div className="absolute inset-[4%] rounded-full overflow-hidden bg-muted">
          <AppImage
            src={imageSrc}
            fallbackSrc="/doctor-hero.png"
            alt={imageAlt}
            fill
            priority
            className="object-cover object-bottom scale-[1.06] translate-y-1"
          />
        </div>
      </div>

      {/* Icon chips */}
      {activeWidgets.map((widget, idx) => {
        const Icon = widget.icon;
        return (
          <div
            key={idx}
            className={`absolute ${widget.positionClassName || ""} z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-md text-primary`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
        );
      })}
    </motion.div>
  );
}
