"use client";

import { Container, SectionHeading } from "@/components/ui";

const QUICK_LINKS = [
  {
    label: "Custom Tailoring",
    href: "#block-tailoring",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m3 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Embroidery",
    href: "#block-embroidery",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    label: "Explore Makeup",
    href: "#bridal",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8" />
        <path d="M11 12V4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v8" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    label: "Saree Draping",
    href: "#service-saree",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4v16M4 4v16" />
        <path d="M4 12h16" />
        <path d="M12 4v16" />
      </svg>
    ),
  },
  {
    label: "Facials",
    href: "#service-facials",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5v3.6l-2 2V21h15v-7.4l-2-2V8a5.5 5.5 0 0 0-5.5-5.5Z" />
        <path d="M12 2.5v18.5" />
      </svg>
    ),
  },
  {
    label: "Haircut",
    href: "#service-haircut",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
        <path d="M4.5 16.5c1.5-1.5 3.5-2.5 5.5-2.5h4c2 0 4 1 5.5 2.5" />
        <path d="M12 10v12" />
        <path d="M8 17v5" />
        <path d="M16 17v5" />
      </svg>
    ),
  },
];

export function QuickLinksSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // 64px is the navbar height offset
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <section
      id="quick-links"
      className="py-16 sm:py-20 bg-background overflow-hidden relative"
    >
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeading
          tag="h2"
          title="Jump to What You Need"
          accentWord="Need"
          subtitle=""
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="flex flex-col items-center justify-center gap-3 min-h-[100px] p-4 text-center rounded-xl bg-primary border border-highlight/25 shadow-card transition-all duration-300 hover:border-highlight/60 hover:-translate-y-1 hover:shadow-card-hover group"
            >
              <div
                className="text-white/60 transition-colors duration-300 group-hover:text-highlight"
                aria-hidden="true"
              >
                {link.icon}
              </div>
              <span className="font-heading font-semibold text-sm sm:text-base text-white/90 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
