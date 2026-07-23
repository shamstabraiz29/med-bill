import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  specialty: string;
  clinicName?: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({
  avatar,
  name,
  specialty,
  clinicName = "Verified Practice",
  text,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="group/card relative w-full h-full bg-white border border-[#E2E6EC] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-[0_8px_32px_rgba(29,78,216,0.10)] hover:border-[#1D4ED8]/20 select-none">
      
      {/* Profile Area */}
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#E2E6EC] shrink-0">
          <Image
            src={avatar}
            alt={`${name} - Client Avatar`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover/card:scale-105"
          />
        </div>
        <div>
          <h4 className="text-[#0F172A] text-base font-bold tracking-[-0.02em]">
            {name}
          </h4>
          <p className="text-[#475569] text-xs font-medium mt-0.5">
            {specialty}
          </p>
        </div>
      </div>

      {/* Review Text */}
      <div className="my-6 relative flex flex-col items-center">
        <Quote className="w-8 h-8 text-[#1D4ED8]/5 absolute -top-4 pointer-events-none" />
        <p className="text-[#475569] text-sm leading-[1.6] font-medium italic relative z-10">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* Footer: Rating & Verification Status */}
      <div className="w-full pt-5 border-t border-[#E2E6EC] flex flex-col items-center gap-2">
        <div className="flex items-center gap-0.5 text-[#EAB308]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(rating) ? "fill-[#EAB308] text-[#EAB308]" : "text-[#E2E6EC]"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[#22C55E] text-[10px] font-bold uppercase tracking-wider">
          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{clinicName}</span>
        </div>
      </div>
      
    </div>
  );
}
