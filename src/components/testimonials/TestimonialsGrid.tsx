"use client";

import React, { useState, useMemo } from "react";
import { Star, ShieldCheck, TrendingUp } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppImage from "@/components/ui/AppImage";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  clinic: string;
  specialty: string;
  quote: string;
  rating: number;
  avatar: string;
  roiStat: string;
  verified: boolean;
}

const sampleTestimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Dr. Robert Chen",
    role: "Medical Director",
    clinic: "Apex Cardiology Associates",
    specialty: "Cardiology",
    quote:
      "Outsourcing our billing to BellMedEx was the best financial decision we made. Our clean claim rate jumped to 99%, and our monthly revenue collections increased by 32% within 90 days.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    roiStat: "+32% Monthly Revenue",
    verified: true,
  },
  {
    id: "2",
    name: "Sarah Jenkins, MHA",
    role: "Practice Manager",
    clinic: "Sun Valley Dental Group",
    specialty: "Dental",
    quote:
      "The credentialing team at BellMedEx got 4 of our new associates enrolled with major commercial insurance payers in under 60 days. Their communication and portal transparency are top notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    roiStat: "60-Day Credentialing Speed",
    verified: true,
  },
  {
    id: "3",
    name: "Dr. Mark Thorne",
    role: "Lead Orthopedic Surgeon",
    clinic: "Advanced Orthopedics Center",
    specialty: "Orthopedics",
    quote:
      "Complex surgical coding was giving our front office nightmares with constant rejections. BellMedEx's AAPC certified coders fixed our modifiers and eliminated coding denial backlogs completely.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
    roiStat: "Zero Coding Backlog",
    verified: true,
  },
  {
    id: "4",
    name: "Dr. Elena Rostova",
    role: "Chief Physician",
    clinic: "Horizon Internal Medicine",
    specialty: "Internal Medicine",
    quote:
      "We were drowning in aging A/R over 120 days. BellMedEx's denial management specialists recovered over $140,000 in previously written-off claims. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    roiStat: "$140k Recovered A/R",
    verified: true,
  },
  {
    id: "5",
    name: "Dr. James Wilson",
    role: "Psychiatrist & Owner",
    clinic: "MindPath Behavioral Health",
    specialty: "Psychiatry",
    quote:
      "Managing mental health billing regulations used to take 15 hours a week from my clinical schedule. BellMedEx handled everything seamlessely so I can focus entirely on patient care.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
    roiStat: "15 Hours Saved Weekly",
    verified: true,
  },
  {
    id: "6",
    name: "Lisa Thompson",
    role: "Clinic Administrator",
    clinic: "Metro Wellness & Family Practice",
    specialty: "Internal Medicine",
    quote:
      "The custom monthly reporting dashboard gives us total visibility into collection velocity and payer performance. Our billing has never been cleaner or more predictable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1594824813566-88855ce7890b?q=80&w=400&auto=format&fit=crop",
    roiStat: "Real-time Reporting",
    verified: true,
  },
];

import { TestimonialItemData } from "@/payload/types/testimonials";

interface TestimonialsGridProps {
  items?: TestimonialItemData[];
  showFilters?: boolean;
}

export default function TestimonialsGrid({ items, showFilters = true }: TestimonialsGridProps) {
  const testimonials = items && items.length > 0 ? items : sampleTestimonials;
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

  const specialties = useMemo(() => {
    const list = new Set<string>();
    testimonials.forEach((t) => {
      if (t.specialty) list.add(t.specialty.trim());
    });
    return ["All Specialties", ...Array.from(list)];
  }, [testimonials]);

  const filteredTestimonials = useMemo(() => {
    if (selectedSpecialty === "All Specialties") return testimonials;
    return testimonials.filter((t) => (t.specialty || "").toLowerCase() === selectedSpecialty.toLowerCase());
  }, [selectedSpecialty, testimonials]);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Filter Tabs */}
        {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {specialties.map((spec) => (
            <button
              key={spec}
              type="button"
              onClick={() => setSelectedSpecialty(spec)}
              className={`text-xs sm:text-sm font-bold transition-all px-4 py-2 rounded-full cursor-pointer border ${
                selectedSpecialty === spec
                  ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-900/15"
                  : "text-slate-600 hover:text-[#1D4ED8] bg-white hover:bg-blue-50 border-[#E2E6EC]"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
        )}

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item, idx) => (
            <MotionWrapper key={item.id} variant="scaleUp" delay={idx * 0.05}>
              <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full text-left space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Rating Stars & Specialty Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.specialty}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                </div>

                {/* Author Info & ROI Badge Footer */}
                <div className="pt-4 border-t border-[#E2E6EC] space-y-3">
                  
                  <div className="flex items-center gap-3">
                    <AppImage
                      src={item.avatar}
                      fallbackSrc="/doctor-hero.png"
                      alt={item.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-full border border-slate-200 object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-[#0F172A]">{item.name}</h4>
                        {item.verified && (
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{item.role} @ {item.clinic}</p>
                    </div>
                  </div>

                  {/* ROI Metric Pill */}
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.roiStat}</span>
                  </div>

                </div>

              </div>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
