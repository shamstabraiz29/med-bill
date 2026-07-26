"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { softwareCardClassName } from "./softwareSectionLayout";

function VisualPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        softwareCardClassName,
        "w-full p-5 sm:p-6",
        className
      )}
    >
      <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8] sm:text-xs">
        {title}
      </p>
      {children}
    </div>
  );
}

const PRESCRIPTION_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const LAB_METRICS = [
  { label: "Clinical", percent: "76%", amount: "+$276.43", tone: "bg-slate-400" },
  { label: "Radiology", percent: "81%", amount: "+$435.98", tone: "bg-sky-500" },
  { label: "Pathology", percent: "94%", amount: "+$753.21", tone: "bg-[#1D4ED8]" },
];

const TOP_PAYERS = [
  { rank: 1, name: "Medicare", amount: "$25,000" },
  { rank: 2, name: "BCBS", amount: "$22,000" },
  { rank: 3, name: "Aetna", amount: "$15,000" },
  { rank: 4, name: "UHC", amount: "$10,000" },
  { rank: 5, name: "Medicaid", amount: "$13,000" },
];

export function PrescriptionScheduleVisual() {
  return (
    <VisualPanel title="Prescription Schedule">
      <div className="grid flex-1 grid-cols-7 gap-2 sm:gap-3">
        {PRESCRIPTION_DAYS.map((day) => (
          <div key={day} className="flex flex-col items-center gap-2">
            <div className="flex h-28 w-full flex-col justify-end overflow-hidden rounded-lg border border-[#E2E6EC] bg-slate-50 sm:h-32">
              <div className="h-[45%] bg-[#1D4ED8]/80" />
              <div className="h-[55%] bg-[#1D4ED8]/20" />
            </div>
            <span className="text-[10px] font-semibold text-[#475569] sm:text-xs">
              {day}
            </span>
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function LabTestsVisual() {
  return (
    <VisualPanel title="Lab Test Performance">
      <div className="grid flex-1 grid-cols-3 gap-3 sm:gap-4">
        {LAB_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center rounded-xl border border-[#E2E6EC] bg-slate-50 p-3 sm:p-4"
          >
            <div className="mb-3 flex h-28 w-full items-end justify-center sm:h-32">
              <div
                className={cn(
                  "flex w-full items-end justify-center rounded-md",
                  metric.tone
                )}
                style={{ height: metric.percent }}
              >
                <span className="pb-2 text-lg font-extrabold text-white sm:text-xl">
                  {metric.percent}
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#0F172A] sm:text-sm">{metric.label}</p>
            <p className="mt-1 text-[11px] font-semibold text-[#1D4ED8] sm:text-xs">
              {metric.amount}
            </p>
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function TopPayersVisual() {
  return (
    <VisualPanel title="Top Payers">
      <ul className="space-y-3">
        {TOP_PAYERS.map((payer) => (
          <li
            key={payer.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-[#E2E6EC] bg-slate-50 px-4 py-3"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#1D4ED8]">
                {payer.rank}
              </span>
              <span className="text-sm font-semibold text-[#0F172A]">{payer.name}</span>
            </span>
            <span className="text-sm font-bold tabular-nums text-[#1D4ED8]">
              {payer.amount}
            </span>
          </li>
        ))}
      </ul>
    </VisualPanel>
  );
}

export function BusinessManagementVisual() {
  return (
    <VisualPanel title="Practice Performance">
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#E2E6EC] bg-slate-50 p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#475569]">
            Patient Visits
          </p>
          <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
            10,456
          </p>
        </div>
        <div className="rounded-xl border border-[#E2E6EC] bg-slate-50 p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#475569]">
            Gross Charges
          </p>
          <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
            $166.5K
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-[#E2E6EC] bg-slate-50 p-4">
        <p className="mb-3 text-xs font-bold text-[#0F172A] sm:text-sm">
          Avg. Gross Charges per Encounter
        </p>
        <div className="flex h-16 items-end gap-1.5 sm:h-20">
          {[38, 52, 45, 60, 55, 68, 64, 72, 69, 76, 80, 74].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-[#1D4ED8]/25"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </VisualPanel>
  );
}
