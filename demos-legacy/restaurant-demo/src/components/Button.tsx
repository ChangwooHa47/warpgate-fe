import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonAsButton = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

type ButtonAsLink = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-charcoal-700 text-ivory-100 hover:bg-charcoal-600 active:bg-charcoal-800",
  secondary:
    "border border-charcoal-600 text-charcoal-600 hover:bg-charcoal-700 hover:text-ivory-100 active:bg-charcoal-800",
  ghost:
    "text-charcoal-600 hover:text-charcoal-800 underline underline-offset-4 decoration-stone-300 hover:decoration-charcoal-500",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-widest uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-500";

  const sizing = variant === "ghost" ? "py-1" : "px-8 py-3.5";

  const classes = `${base} ${sizing} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
