"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/config";

/* ── Constants ───────────────────────────────────────────────────── */
const SERVICES = [
  "Custom Tailoring",
  "Embroidery",
  "HD Makeup",
  "Muhurtham Look",
  "Modern Soft Glam",
  "Christian Bridal",
  "Pastel / Sangeet Look",
  "Saree Draping",
  "Facials",
  "Haircut & Styling",
] as const;

type Service = (typeof SERVICES)[number];

interface FormState {
  name: string;
  service: Service | "";
  rating: number; // 0 = unset, 1-5 = selected
  comment: string;
}

const INITIAL: FormState = { name: "", service: "", rating: 0, comment: "" };

/* ── Interactive star selector ───────────────────────────────────────
   Uses button elements, each 44px wide for accessibility tap targets.
   Hover highlights stars progressively via hoverRating state.        */
function StarSelector({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (v: number) => void;
  error: boolean;
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const active = hoverRating || value;

  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="font-body text-xs tracking-[0.18em] uppercase font-medium"
        style={{ color: "rgba(201,166,107,0.9)" }}
      >
        Your Rating <span style={{ color: "#E87070" }}>*</span>
      </span>
      <div className="flex gap-1" role="group" aria-label="Select a rating from 1 to 5">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
          <button
            key={star}
            type="button"
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            aria-pressed={value === star}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="flex items-center justify-center w-11 h-11 rounded-lg transition-colors duration-150 hover:bg-white/5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={star <= active ? "#C9A66B" : "none"}
              stroke={star <= active ? "none" : "rgba(201,166,107,0.35)"}
              strokeWidth={star <= active ? 0 : 1.5}
              aria-hidden="true"
              style={{ transition: "fill 120ms, stroke 120ms" }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>
      {error && (
        <span className="font-body text-xs" style={{ color: "#E87070" }}>
          Please select a rating.
        </span>
      )}
    </div>
  );
}

/* ── Shared input styles ─────────────────────────────────────────── */
const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(201,166,107,0.25)",
  borderRadius: "0.75rem",
  color: "#FAF3F0",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  outline: "none",
  transition: "border-color 200ms",
  width: "100%",
};

/* ── Label component (DRY) ───────────────────────────────────────── */
function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-body text-xs tracking-[0.18em] uppercase font-medium block mb-1.5"
      style={{ color: "rgba(201,166,107,0.9)" }}
    >
      {children}
      {required && (
        <span style={{ color: "#E87070" }} aria-hidden="true">
          {" "}*
        </span>
      )}
    </label>
  );
}

