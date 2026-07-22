import { Button, Container, SectionHeading } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/config";

/* ── WhatsApp shared CTA ──────────────────────────────────────────── */
const WA_SERVICES = getWhatsAppUrl("Hi, I'd like to book a beauty or styling service.");

/* ── Service card data ────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "service-saree",
    tag: "Saree Draping",
    heading: "Elegance, Draped to Perfection",
    description:
      "Expert saree draping for weddings, receptions, and every special occasion. We work fluently in regional styles — Nivi, Bengali, Gujarati, Maharashtrian, Seedha Pallu, and more.",
  },
  {
    id: "service-facials",
    tag: "Facials & Skincare",
    heading: "Radiant Skin, Every Time",
    description:
      "Pre-bridal facials, de-tan treatments, skin brightening, and cleanup sessions to prepare your skin for its best day. We recommend a full pre-bridal course starting 4–6 weeks before the event.",
  },
  {
    id: "service-haircut",
    tag: "Haircut & Styling",
    heading: "Styled for Your Story",
    description:
      "Precision haircuts, blow-dries, bridal hair-setting, and occasion updos — adapted to your hair type, face shape, and the look you're going for. From clean trims to full bridal hairstyles.",
  },
] as const;

/* ── Photo placeholder (4:3, landscape — suits service shots) ─────── */
function ServicePhoto({ label }: { label: string }) {
  return (
    <div
      className="relative w-full rounded-t-xl overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,18,64,0.55) 0%, rgba(93,40,110,0.45) 50%, rgba(59,18,64,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(201,166,107,0.22)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#C9A66B"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
          aria-hidden="true"
        >
          <rect x="6"  y="14" width="36" height="26" rx="5" />
          <circle cx="24" cy="27" r="7" />
          <path d="M18 14l3-6h6l3 6" />
          <circle cx="37" cy="20" r="1.8" fill="#C9A66B" stroke="none" />
        </svg>
        <p
          className="font-body text-xs tracking-[0.18em] uppercase"
          style={{ color: "rgba(201,166,107,0.65)" }}
        >
          {label}
          <br />
          <span style={{ fontSize: "0.6rem", opacity: 0.6 }}>
            Photo coming soon
          </span>
        </p>
      </div>
    </div>
  );
}

/* ── Individual service card (violet panel, no per-card CTA) ─────── */
function ServiceCard({
  id,
  tag,
  heading,
  description,
}: (typeof SERVICES)[number]) {
  return (
    <div
      id={id}
      className={[
        "flex flex-col rounded-2xl overflow-hidden",
        "border border-highlight/25",
        "bg-primary",
        "shadow-card",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-card-hover hover:border-highlight/55",
      ].join(" ")}
    >
      {/* Landscape photo placeholder — flush top */}
      <ServicePhoto label={tag} />

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
        {/* Gold tag */}
        <span
          className="font-body font-medium uppercase tracking-[0.22em]"
          style={{ fontSize: "0.62rem", color: "#C9A66B", opacity: 0.9 }}
        >
          {tag}
        </span>

        {/* Heading — ivory */}
        <h3
          className="font-heading font-bold text-xl sm:text-2xl leading-snug"
          style={{ color: "#FAF3F0" }}
        >
          {heading}
        </h3>

        {/* Gold micro-divider */}
        <div
          className="h-px w-10 shrink-0"
          style={{
            background:
              "linear-gradient(90deg, #C9A66B, #E8C98A 60%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Description — soft lavender-white */}
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "rgba(232,223,240,0.80)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ── Main exported section ────────────────────────────────────────── */
export function ServicesSection() {
  return (
    /* id="services" — no nav link points here (nav has: Home, Tailoring,
       Bridal, Gallery, About, Contact). This section is visible in the
       page flow but not directly nav-targeted — correct as designed.
       bg-background (#EDE6F2) alternates off Makeup's #231120 dark.   */
    <section
      id="services"
      className="subtle-texture relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      {/* Radial halo behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,166,107,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 flex flex-col gap-14">

        {/* Section heading — on lavender bg, SectionHeading works correctly */}
        <SectionHeading
          tag="h2"
          title="Beauty & Styling"
          accentWord="Styling"
          subtitle="Saree draping, skincare, and haircuts — every detail of your look, handled with care."
          align="center"
        />

        {/* Three violet service cards — 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>

        {/* Shared CTA — one button for all three services */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <p
            className="font-body text-sm text-center text-text-muted"
          >
            Interested in any of these services? Let&apos;s talk.
          </p>
          <Button
            as="a"
            href={WA_SERVICES}
            variant="outline"
            size="lg"
            className="min-h-[52px] gap-2"
            id="services-whatsapp-cta"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Book a Service
          </Button>
        </div>

      </Container>
    </section>
  );
}
