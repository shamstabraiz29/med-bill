"use client";

import AppImage from "@/components/ui/AppImage";
import { X, Check, Star, Activity } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import type { HomepageDoctorsTeam } from "@/payload/types/homepage";

interface DoctorsTeamSectionProps {
  data: HomepageDoctorsTeam;
}

export default function DoctorsTeamSection({ data }: DoctorsTeamSectionProps) {
  return (
    <section className="hp-section hp-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Visual */}
          <MotionWrapper variant="slideLeft" className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square">
              <div className="absolute inset-[2%] rounded-full border border-border" aria-hidden="true" />

              <div className="absolute inset-0 animate-spin-slow pointer-events-none opacity-35">
                <svg className="h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                  <path
                    id="doctors-team-orbit"
                    d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                  <text className="fill-muted-foreground text-[3.8px] font-semibold tracking-[0.22em] uppercase">
                    <textPath href="#doctors-team-orbit" startOffset="0%">
                      Certified Accounts Managers • Expert Billers &amp; Coders • Certified Accounts Managers • Expert Billers &amp; Coders •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute inset-[8%] rounded-full overflow-hidden border border-border bg-card shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
                <div className="absolute inset-0 bg-gradient-to-r from-card from-50% to-primary to-50%" aria-hidden="true" />
                <AppImage
                  src="/doctors-team.png"
                  alt="Dedicated accounts managers and medical billing team"
                  fill
                  className="relative z-10 object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-[6%] right-[-2%] sm:right-0 z-20 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-amber-500" />
                </span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  {data.floatingWidget1}
                </span>
              </div>

              <div className="absolute bottom-[10%] left-[-2%] sm:left-0 z-20 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Activity className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  {data.floatingWidget2}
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Content */}
          <MotionWrapper variant="slideRight" className="space-y-7 lg:pl-2">
            <SectionHeader
              badge={data.badge}
              badgeVariant="indigo"
              title={
                <>
                  {data.titlePlain}{" "}
                  <span className="text-primary">{data.titleHighlight}</span>
                </>
              }
              description={data.description}
            />

            <div className="space-y-3">
              <div className="hp-compare-negative flex gap-4 rounded-2xl border p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <X className="h-4 w-4 stroke-[2.5]" />
                </span>
                <p
                  className="text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: data.traditionalAgencyText || "" }}
                />
              </div>

              <div className="hp-compare-positive flex gap-4 rounded-2xl border p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </span>
                <p
                  className="text-sm font-medium leading-relaxed text-foreground"
                  dangerouslySetInnerHTML={{ __html: data.bellmedexText || "" }}
                />
              </div>
            </div>

            <AppButton href={data.ctaHref} variant="primary" size="lg" showArrow>
              {data.ctaLabel}
            </AppButton>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
