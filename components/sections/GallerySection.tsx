"use client";

import { useState } from "react";
import { Button, Container } from "@/components/ui";

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
  square:          "aspect-square",
  portrait:        "aspect-[4/5]",
  landscape:       "aspect-[4/3]",
  "landscape-wide":"aspect-[16/9]",
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
function GalleryCell({ item, index, onClick }: { item: GalleryItem; index: number; onClick: () => void }) {
  // We use CSS columns, so items naturally flow. break-inside-avoid prevents splitting.
  // We apply staggered fade-in animation based on index
  const delayClass = `animate-delay-${(index % 6) * 100}`;

  return (
    <button
      id={item.id}
      onClick={onClick}
      aria-label={`View ${item.label}`}
      className={[
        "relative overflow-hidden rounded-xl w-full block mb-3 sm:mb-4 break-inside-avoid",
        "border border-highlight/20 cursor-pointer",
        "group transition-all duration-300 ease-out",
        "hover:border-highlight/50 hover:shadow-card-hover",
        "animate-fade-up",
        delayClass,
        ASPECT_STYLE[item.aspect],
      ].join(" ")}
    >
      {/* Placeholder fill — same violet-gradient as other sections */}
      <span
        className="absolute inset-0 block"
        style={{
          background:
            "linear-gradient(145deg, rgba(59,18,64,0.65) 0%, rgba(93,40,110,0.5) 50%, rgba(35,17,32,0.7) 100%)",
        }}
      />

      {/* Hover tint — lightens slightly on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block"
        style={{ backgroundColor: "rgba(201,166,107,0.06)" }}
      />

      {/* Camera icon + label — centered */}
      <span
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
        <span
          className="font-body text-center leading-snug block"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(201,166,107,0.6)",
          }}
        >
          {item.label}
        </span>
      </span>
    </button>
  );
}

/* ── Main exported section ────────────────────────────────────────── */
export function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, GALLERY_ITEMS.length));
  };

  return (
    <>
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
          {/* Section heading */}
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

          {/* ── Gallery CSS Column Masonry ───────────────────────── */}
          <div className="columns-2 lg:columns-3 gap-3 sm:gap-4">
            {GALLERY_ITEMS.slice(0, visibleCount).map((item, index) => (
              <GalleryCell 
                key={item.id} 
                item={item} 
                index={index}
                onClick={() => setLightboxItem(item)} 
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < GALLERY_ITEMS.length && (
            <div className="flex justify-center mt-4">
              <Button onClick={handleLoadMore} variant="outline" size="md">
                Load More
              </Button>
            </div>
          )}

        </Container>
      </section>

      {/* ── Lightbox Modal ─────────────────────────────────────── */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div 
            className={`relative w-full max-w-4xl rounded-2xl overflow-hidden border border-highlight/30 shadow-2xl ${ASPECT_STYLE[lightboxItem.aspect]}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(145deg, rgba(59,18,64,0.8) 0%, rgba(93,40,110,0.6) 50%, rgba(35,17,32,0.9) 100%)",
              maxHeight: "85vh",
            }}
          >
            {/* Same placeholder graphic for now */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A66B" strokeWidth="1.2" opacity="0.6">
                <rect x="6" y="14" width="36" height="26" rx="5" />
                <circle cx="24" cy="27" r="7" />
                <path d="M18 14l3-6h6l3 6" />
              </svg>
              <h3 className="font-heading text-2xl text-highlight tracking-wider uppercase">
                {lightboxItem.label}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
