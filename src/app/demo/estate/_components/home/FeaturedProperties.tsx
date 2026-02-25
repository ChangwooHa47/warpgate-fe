import Link from "next/link";
import Image from "next/image";
import { properties } from "../../_data/properties";
import { formatPrice } from "../../_lib/utils";
import { TYPE_COLORS } from "../../_lib/constants";

const BASE_PATH = "/demo/estate";

export default function FeaturedProperties() {
  // Get top 6 properties by date
  const featured = properties.slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-primary font-medium mb-1">
              FEATURED PROPERTIES
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              추천 매물
            </h2>
          </div>
          <Link
            href={`${BASE_PATH}/properties`}
            className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
          >
            전체 보기
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <Link
              key={property.id}
              href={`${BASE_PATH}/properties/${property.id}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
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
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <p className="text-sm text-muted mb-2">{property.address}</p>
                <p className="text-lg font-bold text-primary">
                  {formatPrice(
                    property.type,
                    property.price,
                    property.deposit,
                    property.monthly
                  )}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                  <span>
                    {property.exclusiveM2}㎡ (
                    {(property.exclusiveM2 / 3.3058).toFixed(0)}평)
                  </span>
                  <span>{property.floor}</span>
                  <span>{property.direction}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
