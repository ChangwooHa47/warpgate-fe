import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section className="bg-navy-900 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-base font-medium tracking-wider text-gold-400 uppercase">
          Free Consultation
        </p>
        <h2 className="mb-6 font-serif text-4xl font-bold text-slate-50 md:text-5xl">
          법률 문제, 혼자 고민하지 마세요
        </h2>
        <p className="mb-10 text-xl leading-relaxed text-slate-300">
          법무법인 정율의 전문 변호사가
          <br className="hidden md:block" />
          무료 초기 상담을 통해 최적의 해결 방안을 안내해 드립니다.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/consultation"
            className="rounded bg-gold-400 px-10 py-4 text-base font-medium text-navy-950 transition-colors hover:bg-gold-300"
          >
            온라인 상담 예약
          </Link>
          <a
            href="tel:02-OOO-OOOO"
            className="rounded border border-slate-500 px-10 py-4 text-base font-medium text-slate-300 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            전화 상담: 02-OOO-OOOO
          </a>
        </div>
      </div>
    </section>
  );
}
