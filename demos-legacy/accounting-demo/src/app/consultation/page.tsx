import { Suspense } from "react";
import type { Metadata } from "next";
import ConsultationForm from "@/components/consultation/ConsultationForm";

export const metadata: Metadata = {
  title: "세무 상담",
  description: "한울 세무회계의 온라인 세무 상담 예약 서비스. 전문 세무사에게 무료 상담을 받아보세요.",
};

export default function ConsultationPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium tracking-wider text-accent-400 uppercase">
            Consultation
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            세무 상담 예약
          </h1>
          <div className="divider mb-6" />
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            온라인으로 간편하게 세무 상담을 예약하세요.
            전문 세무사가 확인 후 연락드리겠습니다.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Info Box */}
          <div className="mb-8 rounded-lg border border-accent-200 bg-accent-50 p-6">
            <h3 className="mb-2 text-base font-bold text-accent-600">
              상담 안내
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm text-accent-600">
              <li>• 상담 예약 후 1영업일 이내에 담당 세무사가 연락드립니다.</li>
              <li>• 초기 상담은 무료로 진행됩니다.</li>
              <li>• 긴급 상담이 필요한 경우 전화(02-OOO-OOOO)로 문의해 주세요.</li>
            </ul>
          </div>

          <Suspense>
            <ConsultationForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
