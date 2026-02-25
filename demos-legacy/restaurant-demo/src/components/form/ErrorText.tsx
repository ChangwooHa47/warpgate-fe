import type { ReactNode } from "react";

interface ErrorTextProps {
  children: ReactNode;
  id?: string;
}

export default function ErrorText({ children, id }: ErrorTextProps) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-600">
      {children}
    </p>
  );
}
