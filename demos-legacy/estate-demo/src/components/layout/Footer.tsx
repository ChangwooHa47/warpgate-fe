import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-[11px]">한</span>
              </div>
              <span className="text-[15px] font-bold">강남한결부동산</span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              서울특별시 강남구 테헤란로 123 · 02-1234-5678
              <br />
              사업자등록번호 000-00-00000 · 대표 홍길동
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-[13px] font-semibold text-gray-600 uppercase tracking-wider mb-3">서비스</h3>
              <ul className="space-y-2">
                {[
                  { href: "/properties", label: "매물 검색" },
                  { href: "/areas", label: "지역 정보" },
                  { href: "/consultation", label: "상담 예약" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[14px] text-gray-500 hover:text-gray-800 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-gray-600 uppercase tracking-wider mb-3">지역</h3>
              <ul className="space-y-2">
                {["강남구", "서초구", "송파구", "용산구"].map((area) => (
                  <li key={area}>
                    <Link href="/areas" className="text-[14px] text-gray-500 hover:text-gray-800 transition-colors">
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-100 text-[13px] text-gray-500">
          &copy; 2025 강남한결부동산. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
