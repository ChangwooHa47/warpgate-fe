interface ErrorTextProps {
  id?: string;
  children: string;
}

export default function ErrorText({ id, children }: ErrorTextProps) {
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-red-400">
      {children}
    </p>
  );
}
