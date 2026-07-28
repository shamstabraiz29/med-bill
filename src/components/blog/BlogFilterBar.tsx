"use client";

import React from "react";
import { Search, X, Filter, Layers, User, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import { motion, AnimatePresence } from "motion/react";

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

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All Blogs" ||
    selectedSoftware !== "All Softwares" ||
    selectedAuthor !== "All Authors";

  const handleReset = () => {
    onSearchChange("");
    onCategorySelect("All Blogs");
    if (onSoftwareSelect) onSoftwareSelect("All Softwares");
    if (onAuthorSelect) onAuthorSelect("All Authors");
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-14">
      
      {/* Animated Apple / Vercel-Style Pill Command Bar */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -2, boxShadow: "0 18px 44px rgba(29, 78, 216, 0.1)" }}
        className="w-full bg-white/95 backdrop-blur-xl border border-[#E2E6EC] rounded-full p-2 sm:p-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 flex flex-col md:flex-row items-center gap-2 md:gap-3"
      >
        
        {/* Left: Search Bar with Smooth Focus Ring Animation */}
        <div className="flex-1 w-full flex items-center">
          <Input
            type="text"
            placeholder="Search articles, topics, or software..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            icon={Search}
            rightElement={
              searchTerm ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSearchChange("");
                  }}
                  className="p-1 text-slate-400 hover:text-[#0F172A] rounded-full hover:bg-slate-200/60 transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </motion.button>
              ) : null
            }
            className="h-11 sm:h-12 bg-slate-50/80 border-transparent hover:bg-slate-100/60 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 rounded-full text-sm text-[#0F172A] placeholder:text-slate-400 font-medium shadow-none transition-all duration-200"
          />
        </div>

        {/* Divider line for desktop */}
        <div className="hidden md:block h-7 w-px bg-slate-200 shrink-0" />

        {/* Right: Interactive Dropdown Pill Selectors */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
          
          {/* Category Dropdown */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="min-w-[130px] sm:min-w-[155px]"
          >
            <FormSelect
              value={selectedCategory}
              onValueChange={(val) => val && onCategorySelect(val)}
              options={categoryOptions}
              placeholder="Category"
              icon={Filter}
              className="rounded-full bg-slate-50/80 hover:bg-blue-50/80 border-transparent text-[#0F172A] font-semibold text-xs sm:text-sm h-11 px-3.5 shadow-none transition-all duration-200"
            />
          </motion.div>

          {/* Software Dropdown */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="min-w-[130px] sm:min-w-[155px]"
          >
            <FormSelect
              value={selectedSoftware}
              onValueChange={(val) => val && onSoftwareSelect && onSoftwareSelect(val)}
              options={softwares}
              placeholder="Software"
              icon={Layers}
              className="rounded-full bg-slate-50/80 hover:bg-blue-50/80 border-transparent text-[#0F172A] font-semibold text-xs sm:text-sm h-11 px-3.5 shadow-none transition-all duration-200"
            />
          </motion.div>

          {/* Author Dropdown */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="min-w-[130px] sm:min-w-[155px]"
          >
            <FormSelect
              value={selectedAuthor}
              onValueChange={(val) => val && onAuthorSelect && onAuthorSelect(val)}
              options={authors}
              placeholder="Author"
              icon={User}
              className="rounded-full bg-slate-50/80 hover:bg-blue-50/80 border-transparent text-[#0F172A] font-semibold text-xs sm:text-sm h-11 px-3.5 shadow-none transition-all duration-200"
            />
          </motion.div>

          {/* Clear / Reset Pill Button with AnimatePresence */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 8 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-3.5 py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-2xs"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </motion.button>
            )}
          </AnimatePresence>

        </div>

      </motion.div>

    </div>
  );
}



