"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Search,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsCardClassName } from "./pmsSectionLayout";

function ImageShell({
  src,
  alt,
  children,
  objectFit = "cover",
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  objectFit?: "cover" | "contain";
}) {
  return (
    <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:aspect-16/11">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "transition-transform duration-700 group-hover:scale-[1.02]",
          objectFit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover group-hover:scale-[1.03]"
        )}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {children}
    </div>
  );
}

export function PmsAssetVisual({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <ImageShell src={src} alt={alt} objectFit="contain" />;
}

export function PmsIcd10Visual() {
  return (
    <ImageShell
      src="/clearinghouse-nurse-hero.png"
      alt="Healthcare provider reviewing ICD-10 codes on a tablet"
    >
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#E2E6EC] bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:w-56">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-xs font-bold text-[#0F172A]">ICD-10 Lookup</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-2 rounded-sm",
                index === 2 || index === 5 ? "bg-[#1D4ED8]" : "bg-[#E2E6EC]"
              )}
            />
          ))}
        </div>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-[#1D4ED8]">
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
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#E2E6EC] bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:max-w-xs">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[10px] font-bold text-[#0F172A] sm:text-[11px]">
              Mr. Adam checked in!
            </p>
            <p className="text-[10px] text-[#475569]">He was last diagnosed with fever.</p>
          </div>
        </div>
        <p className="text-[10px] font-semibold text-[#475569]">6m ago</p>
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
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#E2E6EC] bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:w-60">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
              Claims Processed
            </p>
            <p className="text-lg font-black tracking-[-0.02em] text-[#0F172A]">76/100</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="mb-3 flex h-12 items-end gap-1">
          {[35, 52, 44, 68, 76, 58, 72].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-[#1D4ED8]/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-[#1D4ED8]">
            <BarChart3 className="h-3 w-3" aria-hidden="true" />
            View Details
          </span>
          <span className="text-[10px] font-semibold text-[#475569]">Print</span>
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
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PmsFeatureRow({
  label,
  title,
  paragraphs,
  visual,
  reverse = false,
  ctaHref = "/schedule-a-demo",
  ctaLabel = "Let's Get Started",
}: PmsFeatureRowProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <MotionWrapper
        variant={reverse ? "slideLeft" : "slideRight"}
        className={cn("flex flex-col justify-center", reverse ? "lg:order-2" : "lg:order-1")}
      >
        <div className={cn(pmsCardClassName, "h-full justify-center")}>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1D4ED8] sm:text-xs">
            {label}
          </p>

          <h3 className="text-xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-2xl lg:text-3xl">
            {title}
          </h3>

          <div className="mt-4 space-y-4 sm:mt-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xs leading-[1.65] text-[#475569] sm:text-sm"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E3A8A]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper
        variant={reverse ? "slideRight" : "slideLeft"}
        className={cn("flex", reverse ? "lg:order-1" : "lg:order-2")}
      >
        {visual}
      </MotionWrapper>
    </div>
  );
}
