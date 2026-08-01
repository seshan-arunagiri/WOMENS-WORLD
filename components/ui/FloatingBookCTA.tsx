"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/config";

const WA_GLOBAL = getWhatsAppUrl("Hi! I'd like to book an appointment at Women's World.");

export function FloatingBookCTA() {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // While scrolling, it is collapsed (isPaused = false)
      setIsPaused(false);
      clearTimeout(scrollTimeout);

      // If scrolling stops for 1.5s, expand it (isPaused = true)
      scrollTimeout = setTimeout(() => {
        setIsPaused(true);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial state: expanded if user hasn't scrolled yet
    scrollTimeout = setTimeout(() => {
      setIsPaused(true);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className="fixed z-40 transition-all duration-300 ease-out-expo"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "max(1.5rem, env(safe-area-inset-right))",
      }}
    >
      <a
        href={WA_GLOBAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment via WhatsApp"
        className={`
          flex items-center justify-center bg-primary text-white
          border border-highlight/40 rounded-full shadow-card hover:shadow-glow
          transition-all duration-400 ease-out-expo overflow-hidden
          ${isPaused ? "w-[210px] px-5" : "w-14 px-0"}
          h-14
        `}
      >
        {/* WhatsApp Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>

        {/* Text content - visible only when expanded */}
        <span
          className={`
            font-body font-medium text-sm tracking-wide whitespace-nowrap
            transition-all duration-300 ease-out
            ${isPaused ? "ml-2.5 opacity-100 max-w-[200px]" : "ml-0 opacity-0 max-w-0"}
          `}
        >
          Book Appointment
        </span>
      </a>
    </div>
  );
}
