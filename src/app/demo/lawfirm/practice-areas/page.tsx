import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "../_data/practice-areas";

export const metadata: Metadata = {
  title: "업무분야",
  description: "법무법인 정율의 전문 업무 분야를 안내합니다.",
};

const iconMap: Record<string, string> = {
  scale: "⚖️",
  shield: "🛡️",
  building: "🏢",
  home: "🏠",
  heart: "💙",
  scroll: "📜",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-400 uppercase">
            Practice Areas
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-slate-50 md:text-5xl">
            업무분야
          </h1>
          <div className="divider mx-auto" />
          <p className="mt-6 text-xl text-slate-300">
            법무법인 정율은 다양한 법률 분야에서 전문적인 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/demo/lawfirm/practice-areas/${area.slug}`}
                className="group rounded-lg border border-slate-200 bg-white p-10 transition-all hover:border-gold-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{iconMap[area.icon]}</div>
                <h2 className="mb-3 font-serif text-2xl font-bold text-navy-900 transition-colors group-hover:text-gold-500">
                  {area.title}
                </h2>
                <p className="mb-4 text-base leading-relaxed text-slate-600">
                  {area.description}
                </p>
                <span className="text-base font-medium text-gold-500 transition-colors group-hover:text-gold-600">
                  자세히 보기 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
