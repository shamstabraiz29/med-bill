"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepageServicesOverview } from "@/payload/types/homepage";

interface ServicesOverviewProps {
  data: HomepageServicesOverview;
}

export default function ServicesOverview({ data }: ServicesOverviewProps) {
  return (
    <HomeSection tone="white">
      <HomeSectionHeader
        label={data.badge}
        align="center"
        title={
          <>
            {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent> {data.titleSuffix}
          </>
        }
        description={data.description}
        className="mb-12"
      />

      <MotionWrapper variant="stagger" staggerDelay={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.services.map((service, idx) => {
          const Icon = getIcon(service.iconName);
          return (
            <MotionWrapper key={service.id || idx} variant="staggerItem">
              <Link href={service.link} className="hp-card-interactive group relative flex h-full flex-col overflow-hidden p-6">
                <span className="absolute right-4 top-4 text-xs font-bold text-slate-200">0{idx + 1}</span>
                <div className="hp-icon-box mb-4 h-11 w-11 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">{service.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <span className="hp-link">
                  {service.linkLabel || "Explore More"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </MotionWrapper>
          );
        })}
      </MotionWrapper>
    </HomeSection>
  );
}
