import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "강남한결부동산 - 신뢰할 수 있는 부동산 파트너",
  description:
    "강남, 서초, 송파 등 서울 핵심 지역 프리미엄 매물 검색. 매매, 전세, 월세 상담 예약까지 한번에.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-[56px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
