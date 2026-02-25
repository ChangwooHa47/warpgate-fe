import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import ChatButton from "@/components/ChatButton";

export const metadata: Metadata = {
  title: "PREMIA 백화점 | 프리미엄 라이프스타일",
  description:
    "PREMIA 백화점 - 최고의 브랜드와 서비스로 당신의 라이프스타일을 완성합니다.",
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
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Popup />
        <ChatButton />
      </body>
    </html>
  );
}
