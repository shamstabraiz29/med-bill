import type { Metadata } from "next";
import ClearinghouseHero from "@/components/clearinghouse/ClearinghouseHero";
import ClearinghouseCapabilities from "@/components/clearinghouse/ClearinghouseCapabilities";
import WhyChooseClearinghouse from "@/components/clearinghouse/WhyChooseClearinghouse";
import ClearinghouseValueFeatures from "@/components/clearinghouse/ClearinghouseValueFeatures";
import ClearinghouseEFTERA from "@/components/clearinghouse/ClearinghouseEFTERA";
import ClearinghouseRCMFunctions from "@/components/clearinghouse/ClearinghouseRCMFunctions";
import ReduceErrorRatesCTA from "@/components/clearinghouse/ReduceErrorRatesCTA";
import ClearinghouseEDISecurity from "@/components/clearinghouse/ClearinghouseEDISecurity";
import ClearinghouseStats from "@/components/clearinghouse/ClearinghouseStats";
import DirectPayersCTA from "@/components/clearinghouse/DirectPayersCTA";

export const metadata: Metadata = {
  title: "Medical Billing Clearinghouse Solution | BellMedEx",
  description: "Our clearinghouse service is a whole shebang for every provider's healthcare billing needs. Verify eligibility, check claims status, and submit claims electronically.",
};

export default function ClearinghousePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClearinghouseHero />
      <ClearinghouseCapabilities />
      <WhyChooseClearinghouse />
      <DirectPayersCTA />
      <ClearinghouseValueFeatures />
      <ClearinghouseEFTERA />
      <ClearinghouseStats />
      <ClearinghouseEDISecurity />
      <ClearinghouseRCMFunctions />
      <ReduceErrorRatesCTA />
    </div>
  );
}
