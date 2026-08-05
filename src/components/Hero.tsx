"use client";

import AppImage from "@/components/ui/AppImage";
import HeroHeader from "./home/HeroHeader";
import CommandCapsuleForm from "./home/CommandCapsuleForm";
import type { HomepageHero } from "@/payload/types/homepage";

interface HeroProps {
  data: HomepageHero;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hp-hero relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="relative h-full w-full">
          <AppImage
            src="/hero-stethoscope.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,247,250,0.45) 0%, rgba(245,247,250,0.68) 50%, rgba(245,247,250,0.82) 100%), radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245,247,250,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <HeroHeader
          align="center"
          className="mb-10 sm:mb-12 max-w-4xl"
          eyebrow={data.eyebrow}
          titlePrefix={data.titlePrefix}
          titleHighlight={data.titleHighlight}
          titleSuffix={data.titleSuffix}
          description1={data.description1}
          description2={data.description2}
        />

        <div className="mx-auto max-w-4xl">
          <CommandCapsuleForm
            variant="hero"
            buttonLabel={data.formButtonLabel}
            successTitle={data.successTitle}
            successDescription={data.successDescription}
            trustBadges={data.trustBadges?.map((b) => b.label)}
          />
        </div>
      </div>
    </section>
  );
}
