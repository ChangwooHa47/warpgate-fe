import { PropertyCategory, PropertyFilter, TransactionType } from "./types";

// Filter defaults
export const PRICE_MIN = 0;
export const PRICE_MAX = 999;
export const AREA_MIN = 0;
export const AREA_MAX = 999;

export const DEFAULT_FILTER: PropertyFilter = {
  category: "아파트",
  type: ["매매", "전세", "월세"],
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
  areaMin: AREA_MIN,
  areaMax: AREA_MAX,
  region: "",
  floor: "",
  roomCount: "",
  sortBy: "default",
};

// Transaction type colors
export const TYPE_COLORS: Record<TransactionType, { bg: string; border: string; pill: string; pillInactive: string }> = {
  매매: {
    bg: "bg-blue-500 text-white",
    border: "border-l-blue-500",
    pill: "bg-blue-500 text-white border-blue-500",
    pillInactive: "text-blue-600 border-blue-200 hover:bg-blue-50",
  },
  전세: {
    bg: "bg-amber-500 text-white",
    border: "border-l-amber-500",
    pill: "bg-amber-500 text-white border-amber-500",
    pillInactive: "text-amber-600 border-amber-200 hover:bg-amber-50",
  },
  월세: {
    bg: "bg-emerald-500 text-white",
    border: "border-l-emerald-500",
    pill: "bg-emerald-500 text-white border-emerald-500",
    pillInactive: "text-emerald-600 border-emerald-200 hover:bg-emerald-50",
  },
};

// Category config
export const CATEGORIES: { value: PropertyCategory; icon: string; desc: string; color: string }[] = [
  { value: "아파트", icon: "🏢", desc: "아파트 매매·전세·월세", color: "from-blue-50 to-blue-100/50" },
  { value: "빌라/투룸+", icon: "🏠", desc: "빌라, 다세대, 투룸 이상", color: "from-green-50 to-green-100/50" },
  { value: "원룸", icon: "🚪", desc: "원룸, 고시원", color: "from-purple-50 to-purple-100/50" },
  { value: "오피스텔", icon: "🏙️", desc: "오피스텔 매물", color: "from-amber-50 to-amber-100/50" },
  { value: "상가/사무실", icon: "🏬", desc: "상가, 사무실, 창고", color: "from-rose-50 to-rose-100/50" },
];

// Region options (삼성역 중심 3개 동)
export const REGIONS = ["삼성동", "대치동", "청담동"] as const;

// Popular searches
export const POPULAR_SEARCHES = ["삼성역", "코엑스", "대치동", "청담", "한강뷰", "역세권", "학원가", "신축"] as const;

// Floor ranges for filtering
export const FLOOR_RANGES = {
  저층: { min: 1, max: 5 },
  중층: { min: 6, max: 15 },
  고층: { min: 16, max: 999 },
} as const;
