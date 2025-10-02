import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        <div className="text-xl font-bold text-green-700">BRAYLOBO</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="font-semibold text-gray-700 hover:text-green-700">Home</a>
          <a href="/about-us" className="font-semibold text-gray-700 hover:text-green-700">About Us</a>
          <a href="/our-products" className="font-semibold text-gray-700 hover:text-green-700">Our Products</a>
          <a href="/contact" className="font-semibold text-gray-700 hover:text-green-700">Contact Us</a>
        </div>

        {/* Tombol menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {/* icon burger */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="/" className="font-semibold block text-gray-700 hover:text-green-700">Home</a>
          <a href="/about-us" className="font-semibold block text-gray-700 hover:text-green-700">About Us</a>
          <a href="/our-products" className="font-semibold block text-gray-700 hover:text-green-700">Our Products</a>
          <a href="/contact" className="font-semibold block text-gray-700 hover:text-green-700">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
