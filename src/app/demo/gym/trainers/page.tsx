import type { Metadata } from "next";
import Section from "../_components/Section";
import Card from "../_components/Card";
import Button from "../_components/Button";
import { BASE_PATH } from "../_lib/constants";

export const metadata: Metadata = {
  title: "PT 소개 - FIT ZONE",
  description: "FIT ZONE의 전문 트레이너를 소개합니다.",
};

const TRAINERS = [
  {
    name: "김민수",
    title: "수석 트레이너",
    specialty: "웨이트 트레이닝 / 체형교정",
    experience: "경력 8년",
    certifications: [
      "NSCA-CPT (미국체력관리사협회)",
      "생활스포츠지도사 2급",
      "체형분석 전문가 자격",
    ],
    bio: "체계적인 근력 운동과 자세 교정을 통해 건강한 몸을 만들어 드립니다.",
  },
  {
    name: "이지은",
    title: "필라테스 전문 트레이너",
    specialty: "필라테스 / 재활 운동",
    experience: "경력 6년",
    certifications: [
      "STOTT Pilates 국제 자격",
      "재활트레이닝 전문가",
      "체육학 석사",
    ],
    bio: "재활과 코어 강화에 특화된 맞춤 필라테스 프로그램을 제공합니다.",
  },
  {
    name: "박준혁",
    title: "크로스핏 전문 트레이너",
    specialty: "크로스핏 / 기능성 트레이닝",
    experience: "경력 5년",
    certifications: [
      "CrossFit Level 2 Trainer",
      "Kettlebell Specialist",
      "TRX Certification",
    ],
    bio: "기능성 운동으로 실제 생활에서 필요한 체력을 기릅니다.",
  },
];

const PT_FEATURES = [
  {
    title: "1:1 맞춤 프로그램",
    desc: "개인의 목표와 체력 수준에 맞는 프로그램",
  },
  {
    title: "체계적인 관리",
    desc: "정기적인 인바디 측정과 기록 관리",
  },
  {
    title: "자세 교정",
    desc: "올바른 운동 자세로 부상 없이 효과 극대화",
  },
  {
    title: "식단 가이드",
    desc: "운동 효과를 높이는 영양 관리 조언",
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-100 mb-4">
            PT 소개
          </h1>
          <p className="text-steel-400 max-w-2xl mx-auto">
            검증된 실력의 전문 트레이너가 목표 달성을 도와드립니다
          </p>
        </div>
      </section>

      {/* Trainers */}
      <Section className="bg-night-950">
        <div className="space-y-8">
          {TRAINERS.map((trainer, index) => (
            <Card key={trainer.name} delay={index * 100} className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Photo */}
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-xl bg-night-800 flex items-center justify-center text-8xl text-steel-700">
                    👤
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-steel-100">
                      {trainer.name}
                    </h2>
                    <span className="px-3 py-1 text-xs font-medium bg-mint-500/10 text-mint-400 rounded-full">
                      {trainer.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-mint-400 uppercase tracking-wider mb-2">
                        전문 분야
                      </h3>
                      <p className="text-steel-300">{trainer.specialty}</p>
                      <p className="text-steel-500 text-sm mt-1">
                        {trainer.experience}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-mint-400 uppercase tracking-wider mb-2">
                        자격증
                      </h3>
                      <ul className="space-y-1">
                        {trainer.certifications.map((cert) => (
                          <li
                            key={cert}
                            className="text-sm text-steel-400 flex items-start gap-2"
                          >
                            <span className="text-mint-500">•</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-steel-400 mb-6">{trainer.bio}</p>

                  <Button href={`${BASE_PATH}/register`} variant="secondary">
                    PT 상담 신청
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PT Features */}
      <Section className="bg-night-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            PT 서비스 특징
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PT_FEATURES.map((feature, index) => (
            <Card key={feature.title} delay={index * 100} className="p-6 text-center">
              <h3 className="font-semibold text-steel-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-steel-400">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-night-950">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100 mb-4">
            무료 PT 체험
          </h2>
          <p className="text-steel-400 mb-8">
            첫 방문 시 1회 무료 PT 체험이 가능합니다
          </p>
          <Button href={`${BASE_PATH}/register`}>무료 체험 신청</Button>
        </div>
      </Section>
    </>
  );
}
