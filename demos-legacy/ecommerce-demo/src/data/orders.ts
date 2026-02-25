import { Order } from "@/types";

export const sampleOrders: Order[] = [
  {
    id: "ORD-240215-001",
    items: [
      {
        product: {
          id: "merino-crew",
          name: "메리노 울 크루넥",
          nameEn: "Merino Wool Crewneck",
          category: "apparel",
          price: 89000,
          description: "",
          details: [],
          images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
          ],
          stock: "in_stock",
        },
        quantity: 1,
        selectedVariants: { 컬러: "차콜", 사이즈: "M" },
      },
      {
        product: {
          id: "ceramic-mug",
          name: "핸드메이드 세라믹 머그",
          nameEn: "Handmade Ceramic Mug",
          category: "home",
          price: 32000,
          description: "",
          details: [],
          images: [
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
          ],
          stock: "in_stock",
        },
        quantity: 2,
        selectedVariants: { 컬러: "크림" },
      },
    ],
    status: "shipping",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 정상적으로 접수되었습니다.",
        date: "2024-02-15 14:23",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 정성껏 포장하고 있습니다.",
        date: "2024-02-16 09:10",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "CJ대한통운 (송장번호: 0000-0000-0000)",
        date: "2024-02-17 11:45",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료될 예정입니다.",
        date: "2024-02-18 (예정)",
        completed: false,
      },
    ],
    shippingAddress: {
      name: "ㅇㅇㅇ",
      phone: "010-0000-0000",
      zipCode: "06035",
      address: "서울특별시 강남구 가로수길 12",
      addressDetail: "3층 302호",
    },
    totalPrice: 153000,
    createdAt: "2024-02-15T14:23:00",
  },
  {
    id: "ORD-240201-002",
    items: [
      {
        product: {
          id: "linen-blanket",
          name: "프렌치 리넨 블랭킷",
          nameEn: "French Linen Blanket",
          category: "home",
          price: 128000,
          description: "",
          details: [],
          images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
          ],
          stock: "in_stock",
        },
        quantity: 1,
        selectedVariants: { 컬러: "오트밀" },
      },
    ],
    status: "delivered",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 정상적으로 접수되었습니다.",
        date: "2024-02-01 10:05",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 정성껏 포장하고 있습니다.",
        date: "2024-02-02 08:30",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "CJ대한통운 (송장번호: 0000-0000-0000)",
        date: "2024-02-03 14:20",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료되었습니다.",
        date: "2024-02-04 11:30",
        completed: true,
      },
    ],
    shippingAddress: {
      name: "ㅇㅇㅇ",
      phone: "010-0000-0000",
      zipCode: "06035",
      address: "서울특별시 강남구 가로수길 12",
      addressDetail: "3층 302호",
    },
    totalPrice: 128000,
    createdAt: "2024-02-01T10:05:00",
  },
  {
    id: "ORD-240120-003",
    items: [
      {
        product: {
          id: "hinoki-diffuser",
          name: "히노키 디퓨저",
          nameEn: "Hinoki Wood Diffuser",
          category: "wellness",
          price: 52000,
          description: "",
          details: [],
          images: [
            "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
          ],
          stock: "in_stock",
        },
        quantity: 1,
        selectedVariants: {},
      },
      {
        product: {
          id: "soy-candle",
          name: "소이 캔들 — 이른 아침",
          nameEn: "Soy Candle — Early Morning",
          category: "wellness",
          price: 28000,
          description: "",
          details: [],
          images: [
            "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&q=80",
          ],
          stock: "in_stock",
        },
        quantity: 2,
        selectedVariants: {},
      },
    ],
    status: "delivered",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 정상적으로 접수되었습니다.",
        date: "2024-01-20 16:40",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 정성껏 포장하고 있습니다.",
        date: "2024-01-21 09:00",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "CJ대한통운 (송장번호: 0000-0000-0000)",
        date: "2024-01-22 10:15",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료되었습니다.",
        date: "2024-01-23 14:00",
        completed: true,
      },
    ],
    shippingAddress: {
      name: "ㅇㅇㅇ",
      phone: "010-0000-0000",
      zipCode: "06035",
      address: "서울특별시 강남구 가로수길 12",
      addressDetail: "3층 302호",
    },
    totalPrice: 108000,
    createdAt: "2024-01-20T16:40:00",
  },
];

export function getOrder(id: string): Order | undefined {
  return sampleOrders.find((o) => o.id === id);
}
