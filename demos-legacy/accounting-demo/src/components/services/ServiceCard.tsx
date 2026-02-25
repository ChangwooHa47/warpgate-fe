import Link from "next/link";
import type { Service } from "@/types";

const serviceTypeMap: Record<string, string> = {
  tax: "법인세",
  accounting: "회계 서비스",
  consulting: "경영 컨설팅",
  payroll: "급여/4대보험",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-accent-300 hover:shadow-lg md:p-10">
      <div className="flex items-start gap-6">
        <div className="text-5xl">{service.icon}</div>
        <div className="flex-1">
          <p className="mb-1 text-xs font-medium tracking-wider text-slate-400 uppercase">
            {service.subtitle}
          </p>
          <h3 className="mb-3 text-2xl font-bold text-navy-900">
            {service.title}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-slate-600">
            {service.description}
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-bold tracking-wider text-navy-700 uppercase">
              주요 서비스
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-base text-slate-600"
                >
                  <span className="mt-1 text-accent-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <div>
              <p className="text-2xl font-bold text-navy-900">{service.pricing}</p>
              <p className="text-sm text-slate-500">{service.pricingNote}</p>
            </div>
            <Link
              href={`/consultation?type=${encodeURIComponent(serviceTypeMap[service.id] ?? "기타")}`}
              className="rounded bg-accent-400 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-accent-300"
            >
              상담 예약
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
