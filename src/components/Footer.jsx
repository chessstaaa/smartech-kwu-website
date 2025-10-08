import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ubah jadi object biar ada id dan label
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Contact Us", href: "#contact" },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4 text-center">
        
        {/* Brand Name */}
        <h2 className="text-4xl font-semibold mb-6 text-cyan-700">
          SMARTECH
        </h2>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex justify-center gap-x-6 sm:gap-x-8 text-sm sm:text-base uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-cyan-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-x-4 mb-10">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 rounded-full p-3 transition-all duration-300 hover:bg-cyan-700 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          Copyright ©{currentYear} All rights reserved | Made by{" "}
          <a href="" className="text-cyan-700 hover:underline">
            Smartech Company
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
