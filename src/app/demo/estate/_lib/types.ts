// Transaction types
export type TransactionType = "매매" | "전세" | "월세";

// Consultation types
export type ConsultationType = "구매상담" | "매물문의" | "시세상담" | "기타";

// Property categories
export type PropertyCategory =
  | "아파트"
  | "빌라/투룸+"
  | "원룸"
  | "오피스텔"
  | "상가/사무실";

// Property interface
export interface Property {
  id: string;
  title: string;
  complex: string;
  address: string;
  type: TransactionType;
  category: PropertyCategory;
  price: number; // 매매가 or 전세가 (만원)
  deposit?: number; // 월세 보증금 (만원)
  monthly?: number; // 월세 (만원)
  supplyM2: number;
  exclusiveM2: number;
  floor: string;
  totalFloors: number;
  direction: string;
  builtYear: number;
  features: string[];
  images: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: string;
}

// Area interface
export interface Area {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  averagePrice: number; // 평당 평균가 (만원)
  infrastructure: string[];
  highlights: string[];
  image: string;
}

// Consultation request interface
export interface ConsultationRequest {
  name: string;
  phone: string;
  preferredDate: string;
  propertyTypes: PropertyCategory[];
  budget: string;
  message: string;
}

// Filter interface
export interface PropertyFilter {
  category: PropertyCategory | "전체";
  type: TransactionType | "전체";
  priceMin: number;
  priceMax: number;
  areaMin: number;
  areaMax: number;
  floorLevel: "전체" | "저층" | "중층" | "고층";
}

// Sort options
export type SortOption =
  | "latest"
  | "price-asc"
  | "price-desc"
  | "area-asc"
  | "area-desc";
