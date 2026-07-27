import type { Metadata } from "next";
import AboutHero from "@/components/about-us/AboutHero";
import AboutMissionVision from "@/components/about-us/AboutMissionVision";
import AboutCapabilities from "@/components/about-us/AboutCapabilities";
import AboutWhyUs from "@/components/about-us/AboutWhyUs";
import AboutCTA from "@/components/about-us/AboutCTA";
import { getAboutUsData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "About Us | BellMedEx Medical Revenue Cycle Management",
  description:
    "Discover BellMedEx, America's leading healthcare revenue cycle management partner offering AAPC-certified medical coding, billing, and provider credentialing.",
};

export default async function AboutUsPage() {
  const data = await getAboutUsData();

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <AboutHero data={data.hero} />
      <AboutMissionVision data={data.missionVision} />
      <AboutCapabilities data={data.capabilities} />
      <AboutWhyUs data={data.whyUs} />
      <AboutCTA data={data.cta} />
    </div>
  );
}
