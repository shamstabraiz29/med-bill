"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepageSpecialtyBilling } from "@/payload/types/homepage";

interface SpecialtyBillingSectionProps {
  data: HomepageSpecialtyBilling;
}

export default function SpecialtyBillingSection({ data }: SpecialtyBillingSectionProps) {
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
              <span className="text-primary">{data.titleHighlight}</span>
            </>
          }
          description={data.description}
          className="mb-16 sm:mb-20 max-w-4xl"
        />

        <div className="w-full">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 sm:gap-y-14 w-full"
          >
            {data.specialties.map((specialty, idx) => {
              const Icon = getIcon(specialty.iconName);

              return (
                <MotionWrapper key={specialty.id || idx} variant="staggerItem" className="h-full">
                  <div className="group relative flex flex-col justify-between items-start text-left h-full border-b border-border pb-8">
                    <div className="w-full">
                      <div className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-7 h-7 stroke-[1.5]" />
                      </div>

                      <div className="flex items-center gap-2.5 mb-3">
                        <h3 className="font-display text-lg font-semibold text-foreground leading-snug transition-colors duration-200 group-hover:text-primary">
                          {specialty.title}
                        </h3>
                        {specialty.popular && (
                          <span className="bg-accent border border-border text-primary text-[8px] font-bold tracking-[0.12em] uppercase px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {specialty.description}
                      </p>
                    </div>

                    <div className="pt-1">
                      <Link
                        href={specialty.link}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <AppButton href={data.ctaHref} variant="primary" size="lg" showArrow>
            {data.ctaLabel}
          </AppButton>
        </div>
      </div>
    </section>
  );
}
