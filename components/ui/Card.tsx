import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        /* Shape & border — gold border visible against lavender page bg */
        "rounded-2xl border border-highlight/25",
        /* Default: violet panel. glass=true: frosted overlay */
        glass ? "glass-card" : "bg-primary",
        /* Elevation */
        "shadow-card",
        /* Hover lift — deeper shadow, brighter gold border */
        hover
          ? "transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover hover:border-highlight/55"
          : "",
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
