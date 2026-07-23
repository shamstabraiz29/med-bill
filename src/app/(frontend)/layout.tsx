import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BellMedEx - Premium Medical Billing & Coding Services",
    template: "%s | BellMedEx",
  },
  description: "Official BellMedEx platform for professional revenue cycle management, healthcare SEO, provider credentialing, and medical billing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-foreground relative overflow-x-hidden" suppressHydrationWarning>
        {/* Global Background Theme Layer */}
        <GlobalBackground />
        
        <Header />
        <main className="flex-1 pt-28 pb-10 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

