import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-green-700">SMARTECH</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="font-semibold text-gray-700 hover:text-green-700">
            Home
          </a>
          <a href="#about" className="font-semibold text-gray-700 hover:text-green-700">
            About Us
          </a>
          <a href="#products" className="font-semibold text-gray-700 hover:text-green-700">
            Our Products
          </a>
          <a href="#contact" className="font-semibold text-gray-700 hover:text-green-700">
            Contact Us
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // burger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="font-semibold block text-gray-700 hover:text-green-700"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="font-semibold block text-gray-700 hover:text-green-700"
          >
            About Us
          </a>
          <a
            href="#products"
            onClick={() => setIsOpen(false)}
            className="font-semibold block text-gray-700 hover:text-green-700"
          >
            Our Products
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-semibold block text-gray-700 hover:text-green-700"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
