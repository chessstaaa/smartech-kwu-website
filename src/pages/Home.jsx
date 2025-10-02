import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhySection />
        {/* bisa ditambahkan section lain sesuai desain */}
      </main>
      <Footer />
    </div>
  );
}