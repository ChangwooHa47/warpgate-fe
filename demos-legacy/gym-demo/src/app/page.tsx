import HeroBackground from "@/components/HeroBackground";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroBackground className="flex items-center justify-center min-h-[85vh] md:min-h-[90vh]">
        <div className="text-center px-5 py-24 md:py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-steel-100 leading-none mb-8">
            WARP<span className="text-mint-400">GATE</span>
          </h1>
          <p className="max-w-md mx-auto text-steel-400 text-sm md:text-base leading-relaxed mb-10">
            당신의 한계를 넘어서는 공간.
            <br className="hidden md:block" />
            최첨단 시설과 전문 트레이너가 함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" variant="primary">프로그램 보기</Button>
            <Button href="/register" variant="secondary">회원 등록</Button>
          </div>
        </div>
      </HeroBackground>

      {/* Programs — numbered list, 2-col layout */}
      <Section className="py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-100 leading-tight">
              목표에 맞는<br />프로그램
            </h2>
            <Link href="/programs" className="inline-flex items-center gap-1 text-sm text-mint-400 mt-6 hover:text-mint-300 transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div className="divide-y divide-night-700">
            {PROGRAMS.map((p, i) => (
              <Link key={p.title} href="/programs" className="group flex items-baseline gap-6 py-6 first:pt-0 last:pb-0">
                <span className="text-night-600 text-sm font-mono shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-steel-200 group-hover:text-mint-400 transition-colors">{p.title}</h3>
                  <p className="text-steel-500 text-sm mt-1">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing — bold single statement */}
      <div className="bg-night-900">
        <Section className="py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-steel-500 text-sm mb-3">멤버십</p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-steel-100">
                월 <span className="text-mint-400">59,000</span>원부터
              </p>
              <p className="text-steel-500 text-sm mt-4">
                1개월 99,000원 · 3개월 79,000원 · 6개월 59,000원
              </p>
            </div>
            <Button href="/pricing" variant="secondary">가격표 보기</Button>
          </div>
        </Section>
      </div>

      {/* Trainers — photo cards with overlay */}
      <Section className="py-24 md:py-32">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-steel-100">전문 트레이너</h2>
          <Link href="/trainers" className="text-sm text-steel-500 hover:text-mint-400 transition-colors hidden md:block">
            더 알아보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TRAINERS.map((t) => (
            <Link key={t.name} href="/trainers" className="group relative aspect-[3/4] overflow-hidden bg-night-800">
              <Image src={t.image} alt={t.name} fill className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <p className="text-mint-400 text-xs">{t.specialty}</p>
                <h3 className="text-base font-semibold text-steel-100 mt-1">{t.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/trainers" className="block text-sm text-steel-500 hover:text-mint-400 transition-colors mt-6 md:hidden">
          트레이너 더 알아보기 →
        </Link>
      </Section>

      {/* Gallery — asymmetric mosaic */}
      <div className="bg-night-900">
        <Section className="py-20 md:py-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-steel-100">시설</h2>
            <Link href="/gallery" className="text-sm text-steel-500 hover:text-mint-400 transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Link href="/gallery" className="relative col-span-2 row-span-2 aspect-square overflow-hidden bg-night-800 group">
              <Image src="/images/gallery-1.jpg" alt="시설" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </Link>
            {[2, 3, 4, 5].map((i) => (
              <Link key={i} href="/gallery" className={`relative aspect-square overflow-hidden bg-night-800 group ${i > 3 ? "hidden md:block" : ""}`}>
                <Image src={`/images/gallery-${i}.jpg`} alt="시설" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* CTA */}
      <Section className="py-28 md:py-36">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-100 mb-5">
            지금 시작하세요
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-10">
            첫 방문 시 무료 체험 PT를 제공합니다.
          </p>
          <Button href="/register" variant="primary" className="px-12">회원 등록하기</Button>
        </div>
      </Section>
    </>
  );
}

const PROGRAMS = [
  { title: "웨이트 트레이닝", desc: "최신 장비로 체계적인 근력 운동." },
  { title: "유산소 프로그램", desc: "심폐 기능 강화와 체지방 감소." },
  { title: "그룹 운동", desc: "함께하는 즐거움, 꾸준한 습관." },
];

const TRAINERS = [
  { name: "김민수 트레이너", specialty: "웨이트 / 체형교정", image: "/images/trainer-1.jpg" },
  { name: "이지은 트레이너", specialty: "필라테스 / 재활", image: "/images/trainer-2.jpg" },
  { name: "박준혁 트레이너", specialty: "크로스핏 / 기능성", image: "/images/trainer-3.jpg" },
];
