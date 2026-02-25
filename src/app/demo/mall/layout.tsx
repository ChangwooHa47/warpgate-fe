import type { Metadata } from "next";
import "./mall.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Popup from "./_components/Popup";
import ChatButton from "./_components/ChatButton";

export const metadata: Metadata = {
  title: "PREMIA 백화점 | 프리미엄 라이프스타일",
  description:
    "PREMIA 백화점 - 최고의 브랜드와 서비스로 당신의 라이프스타일을 완성합니다.",
};

export default function MallLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-demo="mall">
      <Header />
      <main>{children}</main>
      <Footer />
      <Popup />
      <ChatButton />
    </div>
  );
}
