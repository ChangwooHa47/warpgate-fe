import { Product } from "../_lib/types";

export const products: Product[] = [
  // ── Apparel ──
  {
    id: "merino-crew",
    name: "메리노 울 크루넥",
    nameEn: "Merino Wool Crewneck",
    category: "apparel",
    price: 89000,
    description:
      "입을수록 몸에 맞아가는 니트. 계절이 바뀌어도 자꾸 손이 갑니다.",
    details: [
      "100% 호주산 메리노 울",
      "홀가먼트 무봉제 니팅",
      "사계절 착용 가능한 게이지",
      "핸드워시 권장",
    ],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
    ],
    variants: [
      { label: "컬러", options: ["아이보리", "차콜", "카멜"] },
      { label: "사이즈", options: ["S", "M", "L"] },
    ],
    stock: "in_stock",
  },
  {
    id: "cotton-tee",
    name: "수피마 코튼 티셔츠",
    nameEn: "Supima Cotton T-Shirt",
    category: "apparel",
    price: 39000,
    description:
      "매일 입는 거라 더 까다롭게 골랐습니다. 빨아도 늘어나지 않는 티.",
    details: [
      "80수 수피마 코튼",
      "세미 오버핏 실루엣",
      "이중 바인딩 넥라인",
      "머신워시 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    variants: [
      { label: "컬러", options: ["화이트", "블랙", "그레이", "네이비"] },
      { label: "사이즈", options: ["S", "M", "L", "XL"] },
    ],
    stock: "in_stock",
  },
  {
    id: "linen-shirt",
    name: "워싱 리넨 셔츠",
    nameEn: "Washed Linen Shirt",
    category: "apparel",
    price: 78000,
    description:
      "빨래할수록 부드러워지는 셔츠. 여름엔 한 장으로, 봄가을엔 걸쳐서.",
    details: [
      "100% 유럽산 리넨",
      "워싱 가공으로 부드러운 촉감",
      "릴랙스드 레귤러 핏",
      "저온 세탁 권장",
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&q=80",
    ],
    variants: [
      { label: "컬러", options: ["화이트", "베이지", "스카이"] },
      { label: "사이즈", options: ["S", "M", "L"] },
    ],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "cashmere-muffler",
    name: "캐시미어 머플러",
    nameEn: "Cashmere Muffler",
    category: "apparel",
    price: 115000,
    description:
      "한번 만져보면 알게 됩니다. 쌀쌀한 날이면 자꾸 찾게 되는 머플러.",
    details: [
      "100% 몽골산 캐시미어",
      "사이즈 180 × 35cm",
      "손세탁 후 자연 건조",
      "개체마다 미세한 색상 차이 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
    ],
    variants: [
      { label: "컬러", options: ["라이트 그레이", "카멜", "블랙"] },
    ],
    stock: "low_stock",
  },

  // ── Home ──
  {
    id: "ceramic-mug",
    name: "핸드메이드 세라믹 머그",
    nameEn: "Handmade Ceramic Mug",
    category: "home",
    price: 32000,
    description:
      "쥐었을 때 손에 맞는 곡선. 아침 커피가 조금 더 좋아지는 머그.",
    details: [
      "도예가 수작업 제작",
      "약 300ml 용량",
      "전자레인지 · 식기세척기 사용 가능",
      "개체마다 미세한 차이가 있습니다",
    ],
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    ],
    variants: [{ label: "컬러", options: ["내추럴", "크림", "차콜"] }],
    stock: "low_stock",
  },
  {
    id: "linen-blanket",
    name: "프렌치 리넨 블랭킷",
    nameEn: "French Linen Blanket",
    category: "home",
    price: 128000,
    description:
      "쓸수록 부드러워지는 리넨. 소파에, 침대에, 어디든 걸쳐두게 됩니다.",
    details: [
      "100% 프랑스산 리넨",
      "사이즈 150 × 200cm",
      "워싱 가공 처리",
      "울 드라이클리닝 또는 저온 세탁",
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80",
    ],
    variants: [
      { label: "컬러", options: ["오트밀", "포그 그레이", "더스티 로즈"] },
    ],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "cotton-towel",
    name: "오가닉 코튼 타올 세트",
    nameEn: "Organic Cotton Towel Set",
    category: "home",
    price: 48000,
    description:
      "매일 피부에 닿는 거라 소재가 중요합니다. 부드럽고 잘 마르는 타올.",
    details: [
      "GOTS 인증 유기농 면",
      "페이스 타올 2장 + 핸드 타올 2장",
      "이중 루프 직조",
      "머신워시 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&q=80",
      "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=800&q=80",
    ],
    variants: [{ label: "컬러", options: ["화이트", "라이트 그레이", "베이지"] }],
    stock: "in_stock",
  },

  // ── Desk ──
  {
    id: "brass-penstand",
    name: "솔리드 브라스 펜 스탠드",
    nameEn: "Solid Brass Pen Stand",
    category: "desk",
    price: 45000,
    description:
      "쓰다 보면 색이 변합니다. 그게 황동의 매력이에요.",
    details: [
      "무구 황동 소재",
      "무게감 있는 안정적 구조",
      "시간 경과에 따른 자연 패티나",
      "펜 1–2자루 수납",
    ],
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    ],
    stock: "in_stock",
  },
  {
    id: "leather-tray",
    name: "베지터블 레더 트레이",
    nameEn: "Vegetable Leather Tray",
    category: "desk",
    price: 58000,
    description:
      "열쇠, 동전, 카드. 자잘한 것들 놓아두기 좋은 트레이. 가죽이 익을수록 색이 깊어져요.",
    details: [
      "이탈리아산 베지터블 탄닝 가죽",
      "수작업 스티칭",
      "사이즈 20 × 15cm",
      "에이징에 따른 색상 변화",
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    variants: [{ label: "컬러", options: ["내추럴", "다크 브라운"] }],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "walnut-stand",
    name: "월넛 노트북 스탠드",
    nameEn: "Walnut Laptop Stand",
    category: "desk",
    price: 72000,
    description:
      "나뭇결이 하나하나 다릅니다. 각도 하나로 책상 위가 달라져요.",
    details: [
      "북미산 블랙 월넛 원목",
      "인체공학적 15도 각도",
      "15인치 노트북까지 호환",
      "천연 오일 마감",
    ],
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    ],
    stock: "in_stock",
  },

  // ── Wellness ──
  {
    id: "hinoki-diffuser",
    name: "히노키 디퓨저",
    nameEn: "Hinoki Wood Diffuser",
    category: "wellness",
    price: 52000,
    description:
      "편백나무 향이 은은하게 퍼집니다. 공간이 달라지는 걸 느낄 수 있어요.",
    details: [
      "일본산 히노키 에센셜 오일",
      "200ml 용량 (약 2개월 사용)",
      "리드 스틱 5개 포함",
      "파라벤 · 프탈레이트 무첨가",
    ],
    images: [
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    ],
    stock: "in_stock",
  },
  {
    id: "soy-candle",
    name: "소이 캔들 — 이른 아침",
    nameEn: "Soy Candle — Early Morning",
    category: "wellness",
    price: 28000,
    description:
      "유칼립투스와 화이트 티 블렌딩. 가볍고 맑은 향이 오래 남아요.",
    details: [
      "100% 천연 소이왁스",
      "180g (약 40시간 연소)",
      "면 심지 사용",
      "유칼립투스 · 화이트 티 블렌딩",
    ],
    images: [
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    ],
    stock: "in_stock",
  },
  {
    id: "body-oil",
    name: "보타니컬 바디 오일",
    nameEn: "Botanical Body Oil",
    category: "wellness",
    price: 38000,
    description:
      "샤워 후 바르면 금방 스며듭니다. 끈적이지 않고 가벼운 오일.",
    details: [
      "호호바 · 아르간 · 로즈힙 블렌딩",
      "100ml 용량",
      "합성 향료 무첨가",
      "EWG 그린 등급 원료",
    ],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    ],
    stock: "in_stock",
    isNew: true,
  },
];

export const categories: { key: string; label: string; labelEn: string }[] = [
  { key: "all", label: "전체", labelEn: "All" },
  { key: "apparel", label: "의류", labelEn: "Apparel" },
  { key: "home", label: "홈", labelEn: "Home" },
  { key: "desk", label: "데스크", labelEn: "Desk" },
  { key: "wellness", label: "웰니스", labelEn: "Wellness" },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
