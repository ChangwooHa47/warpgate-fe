import "./hospital.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function HospitalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-demo="hospital" lang="ko" className="antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
