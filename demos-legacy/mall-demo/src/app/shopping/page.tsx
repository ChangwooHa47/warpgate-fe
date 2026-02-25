import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShoppingNews from "@/components/ShoppingNews";

export const metadata: Metadata = {
  title: "쇼핑 정보 | PREMIA",
  description: "PREMIA 백화점 쇼핑 뉴스, 이벤트, 프로모션 정보",
};

export default function ShoppingPage() {
  return (
    <>
      <PageHeader label="SHOPPING NEWS & EVENT" title="쇼핑 뉴스" />
      <ShoppingNews />
    </>
  );
}
