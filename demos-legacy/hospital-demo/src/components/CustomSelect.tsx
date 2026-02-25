"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder = "선택해주세요",
  required,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {required && (
        <input
          type="text"
          name={name}
          value={value}
          required
          className="sr-only"
          tabIndex={-1}
          onChange={() => {}}
        />
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full border border-gray-200 rounded-md px-4 py-3 text-base text-left bg-white transition flex items-center justify-between ${
          open
            ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/10"
            : ""
        }`}
      >
        <span className={selected ? "text-gray-800" : "text-gray-300"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.08)] z-50 py-1.5 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition ${
                opt.value === value
                  ? "bg-[var(--primary-light)] text-[var(--primary)] font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
