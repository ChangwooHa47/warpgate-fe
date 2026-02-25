import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GRIT \u2014 Premium Fitness",
    template: "%s | GRIT",
  },
  description:
    "당신의 한계를 넘어서는 공간, GRIT. 최첨단 시설과 전문 트레이너가 함께합니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "GRIT",
    title: "GRIT \u2014 Premium Fitness",
    description:
      "당신의 한계를 넘어서는 공간, GRIT. 최첨단 시설과 전문 트레이너가 함께합니다.",
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
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
