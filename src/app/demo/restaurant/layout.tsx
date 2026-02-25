import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import "./restaurant.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-gowun",
});

export const metadata: Metadata = {
  title: "소담 | 한식 파인다이닝",
  description: "정성을 담은 한 상, 소담. 전통과 현대가 어우러진 한식 파인다이닝 레스토랑입니다.",
};

/**
 * Restaurant Demo Layout with CSS Isolation
 *
 * The data-demo="restaurant" attribute scopes ALL restaurant-specific styles
 * to this route segment only. Lite/Pro pages remain unaffected.
 */
export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-demo="restaurant"
      className={gowunBatang.variable}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
