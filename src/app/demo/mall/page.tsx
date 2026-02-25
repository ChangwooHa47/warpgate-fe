import HeroSlider from "./_components/HeroSlider";
import HomeShoppingPreview from "./_components/ShoppingPreview";
import HomeBrandPreview from "./_components/BrandPreview";
import HomeStorePreview from "./_components/StorePreview";
import HomeMagazinePreview from "./_components/MagazinePreview";
import HomeCulturePreview from "./_components/CulturePreview";

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
