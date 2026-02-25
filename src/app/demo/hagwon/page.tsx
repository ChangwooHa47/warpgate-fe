import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import PhilosophySection from "./_components/PhilosophySection";
import ProgramSection from "./_components/ProgramSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProgramSection />
      </main>
      <Footer />
    </div>
  );
}
