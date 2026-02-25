import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StoreInfo from "@/components/StoreInfo";

export const metadata: Metadata = {
  title: "매장 안내 | PREMIA",
  description: "PREMIA 백화점 매장 위치, 영업시간, 연락처 안내",
};

export default function StoresPage() {
  return (
    <>
      <PageHeader label="STORE INFO" title="매장 안내" />
      <StoreInfo />
    </>
  );
}
