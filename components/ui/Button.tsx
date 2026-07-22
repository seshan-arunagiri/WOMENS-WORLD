import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-primary text-white border-2 border-primary",
    "hover:bg-transparent hover:text-primary",
    "shadow-soft hover:shadow-card-hover",
    "after:absolute after:inset-0 after:rounded-[inherit]",
    "after:bg-white/10 after:opacity-0 hover:after:opacity-100",
    "after:transition-opacity after:duration-300",
  ].join(" "),

  outline: [
    "bg-transparent text-highlight border-2 border-highlight",
    "hover:bg-highlight hover:text-white",
    "shadow-none hover:shadow-glow",
  ].join(" "),

  ghost: [
    "bg-transparent text-text-muted border-2 border-transparent",
    "hover:border-accent hover:text-primary",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm tracking-wide",
  md: "px-7 py-3 text-base tracking-wide",
  lg: "px-10 py-4 text-lg tracking-wider",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  as: Tag = "button",
  href,
  ...props
}: ButtonProps) {
  const baseClasses = [
    "relative inline-flex items-center justify-center gap-2",
    "rounded-full font-body font-medium",
    "transition-all duration-300 ease-out-expo",
    "overflow-hidden cursor-pointer select-none",
    "focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2",
    "active:scale-[0.97]",
    fullWidth ? "w-full" : "",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (Tag === "a") {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
