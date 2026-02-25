import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-8 md:px-12 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Brand */}
          <div>
            <h3
              className="text-2xl font-extrabold tracking-tight mb-3 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prime
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              고등 수학 전문
              <br />
              내신 · 수능 · 개념 · 실전
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex gap-16">
            <div className="space-y-3">
              <h4 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Menu</h4>
              <Link href="/#about" className="block text-sm text-gray-400 hover:text-white transition-colors">소개</Link>
              <Link href="/courses" className="block text-sm text-gray-400 hover:text-white transition-colors">수업안내</Link>
              <Link href="/schedule" className="block text-sm text-gray-400 hover:text-white transition-colors">시간표</Link>
              <Link href="/teachers" className="block text-sm text-gray-400 hover:text-white transition-colors">강사진</Link>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Programs</h4>
              <Link href="/courses#course-01" className="block text-sm text-gray-400 hover:text-white transition-colors">고1 정규반</Link>
              <Link href="/courses#course-02" className="block text-sm text-gray-400 hover:text-white transition-colors">고2 정규반</Link>
              <Link href="/courses#course-03" className="block text-sm text-gray-400 hover:text-white transition-colors">고3 수능반</Link>
              <Link href="/courses#course-04" className="block text-sm text-gray-400 hover:text-white transition-colors">내신 특강</Link>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Contact</h4>
            <p className="text-sm text-gray-400">서울특별시 강남구 대치동</p>
            <a href="tel:02-000-0000" className="block text-sm text-gray-400 hover:text-white transition-colors">
              TEL 02-000-0000
            </a>
            <p className="text-sm text-gray-400">상담시간 평일 14:00 - 22:00</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">&copy; 2025 Prime Math Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">개인정보처리방침</Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
