import { Button, Container } from "@/components/ui";
import { TwoPathSplit } from "@/components/sections/TwoPathSplit";
import { AboutShop } from "@/components/sections/AboutShop";
import { TailoringSection } from "@/components/sections/TailoringSection";
import { MakeupSection } from "@/components/sections/MakeupSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { QuickLinksSection } from "@/components/sections/QuickLinksSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      {/* id="home" for navbar active tracking                   */}
      {/* pt-16 offsets fixed navbar height                      */}
      <section
        id="home"
        className="subtle-texture relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background pt-16"
      >
        {/* Background decorative blur halos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-highlight/5 blur-3xl" />
        </div>

        <Container className="relative z-10 flex flex-col items-center gap-6">
          {/* Pre-title ornament */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="gold-divider w-12" aria-hidden="true" />
            <span className="font-body text-highlight text-xs tracking-[0.35em] uppercase font-medium">
              Est. 2024
            </span>
            <div className="gold-divider w-12" aria-hidden="true" />
          </div>

          {/* Brand wordmark */}
          <h1 className="font-heading font-black text-primary leading-none tracking-tight animate-fade-up">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              WOMEN&apos;S
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-gold italic">
              WORLD
            </span>
          </h1>

          {/* Gold divider */}
          <div className="gold-divider w-32 animate-fade-in animate-delay-300" aria-hidden="true" />

          {/* Tagline */}
          <p className="font-body text-text-muted text-base sm:text-xl max-w-md leading-relaxed animate-fade-up animate-delay-200">
            Bridal Beauty &amp; Custom Tailoring
            <br />
            <span className="text-sm opacity-75">
              Where every stitch tells your story.
            </span>
          </p>

          {/* Trust badge */}
          <div
            className="flex items-center gap-2 animate-fade-in animate-delay-300"
            aria-label="Trust signal"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A66B" aria-hidden="true">
              <polygon points="5,0 6.2,3.8 10,3.8 7,6.1 8.1,10 5,7.6 1.9,10 3,6.1 0,3.8 3.8,3.8" />
            </svg>
            <span className="trust-badge">8 Years of Trusted Craftsmanship</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A66B" aria-hidden="true">
              <polygon points="5,0 6.2,3.8 10,3.8 7,6.1 8.1,10 5,7.6 1.9,10 3,6.1 0,3.8 3.8,3.8" />
            </svg>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center w-full gap-8 mt-1 animate-fade-up animate-delay-400">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#gallery" variant="outline" size="lg" id="hero-cta-explore">
                Explore Collections
              </Button>
            </div>
            
            {/* Scroll indicator — in document flow, centered below CTAs.
                 Hidden below 700px viewport height. */}
            <div
              className="flex flex-col items-center gap-2 animate-fade-in animate-delay-600 max-[700px]:hidden"
              aria-hidden="true"
            >
              <span className="font-body text-text-muted text-xs tracking-widest uppercase">
                Scroll
              </span>
              <div className="w-px h-10 bg-gradient-to-b from-highlight to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Quick Links (Fast Lane) ────────────────────────────── */}
      {/* Phase 3.5 — Added before Two-Path Split */}
      <QuickLinksSection />

      {/* ── Gallery ──────────────────────────────────────────── */}
      {/* Phase 3.5 — Moved up after Quick Links */}
      <GallerySection />

      {/* ── Reviews ────────────────────────────────────────────── */}
      {/* Phase 3.5 — Added after Gallery */}
      <ReviewsSection />

      {/* ── Two-Path Split ─────────────────────────────────────── */}
      {/* id="explore" internal; #tailoring / #bridal panels link forward */}
      <TwoPathSplit />

      {/* ── About the Shop ─────────────────────────────────────── */}
      {/* Dark section — near-black plum #231120, emotional core   */}
      <AboutShop />

      {/* ── Tailoring & Embroidery ─────────────────────────── */}
      {/* Phase 3 — bg #EDE6F2 lavender, contrasts dark About above  */}
      <TailoringSection />

      {/* ── Bridal & Beauty ──────────────────────────────────── */}
      {/* Phase 4 — bg #231120 dark, alternates with Tailoring       */}
      <MakeupSection />

      {/* ── Beauty & Styling Services ────────────────────────── */}
      {/* Phase 5a — bg #EDE6F2 lavender, alternates with Makeup     */}
      <ServicesSection />

      {/* ── Contact ────────────────────────────────────────────── */}
      {/* Phase 6 — bg #EDE6F2 lavender, alternates with Gallery */}
      <ContactSection />

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="py-8 bg-background-alt border-t border-highlight/20">
        <Container className="flex flex-col items-center gap-2 text-center">
          <span className="font-heading text-primary font-semibold tracking-widest text-sm uppercase">
            Women&apos;s World
          </span>
          <p className="font-body text-text-muted text-xs">
            © 2024 Women&apos;s World. All rights reserved.
          </p>
        </Container>
      </footer>
    </main>
  );
}
