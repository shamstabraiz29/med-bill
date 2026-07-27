"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ShieldCheck, Award } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  badge: string;
}

const leaders: TeamMember[] = [
  {
    name: "David Miller",
    role: "Chief Executive Officer (CEO)",
    bio: "Over 20 years of executive leadership in healthcare technology and revenue cycle management.",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    badge: "Executive Leadership",
  },
  {
    name: "Dr. Julia Will",
    role: "Chief Medical & Operations Officer",
    bio: "Former clinic owner and medical billing auditor with extensive clinical workflow expertise.",
    imageSrc: "https://images.unsplash.com/photo-1594824813566-88855ce7890b?q=80&w=400&auto=format&fit=crop",
    badge: "Clinical Strategy",
  },
  {
    name: "Mark Davis",
    role: "VP of Revenue Operations",
    bio: "Certified RCM director managing team of 100+ billing specialists and certified AAPC coders.",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    badge: "Billing Operations",
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Credentialing & Client Success",
    bio: "Payer enrollment consultant accelerating provider credentialing speed with commercial carriers.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    badge: "Payer Enrollment",
  },
];

export default function AboutTeamCulture() {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Expert Leadership"
          badgeVariant="indigo"
          title="Meet the Minds Behind BellMedEx"
          description="Driven by decades of combined experience in healthcare management, billing compliance, and software engineering."
          align="center"
        />

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((member, idx) => (
            <MotionWrapper key={idx} variant="scaleUp" delay={idx * 0.06}>
              <div className="group bg-white border border-[#E2E6EC] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full text-left">
                
                {/* Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#0F172A]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#1D4ED8]">{member.role}</p>
                    <p className="text-xs text-[#475569] leading-relaxed pt-1">{member.bio}</p>
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
