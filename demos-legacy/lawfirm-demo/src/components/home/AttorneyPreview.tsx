import Link from "next/link";
import { leadAttorney, partnerAttorneys } from "@/data/attorneys";
import AttorneyCard from "@/components/attorneys/AttorneyCard";

export default function AttorneyPreview() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-base font-medium tracking-wider text-gold-500 uppercase">
            Our Attorneys
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-navy-900 md:text-5xl">
            변호사 소개
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Lead Attorney - compact highlight */}
        {leadAttorney && (
          <div className="mb-12 flex flex-col items-center gap-6 rounded-lg border border-slate-200 bg-white p-8 md:flex-row md:items-start">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-navy-100">
              {leadAttorney.photo_url ? (
                <img
                  src={leadAttorney.photo_url}
                  alt={leadAttorney.name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <span className="font-serif text-4xl font-bold text-navy-600">
                  {leadAttorney.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="text-center md:text-left">
              <p className="mb-1 text-sm font-medium text-gold-500 uppercase">
                {leadAttorney.title}
              </p>
              <h3 className="mb-3 font-serif text-3xl font-bold text-navy-900">
                {leadAttorney.name}
              </h3>
              <div className="mb-3 flex flex-wrap justify-center gap-2 md:justify-start">
                {leadAttorney.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-navy-50 px-3 py-1 text-sm font-medium text-navy-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-base leading-relaxed text-slate-600">
                {leadAttorney.bio}
              </p>
            </div>
          </div>
        )}

        {/* Partner Attorneys */}
        <div className="grid gap-8 md:grid-cols-2">
          {partnerAttorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/attorneys"
            className="inline-block rounded border border-navy-800 px-8 py-3.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
          >
            전체 변호사 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
