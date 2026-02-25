import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonAsLink = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href: string;
};

type ButtonAsButton = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-mint-500 text-night-950 font-semibold hover:bg-mint-400 transition-colors",
  secondary:
    "border border-steel-400 text-steel-200 hover:bg-night-800 hover:border-mint-500 transition-colors",
  ghost: "text-steel-300 hover:text-mint-400 underline underline-offset-4",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, "variant" | "children" | "className">;
  return (
    <button className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
}
