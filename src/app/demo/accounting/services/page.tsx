import type { Metadata } from "next";
import ServiceCard from "../_components/services/ServiceCard";
import { services } from "../_data/services";

export const metadata: Metadata = {
  title: "서비스 소개",
  description: "세무, 회계, 경영 컨설팅, 급여 관리 등 한울 세무회계의 전문 서비스를 안내합니다.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium tracking-wider text-accent-400 uppercase">
            Services
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            서비스 소개
          </h1>
          <div className="divider mb-6" />
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            세무, 회계, 경영 컨설팅, 급여 관리까지 —
            기업 운영에 필요한 모든 재무 서비스를 한 곳에서 제공합니다.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
