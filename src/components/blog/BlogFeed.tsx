"use client";

import React, { useState, useMemo } from "react";
import BlogCard, { BlogPost } from "@/components/blog/BlogCard";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { SearchX, ArrowRight } from "lucide-react";
import AppButton from "@/components/ui/AppButton";

interface BlogFeedProps {
  initialPosts: BlogPost[];
}

export default function BlogFeed({ initialPosts }: BlogFeedProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [selectedSoftware, setSelectedSoftware] = useState("All Softwares");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialPosts.forEach((post) => {
      if (post.category) set.add(post.category);
    });
    return Array.from(set);
  }, [initialPosts]);

  // Filter posts based on user selections
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Blogs" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesAuthor =
        selectedAuthor === "All Authors" ||
        post.author.name.toLowerCase() === selectedAuthor.toLowerCase();

      return matchesSearch && matchesCategory && matchesAuthor;
    });
  }, [initialPosts, searchTerm, selectedCategory, selectedAuthor]);

  return (
    <div className="w-full">
      
      {/* Search & Filter Controls */}
      <BlogFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        categories={categories}
        selectedSoftware={selectedSoftware}
        onSoftwareSelect={setSelectedSoftware}
        selectedAuthor={selectedAuthor}
        onAuthorSelect={setSelectedAuthor}
      />

      {/* Grid Results Section */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-7xl mx-auto">
          {filteredPosts.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-slate-50 border border-[#E2E6EC] rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4 my-8 shadow-sm">
          <SearchX className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-[#0F172A]">No Articles Found</h3>
          <p className="text-sm text-[#475569]">
            We couldn&apos;t find any blog posts matching your search query or selected filter criteria.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Blogs");
                setSelectedSoftware("All Softwares");
                setSelectedAuthor("All Authors");
              }}
              className="text-xs font-bold text-[#1D4ED8] hover:underline uppercase tracking-wider cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}

      {/* Bottom Newsletter / Consultation CTA Box */}
      <MotionWrapper variant="scaleUp" className="mt-16 sm:mt-24 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              Stay Ahead in Healthcare Billing
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Subscribe to Our Weekly Practice Growth Newsletter
            </h3>
            <p className="text-indigo-200/70 text-xs sm:text-sm leading-relaxed">
              Get the latest CPT coding updates, Medicare fee schedule changes, and practice management tips delivered directly to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <AppButton
              href="/schedule-a-demo"
              variant="primary"
              size="lg"
              showArrow
            >
              Schedule Free Consultation
            </AppButton>
          </div>

        </div>
      </MotionWrapper>

    </div>
  );
}
