import { TestimonialsPageData } from "@/payload/types/testimonials";

export const defaultTestimonialsData: TestimonialsPageData = {
  seo: {
    metaTitle: "Client Testimonials & Success Stories | BellMedEx",
    metaDescription: "Read reviews and success stories from healthcare providers and practice managers who trust BellMedEx for their revenue cycle management.",
    keywords: "bellmedex reviews, client testimonials, medical billing reviews, RCM success stories",
    canonicalUrl: "https://bellmedex.com/testimonials",
    robots: "index, follow",
    openGraph: {
      ogTitle: "Client Testimonials & Success Stories | BellMedEx",
      ogDescription: "Read reviews and success stories from healthcare providers and practice managers who trust BellMedEx for their revenue cycle management.",
      ogType: "website",
      ogUrl: "https://bellmedex.com/testimonials",
    },
  },
  hero: {
    badge: "Client Success Stories",
    title: "Trusted By Over 500+ Healthcare Practices",
    highlightedTitle: "Across The Nation",
    subtitle:
      "Read real reviews and verified success stories from practice owners, physicians, and clinic managers who modernized their medical billing and credentialing with BellMedEx.",
    stats: [
      { value: "4.9/5", label: "Client Satisfaction Score", iconName: "Star" },
      { value: "98%+", label: "Clean Claim Acceptance", iconName: "ShieldCheck" },
      { value: "+30%", label: "Average Revenue Boost", iconName: "TrendingUp" },
      { value: "500+", label: "Physicians & Clinics Served", iconName: "Users" },
    ],
  },
  featuredTestimonial: {
    verifiedBadgeText: "Verified Practice Owner",
    quote:
      "BellMedEx has made my job as a practice owner much easier. I can relax a bit more knowing that you have my billing and credentialings needs handled.",
    authorName: "Dr. Julia Will",
    authorRole: "Counselor & Practice Owner @ Psychiatric Clinic",
    metrics: [
      { label: "85% Reduction in A/R Days" },
      { label: "+25% Revenue Collected" },
    ],
    authorImageSrc:
      "https://images.unsplash.com/photo-1594824813566-88855ce7890b?q=80&w=800&auto=format&fit=crop",
  },
  testimonialsList: [
    {
      id: "1",
      name: "Dr. Robert Chen",
      role: "Medical Director",
      clinic: "Apex Cardiology Associates",
      specialty: "Cardiology",
      quote:
        "Outsourcing our billing to BellMedEx was the best financial decision we made. Our clean claim rate jumped to 99%, and our monthly revenue collections increased by 32% within 90 days.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
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
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
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
      avatar:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
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
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
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
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
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
      avatar:
        "https://images.unsplash.com/photo-1594824813566-88855ce7890b?q=80&w=400&auto=format&fit=crop",
      roiStat: "Real-time Reporting",
      verified: true,
    },
  ],
  cta: {
    eyebrow: "Ready to Join 500+ Satisfied Practices?",
    title: "Transform Your Practice Revenue & Eliminate Claim Denials Today",
    subtitle:
      "Schedule a complimentary 1-on-1 RCM audit with our medical billing specialists. We will analyze your current clean claim rate and identify lost revenue opportunities.",
    features: [
      { label: "Free Practice Audit" },
      { label: "No Upfront Software Fees" },
      { label: "HIPAA Compliant Guarantee" },
    ],
    buttonText: "Schedule Free Audit",
    buttonLink: "/schedule-a-demo",
  },
};
