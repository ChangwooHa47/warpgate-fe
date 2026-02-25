import Header from "@/components/Header";
import TeacherSection from "@/components/TeacherSection";
import Footer from "@/components/Footer";

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
