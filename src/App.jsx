import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About-Us";
import WhySection from "./components/WhySection";
import Products from "./pages/Our-Products";
import Contact from "./pages/Contact-Us";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="why"><WhySection /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
