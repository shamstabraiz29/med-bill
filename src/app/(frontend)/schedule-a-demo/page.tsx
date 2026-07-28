import type { Metadata } from "next";
import ScheduleDemoHero from "@/components/schedule-a-demo/ScheduleDemoHero";
import ScheduleDemoFormSection from "@/components/schedule-a-demo/ScheduleDemoFormSection";
import { getScheduleDemoData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Schedule a Free Demo | BellMedEx Medical Billing Services",
  description:
    "Schedule a free 1-on-1 demo with BellMedEx RCM specialists. Discover how practices achieve up to 30% revenue growth in their first 90 days.",
};

export default async function ScheduleDemoPage() {
  const data = await getScheduleDemoData();

  return (
    <main className="flex flex-col min-h-screen bg-transparent pb-12 sm:pb-16">
      <ScheduleDemoHero data={data.hero} />
      <ScheduleDemoFormSection data={data.formSection} />
    </main>
  );
}
