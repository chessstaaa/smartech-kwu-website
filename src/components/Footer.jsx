export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h4 className="font-semibold text-lg mb-3">PT Smartech Indonesia</h4>
          <p>Bojongsantos Street No.82, Bandung, West Java</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Working Hours</h4>
          <p>Monday - Saturday: 08:00 - 16:00</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Menu</h4>
          <ul className="text-left space-y-2 m-0 p-0 list-none">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/our-products" className="hover:underline">Our Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4">
        © PT Smartech Indonesia © 2025 All Rights Reserved
      </div>
    </footer>
  );
}