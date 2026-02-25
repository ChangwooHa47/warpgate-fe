import Link from "next/link";
import { FIRM_NAME, FIRM_PHONE, FIRM_FAX, FIRM_EMAIL, FIRM_ADDRESS } from "@/lib/constants";

const quickLinks = [
  { href: "/services", label: "서비스 소개" },
  { href: "/consultation", label: "세무 상담" },
  { href: "/portal", label: "고객 포털" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Firm Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-accent-400">
              {FIRM_NAME}
            </h3>
            <p className="mb-6 text-base leading-relaxed text-slate-400">
              기업의 성장을 함께하는 세무 파트너.
              <br />
              15년 이상의 경험을 바탕으로 최선의 세무·회계 서비스를 제공합니다.
            </p>
            <div className="divider" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-bold tracking-wider text-slate-100 uppercase">
              바로가기
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base font-bold tracking-wider text-slate-100 uppercase">
              연락처
            </h4>
            <ul className="flex flex-col gap-3 text-base text-slate-400">
              <li>
                <span className="text-slate-500">주소</span>
                <br />
                {FIRM_ADDRESS}
              </li>
              <li>
                <span className="text-slate-500">전화</span>
                <br />
                {FIRM_PHONE}
              </li>
              <li>
                <span className="text-slate-500">팩스</span>
                <br />
                {FIRM_FAX}
              </li>
              <li>
                <span className="text-slate-500">이메일</span>
                <br />
                {FIRM_EMAIL}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2025 {FIRM_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
