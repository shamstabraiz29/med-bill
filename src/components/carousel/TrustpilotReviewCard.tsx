import { Star } from "lucide-react";

interface TrustpilotReviewCardProps {
  reviewTitle: string;
  name: string;
  text: string;
  date: string;
  rating?: number;
  titleClassName?: string;
}

function TrustpilotStar({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-[#00B67A] ${className}`}
      aria-hidden="true"
    >
      <Star className="h-2.5 w-2.5 fill-white text-white" strokeWidth={0} />
    </span>
  );
}

export default function TrustpilotReviewCard({
  reviewTitle,
  name,
  text,
  date,
  rating = 5,
  titleClassName = "text-[#1D4ED8]",
}: TrustpilotReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[#E2E6EC] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className={`text-base font-bold leading-snug sm:text-[17px] ${titleClassName}`}>
          {reviewTitle}
        </h3>
        <TrustpilotStar className="h-5 w-5 shrink-0" />
      </div>

      <div className="mb-4 flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TrustpilotStar key={index} className={index < rating ? "h-4 w-4" : "h-4 w-4 opacity-30"} />
        ))}
      </div>

      <p className="text-sm font-bold text-[#0F172A]">By {name}</p>
      <p className="mt-3 flex-1 text-sm leading-[1.65] text-[#475569]">{text}</p>
      <p className="mt-5 text-xs text-[#94A3B8]">{date}</p>
    </article>
  );
}
