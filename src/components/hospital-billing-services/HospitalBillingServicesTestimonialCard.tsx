"use client";

import { ShieldCheck, Star, TrendingUp } from "lucide-react";
import type { HospitalBillingTestimonialItem } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesTestimonialCardProps {
  item: HospitalBillingTestimonialItem;
}

export default function HospitalBillingServicesTestimonialCard({
  item,
}: HospitalBillingServicesTestimonialCardProps) {
  const rating = item.rating ?? 5;

  return (
    <div className="flex h-full flex-col justify-between space-y-6 rounded-2xl border border-[#E2E6EC] bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 stroke-none" />
            ))}
          </div>

          <span className="max-w-[55%] truncate text-right text-[10px] font-extrabold uppercase tracking-wider text-[#1D4ED8] rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1">
            {item.reviewTitle}
          </span>
        </div>

        <p className="text-xs leading-relaxed text-[#475569] italic sm:text-sm">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      <div className="space-y-3 border-t border-[#E2E6EC] pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-blue-50 text-sm font-bold text-[#1D4ED8]">
            {item.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-[#0F172A]">{item.name}</h4>
              <ShieldCheck className="h-3.5 w-3.5 text-[#1D4ED8]" aria-hidden="true" />
            </div>
            <p className="text-xs text-slate-500">Verified BellMedEx Client</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
          <TrendingUp className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}
