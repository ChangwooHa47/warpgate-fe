import { notFound } from "next/navigation";
import Link from "next/link";
import { EVENTS, SITE } from "../../_data/siteData";
import PageHero from "../../_components/PageHero";
import ImagePlaceholder from "../../_components/ImagePlaceholder";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ id: String(e.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === Number(id));
  return {
    title: event ? `${event.title} - ${SITE.name}` : "이벤트",
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === Number(id));

  if (!event) {
    notFound();
  }

  const otherEvents = EVENTS.filter((e) => e.id !== event.id);

  return (
    <>
      <PageHero title="이벤트" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Banner Image */}
          <ImagePlaceholder
            height="360px"
            label="이벤트 상세 이미지"
            className="!rounded-none !border-0"
          />

          {/* Content */}
          <div className="p-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-sm font-bold text-[var(--primary)] bg-[var(--primary-light)] rounded">
                진행중
              </span>
              <span className="text-base text-gray-400">{event.period}</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mb-3">{event.title}</h1>
            <div className="border-t border-gray-100 pt-5">
              <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line">
                {event.content}
              </p>
            </div>
          </div>
        </article>

        {/* Other Events */}
        {otherEvents.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-bold mb-5">다른 이벤트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherEvents.map((e) => (
                <Link
                  key={e.id}
                  href={`/demo/hospital/events/${e.id}`}
                  className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl transition-all group hover:shadow-[0_0_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="w-24 shrink-0 rounded-lg overflow-hidden">
                    <ImagePlaceholder
                      height="70px"
                      label="이벤트"
                      className="!border-0 !rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-700 group-hover:text-[#1265c8] transition truncate">
                      {e.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{e.period}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/demo/hospital/notices"
            className="inline-block border border-gray-200 text-gray-500 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}
