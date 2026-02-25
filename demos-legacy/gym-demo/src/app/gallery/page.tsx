import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "시설 갤러리",
  description:
    "GRIT의 최첨단 시설을 사진으로 확인하세요.",
};

const GALLERY_ITEMS = [
  { id: 1, label: "트레이닝 존", span: "md:col-span-2 md:row-span-2" },
  { id: 2, label: "프리웨이트", span: "" },
  { id: 3, label: "유산소 존", span: "" },
  { id: 4, label: "러닝머신", span: "" },
  { id: 5, label: "사이클 & 로잉", span: "md:col-span-2" },
  { id: 6, label: "라운지", span: "" },
  { id: 7, label: "머신 존", span: "" },
  { id: 8, label: "스트레칭 존", span: "md:col-span-2 md:row-span-2" },
  { id: 9, label: "라커룸", span: "" },
  { id: 10, label: "샤워실", span: "" },
  { id: 11, label: "리셉션", span: "md:col-span-2" },
  { id: 12, label: "외관", span: "" },
];

const FACILITY_INFO = [
  { label: "면적", value: "660㎡ (200평)" },
  { label: "운영시간", value: "매일 06:00 ~ 24:00" },
  { label: "주차", value: "건물 내 지하주차장\n2시간 무료" },
  { label: "위치", value: "서울 강남구\n테헤란로 123" },
];

export default function GalleryPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-steel-100">
          시설 갤러리
        </h1>
        <p className="text-steel-500 text-sm mt-3 max-w-md">
          최신 장비와 쾌적한 환경에서 운동에만 집중할 수 있습니다.
        </p>
      </Section>

      <Section className="pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[200px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden bg-night-800 group ${item.span}`}
            >
              <Image
                src={`/images/gallery-${item.id}.jpg`}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 left-0 px-4 py-3 text-xs font-medium text-steel-100 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Facility Info */}
      <Section className="py-16 md:py-24 bg-night-900">
        <h2 className="text-lg font-semibold text-steel-100 mb-8">시설 안내</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
          {FACILITY_INFO.map((info) => (
            <div key={info.label}>
              <p className="text-steel-500 text-xs mb-1">{info.label}</p>
              <p className="text-steel-200 text-sm font-medium whitespace-pre-line">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