/* ── Main exported component ─────────────────────────────────────── */
export function ReviewSubmitForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  /* Validate — returns true if all good */
  function validate(): boolean {
    const newErrors: typeof errors = {
      name: !form.name.trim(),
      service: !form.service,
      rating: form.rating === 0,
      comment: !form.comment.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const stars = "★".repeat(form.rating) + "☆".repeat(5 - form.rating);
    const message = [
      "Hi! I'd like to share a review for Women's World:",
      "",
      `Name: ${form.name.trim()}`,
      `Service: ${form.service}`,
      `Rating: ${stars} (${form.rating}/5)`,
      "",
      `Comment: ${form.comment.trim()}`,
    ].join("\n");

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleReset() {
    setForm(INITIAL);
    setErrors({});
    setSubmitted(false);
  }

  /* ── Confirmation state ─────────────────────────────────────── */
  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-6 text-center border"
        style={{
          background: "rgba(59,18,64,0.6)",
          borderColor: "rgba(201,166,107,0.3)",
        }}
      >
        {/* Gold check circle */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="26" cy="26" r="25" stroke="#C9A66B" strokeWidth="1.5" opacity="0.6" />
          <path
            d="M16 27l7 7 13-14"
            stroke="#C9A66B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex flex-col gap-2">
          <span
            className="font-heading font-bold text-xl"
            style={{ color: "#FAF3F0" }}
          >
            Thanks for sharing!
          </span>
          <p
            className="font-body text-sm leading-relaxed max-w-sm"
            style={{ color: "rgba(232,223,240,0.75)" }}
          >
            We&apos;ll review your feedback on WhatsApp and add it to our
            stories soon. It won&apos;t appear automatically — we read every
            review personally before publishing.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="font-body text-xs tracking-[0.22em] uppercase transition-colors duration-200 min-h-[44px] px-6"
          style={{ color: "rgba(201,166,107,0.7)" }}
        >
          Submit another review
        </button>
      </div>
    );
  }

  /* ── Form state ─────────────────────────────────────────────── */
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 border"
      style={{
        background: "rgba(59,18,64,0.55)",
        borderColor: "rgba(201,166,107,0.22)",
      }}
    >
      {/* Sub-heading */}
      <div className="flex flex-col gap-3 mb-8">
        <h3
          className="font-heading font-bold text-2xl sm:text-3xl"
          style={{ color: "#FAF3F0" }}
        >
          Share Your{" "}
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
            Experience
          </span>
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "rgba(232,223,240,0.6)" }}
        >
          Your feedback is sent via WhatsApp and reviewed before being added
          to our stories — it won&apos;t appear instantly.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

        {/* Name */}
        <div>
          <FieldLabel htmlFor="review-name" required>Your Name</FieldLabel>
          <input
            id="review-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Priya S."
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(201,166,107,0.6)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = errors.name
                ? "#E87070"
                : "rgba(201,166,107,0.25)")
            }
            style={{
              ...inputBase,
              padding: "0.75rem 1rem",
              minHeight: "44px",
              borderColor: errors.name ? "#E87070" : "rgba(201,166,107,0.25)",
            }}
          />
          {errors.name && (
            <span className="font-body text-xs mt-1 block" style={{ color: "#E87070" }}>
              Please enter your name.
            </span>
          )}
        </div>

        {/* Service */}
        <div>
          <FieldLabel htmlFor="review-service" required>Service Received</FieldLabel>
          <select
            id="review-service"
            value={form.service}
            onChange={(e) =>
              setForm((f) => ({ ...f, service: e.target.value as Service | "" }))
            }
            style={{
              ...inputBase,
              padding: "0.75rem 1rem",
              minHeight: "44px",
              borderColor: errors.service ? "#E87070" : "rgba(201,166,107,0.25)",
              appearance: "none",
              cursor: "pointer",
            }}
          >
            <option value="" style={{ background: "#3B1240" }}>
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s} style={{ background: "#3B1240" }}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="font-body text-xs mt-1 block" style={{ color: "#E87070" }}>
              Please select a service.
            </span>
          )}
        </div>

        {/* Rating star selector */}
        <StarSelector
          value={form.rating}
          onChange={(v) => setForm((f) => ({ ...f, rating: v }))}
          error={!!errors.rating}
        />

        {/* Comment */}
        <div>
          <FieldLabel htmlFor="review-comment" required>Your Experience</FieldLabel>
          <textarea
            id="review-comment"
            rows={4}
            placeholder="Tell us about your experience…"
            value={form.comment}
            onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(201,166,107,0.6)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = errors.comment
                ? "#E87070"
                : "rgba(201,166,107,0.25)")
            }
            style={{
              ...inputBase,
              padding: "0.75rem 1rem",
              resize: "vertical",
              minHeight: "112px",
              borderColor: errors.comment ? "#E87070" : "rgba(201,166,107,0.25)",
            }}
          />
          {errors.comment && (
            <span className="font-body text-xs mt-1 block" style={{ color: "#E87070" }}>
              Please share your experience.
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-full font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            background:
              "linear-gradient(90deg, #C9A66B 0%, #E8C98A 50%, #C9A66B 100%)",
            color: "#231120",
            boxShadow: "0 4px 24px rgba(201,166,107,0.25)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 6px 32px rgba(201,166,107,0.45)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 4px 24px rgba(201,166,107,0.25)")
          }
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
          Send via WhatsApp
        </button>

        <p
          className="font-body text-xs leading-relaxed"
          style={{ color: "rgba(232,223,240,0.4)" }}
        >
          * All fields are required. Your review will be sent to us via WhatsApp
          and won&apos;t appear on the site until we&apos;ve reviewed it.
        </p>
      </form>
    </div>
  );
}
