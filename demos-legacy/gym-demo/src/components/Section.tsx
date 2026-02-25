import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`px-5 md:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </Tag>
  );
}
