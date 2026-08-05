import AppImage from "@/components/ui/AppImage";
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
    <div className="hp-card flex h-full w-full flex-col items-center justify-between p-7 text-center">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
          <AppImage
            src={avatar}
            fallbackSrc="/doctor-hero.png"
            alt={`${name} - Client Avatar`}
            fill
            className="object-cover object-top"
          />
        </div>
        <div>
          <h4 className="font-display text-base font-semibold text-foreground">{name}</h4>
          <p className="mt-0.5 text-xs font-medium text-muted-foreground">{specialty}</p>
        </div>
      </div>

      <div className="relative my-6 px-1">
        <Quote className="pointer-events-none absolute -top-4 left-1/2 h-7 w-7 -translate-x-1/2 text-primary/10" />
        <p className="relative text-sm font-medium italic leading-relaxed text-muted-foreground">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-2 border-t border-border pt-5">
        <div className="flex items-center gap-0.5 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "text-border"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
          <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>{clinicName}</span>
        </div>
      </div>
    </div>
  );
}
