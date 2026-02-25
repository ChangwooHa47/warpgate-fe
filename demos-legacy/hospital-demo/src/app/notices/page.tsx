import { SITE, NOTICES, EVENTS } from "@/data/siteData";
import PageHero from "@/components/PageHero";
import EventGrid from "@/components/EventGrid";
import NoticeList from "@/components/NoticeList";

export const metadata = {
  title: `공지사항 - ${SITE.name}`,
};

export default function NoticesPage() {
  return (
    <>
      <PageHero title="공지사항" subtitle="병원 소식 및 안내" />

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Notices Section */}
        <section className="mb-14">
          <h2 className="text-xl font-bold tracking-tight mb-6 border-b-2 border-[var(--primary)] pb-3">공지사항</h2>
          <NoticeList notices={NOTICES} />
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-6 border-b-2 border-[var(--primary)] pb-3">이벤트</h2>
          <EventGrid events={EVENTS} />
        </section>
      </div>
    </>
  );
}
