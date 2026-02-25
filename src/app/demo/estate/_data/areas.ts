import type { Area } from "../_lib/types";

export const areas: Area[] = [
  {
    id: "gangnam",
    name: "강남구",
    nameEn: "Gangnam",
    description:
      "서울의 대표적인 부촌으로, 테헤란로를 중심으로 대기업 본사와 IT 스타트업이 밀집해 있습니다. 압구정, 청담 등 고급 주거지역과 삼성역, 코엑스 일대의 상업지구가 조화를 이루고 있습니다.",
    averagePrice: 8500, // 평당 평균가 8,500만원
    infrastructure: [
      "지하철 2호선, 9호선, 분당선, 신분당선",
      "삼성서울병원, 강남세브란스병원",
      "코엑스, 봉은사",
      "도산공원, 선정릉",
    ],
    highlights: [
      "대한민국 최고의 학군 (대치동)",
      "풍부한 상업 인프라",
      "국제적인 비즈니스 환경",
      "활발한 재건축 시장",
    ],
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=600&fit=crop",
  },
  {
    id: "seocho",
    name: "서초구",
    nameEn: "Seocho",
    description:
      "법조타운과 교육특구가 위치한 서울 남부의 핵심 지역입니다. 서초동 법원단지, 예술의전당, 양재 화훼단지 등 다양한 문화시설과 자연환경이 조화를 이룹니다.",
    averagePrice: 7800, // 평당 평균가 7,800만원
    infrastructure: [
      "지하철 2호선, 3호선, 신분당선",
      "서울성모병원, 삼성서울병원",
      "예술의전당, 국립중앙도서관",
      "양재시민의숲, 우면산",
    ],
    highlights: [
      "법조타운 (대법원, 검찰청)",
      "명품 학원가 (대치동 인접)",
      "쾌적한 주거환경",
      "풍부한 녹지공간",
    ],
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=600&fit=crop",
  },
];

export function getArea(id: string): Area | undefined {
  return areas.find((area) => area.id === id);
}
