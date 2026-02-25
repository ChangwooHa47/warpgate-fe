import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "법무법인 정율",
    template: "%s | 법무법인 정율",
  },
  description:
    "신뢰와 전문성으로 의뢰인의 권리를 지킵니다. 민사, 형사, 기업법무, 부동산, 가사, 상속 분야 전문 법률 서비스.",
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
