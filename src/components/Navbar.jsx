import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center h-[90px]">

          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Maxx Challenger"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">

            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>

            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >

              <button className="flex items-center gap-1 hover:text-yellow-500">
                Products
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
                <div className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl w-64 py-3">

                  <Link
                    to="/products/safety-helmets"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Helmets
                  </Link>

                  <Link
                    to="/products/safety-shoes"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Shoes
                  </Link>

                  <Link
                    to="/products/safety-gloves"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Gloves
                  </Link>

                  <Link
                    to="/products/reflective-jackets"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Reflective Jackets
                  </Link>

                  <Link
                    to="/products/gumboots"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    PVC Gumboots
                  </Link>

                  <Link
                    to="/products/road-safety"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Road Safety Products
                  </Link>

                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">

            <a
              href="https://wa.me/918328310975"
              target="_blank"
              className="border border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold"
            >
              WhatsApp
            </a>

            <button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold">
              Get Quote
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-6 space-y-4">

          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMobileMenu(false)}>
            About
          </Link>

          <div className="font-semibold text-gray-500 pt-2">
            Products
          </div>

          <div className="pl-4 flex flex-col gap-3">

            <Link
              to="/products/safety-helmets"
              onClick={() => setMobileMenu(false)}
            >
              Safety Helmets
            </Link>

            <Link
              to="/products/safety-shoes"
              onClick={() => setMobileMenu(false)}
            >
              Safety Shoes
            </Link>

            <Link
              to="/products/safety-gloves"
              onClick={() => setMobileMenu(false)}
            >
              Safety Gloves
            </Link>

            <Link
              to="/products/reflective-jackets"
              onClick={() => setMobileMenu(false)}
            >
              Reflective Jackets
            </Link>

            <Link
              to="/products/gumboots"
              onClick={() => setMobileMenu(false)}
            >
              PVC Gumboots
            </Link>

            <Link
              to="/products/road-safety"
              onClick={() => setMobileMenu(false)}
            >
              Road Safety Products
            </Link>

          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </Link>

          <a
            href="https://wa.me/918328310975"
            target="_blank"
            className="block text-center bg-green-500 text-white py-3 rounded-full"
          >
            WhatsApp
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;