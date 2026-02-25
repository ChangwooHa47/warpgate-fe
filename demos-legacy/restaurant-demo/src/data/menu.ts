export type DietaryTag = "vegetarian" | "vegan" | "gluten-free" | "contains-nuts" | "spicy";

export interface CourseDish {
  name: string;
  english?: string;
  note?: string;
}

export interface CourseMenu {
  id: string;
  title: string;
  english: string;
  description: string;
  price: string;
  dishes: CourseDish[];
  tags?: DietaryTag[];
}

export interface CourseSection {
  id: string;
  title: string;
  english: string;
  time: string;
  courses: CourseMenu[];
}

export interface TeaItem {
  name: string;
  english: string;
  note: string;
}

export interface LiquorItem {
  name: string;
  english: string;
  note: string;
}

export const dietaryLabels: Record<DietaryTag, string> = {
  vegetarian: "채식",
  vegan: "비건",
  "gluten-free": "글루텐프리",
  "contains-nuts": "견과류 포함",
  spicy: "매운맛",
};

export const menuPhilosophy = {
  subtitle: "소담의 한 상",
  title: "메뉴",
  body: "계절이 허락한 재료만을 씁니다.\n그 위에 시간과 정성을 더할 뿐입니다.",
};

export const courseSections: CourseSection[] = [
  {
    id: "lunch",
    title: "정오의 한 상",
    english: "Déjeuner",
    time: "오전 11:30 – 오후 2:30",
    courses: [
      {
        id: "lunch-bansang",
        title: "제철 반상",
        english: "Seasonal Bansang",
        description: "맑은 국물과 나물, 구이로 이루어진 낮의 한 상",
        price: "65,000",
        dishes: [
          { name: "계절 전채 삼종" },
          { name: "맑은 국" },
          { name: "구이 생선", note: "그날의 어획에 따라" },
          { name: "제철 나물 다섯 가지" },
          { name: "집 된장찌개" },
          { name: "돌솥밥" },
          { name: "후식" },
        ],
        tags: ["gluten-free"],
      },
      {
        id: "lunch-hanwoo",
        title: "한우 정찬",
        english: "Hanwoo Course",
        description: "한우 숯불 구이를 중심으로 갖춘 정갈한 코스",
        price: "85,000",
        dishes: [
          { name: "전채" },
          { name: "계절 죽", note: "호박 또는 잣" },
          { name: "한우 등심 숯불 구이" },
          { name: "제철 나물" },
          { name: "손 만두" },
          { name: "냉면" },
          { name: "후식" },
        ],
      },
    ],
  },
  {
    id: "dinner",
    title: "저녁의 한 상",
    english: "Dîner",
    time: "오후 5:30 – 오후 9:30",
    courses: [
      {
        id: "dinner-surasang",
        title: "수라상",
        english: "Surasang",
        description: "궁중 반가의 격식을 좇아 차리는 열두 첩 코스",
        price: "150,000",
        dishes: [
          { name: "전채 삼종" },
          { name: "죽", note: "전복죽" },
          { name: "찜", note: "계절에 따라" },
          { name: "궁중 전유화" },
          { name: "구이", note: "한우 또는 제철 생선" },
          { name: "조림" },
          { name: "탕" },
          { name: "밥과 수라 반찬" },
          { name: "식혜" },
          { name: "전통 과정" },
        ],
      },
      {
        id: "dinner-seasonal",
        title: "계절 정찬",
        english: "Seasonal Jungchan",
        description: "그 철의 재료가 이끄는 아홉 가지 흐름",
        price: "120,000",
        dishes: [
          { name: "전채" },
          { name: "죽" },
          { name: "구이" },
          { name: "찜" },
          { name: "전" },
          { name: "탕" },
          { name: "밥과 반찬" },
          { name: "후식" },
        ],
        tags: ["gluten-free"],
      },
    ],
  },
];

export const teaSection = {
  id: "tea",
  title: "차",
  english: "Tea",
  description: "식사의 여운을 잇는 한 잔.",
  items: [
    { name: "우전", english: "Ujeon", note: "하동. 곡우 전 첫 잎." },
    { name: "발효 보이차", english: "Aged Pu-erh", note: "운남. 묵직한 깊이." },
    { name: "오미자차", english: "Omija", note: "문경. 다섯 가지 맛." },
    { name: "대추차", english: "Daechu", note: "보은. 은은한 단맛." },
    { name: "국화차", english: "Chrysanthemum", note: "담양. 화사한 향." },
  ] as TeaItem[],
};

export const liquorSection = {
  id: "liquor",
  title: "전통주",
  english: "Traditional Liquor",
  description: "필요하신 경우, 코스에 맞추어 별도로 구성합니다.",
  items: [
    { name: "막걸리 페어링", english: "Makgeolli Pairing", note: "소규모 양조장 선별." },
    { name: "전통 소주", english: "Traditional Soju", note: "지역 양조장 소량 생산." },
  ] as LiquorItem[],
};
