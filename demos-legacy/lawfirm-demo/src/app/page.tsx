import HeroSection from "@/components/home/HeroSection";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import AttorneyPreview from "@/components/home/AttorneyPreview";
import CasesPreview from "@/components/home/CasesPreview";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreasPreview />
      <AttorneyPreview />
      <CasesPreview />
      <ConsultationCTA />
    </>
  );
}
