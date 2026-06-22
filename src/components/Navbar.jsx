import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
               className="h-20 w-auto object-contain"
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
                <div className="absolute top-full top-10 left-0 bg-white shadow-xl rounded-2xl w-64 py-3">

                  <Link
                    to="/products/head-protection"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Helmets
                  </Link>

                  <Link
                    to="/products/foot-protection"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Shoes
                  </Link>

                  <Link
                    to="/products/hand-protection"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Safety Gloves
                  </Link>

                  <Link

                  
                    to="/products/body-protection"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Reflective Jackets
                  </Link>

                  <Link
                    to="/products/fall-protection"
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

            <Link to="/blog" className="hover:text-yellow-500">
              Blog
            </Link>

            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>

          </nav>

          {/* Desktop Buttons */}
          {/* Desktop Right Side */}
<div className="hidden md:flex items-center gap-4">

  {/* Social Icons */}
  <div className="flex gap-2">

    <a
      href="https://www.facebook.com/bigelephantsafety"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#1877F2] hover:text-white transition flex items-center justify-center font-bold"
    >
      <FaFacebookF size={15} />
    </a>

    <a
      href="https://www.linkedin.com/in/maxx-challenger-55ba95415/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0A66C2] hover:text-white transition flex items-center justify-center font-bold text-sm"
    >
     <FaLinkedinIn size={15} />
    </a>

  </div>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/918328310975"
    target="_blank"
    className="border border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition"
  >
    WhatsApp
  </a>

  {/* Get Quote */}
  <a
    href="/contact"
    className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
  >
    Get Quote
  </a>

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