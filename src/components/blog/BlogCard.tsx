"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
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

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <MotionWrapper variant="scaleUp" className="h-full flex">
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col w-full bg-white border border-[#E2E6EC] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full text-left"
      >
        {/* Top Thumbnail Image Header with Overlay */}
        <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-t-3xl bg-slate-900">
          
          {/* Background Image / Custom Banner */}
          <img
            src={post.imageSrc}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Top Category Badge Pill */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-[#0F172A]/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md border border-white/10">
              {post.category}
            </span>
          </div>
        </div>

        {/* Author Avatar Overlap Badge (positioned cleanly at seam without clipping) */}
        <div className="-mt-7 ml-6 z-20 relative">
          <div className="w-14 h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="pt-3 p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
          
          <div className="space-y-2.5">
            {/* Meta Info: Author Name & Date */}
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

            {/* Post Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Post Excerpt */}
            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Read More Link CTA */}
          <div className="pt-2 flex items-center gap-1.5 text-xs font-extrabold uppercase text-[#1D4ED8] tracking-wider group-hover:gap-2.5 transition-all">
            <span>READ MORE</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>

        </div>
      </Link>
    </MotionWrapper>
  );
}
