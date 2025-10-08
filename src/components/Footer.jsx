export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Kolom 1 */}
        <div>
          <h3 className="text-green-700 font-semibold text-lg mb-3">
            PT Smartech Indonesia
          </h3>
          <p>Bojongsantos Street No. 82, Bandung, West Java</p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-green-700 font-semibold text-lg mb-3">
            Working Hours
          </h3>
          <p>Monday – Saturday: 08:00 – 16:00</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-green-700 font-semibold text-lg mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#about" className="hover:text-green-600">About Us</a></li>
            <li><a href="#products" className="hover:text-green-600">Our Products</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © PT Smartech Indonesia 2025 — All Rights Reserved
      </div>
    </footer>
  );
}
