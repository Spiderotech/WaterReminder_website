import React from "react";
import logoImg from "../assets/logo.png"; // replace with your actual logo path

const SimpleHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Name */}
          <a
            className="flex items-center space-x-2 text-teal-600"
            href="/"
          >
            <span className="sr-only">Home</span>
            <img src={logoImg} alt="DoraDrink Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold text-gray-900">
              DoraDrink
            </span>
          </a>

          {/* Home Link */}
          <a
            href="/"
            className="text-gray-600 font-semibold hover:text-blue-600 transition"
          >
            Home
          </a>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
