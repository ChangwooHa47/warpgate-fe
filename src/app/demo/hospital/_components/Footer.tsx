import Link from "next/link";
import { SITE } from "../_data/siteData";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-500 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hospital info */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 tracking-tight">{SITE.name}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-gray-400 shrink-0 w-[6.5rem]">대표자</span>
                <span>{SITE.ceo}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 shrink-0 w-[6.5rem]">사업자등록번호</span>
                <span>{SITE.businessNumber}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 shrink-0 w-[6.5rem]">주소</span>
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 shrink-0 w-[6.5rem]">연락처</span>
                <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="text-gray-800 font-medium hover:underline">{SITE.phone}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 tracking-tight">진료 시간</h3>
            <ul className="space-y-2 text-sm max-w-[220px]">
              <li className="flex">
                <span className="text-gray-400">평일</span>
                <span className="ml-auto">{SITE.hours.weekday}</span>
              </li>
              <li className="flex">
                <span className="text-gray-400">토요일</span>
                <span className="ml-auto">{SITE.hours.saturday}</span>
              </li>
              <li className="flex">
                <span className="text-gray-400">점심시간</span>
                <span className="ml-auto">{SITE.hours.lunch}</span>
              </li>
              <li className="flex">
                <span className="text-gray-400">일요일·공휴일</span>
                <span className="ml-auto text-red-500">휴진</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 tracking-tight">바로가기</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/demo/hospital/appointment" className="hover:text-gray-800 transition inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#1780e8] transition" />
                  진료 예약
                </Link>
              </li>
              <li>
                <Link href="/demo/hospital/directions" className="hover:text-gray-800 transition inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#1780e8] transition" />
                  오시는 길
                </Link>
              </li>
              <li>
                <Link href="/demo/hospital/notices" className="hover:text-gray-800 transition inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#1780e8] transition" />
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/demo/hospital/contact" className="hover:text-gray-800 transition inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#1780e8] transition" />
                  상담·문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex gap-6 mb-2 md:mb-0">
            <span>개인정보처리방침</span>
            <span>이용약관</span>
          </div>
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
