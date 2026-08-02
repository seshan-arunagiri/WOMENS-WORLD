"use client";

import { Container } from "@/components/ui";

const QUICK_LINKS = [
  {
    label: "Custom Tailoring",
    href: "#block-tailoring",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5v3.6l-2 2V21h15v-7.4l-2-2V8a5.5 5.5 0 0 0-5.5-5.5Z" />
        <path d="M12 2.5v18.5" />
      </svg>
    ),
  },
  {
    label: "Haircut",
    href: "#service-haircut",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
  return (
    <section
      id="quick-links"
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #EDE6F2 0%, #231120 100%)",
      }}
    >
      <Container className="relative z-10 flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {QUICK_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                "flex flex-col items-center justify-center gap-3 min-h-[100px] p-4 text-center rounded-xl",
                "bg-primary border border-highlight/25 shadow-card",
                "transition-all duration-300 ease-out hover:border-highlight/55 hover:-translate-y-1 hover:shadow-card-hover group",
                "animate-fade-up",
              ].join(" ")}
              style={{
                animationDelay: `${i * 100}ms`
              }}
            >
              <span
                className="text-highlight opacity-75 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                aria-hidden="true"
              >
                {link.icon}
              </span>
              <span className="font-heading font-semibold text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
