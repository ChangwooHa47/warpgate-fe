import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "프로그램",
  description:
    "GRIT의 웨이트 트레이닝, 유산소, 그룹 운동 프로그램을 소개합니다.",
};

const PROGRAMS = [
  {
    title: "웨이트 트레이닝",
    subtitle: "Weight Training",
    image: "/images/program-weight.jpg",
    description:
      "최신 해머스트렝스, 테크노짐 장비를 갖춘 프리웨이트&머신 존에서 체계적인 근력 운동을 경험하세요. 초보자부터 숙련자까지 레벨에 맞는 프로그램을 운영합니다.",
    details: [
      "프리웨이트 존: 파워랙 8대, 덤벨 2~50kg 풀세트",
      "머신 존: 테크노짐 셀렉션 라인업 20종 이상",
      "스트렝스 존: 데드리프트 플랫폼, 올림픽 바벨",
      "초보자 오리엔테이션 제공 (등록 시 1회 무료)",
    ],
    schedule: "매일 06:00 ~ 24:00 자유 이용",
  },
  {
    title: "유산소 프로그램",
    subtitle: "Cardio",
    image: "/images/program-cardio.jpg",
    description:
      "러닝머신, 사이클, 로잉머신, 스텝퍼 등 다양한 유산소 장비로 심폐 기능 강화와 체지방 감소를 동시에 달성하세요. 개인 모니터로 넷플릭스/유튜브 시청이 가능합니다.",
    details: [
      "러닝머신 20대 (개인 터치 모니터 장착)",
      "스피닝 바이크 15대, 리컴번트 바이크 10대",
      "컨셉2 로잉머신 8대, 스텝퍼 6대",
      "심박수 기반 맞춤 유산소 프로그램 제공",
    ],
    schedule: "매일 06:00 ~ 24:00 자유 이용",
  },
  {
    title: "그룹 운동",
    subtitle: "Group Fitness",
    image: "/images/program-group.jpg",
    description:
      "요가, 필라테스, 크로스핏, 스피닝, 바디펌프 등 다양한 그룹 수업을 운영합니다. 함께하는 에너지로 꾸준한 운동 습관을 만들어 보세요.",
    details: [
      "요가 (하타/빈야사) — 월/수/금 07:00, 19:00",
      "필라테스 (매트/기구) — 화/목 10:00, 18:00",
      "크로스핏 — 월~금 06:30, 20:00",
      "스피닝 — 화/목/토 07:00, 19:30",
      "바디펌프 — 수/금 12:00, 토 10:00",
    ],
    schedule: "주 5~6회 운영, 앱 예약 필수",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-steel-100">프로그램</h1>
        <p className="text-steel-500 text-sm mt-3 max-w-md">
          목표에 맞는 최적의 프로그램을 선택하세요.
        </p>
      </Section>

      {PROGRAMS.map((program, idx) => (
        <Section
          key={program.title}
          className={`py-14 md:py-20 ${idx % 2 === 1 ? "bg-night-900" : ""}`}
        >
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
            <div className={`relative aspect-[4/3] overflow-hidden bg-night-800 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-mint-400 text-xs tracking-wide mb-2">
                {program.subtitle}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
                {program.title}
              </h2>
              <p className="text-steel-400 text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              <ul className="space-y-2 mb-6">
                {program.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm text-steel-500">
                    <span className="text-night-500 select-none mt-px">—</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <p className="text-steel-600 text-xs border-t border-night-700 pt-4 flex items-center gap-2">
                <ClockIcon />
                {program.schedule}
              </p>
            </div>
          </div>
        </Section>
      ))}

      <Section className="py-20 md:py-28 bg-night-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            어떤 프로그램이 맞을지 모르겠다면?
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8">
            무료 체험 PT를 통해 전문 트레이너와 상담 후
            나에게 맞는 프로그램을 추천받으세요.
          </p>
          <Button href="/register">무료 체험 신청하기</Button>
        </div>
      </Section>
    </>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
