import { Noto_Sans_KR, Inter } from "next/font/google";
import "./hagwon.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function HagwonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-demo="hagwon"
      lang="ko"
      className={`${notoSansKr.variable} ${inter.variable} antialiased`}
    >
      {children}
    </div>
  );
}
