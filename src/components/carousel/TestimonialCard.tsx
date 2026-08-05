import AppImage from "@/components/ui/AppImage";
import { Star, Quote } from "lucide-react";

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
    <div className="hp-card-interactive relative flex h-full flex-col p-6">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-sky-100" />
      <div className="mb-5 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-sky-100">
          <AppImage src={avatar} fallbackSrc="/doctor-hero.png" alt={name} fill className="object-cover object-top" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">{name}</p>
          <p className="truncate text-xs text-slate-500">{specialty}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
          ))}
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{text}&rdquo;</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-sky-600">{clinicName}</p>
    </div>
  );
}
