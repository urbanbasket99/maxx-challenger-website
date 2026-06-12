import helmet1 from "../assets/helmets/helmet1.jpg";
import helmet2 from "../assets/helmets/helmet2.jpg";
import helmet3 from "../assets/helmets/helmet3.jpg";
import helmet4 from "../assets/helmets/helmet4.jpg";

import CTA from "../components/CTA";
import { motion } from "framer-motion";

const helmets = [
  {
    name: "Industrial Safety Helmet",
    image: helmet1,
    desc: "Premium quality industrial safety helmet for workplace protection.",
  },
  {
    name: "Construction Safety Helmet",
    image: helmet2,
    desc: "Strong and durable helmet suitable for construction industries.",
  },
  {
    name: "Heavy Duty Safety Helmet",
    image: helmet3,
    desc: "Designed for high impact resistance and worker safety.",
  },
  {
    name: "Industrial Load Carry Helmet",
    image: helmet4,
    desc: "Comfortable and reliable protection for industrial use.",
  },
];

function SafetyHelmets() {
  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-24 text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Safety Helmets
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Premium industrial safety helmets designed
            for construction, factories, manufacturing
            and industrial workplaces.
          </p>

        </div>

      </section>

      {/* Products */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {helmets.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0B1F3A]">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {item.desc}
                  </p>

                  <a
                    href="https://wa.me/918328310975"
                    target="_blank"
                    className="inline-block mt-6 bg-yellow-400 px-5 py-3 rounded-full font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                  >
                    WhatsApp Inquiry
                  </a>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Why Choose Our Safety Helmets?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-[#F8FAFC] p-8 rounded-[30px] shadow-md">
              ✔ High Impact Resistance
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-[30px] shadow-md">
              ✔ Comfortable Fit
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-[30px] shadow-md">
              ✔ Industrial Grade Protection
            </div>

          </div>

        </div>

      </section>

      <CTA />

    </div>
  );
}

export default SafetyHelmets;