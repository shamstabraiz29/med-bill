import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersApplicationForm from "@/components/careers/CareersApplicationForm";
import CareersFaq from "@/components/careers/CareersFaq";
import CareersCTA from "@/components/careers/CareersCTA";
import { getCareersData } from "@/lib/payload";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCareersData();
  const seo = data.seo;

  return {
    title: seo?.metaTitle || 'Careers & Job Opportunities | BellMedEx Healthcare RCM',
    description: seo?.metaDescription || 'Join the BellMedEx team. Explore career opportunities in medical billing, coding, credentialing, IT, sales, and healthcare revenue cycle management.',
    keywords: seo?.keywords,
    robots: seo?.robots || 'index, follow',
    alternates: {
      canonical: seo?.canonicalUrl || 'https://bellmedex.com/careers',
    },
    openGraph: {
      title: seo?.openGraph?.ogTitle || seo?.metaTitle || 'Careers & Job Opportunities | BellMedEx Healthcare RCM',
      description: seo?.openGraph?.ogDescription || seo?.metaDescription,
      type: (seo?.openGraph?.ogType as 'website') || 'website',
      url: seo?.openGraph?.ogUrl || seo?.canonicalUrl,
    },
  };
}

export default async function CareersPage() {
  const data = await getCareersData();

  return (
    <main className="flex flex-col min-h-screen bg-transparent pb-12 sm:pb-16">
      <CareersHero data={data.hero} />
      <CareersApplicationForm data={data.formSection} />
      <CareersFaq data={data.faq} />
      <CareersCTA data={data.cta} />
    </main>
  );
}

