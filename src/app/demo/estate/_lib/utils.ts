import { TransactionType } from "./types";

export function formatPrice(
  type: TransactionType,
  price: number,
  deposit?: number,
  monthly?: number
): string {
  if (type === "월세") {
    return `${deposit ?? 0}억 / ${monthly ?? 0}만`;
  }
  return `${price}억`;
}

export function formatArea(supplyM2: number, exclusiveM2: number): string {
  return `${supplyM2}/${exclusiveM2}m²`;
}

export function formatViewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return String(count);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function parseFloorNumber(floor: string): number {
  const match = floor.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function matchesFloorLevel(floor: string, level: "저층" | "중층" | "고층"): boolean {
  if (floor.includes(level)) return true;

  const num = parseFloorNumber(floor);
  if (num === 0) return false;

  switch (level) {
    case "저층":
      return num >= 1 && num <= 5;
    case "중층":
      return num >= 6 && num <= 15;
    case "고층":
      return num >= 16;
  }
}

export function buildSearchableText(p: {
  title: string;
  complex: string;
  address: string;
  description: string;
  tags: string[];
}): string {
  return `${p.title} ${p.complex} ${p.address} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
}
