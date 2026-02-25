import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./cafe.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mellow | 강남 카페",
  description: "오늘도, 한 잔의 여유. 서울 강남구 테헤란로에 위치한 카페 Mellow입니다.",
};

/**
 * Cafe Demo Layout with CSS Isolation
 *
 * The data-demo="cafe" attribute scopes ALL cafe-specific styles
 * to this route segment only. Lite/Pro pages remain unaffected.
 */
export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-demo="cafe"
      className={`${playfair.variable} ${notoSansKR.variable}`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
