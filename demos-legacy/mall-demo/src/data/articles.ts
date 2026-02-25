export interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
}

export const ALL_ARTICLES: Article[] = [
  {
    id: 1,
    category: "LIFESTYLE",
    title: "봄을 여는 홈 데코 트렌드 2026",
    excerpt: "자연 소재와 따뜻한 색감으로 완성하는 봄 인테리어",
    gradient: "linear-gradient(135deg, #e8d5c4 0%, #d4c5b9 100%)",
  },
  {
    id: 2,
    category: "FASHION",
    title: "S/S 시즌 머스트 해브 아이템",
    excerpt: "올 봄 꼭 챙겨야 할 패션 필수템 5가지",
    gradient: "linear-gradient(135deg, #c4b5a9 0%, #b8a99d 100%)",
  },
  {
    id: 3,
    category: "GOURMET",
    title: "PREMIA 다이닝 셰프의 추천 메뉴",
    excerpt: "봄 제철 식재료로 만나는 파인 다이닝 코스",
    gradient: "linear-gradient(135deg, #4a3f35 0%, #2d2b28 100%)",
  },
  {
    id: 4,
    category: "BEAUTY",
    title: "2026 봄 뷰티 키워드 — 글로우 & 내추럴",
    excerpt: "자연스러운 광채를 살리는 메이크업 트렌드",
    gradient: "linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%)",
  },
  {
    id: 5,
    category: "CULTURE",
    title: "PREMIA 아트홀 봄 기획전 프리뷰",
    excerpt: "국내외 아티스트 12인의 특별한 봄 이야기",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  },
  {
    id: 6,
    category: "LIFESTYLE",
    title: "향기로 완성하는 나만의 공간",
    excerpt: "니치 퍼퓸 브랜드가 제안하는 홈 프래그런스 가이드",
    gradient: "linear-gradient(135deg, #d4c5b9 0%, #c4b5a9 100%)",
  },
  {
    id: 7,
    category: "FASHION",
    title: "리조트 웨어 스타일링 A to Z",
    excerpt: "봄 휴가를 위한 완벽한 리조트 룩 가이드",
    gradient: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
  },
  {
    id: 8,
    category: "GOURMET",
    title: "와인 & 다이닝 페어링 마스터클래스",
    excerpt: "소믈리에가 추천하는 봄 와인과 요리의 만남",
    gradient: "linear-gradient(135deg, #2d2b28 0%, #4a3f35 100%)",
  },
  {
    id: 9,
    category: "WELLNESS",
    title: "봄철 웰니스 루틴 가이드",
    excerpt: "몸과 마음을 깨우는 시즌 체인지 셀프케어",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b078 100%)",
  },
];

export const PREVIEW_ARTICLES = ALL_ARTICLES.slice(0, 2);
