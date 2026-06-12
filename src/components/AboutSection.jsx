import StoreImage from "../assets/store.jpg";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={StoreImage}
            alt="Maxx Challenger Safety Products"
            className="w-full rounded-[35px] shadow-2xl object-cover h-[350px] md:h-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            About Company
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4 leading-tight">
            Trusted Industrial Safety Partner Since 2014
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Maxx Challenger Safety Products is a trusted
            manufacturer and supplier of industrial safety
            products in Hyderabad, Telangana.
          </p>

          <p className="text-gray-600 mt-4 text-lg leading-8">
            We specialize in premium industrial safety
            equipment including safety helmets, gloves,
            reflective jackets, safety shoes, gumboots,
            and road safety products.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-white rounded-2xl p-5 shadow-md">
              ✔ Premium Products
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md">
              ✔ Bulk Orders
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md">
              ✔ Fast Delivery
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md">
              ✔ Trusted Supplier
            </div>

          </div>

          <button className="mt-10 bg-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-[#0B1F3A] hover:text-white transition duration-300 shadow-lg">
            Learn More
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutSection;