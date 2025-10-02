import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Konten halaman About Us */}
        <section className="container mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
            nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
            Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi,
            sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
            Sed dapibus pulvinar nibh tempor porta.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}