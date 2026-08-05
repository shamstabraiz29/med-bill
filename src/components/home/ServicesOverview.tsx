"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeFeatureCard from "@/components/home/shared/HomeFeatureCard";
import { getIcon } from "@/lib/icons";
import type { HomepageServicesOverview } from "@/payload/types/homepage";

interface ServicesOverviewProps {
  data: HomepageServicesOverview;
}

export default function ServicesOverview({ data }: ServicesOverviewProps) {
  return (
    <section className="hp-section overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={data.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {data.titlePlain}{" "}
              <span className="text-primary">{data.titleHighlight}</span>{" "}
              {data.titleSuffix}
            </>
          }
          description={data.description}
          className="mb-12 sm:mb-14 max-w-4xl"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {data.services.map((service, idx) => {
            const Icon = getIcon(service.iconName);

            return (
              <MotionWrapper key={service.id || idx} variant="staggerItem" className="h-full">
                <HomeFeatureCard
                  variant="feature"
                  icon={<Icon className="h-5 w-5 stroke-[1.75]" />}
                  className="flex h-full flex-col"
                >
                  <h3 className="font-display mb-2 text-lg font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {service.linkLabel || "Explore More"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </HomeFeatureCard>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
