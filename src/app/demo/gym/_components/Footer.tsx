import Link from "next/link";
import { NAV_ITEMS } from "../_data/menu";
import { BASE_PATH } from "../_lib/constants";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "KakaoTalk", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-night-900 border-t border-night-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href={BASE_PATH}
              className="text-2xl font-bold text-steel-100"
            >
              FIT<span className="text-mint-400">ZONE</span>
            </Link>
            <p className="mt-4 text-sm text-steel-500 max-w-md">
              최신 시설과 전문 트레이너가 함께하는 강남 프리미엄 피트니스 센터.
              체계적인 운동 프로그램으로 건강한 변화를 경험하세요.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-steel-200 mb-4">메뉴</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-steel-500 hover:text-mint-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-steel-200 mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-steel-500">
              <li>서울 강남구 테헤란로 123</li>
              <li>
                <a href="tel:02-1234-5678" className="hover:text-mint-400 transition-colors">
                  02-1234-5678
                </a>
              </li>
              <li>매일 06:00 - 24:00</li>
            </ul>

            <h3 className="text-sm font-semibold text-steel-200 mt-6 mb-4">소셜</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-steel-500 hover:text-mint-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-night-800">
          <p className="text-sm text-steel-500 text-center">
            © 2024 FITZONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
