import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practice-areas";

const iconMap: Record<string, string> = {
  scale: "⚖️",
  shield: "🛡️",
  building: "🏢",
  home: "🏠",
  heart: "💙",
  scroll: "📜",
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) notFound();

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-base text-slate-400">
            <Link href="/" className="hover:text-gold-400">
              홈
            </Link>
            <span className="mx-2">›</span>
            <Link href="/practice-areas" className="hover:text-gold-400">
              업무분야
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gold-400">{area.title}</span>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{iconMap[area.icon]}</span>
            <div>
              <h1 className="font-serif text-4xl font-bold text-slate-50 md:text-5xl">
                {area.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Description */}
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy-900">
              업무 소개
            </h2>
            <div className="divider mb-6" />
            <p className="text-lg leading-relaxed text-slate-600">
              {area.detailDescription}
            </p>
          </div>

          {/* Scope */}
          <div className="mb-16 rounded-lg border border-slate-200 bg-white p-10">
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy-900">
              주요 업무 범위
            </h2>
            <div className="divider mb-6" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {area.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-slate-600"
                >
                  <span className="mt-0.5 text-gold-400">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Laws */}
          <div className="mb-16 rounded-lg border border-slate-200 bg-white p-10">
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy-900">
              관련 법령
            </h2>
            <div className="divider mb-6" />
            <div className="flex flex-wrap gap-3">
              {area.relatedLaws.map((law) => (
                <span
                  key={law}
                  className="rounded-full bg-navy-50 px-5 py-2.5 text-base font-medium text-navy-700"
                >
                  {law}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-navy-900 p-10 text-center md:p-14">
            <h3 className="mb-4 font-serif text-3xl font-bold text-slate-50">
              {area.title} 관련 상담이 필요하신가요?
            </h3>
            <p className="mb-8 text-lg text-slate-300">
              전문 변호사가 무료 초기 상담을 통해 최적의 해결 방안을 안내해
              드립니다.
            </p>
            <Link
              href="/consultation"
              className="inline-block rounded bg-gold-400 px-10 py-4 text-base font-medium text-navy-950 transition-colors hover:bg-gold-300"
            >
              무료 상담 예약
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
