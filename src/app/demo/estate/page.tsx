import Hero from "./_components/home/Hero";
import FeaturedProperties from "./_components/home/FeaturedProperties";
import AreaIntro from "./_components/home/AreaIntro";
import Stats from "./_components/home/Stats";

export const metadata = {
  title: "강남부동산 - 프리미엄 부동산 서비스",
  description: "강남/서초 지역 전문 부동산 - 아파트, 빌라, 오피스텔 매매, 전세, 월세",
};

export default function EstatePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AreaIntro />
      <Stats />
    </>
  );
}
