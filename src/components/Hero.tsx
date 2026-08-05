"use client";

import Image from "next/image";
import HeroHeader from "./home/HeroHeader";
import CommandCapsuleForm from "./home/CommandCapsuleForm";
import DoctorVisuals from "./home/DoctorVisuals";
import type { HomepageHero } from "@/payload/types/homepage";

interface HeroProps {
  data: HomepageHero;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hp-hero relative w-full overflow-hidden">
      {/* Background image + overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/clearinghouse-nurse-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_20%] opacity-[0.12] sm:opacity-[0.14]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(29,78,216,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(29,78,216,0.05) 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <HeroHeader
              eyebrow={data.eyebrow}
              titlePrefix={data.titlePrefix}
              titleHighlight={data.titleHighlight}
              titleSuffix={data.titleSuffix}
              description1={data.description1}
              description2={data.description2}
            />

            <div className="hp-hero-form-panel">
              <CommandCapsuleForm
                buttonLabel={data.formButtonLabel}
                successTitle={data.successTitle}
                successDescription={data.successDescription}
                trustBadges={data.trustBadges?.map((b) => b.label)}
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DoctorVisuals />
          </div>
        </div>
      </div>
    </section>
  );
}
