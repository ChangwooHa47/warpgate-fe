import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties } from "../../_data/properties";
import PropertyDetail from "../../_components/properties/PropertyDetail";
import PropertyMap from "../../_components/map/PropertyMap";
import PropertyCard from "../../_components/properties/PropertyCard";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return {
      title: "매물을 찾을 수 없습니다 - 강남부동산",
    };
  }

  return {
    title: `${property.title} - 강남부동산`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Get similar properties (same category, different id)
  const similarProperties = properties
    .filter((p) => p.category === property.category && p.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <PropertyDetail property={property} />

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-foreground mb-6">위치</h2>
        <div className="h-[400px] rounded-xl overflow-hidden">
          <PropertyMap
            properties={[property]}
            center={property.coordinates}
          />
        </div>
      </div>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border">
          <h2 className="text-xl font-bold text-foreground mb-6">
            비슷한 매물
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
