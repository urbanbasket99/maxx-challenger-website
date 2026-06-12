import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-24 bg-[#0B1F3A] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-[40px] px-8 md:px-16 py-16 shadow-2xl text-center md:text-left"
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <span className="uppercase tracking-widest font-semibold text-[#0B1F3A]">
                Get In Touch
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4 leading-tight">
                Looking for Premium Industrial Safety Products?
              </h2>

              <p className="text-[#0B1F3A] mt-5 text-lg leading-8">
                Contact Maxx Challenger Safety Products
                today for quality industrial safety
                equipment and bulk orders.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col md:items-end gap-5">

              <a
                href="tel:+918328310975"
                className="bg-[#0B1F3A] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-black transition"
              >
                <PhoneCall size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/918328310975"
                target="_blank"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
              >
                WhatsApp Inquiry
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;