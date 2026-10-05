import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const locations = [
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Secunderabad", slug: "secunderabad" },
  { name: "Vijayawada", slug: "vijayawada" },
  { name: "Visakhapatnam", slug: "visakhapatnam" },
  { name: "Warangal", slug: "warangal" },
  { name: "Guntur", slug: "guntur" },
];

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Company Info */}
        <div className="lg:col-span-1">

          <img
            src={Logo}
            alt="Maxx Challenger Safety Products"
            className="h-20 bg-white p-2 rounded-xl"
          />

          <p className="text-gray-300 mt-6 leading-8">
            Maxx Challenger Safety Products is a trusted
            manufacturer and supplier of industrial safety
            products in Hyderabad since 2014.
          </p>

          <div className="flex gap-4 mt-6">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/bigelephantsafety"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maxx Challenger Facebook"
              className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] transition duration-300 text-white font-bold text-lg w-12 h-12 flex items-center justify-center"
            >
              <FaFacebookF size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/maxx-challenger-55ba95415/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maxx Challenger LinkedIn"
              className="bg-white/10 p-3 rounded-full hover:bg-[#0A66C2] transition duration-300 text-white font-bold text-sm w-12 h-12 flex items-center justify-center"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918328310975"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Maxx Challenger on WhatsApp"
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

            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              className="hover:text-yellow-400 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/gallery"
              className="hover:text-yellow-400 transition"
            >
              Gallery
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
              to="/products/head-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Helmets
            </Link>

            <Link
              to="/products/foot-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Shoes
            </Link>

            <Link
              to="/pvc-gumboots"
              className="hover:text-yellow-400 transition"
            >
              PVC Gumboots
            </Link>

            <Link
              to="/products/hand-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Gloves
            </Link>

            <Link
              to="/products/body-protection"
              className="hover:text-yellow-400 transition"
            >
              Reflective Jackets
            </Link>

          </div>

        </div>

        {/* Service Locations */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Service Locations
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <MapPin
                  size={15}
                  className="text-yellow-400 shrink-0"
                />

                <span>
                  Safety Products in {location.name}
                </span>
              </Link>
            ))}

          </div>

        </div>

        {/* Contact Info */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">

            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-yellow-400 shrink-0" />

              <p>
                Plot No 1021 & 1022, Rami Reddy Nagar,
                Jeedimetla, Hyderabad,
                Telangana - 500055
              </p>
            </div>

            {/* Phone 1 */}
            <div className="flex gap-4">
              <Phone className="text-yellow-400 shrink-0" />

              <a
                href="tel:+918328310975"
                className="hover:text-yellow-400 transition"
              >
                +91 8328310975
              </a>
            </div>

            {/* Phone 2 */}
            <div className="flex gap-4">
              <Phone className="text-yellow-400 shrink-0" />

              <a
                href="tel:+917386510084"
                className="hover:text-yellow-400 transition"
              >
                +91 7386510084
              </a>
            </div>

            {/* Phone 3 */}
            <div className="flex gap-4">
              <Phone className="text-yellow-400 shrink-0" />

              <a
                href="tel:+919121190033"
                className="hover:text-yellow-400 transition"
              >
                +91 9121190033
              </a>
            </div>

            {/* Phone 4 */}
            <div className="flex gap-4">
              <Phone className="text-yellow-400 shrink-0" />

              <a
                href="tel:+919885097894"
                className="hover:text-yellow-400 transition"
              >
                +91 9885097894
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="text-yellow-400 shrink-0" />

              <a
                href="mailto:maxxchallengersafety@gmail.com"
                className="hover:text-yellow-400 break-all transition"
              >
                maxxchallengersafety@gmail.com
              </a>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4">
              <Clock className="text-yellow-400 shrink-0" />

              <p>
                Mon - Sun : 9 AM - 8 PM
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Popular Searches */}
      <div className="border-t border-gray-700 pt-8 mt-10">

        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Searches
          </h3>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">

            <Link
              to="/industrial-safety-products-hyderabad"
              className="hover:text-yellow-400 transition"
            >
              Industrial Safety Products
            </Link>

            <Link
              to="/products/head-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Helmets
            </Link>

            <Link
              to="/products/foot-protection"
              className="hover:text-yellow-400 transition"
            >
              Safety Shoes
            </Link>

            <Link
              to="/pvc-gumboots"
              className="hover:text-yellow-400 transition"
            >
              PVC Gumboots
            </Link>

            <Link
              to="/blog"
              className="hover:text-yellow-400 transition"
            >
              Safety Blog
            </Link>

            <Link
              to="/locations/hyderabad"
              className="hover:text-yellow-400 transition"
            >
              Safety Products Hyderabad
            </Link>

            <Link
              to="/locations/secunderabad"
              className="hover:text-yellow-400 transition"
            >
              Safety Products Secunderabad
            </Link>

            <Link
              to="/locations/vijayawada"
              className="hover:text-yellow-400 transition"
            >
              Safety Products Vijayawada
            </Link>

            <Link
              to="/locations/visakhapatnam"
              className="hover:text-yellow-400 transition"
            >
              Safety Products Visakhapatnam
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 mt-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © {new Date().getFullYear()} Maxx Challenger Safety Products.
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