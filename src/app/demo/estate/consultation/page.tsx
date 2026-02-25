"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ConsultationForm from "../_components/consultation/ConsultationForm";

function ConsultationContent() {
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId") || undefined;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Info */}
        <div>
          <p className="text-primary text-sm font-semibold mb-2">
            Free Consultation
          </p>
          <h1 className="text-3xl font-bold mb-4">무료 상담 예약</h1>
          <p className="text-muted leading-relaxed mb-8">
            부동산 전문 컨설턴트가 매물 추천부터 계약, 입주까지
            <br />
            원스톱으로 도와드립니다.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "실매물 검증",
                desc: "모든 매물은 현장 확인을 거쳐 등록됩니다",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
                title: "전문 컨설턴트 배정",
                desc: "10년 이상 경력의 전문가가 1:1로 담당합니다",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
                title: "계약 안전 지원",
                desc: "계약서 검토, 등기 이전, 세금 상담까지 지원합니다",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-10 bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">직접 연락하기</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@hangyeol.co.kr</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>평일 09:00 - 18:00 (주말/공휴일 휴무)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <ConsultationForm defaultPropertyId={propertyId} />
        </div>
      </div>
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <Suspense>
      <ConsultationContent />
    </Suspense>
  );
}
