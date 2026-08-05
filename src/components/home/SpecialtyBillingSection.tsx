"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { getIcon } from "@/lib/icons";
import type { HomepageSpecialtyBilling } from "@/payload/types/homepage";

interface SpecialtyBillingSectionProps {
  data: HomepageSpecialtyBilling;
}

export default function SpecialtyBillingSection({ data }: SpecialtyBillingSectionProps) {
  return (
    <HomeSection tone="white">
      <HomeSectionHeader
        label={data.badge}
        align="center"
        title={
          <>
            {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
          </>
        }
        description={data.description}
        className="mb-12"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.specialties.map((specialty, idx) => {
          const Icon = getIcon(specialty.iconName);
          return (
            <Link key={specialty.id || idx} href={specialty.link} className="hp-card-interactive group relative flex h-full flex-col p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="hp-icon-box h-11 w-11 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                {specialty.popular && (
                  <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-700">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-slate-900">{specialty.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{specialty.description}</p>
              <span className="hp-link mt-5">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <HomeButton href={data.ctaHref} size="lg" showArrow>
          {data.ctaLabel}
        </HomeButton>
      </div>
    </HomeSection>
  );
}
