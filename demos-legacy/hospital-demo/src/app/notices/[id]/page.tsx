import { notFound } from "next/navigation";
import Link from "next/link";
import { NOTICES, SITE } from "@/data/siteData";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return NOTICES.map((n) => ({ id: String(n.id) }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const notice = NOTICES.find((n) => n.id === Number(id));
    return {
      title: notice ? `${notice.title} - ${SITE.name}` : "공지사항",
    };
  });
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = NOTICES.find((n) => n.id === Number(id));

  if (!notice) {
    notFound();
  }

  return (
    <>
      <PageHero title="공지사항" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-7 border-b border-gray-100">
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)] bg-[var(--accent-light)] rounded-full">
              {notice.category}
            </span>
            <h1 className="text-xl font-bold mt-2.5 tracking-tight">{notice.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{notice.date}</p>
          </div>
          <div className="p-7">
            <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line">
              {notice.content}
            </p>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/notices"
            className="inline-block border border-gray-200 text-gray-500 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}
