"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import { shell } from "./shell";
import type { HomepageTestimonials } from "@/payload/types/homepage";

interface Props {
  data: HomepageTestimonials;
}

export default function HomeQuoteWall({ data }: Props) {
  const [active, setActive] = useState(0);
  const current = data.items[active] || data.items[0];

  if (!current) return null;

  return (
    <section className={`${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              {data.badge || data.preHeader}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
              {data.titlePlain}
              <span className="text-[#1D4ED8]">{data.titleHighlight}</span>
              {data.titleSuffix}
            </h2>
          </div>
          {data.description ? (
            <p className="max-w-lg text-base leading-[1.7] text-[#475569] lg:justify-self-end">
              {data.description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-2">
            {data.items.map((item, idx) => (
              <button
                key={item.id || idx}
                type="button"
                onClick={() => setActive(idx)}
                aria-pressed={active === idx}
                className={`rounded-[14px] border px-4 py-4 text-left transition-colors ${
                  active === idx
                    ? "border-[#1D4ED8] bg-white shadow-sm"
                    : "border-transparent bg-transparent hover:border-[#E2E6EC] hover:bg-white"
                }`}
              >
                <p className="text-sm font-semibold text-[#0F172A]">{item.name}</p>
                <p className="mt-1 text-xs text-[#475569]">
                  {item.specialty}
                  {item.clinicName ? ` · ${item.clinicName}` : ""}
                </p>
              </button>
            ))}
          </div>

          <figure
            className={`relative border ${shell.border} bg-white p-8 sm:p-10 ${shell.radiusLg} ${shell.shadowFloat}`}
          >
            <div className="mb-6 flex items-center gap-1" aria-label={`${current.rating || 5} star rating`}>
              {Array.from({ length: current.rating || 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium leading-[1.35] tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
              “{current.text}”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4 border-t border-[#E2E6EC] pt-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E2E6EC] bg-[#F5F7FA]">
                {current.avatarPath ? (
                  <AppImage
                    src={current.avatarPath}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">{current.name}</p>
                <p className="text-xs text-[#475569]">
                  {current.specialty}
                  {current.clinicName ? ` · ${current.clinicName}` : ""}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
