import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Magazine from "@/components/Magazine";

export const metadata: Metadata = {
  title: "매거진 | PREMIA",
  description: "PREMIA 백화점 라이프스타일 매거진, 패션, 뷰티, 다이닝 소식",
};

export default function MagazinePage() {
  return (
    <>
      <PageHeader label="PREMIA MAGAZINE" title="매거진" />
      <Magazine />
    </>
  );
}
