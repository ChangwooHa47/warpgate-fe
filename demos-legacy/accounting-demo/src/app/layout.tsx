import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "한울 세무회계",
    template: "%s | 한울 세무회계",
  },
  description:
    "기업의 성장을 함께하는 세무 파트너. 법인세, 소득세, 부가가치세부터 경영 컨설팅까지 전문 세무사가 함께합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
