import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section className="py-8 px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg px-7 py-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-gray-900">
                매물 상담이 필요하세요?
              </p>
              <p className="text-[14px] text-gray-500 mt-0.5">
                전문 컨설턴트가 맞춤 매물을 추천해드립니다 · 평일 09:00-18:00
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:02-1234-5678"
              className="px-5 py-2.5 text-[15px] font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              02-1234-5678
            </a>
            <Link
              href="/consultation"
              className="px-5 py-2.5 text-[15px] font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
            >
              상담 예약
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
