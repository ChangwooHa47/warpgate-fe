import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      {/* Main footer */}
      <div className="container-main py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3
                className="text-2xl tracking-[0.3em] text-white mb-8"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                PREMIA
              </h3>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              최고의 브랜드와 서비스로
              <br />
              당신의 라이프스타일을 완성합니다.
            </p>
            <div className="flex gap-4 mt-8">
              {["instagram", "youtube", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-all"
                >
                  <span className="text-xs uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base text-white mb-6 tracking-wide">고객 서비스</h4>
            <ul className="space-y-4">
              {[
                { label: "이용약관", href: "/service" },
                { label: "개인정보처리방침", href: "/service" },
                { label: "이메일무단수집거부", href: "/service" },
                { label: "고객의 소리", href: "/service" },
                { label: "분실물 센터", href: "/service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base text-white mb-6 tracking-wide">매장 안내</h4>
            <ul className="space-y-4">
              {[
                "본점",
                "강남점",
                "센텀시티점",
                "대구점",
                "광주점",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/stores"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base text-white mb-6 tracking-wide">고객센터</h4>
            <p className="text-3xl text-white font-light mb-3">1588-0000</p>
            <p className="text-sm text-gray-500 leading-loose">
              운영시간: 09:00 - 18:00
              <br />
              (점심시간: 12:00 - 13:00)
              <br />
              토/일/공휴일 휴무
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; 2026 PREMIA Department Store. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/service"
              className="text-sm text-gray-600 hover:text-gray-400 transition-colors"
            >
              이용약관
            </Link>
            <Link
              href="/service"
              className="text-sm text-gray-600 hover:text-gray-400 transition-colors font-medium"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/service"
              className="text-sm text-gray-600 hover:text-gray-400 transition-colors"
            >
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
