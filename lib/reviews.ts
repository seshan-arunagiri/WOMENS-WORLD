/* ── Static reviews data ─────────────────────────────────────────────
   To wire up live Supabase data later, replace this export with a
   server-side fetch and return the same Review[] shape. The
   ReviewsSection component does not need to change.                  */

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number; // 1-5
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    name: "Priya S.",
    service: "Bridal Makeup",
    rating: 5,
    quote:
      "The makeup lasted flawlessly through every ceremony — not a touch-up needed. I felt like the most beautiful version of myself.",
  },
  {
    id: "rev-02",
    name: "Ananya R.",
    service: "Custom Lehenga",
    rating: 5,
    quote:
      "I brought in a rough sketch and they stitched it into the most breathtaking lehenga. The fit was perfect on the very first trial.",
  },
  {
    id: "rev-03",
    name: "Meera K.",
    service: "Saree Draping",
    rating: 5,
    quote:
      "My saree pleats held perfectly from the morning ceremony all the way to the reception. The draping was elegant and so secure.",
  },
  {
    id: "rev-04",
    name: "Kavya T.",
    service: "Pre-Bridal Facials",
    rating: 5,
    quote:
      "Six weeks of their pre-bridal routine gave me skin I didn't know I could have. Everyone kept asking what I did differently!",
  },
  {
    id: "rev-05",
    name: "Divya N.",
    service: "Haircut & Styling",
    rating: 5,
    quote:
      "They listened to exactly what I wanted and delivered something even better. Clean, precise, and the styling held all evening.",
  },
  {
    id: "rev-06",
    name: "Rekha M.",
    service: "Embroidery Work",
    rating: 5,
    quote:
      "The zari embroidery on my blouse was so detailed and personal — every motif was exactly as I'd imagined. Truly one-of-a-kind work.",
  },
];

/* ── Aggregate stats ─────────────────────────────────────────────────
   TOTAL_REVIEW_COUNT can be set independently of REVIEWS.length so
   the UI can reflect a larger real-world review base once available. */
export const TOTAL_REVIEW_COUNT = 47;

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
