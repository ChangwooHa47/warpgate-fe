import { Property, PropertyFilter } from "./types";
import { matchesFloorLevel, buildSearchableText } from "./utils";

export function filterProperties(
  properties: Property[],
  filter: PropertyFilter,
  query: string
): Property[] {
  const q = query.toLowerCase();

  const filtered = properties.filter((p) => {
    if (p.category !== filter.category) return false;
    if (!filter.type.includes(p.type)) return false;
    if (p.price < filter.priceMin || p.price > filter.priceMax) return false;
    if (p.areaM2Supply < filter.areaMin || p.areaM2Supply > filter.areaMax) return false;
    if (filter.region && !p.address.includes(filter.region)) return false;

    if (filter.floor && !matchesFloorLevel(p.floor, filter.floor)) return false;

    if (filter.roomCount) {
      const rc = p.roomCount ?? 0;
      if (filter.roomCount === "1룸" && rc !== 1) return false;
      if (filter.roomCount === "2룸" && rc !== 2) return false;
      if (filter.roomCount === "3룸" && rc !== 3) return false;
      if (filter.roomCount === "4룸+" && rc < 4) return false;
    }

    if (q) {
      const searchable = buildSearchableText(p);
      if (!searchable.includes(q)) return false;
    }

    return true;
  });

  return sortProperties(filtered, filter.sortBy);
}

function sortProperties(
  properties: Property[],
  sortBy: PropertyFilter["sortBy"]
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "area-desc":
      sorted.sort((a, b) => b.areaM2Supply - a.areaM2Supply);
      break;
    case "newest":
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      break;
  }

  return sorted;
}
