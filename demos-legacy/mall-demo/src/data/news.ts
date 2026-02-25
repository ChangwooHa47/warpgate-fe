export interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  tag?: string;
}

export const ALL_NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: "EVENT",
    title: "봄맞이 뷰티 페스타 최대 30% 할인",
    date: "2026.02.14 - 2026.03.02",
    image: "linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%)",
    tag: "D-13",
  },
  {
    id: 2,
    category: "NEW OPEN",
    title: "디올 뷰티 플래그십 매장 오픈",
    date: "2026.02.20",
    image: "linear-gradient(135deg, #d4c5b9 0%, #c4b5a9 100%)",
    tag: "NEW",
  },
  {
    id: 3,
    category: "EXHIBITION",
    title: "PREMIA ART HALL 기획전",
    date: "2026.02.10 - 2026.04.30",
    image: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
  },
  {
    id: 4,
    category: "BENEFIT",
    title: "PREMIA 멤버십 더블 포인트 위크",
    date: "2026.02.17 - 2026.02.23",
    image: "linear-gradient(135deg, #b8965a 0%, #d4b078 100%)",
    tag: "HOT",
  },
  {
    id: 5,
    category: "EVENT",
    title: "럭셔리 워치 페어 2026",
    date: "2026.03.01 - 2026.03.15",
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    tag: "NEW",
  },
  {
    id: 6,
    category: "BENEFIT",
    title: "스프링 시즌 사전 예약 특별 혜택",
    date: "2026.02.25 - 2026.03.10",
    image: "linear-gradient(135deg, #4a3f35 0%, #2d2b28 100%)",
  },
  {
    id: 7,
    category: "NEW OPEN",
    title: "보테가 베네타 리뉴얼 오픈",
    date: "2026.03.05",
    image: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
    tag: "NEW",
  },
  {
    id: 8,
    category: "EVENT",
    title: "화이트데이 스페셜 기프트 프로모션",
    date: "2026.03.07 - 2026.03.14",
    image: "linear-gradient(135deg, #e8d5c4 0%, #f5e6d3 100%)",
    tag: "D-21",
  },
  {
    id: 9,
    category: "EXHIBITION",
    title: "현대 미술 특별 초대전 — 봄의 서사",
    date: "2026.03.10 - 2026.05.31",
    image: "linear-gradient(135deg, #2d2b28 0%, #1a1a1a 100%)",
  },
  {
    id: 10,
    category: "BENEFIT",
    title: "PREMIA 카드 신규 발급 캐시백 이벤트",
    date: "2026.02.01 - 2026.03.31",
    image: "linear-gradient(135deg, #b8965a 0%, #96783e 100%)",
    tag: "HOT",
  },
  {
    id: 11,
    category: "EVENT",
    title: "키즈 봄맞이 페스티벌",
    date: "2026.03.15 - 2026.03.22",
    image: "linear-gradient(135deg, #d4c5b9 0%, #e8d5c4 100%)",
  },
  {
    id: 12,
    category: "NEW OPEN",
    title: "셀린느 맨즈 팝업 스토어",
    date: "2026.03.20 - 2026.04.20",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    tag: "NEW",
  },
];

export const PREVIEW_NEWS = ALL_NEWS_ITEMS.slice(0, 2);
