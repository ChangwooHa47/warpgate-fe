import { properties } from "@/data/properties";
import PropertyCard from "@/components/properties/PropertyCard";
import Link from "next/link";

export default function FeaturedProperties() {
  const sorted = [...properties].sort((a, b) => b.bookmarkCount - a.bookmarkCount);
  const top1 = sorted[0];
  const rest = sorted.slice(1, 7);

  return (
    <section className="py-10 px-5">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-[20px] font-bold text-gray-900">인기 매물</h2>
            <span className="text-[14px] text-gray-500">관심 높은 매물 {sorted.length}건</span>
          </div>
          <Link href="/properties" className="text-[14px] text-primary font-medium hover:underline">
            전체보기 →
          </Link>
        </div>

        {/* Bento layout: Featured left + 2 cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 mb-4">
          {/* Featured large card */}
          <PropertyCard property={top1} variant="featured" />

          {/* 2 stacked compact cards */}
          <div className="grid grid-rows-2 gap-4">
            {rest.slice(0, 2).map((p) => (
              <Link
                key={p.id}
                href={`/properties/${p.id}`}
                className="group flex gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="w-[90px] h-[90px] rounded overflow-hidden shrink-0 bg-gray-100">
                  <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-gray-500 truncate">{p.title}</p>
                  <p className="text-[17px] font-bold text-gray-900 mt-1">
                    {p.type} {p.price}억
                  </p>
                  <p className="text-[14px] text-gray-600 mt-1">
                    {p.areaM2Supply}/{p.areaM2Exclusive}m² · {p.dong} {p.floor}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row: 4 grid cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rest.slice(2, 6).map((p) => (
            <PropertyCard key={p.id} property={p} variant="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}
