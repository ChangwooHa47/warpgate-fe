import Header from "@/components/Header";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
}
