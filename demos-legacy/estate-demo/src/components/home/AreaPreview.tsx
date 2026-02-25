import { areas } from "@/data/areas";
import Image from "next/image";
import Link from "next/link";

export default function AreaPreview() {
  return (
    <section className="py-12 px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[20px] font-bold text-gray-900">지역별 시세</h2>
          <Link href="/areas" className="text-[14px] text-primary font-medium hover:underline">
            상세보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/properties?q=${encodeURIComponent(area.name)}`}
              className="group relative overflow-hidden rounded-2xl h-[220px] block"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-[22px] font-bold text-white">{area.name}</h3>
                  <span
                    className={`text-[13px] font-semibold px-2 py-0.5 rounded-full ${
                      area.priceChange > 0
                        ? "bg-red-500/20 text-red-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {area.priceChange > 0 ? "↑" : "↓"} {Math.abs(area.priceChange)}%
                  </span>
                </div>

                <div className="flex items-center gap-5 text-[14px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/60">매매</span>
                    <span className="font-semibold text-white">{area.averagePrice}억</span>
                  </div>
                  <div className="w-px h-3.5 bg-white/30" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/60">전세</span>
                    <span className="font-semibold text-white">{area.averageJeonse}억</span>
                  </div>
                  <div className="w-px h-3.5 bg-white/30" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/60">매물</span>
                    <span className="font-semibold text-white">{area.propertyCount.toLocaleString()}건</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
