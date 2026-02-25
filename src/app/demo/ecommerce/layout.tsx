import type { Metadata } from "next";
import "./ecommerce.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import { CartProvider } from "./_context/CartContext";

export const metadata: Metadata = {
  title: "ORDINAR — 일상을 위한 선택",
  description:
    "매일을 위해 신중하게 고른 라이프스타일 셀렉트숍. Selected with intention for everyday life.",
};

export default function EcommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-demo="ecommerce">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
      <CartProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </CartProvider>
    </div>
  );
}
