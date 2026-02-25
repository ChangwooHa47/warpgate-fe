import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./gym.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-pretendard",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIT ZONE - 강남 프리미엄 피트니스",
  description:
    "최신 시설과 전문 트레이너가 함께하는 프리미엄 피트니스 센터. 웨이트, 유산소, PT, 그룹 운동까지.",
};

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-demo="gym"
      className={`${notoSansKR.variable} font-sans min-h-screen flex flex-col`}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
