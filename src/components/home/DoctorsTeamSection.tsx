"use client";

import AppImage from "@/components/ui/AppImage";
import { X, Check } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import type { HomepageDoctorsTeam } from "@/payload/types/homepage";

interface DoctorsTeamSectionProps {
  data: HomepageDoctorsTeam;
}

export default function DoctorsTeamSection({ data }: DoctorsTeamSectionProps) {
  return (
    <HomeSection tone="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/40 to-cyan-100/30 blur-2xl" />
          <div className="hp-card relative overflow-hidden">
            <div className="relative aspect-[5/6]">
              <AppImage
                src="/doctors-team.png"
                alt="Dedicated accounts managers and medical billing team"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="hp-floating-badge absolute -right-2 top-8 sm:-right-6">
            <span className="text-sky-600">✓</span> {data.floatingWidget1}
          </div>
          <div className="hp-floating-badge absolute -left-2 bottom-10 sm:-left-6">
            <span className="text-sky-600">✓</span> {data.floatingWidget2}
          </div>
        </div>

        <div className="space-y-7">
          <HomeSectionHeader
            label={data.badge}
            title={
              <>
                {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
              </>
            }
            description={data.description}
          />

          <div className="space-y-3">
            <div className="hp-card flex gap-4 p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50">
                <X className="h-4 w-4 text-red-500" />
              </div>
              <p className="text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: data.traditionalAgencyText || "" }} />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50/60 p-5">
              <span className="hp-accent-bar" />
              <div className="flex gap-4 pl-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm leading-relaxed text-slate-800" dangerouslySetInnerHTML={{ __html: data.bellmedexText || "" }} />
              </div>
            </div>
          </div>

          <HomeButton href={data.ctaHref} size="lg" showArrow>
            {data.ctaLabel}
          </HomeButton>
        </div>
      </div>
    </HomeSection>
  );
}
