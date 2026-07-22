import { Container } from "@/components/ui";

/* ── Gallery grid item definitions ───────────────────────────────────
   Mix of square (1:1), portrait (4:5), and landscape (4:3 / 16:9)
   Some items span 2 columns on desktop for visual rhythm.
   Total: 12 items.                                                    */
type AspectKey = "square" | "portrait" | "landscape" | "landscape-wide";
type SpanKey   = "normal" | "wide";

interface GalleryItem {
  id: string;
  label: string;
  aspect: AspectKey;
  /** spans 2 cols on lg, but respects mobile 2-col layout */
  span: SpanKey;
}

const ASPECT_STYLE: Record<AspectKey, string> = {
  square:          "row-span-4",
  portrait:        "row-span-5",
  landscape:       "row-span-3",
  "landscape-wide":"row-span-3",
};

/* Layout rationale:
   Desktop (3-col): "wide" items occupy 2/3 width — used for hero-style shots
   Mobile   (2-col): "wide" items go full-width (col-span-2), others are 1-col  */
const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g01", label: "Bridal Glam",       aspect: "landscape-wide", span: "wide"   },
  { id: "g02", label: "Makeup Detail",     aspect: "portrait",       span: "normal" },
  { id: "g03", label: "Saree Draping",     aspect: "portrait",       span: "normal" },
  { id: "g04", label: "Thread Embroidery", aspect: "square",         span: "normal" },
  { id: "g05", label: "Reception Look",    aspect: "portrait",       span: "normal" },
  { id: "g06", label: "Tailoring Studio",  aspect: "landscape",      span: "wide"   },
  { id: "g07", label: "Bridal Portrait",   aspect: "portrait",       span: "normal" },
  { id: "g08", label: "Hair & Styling",    aspect: "square",         span: "normal" },
  { id: "g09", label: "Engagement Look",   aspect: "portrait",       span: "normal" },
  { id: "g10", label: "Mehendi Ceremony",  aspect: "landscape-wide", span: "wide"   },
  { id: "g11", label: "Zari Embroidery",   aspect: "square",         span: "normal" },
  { id: "g12", label: "Bengali Bride",     aspect: "portrait",       span: "normal" },
];

/* ── Single gallery cell ─────────────────────────────────────────── */
function GalleryCell({ item }: { item: GalleryItem }) {
  const spanClass =
    item.span === "wide"
      ? "col-span-2 sm:col-span-2 lg:col-span-2"   /* full-width mobile, 2/3 desktop */
      : "col-span-1";

  return (
    <div
      id={item.id}
      className={[
        spanClass,
        "relative overflow-hidden rounded-xl",
        "border border-highlight/20",
        "group transition-all duration-300 ease-out",
        "hover:border-highlight/50 hover:shadow-card-hover",
        ASPECT_STYLE[item.aspect],
      ].join(" ")}
    >
      {/* Placeholder fill — same violet-gradient as other sections */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(59,18,64,0.65) 0%, rgba(93,40,110,0.5) 50%, rgba(35,17,32,0.7) 100%)",
        }}
      />

      {/* Hover tint — lightens slightly on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "rgba(201,166,107,0.06)" }}
      />

      {/* Camera icon + label — centered */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        aria-hidden="true"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#C9A66B"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.45"
          aria-hidden="true"
        >
          <rect x="6"  y="14" width="36" height="26" rx="5" />
          <circle cx="24" cy="27" r="7" />
          <path d="M18 14l3-6h6l3 6" />
          <circle cx="37" cy="20" r="1.6" fill="#C9A66B" stroke="none" />
        </svg>
        <p
          className="font-body text-center leading-snug"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(201,166,107,0.6)",
          }}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

/* ── Main exported section ────────────────────────────────────────── */
export function GallerySection() {
  return (
    /* id="gallery" — matches nav link href="#gallery".
       bg #231120 dark — alternates off Services' lavender #EDE6F2.    */
    <section
      id="gallery"
      className="subtle-texture-gold relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#231120" }}
    >
      {/* Radial gold halo behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,166,107,0.07) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 flex flex-col gap-12">

        {/* Section heading — dark-bg variant (SectionHeading uses text-primary
             which is invisible on dark; write inline with ivory) */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            className="font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "#FAF3F0" }}
          >
            Our{" "}
            <span className="text-gradient-gold italic">Gallery</span>
          </h2>
          <div className="gold-divider w-24 animate-gold-pulse" aria-hidden="true" />
          <p
            className="font-body text-base sm:text-lg max-w-xl leading-relaxed mt-1"
            style={{ color: "rgba(232,223,240,0.70)" }}
          >
            Every look is a story we told together — brides, celebrations, and
            craftsmanship captured one frame at a time.
          </p>
        </div>

        {/* ── Gallery grid ─────────────────────────────────────────
            Using grid-auto-rows with a small base height (e.g. 50px)
            and row-span classes to build a CSS grid masonry.
            "wide" items: col-span-2 on ALL breakpoints. */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[60px] sm:auto-rows-[80px] lg:auto-rows-[90px] grid-flow-row-dense">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCell key={item.id} item={item} />
          ))}
        </div>

        {/* Lightbox note — deferred to later polish pass */}
        <p
          className="text-center font-body text-xs tracking-widest uppercase"
          style={{ color: "rgba(201,166,107,0.4)" }}
        >
          More work coming soon
        </p>

      </Container>
    </section>
  );
}
