import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  specialty: string;
  text: string;
  rating?: number;
  highlighted?: boolean;
}

export default function TestimonialCard({
  avatar,
  name,
  specialty,
  text,
  rating = 5,
  highlighted = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`group/card relative w-full h-full bg-white border rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 min-h-[350px] ${
        highlighted
          ? "border-slate-300 shadow-md"
          : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {/* Top Border Accent */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-[#2A2374] transition-opacity duration-300 ${
          highlighted ? "opacity-100" : "opacity-0 group-hover/card:opacity-100"
        }`}
      />

      {/* Top Header Row: Doctor Info + Rating */}
      <div className="flex items-start justify-between gap-3 w-full">
        {/* Left: Avatar & Doctor Profile */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt={`${name} - Verified Client`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-[#1c1a45] text-sm sm:text-base font-semibold tracking-tight leading-snug">
              {name}
            </h3>
            <span className="inline-block mt-0.5 text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100 shrink-0 self-start">
              {specialty}
            </span>
          </div>
        </div>

        {/* Right: Star Rating Pill */}
        <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full text-xs font-extrabold shrink-0 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating}.0</span>
        </div>
      </div>

      {/* Middle: Review Quote Body */}
      <div className="flex-grow my-5 text-left flex flex-col justify-center relative">
        <Quote className="w-8 h-8 text-indigo-500/15 dark:text-indigo-400/15 absolute -top-2 -left-1 pointer-events-none" />
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13.5px] leading-relaxed font-medium relative z-10 pl-2">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* Footer Divider & Verification Badge */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between w-full">
        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-[11px] font-extrabold tracking-tight">
          <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
          <span>Verified Practice</span>
        </div>
        <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          BellMedEx Client
        </span>
      </div>
    </div>
  );
}
