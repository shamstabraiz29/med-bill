"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { ehrCardClassName } from "./ehrSectionLayout";

export interface EhrFeatureRowProps {
  titlePlain: string;
  titleHighlight: string;
  titleSuffix?: string;
  endPeriod?: boolean;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

export default function EhrFeatureRow({
  titlePlain,
  titleHighlight,
  titleSuffix,
  endPeriod = false,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  className,
}: EhrFeatureRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12",
        className
      )}
    >
      <MotionWrapper
        variant={reverse ? "slideLeft" : "slideRight"}
        className={cn(
          "flex flex-col justify-center",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <div className={cn(ehrCardClassName, "h-full justify-center")}>
          <h2 className="text-xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-2xl lg:text-3xl">
            {titlePlain}{" "}
            <span className="text-blue-600">
              {titleHighlight}
              {endPeriod ? "." : ""}
            </span>
            {titleSuffix && <> {titleSuffix}</>}
          </h2>
          <p className="mt-4 text-xs leading-[1.65] text-[#475569] sm:mt-5 sm:text-sm">
            {description}
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        variant={reverse ? "slideRight" : "slideLeft"}
        className={cn("flex", reverse ? "lg:order-1" : "lg:order-2")}
      >
        <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:aspect-16/11">
          <AppImage
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </MotionWrapper>
    </div>
  );
}
