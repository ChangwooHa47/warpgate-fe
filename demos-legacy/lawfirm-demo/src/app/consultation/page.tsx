import type { Metadata } from "next";
import ConsultationForm from "@/components/consultation/ConsultationForm";

export const metadata: Metadata = {
  title: "상담 예약",
  description: "법무법인 정율에 온라인 법률 상담을 예약하세요.",
};

export default function ConsultationPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-400 uppercase">
            Consultation
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-slate-50 md:text-5xl">
            상담 예약
          </h1>
          <div className="divider mx-auto" />
          <p className="mt-6 text-xl text-slate-300">
            온라인으로 간편하게 법률 상담을 예약하세요.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-3xl px-6">
          {/* Info Box */}
          <div className="mb-10 rounded-lg border border-gold-200 bg-gold-50 p-8">
            <h3 className="mb-3 font-serif text-xl font-bold text-navy-900">
              상담 안내
            </h3>
            <ul className="flex flex-col gap-3 text-base text-slate-600">
              <li>· 초기 상담은 무료로 진행됩니다.</li>
              <li>· 예약 후 담당 변호사가 확인 연락을 드립니다.</li>
              <li>
                · 상담 시간은 평일 09:00 ~ 18:00 입니다. (점심시간 12:00 ~
                13:00)
              </li>
              <li>· 긴급 상담이 필요하신 경우 02-OOO-OOOO로 연락해 주세요.</li>
            </ul>
          </div>

          {/* Form */}
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
