import type { Metadata } from "next";
import Menu from "../_components/Menu";

export const metadata: Metadata = {
  title: "메뉴 | Mellow",
  description: "Mellow의 커피, 음료, 디저트 메뉴를 확인하세요.",
};

export default function MenuPage() {
  return <Menu />;
}
