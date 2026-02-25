import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-gowun",
});

export const metadata: Metadata = {
  title: {
    default: "소담 \u2014 전통 한정식",
    template: "%s | 소담",
  },
  description:
    "제철 식재료로 정성껏 차린 한정식 코스. 서울에서 만나는 전통 한식의 격.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "소담",
    title: "소담 \u2014 전통 한정식",
    description:
      "제철 식재료로 정성껏 차린 한정식 코스. 서울에서 만나는 전통 한식의 격.",
    // TODO: OG 이미지 추가 (권장 1200x630)
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={gowunBatang.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
