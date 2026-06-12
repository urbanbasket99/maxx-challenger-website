import HeroImage from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="bg-yellow-400 text-[#0B1F3A] px-5 py-2 rounded-full text-sm font-semibold">
            Trusted Since 2014
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            Complete Industrial
            <span className="text-yellow-500">
              {" "}Safety Solutions
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Maxx Challenger Safety Products is a trusted
            manufacturer & supplier of industrial safety
            equipment including helmets, gloves, jackets,
            safety shoes, gumboots, and road safety products.
          </p>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border">
              ✔ Manufacturer & Supplier
            </div>

            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border">
              ✔ Bulk Orders
            </div>

            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border">
              ✔ Hyderabad Based
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-yellow-400 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Explore Products
            </button>

            <button className="bg-[#0B1F3A] text-white px-8 py-4 rounded-full hover:bg-black transition duration-300 shadow-lg">
              Request Quote
            </button>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>

          <img
            src={HeroImage}
            alt="Industrial Safety"
            className="relative rounded-[35px] shadow-2xl object-cover w-full h-[350px] md:h-[600px]"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;