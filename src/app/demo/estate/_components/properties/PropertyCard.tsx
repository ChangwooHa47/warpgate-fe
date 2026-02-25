import Link from "next/link";
import Image from "next/image";
import type { Property } from "../../_lib/types";
import { formatPrice } from "../../_lib/utils";
import { TYPE_COLORS } from "../../_lib/constants";

const BASE_PATH = "/demo/estate";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`${BASE_PATH}/properties/${property.id}`}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${TYPE_COLORS[property.type].bg} ${TYPE_COLORS[property.type].text}`}
          >
            {property.type}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-700">
            {property.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {property.title}
        </h3>
        <p className="text-sm text-muted mb-2 line-clamp-1">{property.address}</p>

        <p className="text-lg font-bold text-primary">
          {formatPrice(
            property.type,
            property.price,
            property.deposit,
            property.monthly
          )}
        </p>

        <div className="flex items-center gap-3 mt-2 text-xs text-muted">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.exclusiveM2}㎡
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {property.floor}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            {property.direction}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mt-3">
          {property.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 text-[10px] bg-gray-100 text-gray-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
