import { motion } from "framer-motion";

import gallery1 from "../assets/gallery/gallery1.jpeg";
import Gumboot1 from "../assets/gallery/Gumboot1.jpeg";
import helmet1 from "../assets/gallery/helmet1.jpeg";
import helmet2 from "../assets/gallery/helmet2.jpeg";
import helmet3 from "../assets/gallery/helmet3.jpeg";
import maxxchallengerbislab from "../assets/gallery/maxxchallengerbislab.jpg";
import safetyshoes1 from "../assets/gallery/safetyshoes1.jpeg";

const images = [
  gallery1,
  Gumboot1,
  helmet1,
  helmet2,
  helmet3,
  maxxchallengerbislab,
  safetyshoes1,
];

function Gallery() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-500 font-bold uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="text-5xl font-bold text-[#0B1F3A] mt-4">
             Inside Maxx Challenger Manufacturing Facility
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
           Take a closer look at our manufacturing unit, production process, quality inspection,
  warehousing, and infrastructure. Every safety product is manufactured and inspected
  with strict quality standards before being supplied to customers across India.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl shadow-lg bg-white"
            >

              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[320px] object-cover hover:scale-110 duration-500"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;