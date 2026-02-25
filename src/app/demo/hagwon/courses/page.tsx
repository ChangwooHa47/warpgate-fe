import Header from "../_components/Header";
import CourseSection from "../_components/CourseSection";
import Footer from "../_components/Footer";

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
