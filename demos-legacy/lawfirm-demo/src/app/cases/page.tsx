import type { Metadata } from "next";
import { cases } from "@/data/cases";
import CaseFilter from "@/components/cases/CaseFilter";

export const metadata: Metadata = {
  title: "업무사례",
  description: "법무법인 정율의 주요 업무 사례를 소개합니다.",
};

export default function CasesPage() {

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-400 uppercase">
            Case Studies
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-slate-50 md:text-5xl">
            업무사례
          </h1>
          <div className="divider mx-auto" />
          <p className="mt-6 text-xl text-slate-300">
            법무법인 정율의 주요 업무 사례를 소개합니다.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <CaseFilter cases={cases} />
        </div>
      </section>
    </>
  );
}
