import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import "./estate.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "부동산 - 강남/서초 프리미엄 매물",
    template: "%s | 부동산",
  },
  description: "강남/서초 지역 프리미엄 부동산 매물 검색 및 상담 서비스",
};

export default function EstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-demo="estate" className={`${notoSansKR.variable} font-sans`}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
