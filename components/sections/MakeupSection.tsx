import { Button, Container } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/config";

/* ── WhatsApp CTA link ────────────────────────────────────────────── */
const WA_MAKEUP = getWhatsAppUrl("Hi, I'd like to enquire about bridal makeup looks.");

/* ── The five signature looks ─────────────────────────────────────── */
const LOOKS = [
  {
    id: "look-hd-makeup",
    name: "HD Makeup",
    description:
      "Flawless, camera-ready perfection that feels incredibly light and stays perfectly intact through every emotion and ritual.",
    tag: "High Definition",
  },
  {
    id: "look-muhurtham",
    name: "Classic Traditional Muhurtham Look",
    description:
      "Timeless elegance honoring your roots, featuring traditional touches that complement your silk sarees and temple jewelry beautifully.",
    tag: "Traditional Bridal",
  },
  {
    id: "look-christian-bridal",
    name: "The Christian Bridal Look",
    description:
      "A radiant, understated elegance focusing on luminous skin, soft eyes, and a classic lip to match your white gown.",
    tag: "Classic Elegance",
  },
  {
    id: "look-sangeet",
    name: "The Pastel / Contemporary Sangeet Look",
    description:
      "Playful yet sophisticated glamour designed for the dance floor, pairing beautifully with modern pastel palettes and dynamic lighting.",
    tag: "Contemporary Glam",
  },
  {
    id: "look-soft-glam",
    name: "Modern Soft Glam Look",
    description:
      "Effortlessly beautiful and naturally enhanced, this look focuses on a dewy glow and seamless blending for a subtle, striking finish.",
    tag: "Subtle Glamour",
  },
] as const;

/* ── Portrait photo placeholder (4:5 aspect — face/makeup shots) ─── */
function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "4 / 5" }}
      aria-hidden="true"
    >
      {/* Violet-gradient fill */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(93,40,110,0.55) 0%, rgba(59,18,64,0.7) 60%, rgba(35,17,32,0.65) 100%)",
        }}
      />
      {/* Subtle gold inset border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(201,166,107,0.22)" }}
      />

      {/* Centred camera + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <svg
          width="34"
          height="34"
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
          className="font-body text-xs tracking-[0.18em] uppercase leading-relaxed"
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

/* ── Single look card ─────────────────────────────────────────────── */
function LookCard({
  id,
  name,
  description,
  tag,
}: (typeof LOOKS)[number]) {
  return (
    /* Replicates Card styles: bg-primary, gold border, hover lift.
       Does NOT use <Card> directly because image must be flush to top
       with no padding, while content below is padded.               */
    <div
      id={id}
      className={[
        "flex flex-col rounded-2xl overflow-hidden",
        "border border-highlight/25",
        "bg-primary",                       /* violet panel — design standard */
        "shadow-card",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-card-hover hover:border-highlight/55",
      ].join(" ")}
    >
      {/* Portrait placeholder — flush top */}
      <PhotoPlaceholder label={name} />

      {/* Card content */}
      <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">

        {/* Category tag */}
        <span
          className="font-body font-medium uppercase tracking-[0.22em]"
          style={{ fontSize: "0.62rem", color: "#C9A66B", opacity: 0.9 }}
        >
          {tag}
        </span>

        {/* Look name — ivory on violet */}
        <h3
          className="font-heading font-bold leading-snug text-xl sm:text-2xl"
          style={{ color: "#FAF3F0" }}
        >
          {name}
        </h3>

        {/* Gold micro-divider */}
        <div
          className="h-px w-10 shrink-0"
          style={{
            background: "linear-gradient(90deg, #C9A66B, #E8C98A 60%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Description — soft lavender-white */}
        <p
          className="font-body text-sm leading-relaxed flex-1"
          style={{ color: "rgba(232,223,240,0.80)" }}
        >
          {description}
        </p>

      </div>
    </div>
  );
}

/* ── Main exported section ────────────────────────────────────────── */
export function MakeupSection() {
  return (
    /* id="bridal" — matches nav href="#bridal" and TwoPathSplit panel.
       User spec said "id=makeup" but the existing nav + split panel
       both anchor to #bridal — using bridal preserves all navigation.
       bg: #231120 (dark) alternates against Tailoring's #EDE6F2 above. */
    <section
      id="bridal"
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

      <Container className="relative z-10 flex flex-col gap-14">

        {/* ── Section heading — dark-bg variant (inline, SectionHeading
             uses text-primary which is invisible on dark background)  */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            className="font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "#FAF3F0" }}
          >
            Bridal &amp;{" "}
            <span className="text-gradient-gold italic">Beauty</span>
          </h2>
          <div className="gold-divider w-24 animate-gold-pulse" aria-hidden="true" />
          <p
            className="font-body text-base sm:text-lg max-w-xl leading-relaxed mt-1"
            style={{ color: "rgba(232,223,240,0.72)" }}
          >
            Five signature looks, each crafted for a different chapter of your
            celebration — from intimate mehendi evenings to the big day itself.
          </p>
        </div>

        {/* ── Five look cards ───────────────────────────────────────
             Layout: 1-col mobile → 2-col tablet → 3-col desktop.
             5 items in a 3-col grid gives row 1: [3] + row 2: [2 left].
             This is standard grid behaviour — clean and intentional.  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {LOOKS.map((look) => (
            <LookCard key={look.id} {...look} />
          ))}
        </div>

        {/* ── Section-level CTA ─────────────────────────────────────
             Single centered button — Button as="a" is safe here because
             no outer <a> wraps this (unlike PathPanel in TwoPathSplit). */}
        <div className="flex flex-col items-center gap-3 pt-2">
          {/* Supporting line */}
          <p
            className="font-body text-sm text-center"
            style={{ color: "rgba(232,223,240,0.55)" }}
          >
            Not sure which look is right for you? Let&apos;s talk.
          </p>

          <Button
            as="a"
            href={WA_MAKEUP}
            variant="outline"
            size="lg"
            className="min-h-[52px] gap-2"
            id="makeup-whatsapp-cta"
          >
            {/* WhatsApp icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Enquire About Makeup
          </Button>
        </div>

      </Container>
    </section>
  );
}
