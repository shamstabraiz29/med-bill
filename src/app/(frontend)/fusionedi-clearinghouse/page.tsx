import type { Metadata } from "next";
import {
  FusionediClearinghouseDashboard,
  FusionediClearinghouseEdiTransfers,
  FusionediClearinghouseFeatures,
  FusionediClearinghouseGetStartedCta,
  FusionediClearinghouseGetStartedSteps,
  FusionediClearinghouseHero,
  FusionediClearinghouseSolutions,
  FusionediClearinghouseWhatWeOffer,
} from "@/components/fusionedi-clearinghouse";
import { getFusionediClearinghouseData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "FusionEDI Clearinghouse | BellMedEx",
  description:
    "FusionEDI is healthcare clearinghouse EDI software for instant claim transmission, claim scrubbing, denial resolution, and eligibility verification.",
};

export default async function FusionediClearinghousePage() {
  const data = await getFusionediClearinghouseData();

  return (
    <div className="relative min-h-screen">
      <FusionediClearinghouseHero data={data.hero} />
      <FusionediClearinghouseDashboard data={data.dashboard} />
      <FusionediClearinghouseFeatures data={data.features} />
      <FusionediClearinghouseGetStartedSteps data={data.getStartedSteps} />
      <FusionediClearinghouseWhatWeOffer data={data.whatWeOffer} />
      <FusionediClearinghouseSolutions data={data.solutions} />
      <FusionediClearinghouseEdiTransfers data={data.ediTransfers} />
      <FusionediClearinghouseGetStartedCta data={data.getStartedCta} />
    </div>
  );
}
