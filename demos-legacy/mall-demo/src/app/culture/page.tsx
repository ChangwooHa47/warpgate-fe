import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "아트 & 컬처 | PREMIA",
  description: "PREMIA 백화점 아트홀, 전시, 문화 프로그램 안내",
};

export default function CulturePage() {
  return (
    <>
      <PageHeader label="ART & CULTURE" title="아트 & 컬처" />
      <section className="section-spacing bg-[#f8f7f5]">
        <div className="container-main text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-12 h-px bg-[#b8965a] mx-auto mb-8" />
            <p
              className="text-3xl font-light text-gray-800 mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Coming Soon
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              특별한 전시와 문화 프로그램을 준비하고 있습니다.
              <br />
              PREMIA만의 예술적 경험을 곧 만나보실 수 있습니다.
            </p>
            <div className="w-12 h-px bg-[#b8965a] mx-auto mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
