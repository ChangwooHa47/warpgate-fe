import Link from "next/link";
import { NAV_ITEMS } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="border-t border-night-600 bg-night-900">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid gap-12 md:gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-steel-100"
            >
              GRIT
            </Link>
            <p className="mt-3 text-sm text-steel-500 leading-relaxed max-w-[240px]">
              당신의 한계를 넘어서는 공간.
              <br />
              최첨단 시설과 전문 트레이너.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-steel-500 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  {href.startsWith("/register") ? (
                    <Link href={href} className="text-sm text-steel-400 hover:text-mint-400 transition-colors">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="text-sm text-steel-400 hover:text-mint-400 transition-colors">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-steel-500 mb-5">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-steel-400">
              <p>서울특별시 강남구 테헤란로 123</p>
              <p>
                <a href="tel:+8220001234" className="hover:text-mint-400 transition-colors">
                  02-000-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@grit.kr" className="hover:text-mint-400 transition-colors">
                  info@grit.kr
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-steel-500 mb-5">
              Social
            </h4>
            <ul className="space-y-3 text-sm text-steel-400">
              <li>
                <a href="#" className="hover:text-mint-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mint-400 transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mint-400 transition-colors">
                  KakaoTalk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-night-600">
          <p className="text-[11px] text-steel-500 text-center tracking-wider">
            &copy; {new Date().getFullYear()} GRIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
