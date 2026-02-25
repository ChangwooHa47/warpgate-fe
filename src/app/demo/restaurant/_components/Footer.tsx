import Link from "next/link";

/** Base path for all restaurant demo routes */
const RESTAURANT_BASE = "/demo/restaurant";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-ivory-200">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid gap-12 md:gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href={RESTAURANT_BASE}
              className="text-2xl font-logo font-normal tracking-[0.15em] text-charcoal-700"
            >
              소담
            </Link>
            <p className="mt-3 text-sm text-stone-500 leading-relaxed max-w-[220px]">
              제철 식재료로 정성껏 차린
              <br />
              전통 한정식.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href={RESTAURANT_BASE} className="text-sm text-stone-600 hover:text-charcoal-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`${RESTAURANT_BASE}/menu`} className="text-sm text-stone-600 hover:text-charcoal-700 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href={`${RESTAURANT_BASE}/reservation`} className="text-sm text-stone-600 hover:text-charcoal-700 transition-colors">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-5">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-stone-600">
              <p>서울특별시 강남구 테헤란로 79길 V582 6</p>
              <p>
                <a href="tel:+8220000000" className="hover:text-charcoal-700 transition-colors">
                  02-000-0000
                </a>
              </p>
              <p>
                <a href="mailto:hello@nws.xyz" className="hover:text-charcoal-700 transition-colors">
                  hello@nws.xyz
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-5">
              Social
            </h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li>
                <a href="#" className="hover:text-charcoal-700 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal-700 transition-colors">
                  Naver Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal-700 transition-colors">
                  KakaoTalk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-stone-300">
          <p className="text-[11px] text-stone-400 text-center tracking-wider">
            &copy; {new Date().getFullYear()} 소담. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
