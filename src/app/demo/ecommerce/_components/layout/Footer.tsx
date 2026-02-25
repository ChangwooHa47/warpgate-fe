import Link from "next/link";

const BASE_PATH = "/demo/ecommerce";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-lg tracking-[0.3em] font-light uppercase mb-4">
              Mono
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Minimal, thoughtful living.
              <br />
              Less is more.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <p className="text-xs tracking-wider uppercase text-muted mb-4">
              Shop
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`${BASE_PATH}/products`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  전체 제품
                </Link>
              </li>
              <li>
                <Link
                  href={`${BASE_PATH}/products?category=apparel`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  의류
                </Link>
              </li>
              <li>
                <Link
                  href={`${BASE_PATH}/products?category=home`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href={`${BASE_PATH}/products?category=desk`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  데스크
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <p className="text-xs tracking-wider uppercase text-muted mb-4">
              Information
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`${BASE_PATH}/orders`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  주문 조회
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted">배송 안내</span>
              </li>
              <li>
                <span className="text-sm text-muted">교환/반품</span>
              </li>
              <li>
                <span className="text-sm text-muted">고객센터</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-line">
          <p className="text-xs text-muted">
            &copy; 2024 MONO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
