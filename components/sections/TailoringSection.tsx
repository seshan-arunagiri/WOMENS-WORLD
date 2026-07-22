import { Button, Card, Container, SectionHeading } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/config";

/* ── WhatsApp deep-links with pre-filled messages ──────────────────── */
const WA_TAILORING  = getWhatsAppUrl("Hi! I'm interested in custom tailoring services.");
const WA_EMBROIDERY = getWhatsAppUrl("Hi! I'd like to know more about your embroidery work.");

/* ── Image placeholder ─────────────────────────────────────────────── */
function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
      aria-hidden="true"
    >
      {/* Violet-lavender fill with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,18,64,0.55) 0%, rgba(93,40,110,0.45) 50%, rgba(59,18,64,0.55) 100%)",
          border: "1px solid rgba(201,166,107,0.3)",
          borderRadius: "inherit",
        }}
      />

      {/* Gold border frame accent — top-left + bottom-right corners only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "inherit",
          boxShadow: "inset 0 0 0 1px rgba(201,166,107,0.25)",
        }}
      />

      {/* Centred placeholder content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        {/* Camera icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#C9A66B"
          strokeWidth="1.4"
          strokeLinecap="round"
          aria-hidden="true"
          opacity="0.6"
        >
          <rect x="6"  y="14" width="36" height="26" rx="5" />
          <circle cx="24" cy="27" r="7" />
          <path d="M18 14l3-6h6l3 6" />
          <circle cx="37" cy="20" r="1.8" fill="#C9A66B" stroke="none" />
        </svg>

        {/* Label */}
        <p
          className="font-body text-xs tracking-[0.18em] uppercase leading-relaxed"
          style={{ color: "rgba(201,166,107,0.7)" }}
        >
          {label}
          <br />
          <span style={{ opacity: 0.6, fontSize: "0.65rem" }}>
            Add your photo to /public/images/
          </span>
        </p>
      </div>
    </div>
  );
}

/* ── Shared block layout ─────────────────────────────────────────────
   Each service block is a violet Card containing:
   – image placeholder (4:3)
   – tag line + heading
   – description
   – WhatsApp CTA button
   The Card component already supplies: bg-primary, border-highlight/25,
   shadow-card, hover lift.                                            */
interface ServiceBlockProps {
  id: string;
  tag: string;
  heading: string;
  description: string;
  ctaLabel: string;
  waLink: string;
  photoLabel: string;
}

function ServiceBlock({
  id,
  tag,
  heading,
  description,
  ctaLabel,
  waLink,
  photoLabel,
}: ServiceBlockProps) {
  return (
    /* Card gives us: bg-primary, border-highlight/25, shadow, hover lift */
    <Card padding="none" className="flex flex-col overflow-hidden group">

      {/* ── Photo placeholder ── */}
      <div className="p-4 pb-0">
        <PhotoPlaceholder label={photoLabel} />
      </div>

      {/* ── Text content ── */}
      <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1">

        {/* Small tag / category label */}
        <span
          id={id}
          className="font-body text-xs tracking-[0.25em] uppercase font-medium"
          style={{ color: "#C9A66B", opacity: 0.9 }}
        >
          {tag}
        </span>

        {/* Heading — ivory for contrast on violet */}
        <h3
          className="font-heading font-bold text-2xl sm:text-3xl leading-snug"
          style={{ color: "#FAF3F0" }}
        >
          {heading}
        </h3>

        {/* Gold micro-divider */}
        <div
          className="h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, #C9A66B, #E8C98A 50%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Description — soft lavender-white */}
        <p
          className="font-body text-sm sm:text-base leading-relaxed flex-1"
          style={{ color: "rgba(232,223,240,0.82)" }}
        >
          {description}
        </p>

        {/* WhatsApp CTA — min-h-[52px] for 44px+ touch target with padding */}
        <div className="pt-2">
          <Button
            as="a"
            href={waLink}
            variant="outline"
            size="md"
            className="w-full sm:w-auto min-h-[52px] gap-2"
          >
            {/* WhatsApp icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {ctaLabel}
          </Button>
        </div>

      </div>
    </Card>
  );
}

/* ── Main exported section ─────────────────────────────────────────── */
export function TailoringSection() {
  return (
    /* bg-background (#EDE6F2) — contrasts with dark About section above */
    <section
      id="tailoring"
      className="subtle-texture relative py-20 sm:py-28 bg-background overflow-hidden"
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

      <Container className="relative z-10 flex flex-col gap-14">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            tag="h2"
            title="Tailoring & Embroidery"
            accentWord="Embroidery"
            subtitle="Every stitch, made to measure."
            align="center"
          />
          <p
            className="font-body text-base sm:text-lg text-center max-w-2xl leading-relaxed"
            style={{ color: "rgba(35,17,32,0.75)" }}
          >
            Bring us your idea, your fabric, or even just a picture — with your
            guidance, we can stitch almost any design to life. Your vision,
            tailored exactly to you.
          </p>
        </div>

        {/* Two violet service blocks — side by side on sm+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Block A: Custom Tailoring */}
          <ServiceBlock
            id="block-tailoring"
            tag="Custom Tailoring"
            heading="Precision Fit, Every Time"
            description={
              "From classic salwar suits and saree blouses to contemporary " +
              "western silhouettes — every garment is stitched to your exact " +
              "measurements. We work from scratch, never from shortcuts. " +
              "Bring your fabric, bring your reference, or let us guide you."
            }
            photoLabel="Tailoring photo coming soon"
            ctaLabel="Book a Fitting"
            waLink={WA_TAILORING}
          />

          {/* Block B: Customized Embroidery */}
          <ServiceBlock
            id="block-embroidery"
            tag="Customised Embroidery"
            heading="Threadwork That Tells a Story"
            description={
              "Hand and machine embroidery in zari, resham, and thread — " +
              "designed around your occasion, your silhouette, and your story. " +
              "We embroider bridal lehengas, dupattas, blouses, and festive " +
              "pieces with patterns that are personalised, never mass-produced."
            }
            photoLabel="Embroidery photo coming soon"
            ctaLabel="Discuss Embroidery"
            waLink={WA_EMBROIDERY}
          />

        </div>

      </Container>
    </section>
  );
}
