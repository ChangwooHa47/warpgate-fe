import type { TransactionType } from "./types";

/**
 * Format price based on transaction type
 */
export function formatPrice(
  type: TransactionType,
  price: number,
  deposit?: number,
  monthly?: number
): string {
  if (type === "월세" && deposit !== undefined && monthly !== undefined) {
    const depositStr =
      deposit >= 10000
        ? `${(deposit / 10000).toFixed(deposit % 10000 === 0 ? 0 : 1)}억`
        : `${deposit.toLocaleString()}만`;
    return `${depositStr}/${monthly.toLocaleString()}만`;
  }

  if (price >= 10000) {
    const eok = Math.floor(price / 10000);
    const man = price % 10000;
    if (man === 0) {
      return `${eok}억`;
    }
    return `${eok}억 ${man.toLocaleString()}만`;
  }

  return `${price.toLocaleString()}만`;
}

/**
 * Format area in both square meters and pyeong
 */
export function formatArea(supplyM2: number, exclusiveM2: number): string {
  const supplyPy = (supplyM2 / 3.3058).toFixed(1);
  const exclusivePy = (exclusiveM2 / 3.3058).toFixed(1);
  return `${supplyM2}㎡(${supplyPy}평) / ${exclusiveM2}㎡(${exclusivePy}평)`;
}

/**
 * Merge class names, filtering out falsy values
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Match floor to floor level category
 */
export function matchesFloorLevel(
  floor: string,
  level: "저층" | "중층" | "고층"
): boolean {
  // Extract numeric floor
  const match = floor.match(/\d+/);
  if (!match) return false;
  const floorNum = parseInt(match[0], 10);

  switch (level) {
    case "저층":
      return floorNum <= 5;
    case "중층":
      return floorNum >= 6 && floorNum <= 15;
    case "고층":
      return floorNum >= 16;
    default:
      return false;
  }
}

/**
 * Get badge class for transaction type
 */
export function getTypeBadgeClass(type: TransactionType): string {
  switch (type) {
    case "매매":
      return "badge-sale";
    case "전세":
      return "badge-jeonse";
    case "월세":
      return "badge-monthly";
    default:
      return "";
  }
}

/**
 * Get category badge class
 */
export function getCategoryBadgeClass(category: string): string {
  switch (category) {
    case "아파트":
      return "category-apartment";
    case "빌라/투룸+":
      return "category-villa";
    case "원룸":
      return "category-oneroom";
    case "오피스텔":
      return "category-officetel";
    case "상가/사무실":
      return "category-commercial";
    default:
      return "";
  }
}
