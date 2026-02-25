export type TransactionType = "매매" | "전세" | "월세";
export type PropertyCategory = "아파트" | "빌라/투룸+" | "원룸" | "오피스텔" | "상가/사무실";
export type FloorLevel = "" | "저층" | "중층" | "고층";
export type RoomCountFilter = "" | "1룸" | "2룸" | "3룸" | "4룸+";
export type SortOption = "default" | "price-asc" | "price-desc" | "area-desc" | "newest";
export type ViewMode = "list" | "grid";

export interface Property {
  id: string;
  title: string;
  complex: string;
  address: string;
  dong: string;
  floor: string;
  type: TransactionType;
  category: PropertyCategory;
  price: number;
  priceMonthly?: number;
  deposit?: number;
  areaPyeong: number;
  areaM2Supply: number;
  areaM2Exclusive: number;
  roomCount?: number;
  bathroomCount?: number;
  direction?: string;
  moveInDate?: string;
  description: string;
  tags: string[];
  images: string[];
  floorPlan?: string;
  lat: number;
  lng: number;
  bookmarkCount: number;
  viewCount: number;
  verifiedAt?: string;
  createdAt: string;
}

export interface Area {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  averagePrice: number;
  averageJeonse: number;
  priceChange: number;
  infrastructure: {
    subway: string[];
    schools: number;
    hospitals: number;
    parks: number;
  };
  image: string;
  propertyCount: number;
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  email?: string;
  propertyId?: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  type: TransactionType | "기타";
}

export type PropertyFilter = {
  category: PropertyCategory;
  type: TransactionType[];
  priceMin: number;
  priceMax: number;
  areaMin: number;
  areaMax: number;
  region: string;
  floor: FloorLevel;
  roomCount: RoomCountFilter;
  sortBy: SortOption;
};
