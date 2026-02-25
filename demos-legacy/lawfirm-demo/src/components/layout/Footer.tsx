import Link from "next/link";

const quickLinks = [
  { href: "/practice-areas", label: "업무분야" },
  { href: "/attorneys", label: "변호사 소개" },
  { href: "/cases", label: "업무사례" },
  { href: "/consultation", label: "상담 예약" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Firm Info */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-gold-400">
              법무법인 정율(正律)
            </h3>
            <p className="mb-6 text-base leading-relaxed text-slate-400">
              신뢰와 전문성으로 의뢰인의 권리를 지킵니다.
              <br />
              20년 이상의 경험을 바탕으로 최선의 법률 서비스를 제공합니다.
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
                    className="text-base text-slate-400 transition-colors hover:text-gold-400"
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
                서울특별시 OOO구 OOO대로 OOO, OOO빌딩 OO층
              </li>
              <li>
                <span className="text-slate-500">전화</span>
                <br />
                02-OOO-OOOO
              </li>
              <li>
                <span className="text-slate-500">팩스</span>
                <br />
                02-OOO-OOOO
              </li>
              <li>
                <span className="text-slate-500">이메일</span>
                <br />
                contact@OOO-law.co.kr
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2025 법무법인 정율(正律). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
