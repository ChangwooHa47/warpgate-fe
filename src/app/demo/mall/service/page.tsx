import type { Metadata } from "next";
import PageHeader from "../_components/PageHeader";

export const metadata: Metadata = {
  title: "고객 서비스 | PREMIA",
  description: "PREMIA 백화점 고객센터, 이용안내, 문의",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader label="CUSTOMER SERVICE" title="고객 서비스" />
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-4xl text-gray-900 font-light mb-4">1588-0000</p>
            <p className="text-base text-gray-500 leading-loose mb-12">
              운영시간: 09:00 - 18:00 (점심시간: 12:00 - 13:00)
              <br />
              토/일/공휴일 휴무
            </p>
            <div className="w-12 h-px bg-[#b8965a] mx-auto mb-12" />
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-8 bg-[#f8f7f5]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b8965a"
                  strokeWidth="1.5"
                  className="mx-auto mb-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h3 className="text-base text-gray-900 mb-2">전화 문의</h3>
                <p className="text-sm text-gray-500">1588-0000</p>
              </div>
              <div className="p-8 bg-[#f8f7f5]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b8965a"
                  strokeWidth="1.5"
                  className="mx-auto mb-4"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <h3 className="text-base text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-sm text-gray-500">cs@premia.co.kr</p>
              </div>
              <div className="p-8 bg-[#f8f7f5]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b8965a"
                  strokeWidth="1.5"
                  className="mx-auto mb-4"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-base text-gray-900 mb-2">1:1 채팅 상담</h3>
                <p className="text-sm text-gray-500">실시간 상담 가능</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
