import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-28">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div>
            <p className="text-[15px] tracking-[0.25em] font-light mb-4">
              ORDINAR
            </p>
            <p className="text-[13px] text-muted leading-relaxed">
              일상을 위한 선택.
              <br />
              Selected for everyday life.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="text-[11px] text-muted mb-5 tracking-[0.2em] uppercase">
                Shop
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/demo/ecommerce/products?category=apparel"
                  className="text-[13px] text-muted hover:text-primary transition-colors"
                >
                  Apparel
                </Link>
                <Link
                  href="/demo/ecommerce/products?category=home"
                  className="text-[13px] text-muted hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/demo/ecommerce/products?category=desk"
                  className="text-[13px] text-muted hover:text-primary transition-colors"
                >
                  Desk
                </Link>
                <Link
                  href="/demo/ecommerce/products?category=wellness"
                  className="text-[13px] text-muted hover:text-primary transition-colors"
                >
                  Wellness
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-muted mb-5 tracking-[0.2em] uppercase">
                Info
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/demo/ecommerce/about"
                  className="text-[13px] text-muted hover:text-primary transition-colors"
                >
                  About
                </Link>
                <span className="text-[13px] text-muted">배송 안내</span>
                <span className="text-[13px] text-muted">교환 · 반품</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line">
          <p className="text-[11px] text-muted">
            &copy; 2024 ORDINAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
