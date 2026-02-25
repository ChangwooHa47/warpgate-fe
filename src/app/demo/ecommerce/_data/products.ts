import type { Product, Category } from "../_lib/types";

export const products: Product[] = [
  {
    id: "organic-cotton-tee",
    name: "오가닉 코튼 티셔츠",
    nameEn: "Organic Cotton Tee",
    category: "apparel",
    price: 39000,
    description:
      "부드럽고 통기성이 좋은 오가닉 코튼 소재. 간결한 실루엣과 릴랙스드 핏으로 일상에서 편안하게 입기 좋습니다.",
    details: [
      "100% 오가닉 코튼",
      "릴랙스드 핏",
      "크루넥",
      "세탁기 사용 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&h=1000&fit=crop",
    ],
    variants: [
      { label: "사이즈", options: ["S", "M", "L", "XL"] },
      { label: "색상", options: ["화이트", "베이지", "그레이"] },
    ],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "linen-blend-shirt",
    name: "린넨 블렌드 셔츠",
    nameEn: "Linen Blend Shirt",
    category: "apparel",
    price: 59000,
    description:
      "린넨과 코튼의 조화로운 혼방 소재. 자연스러운 질감과 시원한 착용감이 특징입니다.",
    details: ["55% 린넨, 45% 코튼", "레귤러 핏", "버튼 프런트", "드라이클리닝 권장"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
    ],
    variants: [
      { label: "사이즈", options: ["S", "M", "L"] },
      { label: "색상", options: ["아이보리", "스카이블루"] },
    ],
    stock: "in_stock",
  },
  {
    id: "merino-cardigan",
    name: "메리노 울 가디건",
    nameEn: "Merino Wool Cardigan",
    category: "apparel",
    price: 89000,
    description:
      "엄선된 메리노 울로 제작된 가디건. 가볍고 따뜻하며, 계절 간 활용도가 높습니다.",
    details: [
      "100% 엑스트라파인 메리노 울",
      "V넥 디자인",
      "5버튼 클로저",
      "핸드워시 권장",
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop",
    ],
    variants: [
      { label: "사이즈", options: ["S", "M", "L"] },
      { label: "색상", options: ["네이비", "카멜", "차콜"] },
    ],
    stock: "low_stock",
  },
  {
    id: "ceramic-vase-medium",
    name: "세라믹 화병 M",
    nameEn: "Ceramic Vase Medium",
    category: "home",
    price: 45000,
    description:
      "손으로 빚은 세라믹 화병. 미세한 질감과 자연스러운 형태가 공간에 차분한 분위기를 더합니다.",
    details: ["핸드메이드 세라믹", "높이 18cm", "방수 코팅", "물 사용 가능"],
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=1000&fit=crop",
    ],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "linen-bedding-set",
    name: "린넨 침구 세트",
    nameEn: "Linen Bedding Set",
    category: "home",
    price: 189000,
    description:
      "프랑스산 린넨으로 제작된 침구 세트. 사용할수록 부드러워지며 사계절 쾌적하게 사용할 수 있습니다.",
    details: [
      "100% 프렌치 린넨",
      "이불커버 + 베개커버 2장",
      "퀸 사이즈 (170x210cm)",
      "스톤워싱 가공",
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=1000&fit=crop",
    ],
    variants: [{ label: "색상", options: ["내추럴", "화이트", "그레이"] }],
    stock: "in_stock",
  },
  {
    id: "aromatic-candle",
    name: "아로마틱 캔들",
    nameEn: "Aromatic Candle",
    category: "home",
    price: 32000,
    description:
      "소이 왁스와 천연 에센셜 오일로 만든 캔들. 은은한 향이 공간을 편안하게 채웁니다.",
    details: [
      "100% 소이 왁스",
      "천연 에센셜 오일",
      "연소시간 약 40시간",
      "핸드메이드",
    ],
    images: [
      "https://images.unsplash.com/photo-1602607950151-cf17cb8a51c4?w=800&h=1000&fit=crop",
    ],
    variants: [{ label: "향", options: ["세이지", "유칼립투스", "라벤더"] }],
    stock: "in_stock",
  },
  {
    id: "wooden-desk-organizer",
    name: "우드 데스크 오거나이저",
    nameEn: "Wooden Desk Organizer",
    category: "desk",
    price: 48000,
    description:
      "호두나무로 제작된 데스크 오거나이저. 미니멀한 디자인으로 책상 위를 정돈해 줍니다.",
    details: ["천연 호두나무", "3개 수납공간", "오일 마감", "사이즈 25x12x8cm"],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=1000&fit=crop",
    ],
    stock: "in_stock",
  },
  {
    id: "brass-pen-holder",
    name: "브라스 펜홀더",
    nameEn: "Brass Pen Holder",
    category: "desk",
    price: 28000,
    description:
      "황동 소재의 펜홀더. 시간이 지나며 자연스럽게 변화하는 색감이 매력적입니다.",
    details: ["솔리드 브라스", "직경 4cm, 높이 10cm", "에이징 효과", "무광 마감"],
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&h=1000&fit=crop",
    ],
    stock: "in_stock",
  },
  {
    id: "recycled-notebook",
    name: "리사이클 노트북",
    nameEn: "Recycled Notebook",
    category: "desk",
    price: 15000,
    description:
      "재생지로 만든 친환경 노트북. 부드러운 필기감과 견고한 제본이 특징입니다.",
    details: ["100% 재생지", "96페이지", "A5 사이즈", "실 제본"],
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&h=1000&fit=crop",
    ],
    variants: [{ label: "색상", options: ["네이비", "그레이", "크라프트"] }],
    stock: "in_stock",
    isNew: true,
  },
  {
    id: "herbal-tea-set",
    name: "허브티 세트",
    nameEn: "Herbal Tea Set",
    category: "wellness",
    price: 35000,
    description:
      "엄선된 유기농 허브로 블렌딩한 티 세트. 일상에서 작은 여유를 선사합니다.",
    details: [
      "유기농 허브 100%",
      "3종 구성 (캐모마일, 페퍼민트, 루이보스)",
      "각 20티백",
      "개별 포장",
    ],
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=1000&fit=crop",
    ],
    stock: "in_stock",
  },
  {
    id: "essential-oil-diffuser",
    name: "에센셜 오일 디퓨저",
    nameEn: "Essential Oil Diffuser",
    category: "wellness",
    price: 55000,
    description:
      "세라믹 소재의 아로마 디퓨저. 초음파 방식으로 은은하게 향을 퍼뜨립니다.",
    details: [
      "세라믹 외관",
      "초음파 방식",
      "용량 150ml",
      "자동 꺼짐 기능",
      "무드등 기능",
    ],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=1000&fit=crop",
    ],
    stock: "in_stock",
  },
  {
    id: "meditation-cushion",
    name: "명상 쿠션",
    nameEn: "Meditation Cushion",
    category: "wellness",
    price: 68000,
    description:
      "메밀 껍질을 채운 명상 쿠션. 안정적인 자세를 유지할 수 있도록 설계되었습니다.",
    details: [
      "겉감: 오가닉 코튼",
      "내용물: 메밀 껍질",
      "직경 33cm, 높이 15cm",
      "커버 분리 세탁 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=1000&fit=crop",
    ],
    variants: [{ label: "색상", options: ["차콜", "세이지", "테라코타"] }],
    stock: "low_stock",
  },
  {
    id: "cotton-slippers",
    name: "코튼 슬리퍼",
    nameEn: "Cotton Slippers",
    category: "wellness",
    price: 25000,
    description:
      "부드러운 코튼 소재의 실내 슬리퍼. 가볍고 통기성이 좋아 사계절 착용이 가능합니다.",
    details: [
      "겉감: 100% 코튼",
      "안감: 테리 코튼",
      "논슬립 고무 밑창",
      "세탁기 사용 가능",
    ],
    images: [
      "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=800&h=1000&fit=crop",
    ],
    variants: [
      { label: "사이즈", options: ["S (230-240)", "M (250-260)", "L (270-280)"] },
    ],
    stock: "in_stock",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category?: Category): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}
