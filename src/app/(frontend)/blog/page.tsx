import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeed from "@/components/blog/BlogFeed";
import { getBlogPosts } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Healthcare & Medical Billing Blog | Practice Growth Insights | BellMedEx",
  description:
    "Explore expert medical billing guides, CPT code updates, provider credentialing tips, and healthcare SEO strategies to accelerate practice revenue.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col min-h-screen bg-transparent px-4 sm:px-6 lg:px-8">
      <BlogHero />
      <BlogFeed initialPosts={posts} />
    </div>
  );
}
