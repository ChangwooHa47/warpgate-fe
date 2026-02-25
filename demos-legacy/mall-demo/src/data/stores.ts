export interface Store {
  name: string;
  nameEn: string;
  address: string;
  hours: string;
  phone: string;
  gradient: string;
}

export const ALL_STORES: Store[] = [
  {
    name: "본점",
    nameEn: "MAIN",
    address: "서울특별시 중구 소공로 63",
    hours: "10:30 - 20:00",
    phone: "02-1234-5678",
    gradient: "linear-gradient(135deg, #2d2b28 0%, #4a3f35 100%)",
  },
  {
    name: "강남점",
    nameEn: "GANGNAM",
    address: "서울특별시 서초구 신반포로 176",
    hours: "10:30 - 20:00",
    phone: "02-2345-6789",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  },
  {
    name: "센텀시티점",
    nameEn: "CENTUM CITY",
    address: "부산광역시 해운대구 센텀남대로 35",
    hours: "10:30 - 20:30",
    phone: "051-3456-7890",
    gradient: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
  },
];
