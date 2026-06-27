import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>

          <img
            src={Logo}
            alt="Maxx Challenger"
            className="h-20 bg-white p-2 rounded-xl"
          />

          <p className="text-gray-300 mt-6 leading-8">
            Maxx Challenger Safety Products is a trusted
            manufacturer and supplier of industrial safety
            products in Hyderabad since 2014.
          </p>
          <div className="flex gap-4 mt-6">

  <a
    href="https://www.facebook.com/bigelephantsafety"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] transition duration-300 text-white font-bold text-lg w-12 h-12 flex items-center justify-center"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/maxx-challenger-55ba95415/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:bg-[#0A66C2] transition duration-300 text-white font-bold text-sm w-12 h-12 flex items-center justify-center"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://wa.me/918328310975"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition duration-300 w-12 h-12 flex items-center justify-center"
  >
    💬
  </a>

</div>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>

            <Link to="/products" className="hover:text-yellow-400 transition">
              Products
            </Link>

            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
            <Link
  to="/blog"
  className="hover:text-yellow-400 transition"
>
  Blog
</Link>

          </div>

        </div>

        {/* Products */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Products
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <Link
              to="products/head-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Helmets
            </Link>

            <Link
              to="products/foot-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Shoes
            </Link>
        
            <Link
              to="products/foot-protection"
              className="hover:text-yellow-400 transition"
            >
              PVC Gumboots
            </Link>

          </div>

        </div>

        {/* Contact Info */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex gap-4">
              <MapPin className="text-yellow-400" />
              <p>
                Plot No 1021, Rami Reddy Nagar,
                Jeedimetla, Hyderabad,
                Telangana - 500055
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="text-yellow-400" />
              <a
                href="tel:+918328310975"
                className="hover:text-yellow-400"
              >
                +91 8328310975
              </a>
            </div>

            <div className="flex gap-4">
              <Mail className="text-yellow-400" />
              <a
                href="mailto:maxxchallengersafety@gmail.com"
                className="hover:text-yellow-400 break-all"
              >
                maxxchallengersafety@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <Clock className="text-yellow-400" />
              <p>
                Mon - Sun : 9 AM - 8 PM
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © 2026 Maxx Challenger Safety Products.
            All Rights Reserved.
          </p>

          <p>
            Designed with ❤️ for Industrial Safety
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;