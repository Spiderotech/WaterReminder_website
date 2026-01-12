import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Features", to: "features" },
    { name: "About", to: "about" },
    { name: "Download", to: "download" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
    { name: "Blogs", to: "blogs" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={logoImg} alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">DoraDrink</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-70} // adjust for sticky header height
                    className="cursor-pointer text-gray-500 hover:text-gray-900 transition"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col p-4">
          <button onClick={toggleMenu} className="self-end mb-6">
            <IoCloseOutline className="text-2xl" />
          </button>
          <ul className="flex flex-col items-center gap-4 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
                  onClick={toggleMenu}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
