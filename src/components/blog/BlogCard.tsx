"use client";

import React from "react";
import Link from "next/link";
import { resolveImageSrc } from "@/lib/images";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  publishedAt: string;
  readTime: string;
  imageSrc: string;
  bgGradient?: string;
}

export interface BlogStyleCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category?: string;
  title: string;
  excerpt: string;
  ctaLabel?: string;
  overlay?: React.ReactNode;
  meta?: React.ReactNode;
}

export function BlogStyleCard({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  excerpt,
  ctaLabel = "READ MORE",
  overlay,
  meta,
}: BlogStyleCardProps) {
  return (
    <MotionWrapper variant="scaleUp" className="h-full flex">
      <Link
        href={href}
        className="group relative flex flex-col w-full bg-white border border-[#E2E6EC] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full text-left"
      >
        <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-t-2xl bg-slate-900">
          <img
            src={resolveImageSrc(imageSrc) || imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {category ? (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-[#0F172A]/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md border border-white/10">
                {category}
              </span>
            </div>
          ) : null}
        </div>

        {overlay ? (
          <div className="-mt-7 ml-6 z-20 relative">{overlay}</div>
        ) : null}

        <div
          className={`flex flex-1 flex-col justify-between space-y-4 p-6 sm:p-7 ${overlay ? "pt-3" : ""}`}
        >
          <div className="space-y-2.5">
            {meta ? meta : null}

            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors line-clamp-2">
              {title}
            </h3>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="pt-2 flex items-center gap-1.5 text-xs font-extrabold uppercase text-[#1D4ED8] tracking-wider group-hover:gap-2.5 transition-all">
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </Link>
    </MotionWrapper>
  );
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <BlogStyleCard
      href={`/blog/${post.slug}`}
      imageSrc={post.imageSrc}
      imageAlt={post.title}
      category={post.category}
      title={post.title}
      excerpt={post.excerpt}
      overlay={
        <div className="w-14 h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
          <img
            src={resolveImageSrc(post.author.avatar) || post.author.avatar}
            alt={post.author.name}
            className="w-full h-full object-cover"
          />
        </div>
      }
      meta={
        <div className="flex items-center gap-3 text-xs text-[#64748B] font-medium">
          <span className="font-semibold text-[#0F172A]">{post.author.name}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.publishedAt}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      }
    />
  );
}
