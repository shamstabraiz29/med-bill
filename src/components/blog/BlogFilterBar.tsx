"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";

interface BlogFilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  categories: string[];
  softwares?: string[];
  authors?: string[];
  selectedSoftware?: string;
  onSoftwareSelect?: (software: string) => void;
  selectedAuthor?: string;
  onAuthorSelect?: (author: string) => void;
}

export default function BlogFilterBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  categories,
  softwares = ["All Softwares", "Free EHR", "Free PMS", "FusionEDI", "Kareo", "AdvancedMD"],
  authors = ["All Authors", "Dr. Julia Will", "Mark Davis", "Dr. Nicole Vance", "Sarah Jenkins"],
  selectedSoftware = "All Softwares",
  onSoftwareSelect,
  selectedAuthor = "All Authors",
  onAuthorSelect,
}: BlogFilterBarProps) {
  const categoryOptions = ["All Blogs", ...categories];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 text-center mb-12 sm:mb-16">
      
      {/* Search Term Input Field using shadcn/ui Input */}
      <div className="w-full max-w-xl">
        <Input
          type="text"
          placeholder="Enter Search Term"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={Search}
          className="h-12 sm:h-13 bg-white border border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-full text-sm text-[#0F172A] placeholder:text-slate-400 pl-12 pr-6 shadow-md font-medium"
        />
      </div>

      {/* Categories & Dropdowns Row using shadcn/ui FormSelect */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        
        {/* All Blogs Quick Pill */}
        <button
          type="button"
          onClick={() => onCategorySelect("All Blogs")}
          className={`text-xs sm:text-sm font-bold transition-all px-4 py-2.5 rounded-full cursor-pointer border ${
            selectedCategory === "All Blogs"
              ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-900/15"
              : "text-slate-600 hover:text-[#1D4ED8] bg-slate-100 hover:bg-blue-50 border-transparent"
          }`}
        >
          All Blogs
        </button>

        {/* Categories Dropdown Filter using shadcn/ui FormSelect */}
        <div className="min-w-[160px] sm:min-w-[180px]">
          <FormSelect
            value={selectedCategory}
            onValueChange={(val) => val && onCategorySelect(val)}
            options={categoryOptions}
            placeholder="Categories"
            className="rounded-full bg-white border-[#D1D5DB] hover:border-[#1D4ED8] text-[#0F172A] font-semibold text-xs sm:text-sm shadow-sm h-10 px-4"
          />
        </div>

        {/* Softwares Dropdown Filter using shadcn/ui FormSelect */}
        <div className="min-w-[160px] sm:min-w-[180px]">
          <FormSelect
            value={selectedSoftware}
            onValueChange={(val) => val && onSoftwareSelect && onSoftwareSelect(val)}
            options={softwares}
            placeholder="Softwares"
            className="rounded-full bg-white border-[#D1D5DB] hover:border-[#1D4ED8] text-[#0F172A] font-semibold text-xs sm:text-sm shadow-sm h-10 px-4"
          />
        </div>

        {/* Authors Dropdown Filter using shadcn/ui FormSelect */}
        <div className="min-w-[160px] sm:min-w-[180px]">
          <FormSelect
            value={selectedAuthor}
            onValueChange={(val) => val && onAuthorSelect && onAuthorSelect(val)}
            options={authors}
            placeholder="Authors"
            className="rounded-full bg-white border-[#D1D5DB] hover:border-[#1D4ED8] text-[#0F172A] font-semibold text-xs sm:text-sm shadow-sm h-10 px-4"
          />
        </div>

      </div>

    </div>
  );
}
