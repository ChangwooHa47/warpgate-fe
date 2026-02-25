import type { Metadata } from "next";
import Location from "../_components/Location";

export const metadata: Metadata = {
  title: "오시는 길 | Mellow",
  description: "서울 강남구 테헤란로에 위치한 카페 Mellow의 위치와 영업시간 안내.",
};

export default function LocationPage() {
  return <Location />;
}
