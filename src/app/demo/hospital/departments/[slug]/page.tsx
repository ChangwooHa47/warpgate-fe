import { notFound } from "next/navigation";
import Link from "next/link";
import { DEPARTMENTS, DEPARTMENT_CATEGORIES, SITE } from "../../_data/siteData";
import PageHero from "../../_components/PageHero";
import ImagePlaceholder from "../../_components/ImagePlaceholder";

export function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({ slug: dept.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const dept = DEPARTMENTS.find((d) => d.slug === slug);
    return {
      title: dept ? `${dept.name} - ${SITE.name}` : "진료 안내",
    };
  });
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    notFound();
  }

  const categoryName =
    DEPARTMENT_CATEGORIES.find((c) => c.id === dept.category)?.name ?? "";
  const sameCategoryDepts = DEPARTMENTS.filter(
    (d) => d.category === dept.category
  );

  return (
    <>
      <PageHero title="진료 안내" subtitle="안과 전문 진료 분야를 안내합니다" />

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Category tabs - same as main page */}
        <div className="flex border-b border-gray-200 mb-5">
          {DEPARTMENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={
                cat.id === dept.category
                  ? `/demo/hospital/departments/${dept.slug}`
                  : `/demo/hospital/departments/${DEPARTMENTS.find((d) => d.category === cat.id)?.slug}`
              }
              className={`px-6 py-3 text-base font-bold transition-colors relative ${
                cat.id === dept.category
                  ? "text-[var(--primary)]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat.name}
              {cat.id === dept.category && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
              )}
            </Link>
          ))}
        </div>

        {/* Same-category department sub-nav */}
        <div className="flex gap-1.5 flex-wrap mb-8">
          {sameCategoryDepts.map((d) => (
            <Link
              key={d.slug}
              href={`/demo/hospital/departments/${d.slug}`}
              className={`px-4 py-1.5 text-sm rounded-full border font-medium transition ${
                d.slug === slug
                  ? "bg-[#1265c8] text-white border-[#1265c8] shadow-sm"
                  : "outline-hover bg-white text-gray-400 border-gray-200"
              }`}
            >
              {d.name}
            </Link>
          ))}
        </div>

        {/* Detail content */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Left: Image */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl overflow-hidden self-stretch">
            <ImagePlaceholder
              height="100%"
              label={`${dept.name} 이미지`}
              className="!rounded-none !border-0 h-full min-h-[240px]"
            />
          </div>

          {/* Right: Info */}
          <div>
            <div className="mb-1">
              <span className="text-sm font-semibold text-[var(--primary)]">
                {categoryName}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight">
              {dept.name}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              {dept.description}
            </p>

            {/* Procedures */}
            {dept.procedures.length > 0 && (
              <div className="space-y-2">
                {dept.procedures.map((proc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    <div>
                      <span className="text-base font-semibold text-gray-700">
                        {proc.name}
                      </span>
                      <span className="text-sm text-gray-400 ml-2">
                        {proc.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info items */}
        <div className="bg-gradient-to-br from-gray-50 to-[var(--primary-light)]/30 rounded-xl p-7 mt-8">
          <h3 className="text-lg font-bold mb-4">안내 사항</h3>
          <ul className="space-y-2.5">
            {dept.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-gray-500">
                <span className="text-[var(--accent)] shrink-0 font-bold">
                  -
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-end gap-3">
          <Link
            href="/demo/hospital/appointment"
            className="text-white px-7 py-3 rounded-full text-sm font-bold hover:brightness-90 hover:shadow-[0_0_20px_rgba(0,0,0,0.12)] transition-all"
            style={{ backgroundColor: '#1265c8', color: 'white' }}
          >
            진료 예약하기
          </Link>
          <Link
            href="/demo/hospital/contact"
            className="outline-hover border border-gray-200 text-gray-600 px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-50/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.12)] transition-all"
          >
            상담 문의
          </Link>
        </div>
      </div>
    </>
  );
}
