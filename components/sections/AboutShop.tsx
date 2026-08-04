"use client";
import React from "react";
import Image from "next/image";

const DIRECTIONS_URL = "https://maps.app.goo.gl/XxWcs92kD7FyrUhj6";

function QuoteOrnament() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="#C9A66B" opacity="0.4" aria-hidden="true">
      <path d="M0 24V14.4C0 6.72 4.16 1.92 12.48 0l1.92 3.36C9.92 4.64 7.68 7.2 7.04 11.04H12V24H0zm18 0V14.4C18 6.72 22.16 1.92 30.48 0l1.92 3.36c-4.48 1.28-6.72 3.84-7.36 7.68H30V24H18z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A66B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function AboutShop() {
  return (
    <section
      id="about"
      className="subtle-texture-gold relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#231120" }}
    >
      {/* Radial glow behind heading */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,166,107,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Story copy ─────────────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Logo + shop identity block */}
            <div className="flex items-center gap-4">
              {/* Watermark logo — low opacity, premium accent */}
              <div
                className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,166,107,0.08)", border: "1px solid rgba(201,166,107,0.2)" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Women's World logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  style={{ opacity: 0.85 }}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-heading font-bold text-xl tracking-wide"
                  style={{ color: "#FAF3F0" }}
                >
                  Women&apos;s World
                </span>
                <span
                  className="font-body text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#C9A66B", opacity: 0.85 }}
                >
                  by Shanthi A
                </span>
              </div>
            </div>

            {/* Section label */}
            <div className="flex items-center gap-3">
              <div
                className="h-px w-10 shrink-0"
                style={{ background: "linear-gradient(90deg, transparent, #C9A66B)" }}
                aria-hidden="true"
              />
              <span
                className="font-body text-xs tracking-[0.3em] uppercase"
                style={{ color: "#C9A66B", opacity: 0.85 }}
              >
                Est. 2016 · Our Story
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h2
                className="font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
                style={{ color: "#FAF3F0" }}
              >
                8 Years of{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #C9A66B 0%, #E8C98A 50%, #C9A66B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Craft &amp; Trust
                </span>
              </h2>
              {/* Gold divider */}
              <div
                className="h-px w-20"
                style={{
                  background: "linear-gradient(90deg, #C9A66B, #E8C98A 50%, transparent)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Quote ornament */}
            <QuoteOrnament />

            {/* Body copy — warm, personal, genuine */}
            <div className="flex flex-col gap-5">
              <p
                className="font-body text-base sm:text-lg leading-relaxed"
                style={{ color: "rgba(250,243,240,0.82)" }}
              >
                Women&apos;s World began in a small studio with one simple belief —
                every woman deserves to wear something that was made{" "}
                <em style={{ color: "#C9A66B", fontStyle: "italic" }}>
                  exactly for her
                </em>
                . What started as a passion for precise stitching and careful
                fitting has grown, stitch by stitch, into eight years of
                trusted craftsmanship.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "rgba(250,243,240,0.72)" }}
              >
                We are a family-run studio — and that means every bride who
                walks through our door becomes part of our story. We listen
                to what you envision, we remember your details, and we pour
                the same care into a everyday salwar as we do into a bridal
                lehenga worn on the most important morning of your life.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "rgba(250,243,240,0.72)" }}
              >
                From custom embroidery to HD bridal makeup, saree draping to
                precision alterations — we offer everything under one roof,
                so your journey to the perfect look is smooth, personal, and
                unhurried. Our craft is our promise. Your confidence is our
                reward.
              </p>
            </div>

            {/* Stat row */}
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { number: "18+",   label: "Years Stitching Experience" },
                { number: "8+",    label: "Years as a Studio" },
                { number: "200+",  label: "Happy Brides" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span
                    className="font-heading font-bold text-3xl"
                    style={{
                      background: "linear-gradient(90deg, #C9A66B, #E8C98A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="font-body text-xs tracking-wide uppercase"
                    style={{ color: "rgba(250,243,240,0.55)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Photo placeholder + Visit Us ────────────── */}
          <div className="flex flex-col gap-8">

            {/* Shop/owner photo placeholder */}
            <div className="relative">
              {/* Gold border frame */}
              <div
                className="absolute -inset-2 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #C9A66B22, #C9A66B55, #C9A66B22)",
                  borderRadius: "1.5rem",
                }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "rgba(59,18,64,0.6)", border: "1px solid rgba(201,166,107,0.3)" }}
              >
                {/* Placeholder graphic */}
                <div className="flex flex-col items-center gap-3 px-8 text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="#C9A66B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                    opacity="0.5"
                  >
                    {/* Simple camera/photo icon */}
                    <rect x="6" y="14" width="36" height="26" rx="4" />
                    <circle cx="24" cy="27" r="7" />
                    <path d="M18 14l3-6h6l3 6" />
                    <circle cx="37" cy="19" r="1.5" fill="#C9A66B" stroke="none" />
                  </svg>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(201,166,107,0.65)" }}
                  >
                    Shop &amp; owner photo
                    <br />
                    <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>
                      Add your image to /public/images/
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* ── Visit Us block ─────────────────────────────── */}
            <div
              className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
              style={{
                background: "rgba(59,18,64,0.5)",
                border: "1px solid rgba(201,166,107,0.2)",
              }}
            >
              {/* Label */}
              <div className="flex items-center gap-2">
                <MapPinIcon />
                <span
                  className="font-body text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: "#C9A66B" }}
                >
                  Visit Us
                </span>
              </div>

              {/* Address placeholder */}
              <div className="flex flex-col gap-1">
                <p
                  className="font-heading font-semibold text-lg"
                  style={{ color: "#FAF3F0" }}
                >
                  Women&apos;s World Studio
                </p>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(250,243,240,0.65)" }}
                >
                  Add your full address here
                  <br />
                  Open Mon – Sat · 10 AM – 8 PM
                </p>
              </div>

              {/* Get Directions button — 52px touch target, CSS hover via group */}
              <a
                id="about-directions-btn"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #C9A66B 0%, #E8C98A 50%, #C9A66B 100%)",
                  color: "#231120",
                  boxShadow: "0 4px 24px rgba(201,166,107,0.25)",
                }}
              >
                <MapPinIcon />
                Get Directions
              </a>

              {/* Hours note */}
              <p
                className="font-body text-xs"
                style={{ color: "rgba(250,243,240,0.45)" }}
              >
                Tap to open in Google Maps
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
