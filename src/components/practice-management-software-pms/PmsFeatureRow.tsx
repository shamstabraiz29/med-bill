"use client";

import React from "react";
import Image from "next/image";
import { BarChart3, Search, TrendingUp, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsCardClassName } from "./pmsSectionLayout";

function ImageShell({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="group relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:min-h-[320px] lg:min-h-[400px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export function PmsAssetVisual({ src, alt }: { src: string; alt: string }) {
  return <ImageShell src={src} alt={alt} />;
}

export function PmsIcd10Visual() {
  return (
    <ImageShell
      src="/clearinghouse-nurse-hero.png"
      alt="Healthcare provider reviewing ICD-10 codes on a tablet"
    >
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:w-56">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-xs font-bold text-foreground">ICD-10 Lookup</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-2 rounded-sm",
                index === 2 || index === 5 ? "bg-primary" : "bg-border"
              )}
            />
          ))}
        </div>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-primary">
          ICD-10
        </p>
      </div>
    </ImageShell>
  );
}

export function PmsPatientManagementVisual() {
  return (
    <ImageShell
      src="/rcm-doctor-importance.png"
      alt="Doctor providing attentive patient care with BellMedEx PMS"
    >
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur-sm sm:max-w-xs">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[10px] font-bold text-foreground sm:text-[11px]">
              Mr. Adam checked in!
            </p>
            <p className="text-[10px] text-muted-foreground">He was last diagnosed with fever.</p>
          </div>
        </div>
        <p className="text-[10px] font-semibold text-muted-foreground">6m ago</p>
      </div>
    </ImageShell>
  );
}

export function PmsClaimsVisual() {
  return (
    <ImageShell
      src="/consultants-laptop.png"
      alt="Physician managing claims with BellMedEx practice management software"
    >
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:w-60">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Claims Processed
            </p>
            <p className="text-lg font-black tracking-[-0.02em] text-foreground">76/100</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="mb-3 flex h-12 items-end gap-1">
          {[35, 52, 44, 68, 76, 58, 72].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-primary/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
            <BarChart3 className="h-3 w-3" aria-hidden="true" />
            View Details
          </span>
          <span className="text-[10px] font-semibold text-muted-foreground">Print</span>
        </div>
      </div>
    </ImageShell>
  );
}

export interface PmsFeatureRowProps {
  label: string;
  title: string;
  paragraphs: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}

export default function PmsFeatureRow({
  label,
  title,
  paragraphs,
  visual,
  reverse = false,
}: PmsFeatureRowProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
      <MotionWrapper
        variant={reverse ? "slideLeft" : "slideRight"}
        className={cn("flex h-full flex-col justify-center", reverse ? "lg:order-2" : "lg:order-1")}
      >
        <div className={cn(pmsCardClassName, "h-full justify-center")}>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            {label}
          </p>

          <h3 className="text-xl font-bold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-2xl lg:text-3xl">
            {title}
          </h3>

          <div className="mt-4 space-y-4 sm:mt-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-xs leading-[1.65] text-muted-foreground sm:text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        variant={reverse ? "slideRight" : "slideLeft"}
        className={cn("flex h-full min-h-[280px]", reverse ? "lg:order-1" : "lg:order-2")}
      >
        <div className="h-full w-full">{visual}</div>
      </MotionWrapper>
    </div>
  );
}
