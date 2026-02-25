import type { Metadata } from "next";
import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "가격표",
  description: "GRIT 멤버십, PT, 프로그램 가격 안내.",
};

const PT_PACKAGES = [
  { sessions: "10회", price: "₩900,000", perSession: "회당 ₩90,000" },
  { sessions: "20회", price: "₩1,700,000", perSession: "회당 ₩85,000" },
  { sessions: "30회", price: "₩2,400,000", perSession: "회당 ₩80,000" },
];

const PT_BENEFITS = [
  "체형 분석 1회 포함",
  "기본 식단 가이드 제공",
  "유효기간 6개월",
];

const PROGRAMS = [
  {
    title: "8 Week Fat Loss Program",
    price: "₩2,200,000",
    description: "주 3회 PT + 식단 코칭 + 체성분 관리",
  },
  {
    title: "Body Profile Package",
    price: "₩3,200,000",
    description: "주 3회 PT + 식단 관리 + 촬영 디렉션",
  },
  {
    title: "Beginner Start Program (4주)",
    price: "₩750,000",
    description: "주 2회 PT + 운동 루틴 설계",
  },
];

const OPTIONS = [
  { label: "개인 락커", price: "₩30,000 / 월" },
  { label: "운동복 대여", price: "₩20,000 / 월" },
  { label: "인바디 단독 측정", price: "₩10,000 / 회" },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-steel-100">가격표</h1>
        <p className="text-steel-500 text-sm mt-3 max-w-md">
          나에게 맞는 플랜을 선택하세요. 장기 등록일수록 더 큰 혜택을 드립니다.
        </p>
      </Section>

      {/* Membership */}
      <Section className="pb-20 md:pb-28">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-mint-400 mb-8">
          Membership
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <PricingCard
            title="1개월"
            price="₩150,000"
            features={[
              "자유 이용",
              "24시간 출입",
              "샤워실 이용",
            ]}
          />
          <PricingCard
            title="3개월"
            price="₩420,000"
            features={[
              "자유 이용",
              "24시간 출입",
              "인바디 1회 포함",
            ]}
          />
          <PricingCard
            title="6개월"
            price="₩780,000"
            popular
            features={[
              "자유 이용",
              "인바디 월 1회",
              "운동복 대여 포함",
            ]}
          />
          <PricingCard
            title="12개월"
            price="₩1,380,000"
            features={[
              "1개월 추가 제공",
              "인바디 월 1회",
              "개인 락커 포함",
            ]}
          />
        </div>
      </Section>

      {/* Personal Training */}
      <Section className="py-16 md:py-24 bg-night-900">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-mint-400 mb-8">
          Personal Training
        </h2>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl">
          {PT_PACKAGES.map((pkg) => (
            <div key={pkg.sessions} className="border border-night-600 bg-night-800 p-6">
              <p className="text-steel-500 text-xs mb-2">{pkg.sessions}</p>
              <p className="text-2xl font-bold text-steel-100 mb-1">{pkg.price}</p>
              <p className="text-mint-400 text-xs">{pkg.perSession}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-2 max-w-3xl">
          {PT_BENEFITS.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-steel-400">
              <svg
                className="w-4 h-4 text-mint-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </Section>

      {/* Programs */}
      <Section className="py-16 md:py-24">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-mint-400 mb-8">
          Programs
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="border border-night-600 bg-night-800/50 p-6 md:p-8"
            >
              <h3 className="text-base font-semibold text-steel-100 mb-3">
                {program.title}
              </h3>
              <p className="text-2xl font-bold text-steel-100 mb-3">
                {program.price}
              </p>
              <p className="text-steel-500 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Options */}
      <Section className="py-16 md:py-24 bg-night-900">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-mint-400 mb-8">
          Options
        </h2>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl">
          {OPTIONS.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between border border-night-600 bg-night-800 px-6 py-5"
            >
              <span className="text-sm text-steel-300">{opt.label}</span>
              <span className="text-sm font-semibold text-steel-100">{opt.price}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            시작할 준비가 되셨나요?
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8">
            온라인으로 간편하게 등록하고 바로 운동을 시작하세요.
          </p>
          <Button href="/register">회원 등록하기</Button>
        </div>
      </Section>
    </>
  );
}
