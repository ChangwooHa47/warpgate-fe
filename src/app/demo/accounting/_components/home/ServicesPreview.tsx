import Link from "next/link";
import { services } from "../../_data/services";

const BASE_PATH = "/demo/accounting";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-accent-500 uppercase">
            Our Services
          </p>
          <h2 className="mb-4 text-4xl font-bold text-navy-900 md:text-5xl">
            서비스 소개
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`${BASE_PATH}/services`}
              className="group rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-accent-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-navy-900 transition-colors group-hover:text-accent-500">
                {service.title}
              </h3>
              <p className="mb-1 text-xs font-medium tracking-wider text-slate-400 uppercase">
                {service.subtitle}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600 line-clamp-3">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-400">
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
