import Header from "../_components/Header";
import ScheduleSection from "../_components/ScheduleSection";
import Footer from "../_components/Footer";

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
