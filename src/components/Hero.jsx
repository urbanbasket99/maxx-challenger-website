import HeroImage from "../assets/hero.png";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07152A] via-[#0B1F3A] to-[#122C53] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400 opacity-10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#0B1F3A] px-5 py-3 rounded-full font-semibold shadow-lg">

            <BadgeCheck size={20} />

            Trusted Since 2014

          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-8">

            Premium Industrial
            <span className="text-yellow-400">
              {" "}Safety Products
            </span>

            <br />

            For Every Workplace

          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-2xl">
            Maxx Challenger Safety Products is a trusted
            manufacturer and supplier of industrial safety
            equipment in Hyderabad, offering helmets,
            safety shoes, gloves, jackets, gumboots and
            road safety products.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3">

              <ShieldCheck className="text-yellow-400" />

              Premium Quality

            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3">

              <Truck className="text-yellow-400" />

              Fast Delivery

            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3">

              <BadgeCheck className="text-yellow-400" />

              Bulk Orders

            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/products"
              className="bg-yellow-400 text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-xl"
            >
              Explore Products
            </a>

            <a
              href="https://wa.me/918328310975"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0B1F3A] transition duration-300"
            >
              WhatsApp Inquiry
            </a>

          </div>

        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          {/* Floating Stats Card */}
          <div className="absolute top-8 -left-8 bg-white rounded-[30px] shadow-2xl p-6 z-20 hidden md:block">

            <h3 className="text-4xl font-bold text-[#0B1F3A]">
              10+
            </h3>

            <p className="text-gray-500">
              Years Experience
            </p>

          </div>

          {/* Main Image */}
          <img
            src={HeroImage}
            alt="Industrial Safety"
            className="rounded-[40px] shadow-2xl w-full h-[350px] md:h-[650px] object-cover border border-white/10"
          />

          {/* Floating Card */}
          <div className="absolute bottom-12 right-15 bg-yellow-400 rounded-[25px] shadow-2xl p-6 hidden md:block">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              1000+
            </h3>

            <p className="text-[#0B1F3A] font-medium">
              Happy Customers
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;