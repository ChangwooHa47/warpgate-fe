import type { Metadata } from "next";
import "./nailshop.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "MAISON NAIL | 메종 네일",
  description: "Luxury Nail Art & Care Studio in Apgujeong",
};

export default function NailshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-demo="nailshop" className="antialiased">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
