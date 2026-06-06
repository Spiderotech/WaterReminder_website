import { useState } from "react";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Features", to: "features" },
    { name: "How It Works", to: "about" },
    { name: "Benefits", to: "download" },
    { name: "Testimonials", to: "blogs" },
    { name: "FAQ", to: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex h-20 items-center justify-between gap-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={logoImg} alt="DoraDrink logo" className="h-10 w-auto" />
              <span className="text-2xl font-extrabold text-blue-600">DoraDrink</span>
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-bold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-slate-900 transition hover:text-blue-600"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
           
            <ScrollLink
              to="download"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
            >
              Download App
              <FaCloudArrowDown />
            </ScrollLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-full bg-blue-50 px-3 py-2 text-blue-700 hover:bg-blue-100"
              aria-label="Open navigation menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white p-5 md:hidden">
          <button onClick={toggleMenu} className="mb-6 self-end" aria-label="Close navigation menu">
            <IoCloseOutline className="text-2xl" />
          </button>
          <ul className="flex flex-col items-center gap-4 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
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
