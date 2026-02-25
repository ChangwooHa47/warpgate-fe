import type { Metadata } from "next";
import Section from "../_components/Section";
import Card from "../_components/Card";
import Button from "../_components/Button";
import { BASE_PATH } from "../_lib/constants";

export const metadata: Metadata = {
  title: "프로그램 소개 - FIT ZONE",
  description: "웨이트 트레이닝, 유산소, 그룹 운동 등 다양한 피트니스 프로그램을 소개합니다.",
};

const PROGRAMS = [
  {
    title: "웨이트 트레이닝",
    icon: "💪",
    description: "체계적인 근력 운동으로 이상적인 몸을 만들어보세요.",
    details: [
      "최신 프리웨이트 & 머신 장비",
      "전문 트레이너의 자세 교정",
      "개인별 맞춤 운동 프로그램",
      "초보자부터 고급자까지",
    ],
    schedule: "매일 06:00 - 24:00",
  },
  {
    title: "유산소 프로그램",
    icon: "🏃",
    description: "심폐 기능 강화와 체지방 감소를 위한 효과적인 유산소 운동.",
    details: [
      "러닝머신, 바이크, 로잉머신",
      "HIIT 고강도 인터벌 트레이닝",
      "실시간 심박수 모니터링",
      "체지방 감량 전문 프로그램",
    ],
    schedule: "매일 06:00 - 24:00",
  },
  {
    title: "그룹 운동",
    icon: "👥",
    description: "함께하는 즐거움으로 운동 습관을 만들어보세요.",
    details: [
      "스피닝, 요가, 필라테스",
      "줌바, 에어로빅 클래스",
      "소수 정예 그룹 레슨",
      "회원 무료 참여",
    ],
    schedule: "평일 07:00, 19:00 / 주말 10:00",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-100 mb-4">
            프로그램 소개
          </h1>
          <p className="text-steel-400 max-w-2xl mx-auto">
            목표에 맞는 다양한 프로그램으로 건강한 변화를 경험하세요
          </p>
        </div>
      </section>

      {/* Programs */}
      <Section className="bg-night-950">
        <div className="space-y-12">
          {PROGRAMS.map((program, index) => (
            <Card
              key={program.title}
              delay={index * 100}
              className="p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Icon & Title */}
                <div className="lg:col-span-1">
                  <span className="text-5xl mb-4 block">{program.icon}</span>
                  <h2 className="text-2xl font-bold text-steel-100 mb-2">
                    {program.title}
                  </h2>
                  <p className="text-steel-400">{program.description}</p>
                </div>

                {/* Details */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-mint-400 uppercase tracking-wider mb-4">
                    프로그램 특징
                  </h3>
                  <ul className="space-y-3">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-steel-300"
                      >
                        <svg
                          className="w-5 h-5 text-mint-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & CTA */}
                <div className="lg:col-span-1 lg:text-right">
                  <h3 className="text-sm font-semibold text-mint-400 uppercase tracking-wider mb-4">
                    운영 시간
                  </h3>
                  <p className="text-steel-300 mb-6">{program.schedule}</p>
                  <Button href={`${BASE_PATH}/register`} variant="secondary">
                    체험 신청
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-night-900">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            어떤 프로그램이 맞을지 고민되시나요?
          </h2>
          <p className="text-steel-400 mb-8">
            무료 상담을 통해 나에게 맞는 운동 플랜을 찾아보세요
          </p>
          <Button href={`${BASE_PATH}/register`}>무료 상담 신청</Button>
        </div>
      </Section>
    </>
  );
}
