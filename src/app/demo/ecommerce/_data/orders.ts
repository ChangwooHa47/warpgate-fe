import type { Order } from "../_lib/types";
import { products } from "./products";

export const sampleOrders: Order[] = [
  {
    id: "ORD-240215-001",
    items: [
      {
        product: products[0],
        quantity: 2,
        selectedVariants: { 사이즈: "M", 색상: "화이트" },
      },
      {
        product: products[3],
        quantity: 1,
      },
    ],
    status: "shipping",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 확인되었습니다.",
        date: "2024.02.15 14:32",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 포장하고 있습니다.",
        date: "2024.02.15 16:20",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "CJ대한통운 | 123456789012",
        date: "2024.02.16 09:45",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료될 예정입니다.",
        date: "예상 2024.02.18",
        completed: false,
      },
    ],
    shippingAddress: {
      name: "김지수",
      phone: "010-1234-5678",
      zipCode: "06234",
      address: "서울특별시 강남구 테헤란로 123",
      addressDetail: "12층 1201호",
    },
    totalPrice: 126000,
    createdAt: "2024-02-15T14:32:00",
  },
  {
    id: "ORD-240210-002",
    items: [
      {
        product: products[4],
        quantity: 1,
        selectedVariants: { 색상: "내추럴" },
      },
    ],
    status: "delivered",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 확인되었습니다.",
        date: "2024.02.10 10:15",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 포장하고 있습니다.",
        date: "2024.02.10 14:30",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "CJ대한통운 | 987654321098",
        date: "2024.02.11 08:20",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료되었습니다.",
        date: "2024.02.12 16:45",
        completed: true,
      },
    ],
    shippingAddress: {
      name: "김지수",
      phone: "010-1234-5678",
      zipCode: "06234",
      address: "서울특별시 강남구 테헤란로 123",
      addressDetail: "12층 1201호",
    },
    totalPrice: 189000,
    createdAt: "2024-02-10T10:15:00",
  },
  {
    id: "ORD-240205-003",
    items: [
      {
        product: products[9],
        quantity: 1,
      },
      {
        product: products[5],
        quantity: 2,
        selectedVariants: { 향: "세이지" },
      },
    ],
    status: "delivered",
    timeline: [
      {
        status: "confirmed",
        label: "주문 확인",
        description: "주문이 확인되었습니다.",
        date: "2024.02.05 20:10",
        completed: true,
      },
      {
        status: "preparing",
        label: "상품 준비 중",
        description: "상품을 포장하고 있습니다.",
        date: "2024.02.06 09:00",
        completed: true,
      },
      {
        status: "shipping",
        label: "배송 중",
        description: "한진택배 | 567890123456",
        date: "2024.02.06 15:30",
        completed: true,
      },
      {
        status: "delivered",
        label: "배송 완료",
        description: "배송이 완료되었습니다.",
        date: "2024.02.07 11:20",
        completed: true,
      },
    ],
    shippingAddress: {
      name: "김지수",
      phone: "010-1234-5678",
      zipCode: "06234",
      address: "서울특별시 강남구 테헤란로 123",
      addressDetail: "12층 1201호",
    },
    totalPrice: 99000,
    createdAt: "2024-02-05T20:10:00",
  },
];

export function getOrder(id: string): Order | undefined {
  return sampleOrders.find((o) => o.id === id);
}
