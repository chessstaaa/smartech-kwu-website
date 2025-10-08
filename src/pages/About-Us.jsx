export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8 text-justify">
          SMARTECH is a technology company dedicated to developing innovative, high-quality products that improve everyday life.
          We focus on creating smart solutions for modern challenges, empowering individuals and businesses through advanced technology,
          and delivering reliable products that set new standards in the industry.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-cyan-700 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To provide smart, reliable, and user-friendly technology solutions for everyone.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-cyan-700 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become a leading innovator in the technology industry, shaping the future with cutting-edge products.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-cyan-700 mb-2">Our Values</h3>
            <p className="text-gray-600 text-sm">
              Innovation, quality, and integrity — we are committed to making a positive impact through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
