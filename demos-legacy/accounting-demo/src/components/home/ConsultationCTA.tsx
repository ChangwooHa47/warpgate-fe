import Link from "next/link";
import { FIRM_PHONE } from "@/lib/constants";

export default function ConsultationCTA() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          세무 문제, 혼자 고민하지 마세요
        </h2>
        <p className="mb-10 text-lg text-slate-300">
          전문 세무사가 정확한 진단과 최적의 솔루션을 제공합니다
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/consultation"
            className="rounded bg-accent-400 px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-300"
          >
            온라인 상담 예약
          </Link>
          <a
            href={`tel:${FIRM_PHONE.replace(/-/g, "")}`}
            className="rounded border border-slate-500 px-10 py-4 text-base font-medium text-slate-200 transition-colors hover:border-accent-400 hover:text-accent-400"
          >
            전화 상담: {FIRM_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
