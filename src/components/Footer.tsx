import Link from "next/link";

type IconProps = React.SVGProps<SVGSVGElement>

const Facebook = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const services = [
    { name: "Medical Billing", href: "/medical-billing" },
    { name: "Medical Coding", href: "/medical-coding" },
    { name: "RCM", href: "/revenue-cycle-management-rcm" },
    { name: "Medical Billing Audit", href: "/medical-billing-audit" },
    { name: "Clearinghouse", href: "/clearinghouse" },
    { name: "Credentialing", href: "/provider-credentialing" },
    { name: "Healthcare SEO", href: "/healthcare-seo" },
  ];

  const softwareTop = [
    { name: "Medical Billing Software", href: "/medical-billing-software" },
    { name: "FusionEDI", href: "/fusionedi-clearinghouse" },
  ];

  const softwareBottom = [
    { name: "Free EHR", href: "/electronic-health-records-ehr" },
    { name: "Free PMS", href: "/practice-management-software-pms" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-bellmedex" },
    { name: "Schedule a Demo", href: "/schedule-a-demo" },
    { name: "Testimonials", href: "/bellmedex-client-testimonials" },
    { name: "Contact US", href: "/contact-bellmedex" },
    { name: "Careers", href: "/bellmedex-careers" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
    { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <footer className="bg-[#1c1a45] text-white py-16 sm:py-20 px-4 md:px-8 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Services
          </h3>
          <ul className="flex flex-col gap-4">
            {services.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Software Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Software
          </h3>
          <ul className="flex flex-col gap-4">
            {softwareTop.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-12 border-t border-white/10" />

          <ul className="flex flex-col gap-4">
            {softwareBottom.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* DMCA Badge */}
          <div className="mt-2">
            <div className="inline-flex items-center border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 rounded px-2.5 py-1 text-xs font-semibold gap-1.5 select-none uppercase tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              DMCA Protected
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            BellMedEx
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            A leading healthcare medical billing services company offering high-quality RCM and practice management solutions nationwide.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Twitter X"
            >
              <span className="font-bold text-sm select-none">𝕏</span>
            </a>
          </div>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} BellMedEx. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/privacy-web-form" className="hover:text-slate-300 transition-colors">Privacy Web Form</Link>
        </div>
      </div>
    </footer>
  );
}
