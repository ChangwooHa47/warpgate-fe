import Link from "next/link";
import Image from "next/image";
import Section from "./_components/Section";
import Button from "./_components/Button";
import Card from "./_components/Card";
import HeroBackground from "./_components/home/HeroBackground";
import { BASE_PATH } from "./_lib/constants";

const PROGRAMS = [
  {
    title: "웨이트 트레이닝",
    desc: "최신 장비로 체계적인 근력 운동.",
    icon: "💪",
  },
  {
    title: "유산소 프로그램",
    desc: "심폐 기능 강화와 체지방 감소.",
    icon: "🏃",
  },
  {
    title: "그룹 운동",
    desc: "함께하는 즐거움, 꾸준한 습관.",
    icon: "👥",
  },
];

const TRAINERS = [
  {
    name: "김민수 트레이너",
    specialty: "웨이트 / 체형교정",
    image: "/images/trainer-1.jpg",
  },
  {
    name: "이지은 트레이너",
    specialty: "필라테스 / 재활",
    image: "/images/trainer-2.jpg",
  },
  {
    name: "박준혁 트레이너",
    specialty: "크로스핏 / 기능성",
    image: "/images/trainer-3.jpg",
  },
];

const GALLERY_IMAGES = [
  { src: "/images/gym-1.jpg", alt: "웨이트 존" },
  { src: "/images/gym-2.jpg", alt: "유산소 존" },
  { src: "/images/gym-3.jpg", alt: "스트레칭 존" },
  { src: "/images/gym-4.jpg", alt: "그룹 운동실" },
];

export default function GymHomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <HeroBackground
          src="/images/hero-gym.jpg"
          alt="피트니스 센터 내부"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-steel-100 mb-6">
            당신의 변화,
            <br />
            <span className="text-mint-400">FIT ZONE</span>에서 시작하세요
          </h1>
          <p className="text-lg md:text-xl text-steel-400 max-w-2xl mx-auto mb-8">
            최신 시설과 전문 트레이너가 함께하는 프리미엄 피트니스 센터
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`${BASE_PATH}/register`}>무료 체험 신청</Button>
            <Button href={`${BASE_PATH}/programs`} variant="secondary">
              프로그램 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <Section className="bg-night-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-100 mb-4">
            프로그램
          </h2>
          <p className="text-steel-400">목표에 맞는 다양한 프로그램</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <Card key={program.title} delay={index * 100} className="p-6 text-center">
              <span className="text-4xl mb-4 block">{program.icon}</span>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-steel-400">{program.desc}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href={`${BASE_PATH}/programs`} variant="ghost">
            모든 프로그램 보기 →
          </Button>
        </div>
      </Section>

      {/* Pricing Highlight */}
      <Section className="bg-night-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-100 mb-6">
              합리적인 가격,
              <br />
              <span className="text-mint-400">프리미엄 서비스</span>
            </h2>
            <p className="text-steel-400 mb-6">
              다양한 멤버십 옵션으로 나에게 맞는 플랜을 선택하세요. 모든 회원에게
              최신 시설 이용과 기본 그룹 수업이 제공됩니다.
            </p>
            <ul className="space-y-3 mb-8">
              {["최신 운동 장비 무제한 이용", "락커 및 샤워 시설", "무료 주차", "그룹 운동 클래스"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-steel-300">
                  <svg className="w-5 h-5 text-mint-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href={`${BASE_PATH}/pricing`}>가격표 보기</Button>
          </div>

          <Card className="p-8 border-mint-500">
            <div className="absolute top-0 right-0 bg-mint-500 text-night-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST
            </div>
            <h3 className="text-lg font-semibold text-steel-100 mb-2">
              6개월 멤버십
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-mint-400">49만원</span>
              <span className="text-steel-500 ml-1">/ 6개월</span>
            </div>
            <p className="text-sm text-steel-400 mb-6">
              월 8만원대로 프리미엄 피트니스를 경험하세요
            </p>
            <Button href={`${BASE_PATH}/register`} className="w-full">
              등록하기
            </Button>
          </Card>
        </div>
      </Section>

      {/* Trainers Preview */}
      <Section className="bg-night-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-100 mb-4">
            전문 트레이너
          </h2>
          <p className="text-steel-400">검증된 실력의 전문가들이 함께합니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINERS.map((trainer, index) => (
            <Card key={trainer.name} delay={index * 100} className="overflow-hidden group">
              <div className="aspect-[3/4] relative bg-night-800">
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-steel-700">
                  👤
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-steel-100 group-hover:text-mint-400 transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-sm text-steel-500">{trainer.specialty}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href={`${BASE_PATH}/trainers`} variant="ghost">
            트레이너 소개 보기 →
          </Button>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-night-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-100 mb-4">
            시설 갤러리
          </h2>
          <p className="text-steel-400">최신 시설을 미리 만나보세요</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.alt}
              className="aspect-square rounded-lg overflow-hidden bg-night-800 relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-steel-700 group-hover:text-steel-600 transition-colors">
                🏋️
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-sm text-steel-200 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href={`${BASE_PATH}/gallery`} variant="ghost">
            갤러리 더 보기 →
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-mint-500 text-night-950">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-night-700 mb-8 max-w-xl mx-auto">
            첫 방문 고객께는 무료 체험 기회를 드립니다. 전문 상담과 함께 나에게
            맞는 운동 플랜을 찾아보세요.
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
