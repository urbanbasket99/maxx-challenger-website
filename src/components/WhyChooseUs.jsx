import { ShieldCheck, Truck, PackageCheck, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Premium Quality",
    desc: "High-quality industrial safety products built for maximum protection.",
  },
  {
    icon: <Truck size={40} />,
    title: "Fast Delivery",
    desc: "Quick supply and timely delivery for bulk industrial orders.",
  },
  {
    icon: <PackageCheck size={40} />,
    title: "Bulk Orders",
    desc: "Special pricing and supply support for large business requirements.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Trusted Since 2014",
    desc: "Serving industries with trusted safety solutions for over 10 years.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
            Why Industries Trust Maxx Challenger
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            We provide reliable industrial safety products
            with quality assurance, bulk supply support,
            and trusted service across industries.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;