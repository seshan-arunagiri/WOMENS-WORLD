import type { ReactNode } from "react";

interface PathPanelProps {
  id: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  href: string;
  ctaLabel: string;
}

function PathPanel({ id, icon, title, tagline, href, ctaLabel }: PathPanelProps) {
  return (
    <a
      id={id}
      href={href}
      className={[
        /* Layout */
        "group flex flex-col items-center text-center gap-6 p-8 sm:p-10",
        /* Shape — gold border clearly visible against lavender section bg */
        "rounded-2xl border border-highlight/30",
        /* Violet panel background — intentional, premium */
        "bg-primary",
        /* Elevation */
        "shadow-card",
        /* Hover: lift + border brightens to full gold + shadow deepens */
        "transition-all duration-200 ease-out",
        "hover:-translate-y-2 hover:shadow-card-hover hover:border-highlight/70",
        /* Cursor */
        "cursor-pointer select-none",
        /* Equal weight — both fill the same height */
        "flex-1",
      ].join(" ")}
      aria-label={title}
    >
      {/* Icon illustration — gold toned circle on violet */}
      <div
        className={[
          "w-16 h-16 rounded-full flex items-center justify-center",
          "border border-highlight/40",
          "transition-all duration-200 group-hover:scale-110 group-hover:border-highlight/80",
        ].join(" ")}
        style={{ backgroundColor: "rgba(201,166,107,0.1)" }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Gold ornamental separator */}
      <div className="gold-divider w-10" aria-hidden="true" />

      {/* Title — ivory for high contrast on violet */}
      <h3
        className="font-heading font-bold text-2xl sm:text-3xl leading-tight"
        style={{ color: "#FAF3F0" }}
      >
        {title}
      </h3>

      {/* Tagline — soft lavender-white, slightly reduced opacity for hierarchy */}
      <p
        className="font-body text-sm sm:text-base leading-relaxed max-w-xs"
        style={{ color: "rgba(232, 223, 240, 0.82)" }}
      >
        {tagline}
      </p>

      {/* CTA — gold outline, readable on violet. Uses <span> NOT <a> to prevent
           nested anchor (invalid HTML / hydration error — see Phase 3 fix notes) */}
      <div className="mt-auto pt-2 w-full flex justify-center">
        <span
          aria-hidden="true"
          className={[
            "inline-flex items-center justify-center gap-2",
            "min-h-[44px] min-w-[180px] px-7 py-3",
            "rounded-full border-2 border-highlight",
            "font-body font-medium text-base tracking-wide",
            "transition-all duration-200 ease-out",
            /* Gold text on violet → hover fills gold with white text */
            "text-highlight group-hover:bg-highlight group-hover:text-white group-hover:shadow-glow",
          ].join(" ")}
        >
          {ctaLabel}
        </span>
      </div>
    </a>
  );
}

// ── Inline SVGs — gold strokes, readable on violet bg ───────────────

function NeedleThreadIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#C9A66B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Needle body */}
      <line x1="6" y1="26" x2="24" y2="8" />
      {/* Needle eye */}
      <ellipse cx="23" cy="9" rx="2.5" ry="1.5" transform="rotate(-45 23 9)" />
      {/* Thread loop from eye */}
      <path d="M 21 11 C 17 15 13 13 12 17 C 11 21 15 22 14 26" />
      {/* Decorative stitch dots — ivory so they pop on violet */}
      <circle cx="9"    cy="23"   r="0.9" fill="#FAF3F0" stroke="none" />
      <circle cx="11.5" cy="20.5" r="0.9" fill="#FAF3F0" stroke="none" />
      <circle cx="14"   cy="18"   r="0.9" fill="#FAF3F0" stroke="none" />
    </svg>
  );
}

function MirrorMakeupIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#C9A66B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Vanity mirror oval */}
      <ellipse cx="16" cy="13" rx="8" ry="10" />
      {/* Mirror stand base */}
      <line x1="16" y1="23" x2="16" y2="28" />
      <line x1="11" y1="28" x2="21" y2="28" />
      {/* Decorative sparkle dots — ivory so they pop on violet */}
      <circle cx="8"  cy="6"  r="1"   fill="#FAF3F0" stroke="none" />
      <circle cx="24" cy="6"  r="1"   fill="#FAF3F0" stroke="none" />
      <circle cx="6"  cy="14" r="1"   fill="#FAF3F0" stroke="none" />
      <circle cx="26" cy="14" r="1"   fill="#FAF3F0" stroke="none" />
      {/* Inner reflection shine — lightened for violet bg */}
      <path d="M 12 10 Q 14 8 16 9" strokeWidth="1" stroke="#E8DFF0" opacity="0.7" />
    </svg>
  );
}

// ── Main exported section ────────────────────────────────────────────

export function TwoPathSplit() {
  return (
    <section
      id="explore"
      className="subtle-texture relative py-20 sm:py-24 bg-background-alt overflow-hidden"
    >
      {/* Subtle diagonal gradient overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-heading font-bold text-primary text-3xl sm:text-4xl md:text-5xl leading-tight">
            Two Worlds,{" "}
            <span className="text-gradient-gold italic">One Studio</span>
          </h2>
          <div className="gold-divider w-24 mx-auto animate-gold-pulse" aria-hidden="true" />
          <p className="font-body text-text-muted text-base sm:text-lg max-w-lg leading-relaxed mt-1">
            Choose your journey — or indulge in both. Every service is
            crafted with the same devotion to detail.
          </p>
        </div>

        {/* Two panels — equal weight, stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <PathPanel
            id="path-tailoring"
            icon={<NeedleThreadIcon />}
            title="Tailoring & Embroidery"
            tagline="Custom stitching, bespoke embroidery, and precision tailoring — crafted exactly to you."
            href="#tailoring"
            ctaLabel="Explore Tailoring"
          />
          <PathPanel
            id="path-bridal"
            icon={<MirrorMakeupIcon />}
            title="Bridal & Beauty"
            tagline="HD makeup, saree draping, facials, and haircuts — for every occasion that deserves to shine."
            href="#bridal"
            ctaLabel="Explore Bridal & Beauty"
          />
        </div>

      </div>
    </section>
  );
}
