import Link from "next/link";
import { practiceAreas } from "../_data/practice-areas";

const iconMap: Record<string, string> = {
  scale: "⚖️",
  shield: "🛡️",
  building: "🏢",
  home: "🏠",
  heart: "💙",
  scroll: "📜",
};

export default function PracticeAreasPreview() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-500 uppercase">
            Practice Areas
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-navy-900 md:text-5xl">
            업무분야
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/demo/lawfirm/practice-areas/${area.slug}`}
              className="group rounded-lg border border-slate-200 bg-white p-10 transition-all hover:border-gold-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{iconMap[area.icon]}</div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-navy-900 transition-colors group-hover:text-gold-500">
                {area.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {area.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/demo/lawfirm/practice-areas"
            className="inline-block rounded border border-navy-800 px-8 py-3.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
          >
            전체 업무분야 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
