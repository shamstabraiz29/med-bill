"use client";

import HeroHeader from "./home/HeroHeader";
import CommandCapsuleForm from "./home/CommandCapsuleForm";
import DoctorVisuals from "./home/DoctorVisuals";
import { HomeContainer } from "./home/shared/HomeSection";
import type { HomepageHero } from "@/payload/types/homepage";

interface HeroProps {
  data: HomepageHero;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hp-hero-bg relative overflow-hidden pb-6 pt-10 sm:pb-10 sm:pt-14">
      <HomeContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <HeroHeader
              eyebrow={data.eyebrow}
              titlePrefix={data.titlePrefix}
              titleHighlight={data.titleHighlight}
              titleSuffix={data.titleSuffix}
              description1={data.description1}
              description2={data.description2}
            />
            <CommandCapsuleForm
              buttonLabel={data.formButtonLabel}
              successTitle={data.successTitle}
              successDescription={data.successDescription}
              trustBadges={data.trustBadges?.map((b) => b.label)}
            />
          </div>
          <DoctorVisuals />
        </div>
      </HomeContainer>
    </section>
  );
}
