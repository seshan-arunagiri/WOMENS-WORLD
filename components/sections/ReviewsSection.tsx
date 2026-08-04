import { Container } from "@/components/ui";
import { REVIEWS, TOTAL_REVIEW_COUNT, getAverageRating } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";

/* ── Google Maps URL ─────────────────────────────────────────────────
   Reuses the same URL as the About section "Visit Us" block.         */
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/XxWcs92kD7FyrUhj6";

/* ── Star row ────────────────────────────────────────────────────────
   Renders filled gold stars up to `rating`, then outline for remainder.
   strokeWidth on outline stars kept at 1.5 so they're visible at 16px. */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#C9A66B" : "none"}
          stroke={i < rating ? "none" : "rgba(201,166,107,0.35)"}
          strokeWidth={i < rating ? 0 : 1.5}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Review card ─────────────────────────────────────────────────────
   Matches the violet panel + gold border card language used sitewide.
   All content uses only <span> / inline elements — no block nesting
   inside interactive containers (Engineering Standard #1).           */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className={[
        "flex flex-col gap-4 p-6 rounded-2xl",
        "bg-primary border border-highlight/20 shadow-card",
        "transition-all duration-300 ease-out",
        "hover:border-highlight/45 hover:-translate-y-1 hover:shadow-card-hover",
      ].join(" ")}
    >
      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Service tag */}
      <span
        className="font-body font-medium uppercase tracking-[0.22em] block"
        style={{ fontSize: "0.62rem", color: "#C9A66B", opacity: 0.9 }}
      >
        {review.service}
      </span>

      {/* Quote — italic, quotation marks, soft lavender-white */}
      <p
        className="font-body text-sm leading-relaxed italic flex-1"
        style={{ color: "rgba(232,223,240,0.82)" }}
      >
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Micro-divider */}
      <div
        className="h-px w-8"
        style={{
          background: "linear-gradient(90deg, #C9A66B, #E8C98A 60%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Name — bold ivory serif */}
      <span
        className="font-heading font-bold text-base block"
        style={{ color: "#FAF3F0" }}
      >
        {review.name}
      </span>
    </div>
  );
}

/* ── Average rating display ──────────────────────────────────────────
   Calculated dynamically from the data array.                        */
function RatingSummary() {
  const avg = getAverageRating(REVIEWS);
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
      {/* Large star + number */}
      <div className="flex items-center gap-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#C9A66B"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span
          className="font-heading font-bold text-3xl"
          style={{ color: "#C9A66B" }}
        >
          {avg.toFixed(1)}
        </span>
      </div>

      {/* Separator dot — hidden on mobile */}
      <span
        className="hidden sm:block font-body text-lg"
        style={{ color: "rgba(201,166,107,0.4)" }}
        aria-hidden="true"
      >
        ·
      </span>

      {/* Count copy */}
      <span
        className="font-body text-sm text-center"
        style={{ color: "rgba(35,17,32,0.65)" }}
      >
        Average rating from{" "}
        <strong style={{ color: "#3B1240" }}>{TOTAL_REVIEW_COUNT}+</strong>{" "}
        happy clients
      </span>
    </div>
  );
}

/* ── Main exported section ───────────────────────────────────────────
   Data source: lib/reviews.ts (static array).
   To wire up live data (e.g. Supabase): change this component to
   accept a `reviews: Review[]` prop and pass data from a server
   component or SWR hook above — the card/display logic stays as-is.  */
export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="subtle-texture relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      {/* Radial gold halo behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,166,107,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 flex flex-col gap-12">

        {/* ── Section heading ───────────────────────────────── */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            className="font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "#3B1240" }}
          >
            What Our Clients{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #C9A66B 0%, #E8C98A 50%, #C9A66B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Say
            </span>
          </h2>

          {/* Gold underline accent */}
          <div
            className="h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A66B 30%, #E8C98A 50%, #C9A66B 70%, transparent)",
            }}
            aria-hidden="true"
          />

          <p
            className="font-body text-base sm:text-lg max-w-md leading-relaxed"
            style={{ color: "rgba(35,17,32,0.65)" }}
          >
            Real stories from real brides and clients.
          </p>

          {/* Average rating summary */}
          <RatingSummary />
        </div>

        {/* ── Review cards ─────────────────────────────────────
            Desktop: auto-fill grid ~4 per row (min 260px)
            Mobile 375px: 2 columns fit cleanly at this card size;
            confirmed cleaner than horizontal scroll at this breakpoint
            since the cards are tall enough to be readable at 2-col.  */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* ── Google reviews link ───────────────────────────── */}
        <div className="flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-4 font-body font-medium text-xs tracking-[0.22em] uppercase transition-all duration-200"
            style={{ color: "#C9A66B" }}
            aria-label="Read more reviews on Google (opens in new tab)"
          >
            <span
              className="border-b border-transparent hover:border-current transition-colors duration-200"
              style={{ paddingBottom: "2px" }}
            >
              Read more reviews on Google ↗
            </span>
          </a>
        </div>

      </Container>
    </section>
  );
}
