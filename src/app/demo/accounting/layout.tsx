import type { Metadata } from "next";
import "./accounting.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "한울 세무회계",
    template: "%s | 한울 세무회계",
  },
  description:
    "신뢰할 수 있는 세무 파트너, 한울 세무회계. 중소기업과 스타트업을 위한 맞춤형 세무·회계·컨설팅 서비스를 제공합니다.",
};

/**
 * Accounting Demo Layout with CSS Isolation
 *
 * The data-demo="accounting" attribute scopes ALL accounting-specific styles
 * to this route segment only. Lite/Pro pages remain unaffected.
 */
export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-demo="accounting">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
