import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/payload";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | BellMedEx" };
  }
  return {
    title: `${post.title} | BellMedEx Healthcare Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1D4ED8] hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <SectionBadge variant="indigo">
            {post.category}
          </SectionBadge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
            {post.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#64748B] pt-2 border-b border-[#E2E6EC] pb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="font-bold text-[#0F172A] text-sm">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-300">•</span>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.publishedAt}</span>
            </div>

            <span className="hidden sm:inline text-slate-300">•</span>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E2E6EC]">
          <img
            src={post.imageSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-[#475569] text-base leading-relaxed pt-4">
          <p className="text-lg sm:text-xl font-medium text-[#0F172A] leading-relaxed border-l-4 border-[#1D4ED8] pl-4 italic">
            {post.excerpt}
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] pt-4">Key Takeaways for Medical Practices in 2026</h2>
          <p>
            Managing healthcare billing and clinical documentation demands precision. As CPT codes and Medicare reimbursement guidelines evolve, healthcare providers must adopt automated tools and proactive compliance measures to eliminate claim rejections.
          </p>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 space-y-3 my-6">
            <h3 className="text-base font-bold text-[#0F172A]">Best Practices Checklist:</h3>
            <ul className="space-y-2 text-sm text-[#0F172A] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>Verify patient insurance eligibility before appointments.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>Double-check CPT & ICD-10 modifiers prior to claim submission.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>Audit aging accounts receivable (A/R) every 30 days.</span>
              </li>
            </ul>
          </div>

          <p>
            By outsourcing your revenue cycle management to certified billing professionals, your clinic can focus strictly on delivering quality patient care while maintaining a 98%+ clean claims acceptance rate.
          </p>
        </div>

        {/* Bottom Callout Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] text-white p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 my-12">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Need Help Optimizing Your Practice Revenue?</h3>
            <p className="text-xs sm:text-sm text-indigo-200/70">
              Get a comprehensive medical billing audit and RCM consultation tailored to your specialty.
            </p>
          </div>
          <AppButton href="/schedule-a-demo" variant="primary" size="md" showArrow>
            Schedule Free Audit
          </AppButton>
        </div>

        {/* Related Articles */}
        <div className="pt-8 space-y-6">
          <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
