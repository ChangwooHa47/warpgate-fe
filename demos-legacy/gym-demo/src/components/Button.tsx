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
    "bg-mint-500 text-night-950 font-semibold hover:bg-mint-400 active:bg-mint-600",
  secondary:
    "border border-steel-400 text-steel-200 hover:bg-steel-100 hover:text-night-950 active:bg-steel-200",
  ghost:
    "text-steel-300 hover:text-mint-400 underline underline-offset-4 decoration-night-600 hover:decoration-mint-500",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-500";

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
