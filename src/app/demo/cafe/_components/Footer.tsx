import Link from "next/link";

const CAFE_BASE = "/demo/cafe";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Blog", href: "https://blog.naver.com" },
  { label: "KakaoTalk", href: "https://pf.kakao.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-latte/40 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <Link
            href={CAFE_BASE}
            className="font-serif text-lg text-espresso hover:text-caramel transition-colors"
          >
            Mellow
          </Link>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-6">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-caramel transition-colors text-xs tracking-wide"
                >
                  {link.label}
                </a>
                {i < socialLinks.length - 1 && (
                  <span className="w-0.5 h-0.5 rounded-full bg-latte" />
                )}
              </span>
            ))}
          </div>

          <p className="text-warm-gray text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Mellow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
