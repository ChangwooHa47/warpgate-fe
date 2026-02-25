import { Area } from "@/types";

export const areas: Area[] = [
  {
    id: "gangnam",
    name: "강남구",
    nameEn: "Gangnam",
    description:
      "대한민국 최고의 주거·상업 중심지. 테헤란로 IT밸리와 압구정·청담 고급주거지를 아우르는 프리미엄 생활권",
    averagePrice: 28.5,
    averageJeonse: 12.3,
    priceChange: 1.2,
    infrastructure: {
      subway: ["2호선", "3호선", "7호선", "9호선", "분당선", "신분당선"],
      schools: 89,
      hospitals: 245,
      parks: 34,
    },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    propertyCount: 1247,
  },
  {
    id: "seocho",
    name: "서초구",
    nameEn: "Seocho",
    description:
      "반포한강공원과 서리풀공원이 인접한 쾌적한 주거환경. 교육특구와 법조타운이 있는 안정적인 생활권",
    averagePrice: 25.8,
    averageJeonse: 11.5,
    priceChange: 0.8,
    infrastructure: {
      subway: ["2호선", "3호선", "4호선", "7호선", "9호선", "신분당선"],
      schools: 76,
      hospitals: 198,
      parks: 28,
    },
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    propertyCount: 856,
  },
];
