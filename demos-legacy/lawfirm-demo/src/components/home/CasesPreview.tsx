import Link from "next/link";
import { featuredCases } from "@/data/cases";
import CaseCard from "@/components/cases/CaseCard";

export default function CasesPreview() {

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-500 uppercase">
            Case Studies
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-navy-900 md:text-5xl">
            업무사례
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/cases"
            className="inline-block rounded border border-navy-800 px-8 py-3.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
          >
            전체 업무사례 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
