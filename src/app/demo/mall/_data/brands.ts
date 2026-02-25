export interface Brand {
  name: string;
  category: string;
}

export const ALL_BRANDS: Brand[] = [
  { name: "CHANEL", category: "Fashion" },
  { name: "LOUIS VUITTON", category: "Fashion" },
  { name: "HERMÈS", category: "Fashion" },
  { name: "DIOR", category: "Beauty" },
  { name: "GUCCI", category: "Fashion" },
  { name: "PRADA", category: "Fashion" },
  { name: "CARTIER", category: "Jewelry" },
  { name: "TIFFANY & CO.", category: "Jewelry" },
  { name: "BURBERRY", category: "Fashion" },
  { name: "SAINT LAURENT", category: "Fashion" },
  { name: "BOTTEGA VENETA", category: "Fashion" },
  { name: "BALENCIAGA", category: "Fashion" },
  { name: "CELINE", category: "Fashion" },
  { name: "LOEWE", category: "Fashion" },
  { name: "VALENTINO", category: "Fashion" },
  { name: "FENDI", category: "Fashion" },
  { name: "GIVENCHY", category: "Fashion" },
  { name: "TOM FORD", category: "Beauty" },
  { name: "BULGARI", category: "Jewelry" },
  { name: "VAN CLEEF & ARPELS", category: "Jewelry" },
  { name: "PIAGET", category: "Watch" },
  { name: "OMEGA", category: "Watch" },
  { name: "ROLEX", category: "Watch" },
  { name: "LA MER", category: "Beauty" },
];

export const PREVIEW_BRANDS = ALL_BRANDS.slice(0, 4);
