import type { HealthcareSeoData } from '@/payload/types/healthcareSeo'

export const defaultHealthcareSeoData: HealthcareSeoData = {
  seo: {
    metaTitle: 'Healthcare SEO & Digital Marketing Services | Reach More Patients | BellMedEx',
    metaDescription:
      'We help healthcare providers rank higher, reach wider, and grow faster with proven medical practice digital marketing and Healthcare SEO solutions.',
    keywords:
      'healthcare SEO, medical practice digital marketing, physician SEO, local medical SEO, healthcare Google Ads, HIPAA compliant marketing',
    canonicalUrl: 'https://bellmedex.com/healthcare-seo',
    robots: 'index, follow',
    openGraph: {
      ogTitle: 'Healthcare SEO & Digital Marketing Services | Reach More Patients | BellMedEx',
      ogDescription:
        'We help healthcare providers rank higher, reach wider, and grow faster with proven medical practice digital marketing and Healthcare SEO solutions.',
      ogType: 'website',
      ogUrl: 'https://bellmedex.com/healthcare-seo',
    },
  },

  hero: {
    badge: 'Healthcare Digital Marketing & SEO',
    titlePrefix: 'Reach More Patients.',
    titleHighlight: 'Save More Lives',
    subtitle:
      'We help you rank higher, reach wider, and grow faster with our proven healthcare digital marketing solutions. Trust us to take your personal branding to the next level for medical practice growth!',
    leftImageSrc: '/consultants-laptop.png',
    leftBadgeTag: '#1 Google Rank',
    leftBadgeStatus: 'SEO Certified',
    leftMetricValue: '+350% Patient Reach',
    leftMetricLabel: 'Organic Practice Growth',
    formButtonLabel: 'GET FREE PROPOSAL',
    successTitle: 'Proposal Request Received!',
    successDescription:
      'Thank you! Our Healthcare SEO experts are preparing your custom audit report and will reach out shortly.',
    rightImageSrc: '/clearinghouse-nurse-hero.png',
    rightBadgeTag: 'HIPAA Compliant',
    rightMetricValue: 'Trusted by 500+ Practices',
    rightMetricLabel: 'Top Medical SEO Agency',
  },

  pillars: {
    badge: 'Core Services',
    titlePlain: 'Comprehensive',
    titleHighlight: 'Healthcare Digital Growth',
    description:
      'Drive qualified patient traffic, dominate local search maps, and expand your medical practice authority with our specialized healthcare digital marketing pillars.',
    pillars: [
      {
        iconName: 'Search',
        title: 'website seo.',
        description:
          'Optimize your website for search engines, so that it ranks higher on your target keywords for a higher patient volume.',
      },
      {
        iconName: 'Megaphone',
        title: 'online advertising.',
        description:
          'Reach your target audience via laser-focused advertising campaigns on social media, search engine, and email.',
      },
      {
        iconName: 'MapPin',
        title: 'local seo.',
        description:
          'Optimize your clinic\'s online presence for local searches, so that you rank higher on "near me" keywords in your area.',
      },
    ],
  },

  expertise: {
    badge: 'Expert Healthcare Marketers',
    titlePrefix: 'We know healthcare.',
    titleHighlight: 'We know digital marketing.',
    description:
      'Whether you need a website, an ad, a content, or a social media strategy, we can help you connect with your target audience and grow your practice. Contact us today and let our creative solutions help you succeed.',
    cardTitle: 'Boost Your Online Presence',
    cardDescription:
      'Our healthcare digital marketing service manages the entire digital marketing operations of your healthcare facility, from planning to execution to optimization. Our experts help you create a strong online brand identity, reach and engage your target audience, and generate more leads and conversions.',
    ctaLabel: 'Get Free Strategy Consultation',
    ctaHref: '/schedule-a-demo',
    valueProps: [
      {
        id: 'affordable',
        iconName: 'Wallet',
        title: 'Affordable',
        detail: 'Transparent pricing models tailored for practices of all sizes with maximum ROI.',
      },
      {
        id: 'effective',
        iconName: 'Send',
        title: 'Effective',
        detail: 'Laser-focused campaigns driving qualified patient inquiries and appointment bookings.',
      },
      {
        id: 'reliable',
        iconName: 'ShieldCheck',
        title: 'Reliable',
        detail: 'HIPAA-compliant operations with dedicated account management and monthly audits.',
      },
      {
        id: 'guaranteed',
        iconName: 'Award',
        title: 'Guaranteed',
        detail: 'Proven track record of placing 500+ practices on the 1st page of Google search.',
      },
    ],
  },

  servicesList: {
    bannerTitlePlain: 'Want To Get',
    bannerTitleHighlight: 'FREE SEO Proposal',
    bannerCtaLabel: 'Get Started',
    bannerCtaHref: '/schedule-a-demo',
    services: [
      {
        id: 'healthcare-seo',
        title: 'Healthcare SEO',
        tagline: 'the cure for low rankings',
        description:
          'We help you optimize your website for search engines. So you can rank higher, attract more patients, and grow your practice.',
        ctaLabel: "Let's Talk",
        ctaHref: '/contact-us',
        accentBg: 'bg-[#1E1B4B] text-white',
        iconName: 'TrendingUp',
        imageSrc: '/consultants-laptop.png',
        moreDetails: [
          { label: 'Technical SEO audit and speed optimization' },
          { label: 'Keyword research targeting high-intent medical queries' },
          { label: 'On-page optimization for medical services and specialties' },
          { label: 'HIPAA-compliant content marketing and blogging' },
        ],
      },
      {
        id: 'online-advertising',
        title: 'Online Advertising',
        tagline: 'the vaccine for your competition',
        description:
          'We help you create and manage effective online advertising, so you can reach your target audience, generate more leads and increase your revenue.',
        ctaLabel: "Let's Talk",
        ctaHref: '/contact-us',
        accentBg: 'bg-[#0284C7] text-white',
        iconName: 'Megaphone',
        imageSrc: '/clearinghouse-nurse-hero.png',
        moreDetails: [
          { label: 'Google Ads & PPC campaign management' },
          { label: 'Meta (Facebook & Instagram) hyper-targeted ads' },
          { label: 'Patient retargeting and lead conversion funnels' },
          { label: 'Real-time ROI dashboard & call tracking' },
        ],
      },
      {
        id: 'local-seo',
        title: 'Local SEO',
        tagline: 'dominate the near me searches',
        description:
          'We help you optimize your medical facility for local search, so you can dominate your local market, build your online reputation, and connect with your community.',
        ctaLabel: "Let's Talk",
        ctaHref: '/contact-us',
        accentBg: 'bg-[#1E1B4B] text-white',
        iconName: 'MapPin',
        imageSrc: '/doctors-team.png',
        moreDetails: [
          { label: 'Google Business Profile (GMB) optimization' },
          { label: 'Local citation building and NAP consistency' },
          { label: 'Automated patient review generation system' },
          { label: 'Geofenced local map pack ranking strategies' },
        ],
      },
    ],
  },

  pricingUnlockCta: {
    badge: 'Unbeatable SEO Pricing',
    titlePlain: 'Get Your',
    titleHighlight: 'SEO Done',
    description:
      'Unbeatable SEO packages for healthcare providers are now within your reach! Fill in the form to unlock the lowest rates for your practice type.',
    formTitle: 'Unlock Pricing For Your Project!',
    formDescription:
      'Fill in the form below to instantly unlock the lowest SEO rates for your practice.',
    formCtaLabel: 'UNLOCK NOW',
    successTitle: 'Pricing Unlocked!',
    successDescription:
      'Thank you! Our Healthcare SEO pricing matrix has been dispatched to your email.',
  },

  hipaaAndServices: {
    hipaaBadgeText: 'We do HIPAA compliant digital marketing',
    hipaaTitle: 'Peace Of Mind.',
    hipaaDescription:
      'Our service follows the HIPAA rules and regulations, and we use encryption, authentication, and backup systems to ensure that your data is safe and secure. You can trust us with your healthcare digital marketing needs, knowing that we respect and protect your patients privacy and security.',
    hipaaTag: '100% HIPAA Compliant & Encrypted Data Handling',
    otherServicesTitle: 'Other Services To Help You Grow',
    otherServicesDescription:
      'We are a one-stop solution for all your healthcare needs. We offer not only healthcare digital marketing services, but also medical billing, coding and credentialing solutions.',
    otherServicesCtaLabel: 'Explore All Practice Solutions',
    otherServicesCtaHref: '/services',
    otherServices: [
      {
        title: 'Billing',
        href: '/medical-billing',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
      },
      {
        title: 'Coding',
        href: '/medical-coding',
        image:
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
      },
      {
        title: 'Credentialing',
        href: '/provider-credentialing',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },

  scheduleConsultation: {
    title: 'Schedule Free Consultation',
    subtitle: "Let's discuss the plan to drive more traffic.",
    formCtaLabel: "LET'S TALK",
    successTitle: 'Consultation Requested!',
    successDescription:
      'Thank you! Our SEO strategy team will contact you shortly to confirm your consultation schedule.',
    imageSrc:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    cardTitle: 'Free Strategy Consultation',
    cardSubtitle: 'Custom traffic & patient growth roadmap for your clinic',
    cardBadge: 'No Obligation',
  },
}
