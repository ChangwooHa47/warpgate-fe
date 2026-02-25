import { memo } from "react";
import Link from "next/link";
import { Property } from "@/types";
import { formatPrice, formatArea, formatViewCount } from "@/lib/utils";
import { TYPE_COLORS } from "@/lib/constants";
import { ViewIcon, BookmarkIcon, CheckIcon } from "@/components/ui/Icons";

interface PropertyCardProps {
  property: Property;
  variant?: "grid" | "list" | "featured";
}

function VerifiedBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  if (size === "sm") {
    return (
      <span className="shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
        <CheckIcon className="w-2.5 h-2.5 text-white" />
      </span>
    );
  }
  return (
    <span className="px-2 py-1 bg-white/90 text-[11px] font-semibold text-primary rounded flex items-center gap-1">
      <CheckIcon className="w-3 h-3" />
      확인매물
    </span>
  );
}

function ImageCount({ count }: { count: number }) {
  if (count <= 1) return null;
  return (
    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/50 text-white text-[11px] rounded">
      +{count - 1}
    </span>
  );
}

function Stats({ viewCount, bookmarkCount, size = "sm" }: { viewCount: number; bookmarkCount: number; size?: "sm" | "md" }) {
  const iconClass = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";
  const textClass = size === "md" ? "text-[12px]" : "text-[11px]";
  return (
    <div className={`flex items-center gap-3 ${textClass} text-gray-400`}>
      <span className="flex items-center gap-0.5">
        <ViewIcon className={iconClass} />
        {formatViewCount(viewCount)}
      </span>
      <span className="flex items-center gap-0.5">
        <BookmarkIcon className={iconClass} />
        {bookmarkCount}
      </span>
    </div>
  );
}

function PropertyInfoRow({ property }: { property: Property }) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-gray-500">
      {property.roomCount && <span>방{property.roomCount}</span>}
      {property.direction && <span>{property.direction}</span>}
      {property.moveInDate && (
        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">
          {property.moveInDate === "즉시입주" ? "즉시" : property.moveInDate}
        </span>
      )}
    </div>
  );
}

function PropertyCard({ property, variant = "grid" }: PropertyCardProps) {
  const isVerified = !!property.verifiedAt;

  if (variant === "featured") {
    return (
      <Link
        href={`/properties/${property.id}`}
        className="group flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
      >
        <div className="sm:w-[300px] h-[200px] sm:h-auto shrink-0 bg-gray-100 relative overflow-hidden">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-[13px] font-semibold rounded ${TYPE_COLORS[property.type].bg}`}>
            {property.type}
          </span>
          {isVerified && <span className="absolute top-3 right-3"><VerifiedBadge size="md" /></span>}
          <ImageCount count={property.images.length} />
        </div>
        <div className="flex-1 p-6">
          <p className="text-[14px] text-gray-500 mb-1">{property.address}</p>
          <p className="text-[18px] font-semibold text-gray-900 mb-1">{property.complex}</p>
          <p className="text-[24px] font-bold text-gray-900 mb-3">
            {formatPrice(property.type, property.price, property.deposit, property.priceMonthly)}
          </p>
          <div className="flex items-center gap-3 text-[14px] text-gray-600 mb-3">
            <span>{formatArea(property.areaM2Supply, property.areaM2Exclusive)}</span>
            <span className="text-gray-300">·</span>
            <span>{property.dong} {property.floor}</span>
            <span className="text-gray-300">·</span>
            <span>{property.areaPyeong}평</span>
          </div>
          <div className="flex items-center gap-4 text-[13px] text-gray-500 mb-3">
            {property.roomCount && <span>방 {property.roomCount}개</span>}
            {property.bathroomCount && <span>욕실 {property.bathroomCount}개</span>}
            {property.direction && <span>{property.direction}</span>}
            {property.moveInDate && (
              <span>{property.moveInDate === "즉시입주" ? "즉시입주" : `입주 ${property.moveInDate}`}</span>
            )}
          </div>
          <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-2">{property.description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {property.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-gray-100 text-[13px] text-gray-600 rounded">{tag}</span>
              ))}
            </div>
            <Stats viewCount={property.viewCount} bookmarkCount={property.bookmarkCount} size="md" />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "list") {
    return (
      <Link
        href={`/properties/${property.id}`}
        className={`flex gap-4 px-5 py-4 border-l-[3px] ${TYPE_COLORS[property.type].border} hover:bg-gray-50 transition-colors group`}
      >
        <div className="w-[90px] h-[90px] rounded-lg overflow-hidden shrink-0 bg-gray-100 relative">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
          {isVerified && <span className="absolute top-1 left-1"><VerifiedBadge /></span>}
          {property.images.length > 1 && (
            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/50 text-white text-[10px] rounded">
              {property.images.length}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-[13px] text-gray-500 truncate">{property.title}</p>
            {isVerified && <span className="shrink-0 text-[11px] text-primary font-medium">확인</span>}
          </div>
          <p className="text-[17px] font-bold text-gray-900">
            {property.type}{" "}
            {formatPrice(property.type, property.price, property.deposit, property.priceMonthly)}
          </p>
          <p className="text-[14px] text-gray-600 mt-0.5">
            {formatArea(property.areaM2Supply, property.areaM2Exclusive)} · {property.dong} {property.floor}
          </p>
          <div className="mt-1.5">
            <PropertyInfoRow property={property} />
          </div>
        </div>
        <div className="flex flex-col items-end justify-between shrink-0">
          <Stats viewCount={property.viewCount} bookmarkCount={property.bookmarkCount} />
          {property.floorPlan && (
            <div className="w-[50px] h-[50px] rounded bg-gray-100 overflow-hidden">
              <img src={property.floorPlan} alt="평면도" className="w-full h-full object-cover opacity-60" />
            </div>
          )}
        </div>
      </Link>
    );
  }

  // Grid variant
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all"
    >
      <div className="relative h-[160px] overflow-hidden bg-gray-100">
        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className={`px-2.5 py-1 text-[12px] font-semibold rounded ${TYPE_COLORS[property.type].bg}`}>
            {property.type}
          </span>
          {isVerified && <VerifiedBadge size="md" />}
        </div>
        <ImageCount count={property.images.length} />
      </div>
      <div className="p-3.5">
        <p className="text-[13px] text-gray-500 mb-1 truncate">{property.title}</p>
        <p className="text-[19px] font-bold text-gray-900 mb-1">
          {formatPrice(property.type, property.price, property.deposit, property.priceMonthly)}
        </p>
        <p className="text-[13px] text-gray-600 mb-1.5">
          {formatArea(property.areaM2Supply, property.areaM2Exclusive)} · {property.areaPyeong}평
        </p>
        <div className="flex items-center gap-2 text-[12px] text-gray-500">
          {property.roomCount && <span>방{property.roomCount}</span>}
          {property.direction && <span>{property.direction}</span>}
          <span>{property.floor}</span>
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
          <Stats viewCount={property.viewCount} bookmarkCount={property.bookmarkCount} />
          {property.moveInDate === "즉시입주" && (
            <span className="text-[11px] px-1.5 py-0.5 bg-orange-50 text-orange-600 rounded font-medium">즉시입주</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default memo(PropertyCard);
