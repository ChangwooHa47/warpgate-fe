import type { Metadata } from "next";
import Section from "@/components/Section";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "회원 등록",
  description:
    "GRIT 헬스장 회원 등록. 프리미엄 시설과 전문 트레이너의 케어를 경험하세요.",
};

export default function RegisterPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-mint-400 mb-4">
          Registration
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-steel-100 mb-6">
          회원 등록
        </h1>
        <div className="w-10 h-0.5 bg-mint-500 mx-auto mb-6" />
        <p className="max-w-lg mx-auto text-steel-400 text-sm md:text-base leading-relaxed">
          아래 양식을 작성해 주시면 담당자가 빠르게 연락드리겠습니다.
        </p>
      </Section>

      <Section className="pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          {/* 안내사항 */}
          <div className="border border-night-600 bg-night-800 p-6 md:p-8 mb-10 md:mb-12">
            <h2 className="text-lg font-semibold text-steel-100 mb-5">
              등록 안내사항
            </h2>
            <ul className="space-y-4 text-sm text-steel-400 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-mint-400 mt-0.5 shrink-0" aria-hidden="true">&mdash;</span>
                <span>
                  첫 등록 시 무료 체험 PT 1회를 제공합니다.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mint-400 mt-0.5 shrink-0" aria-hidden="true">&mdash;</span>
                <span>
                  등록 후 24시간 이내에 담당자가 연락드립니다.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mint-400 mt-0.5 shrink-0" aria-hidden="true">&mdash;</span>
                <span>
                  운동복과 수건은 센터에서 제공됩니다. (3개월 이상 등록 시)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mint-400 mt-0.5 shrink-0" aria-hidden="true">&mdash;</span>
                <span>
                  문의사항은{" "}
                  <a
                    href="tel:+8220001234"
                    className="text-mint-400 hover:text-mint-400 underline underline-offset-2 decoration-night-600"
                  >
                    02-000-1234
                  </a>
                  로 연락해 주세요.
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <RegisterForm />
        </div>
      </Section>
    </>
  );
}
