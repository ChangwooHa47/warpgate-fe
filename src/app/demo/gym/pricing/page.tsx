import type { Metadata } from "next";
import Section from "../_components/Section";
import PricingCard from "../_components/PricingCard";
import Card from "../_components/Card";
import Button from "../_components/Button";
import { BASE_PATH } from "../_lib/constants";

export const metadata: Metadata = {
  title: "가격표 - FIT ZONE",
  description: "FIT ZONE의 멤버십, PT, 프로그램 가격 안내입니다.",
};

const MEMBERSHIPS = [
  {
    title: "1개월",
    price: "12만원",
    period: "월",
    features: [
      "모든 운동 시설 이용",
      "기본 락커 제공",
      "그룹 수업 무료 참여",
      "무료 주차",
    ],
  },
  {
    title: "6개월",
    price: "49만원",
    period: "6개월",
    features: [
      "모든 운동 시설 이용",
      "프리미엄 락커 제공",
      "그룹 수업 무료 참여",
      "무료 주차",
      "운동복 대여 서비스",
      "인바디 측정 월 1회",
    ],
    isBest: true,
  },
  {
    title: "12개월",
    price: "79만원",
    period: "년",
    features: [
      "모든 운동 시설 이용",
      "프리미엄 락커 제공",
      "그룹 수업 무료 참여",
      "무료 주차",
      "운동복 대여 서비스",
      "인바디 측정 무제한",
      "PT 2회 무료 제공",
    ],
  },
];

const PT_PACKAGES = [
  {
    sessions: "10회",
    price: "50만원",
    perSession: "5만원/회",
    duration: "2개월 유효",
  },
  {
    sessions: "20회",
    price: "90만원",
    perSession: "4.5만원/회",
    duration: "4개월 유효",
  },
  {
    sessions: "30회",
    price: "120만원",
    perSession: "4만원/회",
    duration: "6개월 유효",
  },
];

const ADDITIONAL_OPTIONS = [
  { name: "GX 전용 패스 (월)", price: "5만원" },
  { name: "프리미엄 락커 업그레이드 (월)", price: "3만원" },
  { name: "운동복 대여 서비스 (월)", price: "2만원" },
  { name: "개인 트레이닝 1회", price: "7만원" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-100 mb-4">
            가격표
          </h1>
          <p className="text-steel-400 max-w-2xl mx-auto">
            합리적인 가격으로 프리미엄 피트니스를 경험하세요
          </p>
        </div>
      </section>

      {/* Membership */}
      <Section className="bg-night-950">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            멤버십
          </h2>
          <p className="text-steel-400">기간별 멤버십 플랜</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERSHIPS.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isBest={plan.isBest}
              delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* PT Packages */}
      <Section className="bg-night-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            PT 패키지
          </h2>
          <p className="text-steel-400">
            전문 트레이너의 1:1 개인 트레이닝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PT_PACKAGES.map((pkg, index) => (
            <Card key={pkg.sessions} delay={index * 100} className="p-6">
              <h3 className="text-xl font-bold text-steel-100 mb-2">
                {pkg.sessions}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-mint-400">
                  {pkg.price}
                </span>
              </div>
              <div className="space-y-2 text-sm text-steel-400 mb-6">
                <p>회당 {pkg.perSession}</p>
                <p>{pkg.duration}</p>
              </div>
              <Button
                href={`${BASE_PATH}/register`}
                variant="secondary"
                className="w-full"
              >
                상담 신청
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Additional Options */}
      <Section className="bg-night-950">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            추가 옵션
          </h2>
          <p className="text-steel-400">필요에 따라 선택하세요</p>
        </div>

        <Card className="overflow-hidden">
          <div className="divide-y divide-night-800">
            {ADDITIONAL_OPTIONS.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between p-4 md:p-6"
              >
                <span className="text-steel-200">{option.name}</span>
                <span className="font-semibold text-mint-400">
                  {option.price}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="bg-mint-500 text-night-950">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            첫 방문 고객 특별 혜택
          </h2>
          <p className="text-night-700 mb-8">
            무료 체험 + 인바디 측정 + 맞춤 운동 상담
          </p>
          <Button
            href={`${BASE_PATH}/register`}
            className="bg-night-950 text-mint-400 hover:bg-night-900"
          >
            무료 체험 신청하기
          </Button>
        </div>
      </Section>
    </>
  );
}
