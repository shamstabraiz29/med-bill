import { DM_Sans, Fraunces } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-home-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-home-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

interface HomeThemeProps {
  children: React.ReactNode;
}

/** Scoped typography for homepage — inherits global :root background & colors. */
export default function HomeTheme({ children }: HomeThemeProps) {
  return (
    <div className={`homepage-theme ${dmSans.variable} ${fraunces.variable} relative min-h-screen`}>
      {children}
    </div>
  );
}
