import type { PropertyFilter, PropertyCategory, TransactionType } from "./types";

// Default filter values
export const DEFAULT_FILTER: PropertyFilter = {
  category: "전체",
  type: "전체",
  priceMin: 0,
  priceMax: 1000000, // 100억
  areaMin: 0,
  areaMax: 500,
  floorLevel: "전체",
};

// Property categories with labels
export const CATEGORIES: { value: PropertyCategory | "전체"; label: string }[] = [
  { value: "전체", label: "전체" },
  { value: "아파트", label: "아파트" },
  { value: "빌라/투룸+", label: "빌라/투룸+" },
  { value: "원룸", label: "원룸" },
  { value: "오피스텔", label: "오피스텔" },
  { value: "상가/사무실", label: "상가/사무실" },
];

// Transaction types with labels
export const TRANSACTION_TYPES: { value: TransactionType | "전체"; label: string }[] = [
  { value: "전체", label: "전체" },
  { value: "매매", label: "매매" },
  { value: "전세", label: "전세" },
  { value: "월세", label: "월세" },
];

// Floor level options
export const FLOOR_LEVELS = [
  { value: "전체", label: "전체" },
  { value: "저층", label: "저층 (1-5층)" },
  { value: "중층", label: "중층 (6-15층)" },
  { value: "고층", label: "고층 (16층+)" },
] as const;

// Sort options
export const SORT_OPTIONS = [
  { value: "latest", label: "최신순" },
  { value: "price-asc", label: "가격 낮은순" },
  { value: "price-desc", label: "가격 높은순" },
  { value: "area-asc", label: "면적 작은순" },
  { value: "area-desc", label: "면적 큰순" },
] as const;

// Type badge colors
export const TYPE_COLORS: Record<TransactionType, { bg: string; text: string }> = {
  "매매": { bg: "bg-blue-100", text: "text-blue-700" },
  "전세": { bg: "bg-green-100", text: "text-green-700" },
  "월세": { bg: "bg-yellow-100", text: "text-yellow-700" },
};

// Category colors
export const CATEGORY_COLORS: Record<PropertyCategory, { bg: string; text: string }> = {
  "아파트": { bg: "bg-blue-50", text: "text-blue-600" },
  "빌라/투룸+": { bg: "bg-green-50", text: "text-green-600" },
  "원룸": { bg: "bg-yellow-50", text: "text-yellow-600" },
  "오피스텔": { bg: "bg-purple-50", text: "text-purple-600" },
  "상가/사무실": { bg: "bg-orange-50", text: "text-orange-600" },
};

// Price range presets (in 만원)
export const PRICE_PRESETS = {
  "매매": [
    { min: 0, max: 50000, label: "5억 이하" },
    { min: 50000, max: 100000, label: "5억-10억" },
    { min: 100000, max: 200000, label: "10억-20억" },
    { min: 200000, max: 1000000, label: "20억 이상" },
  ],
  "전세": [
    { min: 0, max: 10000, label: "1억 이하" },
    { min: 10000, max: 30000, label: "1억-3억" },
    { min: 30000, max: 50000, label: "3억-5억" },
    { min: 50000, max: 1000000, label: "5억 이상" },
  ],
  "월세": [
    { min: 0, max: 50, label: "50만 이하" },
    { min: 50, max: 100, label: "50-100만" },
    { min: 100, max: 200, label: "100-200만" },
    { min: 200, max: 10000, label: "200만 이상" },
  ],
};
