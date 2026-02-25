import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { CartProvider } from "./_context/CartContext";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import "./ecommerce.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MUJI-inspired Ecommerce",
    template: "%s | Ecommerce Demo",
  },
  description: "Minimal, thoughtful living essentials",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-demo="ecommerce" className={`${notoSansKR.variable} font-sans`}>
      <CartProvider>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </CartProvider>
    </div>
  );
}
