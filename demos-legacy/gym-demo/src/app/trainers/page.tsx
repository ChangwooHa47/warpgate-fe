import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "PT 소개",
  description:
    "GRIT 전문 PT 트레이너를 소개합니다.",
};

const TRAINERS = [
  {
    name: "OOO 트레이너",
    specialty: "웨이트 / 체형교정",
    image: "/images/trainer-1.jpg",
    bio: "10년 이상의 현장 경험을 바탕으로 개인 맞춤형 근력 트레이닝을 설계합니다. 체형 불균형 교정에 특히 강점이 있으며, 재활 후 근력 회복 프로그램도 운영합니다.",
    credentials: [
      "NSCA-CPT (미국 근력체력학회 인증)",
      "체육학 석사 (서울대학교)",
      "前 국가대표 역도 코치",
      "체형교정 전문 자격 (KEMA)",
    ],
    philosophy: "올바른 자세가 모든 운동의 시작입니다. 기초를 탄탄하게 잡고, 그 위에 성과를 쌓아갑니다.",
  },
  {
    name: "OOO 트레이너",
    specialty: "필라테스 / 재활",
    image: "/images/trainer-2.jpg",
    bio: "필라테스와 재활 운동을 결합한 프로그램으로 부상 회복과 체형 교정을 돕습니다. 산전/산후 운동, 디스크 재활 등 특수 케이스 경험이 풍부합니다.",
    credentials: [
      "PMA 인증 필라테스 강사",
      "물리치료학 학사 (연세대학교)",
      "의료기관 재활 운동 5년 근무",
      "산전·산후 운동 전문 과정 수료",
    ],
    philosophy: "몸의 신호에 귀 기울이는 것이 진짜 운동입니다. 무리하지 않으면서도 확실하게 변화를 만듭니다.",
  },
  {
    name: "OOO 트레이너",
    specialty: "크로스핏 / 기능성 운동",
    image: "/images/trainer-3.jpg",
    bio: "기능성 훈련과 크로스핏을 통해 실생활에서 쓸 수 있는 체력을 만듭니다. 체계적인 컨디셔닝으로 초보자도 안전하게 고강도 운동에 참여할 수 있도록 이끕니다.",
    credentials: [
      "CrossFit Level 2 Trainer",
      "NASM-CPT (미국 스포츠의학회 인증)",
      "기능성 운동 전문가 (FMS Level 2)",
      "前 소방관 체력 트레이닝 코치",
    ],
    philosophy: "운동은 삶의 질을 높이는 도구입니다. 재미와 도전이 공존하는 훈련을 지향합니다.",
  },
];

const PT_PACKAGES = [
  { sessions: "10회", price: "650,000원", perSession: "65,000원" },
  { sessions: "20회", price: "1,200,000원", perSession: "60,000원" },
  { sessions: "30회", price: "1,650,000원", perSession: "55,000원" },
];

export default function TrainersPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-steel-100">PT 소개</h1>
        <p className="text-steel-500 text-sm mt-3 max-w-md">
          검증된 자격과 풍부한 경력의 트레이너가 1:1 맞춤 프로그램을 설계합니다.
        </p>
      </Section>

      {TRAINERS.map((trainer, idx) => (
        <Section
          key={trainer.name}
          className={`py-14 md:py-20 ${idx % 2 === 1 ? "bg-night-900" : ""}`}
        >
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
            <div className={`relative aspect-[3/4] overflow-hidden bg-night-700 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent" />
            </div>

            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-mint-400 text-xs tracking-wide mb-2">{trainer.specialty}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
                {trainer.name}
              </h2>
              <p className="text-steel-300 text-sm leading-relaxed mb-6">
                {trainer.bio}
              </p>

              <h3 className="text-xs tracking-wide text-steel-500 mb-3">자격 및 경력</h3>
              <ul className="space-y-2 mb-6">
                {trainer.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-steel-400">
                    <span className="text-night-500 select-none mt-px">—</span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="border-l-2 border-mint-500/50 pl-4">
                <p className="text-steel-400 text-sm italic leading-relaxed">
                  &ldquo;{trainer.philosophy}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* PT Packages */}
      <Section className="py-16 md:py-24 bg-night-900">
        <h2 className="text-lg font-semibold text-steel-100 mb-3">
          PT 패키지 가격
        </h2>
        <p className="text-steel-500 text-sm mb-8">
          멤버십과 별도 구매 · 트레이너 지정 가능
        </p>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl">
          {PT_PACKAGES.map((pkg) => (
            <div key={pkg.sessions} className="border border-night-600 bg-night-800 p-5">
              <p className="text-steel-500 text-xs mb-2">{pkg.sessions}</p>
              <p className="text-xl font-bold text-steel-100 mb-1">{pkg.price}</p>
              <p className="text-mint-400 text-xs">회당 {pkg.perSession}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            무료 체험 PT 신청
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8">
            첫 방문 회원에게 1회 무료 PT를 제공합니다.
            <br />
            트레이너와 상담 후 나에게 맞는 프로그램을 찾아보세요.
          </p>
          <Button href="/register">무료 체험 신청하기</Button>
        </div>
      </Section>
    </>
  );
}
