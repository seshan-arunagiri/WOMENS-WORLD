import { Container, SectionHeading } from "@/components/ui";

const REVIEWS = [
  {
    id: "rev-1",
    name: "Priya S.",
    tag: "Bridal Makeup",
    rating: 5,
    quote: "The team made me feel incredibly special on my big day. The makeup lasted flawlessly through all the ceremonies without feeling heavy.",
  },
  {
    id: "rev-2",
    name: "Ananya R.",
    tag: "Custom Lehenga",
    rating: 5,
    quote: "I brought in a rough sketch and they turned it into the most beautiful lehenga I've ever seen. The fit was absolutely perfect on the first try.",
  },
  {
    id: "rev-3",
    name: "Meera K.",
    tag: "Saree Draping & Styling",
    rating: 5,
    quote: "I was so stressed about my saree pleats staying in place, but they draped it so securely and elegantly. Highly recommend for any event!",
  },
  {
    id: "rev-4",
    name: "Kavya T.",
    tag: "Pre-Bridal Facials",
    rating: 5,
    quote: "The glowing skin I had on my wedding day was entirely thanks to their pre-bridal facial routine. So relaxing and effective.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#C9A66B" : "transparent"}
          stroke={i < rating ? "none" : "rgba(201,166,107,0.3)"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-background-alt overflow-hidden relative"
    >
      <Container className="relative z-10 flex flex-col gap-12">
        <SectionHeading
          tag="h2"
          title="What Our Clients Say"
          accentWord="Say"
          subtitle="Real stories from real brides and clients."
          align="center"
        />

        {/* 
          Mobile: Horizontal scroll (snap-x mandatory)
          Desktop: 2-column or 4-column grid (we'll use 2x2 for 4 items) 
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible gap-4 sm:gap-6 hide-scrollbar">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="snap-center shrink-0 w-[85vw] sm:w-auto flex flex-col gap-5 p-6 rounded-2xl bg-primary border border-highlight/20 shadow-card transition-all hover:border-highlight/40"
            >
              <div className="flex flex-col gap-1">
                <StarRating rating={review.rating} />
                <span className="font-body text-xs tracking-wider uppercase text-highlight/90 mt-2">
                  {review.tag}
                </span>
                <span className="font-heading font-semibold text-lg text-white">
                  {review.name}
                </span>
              </div>
              
              <p className="font-body text-sm leading-relaxed text-white/80 italic">
                &quot;{review.quote}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Google Maps note for Phase 6 */}
        <p className="text-center font-body text-xs tracking-widest uppercase text-text-muted mt-4">
          Read more reviews on Google
        </p>
      </Container>
    </section>
  );
}
