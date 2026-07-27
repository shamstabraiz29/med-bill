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

export const metadata: Metadata = {
  title: "FusionEDI Clearinghouse | BellMedEx",
  description:
    "FusionEDI is healthcare clearinghouse EDI software for instant claim transmission, claim scrubbing, denial resolution, and eligibility verification.",
};

export default function FusionediClearinghousePage() {
  return (
    <div className="relative min-h-screen">
      <FusionediClearinghouseHero />
      <FusionediClearinghouseDashboard />
      <FusionediClearinghouseFeatures />
      <FusionediClearinghouseGetStartedSteps />
      <FusionediClearinghouseWhatWeOffer />
      <FusionediClearinghouseSolutions />
      <FusionediClearinghouseEdiTransfers />
      <FusionediClearinghouseGetStartedCta />
    </div>
  );
}
