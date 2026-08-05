import { cn } from "@/lib/utils";

/** Shared homepage content width — use for every section wrapper. */
export function HomeContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("hp-container", className)}>{children}</div>;
}

type HomeSectionTone = "white" | "muted" | "brand";

interface HomeSectionProps {
  children: React.ReactNode;
  tone?: HomeSectionTone;
  className?: string;
  id?: string;
  containerClassName?: string;
}

const toneStyles: Record<HomeSectionTone, string> = {
  white: "bg-white text-slate-900",
  muted: "bg-slate-50/90 text-slate-900",
  brand: "bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white",
};

export default function HomeSection({
  children,
  tone = "white",
  className,
  id,
  containerClassName,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-16 sm:py-20 lg:py-24", toneStyles[tone], className)}
    >
      {tone === "brand" && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
      )}
      <HomeContainer className={containerClassName}>{children}</HomeContainer>
    </section>
  );
}

export function HomeHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-600">{children}</span>;
}
