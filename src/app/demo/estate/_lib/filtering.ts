import type { Property, PropertyFilter, SortOption } from "./types";
import { matchesFloorLevel } from "./utils";

/**
 * Filter properties based on filter criteria
 */
export function filterProperties(
  properties: Property[],
  filter: PropertyFilter
): Property[] {
  return properties.filter((property) => {
    // Category filter
    if (filter.category !== "전체" && property.category !== filter.category) {
      return false;
    }

    // Transaction type filter
    if (filter.type !== "전체" && property.type !== filter.type) {
      return false;
    }

    // Price filter (handle 월세 separately)
    if (property.type === "월세") {
      const monthlyPrice = property.monthly || 0;
      if (monthlyPrice < filter.priceMin || monthlyPrice > filter.priceMax) {
        return false;
      }
    } else {
      if (property.price < filter.priceMin || property.price > filter.priceMax) {
        return false;
      }
    }

    // Area filter (using exclusive area)
    if (
      property.exclusiveM2 < filter.areaMin ||
      property.exclusiveM2 > filter.areaMax
    ) {
      return false;
    }

    // Floor level filter
    if (filter.floorLevel !== "전체") {
      if (!matchesFloorLevel(property.floor, filter.floorLevel)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort properties based on sort option
 */
export function sortProperties(
  properties: Property[],
  sortOption: SortOption
): Property[] {
  const sorted = [...properties];

  switch (sortOption) {
    case "latest":
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "price-asc":
      sorted.sort((a, b) => {
        const priceA = a.type === "월세" ? (a.monthly || 0) : a.price;
        const priceB = b.type === "월세" ? (b.monthly || 0) : b.price;
        return priceA - priceB;
      });
      break;
    case "price-desc":
      sorted.sort((a, b) => {
        const priceA = a.type === "월세" ? (a.monthly || 0) : a.price;
        const priceB = b.type === "월세" ? (b.monthly || 0) : b.price;
        return priceB - priceA;
      });
      break;
    case "area-asc":
      sorted.sort((a, b) => a.exclusiveM2 - b.exclusiveM2);
      break;
    case "area-desc":
      sorted.sort((a, b) => b.exclusiveM2 - a.exclusiveM2);
      break;
  }

  return sorted;
}

/**
 * Get property by ID
 */
export function getPropertyById(
  properties: Property[],
  id: string
): Property | undefined {
  return properties.find((p) => p.id === id);
}

/**
 * Get related properties (same category or nearby price range)
 */
export function getRelatedProperties(
  properties: Property[],
  currentProperty: Property,
  limit: number = 4
): Property[] {
  return properties
    .filter((p) => p.id !== currentProperty.id)
    .filter(
      (p) =>
        p.category === currentProperty.category ||
        p.type === currentProperty.type
    )
    .slice(0, limit);
}
