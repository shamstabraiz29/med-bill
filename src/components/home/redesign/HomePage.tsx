import HomeHeroSplit from "./HomeHeroSplit";
import HomeTrustStrip from "./HomeTrustStrip";
import HomeProblemSolution from "./HomeProblemSolution";
import HomeFeatureZigzag from "./HomeFeatureZigzag";
import HomeOpsDashboard from "./HomeOpsDashboard";
import HomeBenefitBento from "./HomeBenefitBento";
import HomeProcessRail from "./HomeProcessRail";
import HomeQuoteWall from "./HomeQuoteWall";
import HomeProposalWizard from "./HomeProposalWizard";
import HomeFaqRail from "./HomeFaqRail";
import HomeFinalCta from "./HomeFinalCta";
import { shell } from "./shell";
import type { HomepageData } from "@/payload/types/homepage";

interface Props {
  data: HomepageData;
}

/**
 * Completely new homepage composition — not based on prior section layouts.
 */
export default function HomePage({ data }: Props) {
  return (
    <div className={shell.page}>
      <HomeHeroSplit data={data.hero} />
      <HomeTrustStrip stats={data.statsCards} trust={data.trustStats} />
      <HomeProblemSolution
        data={data.providerChallenges}
        checklist={data.trustStats.checklist}
      />
      <HomeFeatureZigzag data={data.servicesOverview} />
      <HomeOpsDashboard
        claims={data.medicalClaims}
        trust={data.trustStats}
        team={data.doctorsTeam}
      />
      <HomeBenefitBento pricing={data.nationwidePricing} specialties={data.specialtyBilling} />
      <HomeProcessRail data={data.medicalClaims} />
      <HomeQuoteWall data={data.testimonials} />
      <HomeProposalWizard data={data.pricingQuote} />
      <HomeFaqRail data={data.faq} />
      <HomeFinalCta data={data.billingCta} trust={data.trustStats} />
    </div>
  );
}
