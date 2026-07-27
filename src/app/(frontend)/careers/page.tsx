import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersApplicationForm from "@/components/careers/CareersApplicationForm";
import { getCareersData } from "@/lib/payload";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCareersData();
  const { seo } = data;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.robots,
    alternates: {
      canonical: seo.canonicalUrl,
    },
  };
}

export default async function CareersPage() {
  const data = await getCareersData();

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <CareersHero data={data.hero} />
      <CareersApplicationForm data={data.formSection} />
    </div>
  );
}
