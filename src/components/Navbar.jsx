import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-[90px]">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Maxx Challenger Safety Products"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium relative">

            <Link
              to="/"
              className="hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-500 transition duration-300"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >

              <button className="flex items-center gap-1 hover:text-yellow-500 transition duration-300">

                Products

                <ChevronDown size={18} />

              </button>

              {showDropdown && (
                <div className="absolute top-10 left-0 w-72 bg-white rounded-[25px] shadow-2xl border border-gray-100 py-4 z-50">

                  <Link
                    to="/products/safety-helmets"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    Safety Helmets
                  </Link>

                  <Link
                    to="/products/safety-shoes"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    Safety Shoes
                  </Link>

                  <Link
                    to="/products/safety-gloves"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    Safety Gloves
                  </Link>

                  <Link
                    to="/products/reflective-jackets"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    Reflective Jackets
                  </Link>

                  <Link
                    to="/products/gumboots"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    PVC Gumboots
                  </Link>

                  <Link
                    to="/products/road-safety"
                    className="block px-6 py-3 hover:bg-[#F8FAFC] hover:text-yellow-500"
                  >
                    Road Safety Products
                  </Link>

                </div>
              )}

            </div>

            <Link
              to="/contact"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact
            </Link>

          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/918328310975"
              target="_blank"
              className="hidden md:flex border border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition"
            >
              WhatsApp
            </a>

            <button className="bg-yellow-400 px-5 md:px-6 py-3 rounded-full font-semibold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition duration-300 shadow-md">
              Get Quote
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;