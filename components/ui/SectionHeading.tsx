import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  tag?: "h1" | "h2" | "h3";
  className?: string;
  accentWord?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  tag: Tag = "h2",
  className = "",
  accentWord,
}: SectionHeadingProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  // If accentWord provided, split title to highlight that word
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(new RegExp(`(${accentWord})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === accentWord.toLowerCase() ? (
        <span key={i} className="text-gradient-gold italic">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      <Tag
        className={[
          "font-heading font-bold text-primary leading-tight",
          "text-3xl sm:text-4xl md:text-5xl",
        ].join(" ")}
      >
        {renderTitle()}
      </Tag>

      {/* Gold underline accent */}
      <div
        className={[
          "gold-divider animate-gold-pulse",
          align === "center" ? "w-24 mx-auto" : "w-20",
        ].join(" ")}
        aria-hidden="true"
      />

      {subtitle && (
        <p className="font-body text-text-muted text-base sm:text-lg max-w-xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
