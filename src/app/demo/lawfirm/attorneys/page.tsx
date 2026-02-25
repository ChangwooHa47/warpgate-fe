import type { Metadata } from "next";
import { leadAttorney, partnerAttorneys, associateAttorneys } from "../_data/attorneys";
import LeadAttorneyProfile from "../_components/LeadAttorneyProfile";
import AttorneyCard from "../_components/AttorneyCard";

export const metadata: Metadata = {
  title: "변호사 소개",
  description: "법무법인 정율의 전문 변호사를 소개합니다.",
};

export default function AttorneysPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-400 uppercase">
            Our Attorneys
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-slate-50 md:text-5xl">
            변호사 소개
          </h1>
          <div className="divider mx-auto" />
          <p className="mt-6 text-xl text-slate-300">
            풍부한 경험과 전문성을 갖춘 법무법인 정율의 변호사를 소개합니다.
          </p>
        </div>
      </section>

      {/* Lead Attorney */}
      {leadAttorney && (
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <p className="mb-2 text-sm font-medium tracking-wider text-gold-500 uppercase">
                Representative
              </p>
              <h2 className="font-serif text-3xl font-bold text-navy-900">
                대표 변호사
              </h2>
            </div>
            <LeadAttorneyProfile attorney={leadAttorney} />
          </div>
        </section>
      )}

      {/* Partner Attorneys */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-wider text-gold-500 uppercase">
              Partners
            </p>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              파트너 변호사
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnerAttorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>

      {/* Associate Attorneys */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-wider text-gold-500 uppercase">
              Associates
            </p>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              소속 변호사
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {associateAttorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
