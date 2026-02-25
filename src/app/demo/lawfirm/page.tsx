import HeroSection from "./_components/HeroSection";
import PracticeAreasPreview from "./_components/PracticeAreasPreview";
import AttorneyPreview from "./_components/AttorneyPreview";
import CasesPreview from "./_components/CasesPreview";
import ConsultationCTA from "./_components/ConsultationCTA";

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
