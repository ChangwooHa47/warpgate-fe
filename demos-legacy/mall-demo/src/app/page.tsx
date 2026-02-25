import HeroSlider from "@/components/HeroSlider";
import HomeShoppingPreview from "@/components/home/ShoppingPreview";
import HomeBrandPreview from "@/components/home/BrandPreview";
import HomeStorePreview from "@/components/home/StorePreview";
import HomeMagazinePreview from "@/components/home/MagazinePreview";
import HomeCulturePreview from "@/components/home/CulturePreview";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <HomeShoppingPreview />
      <HomeBrandPreview />
      <HomeStorePreview />
      <HomeCulturePreview />
      <HomeMagazinePreview />
    </>
  );
}
