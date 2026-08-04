"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { getWhatsAppUrl } from "@/lib/config";

const NAV_LINKS = [
  { label: "Home",            href: "#home",        id: "home" },
  { label: "Quick Links",     href: "#quick-links", id: "quick-links" },
  { label: "Gallery",         href: "#gallery",     id: "gallery" },
  { label: "About",           href: "#about",       id: "about" },
  { label: "Tailoring",       href: "#tailoring",   id: "tailoring" },
  { label: "Bridal & Beauty", href: "#bridal",      id: "bridal" },
  { label: "Services",        href: "#services",    id: "services" },
  { label: "Contact",         href: "#contact",     id: "contact" },
];

const WHATSAPP_URL = getWhatsAppUrl("Hi, I'd like to book a consultation at Women's World");

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col justify-center items-center w-6 h-6 gap-1.5" aria-hidden="true">
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
          open ? "w-6 rotate-45 translate-y-2" : "w-6"
        }`}
      />
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
          open ? "opacity-0 w-0" : "w-4 self-end"
        }`}
      />
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
          open ? "w-6 -rotate-45 -translate-y-2" : "w-6"
        }`}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll detection: transparent → solid ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── IntersectionObserver: active section tracking ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Close menu on resize to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
    // Let native CSS smooth scroll handle the offset via scroll-margin-top
  }, []);

  // Before scroll: semi-transparent violet + blur so text is readable over light hero.
  // After scroll:  fully solid violet + shadow.
  const navBg = scrolled
    ? "bg-primary shadow-[0_4px_24px_rgba(59,18,64,0.18)] backdrop-blur-none"
    : "bg-primary/80 backdrop-blur-md";

  return (
    <>
      {/* ── Main navbar ───────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out-expo ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          <a
            href="#home"
            onClick={() => handleNavClick()}
            aria-label="Women's World — home"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            {/* Logo mark */}
            <Image
              src="/images/logo.png"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="w-8 h-8 object-contain shrink-0"
            />
            <span className="font-heading font-bold text-white tracking-[0.12em] text-sm uppercase">
              Women&apos;s{" "}
              <span className="text-gradient-gold">World</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick()}
                    className={`
                      relative font-body text-xs tracking-[0.12em] uppercase font-medium
                      transition-colors duration-200 pb-0.5
                      ${isActive
                        ? "text-highlight"
                        : "text-white/75 hover:text-white"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Gold underline on active */}
                    <span
                      className={`
                        absolute bottom-0 left-0 h-px bg-highlight
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0"}
                      `}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side: WhatsApp + hamburger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp button — always visible */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp"
              aria-label="Chat on WhatsApp"
              className={`
                flex items-center gap-1.5 min-h-[44px] px-4
                rounded-full border border-highlight/40
                text-highlight font-body text-xs font-medium tracking-wide uppercase
                transition-all duration-200
                hover:bg-highlight hover:text-white hover:border-highlight hover:shadow-glow
              `}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              id="nav-hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors hover:bg-white/10"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ─────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed inset-0 z-40 bg-primary flex flex-col
          transition-all duration-350 ease-in-out-expo
          ${menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Subtle dot grain on mobile menu — matches section texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none subtle-texture-gold opacity-30"
        />

        {/* Spacer for navbar height */}
        <div className="h-16 shrink-0" />

        {/* Nav links */}
        <nav className="relative flex flex-col items-center justify-center flex-1 gap-2 px-8 pb-16">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick()}
                className={`
                  w-full text-center py-4 px-6
                  font-heading text-2xl font-bold tracking-wide
                  border-b border-white/10
                  transition-all duration-200
                  ${isActive ? "text-highlight" : "text-white/85 hover:text-highlight"}
                `}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                  transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: menuOpen ? 1 : 0,
                  transition: `color 200ms, opacity 300ms ${i * 40}ms, transform 350ms cubic-bezier(0.19,1,0.22,1) ${i * 40}ms`,
                }}
              >
                {link.label}
              </a>
            );
          })}

          {/* WhatsApp CTA in mobile menu */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-full bg-highlight text-white font-body font-semibold text-sm tracking-widest uppercase transition-all hover:shadow-glow"
            style={{
              transitionDelay: menuOpen ? `${NAV_LINKS.length * 40}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 300ms ${NAV_LINKS.length * 40}ms, transform 350ms cubic-bezier(0.19,1,0.22,1) ${NAV_LINKS.length * 40}ms`,
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
