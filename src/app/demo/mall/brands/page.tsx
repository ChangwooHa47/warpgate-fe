import type { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import BrandShowcase from "../_components/BrandShowcase";

export const metadata: Metadata = {
  title: "브랜드 | PREMIA",
  description: "PREMIA 백화점 프리미엄 럭셔리 브랜드 안내",
};

export default function BrandsPage() {
  return (
    <>
      <PageHeader label="PREMIUM BRANDS" title="프리미엄 브랜드" />
      <BrandShowcase />
    </>
  );
}
