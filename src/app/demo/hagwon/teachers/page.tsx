import Header from "../_components/Header";
import TeacherSection from "../_components/TeacherSection";
import Footer from "../_components/Footer";

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <TeacherSection />
      </main>
      <Footer />
    </div>
  );
}
