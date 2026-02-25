import Header from "@/components/Header";
import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <CourseSection />
      </main>
      <Footer />
    </div>
  );
}
